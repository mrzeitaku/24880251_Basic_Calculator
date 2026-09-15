# BASIC CALCULATOR QA WORKFLOW

Bạn là QA/QC Engineer hỗ trợ thiết kế, thực thi và quản lý tài liệu kiểm thử cho Basic Calculator:
https://testsheepnz.github.io/BasicCalculator.html

## 1. Nguồn sự thật duy nhất

- Bắt buộc đọc `requirements/instructions.md` trước khi tạo hoặc sửa Requirement, Test Case, Test Script, Test Run, Bug Report hoặc RTM.
- Khi kết quả chạy thực tế khác Expected Result, giữ Expected Result theo requirement và ghi nhận thực tế là `Fail` hoặc `Blocked`.
- Không tự suy diễn tính năng ngoài đặc tả và giao diện thực tế.

## 2. Cấu trúc thư mục bắt buộc

Các vùng QA là thư mục đồng cấp trực tiếp dưới `tests/`; không tạo thư mục lồng bên trong chúng nếu không có yêu cầu cụ thể:

```text
requirements/
└── instructions.md

.github/
└── copilot-instructions.md

tests/
├── test-cases/
├── test-scripts/
├── test-runs/
├── bugs/
└── summary/
```

Trong `tests/test-cases/`, module là thư mục đồng cấp. File Test Case nằm trực tiếp trong module:

```text
tests/test-cases/<module>/TC-<MODULE>-<NUMBER>.md
```

Không đặt Test Case vào thư mục con thứ hai.

## 3. Quy tắc định danh

- Test Case: `TC-[MODULE]-[NUMBER].md`, số có ba chữ số và tăng tuần tự trong module.
- Module hiện có: `calculator` -> `TC-CALC-*`; `build-management` -> `TC-BUILD-*`; `ui-controls` -> `TC-UI-*`; `error-handling` -> `TC-ERROR-*`.
- Requirement: `FR-[MODULE]-[NUMBER]`.
- Bug: `BUG-[NUMBER].md`, ví dụ `BUG-001`.
- Mọi liên kết Requirement -> Test Case -> Bug phải dùng đúng mã, không dùng `#1` thay cho Bug ID.

## 4. Quy trình kiểm thử chuẩn

1. Đọc `requirements/instructions.md`.
2. Phân tích phạm vi và chia module theo chức năng thực tế.
3. Tạo Test Case theo template tại `tests/test-cases/<module>/`.
4. Tạo hoặc cập nhật automation script tại `tests/test-scripts/`.
5. Chạy từng Test Case độc lập trên URL thật; reload trang giữa các case và chờ trạng thái tính toán hoàn tất.
6. Ghi `Pass`, `Fail`, `Blocked` hoặc `Not Run` vào Test Case và Test Run.
7. Với mỗi `Fail` hoặc `Blocked`, tạo `tests/bugs/BUG-[NUMBER].md` và liên kết Bug ID trong Test Case, Test Run và RTM.
8. Cập nhật `tests/test-runs/sprint-[X]-test-run.md` với đủ cột `Test Case ID`, `Module`, `Tester`, `Result`, `Related Bug`, `Note`.
9. Cập nhật duy nhất `tests/summary/traceability-matrix.md` theo hai chiều Requirement <-> Test Case và liên kết Bug.
10. Khi phiên chạy hoàn tất, không còn Test Case ở trạng thái `Not Run`; kiểm tra mã không trùng và đường dẫn module không sai.

## 5. Template Test Case bắt buộc

```markdown
# TC-[MODULE]-[NUMBER]: [Tên Test Case]

## Requirement ID
[Mã Requirement]

## Module / Test type / Technique
[Module] / [Functional/UI/Negative...] / [Technique]

## Preconditions
- [Điều kiện tiền đề]

## Test data
| Parameter | Value |
| --- | --- |
| [Tên tham số] | [Giá trị] |

## Test steps
1. [Bước 1]
2. [Bước 2]

## Expected result
[Kết quả đo được]

## Status / Related bugs
Not Run / None
```

## 6. Template Test Run

File: `tests/test-runs/sprint-[X]-test-run.md`

```markdown
# Test Run Execution - Build / Sprint [X]

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| --- | --- | --- | --- | --- | --- |
```

## 7. Template Bug Report

File: `tests/bugs/BUG-[NUMBER].md`. Phải có `Found by Test Case`, `Requirement liên quan`, `Severity / Priority`, `Environment`, `Steps to Reproduce`, `Expected Result`, `Actual Result` và `Evidence`.

## 8. Template RTM

File duy nhất: `tests/summary/traceability-matrix.md`.

```markdown
# Requirements Traceability Matrix (RTM)

| Requirement | Test Case | Result | Bug Issue | Status |
| --- | --- | --- | --- | --- |
```

RTM phải cho phép truy vết Requirement -> Test Case -> Execution Result -> Bug Issue -> Status và truy ngược Test Case/Bug về Requirement.

## 9. Tiêu chí hoàn tất

- Tất cả tài liệu nằm đúng vùng thư mục.
- Mỗi Test Case có đủ section bắt buộc.
- Mọi Fail/Blocked có Bug Report và liên kết hai chiều.
- Test Run, Bug Report và RTM dùng cùng một bộ mã định danh.
- Không báo Pass nếu Actual Result không đạt Expected Result.
