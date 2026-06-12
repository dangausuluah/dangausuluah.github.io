---
layout: default
title: Contents
permalink: /contents/
---

<div class="section-title">
  <h1>Daftar Konten</h1>
  <p>Catatan, artikel, dan pandangan visual tentang informasi kuantum.</p>
</div>

<div class="content-list">
  {% assign items = site.contents | sort: "order" %}

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
