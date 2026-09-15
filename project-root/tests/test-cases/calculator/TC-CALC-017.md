# TC-CALC-017: Để trống Second number

## Requirement ID

FR-CALC-17

## Module / Test type / Technique

Calculator / Negative / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 10 |
| Second number | Empty |
| Operation | Add |

## Test steps

1. Nhập `10` vào First number.
2. Để trống Second number.
3. Chọn `Add`.
4. Bấm `Calculate`.

## Expected result

Hệ thống hiển thị thông báo dữ liệu Second number không hợp lệ và không crash.

## Status / Related bugs

Fail / BUG-003

