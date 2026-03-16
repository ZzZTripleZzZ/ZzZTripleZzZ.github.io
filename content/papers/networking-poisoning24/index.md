---
title: "Poisoning Attacks on Federated Learning-based Wireless Traffic Prediction"
date: 2024-06-01
tags: ["Federated Learning", "Security", "Wireless Networks", "Traffic Prediction"]
author: ["Z. Zhang", "M. Fang", "J. Huang", "Y. Liu"]
venue: "IFIP/IEEE Networking Conference"
venueShort: "IFIP Networking 2024"
tldr: "Demonstrates that wireless traffic prediction models trained via federated learning are highly vulnerable to data poisoning, and proposes a detection-and-mitigation scheme tailored to the spatio-temporal structure of network traffic."
pdf: "https://arxiv.org/pdf/2404.14389"
arxiv: "https://arxiv.org/abs/2404.14389"
papertype: "Conference"
citations: 16
award: "Best Paper Award Runner-up"
bibtex: |
  @inproceedings{zhang2024poisoning,
    title     = {Poisoning Attacks on Federated Learning-based Wireless Traffic Prediction},
    author    = {Zhang, Zifan and Fang, Minghong and Huang, Jiannan and Liu, Yuchen},
    booktitle = {2024 IFIP Networking Conference (IFIP Networking)},
    pages     = {423--431},
    year      = {2024}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2404.14389)
+ [arXiv](https://arxiv.org/abs/2404.14389)

---

##### Abstract

Federated Learning (FL) offers a distributed framework to train a global control model across multiple base stations without compromising the privacy of their local network data. This makes it ideal for applications like wireless traffic prediction (WTP), which plays a crucial role in optimizing network resources, enabling proactive traffic flow management, and enhancing the reliability of downstream communication-aided applications, such as IoT devices, autonomous vehicles, and industrial automation systems. Despite its promise, the security aspects of FL-based distributed wireless systems, particularly in regression-based WTP problems, remain inadequately investigated. In this paper, we introduce a novel fake traffic injection (FTI) attack, designed to undermine the FL-based WTP system by injecting fabricated traffic distributions with minimal knowledge. We further propose a defense mechanism, termed global-local inconsistency detection (GLID), which strategically removes abnormal model parameters that deviate beyond a specific percentile range estimated through statistical methods in each dimension. Extensive experimental evaluations, performed on real-world wireless traffic datasets, demonstrate that both our attack and defense strategies significantly outperform existing baselines.
