# Basic Calculator QA Runbook

## Scope

Ứng dụng được kiểm thử: https://testsheepnz.github.io/BasicCalculator.html

Đặc tả bắt buộc: `requirements/instructions.md`.

## Workflow

1. Đọc đặc tả trước khi thiết kế hoặc sửa test.
2. Đặt Test Case trực tiếp trong `tests/test-cases/<module>/`.
3. Dùng mã `TC-[MODULE]-[NUMBER]` và giữ mã Requirement liên kết.
4. Chạy từng case độc lập trên build đã ghi trong Test Run.
5. Ghi kết quả vào `tests/test-runs/sprint-[X]-test-run.md`.
6. Tạo `tests/bugs/BUG-[NUMBER].md` cho mọi `Fail` hoặc `Blocked`.
7. Cập nhật RTM duy nhất tại `tests/summary/traceability-matrix.md`.

## Current modules

| Module directory | Test Case prefix | Scope |
|---|---|---|
| `calculator` | `TC-CALC-*` | Core calculations and calculator behavior |
| `build-management` | `TC-BUILD-*` | Build selection and loading |
| `ui-controls` | `TC-UI-*` | Calculate, Clear, Answer, Operation, Integers only |
| `error-handling` | `TC-ERROR-*` | Invalid input, divide by zero and recovery |

## Automation

Script Playwright hiện có: `tests/test-scripts/test_calculator.spec.js`.

Lệnh chạy khi môi trường Node/Playwright đã được cài đặt:

```text
npx playwright test tests/test-scripts/test_calculator.spec.js
```

## Completion checklist

- [ ] Tất cả case có Result: `Pass`, `Fail`, `Blocked` hoặc `Not Run`.
- [ ] Mỗi Fail/Blocked có Bug Report tương ứng.
- [ ] Test Run và RTM khớp mã Requirement, Test Case và Bug.
- [ ] Không có module lồng bên trong module.
