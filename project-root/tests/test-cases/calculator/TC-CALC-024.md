# TC-CALC-024: Nhập chuỗi Unicode khi nối chuỗi

## Requirement ID

FR-CALC-24

## Module / Test type / Technique

Calculator / Functional / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.
- Phép toán `Concatenate` được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | Xin |
| Second number | chào |
| Operation | Concatenate |

## Test steps

1. Nhập `Xin` vào First number.
2. Nhập `chào` vào Second number.
3. Chọn `Concatenate`.
4. Bấm `Calculate`.

## Expected result

Hệ thống chấp nhận dữ liệu văn bản và Answer hiển thị chuỗi nối `Xinchào`.

## Status / Related bugs

Pass / None

