---
title: "Efficient Hierarchical Transformers for Representing Log Data"
date: 2026-10-05
tags: ["Transformers", "Log Data", "Representation Learning", "Anomaly Detection", "Long Context"]
author: ["Z. Hou", "M. Ghashami", "M. Kuznetsov", "Z. Zhang", "A. Torkamani"]
venue: "The Third Workshop on Long-Context Foundation Models (LCFM) at NeurIPS"
venueShort: "LCFM @ NeurIPS 2026"
tldr: "HLogformer is a hierarchical transformer for dictionary-like log data: it follows the nested structure of log entries instead of flattening them, which cuts memory costs on long log sequences and improves representations for anomaly detection and product recommendation."
pdf: "https://arxiv.org/pdf/2408.16803"
arxiv: "https://arxiv.org/abs/2408.16803"
papertype: "Workshop"
award: ""
bibtex: |
  @inproceedings{hou2026hlogformer,
    title={Efficient Hierarchical Transformers for Representing Log Data},
    author={Hou, Zhichao and Ghashami, Mina and Kuznetsov, Mikhail and Zhang, Zifan and Torkamani, Ali},
    booktitle={NeurIPS 2026 Workshop on Long-Context Foundation Models (LCFM)},
    year={2026},
    note={arXiv:2408.16803}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2408.16803)
+ [arXiv](https://arxiv.org/abs/2408.16803)
+ [Workshop](https://neurips.cc/virtual/2026/workshop/137572)

---

##### Abstract

Transformers have gained widespread acclaim for their versatility in handling diverse data structures, yet their application to log data remains underexplored. Log data, characterized by its hierarchical, dictionary-like structure, poses unique challenges when processed using conventional transformer models. Traditional methods often rely on manually crafted templates for parsing logs, a process that is labor-intensive and lacks generalizability. Additionally, the linear treatment of log sequences by standard transformers neglects the rich, nested relationships within log entries, leading to suboptimal representations and excessive memory usage. To address these issues, we introduce HLogformer, a novel hierarchical transformer framework specifically designed for log data. HLogformer leverages the hierarchical structure of log entries to significantly reduce memory costs and enhance representation learning. Unlike traditional models that treat log data as flat sequences, our framework processes log entries in a manner that respects their inherent hierarchical organization. This approach ensures comprehensive encoding of both fine-grained details and broader contextual relationships. Our contributions are threefold: First, HLogformer is the first framework to design a dynamic hierarchical transformer tailored for dictionary-like log data. Second, it dramatically reduces memory costs associated with processing extensive log sequences. Third, comprehensive experiments demonstrate that HLogformer more effectively encodes hierarchical contextual information, proving to be highly effective for downstream tasks such as synthetic anomaly detection and product recommendation.
