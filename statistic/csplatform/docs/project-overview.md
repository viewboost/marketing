# Dora — Tổng quan dự án

> Tài liệu này dành cho tất cả mọi người — không cần biết code để hiểu.

---

## Dora là gì?

**Dora** là một nền tảng quản lý chăm sóc khách hàng thông minh, sử dụng AI để giúp doanh nghiệp vừa và nhỏ (SMB) trả lời khách hàng nhanh hơn, chính xác hơn, và tiết kiệm chi phí hơn.

Hãy tưởng tượng: thay vì thuê 10 nhân viên ngồi trả lời tin nhắn Zalo, Facebook, LINE cả ngày, Dora giúp **1 AI agent xử lý 60-70% câu hỏi tự động**, chỉ chuyển cho người thật khi cần thiết.

---

## Dora giải quyết vấn đề gì?

| Vấn đề hiện tại | Dora giải quyết thế nào |
|---|---|
| Khách nhắn trên Zalo, Facebook, LINE — mỗi nơi 1 cửa sổ, dễ bỏ sót | **Hộp thư hợp nhất (Unified Inbox)** — tất cả kênh về 1 nơi |
| Trả lời chậm, khách chờ lâu bỏ đi | **AI trả lời tức thì** (dưới 5 giây), 24/7 |
| Thuê nhiều nhân viên tốn kém | AI xử lý câu hỏi lặp đi lặp lại, **giảm 60% chi phí nhân sự** |
| Không biết chất lượng chăm sóc tốt hay dở | **Dashboard phân tích** — CSAT, thời gian phản hồi, hiệu suất từng agent |
| Mở rộng sang thị trường mới (Nhật Bản) khó vì rào cản ngôn ngữ | AI hỗ trợ **tiếng Nhật lịch sự (keigo)** tự động |

---

## Hai thị trường mục tiêu

### Việt Nam
- **Kênh chính:** Zalo OA, Facebook Messenger, Web Chat
- **Ngôn ngữ:** Tiếng Việt
- **Ngành tiêu biểu:** E-commerce, bán lẻ, dịch vụ

### Nhật Bản
- **Kênh chính:** LINE Official Account, Web Chat
- **Ngôn ngữ:** Tiếng Nhật (keigo — ngôn ngữ lịch sự bắt buộc trong kinh doanh)
- **Ngành tiêu biểu:** Y tế (phòng khám), F&B (nhà hàng), dịch vụ

> Tại sao Nhật Bản? Doanh thu trung bình mỗi khách hàng (ARPU) tại Nhật cao gấp 5-10 lần Việt Nam.

---

## Các tính năng chính

### 1. Hộp thư hợp nhất (Unified Inbox)
Tất cả tin nhắn từ Zalo, Facebook, LINE, Email, Web Chat đổ về một nơi duy nhất. Nhân viên không cần mở nhiều tab — chỉ cần mở Dora.

### 2. AI Agent tự động trả lời
- Hiểu câu hỏi của khách và trả lời dựa trên cơ sở kiến thức (Knowledge Base) của doanh nghiệp
- Biết khi nào nên chuyển cho người thật (ví dụ: khách nổi giận, vấn đề phức tạp)
- Hiển thị **độ tin cậy** (confidence score) để nhân viên biết AI trả lời có đáng tin không

### 3. AI Copilot cho nhân viên
Khi nhân viên (agent) trả lời khách, AI gợi ý câu trả lời sẵn — agent chỉ cần nhấn "Gửi" hoặc chỉnh sửa nhẹ. Tiết kiệm thời gian soạn tin nhắn.

### 4. Dashboard phân tích
- Bao nhiêu cuộc hội thoại hôm nay?
- AI giải quyết được bao nhiêu %?
- Thời gian phản hồi trung bình?
- Khách hàng hài lòng không (CSAT)?
- So sánh hiệu suất AI vs nhân viên

### 5. Quản lý đa kênh
Kết nối tất cả kênh chat phổ biến. Mỗi kênh có adapter riêng, doanh nghiệp chỉ cần bật/tắt kênh nào muốn dùng.

### 6. Định tuyến thông minh (Smart Routing)
Ticket mới vào → Dora tự động nhận diện ngôn ngữ → chọn kênh phù hợp → giao cho AI hoặc nhân viên phù hợp → theo dõi đến khi giải quyết xong.

---

## Demo Platform là gì?

Đây là **bộ demo trực quan** để trình bày Dora cho khách hàng tiềm năng, nhà đầu tư, và đối tác. Thay vì nói suông, chúng ta cho họ **xem và cảm nhận** sản phẩm.

### Cấu trúc demo

```
Demo Hub (Trang chính)
  ├── Sakura Clinic (Phòng khám Nhật Bản)
  ├── VN Shop (Cửa hàng Việt Nam)
  └── Tokyo Ramen (Nhà hàng Nhật Bản)
      │
      ├── Customer View — Khách hàng nhìn thấy gì (chat widget)
      ├── Agent View — Nhân viên nhìn thấy gì (hộp thư)
      ├── AI Demo — AI hoạt động thế nào (split-screen)
      ├── Dashboard — Số liệu phân tích
      ├── Channels — Kênh nào đã kết nối
      └── Routing — Luồng xử lý ticket
```

### 3 ngành mẫu

| Demo | Ngành | Thị trường | Kênh | Mục đích |
|------|-------|-----------|------|----------|
| **Sakura Clinic** | Y tế | Nhật Bản | LINE, Web Chat | Đặt lịch khám, hỏi đáp sức khỏe, chăm sóc bệnh nhân |
| **VN Shop** | E-commerce | Việt Nam | Zalo, Facebook, Web Chat | Theo dõi đơn hàng, đổi trả, tư vấn sản phẩm |
| **Tokyo Ramen** | F&B | Nhật Bản | LINE, Web Chat | Đặt bàn, menu, chương trình khách hàng thân thiết |

### 5 khoảnh khắc "WOW"

1. **Split-screen** — Cùng lúc thấy khách nhắn bên trái, nhân viên + AI xử lý bên phải
2. **AI Keigo Toggle** — Chuyển ngôn ngữ Việt ↔ Nhật, AI tự chuyển giọng văn lịch sự
3. **LINE → Inbox** — Tin nhắn LINE đổ thẳng vào hộp thư hợp nhất
4. **Confidence Meter** — AI hiển thị % độ tin cậy, dưới 75% tự chuyển cho người
5. **ROI Calculator** — Tính tiền tiết kiệm được khi dùng Dora

---

## Các file trong dự án

```
cs-platform/
├── index.html              ← Trang chủ Demo Hub
├── client-hub.html          ← Trang chi tiết từng ngành (3 clients × 6 views)
├── ai-demo.html             ← Demo AI split-screen (WOW moment #1)
├── agent.html               ← Giao diện nhân viên (Unified Inbox)
├── admin.html               ← Dashboard phân tích
└── docs/
    ├── project-overview.md              ← Tài liệu này
    ├── design-guidelines.md             ← Quy chuẩn thiết kế (màu sắc, font, spacing)
    ├── brainstorming-demo-pitching-*.md  ← Phân tích chiến lược demo
    ├── brainstorming-customer-care-*.md  ← Phân tích nhu cầu chăm sóc khách hàng
    ├── architecture-dora-*.md           ← Kiến trúc hệ thống (dành cho dev)
    └── research-line-messaging-api.md   ← Nghiên cứu LINE API
```

---

## Công nghệ sử dụng (tóm tắt đơn giản)

| Thành phần | Công nghệ | Giải thích dễ hiểu |
|---|---|---|
| Giao diện | HTML, CSS, JavaScript | Mở bằng trình duyệt, không cần cài đặt gì |
| Font chữ | Inter + Noto Sans JP | Inter cho tiếng Anh/Việt, Noto Sans JP cho tiếng Nhật |
| Icon | Lucide | Bộ icon miễn phí, đẹp, nhẹ |
| Backend (sắp tới) | NestJS | Bộ não xử lý logic phía server |
| AI | Claude API | Trí tuệ nhân tạo của Anthropic — trả lời thông minh, tự nhiên |
| Database | PostgreSQL | Nơi lưu trữ dữ liệu khách hàng, hội thoại |
| Realtime | Socket.IO | Tin nhắn hiện lên tức thì, không cần F5 |

---

## Mô hình kinh doanh

Dora là **SaaS (Software as a Service)** — doanh nghiệp trả phí hàng tháng để sử dụng.

| Gói | Đối tượng | Tính năng chính |
|-----|----------|----------------|
| **Starter** | Cá nhân, shop nhỏ | 1 agent, 2 kênh, AI cơ bản |
| **Growth** | SMB đang phát triển | 5 agents, tất cả kênh, AI nâng cao, dashboard |
| **Enterprise** | Doanh nghiệp lớn | Không giới hạn, custom AI, SLA, dedicated support |

---

## Lộ trình

| Giai đoạn | Thời gian | Nội dung |
|-----------|-----------|----------|
| **Phase 1 — MVP** | Q2 2026 | Chat Widget, LINE, Zalo, Unified Inbox, AI Chatbot, CSAT |
| **Phase 2 — Growth** | Q3 2026 | Facebook, Email, AI Copilot, Automation, Analytics |
| **Phase 3 — Scale** | Q4 2026 | Multi-tenant nâng cao, Marketplace, API mở |

---

## Tại sao Dora khác biệt?

1. **Dual-market từ đầu** — Không phải sản phẩm VN port sang Nhật, mà thiết kế cho cả hai từ ngày đầu
2. **AI-first** — AI không phải "thêm vào cho vui" mà là trung tâm của sản phẩm
3. **Keigo-native** — Hiếm sản phẩm nào hỗ trợ ngôn ngữ lịch sự tiếng Nhật đúng cách
4. **Giá cạnh tranh** — Zendesk, Freshdesk quá đắt cho SMB châu Á. Dora nhắm đúng phân khúc này

---

*Cập nhật: 13/03/2026*
