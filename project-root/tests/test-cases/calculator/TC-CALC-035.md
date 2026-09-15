# TC-CALC-035: Tải lại trang sau khi nhập dữ liệu

## Requirement ID

FR-CALC-35

## Module / Test type / Technique

Calculator / Usability / Recovery Testing

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 9 |
| Second number | 3 |
| Operation | Divide |

## Test steps

1. Nhập dữ liệu vào hai ô số và chọn `Divide`.
2. Tải lại trang.
3. Kiểm tra trạng thái form.

## Expected result

Trang tải lại bình thường, form trở về trạng thái ban đầu và không giữ trạng thái tính toán lỗi.

## Status / Related bugs

Pass / None

