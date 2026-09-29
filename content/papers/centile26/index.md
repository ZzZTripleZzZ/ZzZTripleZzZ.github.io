---
title: "CENTILE: A Telemetry Foundation Model Evaluated by the Decisions It Drives"
date: 2026-08-03
tags: ["Foundation Model", "Telemetry", "HPC Scheduling", "Network Provisioning"]
author: ["Z. Zhang", "Z. Hou", "T. Ji", "Y. Liu"]
venue: "Preprint"
venueShort: "Preprint 2026"
tldr: "A generative foundation model for network and systems telemetry, judged by the HPC scheduling and network provisioning decisions its calibrated quantiles drive rather than by point-forecast error alone."
pdf: "https://arxiv.org/pdf/2608.01725"
arxiv: "https://arxiv.org/abs/2608.01725"
papertype: "Preprint"
bibtex: |
  @article{zhang2026centile,
    title   = {CENTILE: A Telemetry Foundation Model Evaluated by the Decisions It Drives},
    author  = {Zhang, Zifan and Hou, Zhichao and Ji, Tingxiang and Liu, Yuchen},
    journal = {arXiv preprint arXiv:2608.01725},
    year    = {2026}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2608.01725)
+ [arXiv](https://arxiv.org/abs/2608.01725)
+ [Code](https://github.com/ZzZTripleZzZ/all-in-one)

---

##### Abstract

Modern computing and networking infrastructure emits telemetry continuously, yet operators convert it into decisions with a separate predictor per task, entity, and horizon. One generative model, pretrained once over an operator's own event streams, could replace this fleet, an approach that already scales to high-cardinality streams in recommendation systems. However, point-forecast error on operational telemetry saturates near simple last-value baselines, so lower error alone need not improve the decisions it feeds. To close this gap, we present CENTILE, a generative foundation model for network and systems telemetry, evaluated by replaying the decisions its calibrated conditional quantiles drive. CENTILE treats heterogeneous telemetry as event-driven, irregularly timed entity streams and serves flexible forecast horizons in a single pass, requiring no future timestamps. To our knowledge, CENTILE is the first pretrained telemetry model to improve both HPC scheduling and network provisioning decisions under replay, its runtime estimator transferring zero-shot across months and its pretrained weights across domains from hours of target data. Extensive experiments on HPC job logs and network traffic confirm that CENTILE lowers the mean bounded slowdown of backfilling by up to approximately 77% over deployed user estimates and roughly halves the deployed rule's violation rate.
