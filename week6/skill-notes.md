**Skill:** `.github/skills/research-pipeline/SKILL.md`

Created a simple Zotero + NotebookLM pipeline skill that drafts literature‑grounded sections and identifies open problems.

Test run
- Invocation: `/research-pipeline` with input: "identify the main open problems in my research area"
- Data sources used: `week6/references.bib` (Zotero export) and NotebookLM outputs available in the workspace.
- Synthesized gaps:
  - AR-aware changepoint calibration for count and low-count series (controls size/power under dependence)
  - Coherent high-dimensional dependence modeling (vine/fully multivariate copulas)
  - Online monitoring with safe threshold adaptation (maintaining in‑control guarantees)

Artifacts created
- `c:\Users\emali\math-ai-course\.github\skills\research-pipeline\SKILL.md`
- `c:\Users\emali\math-ai-course\week6\introduction-draft.md`

Next steps
- Option A: Add automated Zotero queries to the skill implementation for direct metadata retrieval.
- Option B: Expand prompts to include paragraph-level evidence excerpts from NotebookLM.
