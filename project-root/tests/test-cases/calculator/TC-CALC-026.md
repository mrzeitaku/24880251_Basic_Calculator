# TC-CALC-026: Xóa dữ liệu bằng Clear

## Requirement ID

FR-CALC-26

## Module / Test type / Technique

Calculator / Functional / State Transition Testing

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.
- Các ô số và Answer có dữ liệu.

## Test data

| Parameter | Value |
|---|---|
| First number | 5 |
| Second number | 10 |
| Operation | Add |

## Test steps

1. Nhập dữ liệu và bấm `Calculate`.
2. Bấm `Clear`.

## Expected result

First number, Second number và Answer được xóa về trạng thái ban đầu.

## Status / Related bugs

Fail / BUG-006

