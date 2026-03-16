---
title: "Digital Twin-Assisted Data-Driven Optimization for Reliable Edge Caching in Wireless Networks"
date: 2024-05-01
tags: ["Digital Twin", "Edge Caching", "Reinforcement Learning", "Wireless Networks"]
author: ["Z. Zhang", "Y. Liu", "Z. Peng", "M. Chen", "D. Xu", "S. Cui"]
venue: "IEEE Journal on Selected Areas in Communications"
venueShort: "JSAC 2024"
tldr: "Uses a network digital twin as a risk-free simulation environment to train a reinforcement learning agent for edge caching, achieving reliable content placement without disrupting live network operations."
pdf: "https://arxiv.org/pdf/2407.00286"
arxiv: "https://arxiv.org/abs/2407.00286"
papertype: "Journal"
citations: 28
award: ""
bibtex: |
  @article{zhang2024digital,
    title   = {Digital Twin-Assisted Data-Driven Optimization for Reliable Edge Caching in Wireless Networks},
    author  = {Zhang, Zifan and Liu, Yuchen and Peng, Zijian and Chen, Mingzhe and Xu, Daquan and Cui, Shuguang},
    journal = {IEEE Journal on Selected Areas in Communications},
    volume  = {42},
    number  = {11},
    pages   = {3306--3320},
    year    = {2024}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2407.00286)
+ [arXiv](https://arxiv.org/abs/2407.00286)

---

##### Abstract

Optimizing edge caching is crucial for the advancement of next-generation (nextG) wireless networks, ensuring high-speed and low-latency services for mobile users. Existing data-driven optimization approaches often lack awareness of the distribution of random data variables and focus solely on optimizing cache hit rates, neglecting potential reliability concerns, such as base station overload and unbalanced cache issues. This oversight can result in system crashes and degraded user experience. To bridge this gap, we introduce a novel digital twin-assisted optimization framework, called D-REC, which integrates reinforcement learning (RL) with diverse intervention modules to ensure reliable caching in nextG wireless networks. We first develop a joint vertical and horizontal twinning approach to efficiently create network digital twins, which are then employed by D-REC as RL optimizers and safeguards, providing ample datasets for training and predictive evaluation of our cache replacement policy. By incorporating reliability modules into a constrained Markov decision process, D-REC can adaptively adjust actions, rewards, and states to comply with advantageous constraints, minimizing the risk of network failures. Theoretical analysis demonstrates comparable convergence rates between D-REC and vanilla data-driven methods without compromising caching performance. Extensive experiments validate that D-REC outperforms conventional approaches in cache hit rate and load balancing while effectively enforcing predetermined reliability intervention modules.
