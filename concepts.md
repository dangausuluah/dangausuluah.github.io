---
layout: default
title: Concepts
permalink: /concepts/
---

<div class="section-title">
  <h1>Peta Konsep</h1>
</div>

<div class="content-list">
  {% assign items = site.concepts | sort: "order" %}

  {% for item in items %}
    <a class="content-item" href="{{ item.url | relative_url }}">
      <div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.excerpt }}</p>
      </div>

      <div class="content-meta">
        {{ item.level }} →
      </div>
    </a>
  {% endfor %}
</div>
