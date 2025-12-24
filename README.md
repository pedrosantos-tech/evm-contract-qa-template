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

Or run
./run-tests.sh

📋 Example Test Output
Vault
    ✔ should accept deposits (123ms)
    ✔ should prevent over-withdrawal (45ms)

2 passing (168ms)


## ✅ QA Checklist

See qa-checklist.md for a full list of validations performed on smart contracts, including:

- Security checks (reentrancy, access control, overflow)  
- Logic validation (balance tracking, edge cases)  
- Test coverage and gas profiling  
- Documentation and reproducibility

## 📁 Project Structure
contracts/
  Vault.sol          # Smart contract with deposit/withdraw logic
test/
  Vault.test.js      # Unit tests for Vault
qa-checklist.md      # Manual QA checklist
run-tests.sh         # Shell script to run tests
test-output.txt      # Example test output
hardhat.config.js    # Hardhat config
package.json         # Dependencies and test script
README.md            # This file

## 👤 Author
Pedro Santos  
Web3 QA Strategist & Frontend Developer  
[Linktree 👉](https://linktr.ee/pedrosantos_web3)
