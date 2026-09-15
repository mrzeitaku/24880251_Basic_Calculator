# TC-ERROR-005: Ký tự đặc biệt ở First number

## Requirement ID

FR-ERROR-05

## Module / Test type / Technique

Error Handling / Negative / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | @#$ |
| Second number | 5 |
| Operation | Add |

## Test steps

1. Nhập `@#$` và `5`.
2. Chọn `Add`.
3. Bấm `Calculate`.

## Expected result

Hiển thị lỗi First number không phải số.

## Status / Related bugs

Pass / None

