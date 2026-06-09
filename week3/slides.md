---
marp: true
theme: default
paginate: true
---

# Basic Integration Methods

### Introduction to Antiderivatives and Integration

**Week 3 – Math AI Course**

---

# What is Integration?

Integration is the process of finding the **antiderivative** of a function.

An integral reverses differentiation.

Common notation:

$$
\int f(x)\,dx
$$

Example:

If

$$
f'(x)=2x
$$

then

$$
\int 2x\,dx = x^2 + C
$$

---

# Power Rule for Integration

The power rule for integration is:

$$
\int x^n\,dx
=
\frac{x^{n+1}}{n+1}+C
\quad (n \neq -1)
$$

### Example

$$
\int x^3\,dx
=
\frac{x^4}{4}+C
$$

---

# Integrating Polynomials

We integrate each term separately.

### Example

$$
\int (3x^2 + 4x + 5)\,dx
$$

Step-by-step:

$$
=
\int 3x^2\,dx
+
\int 4x\,dx
+
\int 5\,dx
$$

Final answer:

$$
x^3 + 2x^2 + 5x + C
$$

---

# Substitution Method

Substitution helps simplify more difficult integrals.

Let:

$$
u=x^2+1
$$

Then:

$$
du=2x\,dx
$$

This transforms the integral into an easier form.

---

# Definite Integrals

Definite integrals calculate **area under a curve**.

General form:

$$
\int_a^b f(x)\,dx
$$

### Example

$$
\int_0^2 x\,dx
=
\left[\frac{x^2}{2}\right]_0^2
=
2
$$

---

# Worked Example

Evaluate:

$$
\int (2x+3)\,dx
$$

Integrate each term:

$$
\int 2x\,dx = x^2
$$

$$
\int 3\,dx = 3x
$$

Final answer:

$$
x^2 + 3x + C
$$

---

# Summary

### Key Integration Concepts

- Integration finds **antiderivatives**
- The **power rule** simplifies polynomial integration
- **Substitution** helps solve harder integrals
- **Definite integrals** find area under a curve

Basic integration methods are foundational tools in calculus.

