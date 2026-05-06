# ATS Resume Scorer

A small full-stack app that scores how well a resume matches a job description, using an LLM under the hood. Started this because I got tired of guessing whether my resume was getting filtered out before any human read it.

**Tech:** React, Node, Express, MongoDB, OpenAI API  
**Status:** Building it — frontend skeleton up, scoring pipeline next.

## What works

- [x] React frontend with file upload + JD textarea
- [ ] PDF parsing on the backend
- [ ] Scoring pipeline using OpenAI
- [ ] Per-section breakdown in the UI
- [ ] Auth + saving past scores
- [ ] Deploy on AWS

## Run it

```bash
npm install
npm run dev
```

## Notes

Mongo is overkill for the data shape but I wanted the practice. Will probably swap to Postgres later.
