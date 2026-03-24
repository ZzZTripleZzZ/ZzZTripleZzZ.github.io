---
title: "Securing Distributed Network Digital Twin Systems Against Model Poisoning Attacks"
date: 2024-07-01
tags: ["Digital Twin", "Security", "Federated Learning", "Poisoning Attacks"]
author: ["Z. Zhang", "M. Fang", "M. Chen", "G. Li", "X. Lin", "Y. Liu"]
venue: "IEEE Internet of Things Journal"
venueShort: "IoT-J 2024"
tldr: "First systematic study of model poisoning attacks on distributed network digital twin systems; proposes a two-stage defense framework combining anomaly detection and robust aggregation that restores NDT accuracy under attack."
pdf: "https://arxiv.org/pdf/2407.01917"
arxiv: "https://arxiv.org/abs/2407.01917"
papertype: "Journal"
citations: 11
award: ""
bibtex: |
  @article{zhang2024securing,
    title={Securing Distributed Network Digital Twin Systems Against Model Poisoning Attacks},
    author={Zhang, Zifan and Fang, Minghong and Chen, Mingzhe and Li, Gaolei and Lin, Xi and Liu, Yuchen},
    journal={IEEE Internet of Things Journal},
    volume={11},
    number={21},
    pages={34312--34324},
    year={2024},
    publisher={IEEE},
    doi={10.1109/JIOT.2024.3421895}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2407.01917)
+ [arXiv](https://arxiv.org/abs/2407.01917)

---

##### Abstract

In the era of 5G and beyond, the increasing complexity of wireless networks necessitates innovative frameworks for efficient management and deployment. Digital twins (DTs), embodying real-time monitoring, predictive configurations, and enhanced decision-making capabilities, stand out as a promising solution in this context. Within a time-series data-driven framework that effectively maps wireless networks into digital counterparts, encapsulated by integrated vertical and horizontal twinning phases, this study investigates the security challenges in distributed network DT systems, which potentially undermine the reliability of subsequent network applications such as wireless traffic forecasting. Specifically, we consider a minimal-knowledge scenario for all attackers, in that they do not have access to network data and other specialized knowledge, yet can interact with previous iterations of server-level models. In this context, we spotlight a novel fake traffic injection attack designed to compromise a distributed network DT system for wireless traffic prediction. In response, we then propose a defense mechanism, termed global-local inconsistency detection (GLID), to counteract various model poisoning threats. GLID strategically removes abnormal model parameters that deviate beyond a particular percentile range, thereby fortifying the security of network twinning process. Through extensive experiments on real-world wireless traffic datasets, our experimental evaluations show that both our attack and defense strategies significantly outperform existing baselines, highlighting the importance of security measures in the design and implementation of DTs for 5G and beyond network systems.
