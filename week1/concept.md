# Basic Derivative Concepts: Power Rule, Product Rule, and Quotient Rule

One of the first ideas learned in calculus would be derivatives. Derivatives describe the rate of change of a quantity. In other words, a derivative measures how a function changes as its input changes. For example, velocity is the derivative of position with respect to time, meaning it tells us how quickly position changes.

The notation for a derivative is often written as $f'(x)$, which represents the derivative of a function $f(x)$. Another common notation is $\frac{d}{dx}$, meaning “take the derivative with respect to $x$.”

One of the first derivative techniques students learn is the **power rule**. This rule makes it easy to differentiate powers of $x$. The rule states:

$$
\frac{d}{dx}(x^n) = nx^{n-1}
$$

For example, if we want to differentiate $x^3$, we multiply by the exponent and subtract one from the exponent:

$$
\frac{d}{dx}(x^3) = 3x^2
$$

The power rule is useful because many polynomial functions are built from powers of $x$. A function such as $5x^4 + 2x^2 - 7$ can be differentiated term by term.

Another important derivative rule is the **product rule**, which is used when multiplying two functions together. If we have two functions $f(x)$ and $g(x)$, the derivative is:

$$
\frac{d}{dx}[f(x)g(x)] =
f'(x)g(x) + f(x)g'(x)
$$
A shorter way to write this would be:
$$
udv + vdu
$$
Where $u = f(x)$, $du = f'(x)$, $v = g(x)$ and $dv = g'(x)$.

This rule tells us that we differentiate the first function while leaving the second unchanged, then add the first unchanged multiplied by the derivative of the second.

The **quotient rule** is used for functions involving division. If one function is divided by another, the derivative is:

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

Again, a shorter written version this formula would be: 
$$
\frac{vdu - udv}{v^2}
$$
Where $u = f(x)$, $du = f'(x)$, $v = g(x)$ and $dv = g'(x)$.

Understanding these rules is important because they form the foundation for more advanced calculus topics. Engineers, scientists, economists, and data analysts all use derivatives to understand change, optimize systems, and model real-world behavior.
