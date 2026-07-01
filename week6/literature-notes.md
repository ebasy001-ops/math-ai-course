### query:"From the zotero MCP, make all papers in the library as a numbered list with year, title, and a one sentence description
### response:
#### 1. 2025 — Single Changepoint Procedures — Summarizes the main single‑changepoint tests for mean and trend shifts in climate time series, gives asymptotic quantiles and derivations, and illustrates methods on SOI and global temperature series.
#### 2. 2026 — The Poisson CUSUM Chart for Monitoring Small Counts: Addressing the Estimation Uncertainty — Proposes a novel exact approach that accounts for estimation uncertainty to guarantee in‑control performance for Poisson CUSUM charts, validated on retrospective chikungunya outbreak monitoring.
#### 3. 2001 — The application of statistical process control charts to the detection and monitoring of hospital‑acquired infections — Reviews using Shewhart, CUSUM, and EWMA charts for infection surveillance and recommends combined approaches to detect both abrupt and sustained changes.
#### 4. 2026 — A Two‑Stage Changepoint–Copula Framework for Non‑Stationary Count Time Series: Application to Tropical Cyclones — Develops a two‑stage method (changepoint detection + copula modeling) for tropical cyclone counts across basins, identifies a 2000 regime shift, and documents major reorganization in dependence patterns.
#### 5. 2004 — Bayesian analysis of extreme events with threshold estimation — Introduces a Bayesian mixture model combining a parametric center and a GPD tail to jointly estimate the threshold and tail parameters using MCMC, with applications to financial extreme events.

### query:"now using the notebook lm give the three main research themes across all papers and the main open questions in the area"
### response:
### Three main research themes
#### Structural change / changepoint detection: methods to detect mean/trend/variance breaks in climate and count series (e.g., global temperature, SOI, tropical‑cyclone counts) and their multivariate extensions (Lund & Shi, 2025; Hossain & Diawara, 2026).
#### Monitoring small-count processes / SPC in public health: design and calibration of CUSUM/EWMA/Shewhart charts (and exact/guaranteed-in-control adjustments) for outbreak detection with scarce data (Morton et al., 2001; Heidema et al., 2026).
#### Non‑stationary dependence & extremes: modeling time-varying cross-series dependence (copulas, latent processes) and tail behavior with threshold uncertainty for extreme-event risk (Hossain & Diawara, 2026; Behrens et al., 2004).

### Main open questions (prioritized)
#### 1. Robust changepoint detection under autocorrelation: how to incorporate AR(1)/latent temporal dependence so changepoint tests keep correct size and power (avoid spurious breaks).
#### 2. Coherent high‑dimensional dependence models: moving beyond pairwise fits to vine or fully multivariate copula constructions that are coherent across many series.
#### 3. Attribution via covariate‑conditional models: embedding climate indices (ENSO, IOD, etc.) into dependence/parameter models to attribute regime shifts physically rather than only detecting them.
#### 4. Online (safe) parameter learning: algorithms that update monitoring thresholds/parameters in real time while preserving guaranteed in‑control false‑alarm properties.
#### 5. EVT robustness and threshold uncertainty: principled methods to propagate uncertainty in threshold choice and to model the bulk/below‑threshold behavior (e.g., Student‑t centers or mixture models) to improve tail inference.
#### 6. Spatial, seasonal, and population effects in surveillance: incorporate seasonality, changing denominators, and spatial correlation into monitoring charts to reduce bias and improve detection in real surveillance data.
#### 7. Quantifying and communicating uncertainty for decisions: standard ways to report uncertainty from changepoint, copula, and EVT stages so practitioners can make risk-informed choices.

