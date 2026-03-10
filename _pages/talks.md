---
layout: archive
title: "Talks"
permalink: /talks/
author_profile: true
---

<div class="talk-card" data-aos="fade-up">
  <div class="talk-header">
    <span class="talk-title">Digital Network Twins</span>
    <span class="talk-venue-badge">ATS Seminar Series @ ORNL</span>
  </div>
  <button class="talk-toggle" onclick="toggleAbstract(this)" aria-expanded="false">
    <span class="toggle-icon">▶</span> Show Abstract
  </button>
  <div class="talk-abstract">
    Digital Network Twins (DNTs) are virtual representations of physical networks and offer promising solutions for managing complex network environments, especially when combined with machine learning methods like federated learning (FL) and reinforcement learning (RL). In this talk, we will discuss how DNTs address pressing challenges in advanced networks such as 6G. FL allows for decentralized model training, which improves data privacy and reduces communication demands by enabling devices to train locally. RL supports autonomous decision-making, helping networks respond to changes in traffic and system demands in real time. This approach addresses important goals like reliable data forecasting, efficient resource use, and enhanced security. We will also introduce practical applications, including edge caching and secure vehicle networks, highlighting how these methods shape adaptive network systems with stronger automation, reliability, and security.
  </div>
</div>

<div class="talk-card" data-aos="fade-up">
  <div class="talk-header">
    <span class="talk-title">Digital Network Twins for HPC Systems</span>
    <span class="talk-venue-badge">Digital Twins Workshop for HPC @ SC25</span>
  </div>
  <button class="talk-toggle" onclick="toggleAbstract(this)" aria-expanded="false">
    <span class="toggle-icon">▶</span> Show Abstract
  </button>
  <div class="talk-abstract">
    This talk outlines a holistic framework for network digital twins (DNTs) in high-performance computing, covering construction (topology/telemetry ingestion and calibration), optimization (distributed and regional DT orchestration), and application. The approach integrates federated learning for privacy-preserving model updates and reinforcement learning for closed-loop control, enabling real-time adaptation to traffic and system dynamics. Case studies—including workload forecasting, congestion-aware routing, and anomaly detection—demonstrate gains in utilization, reliability, and security, with portability to edge and 6G-class environments.
  </div>
</div>

<script>
function toggleAbstract(btn) {
  var abstract = btn.nextElementSibling;
  var isOpen = btn.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    abstract.style.display = 'none';
    btn.setAttribute('aria-expanded', 'false');
    btn.classList.remove('open');
    btn.innerHTML = '<span class="toggle-icon">▶</span> Show Abstract';
  } else {
    abstract.style.display = 'block';
    btn.setAttribute('aria-expanded', 'true');
    btn.classList.add('open');
    btn.innerHTML = '<span class="toggle-icon" style="display:inline-block;transform:rotate(90deg)">▶</span> Hide Abstract';
  }
}
</script>
