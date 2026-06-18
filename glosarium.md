---
layout: default
title: Glosarium
permalink: /glosarium/
---

<div class="section-title">
  <h1>Glosarium</h1>
  <p>Peta istilah Indonesia–Inggris untuk konsep utama dalam sains informasi kuantum.</p>
</div>

<div class="glossary-list">
  {% assign terms = site.data.glossary | sort: "id_term" %}

  {% for term in terms %}
    <div class="glossary-item" id="{{ term.id }}">
      <div>
        <h3>{{ term.id_term }}</h3>
        <p>{{ term.definition }}</p>
      </div>

      <div class="glossary-meta">
        <span>{{ term.en_term }}</span>
        <small>{{ term.category }}</small>
      </div>
    </div>
  {% endfor %}
</div>
