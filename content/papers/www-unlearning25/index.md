---
title: "Poisoning Attacks and Defenses to Federated Unlearning"
date: 2025-01-01
tags: ["Federated Learning", "Machine Unlearning", "Security", "Poisoning Attacks"]
author: ["W. Wang", "Q. Ma", "Z. Zhang", "Y. Liu", "Z. Liu", "M. Fang"]
venue: "Companion Proceedings of The ACM Web Conference"
venueShort: "WWW 2025"
tldr: "Reveals that federated unlearning is vulnerable to poisoning attacks that manipulate what gets forgotten, and proposes defense strategies to restore the integrity of the unlearning process."
pdf: "https://arxiv.org/pdf/2501.17396"
arxiv: "https://arxiv.org/abs/2501.17396"
papertype: "Workshop"
citations: 8
award: ""
bibtex: |
  @inproceedings{wang2025poisoning,
    title     = {Poisoning Attacks and Defenses to Federated Unlearning},
    author    = {Wang, Wenbo and Ma, Qiang and Zhang, Zifan and Liu, Yuchen and Liu, Zhifeng and Fang, Minghong},
    booktitle = {Companion Proceedings of the ACM on Web Conference 2025},
    pages     = {1365--1369},
    year      = {2025}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2501.17396)
+ [arXiv](https://arxiv.org/abs/2501.17396)

---

##### Abstract

Federated learning allows multiple clients to collaboratively train a global model with the assistance of a server. However, its distributed nature makes it susceptible to poisoning attacks, where malicious clients can compromise the global model by sending harmful local model updates to the server. To unlearn an accurate global model from a poisoned one after identifying malicious clients, federated unlearning has been introduced. Yet, current research on federated unlearning has primarily concentrated on its effectiveness and efficiency, overlooking the security challenges it presents. In this work, we bridge the gap via proposing BadUnlearn, the first poisoning attacks targeting federated unlearning. In BadUnlearn, malicious clients send specifically designed local model updates to the server during the unlearning process, aiming to ensure that the resulting unlearned model remains poisoned. To mitigate these threats, we propose UnlearnGuard, a robust federated unlearning framework that is provably robust against both existing poisoning attacks and our BadUnlearn. The core concept of UnlearnGuard is for the server to estimate the clients' local model updates during the unlearning process and employ a filtering strategy to verify the accuracy of these estimations. Theoretically, we prove that the model unlearned through UnlearnGuard closely resembles one obtained by train-from-scratch. Empirically, we show that BadUnlearn can effectively corrupt existing federated unlearning methods, while UnlearnGuard remains secure against poisoning attacks.
