---
marp: true
---

# Study Guide: Complete and Sufficient Statistics

## Concept Explanation

In mathematical statistics, sufficient statistics and complete statistics are two foundational ideas used in estimation theory. They help us reduce data without losing information about unknown parameters and are central to results such as the Lehmann–Scheffé theorem.

A statistic is called **sufficient** for a parameter $ \theta $ if it captures all information in the sample relevant to estimating $\theta$. Once the sufficient statistic is known, the remaining sample information provides no additional information about the parameter.

The Factorization Theorem gives a practical way to identify sufficiency. A statistic $T(X)$ is sufficient for parameter $\theta$ if the joint likelihood can be written as:

$$
f(x_1,\dots,x_n \mid \theta)
=
g(T(x),\theta)\,h(x)
$$

where $g$ depends on the sample only through $T(x)$, while $h$ does not depend on $\theta$.

Intuitively, sufficiency means the sample can be compressed into a lower-dimensional quantity without losing inferential power.

A statistic is called **complete** if the only function of that statistic having expectation zero for all parameter values is the zero function. Formally, a statistic $T(X)$ is complete if:

$$
E_\theta[g(T)] = 0
\quad \text{for all } \theta
$$

implies

$$
P(g(T)=0)=1
$$

for every measurable function $g$.

Completeness is important because it guarantees uniqueness of unbiased estimators based on that statistic.

When a statistic is both complete and sufficient, it becomes extremely powerful. By the Lehmann–Scheffé theorem, any unbiased estimator based on that statistic is the **unique minimum variance unbiased estimator (MVUE)**.

These ideas connect directly to exponential families, estimation theory, and hypothesis testing.

---

## Worked Example 1: Sufficiency

Suppose:

$$
X_1,\dots,X_n \sim \text{Bernoulli}(p)
$$

Find a sufficient statistic for $p$.

The joint PMF is:

$$
f(x_1,\dots,x_n\mid p)
=
\prod_{i=1}^{n}
p^{x_i}(1-p)^{1-x_i}
$$

Simplify:

$$
=
p^{\sum x_i}
(1-p)^{n-\sum x_i}
$$

Using the factorization theorem:

$$
g(T(x),p)=
p^{T(x)}(1-p)^{n-T(x)}
$$

where

$$
T(X)=\sum_{i=1}^{n} X_i
$$

and

$$
h(x)=1
$$

Therefore:

$$
T(X)=\sum X_i
$$

is sufficient for $p$.

Interpretation: only the number of successes matters, not their order.

---

## Worked Example 2: Completeness

Suppose:

$$
X_1,\dots,X_n \sim \text{Poisson}(\lambda)
$$

Consider:

$$
T=\sum X_i
$$

Since sums of independent Poisson random variables remain Poisson:

$$
T \sim \text{Poisson}(n\lambda)
$$

This statistic is sufficient for $\lambda$.

To show completeness, assume:

$$
E[g(T)] = 0
$$

for all $\lambda >0$.

Then:

$$
\sum_{t=0}^{\infty}
g(t)
\frac{e^{-n\lambda}(n\lambda)^t}{t!}
=
0
$$

for every $\lambda$.

Because this power series equals zero for all $\lambda$, each coefficient must be zero.

Thus:

$$
g(t)=0
$$

for every $t$, implying completeness.

Therefore:

$$
\sum X_i
$$

is both complete and sufficient.

---

## Practice Problems

### Problem 1

Let $X_1,\dots,X_n\sim \text{Exponential}(\theta)$.

Find a sufficient statistic for $\theta$.

### Solution

The joint density factors through:

$$
\sum X_i
$$

Therefore:

$$
T=\sum X_i
$$

is sufficient.

---

### Problem 2

Why is completeness useful?

### Solution

Completeness ensures unbiased estimators based on the statistic are unique, allowing MVUE construction.

---

### Problem 3

State the Lehmann–Scheffé theorem.

### Solution

If $T$ is complete and sufficient for parameter $\theta$, then every unbiased estimator that is a function of $T$ is the unique MVUE.

---

## Connections

Complete sufficient statistics connect strongly to several areas of mathematics.

- **Exponential Families:** Many common distributions (Normal, Poisson, Gamma, Exponential) possess natural sufficient statistics.
- **Decision Theory:** Completeness helps identify optimal estimators under loss functions.
- **Hypothesis Testing:** Likelihood ratio tests often rely on sufficient statistics.
- **Bayesian Statistics:** Sufficiency helps reduce posterior calculations by reducing data dimensionality.

These concepts form the theoretical foundation of modern statistical inference.