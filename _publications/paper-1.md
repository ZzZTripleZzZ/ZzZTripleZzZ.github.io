---
title: "Communication Efficiency and Security for Multi-Agent Reinforcement Learning"
collection: publications
permalink: /publication/paper-1
excerpt: 'Z. Zhang'
date: 2023-06-01
venue: 'OhioLink'
# paperurl: 'https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=osu1681483595435088&disposition=inline'

---
In multi-agent reinforcement learning (MARL) settings, there are various strategies that
are quite effective. One the of key components among these strategies is the policy
evaluation (PE) part of consensus-based actor-critic (AC) algorithms. In PE problems,
agents are trained with a given policy and share their observations or states with neighbors,
while the policy remains fixed over time. However, two significant challenges arise in such
a setting: ensuring secure communications and lowering communication complexity. In
real-life scenarios, communications face security risks, with Byzantine attacks being the
most common type of attack. Malicious agents can generate arbitrary values to deceive
honest agents, resulting in serious training failures such as incorrect models, privacy
leakage, and hardware malfunction. To address this, cooperative MARL settings
commonly use universal aggregation rules, such as mean or median aggregation, to filter
out or minimize the impact of suspicious values. Additionally, two natural ideas to reduce
communication complexity in policy evaluation settings are using batch sampling to reduce
the variance of Temporal Difference (TD) errors and local training steps between
communication rounds. Although local training may slightly reduce training accuracy, it
significantly lowers communication frequency and allows for faster training than vanilla
strategies. While TD learning with batching has been explored in previous work, we focus
on TD learning with local updates in this paper. Specifically, we investigate the robustness of several algorithms against Byzantine attacks in a consensus-based MARL-PE
cooperative setting and study the potential of local training in reducing communication
complexity. Experiments on cooperative navigation tasks have been conducted to support
our investigations and compared the results with baseline algorithms.
