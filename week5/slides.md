---
marp: true
theme: default
paginate: true
math: katex
---

<!-- _class: lead -->

# The Fundamental Theorem of Calculus

### Calculus I

---

# Learning Objectives

- Understand accumulation
- Learn both parts of the FTC
- Evaluate definite integrals
- Apply the theorem to examples

---

# Review

A definite integral measures accumulated change.

$$
\int_a^b f(x)\,dx
$$

---

# FTC Part I

If

$$
F(x)=\int_a^x f(t)\,dt
$$

then

$$
F'(x)=f(x)
$$

Differentiating an accumulation function recovers the original function.

---

# Example

Given

$$
F(x)=\int_0^x t^2dt
$$

Then

$$
F'(x)=x^2
$$

---

# FTC Part II

If

$$
F'(x)=f(x)
$$

then

$$
\int_a^b f(x)\,dx=F(b)-F(a)
$$

---

# Example

Evaluate

$$
\int_0^2 3x^2dx
$$

Solution:

$$
=x^3\Big|_0^2=8
$$

---

# Applications

- Physics
- Engineering
- Economics
- Population growth
- Probability

---

# Summary

- Derivatives and integrals are inverse operations.
- FTC Part I links accumulation and differentiation.
- FTC Part II simplifies definite integrals.
- The theorem is fundamental throughout calculus.
