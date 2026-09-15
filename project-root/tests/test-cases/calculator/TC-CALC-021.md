# TC-CALC-021: Nhập khoảng trắng ở hai đầu dữ liệu

## Requirement ID

FR-CALC-21

## Module / Test type / Technique

Calculator / Functional / Boundary Value Analysis

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.
- Phép toán `Add` được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | ` 5 ` |
| Second number | ` 10 ` |
| Operation | Add |

## Test steps

1. Nhập ` 5 ` vào First number.
2. Nhập ` 10 ` vào Second number.
3. Bấm `Calculate`.

## Expected result

Hệ thống xử lý khoảng trắng theo quy tắc validation đã định nghĩa; nếu trim dữ liệu, Answer là `15`, nếu không thì hiển thị lỗi rõ ràng.

## Status / Related bugs

Pass / None

