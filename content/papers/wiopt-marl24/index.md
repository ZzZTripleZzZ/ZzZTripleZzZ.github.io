---
title: "On the Hardness of Decentralized Multi-Agent Policy Evaluation under Byzantine Attacks"
date: 2024-09-01
tags: ["Multi-Agent Reinforcement Learning", "Byzantine Attacks", "Decentralized Learning"]
author: ["M. Fang", "Z. Zhang", "A. Velasquez", "J. Liu"]
venue: "IEEE/IFIP International Symposium on Modeling and Optimization in Mobile, Ad Hoc, and Wireless Networks"
venueShort: "WiOpt 2024"
tldr: "Establishes fundamental hardness results showing that Byzantine-robust policy evaluation in fully decentralized MARL is significantly harder than in centralized or server-based settings, with theoretical lower bounds."
pdf: "https://arxiv.org/pdf/2409.12882"
arxiv: "https://arxiv.org/abs/2409.12882"
papertype: "Conference"
citations: 0
award: ""
bibtex: |
  @inproceedings{fang2024hardness,
    title     = {On the Hardness of Decentralized Multi-Agent Policy Evaluation under Byzantine Attacks},
    author    = {Fang, Minghong and Zhang, Zifan and Velasquez, Alvaro and Liu, Jia},
    booktitle = {22nd International Symposium on Modeling and Optimization in Mobile, Ad Hoc, and Wireless Networks (WiOpt)},
    year      = {2024}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2409.12882)
+ [arXiv](https://arxiv.org/abs/2409.12882)

---

##### Abstract

In this paper, we study a fully-decentralized multi-agent policy evaluation problem, which is an important sub-problem in cooperative multi-agent reinforcement learning, in the presence of up to f faulty agents. In particular, we focus on the so-called Byzantine faulty model with model poisoning setting. In general, policy evaluation is to evaluate the value function of any given policy. In cooperative multi-agent system, the system-wide rewards are usually modeled as the uniform average of rewards from all agents. We investigate the multi-agent policy evaluation problem in the presence of Byzantine agents, particularly in the setting of heterogeneous local rewards. Ideally, the goal of the agents is to evaluate the accumulated system-wide rewards, which are uniform average of rewards of the normal agents for a given policy. It means that all agents agree upon common values (the consensus part) and furthermore, the consensus values are the value functions (the convergence part). However, we prove that this goal is not achievable. Instead, we consider a relaxed version of the problem, where the goal of the agents is to evaluate accumulated system-wide reward, which is an appropriately weighted average reward of the normal agents. We further prove that there is no correct algorithm that can guarantee that the total number of positive weights exceeds |N|-f, where |N| is the number of normal agents. Towards the end, we propose a Byzantine-tolerant decentralized temporal difference algorithm that can guarantee asymptotic consensus under scalar function approximation.
