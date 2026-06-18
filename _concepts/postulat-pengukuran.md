---
layout: article
title: Postulat Pengukuran
category: Foundations
subcategory: Postulat
level: Fundamental
order: 60
date: 2026-06-18
updated: 2026-06-18
featured: false
excerpt: Postulat yang menjelaskan bagaimana informasi klasik diperoleh dari keadaan kuantum.
---

Postulat pengukuran (en: measurement postulate) menjelaskan bagaimana informasi klasik diperoleh dari keadaan kuantum.

Sebelum pengukuran, sistem kuantum direpresentasikan oleh keadaan $|\psi\rangle$. Setelah pengukuran, hanya satu hasil klasik yang diperoleh.

Dalam bentuk umum, pengukuran dapat direpresentasikan oleh sekumpulan operator pengukuran $\{M_m\}$, dengan $m$ menyatakan kemungkinan hasil pengukuran.

Peluang memperoleh hasil $m$ diberikan oleh:

$$
p(m) = \langle \psi | M_m^\dagger M_m | \psi \rangle.
$$

Setelah hasil $m$ diperoleh, keadaan sistem berubah menjadi:

$$
|\psi_m\rangle =
\frac{M_m|\psi\rangle}
{\sqrt{p(m)}}.
$$

Operator pengukuran harus memenuhi syarat kelengkapan:

$$
\sum_m M_m^\dagger M_m = I.
$$

Postulat pengukuran penting karena ia menghubungkan dunia kuantum dengan data klasik yang benar-benar dapat diamati.
