---
title: "Toward Byzantine-Robust Decentralized Federated Learning"
date: 2024-10-01
tags: ["Federated Learning", "Byzantine Robustness", "Decentralized Learning", "Security"]
author: ["M. Fang", "Z. Zhang", "Hairi", "P. Khanduri", "J. Liu", "S. Lu", "Y. Liu", "Z. Gong"]
venue: "ACM Conference on Computer and Communications Security"
venueShort: "CCS 2024"
tldr: "Provides the first theoretically-grounded Byzantine-robust algorithm for fully decentralized federated learning (no central server), closing a fundamental gap between decentralized and server-based FL robustness guarantees."
pdf: "https://arxiv.org/pdf/2406.10416"
arxiv: "https://arxiv.org/abs/2406.10416"
papertype: "Conference"
citations: 85
award: ""
bibtex: |
  @inproceedings{fang2024byzantine,
    title={Byzantine-Robust Decentralized Federated Learning},
    author={Fang, Minghong and Zhang, Zifan and Hairi and Khanduri, Prashant and Liu, Jia and Lu, Songtao and Liu, Yuchen and Gong, Neil},
    booktitle={Proceedings of the 2024 on ACM SIGSAC Conference on Computer and Communications Security},
    pages={2874--2888},
    year={2024},
    doi={10.1145/3658644.3670307}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2406.10416)
+ [arXiv](https://arxiv.org/abs/2406.10416)

---

##### Abstract

Federated learning (FL) enables multiple clients to collaboratively train machine learning models without revealing their private training data. In conventional FL, the system follows the server-assisted architecture (server-assisted FL), where the training process is coordinated by a central server. However, the server-assisted FL framework suffers from poor scalability due to a communication bottleneck at the server, and trust dependency issues. To address challenges, decentralized federated learning (DFL) architecture has been proposed to allow clients to train models collaboratively in a serverless and peer-to-peer manner. However, due to its fully decentralized nature, DFL is highly vulnerable to poisoning attacks, where malicious clients could manipulate the system by sending carefully-crafted local models to their neighboring clients. To date, only a limited number of Byzantine-robust DFL methods have been proposed, most of which are either communication-inefficient or remain vulnerable to advanced poisoning attacks. In this paper, we propose a new algorithm called BALANCE (Byzantine-robust averaging through local similarity in decentralization) to defend against poisoning attacks in DFL. In BALANCE, each client leverages its own local model as a similarity reference to determine if the received model is malicious or benign. We establish the theoretical convergence guarantee for BALANCE under poisoning attacks in both strongly convex and non-convex settings. Furthermore, the convergence rate of BALANCE under poisoning attacks matches those of the state-of-the-art counterparts in Byzantine-free settings. Extensive experiments also demonstrate that BALANCE outperforms existing DFL methods and effectively defends against poisoning attacks.
