# TC-CALC-003: Kiểm thử nhập chuỗi văn bản vào First number

## Requirement ID

FR-CALC-03

## Module / Test type / Technique

Calculator / Negative / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator đã được mở.
- Build Prototype được chọn.
- Phép toán `Add` được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | abc |
| Second number | 10 |
| Operation | Add |

## Test steps

1. Nhập `abc` vào First number.
2. Nhập `10` vào Second number.
3. Chọn `Add`.
4. Bấm `Calculate`.

## Expected result

Hệ thống hiển thị `Number 1 is not a number`, Answer không có kết quả số học và trang không bị crash.

## Status / Related bugs

Pass / None

