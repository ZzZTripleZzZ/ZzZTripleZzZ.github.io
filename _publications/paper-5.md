---
title: "Poisoning Attacks on Federated Learning-based Wireless Traffic Prediction"
collection: publications
permalink: /publication/paper-5
excerpt: 'Z. Zhang, M. Fang, J. Huang, Y. Liu'
date: 2024-06-03
venue: 'IFIP/IEEE Networking'
---
Federated Learning (FL) offers a distributed framework to train a global control model across multiple base stations without compromising the privacy of their local network data. This makes it ideal for applications like wireless traffic prediction (WTP), which plays a crucial role in optimizing network resources, enabling proactive traffic flow management, and enhancing the reliability of downstream communication-aided applications, such as IoT devices, autonomous vehicles, and industrial automation systems. Despite its promise, the security aspects of FL-based distributed wireless systems, particularly in regression-based WTP problems, remain inadequately investigated. In this paper, we introduce a novel fake traffic injection (FTI) attack, designed to undermine the FL-based WTP system by injecting fabricated traffic distributions with minimal knowledge. We further propose a defense mechanism, termed global-local inconsistency detection (GLID), which strategically removes abnormal model parameters that deviate beyond a specific percentile range estimated through statistical methods in each dimension. Extensive experimental evaluations, performed on real-world wireless traffic datasets, demonstrate that both our attack and defense strategies significantly outperform existing baselines.