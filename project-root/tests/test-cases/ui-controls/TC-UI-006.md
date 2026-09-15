# TC-UI-006: Xóa dữ liệu bằng Clear

## Requirement ID

FR-UI-06

## Module / Test type / Technique

UI Controls / Functional / State Transition Testing

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 5 |
| Second number | 10 |
| Operation | Add |

## Test steps

1. Nhập dữ liệu và bấm `Calculate`.
2. Bấm `Clear`.
3. Kiểm tra ba ô dữ liệu.

## Expected result

First number, Second number và Answer đều được xóa.

## Status / Related bugs

Fail / BUG-006

