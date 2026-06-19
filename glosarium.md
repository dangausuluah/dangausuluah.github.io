---
layout: default
title: Glosarium
permalink: /glosarium/
---

<div class="section-title">
  <h1>Glosarium</h1>
  <p>Peta istilah Indonesia–Inggris untuk konsep utama dalam sains informasi kuantum.</p>
</div>

<div class="content-list glossary-list">
  {% assign terms = site.data.glossary | sort: "id_term" %}

  {% for term in terms %}
    {% assign concept = nil %}

    {% if term.concept_id %}
      {% assign concept = site.concepts | where: "concept_id", term.concept_id | first %}
    {% endif %}

    <div class="content-item glossary-item" id="{{ term.id }}">
      <div>
        <h3>{{ term.id_term }}</h3>
        <p>{{ term.definition }}</p>

        {% if concept %}
          <a class="inline-link" href="{{ concept.url | relative_url }}">
            Baca konsep →
          </a>
        {% endif %}
      </div>

      <div class="content-meta glossary-meta">
        <span>{{ term.en_term }}</span>
        <small>{{ term.category }}</small>
      </div>
    </div>
  {% endfor %}
</div>
