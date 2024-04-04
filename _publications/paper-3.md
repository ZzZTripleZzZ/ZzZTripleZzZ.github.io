---
title: "Toward Byzantine-Robust Decentralized Federated Learning"
collection: publications
permalink: /publication/paper-3
excerpt: 'M. Fang, Z. Zhang, Hairi, P. Khanduri, J. Liu, S. Lu, Y. Liu, Z. Gong'
date: 2024-10-14
venue: 'The 31th ACM Conference on Computer and Communications Security (CCS) 2024'
---
Federated learning (FL) enables multiple clients to collaboratively train machine learning models without revealing their private training data.
In conventional FL, the system follows the server-assisted architecture (server-assisted FL), where the training process is coordinated by a central server.
However, the server-assisted FL framework suffers from poor scalability due to a communication bottleneck at the server, and trust dependency issues.
To address challenges, decentralized federated learning (DFL) architecture has been proposed to allow clients to train models collaboratively in a serverless and peer-to-peer manner.
However, due to its fully decentralized nature, DFL is highly vulnerable to poisoning attacks, where malicious clients could manipulate the system by sending carefully-crafted local models to their neighboring clients.
To date, only a limited number of Byzantine-robust DFL methods have been proposed, most of which are either communication-inefficient or remain vulnerable to advanced poisoning attacks.  
In this paper, we propose a new algorithm called \alg (\underline{B}yzantine-robust \underline{a}veraging through \underline{l}ocal simil\underline{a}rity i\underline{n} de\underline{ce}ntralization) to defend against poisoning attacks in DFL.
In \algns, each client leverages its own local model as a similarity reference to determine if the received model is malicious or benign.
We establish the theoretical convergence guarantee for \alg under poisoning attacks in both strongly convex and non-convex settings. 
Furthermore, the convergence rate of \alg under poisoning attacks matches those of the state-of-the-art counterparts in Byzantine-free settings.
Extensive experiments also verify that \alg outperforms existing DFL methods and effectively defends against poisoning attacks.
