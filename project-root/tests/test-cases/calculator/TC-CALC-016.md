# TC-CALC-016: Để trống First number

## Requirement ID

FR-CALC-16

## Module / Test type / Technique

Calculator / Negative / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | Empty |
| Second number | 10 |
| Operation | Add |

## Test steps

1. Để trống First number.
2. Nhập `10` vào Second number.
3. Chọn `Add`.
4. Bấm `Calculate`.

## Expected result

Hệ thống hiển thị thông báo dữ liệu First number không hợp lệ và không crash.

## Status / Related bugs

Fail / BUG-002

