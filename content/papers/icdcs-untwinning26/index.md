---
title: "Network Digital Untwinning: Towards Backward Optimization of Digital Twins"
date: 2026-04-28
tags: ["Digital Twin", "Network Optimization", "Backward Optimization"]
author: ["Z. Zhang", "D. Chen", "A. Gao", "M. Wang", "M. Chen", "M. Fang", "X. Yang", "Y. Liu"]
venue: "IEEE International Conference on Distributed Computing Systems"
venueShort: "ICDCS 2026"
tldr: "Introduces network digital untwinning, which removes deprecated contributions from a network digital twin through checkpoint rollback and remapping, with guarantees that the result is indistinguishable from a twin rebuilt from scratch."
pdf: "https://arxiv.org/pdf/2605.00169"
arxiv: "https://arxiv.org/abs/2605.00169"
papertype: "Conference"
bibtex: |
  @inproceedings{zhang2026untwinning,
    title={Network Digital Untwinning: Towards Backward Optimization of Digital Twins},
    author={Zhang, Zifan and Chen, Dianwei and Gao, Anjun and Wang, Manhua and Chen, Mingzhe and Fang, Minghong and Yang, Xianfeng and Liu, Yuchen},
    booktitle={IEEE International Conference on Distributed Computing Systems (ICDCS)},
    year={2026}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2605.00169)
+ [arXiv](https://arxiv.org/abs/2605.00169)

---

##### Abstract

Network digital twins (NDTs) are transforming network management by offering precise virtual replicas of physical network systems. However, their reliance on diverse and sensitive data introduces significant challenges related to data management, regulatory compliance, and user privacy. In scenarios where selective data removal is necessary, such as device deactivation, network reconfiguration, or regulatory compliance, traditional approaches often fall short of preserving the integrity of the twin model. To address this gap, we introduce a network digital untwinning framework that enables the targeted removal of deprecated NDT contributions while maintaining model integrity. Our approach comprises two complementary components: Single Request Untwinning and Parallel Request Untwinning mechanisms. Single Request Untwinning leverages connectivity metrics based on geographical proximity, data distribution, and network-level attributes to identify and remove the target NDT along with its propagating influence. This is achieved through an optimally selected rollback checkpoint augmented with injected Gaussian noise, followed by a precise remapping phase. Parallel Request Untwinning extends this mechanism to efficiently handle multiple removal requests by clustering NDTs with similar attributes and performing a coordinated rollback and untwinning schedule. We provide theoretical guarantees on model indistinguishability from scratch-built twins, and validate the framework through extensive experiments on real-world traffic data, demonstrating its effectiveness and operational efficiency.
