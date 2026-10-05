---
title: "Network-in-the-Loop at Scale: GPU-Batched 5G Simulation for Massively Parallel Robot Learning"
date: 2026-10-01
tags: ["Robot Learning", "5G", "Network Simulation", "GPU", "Isaac Lab", "Open Source"]
author: ["Z. Zhang*", "M. Han*", "K. Athreya", "Y. Liu"]
venue: "Preprint"
venueShort: "Preprint 2026"
tldr: "Isaac-Net advances the 5G uplink of thousands of Isaac Lab environments slot by slot on the GPU, in lockstep with the physics: about one million robots with the network in the loop at 83% of the network-free rate, validated against ns-3 5G-LENA and the OpenAirInterface 5G stack. Open source: pip install isaac-net."
pdf: "https://arxiv.org/pdf/2610.02370"
arxiv: "https://arxiv.org/abs/2610.02370"
code: "https://github.com/ZzZTripleZzZ/isaac-net"
website: "https://isaacnet.zifanzhang.com"
papertype: "Preprint"
bibtex: |
  @article{zhang2026isaacnet,
    title   = {Network-in-the-Loop at Scale: GPU-Batched 5G Simulation for Massively Parallel Robot Learning},
    author  = {Zhang, Zifan and Han, Mingzhe and Athreya, Kannan and Liu, Yuchen},
    journal = {arXiv preprint arXiv:2610.02370},
    year    = {2026},
    note    = {Zifan Zhang and Mingzhe Han contributed equally}
  }
---

\* Equal contribution.

##### Links

+ [Paper (PDF)](https://arxiv.org/pdf/2610.02370)
+ [arXiv](https://arxiv.org/abs/2610.02370)
+ [Project page](https://isaacnet.zifanzhang.com)
+ [Code (GitHub)](https://github.com/ZzZTripleZzZ/isaac-net)
+ [Package (PyPI)](https://pypi.org/project/isaac-net/): `pip install isaac-net`

---

##### Abstract

Massively parallel GPU simulators train multi-robot policies in thousands of environments, and many fleets use private Fifth-Generation (5G) networks, where each robot's delay depends on its teammates' traffic. Network-in-the-loop training places a simulated 5G network inside this loop. However, GPU robot simulators reduce the network to an independent delay per message, while packet-level simulators run one scenario per CPU process and cannot keep pace with thousands of parallel environments. To bridge this gap, we present Isaac-Net, a GPU-batched 5G New Radio (NR) module that advances the uplink of thousands of environments in lockstep with Isaac Lab physics. Isaac-Net simulates every slot, the 0.5 ms interval in which the base station decides which robots transmit, for all environments at once. Extensive experiments confirm that its NR engine reproduces the median delay of ns-3 5G-LENA across loads, with a median delay 5-10% low on an unseen carrier and 9% high at 32 robots per environment in closed loop. The engine also reproduces the Age of Information (AoI), the age of each robot's newest delivered report, while an independent delay per message leaves the AoI tail about three times too light. In a configuration validated against 5G-LENA, Isaac-Net keeps the network in the loop for about one million robots on one GPU at 83% of the Isaac Lab rate without the network, measured under a random policy. Isaac-Net is open source at https://github.com/ZzZTripleZzZ/isaac-net.
