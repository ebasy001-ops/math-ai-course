### The collective research across these papers focuses on the statistical detection and modeling of structural changes, process instability, and extreme risks within complex, often non-stationary time series data.
## Key Themes
### Non-Stationarity and Regime Shifts: A major theme is the rejection of the "stationary baseline" in fields like climatology and finance. Research demonstrates that the underlying parameters of a system—such as the frequency of tropical cyclones or the warming rate of the planet—can shift abruptly at specific "changepoints," creating distinct regimes.

### Parameter Estimation Uncertainty: Several papers address the "plug-in" problem, where control limits or model parameters are estimated from limited historical data (Phase I). This is especially critical when monitoring small counts (e.g., rare diseases), as estimation errors can lead to an inflation of false alarms

### Interdependence and Teleconnections: For multivariate systems, the focus is on how relationships between different variables (e.g., storm counts in different ocean basins) evolve over time. This includes identifying how global teleconnections reorganize following a climate regime shift

### Extreme Value Modeling: The papers explore the "tails" of distributions to assess the risk of rare but catastrophic events, such as financial market crashes or record-breaking storm seasons, while accounting for threshold uncertainty

### The Impact of Autocorrelation: A recurring cautionary theme is that ignoring temporal dependence (autocorrelation) in data leads to spurious changepoint detections and incorrect inferences about long-term trends

## Statistical Methods
### Changepoint Detection Procedures:
#### AMOC (At-Most-One-Changepoint) Tests: Methods like CUSUM (Cumulative Sum) and LRT (Likelihood Ratio Tests) are used to identify a single shift in mean or trend

#### SCUSUM (Sum of Squared CUSUM): Highlighted as the most powerful single-changepoint test, particularly when applied to one-step-ahead prediction residuals to account for correlation

#### Penalized Likelihood: Multivariate methods using BIC (Bayesian Information Criterion) or MDL (Minimum Description Length) to identify the number and location of multiple breaks simultaneously

### Statistical Process Control (SPC) for Health:
#### Exact GICP (Guaranteed In-Control Performance): A novel approach for Poisson CUSUM charts that adjusts control limits using exact confidence intervals (e.g., Garwood limits) to ensure a guaranteed false-alarm rate even with small sample sizes

#### Combined Charts: The simultaneous use of Shewhart charts (for large, abrupt changes) and EWMA or CUSUM charts (for small, sustained shifts) to monitor hospital-acquired infections

### Advanced Dependence and Tail Modeling:
#### Two-Stage Changepoint–Copula Framework: Integrates multivariate changepoint detection with regime-specific copula modeling (Gaussian, Clayton, Gumbel, Frank) to capture non-linear, non-stationary dependencies

#### Bayesian Mixture Models: Combines a parametric form (like Gamma) for the "center" of a distribution with a Generalized Pareto Distribution (GPD) for the "tail," treating the threshold itself as a parameter to be estimated

#### PEWMA and PAR Models: Poisson exponentially weighted moving average and Poisson Autoregressive models designed specifically for persistent or mean-reverting count time series

### Significant Results
#### Global Warming Surge: Statistical analysis of four major temperature records concludes that a recent (post-1970s) surge in the global warming rate is not yet detectable; an increase of at least 55% in the warming trend would be required for a surge to be statistically significant at this time

#### Tropical Cyclone Reorganization: A significant structural break was identified in the year 2000, marking a 59% increase in North Atlantic storm frequency and a shift toward more complex, extreme-value-focused dependencies (increased Gumbel copula prevalence) across global basins

#### Disease Surveillance: The knowledge-based exact method for Poisson CUSUM was validated through a case study of chikungunya outbreaks among travelers, successfully identifying nine major outbreaks with only one false alarm—outperforming traditional "plug-in" methods

#### Financial Risk: Bayesian GPD models applied to Nasdaq 100 returns provided more conservative risk estimates (risk-averse behavior) compared to classical approaches, better capturing the probability of extreme return levels during periods of high volatility

#### Methodological Performance: Simulation studies proved that binary segmentation is often inferior to penalized likelihood methods for multiple changepoints, as it can be easily fooled by shifts in alternating directions
