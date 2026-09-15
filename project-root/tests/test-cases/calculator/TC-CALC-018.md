# TC-CALC-018: Cả hai ô số đều để trống

## Requirement ID

FR-CALC-18

## Module / Test type / Technique

Calculator / Negative / Decision Table

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | Empty |
| Second number | Empty |
| Operation | Multiply |

## Test steps

1. Để trống cả First number và Second number.
2. Chọn `Multiply`.
3. Bấm `Calculate`.

## Expected result

Hệ thống hiển thị lỗi xác thực phù hợp và không thực hiện phép tính.

## Status / Related bugs

Fail / BUG-004

