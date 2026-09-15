# TC-ERROR-006: Ký tự đặc biệt ở Second number

## Requirement ID

FR-ERROR-06

## Module / Test type / Technique

Error Handling / Negative / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 5 |
| Second number | @#$ |
| Operation | Subtract |

## Test steps

1. Nhập `5` và `@#$`.
2. Chọn `Subtract`.
3. Bấm `Calculate`.

## Expected result

Hiển thị lỗi Second number không phải số.

## Status / Related bugs

Pass / None

