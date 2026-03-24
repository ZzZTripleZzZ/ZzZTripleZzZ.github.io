---
title: "Mapping Wireless Networks into Digital Reality through Joint Vertical and Horizontal Learning"
date: 2024-06-02
tags: ["Digital Twin", "Wireless Networks", "Representation Learning", "Federated Learning"]
author: ["Z. Zhang", "M. Chen", "Z. Yang", "Y. Liu"]
venue: "IFIP/IEEE Networking Conference"
venueShort: "IFIP Networking 2024"
tldr: "Proposes a joint vertical-and-horizontal federated learning scheme that maps heterogeneous wireless network entities into a unified digital twin representation, enabling cross-domain synchronization and inference."
pdf: "https://arxiv.org/pdf/2404.14497"
arxiv: "https://arxiv.org/abs/2404.14497"
papertype: "Conference"
citations: 9
award: ""
bibtex: |
  @inproceedings{zhang2024mapping,
    title={Mapping Wireless Networks into Digital Reality through Joint Vertical and Horizontal Learning},
    author={Zhang, Zifan and Chen, Mingzhe and Yang, Zhaohui and Liu, Yuchen},
    booktitle={2024 IFIP Networking Conference (IFIP Networking)},
    pages={359--367},
    year={2024},
    doi={10.23919/IFIPNetworking62109.2024.10619056}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2404.14497)
+ [arXiv](https://arxiv.org/abs/2404.14497)

---

##### Abstract

In recent years, the complexity of 5G and beyond wireless networks has escalated, prompting a need for innovative frameworks to facilitate flexible management and efficient deployment. The concept of digital twins (DTs) has emerged as a solution to enable real-time monitoring, predictive configurations, and decision-making processes. While existing works primarily focus on leveraging DTs to optimize wireless networks, a detailed mapping methodology for creating virtual representations of network infrastructure and properties is still lacking. In this context, we introduce VH-Twin, a novel time-series data-driven framework that effectively maps wireless networks into digital reality. VH-Twin distinguishes itself through complementary vertical twinning (V-twinning) and horizontal twinning (H-twinning) stages, followed by a periodic clustering mechanism used to virtualize network regions based on their distinct geological and wireless characteristics. Specifically, V-twinning exploits distributed learning techniques to initialize a global twin model collaboratively from virtualized network clusters. H-twinning, on the other hand, is implemented with an asynchronous mapping scheme that dynamically updates twin models in response to network or environmental changes. Leveraging real-world wireless traffic data within a cellular wireless network, comprehensive experiments are conducted to verify that VH-Twin can effectively construct, deploy, and maintain network DTs. Parametric analysis also offers insights into how to strike a balance between twinning efficiency and model accuracy at scale.
