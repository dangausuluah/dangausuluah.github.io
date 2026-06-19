---
layout: article
title: Kuantum Bit (Kubit)
concept_id: qubit
category: Foundations
subcategory: Postulat
level: Fundamental
order: 1
date: 2026-06-18
updated: 2026-06-18
featured: false
excerpt: Pengenalan singkat kondisi kuantum (quantum state), amplituda peluang (probability amplitude), kubit (qubit), dll.
related_concepts:
  - quantum-state
  - born-rule
  - probability-amplitude
---
 
Kuantum bit ({% include term.html id="qubit" %}) adalah unit informasi dasar sistem kuantum. Berbeda dengan bit klasik yang hanya memiliki nilai 0 atau 1, kubit bisa berada dalam keadaan superposisi antara {% include term.html id="quantum-state" %} 0 dan 1.

Kondisi kubit dapat ditulis seperti:

$$
|\psi\rangle = \alpha |0\rangle + \beta |1\rangle,
$$

Dimana, $\alpha$ dan $\beta$ adalah bilangan kompleks $\mathbb{C}$.

Peluang untuk mendapatkan hasil pengukuran 0 atau 1 ditentukan oleh kuadrat dari magnituda dari {% include term.html id="probability-amplitude" %}:

- $\|\alpha\|^2$ adalah peluang untuk mendapatkan hasil 0.
- $\|\beta\|^2$ adalah peluang untuk mendapatkan hasil 1.
- Berlaku normalisasi untuk tetap konsisten dengan teori peluang, $\|\alpha\|^2 + \|\beta\|^2 = 1$.

