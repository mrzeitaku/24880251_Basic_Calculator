# TC-CALC-013: Làm tròn kết quả phép chia về số nguyên

## Requirement ID

FR-CALC-13

## Module / Test type / Technique

Calculator / Functional / Decision Table

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.
- Tùy chọn `Integers only` bật.

## Test data

| Parameter | Value |
|---|---|
| First number | 7 |
| Second number | 2 |
| Operation | Divide |
| Integers only | Checked |

## Test steps

1. Nhập `7` vào First number.
2. Nhập `2` vào Second number.
3. Chọn `Divide`.
4. Bật `Integers only`.
5. Bấm `Calculate`.

## Expected result

Answer hiển thị kết quả nguyên theo quy tắc làm tròn của hệ thống, không hiển thị chuỗi lỗi.

## Status / Related bugs

Pass / None

