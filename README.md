# ATS Resume Scorer

> Full-stack web app that parses uploaded PDF resumes and scores ATS compatibility against a target job description using an LLM-backed pipeline.

**Status:** 🚧 Work in progress
**Tech stack:** React · Node.js · Express · MongoDB · OpenAI API

---

## What it does

Most resumes are filtered out by Applicant Tracking Systems before a human ever reads them. ATS Resume Scorer takes an uploaded PDF resume and a target job description, parses both, scores compatibility section by section, and suggests concrete rewrites to improve the match.

## Planned features

- [x] Project scaffolding
- [ ] PDF resume upload + parsing
- [ ] JWT-based authentication
- [ ] Job description input + parsing
- [ ] LLM-backed scoring pipeline (OpenAI API)
- [ ] Per-section score dashboard (React)
- [ ] Rewrite suggestions per bullet
- [ ] Export updated resume as PDF

## Tech stack rationale

- **React + Tailwind** — fast UI iteration, clean component-based architecture
- **Node.js + Express** — lightweight backend, native JSON/REST handling
- **MongoDB** — flexible schema for resumes/JDs that vary in structure
- **OpenAI API** — best-in-class structured-output scoring without training a model

## How to run locally

```bash
git clone https://github.com/jyotithakurusa/ats-resume-scorer.git
cd ats-resume-scorer
npm install
npm run dev
```

## Roadmap

- v0.1 — PDF upload + basic parsing
- v0.2 — Scoring pipeline with OpenAI
- v0.3 — Auth + saved history
- v0.4 — Rewrite suggestions
- v1.0 — Production deploy on AWS

---

**Author:** Jyoti Thakur · [GitHub](https://github.com/jyotithakurusa) · jyotithakurusa@gmail.com
