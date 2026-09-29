---
title: "OpenTwin: Closed-Loop Digital Twins for Trustworthy Policy Deployment in Open RAN"
date: 2026-05-23
tags: ["Digital Twin", "O-RAN", "xApp", "Conformal Prediction"]
author: ["Z. Zhang", "M. S. Hossen", "D. Ron", "V. K. Shah", "Y. Liu"]
venue: "Preprint"
venueShort: "Preprint 2026"
tldr: "A closed-loop O-RAN digital twin that learns its simulator configuration from live measurements, calibrates itself online, and gates each xApp action with a conformal fidelity check whose false-approval rate stays within an operator-set budget."
pdf: "https://arxiv.org/pdf/2605.24662"
arxiv: "https://arxiv.org/abs/2605.24662"
papertype: "Preprint"
bibtex: |
  @article{zhang2026opentwin,
    title   = {OpenTwin: Closed-Loop Digital Twins for Trustworthy Policy Deployment in Open RAN},
    author  = {Zhang, Zifan and Hossen, Md Sharif and Ron, Dara and Shah, Vijay K. and Liu, Yuchen},
    journal = {arXiv preprint arXiv:2605.24662},
    year    = {2026}
  }
---

##### Download

+ [Paper](https://arxiv.org/pdf/2605.24662)
+ [arXiv](https://arxiv.org/abs/2605.24662)

---

##### Abstract

In open radio access networks (O-RAN), the near-real-time RAN Intelligent Controller (RIC) hosts third-party xApps whose training and validation risk disrupting the operational network. Disaggregation amplifies this risk, as no single party can certify a control action end to end. Indeed, our testbed shows an E2 control request reported as successful while the base station never applies the change. Digital twins (DTs) promise safe policy evaluation, yet existing O-RAN DTs largely rely on hand-crafted models, run without feedback from the deployment, and never say how often their predictions can be trusted. To fill this gap, we present OpenTwin, a closed-loop framework that learns the simulator configuration reproducing an operating deployment streamed measurements, certifies the resulting DT by re-simulation, calibrates it online, and evaluates each xApp action before it executes on the physical network. Every trust decision carries an error rate bounded by an operator-prescribed budget, with a drift detector limiting needless resynchronizations and a conformal fidelity gate admitting an action only when its predicted outcome range lies in the safe region. Extensive experiments across simulation and real-world testbeds confirm single-digit percentage error in reproduced measurements, false approvals an order of magnitude below every budget from 0.05 to 0.30, and a gated energy-saving xApp that retains roughly 40% of the saving achievable with perfect foresight.
