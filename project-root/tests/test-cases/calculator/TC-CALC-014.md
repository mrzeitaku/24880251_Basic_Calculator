# TC-CALC-014: Đổi phép toán sau khi nhập dữ liệu

## Requirement ID

FR-CALC-14

## Module / Test type / Technique

Calculator / Functional / State Transition Testing

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 9 |
| Second number | 3 |
| Initial operation | Add |
| Final operation | Multiply |

## Test steps

1. Nhập `9` và `3` vào hai ô số.
2. Chọn `Add`.
3. Đổi phép toán sang `Multiply`.
4. Bấm `Calculate`.

## Expected result

Answer hiển thị `27`, phản ánh phép toán được chọn cuối cùng.

## Status / Related bugs

Pass / None

