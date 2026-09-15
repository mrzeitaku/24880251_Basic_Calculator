# Test Run Execution - Build / Sprint 2

- **Test date:** 2026-09-14
- **Tester:** QA Tester
- **Environment:** Basic Calculator, Build Prototype, browser-based execution
- **URL:** https://testsheepnz.github.io/BasicCalculator.html

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|---|---|---|---|---|---|
| TC-CALC-006 | Calculator | QA Tester | Pass | None | `-5 + -10 = -15`. |
| TC-CALC-007 | Calculator | QA Tester | Pass | None | `20 - 8 = 12`. |
| TC-CALC-008 | Calculator | QA Tester | Pass | None | `8 - 20 = -12`. |
| TC-CALC-009 | Calculator | QA Tester | Pass | None | `125 * 0 = 0`. |
| TC-CALC-010 | Calculator | QA Tester | Pass | None | `100 / 4 = 25`. |
| TC-CALC-011 | Calculator | QA Tester | Pass | None | `-20 / 5 = -4`. |
| TC-CALC-012 | Calculator | QA Tester | Pass | None | `2.5 + 1.25 = 3.75`. |
| TC-CALC-013 | Calculator | QA Tester | Pass | None | Integer mode returns `3` for `7 / 2`. |
| TC-CALC-014 | Calculator | QA Tester | Pass | None | Final operation Multiply returns `27` for `9` and `3`. |
| TC-CALC-015 | Calculator | QA Tester | Pass | None | `11 - 11 = 0`. |
| TC-CALC-016 | Calculator | QA Tester | Fail | BUG-002 | Empty First number is treated as `0` instead of showing validation error. |
| TC-CALC-017 | Calculator | QA Tester | Fail | BUG-003 | Empty Second number is treated as `0` instead of showing validation error. |
| TC-CALC-018 | Calculator | QA Tester | Fail | BUG-004 | Both empty fields produce `0` instead of validation error. |
| TC-CALC-019 | Calculator | QA Tester | Pass | None | `@#$` in First number shows `Number 1 is not a number`. |
| TC-CALC-020 | Calculator | QA Tester | Pass | None | `@#$` in Second number shows `Number 2 is not a number`. |
| TC-CALC-021 | Calculator | QA Tester | Pass | None | Values with surrounding spaces return `15`. |
| TC-CALC-022 | Calculator | QA Tester | Pass | None | `1.5 + 2.5 = 4`. |
| TC-CALC-023 | Calculator | QA Tester | Pass | None | `-12 + 5 = -7`. |
| TC-CALC-024 | Calculator | QA Tester | Pass | None | Unicode concatenate returns `Xinchào`. |
| TC-CALC-025 | Calculator | QA Tester | Fail | BUG-005 | `999999999999 + 1` returns incorrect `10000000000`. |
| TC-CALC-026 | Calculator | QA Tester | Fail | BUG-006 | Clear removes Answer but leaves First number and Second number populated. |
| TC-CALC-027 | Calculator | QA Tester | Pass | None | Integer mode is applied to `7 / 2`, returning `3`. |
| TC-CALC-028 | Calculator | QA Tester | Pass | None | Decimal mode returns `3.5` for `7 / 2`. |
| TC-CALC-029 | Calculator | QA Tester | Pass | None | Add operation returns `20`. |
| TC-CALC-030 | Calculator | QA Tester | Pass | None | Subtract operation returns `4`. |
| TC-CALC-031 | Calculator | QA Tester | Pass | None | Multiply operation returns `96`. |
| TC-CALC-032 | Calculator | QA Tester | Pass | None | Divide operation returns `3`. |
| TC-CALC-033 | Calculator | QA Tester | Pass | None | Concatenate returns `AB` and disables Integer mode. |
| TC-CALC-034 | Calculator | QA Tester | Pass | None | Build `1` loads and Calculator controls remain available. |
| TC-CALC-035 | Calculator | QA Tester | Pass | None | Reload clears input, operation and Answer state. |

## Execution Summary

- **Total:** 30
- **Pass:** 25
- **Fail:** 5
- **Not Run:** 0
- **Defects:** BUG-002, BUG-003, BUG-004, BUG-005, BUG-006

