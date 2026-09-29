---
title: "Securing Autonomous Vehicle Systems via Twin-Aware Federated Reinforcement Learning"
date: 2026-07-09
tags: ["Federated Reinforcement Learning", "Poisoning Attacks", "Digital Twin", "Autonomous Driving"]
author: ["Z. Zhang", "M. Fang", "D. Chen", "Z. Liu", "P. Khanduri", "X. Yang", "A. Das", "Y. Liu"]
venue: "Preprint"
venueShort: "Preprint 2026"
tldr: "Proposes SecApp, a twin-aware defense for federated reinforcement learning in autonomous driving that uses digital-twin rehearsal and historical aggregates to filter poisoned updates, with convergence guarantees under attack."
pdf: "https://arxiv.org/pdf/2607.08137"
arxiv: "https://arxiv.org/abs/2607.08137"
papertype: "Preprint"
bibtex: |
  @article{zhang2026securing,
    title   = {Securing Autonomous Vehicle Systems via Twin-Aware Federated Reinforcement Learning},
    author  = {Zhang, Zifan and Fang, Minghong and Chen, Dianwei and Liu, Zhuqing and Khanduri, Prashant and Yang, Xianfeng and Das, Anupam and Liu, Yuchen},
    journal = {arXiv preprint arXiv:2607.08137},
    year    = {2026}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2607.08137)
+ [arXiv](https://arxiv.org/abs/2607.08137)

---

##### Abstract

Federated reinforcement learning (FRL) is crucial for enabling collaborative learning across multiple agents without sharing raw data, thereby enhancing privacy and scalability in the decision-making process within dynamic vehicular environments. However, poisoning attacks pose a significant threat to the security and reliability of FRL-based systems, particularly in safety-critical autonomous driving, where this vulnerability remains largely unexplored. These attacks can compromise the global control model by subtly injecting malicious system parameters, leading to potential hazards. To counter these challenges, we present SecApp (Secure Aggregation with poisoning-prevention and historical reinforcement) as a defensive framework aimed at enhancing the robustness of FRL systems designed for safety-critical driving scenarios. SecApp strategically integrates digital twins for rehearsal-based learning and leverages historical aggregated model parameters along with a selected central gradient to ensure that only benign data is aggregated, effectively mitigating the influence of malicious agents. Theoretical guarantees are provided for the convergence performance of SecApp in the presence of poisoning attacks. We also validate the effectiveness of SecApp using developed digital twins that model realistic highway environments to evaluate the control of autonomous vehicles under adversarial conditions.
