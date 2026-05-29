# %%
# Import NumPy and Matplotlib # We will visualize Fourier approximations # of a square wave on the interval [-pi, pi]
import numpy as np
import matplotlib.pyplot as plt 
# %%
# Define the target square wave function # Return 1 for x >= 0 and -1 for x < 0 # Use NumPy so the function works on arrays
def square_wave(x):
    return np.where(x >= 0, 1, -1)
# %%
# Compute the nth partial sum of the Fourier series # for a square wave on [-pi, pi] # # Use the standard Fourier sine expansion: # # f(x) ≈ (4/pi) * Σ [sin((2k-1)x)/(2k-1)] # # where k goes from 1 to n # # Write a function: # def fourier_partial_sum(x, n):
def fourier_partial_sum(x, n):
    sum = np.zeros_like(x)
    for k in range(1, n + 1):
        sum += np.sin((2 * k - 1) * x) / (2 * k - 1)
    return (4 / np.pi) * sum 
# %%
# Plot the target square wave and compare # Fourier partial sums for: # n = 1, 3, 5, 10 # # Plot everything on the same figure # Include labels and legend
x = np.linspace(-np.pi, np.pi, 1000)
y_square = square_wave(x)
y_fourier_1 = fourier_partial_sum(x, 1)
y_fourier_3 = fourier_partial_sum(x, 3)
y_fourier_5 = fourier_partial_sum(x, 5)
y_fourier_10 = fourier_partial_sum(x, 10)
plt.figure(figsize=(10, 6))
plt.plot(x, y_square, label='Square Wave', color='black', linewidth=2)
plt.plot(x, y_fourier_1, label='n=1', linestyle='--')
plt.plot(x, y_fourier_3, label='n=3', linestyle='--')
plt.plot(x, y_fourier_5, label='n=5', linestyle='--')
plt.plot(x, y_fourier_10, label='n=10', linestyle='--')
plt.title('Fourier Series Approximation of a Square Wave')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.axhline(0, color='gray', lw=0.5, ls='--')
plt.axvline(0, color='gray', lw=0.5, ls='--')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()
# %% # Plot the L2 approximation error versus n # for n = 1 to 100 # # Compute: # # L2 error = sqrt(mean((f(x)-approximation)^2)) # # Plot how error decreases as n increases
n_values = np.arange(1, 101)
errors = []
x_dense = np.linspace(-np.pi, np.pi, 1000)
y_square_dense = square_wave(x_dense)
for n in n_values:
    y_approx = fourier_partial_sum(x_dense, n)
    error = np.sqrt(np.mean((y_square_dense - y_approx) ** 2))
    errors.append(error)
plt.figure(figsize=(10, 6))
plt.plot(n_values, errors, marker='o')
plt.title('L2 Approximation Error of Fourier Series')
plt.xlabel('n (number of terms)')
plt.ylabel('L2 Error')
plt.yscale('log')  # Use logarithmic scale for better visibility
plt.grid(True, alpha=0.3)
plt.show()
