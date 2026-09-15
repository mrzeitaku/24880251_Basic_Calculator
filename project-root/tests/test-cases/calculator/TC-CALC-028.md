# TC-CALC-028: Tắt tùy chọn Integers only

## Requirement ID

FR-CALC-28

## Module / Test type / Technique

Calculator / Functional / Decision Table

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.
- `Integers only` đang tắt.

## Test data

| Parameter | Value |
|---|---|
| First number | 7 |
| Second number | 2 |
| Operation | Divide |
| Integers only | Unchecked |

## Test steps

1. Nhập `7` và `2`.
2. Chọn `Divide`.
3. Đảm bảo `Integers only` tắt.
4. Bấm `Calculate`.

## Expected result

Answer giữ phần thập phân theo kết quả phép chia, dự kiến `3.5`.

## Status / Related bugs

Pass / None

