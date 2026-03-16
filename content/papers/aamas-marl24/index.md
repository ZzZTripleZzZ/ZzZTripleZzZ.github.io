---
title: "Sample and Communication Efficient Fully Decentralized MARL Policy Evaluation via a New Approach: Local TD Update"
date: 2024-05-01
tags: ["Multi-Agent Reinforcement Learning", "Policy Evaluation", "Decentralized Learning", "TD Learning"]
author: ["Hairi", "Z. Zhang", "J. Liu"]
venue: "International Conference on Autonomous Agents and Multiagent Systems"
venueShort: "AAMAS 2024"
tldr: "Introduces a local TD-update approach for decentralized MARL policy evaluation that simultaneously reduces both sample complexity and communication overhead, with finite-time convergence guarantees."
pdf: "https://arxiv.org/pdf/2403.15935"
arxiv: "https://arxiv.org/abs/2403.15935"
papertype: "Conference"
citations: 5
award: ""
bibtex: |
  @inproceedings{hairi2024sample,
    title     = {Sample and Communication Efficient Fully Decentralized MARL Policy Evaluation via a New Approach: Local TD Update},
    author    = {Hairi and Zhang, Zifan and Liu, Jia},
    booktitle = {International Conference on Autonomous Agents and Multiagent Systems (AAMAS)},
    year      = {2024}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2403.15935)
+ [arXiv](https://arxiv.org/abs/2403.15935)

---

##### Abstract

In actor-critic framework for fully decentralized multi-agent reinforcement learning (MARL), one of the key components is the MARL policy evaluation (PE) problem, where a set of N agents work cooperatively to evaluate the value function of the global states for a given policy through communicating with their neighbors. In MARL-PE, a critical challenge is how to lower the sample and communication complexities, which are defined as the number of training samples and communication rounds needed to converge to some ε-stationary point. To lower communication complexity in MARL-PE, a "natural" idea is to perform multiple local TD-update steps between each consecutive rounds of communication to reduce the communication frequency. However, the validity of the local TD-update approach remains unclear due to the potential "agent-drift" phenomenon resulting from heterogeneous rewards across agents in general. This leads to an interesting open question: Can the local TD-update approach entail low sample and communication complexities? In this paper, we make the first attempt to answer this fundamental question. We focus on the setting of MARL-PE with average reward, which is motivated by many multi-agent network optimization problems. Our theoretical and experimental results confirm that allowing multiple local TD-update steps is indeed an effective approach in lowering the sample and communication complexities of MARL-PE compared to consensus-based MARL-PE algorithms.
