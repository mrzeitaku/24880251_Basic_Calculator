# TC-ERROR-004: Cả hai ô số bị bỏ trống

## Requirement ID

FR-ERROR-04

## Module / Test type / Technique

Error Handling / Negative / Decision Table

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

1. Để trống cả hai ô số.
2. Chọn `Multiply`.
3. Bấm `Calculate`.

## Expected result

Hiển thị lỗi validation, không tự động tính kết quả `0`.

## Status / Related bugs

Fail / BUG-004

