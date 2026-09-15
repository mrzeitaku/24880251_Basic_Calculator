# TC-CALC-020: Nhập ký tự đặc biệt vào Second number

## Requirement ID

FR-CALC-20

## Module / Test type / Technique

Calculator / Negative / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.
- Phép toán `Subtract` được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 5 |
| Second number | @#$ |
| Operation | Subtract |

## Test steps

1. Nhập `5` vào First number.
2. Nhập `@#$` vào Second number.
3. Bấm `Calculate`.

## Expected result

Hệ thống từ chối Second number, hiển thị lỗi xác thực và không trả về kết quả số học.

## Status / Related bugs

Pass / None

