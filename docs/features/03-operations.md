# BACKEND VẬN HÀNH
## Từ đơn hàng đến giao hàng — tự động hóa toàn bộ

**Công ty:** Diso
**Module:** Backend Vận hành (Pillar 3/5)
**Thời gian triển khai:** Có sẵn

---

## VẤN ĐỀ

### "Đơn hàng nhiều lên, quản lý bằng Excel vỡ trận"

- **100 đơn/ngày** là bắt đầu rối — đối soát vận chuyển sai, tính hoa hồng nhầm
- Kế toán khóc vì phải đối soát bằng tay: đơn hàng, hoa hồng affiliate, hoa hồng reseller, thưởng đại sứ
- Mỗi hãng vận chuyển 1 hệ thống riêng — phải mở 4 tab để theo dõi
- Data khách hàng nằm rải rác — không chăm sóc, không tái mua được

### Thực tế vận hành

- Doanh nghiệp bán online cần đối soát **4 loại**: đơn hàng, affiliate, reseller, đại sứ
- Bán trên sàn chỉ có **1 loại** đối soát (của sàn) — và sàn quyết định, không phải bạn
- Tự build hệ thống vận hành đầy đủ: cần team dev riêng, chi phí **50-100 triệu/tháng** lương

---

## GIẢI PHÁP: DISO BACKEND VẬN HÀNH

Một nơi quản lý tất cả — đơn hàng, vận chuyển, tồn kho, đối soát, khách hàng.

### Tính năng chính

#### 📦 Quản lý đơn hàng tập trung
- **1 dashboard** xem tất cả đơn hàng (từ website, affiliate, reseller)
- Trạng thái đơn real-time (mới, xác nhận, đang giao, hoàn thành, hoàn trả)
- Lọc, tìm kiếm, xuất báo cáo
- Xử lý đổi trả chuyên nghiệp

#### 🚚 Tích hợp vận chuyển
- **4 hãng vận chuyển lớn nhất:** GHN, GHTK, Viettel Post, J&T
- Tạo vận đơn **1 click** — không cần mở website từng hãng
- Tracking real-time trên cùng dashboard
- So sánh phí ship tự động — chọn hãng tối ưu nhất

#### 📊 Quản lý tồn kho
- Theo dõi tồn kho real-time
- **Cảnh báo hết hàng tự động** — không bao giờ bán quá số lượng
- Quản lý nhiều kho (nếu có)
- Báo cáo tồn kho theo sản phẩm, biến thể

#### ✅ Đối soát tự động — 4 loại

| Loại đối soát | Mô tả |
|---|---|
| **1. Đơn hàng** | Khớp đơn → vận chuyển → thanh toán → hoàn thành |
| **2. Hoa hồng Affiliate** | Đơn từ affiliate nào → hoa hồng bao nhiêu → chi trả |
| **3. Hoa hồng Reseller** | Doanh số reseller → tier → hoa hồng → chi trả |
| **4. Thưởng Đại sứ** | Content đã duyệt → views/engagement → thưởng |

> **So sánh:** Bán trên Sàn chỉ có 1 loại (của sàn). Tự Build phải code từng loại. Diso có sẵn cả 4.

#### 👥 CRM Khách hàng
- Database khách hàng **của bạn** (không phải của sàn)
- Lịch sử mua hàng, giá trị đơn trung bình
- Phân nhóm khách: mới, quay lại, VIP
- Chăm sóc, gửi khuyến mãi → tăng tái mua

#### 📈 Analytics Real-time
- Doanh thu theo ngày/tuần/tháng
- Đơn hàng theo trạng thái
- Hiệu quả từng kênh (website trực tiếp, affiliate, reseller)
- Top sản phẩm, top affiliate, top reseller

#### 🔐 Phân quyền Admin
- **Root:** Toàn quyền hệ thống
- **Admin:** Quản lý đơn hàng, sản phẩm, báo cáo
- **Collaborator:** Quyền hạn chế theo role (kho, CS, marketing)

---

## SO SÁNH

| Tiêu chí | Tự Build (thuê dev) | Bán trên Sàn | Diso |
|---|---|---|---|
| **Quản lý đơn tập trung** | Tự code | ✅ Của sàn | ✅ 1 nơi xem tất cả |
| **Tích hợp vận chuyển** | Tự tích hợp từng API | ✅ Sàn lo | ✅ 4 hãng, 1 click |
| **Quản lý tồn kho** | Tự code | ✅ Cơ bản | ✅ Cảnh báo tự động |
| **Đối soát đơn hàng** | Tự code | Sàn quyết định | ✅ Tự động |
| **Đối soát affiliate** | Tự code | ❌ | ✅ Tự động |
| **Đối soát reseller** | Tự code | ❌ | ✅ Tự động |
| **Đối soát đại sứ** | Tự code | ❌ | ✅ Tự động |
| **CRM khách hàng** | Tự code hoặc mua tool | ❌ Data của sàn | ✅ Chăm sóc, tái mua |
| **Analytics** | Tự code | ✅ Cơ bản | ✅ Real-time, chi tiết |
| **Phân quyền** | Tự code | ❌ Hạn chế | ✅ 3 cấp quyền |

---

## USE CASE

### Workflow: Xử lý đơn hàng từ A-Z

```
Khách đặt hàng trên website
    │
    ├── Hệ thống tự động ghi nhận
    │   ├── Cập nhật tồn kho
    │   ├── Ghi nhận nguồn (affiliate/reseller/direct)
    │   └── Thông báo cho admin
    │
    ├── Admin xác nhận đơn
    │   ├── Tạo vận đơn 1 click (chọn GHN/GHTK/J&T/Viettel Post)
    │   └── In phiếu giao hàng
    │
    ├── Theo dõi giao hàng real-time
    │   ├── Tracking trên dashboard
    │   └── Cập nhật trạng thái tự động
    │
    └── Hoàn thành đơn
        ├── Đối soát đơn hàng ✅
        ├── Tính hoa hồng affiliate (nếu có) ✅
        ├── Tính hoa hồng reseller (nếu có) ✅
        └── Cập nhật CRM khách hàng ✅
```

### Ví dụ thực tế

> **Brand thời trang** có 200 đơn/ngày từ 3 kênh: website, 30 affiliate, 20 reseller.
> Trước Diso: 2 nhân viên kế toán đối soát bằng Excel, sai sót 5-10%.
> Sau Diso: **Tự động 100%** — 0 nhân viên đối soát, sai sót 0%.

---

## CON SỐ QUAN TRỌNG

| | |
|---|---|
| **4 loại** | Đối soát tự động (đơn hàng, affiliate, reseller, đại sứ) |
| **4 hãng** | Vận chuyển tích hợp (GHN, GHTK, J&T, Viettel Post) |
| **1 click** | Tạo vận đơn — không mở website hãng vận chuyển |
| **100%** | Data khách hàng thuộc về bạn |

---

## KẾT NỐI VỚI CÁC MODULE KHÁC

Backend Vận hành là **xương sống** — xử lý mọi thứ phía sau:

- **← Website TMĐT:** Đơn hàng từ website → xử lý tự động
- **← Affiliate Marketing:** Đối soát hoa hồng affiliate tự động
- **← Reseller Network:** Đối soát hoa hồng reseller tự động
- **← Đại sứ Thương hiệu:** Đối soát thưởng đại sứ tự động

---

## CTA

> **Xem hệ thống vận hành tự động hoạt động — Demo miễn phí 30 phút**
> Không cam kết. Không phí.

---

*Diso Commerce Suite — Backend Vận hành*
*Module 3/5 | v1.0 | 2026-03-10*
