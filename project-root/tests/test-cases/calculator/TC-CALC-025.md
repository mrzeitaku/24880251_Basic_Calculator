# TC-CALC-025: Nhập số rất lớn

## Requirement ID

FR-CALC-25

## Module / Test type / Technique

Calculator / Robustness / Boundary Value Analysis

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.
- Phép toán `Add` được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 999999999999 |
| Second number | 1 |
| Operation | Add |

## Test steps

1. Nhập `999999999999` vào First number.
2. Nhập `1` vào Second number.
3. Bấm `Calculate`.

## Expected result

Hệ thống xử lý hoặc từ chối dữ liệu theo giới hạn đã định nghĩa một cách rõ ràng; không crash và không trả về kết quả sai không có thông báo.

## Status / Related bugs

Fail / BUG-005

