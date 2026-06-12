---
layout: article
title: What is a Qubit?
category: Foundations
level: Beginner
order: 1
featured: true
excerpt: A short introduction to quantum states, amplitudes, normalization, and the difference between bits and qubits.
---

A qubit is the basic unit of quantum information. Unlike a classical bit, which has value 0 or 1, a qubit is represented by a quantum state.

A general pure qubit state is written as:

$$
|\psi\rangle = \alpha |0\rangle + \beta |1\rangle
$$

Here, $\alpha$ and $\beta$ are complex amplitudes.

The probabilities of measuring 0 or 1 are determined by the squared magnitudes of these amplitudes:

- $|\alpha|^2$ gives the probability of observing 0.
- $|\beta|^2$ gives the probability of observing 1.
- The normalization condition is $|\alpha|^2 + |\beta|^2 = 1$.

The important point is that a qubit is not simply “both 0 and 1.” It is a vector in a complex state space, and measurement extracts classical information from that state.
