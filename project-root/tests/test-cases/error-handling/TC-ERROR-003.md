# TC-ERROR-003: Second number không phải số

## Requirement ID

FR-ERROR-03

## Module / Test type / Technique

Error Handling / Negative / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | 10 |
| Second number | xyz |
| Operation | Add |

## Test steps

1. Nhập `10` và `xyz`.
2. Chọn `Add`.
3. Bấm `Calculate`.

## Expected result

Hiển thị `Number 2 is not a number` và không crash.

## Status / Related bugs

Pass / None

