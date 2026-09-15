# TC-ERROR-008: First number bị bỏ trống

## Requirement ID

FR-ERROR-08

## Module / Test type / Technique

Error Handling / Negative / Equivalence Partitioning

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
3. Chọn `Add` và bấm `Calculate`.

## Expected result

Hiển thị lỗi First number bắt buộc và không tính như `0`.

## Status / Related bugs

Fail / BUG-002

