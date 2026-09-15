# TC-CALC-005: Kiểm thử phép nối chuỗi văn bản

## Requirement ID

FR-CALC-05

## Module / Test type / Technique

Calculator / Functional / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator đã được mở.
- Build Prototype được chọn.
- Phép toán `Concatenate` được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | Hello |
| Second number | World |
| Operation | Concatenate |

## Test steps

1. Nhập `Hello` vào First number.
2. Nhập `World` vào Second number.
3. Chọn `Concatenate`.
4. Bấm `Calculate`.

## Expected result

Answer hiển thị `HelloWorld`; tùy chọn `Integers only` không được áp dụng cho phép nối chuỗi.

## Status / Related bugs

Pass / None

