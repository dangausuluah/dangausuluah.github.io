---
layout: article
title: Keadaan Murni dan Campuran
category: Foundations
subcategory: Postulat
level: Fundamental
order: 30
date: 2026-06-18
updated: 2026-06-18
featured: false
excerpt: Perbedaan antara keadaan murni yang direpresentasikan oleh vektor keadaan dan keadaan campuran yang direpresentasikan oleh operator densitas.
---

Keadaan murni (en: pure state) adalah keadaan kuantum yang dapat direpresentasikan secara lengkap oleh satu vektor keadaan:

$$
|\psi\rangle.
$$

Untuk keadaan murni, representasi operator densitasnya adalah:

$$
\rho = |\psi\rangle\langle\psi|.
$$

Keadaan campuran (en: mixed state) muncul ketika sistem tidak berada dalam satu keadaan murni tertentu, tetapi dalam campuran statistik dari beberapa kemungkinan keadaan.

Jika keadaan $|\psi_k\rangle$ muncul dengan peluang $p_k$, maka operator densitasnya adalah:

$$
\rho = \sum_k p_k |\psi_k\rangle\langle\psi_k|.
$$

Dengan syarat:

$$
p_k \geq 0, \qquad \sum_k p_k = 1.
$$

Operator densitas yang valid harus memenuhi:

- $\rho \geq 0$,
- $\mathrm{Tr}(\rho)=1$.

Keadaan murni dan campuran penting dalam sains informasi kuantum karena sistem nyata sering mengalami noise, kehilangan informasi, atau interaksi dengan lingkungan. Dalam kondisi seperti itu, representasi vektor keadaan saja tidak selalu cukup.
