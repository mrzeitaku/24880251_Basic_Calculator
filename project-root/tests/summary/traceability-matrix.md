# Requirements Traceability Matrix (RTM)

## Requirement - Test Case - Bug Traceability

| Requirement ID | Requirement | Requirement -> Test Case | Test Case -> Requirement | Result | Bug Issue | Bug -> Test Case | Status |
|---|---|---|---|---|---|---|---|
| FR-CALC-01 | Phép cộng | TC-CALC-001 | FR-CALC-01 | Pass | None | N/A | Done |
| FR-CALC-02 | Phép chia | TC-CALC-002 | FR-CALC-02 | Fail | BUG-001 | TC-CALC-002 | Open / Ready for Retest |
| FR-CALC-03 | Validate Input | TC-CALC-003 | FR-CALC-03 | Pass | None | N/A | Done |
| FR-CALC-04 | Phép nhân | TC-CALC-004 | FR-CALC-04 | Pass | None | N/A | Done |
| FR-CALC-05 | Nối chuỗi | TC-CALC-005 | FR-CALC-05 | Pass | None | N/A | Done |
| FR-CALC-06 | Cộng số nguyên âm | TC-CALC-006 | FR-CALC-06 | Pass | None | N/A | Done |
| FR-CALC-07 | Trừ hai số dương | TC-CALC-007 | FR-CALC-07 | Pass | None | N/A | Done |
| FR-CALC-08 | Trừ ra số âm | TC-CALC-008 | FR-CALC-08 | Pass | None | N/A | Done |
| FR-CALC-09 | Nhân với số 0 | TC-CALC-009 | FR-CALC-09 | Pass | None | N/A | Done |
| FR-CALC-10 | Chia hết | TC-CALC-010 | FR-CALC-10 | Pass | None | N/A | Done |
| FR-CALC-11 | Chia số âm | TC-CALC-011 | FR-CALC-11 | Pass | None | N/A | Done |
| FR-CALC-12 | Cộng số thập phân | TC-CALC-012 | FR-CALC-12 | Pass | None | N/A | Done |
| FR-CALC-13 | Chế độ số nguyên | TC-CALC-013 | FR-CALC-13 | Pass | None | N/A | Done |
| FR-CALC-14 | Đổi phép toán | TC-CALC-014 | FR-CALC-14 | Pass | None | N/A | Done |
| FR-CALC-15 | Hai số bằng nhau | TC-CALC-015 | FR-CALC-15 | Pass | None | N/A | Done |
| FR-CALC-16 | Validate First number rỗng | TC-CALC-016 | FR-CALC-16 | Fail | BUG-002 | TC-CALC-016 | Open / Ready for Retest |
| FR-CALC-17 | Validate Second number rỗng | TC-CALC-017 | FR-CALC-17 | Fail | BUG-003 | TC-CALC-017 | Open / Ready for Retest |
| FR-CALC-18 | Validate cả hai ô rỗng | TC-CALC-018 | FR-CALC-18 | Fail | BUG-004 | TC-CALC-018 | Open / Ready for Retest |
| FR-CALC-19 | Validate ký tự đặc biệt First number | TC-CALC-019 | FR-CALC-19 | Pass | None | N/A | Done |
| FR-CALC-20 | Validate ký tự đặc biệt Second number | TC-CALC-020 | FR-CALC-20 | Pass | None | N/A | Done |
| FR-CALC-21 | Xử lý khoảng trắng | TC-CALC-021 | FR-CALC-21 | Pass | None | N/A | Done |
| FR-CALC-22 | Validate số thập phân | TC-CALC-022 | FR-CALC-22 | Pass | None | N/A | Done |
| FR-CALC-23 | Validate số âm | TC-CALC-023 | FR-CALC-23 | Pass | None | N/A | Done |
| FR-CALC-24 | Validate chuỗi Unicode | TC-CALC-024 | FR-CALC-24 | Pass | None | N/A | Done |
| FR-CALC-25 | Giới hạn số lớn | TC-CALC-025 | FR-CALC-25 | Fail | BUG-005 | TC-CALC-025 | Open / Ready for Retest |
| FR-CALC-26 | Clear dữ liệu | TC-CALC-026 | FR-CALC-26 | Fail | BUG-006 | TC-CALC-026 | Open / Ready for Retest |
| FR-CALC-27 | Bật Integers only | TC-CALC-027 | FR-CALC-27 | Pass | None | N/A | Done |
| FR-CALC-28 | Tắt Integers only | TC-CALC-028 | FR-CALC-28 | Pass | None | N/A | Done |
| FR-CALC-29 | Chọn Add | TC-CALC-029 | FR-CALC-29 | Pass | None | N/A | Done |
| FR-CALC-30 | Chọn Subtract | TC-CALC-030 | FR-CALC-30 | Pass | None | N/A | Done |
| FR-CALC-31 | Chọn Multiply | TC-CALC-031 | FR-CALC-31 | Pass | None | N/A | Done |
| FR-CALC-32 | Chọn Divide | TC-CALC-032 | FR-CALC-32 | Pass | None | N/A | Done |
| FR-CALC-33 | Chọn Concatenate | TC-CALC-033 | FR-CALC-33 | Pass | None | N/A | Done |
| FR-CALC-34 | Chuyển Build | TC-CALC-034 | FR-CALC-34 | Pass | None | N/A | Done |
| FR-CALC-35 | Reload trang | TC-CALC-035 | FR-CALC-35 | Pass | None | N/A | Done |

## Traceability Summary

- Mỗi requirement được ánh xạ tới test case tương ứng và ngược lại.
- Bug `BUG-001` được truy ngược tới `TC-CALC-002`.
- Các bug `BUG-002` đến `BUG-006` được truy ngược tới các test case tương ứng trong Sprint 2 và Sprint 3.
- `TC-CALC-002`, `TC-CALC-016`, `TC-CALC-017`, `TC-CALC-018`, `TC-CALC-025` và `TC-CALC-026` cần được retest sau khi sửa bug.

