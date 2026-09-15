# TC-CALC-033: Chọn Concatenate và kiểm tra trạng thái checkbox

## Requirement ID

FR-CALC-33

## Module / Test type / Technique

Calculator / Functional / State Transition Testing

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | A |
| Second number | B |
| Operation | Concatenate |

## Test steps

1. Nhập `A` và `B`.
2. Chọn `Concatenate`.
3. Kiểm tra trạng thái `Integers only`.
4. Bấm `Calculate`.

## Expected result

`Integers only` bị vô hiệu hóa và Answer hiển thị `AB`.

## Status / Related bugs

Pass / None

