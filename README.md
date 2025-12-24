# 🧪 EVM Contract QA Template

![Tests Passing](https://img.shields.io/badge/tests-passing-brightgreen)

A modular and reproducible template for testing Solidity smart contracts in EVM-compatible environments.  
Designed to help developers and auditors catch logic flaws, edge cases, and gas inefficiencies before deployment.

---

## 🔍 What’s inside

- ✅ Hardhat + Chai setup for unit testing
- ✅ Common failure scenarios (reentrancy, overflow, access control)
- ✅ Gas profiling and assertions
- ✅ QA checklist for DeFi logic
- ✅ Reproducible test scripts with clear structure
- ✅ Example test output
- ✅ Shell script to run tests easily

---

## 🛠️ Tech Stack

- Solidity
- Hardhat
- Chai / Mocha
- Ethers.js

---

## 🚀 Getting Started

```bash
git clone https://github.com/pedrosantos-tech/evm-contract-qa-template.git
cd evm-contract-qa-template
npm install
npm test
