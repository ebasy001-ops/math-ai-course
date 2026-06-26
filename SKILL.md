---
marp: true
theme: default
paginate: true
math: katex
---

# Introduction to Calculus

## A first look at limits, derivatives, and integrals

---

## What is a Limit?

A limit describes the value a function approaches as the input approaches a point.

$$\lim_{x \to a} f(x) = L$$

A limit can exist even if the function is not defined at $x = a$.

---

## Continuity

A function $f(x)$ is continuous at $x=a$ if:

$$\lim_{x \to a} f(x) = f(a)$$

Continuity means no jumps, holes, or vertical asymptotes at that point.

---

## The Derivative: Instantaneous Rate of Change

The derivative measures how fast a function changes at a point.

$$f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}$$

This is the slope of the tangent line to the curve at $x$.

---

## Example: Derivative from First Principles

Let $f(x)=x^2$. Then:

$$f'(x)=\lim_{h\to0}\frac{(x+h)^2-x^2}{h}
=\lim_{h\to0}\frac{2xh+h^2}{h}
=\lim_{h\to0}(2x+h)=2x$$

So the derivative is $f'(x)=2x$.

---

## Derivative Rules

Common derivative formulas:

$$\frac{d}{dx}[x^n] = nx^{n-1}$$
$$\frac{d}{dx}[\sin x] = \cos x$$
$$\frac{d}{dx}[\cos x] = -\sin x$$

The chain rule is:

$$\frac{d}{dx}f(g(x)) = f'(g(x))g'(x)$$

---

## Definite Integrals

The definite integral gives the net area under a curve from $a$ to $b$.

$$\int_a^b f(x)\,dx$$

It accumulates small contributions $f(x)\,dx$ across an interval.

---

## The Fundamental Theorem of Calculus

Connects derivatives with integrals:

1. If $F'(x)=f(x)$, then
   $$\int_a^b f(x)\,dx = F(b)-F(a).$$
2. The derivative of an integral is:
   $$\frac{d}{dx} \int_a^x f(t)\,dt = f(x).$$

---

## Example: Evaluate a Definite Integral

Compute:

$$\int_0^2 (3x^2+1)\,dx$$

Antiderivative: $F(x)=x^3+x$.

$$F(2)-F(0) = (8+2)-(0+0) = 10$$

So the area is $10$.

---

## Applications of Calculus

- Derivatives model velocity and acceleration.
- Integrals compute areas, volumes, and accumulation.
- Calculus supports optimization and motion analysis.

---

## Summary

- Limits describe approaching behavior.
- Continuity means no break at a point.
- Derivatives give instantaneous rate of change.
- Integrals measure accumulated area.
- The Fundamental Theorem links derivatives and integrals.

Keep practicing with both derivative and integral examples to build intuition.
