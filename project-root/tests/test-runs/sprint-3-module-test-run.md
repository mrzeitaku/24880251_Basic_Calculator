# Test Run Execution - Build / Sprint 3

- **Test date:** 2026-09-14
- **Tester:** QA Tester
- **Environment:** Basic Calculator, browser execution
- **URL:** https://testsheepnz.github.io/BasicCalculator.html

## Build Management Module

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|---|---|---|---|---|---|
| TC-BUILD-001 | Build Management | QA Tester | Pass | None | Prototype loaded; all 4 calculator controls available. |
| TC-BUILD-002 | Build Management | QA Tester | Pass | None | Build 1 loaded; all 4 calculator controls available. |
| TC-BUILD-003 | Build Management | QA Tester | Pass | None | Build 2 loaded; all 4 calculator controls available. |
| TC-BUILD-004 | Build Management | QA Tester | Pass | None | Build 3 loaded; all 4 calculator controls available. |
| TC-BUILD-005 | Build Management | QA Tester | Pass | None | Build 4 loaded; all 4 calculator controls available. |
| TC-BUILD-006 | Build Management | QA Tester | Pass | None | Build 5 loaded; all 4 calculator controls available. |
| TC-BUILD-007 | Build Management | QA Tester | Pass | None | Build 6 loaded; all 4 calculator controls available. |
| TC-BUILD-008 | Build Management | QA Tester | Pass | None | Build 7 loaded; all 4 calculator controls available. |
| TC-BUILD-009 | Build Management | QA Tester | Pass | None | Build 8 loaded; all 4 calculator controls available. |
| TC-BUILD-010 | Build Management | QA Tester | Pass | None | Build 9 loaded; all 4 calculator controls available. |

## UI Controls Module

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|---|---|---|---|---|---|
| TC-UI-001 | UI Controls | QA Tester | Pass | None | Calculate returns `15` for `5 + 10`. |
| TC-UI-002 | UI Controls | QA Tester | Pass | None | Integer mode returns `3` for `7 / 2`. |
| TC-UI-003 | UI Controls | QA Tester | Pass | None | Decimal mode returns `3.5` for `7 / 2`. |
| TC-UI-004 | UI Controls | QA Tester | Pass | None | Switching to Subtract returns `-1` for `1` and `2`. |
| TC-UI-005 | UI Controls | QA Tester | Pass | None | Concatenate returns `AB` and disables Integer mode. |
| TC-UI-006 | UI Controls | QA Tester | Fail | BUG-006 | Clear removes Answer but leaves input values populated. |
| TC-UI-007 | UI Controls | QA Tester | Pass | None | Reload clears input and Answer state. |
| TC-UI-008 | UI Controls | QA Tester | Pass | None | Multiply returns `96`. |
| TC-UI-009 | UI Controls | QA Tester | Pass | None | Divide returns `3`. |
| TC-UI-010 | UI Controls | QA Tester | Pass | None | Subtract returns `4`. |

## Error Handling Module

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|---|---|---|---|---|---|
| TC-ERROR-001 | Error Handling | QA Tester | Fail | BUG-001 | Divide by zero displays `Divide by zero error!` and leaves the Calculate button disabled. |
| TC-ERROR-002 | Error Handling | QA Tester | Pass | None | Invalid First number displays `Number 1 is not a number`. |
| TC-ERROR-003 | Error Handling | QA Tester | Pass | None | Invalid Second number displays `Number 2 is not a number`. |
| TC-ERROR-004 | Error Handling | QA Tester | Fail | BUG-004 | Both empty fields return `0` without a validation message. |
| TC-ERROR-005 | Error Handling | QA Tester | Pass | None | Special characters in First number are rejected. |
| TC-ERROR-006 | Error Handling | QA Tester | Pass | None | Special characters in Second number are rejected. |
| TC-ERROR-007 | Error Handling | QA Tester | Fail | BUG-005 | `999999999999 + 1` returns incorrect `10000000000`. |
| TC-ERROR-008 | Error Handling | QA Tester | Fail | BUG-002 | Empty First number is treated as `0`. |
| TC-ERROR-009 | Error Handling | QA Tester | Fail | BUG-003 | Empty Second number is treated as `0`. |
| TC-ERROR-010 | Error Handling | QA Tester | Pass | None | Valid division `10 / 2` returns `5`. |

## Execution Summary

| Module | Total | Pass | Fail | Not Run |
|---|---:|---:|---:|---:|
| Build Management | 10 | 10 | 0 | 0 |
| UI Controls | 10 | 9 | 1 | 0 |
| Error Handling | 10 | 5 | 5 | 0 |
| **Total** | **30** | **25** | **5** | **0** |

