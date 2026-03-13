# Dora CS Platform — Tổng quan dự án

> Tài liệu này dành cho tất cả mọi người — không cần biết code để hiểu.

---

## Dora là gì?

**Dora** là một nền tảng quản lý chăm sóc khách hàng (Customer Service Platform) dạng SaaS multi-tenant. Dora được thiết kế **AI-first** — trí tuệ nhân tạo không phải tính năng "thêm vào cho vui", mà là trung tâm của toàn bộ sản phẩm.

Hãy tưởng tượng: thay vì thuê 10 nhân viên ngồi trả lời tin nhắn Zalo, Facebook, LINE cả ngày, Dora giúp **1 AI agent xử lý 60-70% câu hỏi tự động**, chỉ chuyển cho người thật khi cần thiết.

---

## Dora giải quyết vấn đề gì?

| Vấn đề hiện tại | Dora giải quyết thế nào |
|---|---|
| Khách nhắn trên Zalo, Facebook, LINE — mỗi nơi 1 cửa sổ, dễ bỏ sót | **Unified Inbox** — tất cả kênh về 1 nơi |
| Trả lời chậm, khách chờ lâu bỏ đi | **AI trả lời tức thì** (dưới 5 giây), 24/7 |
| Thuê nhiều nhân viên tốn kém | AI xử lý câu hỏi lặp đi lặp lại, **giảm 60% chi phí nhân sự** |
| Không biết chất lượng chăm sóc tốt hay dở | **Dashboard phân tích** — CSAT, thời gian phản hồi, hiệu suất từng agent |
| Mở rộng sang thị trường mới khó vì rào cản ngôn ngữ | AI hỗ trợ **đa ngôn ngữ**, bao gồm tiếng Nhật lịch sự (keigo) |
| Ticket bị mất, không ai theo dõi | **Ticket Management** tự động tạo, theo dõi lifecycle đến khi giải quyết |
| Không biết khi nào vi phạm SLA | **SLA tracking** với cảnh báo tự động khi sắp breach |

---

## Hai thị trường mục tiêu

### Việt Nam
- **Kênh chính:** Zalo OA, Facebook Messenger, Web Chat
- **Ngôn ngữ:** Tiếng Việt
- **Ngành tiêu biểu:** E-commerce, bán lẻ, dịch vụ
- **Compliance:** PDPA

### Nhật Bản
- **Kênh chính:** LINE Official Account (~95M MAU), Web Chat
- **Ngôn ngữ:** Tiếng Nhật (keigo — kính ngữ bắt buộc trong kinh doanh)
- **Ngành tiêu biểu:** Y tế, F&B, dịch vụ
- **Compliance:** APPI, Japan-region data residency

> Tại sao Nhật Bản? ARPU tại Nhật cao gấp 5-10 lần Việt Nam. LINE là kênh customer care #1 tại Nhật Bản.

---

## Kiến trúc tổng quan

**Modular Monolith → Microservices**: Dora bắt đầu với Modular Monolith cho MVP, thiết kế sẵn để tách thành microservices ở Phase 3.

**Tech stack:**

| Thành phần | Công nghệ |
|---|---|
| Backend | NestJS (TypeScript) |
| Frontend | Next.js 15 + shadcn/ui |
| Database | PostgreSQL + Prisma |
| Cache & Queue | Redis + BullMQ |
| AI | Claude API (Anthropic) |
| Realtime | Socket.IO |
| Shared Types | `@dora/types` monorepo package |

---

## Các thành phần chính

### 1. Intake Channels (Đầu tiếp nhận)

Tất cả các kênh khách hàng liên lạc đổ về một nơi duy nhất:

- **Chat Widget** — Embed vào website, live chat, pre-chat form, proactive chat
- **LINE Official Account** — Messaging API, Rich Menu, Flex Messages, LIFF
- **Zalo OA** — Webhook integration cho thị trường VN
- **Facebook Messenger** — Graph API integration
- **Email** — Shared inbox (support@), email-to-ticket, threading
- **Web Form** — Dynamic form builder, multi-step, auto-categorize
- **Self-Service Portal** — FAQ/Help Center, ticket status tracking

Mỗi kênh có **Channel Adapter** riêng theo abstract adapter pattern, chuyển đổi message format về UnifiedMessage DTO chung.

### 2. Hub Manager (Trung tâm quản lý)

- **Unified Inbox** — Omnichannel view, priority queue, SLA countdown, collision detection
- **Ticket Management** — Auto-create từ mọi kênh, lifecycle states, custom fields/tags, merge/split, internal notes
- **Routing & Assignment** — Round-robin, load-balanced, skill-based, language-based, VIP routing, AI smart routing
- **Workflow Automation** — Rule engine (IF-THEN), auto-tagging, auto-escalation, auto-close inactive, canned responses
- **SLA Management** — Define policies, breach alerts, business hours config
- **Collaboration** — @mention, shared drafts, side conversations, handoff notes

### 3. Agent System

#### Human Agent
- **Agent Workspace:** Customer 360° view, conversation history, KB sidebar, AI-suggested responses
- **Performance Tracking:** CSAT per agent, response/resolution time, QA quality score
- **Tools:** Saved replies, real-time translation

#### AI Agent
- **Chatbot Engine:** Intent recognition, entity extraction, multi-turn conversation, sentiment analysis, language detection
- **AI Capabilities:** Auto-resolve FAQ, ticket summarization, smart suggestions, auto-categorize, predictive routing, tone adjustment (keigo)
- **AI-Human Handoff:** Confidence threshold (< 75% → chuyển người), context passing, hybrid "Copilot Mode" (AI draft + human approve)
- **AI Personas:** Custom personality/tone per channel, brand voice config, multilingual

### 4. AI Copilot

Khi nhân viên trả lời khách, AI gợi ý câu trả lời sẵn — agent chỉ cần nhấn "Gửi" hoặc chỉnh sửa. Bao gồm:
- Draft response generation
- Conversation summarization
- Sentiment analysis → trigger escalation khi negative

### 5. Analytics & Dashboard

- Conversation stats: volume, AI resolution rate, response time
- AI performance: confidence distribution, escalation rate
- Agent performance: CSAT, throughput, leaderboard
- SLA compliance: breach rate, trends
- Export & advanced analytics

---

## Mô hình kinh doanh

Dora là **SaaS** — doanh nghiệp trả phí hàng tháng.

| Gói | Đối tượng | Tính năng chính |
|-----|----------|----------------|
| **Starter** | Cá nhân, shop nhỏ | 1 agent, 2 kênh, AI cơ bản |
| **Growth** | SMB đang phát triển | 5 agents, tất cả kênh, AI nâng cao, dashboard |
| **Enterprise** | Doanh nghiệp lớn | Không giới hạn, custom AI, SLA, dedicated support |

---

## Lộ trình phát triển

| Phase | Timeline | Nội dung chính |
|-------|----------|----------------|
| **Phase 0 — Foundation** | 2 tuần | Project setup, boilerplate, CI/CD, design system, sandbox accounts |
| **Phase 1 — MVP** | 10 tuần (5 sprints) | Conversation Engine, Unified Inbox, LINE + Zalo + Web Chat, AI Chatbot, Routing, Ticket, Dashboard, CSAT |
| **Phase 2 — Growth** | 10 tuần (5 sprints) | Facebook, Email, AI Copilot, SLA, Automation, Sentiment Analysis, Advanced Analytics |
| **Phase 3 — Scale** | 8 tuần (4 sprints) | Billing (Stripe/SePay), Public API, Webhook system, White-label, Elasticsearch, K8s deployment |

**Key Milestones:**

| Milestone | Target |
|-----------|--------|
| MVP Release | Giữa tháng 6/2026 |
| Growth Release | Cuối tháng 9/2026 |
| Platform Launch | Cuối tháng 12/2026 |

---

## Đội ngũ

| Role | Số lượng | Trách nhiệm |
|------|----------|-------------|
| PM | 1 | PRD, wireframe, API spec, stakeholder management |
| BE | 1 | NestJS backend, DB, API, WebSocket, AI integration, Channel Adapters |
| FE | 1 | Next.js 15, UI toàn bộ (Inbox, Widget, Dashboard, Admin) |
| QC | 1 | Test plan, Playwright automation, regression |

---

## Tại sao Dora khác biệt?

1. **Dual-market từ đầu** — Thiết kế cho cả VN + JP ngay từ ngày đầu, không phải port sau
2. **AI-first** — AI là trung tâm, không phải add-on
3. **Keigo-native** — Hiếm sản phẩm nào hỗ trợ kính ngữ tiếng Nhật đúng cách
4. **Giá cạnh tranh** — Zendesk, Freshdesk quá đắt cho SMB châu Á
5. **Full-stack TypeScript** — NestJS + Next.js + Prisma shared types, giảm bug interface BE/FE
6. **Modular Monolith** — Đơn giản cho MVP, sẵn sàng scale lên microservices

---

## Tài liệu liên quan

| Tài liệu | Vị trí |
|-----------|--------|
| Brainstorm — Customer Care Platform | `.bmad/docs/brainstorming-customer-care-platform-2026-03-13.md` |
| Brainstorm — Demo Pitching | `.bmad/docs/brainstorming-demo-pitching-2026-03-13.md` |
| Architecture Document | `.bmad/docs/architecture-dora-2026-03-13.md` |
| Timeline & Estimate | `.bmad/brainstorming-timeline-dora-2026-03-13.md` |

---

*Cập nhật: 13/03/2026*
