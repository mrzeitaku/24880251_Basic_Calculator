# TC-CALC-002: Kiểm thử phép chia cho số 0

## Requirement ID

FR-CALC-02

## Module / Test type / Technique

Calculator / Negative / Boundary Value Analysis

## Preconditions

- Trang Basic Calculator đã được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 10 |
| Second number | 0 |
| Operation | Divide |

## Test steps

1. Nhập `10` vào First number.
2. Nhập `0` vào Second number.
3. Chọn `Divide`.
4. Bấm `Calculate`.

## Expected result

Hệ thống xử lý phép chia cho 0 an toàn, hiển thị lỗi phù hợp và không bị crash hoặc treo.

## Status / Related bugs

Fail / BUG-001

