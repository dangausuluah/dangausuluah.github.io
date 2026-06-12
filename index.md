---
layout: default
title: Home
permalink: /
---

<section class="hero">
  <div class="hero-card">
    <div class="eyebrow">DangauSuluah</div>

    <h1>Pandangan <strong>abal-abal</strong> tentang sedikit hal.</h1>

    <p class="lead">
      Kumpulan pandangan, catatan, tutorial, dll tentang informasi kuantum.
    </p>

    <div class="hero-actions">
      <a class="btn btn-primary" href="{{ '/contents/' | relative_url }}">Jelajahi Konten</a>
      <a class="btn btn-secondary" href="{{ '/concepts/' | relative_url }}">Telusuri Konsep</a>
    </div>
  </div>

  <aside class="side-card">
    <h3>Topik Utama</h3>
  
    <div class="stats">
      <div class="stat">
        <strong>Keterikatan</strong>
        <span>Korelasi kuantum nonklasik</span>
      </div>
  
      <div class="stat">
        <strong>Evolusi</strong>
        <span>Dinamika perubahan keadaan kuantum</span>
      </div>
  
      <div class="stat">
        <strong>Pengukuran</strong>
        <span>Ekstraksi informasi keadaan kuantum</span>
      </div>
    </div>
  </aside>
</section>

<div class="section-title">
  <h2>Konten Pilihan</h2>
  <p>Klik pratinjau untuk membuka konten lengkap.</p>
</div>

<div class="grid">
  {% assign featured_items = site.contents | where: "featured", true %}
  {% for item in featured_items %}
    {% include content-card.html item=item %}
  {% endfor %}
</div>
