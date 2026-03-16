"""
Update data/citations.json with current Google Scholar citation counts.
Runs weekly via GitHub Actions. On failure, exits 0 to preserve old data.
"""

import json
import os
import sys
from datetime import date

SCHOLAR_ID = "tPkUfx4AAAAJ"
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "citations.json")


def load_existing():
    try:
        with open(OUTPUT_PATH) as f:
            return json.load(f)
    except Exception:
        return {}


def main():
    try:
        from scholarly import scholarly
    except ImportError:
        print("scholarly not installed. Exiting without update.")
        sys.exit(0)

    existing = load_existing()

    try:
        print(f"Fetching Scholar profile for ID: {SCHOLAR_ID}")
        author = scholarly.search_author_id(SCHOLAR_ID)
        scholarly.fill(author, sections=["basics", "counts", "publications"])

        paper_counts = {}
        for pub in author.get("publications", []):
            title = pub.get("bib", {}).get("title", "")
            cites = pub.get("num_citations", 0)
            if title:
                paper_counts[title] = cites

        output = {
            "total_citations": author.get("citedby", existing.get("total_citations", 0)),
            "h_index": author.get("hindex", existing.get("h_index", 0)),
            "i10_index": author.get("i10index", existing.get("i10_index", 0)),
            "last_updated": str(date.today()),
            "papers": paper_counts,
        }

        with open(OUTPUT_PATH, "w") as f:
            json.dump(output, f, indent=2)

        print(f"Success: {output['total_citations']} total citations, h-index {output['h_index']}")

    except Exception as e:
        print(f"Warning: failed to update citations ({e}). Keeping existing data.")
        sys.exit(0)


if __name__ == "__main__":
    main()
