# Software Development Lifecycle (SDLC) & QA Benchmark

## 1. Project Overview
This repository serves as a practical demonstration of modern software engineering practices. It transitions from local development to a fully automated Continuous Integration (CI) pipeline, ensuring code quality through automated Quality Assurance (QA).

## 2. Version Control Strategy
We utilized **Git** following a feature-branch workflow:
- `main`: Production-ready code.
- `develop`: Integration branch for features.
- `feature/*`: Isolated development branches.

**Merge Conflict Resolution:** During peer collaboration, a conflict in `index.js` was resolved by manually reconciling head-to-head changes in the terminal, ensuring the final logic incorporated both developers' contributions.

## 3. Continuous Integration (CI)
The project utilizes **GitHub Actions**. Every `push` triggers a virtual environment that:
1. Installs dependencies.
2. Executes **ESLint** to enforce coding standards.
3. Executes **Jest** to verify functional requirements.
If any step fails, the "Build" breaks, preventing buggy code from reaching the `main` branch.

## 4. Reflection Report

### Challenges Faced
The primary challenge was configuring the CI environment to match the local Node.js version. Initially, the pipeline failed because the virtual machine lacked the specific dependencies required for Jest. Additionally, resolving merge conflicts required a disciplined approach to reading Git's "HEAD" markers to avoid deleting critical logic.

### Impact of CI Pipeline
The CI pipeline acted as a "Safety Net." By automating the test suite, we removed human error—it is no longer possible to forget to run tests before a release. This streamlines development by providing immediate feedback on whether a new change broke existing functionality.

### Improvements in Quality
Version control enabled non-destructive experimentation via branching. QA practices, specifically unit testing, improved code confidence. Instead of manually checking results, we have a repeatable, mathematical proof that our functions work as intended.