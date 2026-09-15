# TC-ERROR-009: Second number bị bỏ trống

## Requirement ID

FR-ERROR-09

## Module / Test type / Technique

Error Handling / Negative / Equivalence Partitioning

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
3. Chọn `Add` và bấm `Calculate`.

## Expected result

Hiển thị lỗi Second number bắt buộc và không tính như `0`.

## Status / Related bugs

Fail / BUG-003

