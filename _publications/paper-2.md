---
title: "Sample and Communication Efficient Fully Decentralized MARL Policy Evaluation via a New Approach: Local TD update"
collection: publications
# permalink: /publication/paper-2
authors: 'FNU Hairi, Z. Zhang, J. Liu'
year: 2024
journal: 'International Conference on Autonomous Agents and Multiagent Systems (AAMAS) 2024'
---
In actor-critic framework for fully decentralized multi-agent reinforcement learning (MARL), one of the key components is the MARL policy evaluation (PE) problem, where a set of $N$ agents work cooperatively to evaluate the value function of the global states for a given policy through communicating with their neighbors.
In MARL-PE, a critical challenge is how to lower the sample and communication complexities, which are defined as the number of training samples and communication rounds needed to converge to some $\epsilon$-stationary point.
To lower communication complexity in MARL-PE, a natural idea is to perform multiple local TD-update steps between each consecutive rounds of communication to reduce the communication frequency. However, the validity of the local TD-update approach remains unclear due to the potential ``agent-drift'' phenomenon resulting from heterogeneous rewards across agents in general.
This leads to an interesting open question: {\em Can the local TD-update approach entail low sample and communication complexities?} In this paper, we make the first attempt to answer this fundamental question.
We focus on the setting of MARL-PE with average reward, which is motivated by many multi-agent network optimization problems.
Our theoretical and experimental results confirm that allowing multiple local TD-update steps is indeed an effective approach in lowering the sample and communication complexities of MARL-PE compared to consensus-based MARL-PE algorithms.
Specifically, the local TD-update steps between two consecutive communication rounds can be as large as
$\mathcal{O}(1/\epsilon^{1/2}\log{(1/\epsilon)})$ in order to converge to an $\epsilon$-stationary point of MARL-PE.
Moreover, we show theoretically that in order to reach the optimal sample complexity, the communication complexity of local TD-update approach is $\mathcal{O}(1/\epsilon^{1/2}\log{(1/\epsilon)})$.