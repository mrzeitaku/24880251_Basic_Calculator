# TC-ERROR-002: First number không phải số

## Requirement ID

FR-ERROR-02

## Module / Test type / Technique

Error Handling / Negative / Equivalence Partitioning

## Preconditions

- Trang Basic Calculator được mở.
- Build Prototype được chọn.

## Test data

| Parameter | Value |
|---|---|
| First number | abc |
| Second number | 10 |
| Operation | Add |

## Test steps

1. Nhập `abc` và `10`.
2. Chọn `Add`.
3. Bấm `Calculate`.

## Expected result

Hiển thị `Number 1 is not a number` và không crash.

## Status / Related bugs

Pass / None

