# TC-ERROR-001: Chia cho số 0

## Requirement ID

FR-ERROR-01

## Module / Test type / Technique

Error Handling / Negative / Boundary Value Analysis

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 10 |
| Second number | 0 |
| Operation | Divide |

## Test steps

1. Nhập `10` và `0`.
2. Chọn `Divide`.
3. Bấm `Calculate`.

## Expected result

Hiển thị lỗi chia cho 0 và trang vẫn cho phép tiếp tục thao tác.

## Status / Related bugs

Fail / BUG-001

