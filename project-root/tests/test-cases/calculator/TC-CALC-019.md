# TC-CALC-019: Nhập ký tự đặc biệt vào First number

## Requirement ID

FR-CALC-19

## Module / Test type / Technique

Calculator / Negative / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.
- Phép toán `Add` được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | @#$ |
| Second number | 5 |
| Operation | Add |

## Test steps

1. Nhập `@#$` vào First number.
2. Nhập `5` vào Second number.
3. Bấm `Calculate`.

## Expected result

Hệ thống từ chối First number, hiển thị lỗi xác thực và không trả về kết quả số học.

## Status / Related bugs

Pass / None

