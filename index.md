---
layout: default
title: Home
permalink: /
---

<section class="hero">
  <div class="hero-card">
    <div class="eyebrow">Quantum Information Science</div>

    <h1>Notes on <strong>qubits</strong>, information, and quantum systems.</h1>

    <p class="lead">
      A curated collection of explanations, visual notes, tutorials, and references on quantum information science:
      from basic qubits and measurement to entanglement, quantum channels, and quantum communication.
    </p>

    <div class="hero-actions">
      <a class="btn btn-primary" href="{{ '/contents/' | relative_url }}">Browse Contents</a>
      <a class="btn btn-secondary" href="{{ '/concepts/' | relative_url }}">Explore Concepts</a>
    </div>
  </div>

  <aside class="side-card">
    <h3>Site Focus</h3>

    <div class="stats">
      <div class="stat">
        <strong>Qubits</strong>
        <span>States, gates, and measurement</span>
      </div>

      <div class="stat">
        <strong>Entanglement</strong>
        <span>Correlations beyond classical systems</span>
      </div>

      <div class="stat">
        <strong>Channels</strong>
        <span>Noise, decoherence, and communication</span>
      </div>
    </div>
  </aside>
</section>

<div class="section-title">
  <h2>Featured Content</h2>
  <p>Click a preview to open the full content.</p>
</div>

<div class="grid">
  {% assign featured_items = site.contents | where: "featured", true %}
  {% for item in featured_items %}
    {% include content-card.html item=item %}
  {% endfor %}
</div>
