---
marp: true
theme: default
paginate: true
---

# Basic Derivative Concepts

### Power Rule, Product Rule, and Quotient Rule

Week 1 – Math AI Course

---

# What is a Derivative?

A derivative measures the **rate of change** of a function.

Common notation:

- $f'(x)$
- $\frac{d}{dx}$

Example idea:

If position changes over time, the derivative gives **velocity**.

---

# The Power Rule

The power rule is used for powers of $x$.

$$
\frac{d}{dx}(x^n)=nx^{n-1}
$$

Example:

$$
\frac{d}{dx}(x^3)=3x^2
$$

---

# The Product Rule

Used when multiplying functions together.

$$
\frac{d}{dx}[f(x)g(x)]
=
f'(x)g(x)+f(x)g'(x)
$$

Example:

$(x^2)(x+1)$

---

# The Quotient Rule

Used when dividing functions.

$$
\frac{d}{dx}
\left(
\frac{f(x)}{g(x)}
\right)
=
\frac{
f'(x)g(x)-f(x)g'(x)
}{
[g(x)]^2
}
$$
Example:

$$
\frac{x^2}{x+1}
$$

---

# Cheat Sheet

- Power rule
  - $\frac{d}{dx}(x^n)=nx^{n-1}$

For Product and Quotient rule, let
- $u = f(x)$, $du = f'(x)$
- $v = g(x)$, $dv = g'(x)$

- Product Rule
  - $\frac{d}{dx}[uv] = udv + vdu$

- Quotient Rule
  - $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{vdu - udv}{v^2}$


---


# Summary

Key derivative rules:

- **Power Rule:** powers of $x$
- **Product Rule:** multiplication
- **Quotient Rule:** division

These rules are the foundation of calculus and help model change in science, engineering, and economics.