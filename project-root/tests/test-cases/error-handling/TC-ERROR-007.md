# TC-ERROR-007: Số rất lớn

## Requirement ID

FR-ERROR-07

## Module / Test type / Technique

Error Handling / Robustness / Boundary Value Analysis

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 999999999999 |
| Second number | 1 |
| Operation | Add |

## Test steps

1. Nhập số lớn và `1`.
2. Chọn `Add`.
3. Bấm `Calculate`.

## Expected result

Kết quả chính xác là `1000000000000` hoặc hệ thống từ chối dữ liệu với thông báo rõ ràng.

## Status / Related bugs

Fail / BUG-005

