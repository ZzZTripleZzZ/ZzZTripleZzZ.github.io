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

# Maps Google Scholar titles (lowercase) to exact frontmatter titles used on the website
TITLE_MAP = {
    "byzantine-robust decentralized federated learning": "Toward Byzantine-Robust Decentralized Federated Learning",
    "digital twin-assisted data-driven optimization for reliable edge caching in wireless networks": "Digital Twin-Assisted Data-Driven Optimization for Reliable Edge Caching in Wireless Networks",
    "poisoning attacks on federated learning-based wireless traffic prediction": "Poisoning Attacks on Federated Learning-based Wireless Traffic Prediction",
    "securing distributed network digital twin systems against model poisoning attacks": "Securing Distributed Network Digital Twin Systems Against Model Poisoning Attacks",
    "mapping wireless networks into digital reality through joint vertical and horizontal learning": "Mapping Wireless Networks into Digital Reality through Joint Vertical and Horizontal Learning",
    "digital network twins for next-generation wireless: creation, optimization, and challenges": "Digital Network Twins for Next-Generation Wireless: Creation, Optimization, and Challenges",
    "sample and communication efficient fully decentralized marl policy evaluation via a new approach: local td update": "Sample and Communication Efficient Fully Decentralized MARL Policy Evaluation via a New Approach: Local TD Update",
    "synergizing ai and digital twins for next-generation network optimization, forecasting, and security": "Synergizing AI and Digital Twins for Next-Generation Network Optimization, Forecasting, and Security",
    "on the hardness of decentralized multi-agent policy evaluation under byzantine attacks": "On the Hardness of Decentralized Multi-Agent Policy Evaluation under Byzantine Attacks",
    "poisoning attacks and defenses to federated unlearning": "Poisoning Attacks and Defenses to Federated Unlearning",
    "digital twins in intelligent transportation and communication systems: a survey": "Digital Twins in Intelligent Transportation and Communication Systems: A Survey",
}


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
                normalized = TITLE_MAP.get(title.lower(), title)
                paper_counts[normalized] = cites

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
