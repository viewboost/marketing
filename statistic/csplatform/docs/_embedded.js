const EMBEDDED_DOCS = {
  "project-overview": `# Dora — Tổng quan dự án

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

\`\`\`
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
\`\`\`

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

\`\`\`
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
\`\`\`

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
`,
  "architecture": `# Architecture Document: Dora — Customer Care Management Platform

**Version:** 1.0.0
**Date:** 2026-03-13
**Status:** Draft — Architecture Review
**Author:** System Architect
**Source:** Brainstorming Session 2026-03-13

---

## Table of Contents

1. [Overview & Pattern](#1-overview--pattern)
2. [Technology Stack](#2-technology-stack)
3. [System Components](#3-system-components)
4. [Data Architecture](#4-data-architecture)
5. [API Design](#5-api-design)
6. [Real-time Architecture](#6-real-time-architecture)
7. [AI Architecture](#7-ai-architecture)
8. [Channel Adapter Architecture](#8-channel-adapter-architecture)
9. [Security Architecture](#9-security-architecture)
10. [Scalability & Performance](#10-scalability--performance)
11. [Reliability & Monitoring](#11-reliability--monitoring)
12. [Development & Deployment](#12-development--deployment)
13. [Trade-offs & Decisions (ADR)](#13-trade-offs--decisions-adr)
14. [FR & NFR Traceability](#14-fr--nfr-traceability)
15. [MVP Architecture Diagram](#15-mvp-architecture-diagram)

---

## 1. Overview & Pattern

### 1.1 Tầm nhìn hệ thống

Dora là một **multi-tenant SaaS platform** phục vụ SMBs tại **Việt Nam** và **Nhật Bản**, cung cấp giải pháp chăm sóc khách hàng omnichannel với AI-first architecture. Hệ thống hợp nhất mọi kênh tiếp nhận (chat widget, form, LINE, Zalo OA, Facebook Messenger) vào một unified inbox, hỗ trợ AI chatbot tự động hóa tier-1 support (multilingual: VN, JP keigo, EN) và cung cấp tools cho human agents xử lý escalation.

**Target Markets:**
- **Nhật Bản**: LINE Official Account là kênh chính (~95M MAU). Yêu cầu keigo (kính ngữ), APPI compliance, Japan-region data residency
- **Việt Nam**: Zalo OA + Facebook Messenger. PDPA compliance

### 1.2 Architectural Pattern: Modular Monolith → Microservices

#### Lựa chọn: Modular Monolith cho MVP

Dora bắt đầu với **Modular Monolith** (còn gọi là Majestic Monolith) và thiết kế sẵn để tách thành microservices ở Phase 3.

**Lý do chọn Modular Monolith cho MVP:**

| Tiêu chí | Modular Monolith | Microservices ngay từ đầu |
|----------|-----------------|--------------------------|
| Time to market | Nhanh hơn 40-60% | Chậm (overhead setup) |
| Team size phù hợp | 3-8 engineers | 10+ engineers |
| Operational complexity | Thấp (1 deployment unit) | Cao (service mesh, k8s) |
| Debugging/tracing | Đơn giản | Phức tạp (distributed tracing) |
| Cost infrastructure | Thấp (\$200-500/tháng) | Cao (\$1000+/tháng) |
| Refactor flexibility | Cao (bounded context rõ ràng) | Khó sau khi tách sai |

**Điều kiện để migrate sang Microservices (Phase 3):**
- Tenant count > 1,000
- Team > 15 engineers
- Specific modules có bottleneck rõ ràng (e.g., AI Service, Channel Adapter)
- Revenue đủ justify operational cost tăng

**Chiến lược module boundaries** — mỗi module trong monolith sẽ trở thành một microservice:
- \`tenant-auth\` → Auth Service
- \`channel-adapter\` → Channel Gateway Service
- \`conversation-engine\` → Conversation Service
- \`ai-service\` → AI Processing Service
- \`analytics\` → Analytics Service

### 1.3 High-level System Diagram

\`\`\`mermaid
graph TB
    subgraph Clients["Client Layer"]
        CW[Chat Widget<br/>embed.js]
        WA[Web App<br/>Next.js 15]
        MB[Mobile App<br/>Future]
    end

    subgraph Channels["External Channels"]
        LN[LINE Official Account<br/>Webhook]
        ZL[Zalo OA<br/>Webhook]
        FB[Facebook Messenger<br/>Webhook]
        EM[Email<br/>SMTP/IMAP]
        WF[Web Form]
    end

    subgraph Gateway["API Gateway / BFF"]
        AG[API Gateway<br/>NestJS + Guard]
        WS[WebSocket Server<br/>Socket.IO]
    end

    subgraph Core["Core Application — Modular Monolith (NestJS)"]
        direction TB
        TA[Tenant & Auth Module]
        CA[Channel Adapter Module]
        CE[Conversation Engine Module]
        TM[Ticket Management Module]
        RE[Routing & Assignment Module]
        AI[AI Service Module]
        KB[Knowledge Base Module]
        NS[Notification Module]
        AN[Analytics Module]
    end

    subgraph Data["Data Layer"]
        PG[(PostgreSQL<br/>Primary DB)]
        RD[(Redis<br/>Cache + PubSub + Queue)]
        S3[(S3 / MinIO<br/>File Storage)]
        ES[(Elasticsearch<br/>Phase 3)]
    end

    subgraph External["External Services"]
        LLM[Claude API / OpenAI]
        LNA[LINE Messaging API<br/>api.line.me]
        ZLA[Zalo API]
        FBA[Facebook Graph API]
        SMTP[SMTP Provider<br/>SendGrid/SES]
        SMS[SMS Gateway]
    end

    CW --> AG
    WA --> AG
    LN --> CA
    ZL --> CA
    FB --> CA
    EM --> CA
    WF --> AG

    AG --> TA
    AG --> CE
    AG --> TM
    AG --> KB
    AG --> AN
    WS --> CE

    CA --> CE
    CE --> TM
    CE --> RE
    CE --> AI
    AI --> KB
    AI --> LLM
    RE --> NS
    NS --> SMTP
    NS --> SMS

    Core --> PG
    Core --> RD
    Core --> S3

    CA --> LNA
    CA --> ZLA
    CA --> FBA
\`\`\`

---

## 2. Technology Stack

### 2.1 Frontend

#### Next.js 15 (App Router) + TypeScript

| | |
|--|--|
| **Choice** | Next.js 15 với App Router, TypeScript strict mode |
| **Rationale** | Server Components giảm bundle size ~40%. App Router hỗ trợ streaming, parallel routes (split layout giữa conversation list và detail). TypeScript bắt buộc cho codebase scale. RSC cho dashboard analytics (data heavy). Client Components cho real-time chat. |
| **Trade-offs** | App Router learning curve cao hơn Pages Router. Caching behavior phức tạp hơn (request memoization, data cache, full route cache). |
| **Packages** | Tailwind CSS v4, shadcn/ui, TanStack Query v5, Zustand, Socket.IO Client, React Hook Form + Zod |

**Tại sao shadcn/ui thay vì MUI hay Ant Design:**
- Copy-paste component ownership (không vendor lock-in)
- Tailwind-native, bundle size nhỏ
- Radix UI primitives có accessibility tốt
- Customizable hoàn toàn cho white-label (Phase 3)

### 2.2 Backend

#### Node.js + NestJS

| | |
|--|--|
| **Choice** | Node.js 22 LTS + NestJS v11 |
| **Rationale** | NestJS cung cấp module system phù hợp cho Modular Monolith pattern. DI container, Guards, Interceptors, Pipes giúp cross-cutting concerns (auth, logging, validation) clean. Decorator-based routing dễ đọc. Tích hợp tốt với TypeScript. Cộng đồng lớn, ecosystem phong phú. |
| **Trade-offs** | NestJS có overhead startup time so với bare Express. Decorator magic có thể confusing cho newcomers. |
| **Key NestJS features used** | \`@Module()\` cho bounded contexts, \`Guards\` cho RBAC, \`Interceptors\` cho logging/transform, \`Pipes\` cho validation, \`EventEmitter2\` cho in-process events, \`BullMQ\` integration |

### 2.3 Database

#### PostgreSQL 16 (Primary)

| | |
|--|--|
| **Choice** | PostgreSQL 16 với Row-Level Security (RLS) |
| **Rationale** | RLS là cơ chế built-in để isolate tenant data — mỗi query tự động filter theo \`tenant_id\` set trong session variable. JSONB cho custom fields linh hoạt. Full-text search (FTS) với \`tsvector\` đủ cho MVP (Phase 1-2). Mature, ACID compliant. |
| **Multi-tenancy approach** | Shared schema với \`tenant_id\` column + RLS policies. Trade-off: đơn giản hơn separate schema/database approach nhưng cần careful index strategy. |
| **Trade-offs** | Khi tenant count > 5,000, RLS overhead tăng. Cần xem xét partitioning aggressively. |

**ORM: Prisma**
- Type-safe queries, auto-generated types từ schema
- Migration system tốt (\`prisma migrate dev/deploy\`)
- Tốt hơn Drizzle cho team productivity ở MVP stage
- Trade-off: Prisma Client sinh code lớn, N+1 cần \`include\` cẩn thận

#### Redis 7 (Cache + PubSub + Queue)

| | |
|--|--|
| **Choice** | Redis 7 với Redis Cluster (production) |
| **Rationale** | Multi-purpose: session store, conversation cache, pub/sub cho real-time events giữa server instances, BullMQ job queue backend. Single data store giảm operational complexity. |
| **Use cases** | Session tokens (TTL 24h), active conversation cache (TTL 5min), agent presence (TTL 30s heartbeat), rate limiting counters, BullMQ queues |
| **Trade-offs** | Redis là in-memory → data loss nếu không có persistence (AOF). Phải enable AOF + RDB cho production. |

### 2.4 Real-time

#### Socket.IO 4

| | |
|--|--|
| **Choice** | Socket.IO 4 với Redis adapter |
| **Rationale** | Socket.IO Redis Adapter cho phép multiple server instances share rooms/events qua Redis pub/sub. Fallback WebSocket → HTTP long-polling tự động. Namespace isolation (\`/agent\`, \`/customer\`). Room-based messaging tự nhiên với conversation model. |
| **Trade-offs** | Socket.IO có overhead nhẹ so với native WebSocket (~5-10%). Nhưng fallback và auto-reconnect đáng giá cho production reliability. |

### 2.5 AI Integration

#### Claude API / OpenAI API với Abstraction Layer

| | |
|--|--|
| **Choice** | Provider-agnostic AI layer, primary: Claude Sonnet, fallback: GPT-4o |
| **Rationale** | Không vendor lock-in. Claude tốt cho Vietnamese language understanding. Abstraction layer cho phép switch provider dựa theo cost/quality/availability. |
| **Implementation** | \`AIProvider\` interface → \`ClaudeProvider\`, \`OpenAIProvider\`, \`LocalProvider\` (Ollama cho self-hosted option Phase 3) |
| **Trade-offs** | Abstraction layer thêm complexity. Mỗi provider có API quirks riêng cần handle. |

### 2.6 Message Queue

#### BullMQ (Redis-backed)

| | |
|--|--|
| **Choice** | BullMQ v5 |
| **Rationale** | BullMQ xây trên Redis (đã có sẵn), hỗ trợ job priority, delay, retry với backoff, concurrency per worker, job events. Phù hợp cho: AI processing queue, notification dispatch, webhook delivery, report generation. |
| **Trade-offs** | Tied to Redis availability. Nếu Redis down, queue down. Cần Redis Sentinel/Cluster cho HA. |
| **Queues** | \`ai.processing\`, \`notification.email\`, \`notification.push\`, \`channel.webhook\`, \`analytics.events\`, \`report.generation\` |

### 2.7 File Storage

#### S3-compatible (AWS S3 / MinIO)

| | |
|--|--|
| **Choice** | MinIO (self-hosted dev/staging) → AWS S3 (production) |
| **Rationale** | S3 API là standard. MinIO cho local dev không cần cloud credentials. Production switch to S3 chỉ cần đổi endpoint/credentials. Presigned URLs cho direct upload từ browser (không qua backend). |
| **Trade-offs** | Self-hosted MinIO cần ops overhead. AWS S3 có egress cost. |

### 2.8 Search

#### Phase 1-2: PostgreSQL FTS; Phase 3: Elasticsearch

| | |
|--|--|
| **MVP Choice** | PostgreSQL \`tsvector\` + \`tsquery\` với \`pg_trgm\` extension |
| **Rationale** | Đủ cho MVP. KB articles < 100K documents. FTS index với GIN. Tránh thêm component. |
| **Phase 3 Choice** | Elasticsearch 8 hoặc OpenSearch |
| **Migration trigger** | KB > 500K articles, search latency > 200ms, cần faceted search |

### 2.9 Infrastructure

| Layer | Tool | Rationale |
|-------|------|-----------|
| Dev | Docker Compose | Full stack local với 1 command |
| Staging | Docker Swarm / Railway | Simple, cost-effective |
| Production Phase 1-2 | Docker + Managed Services (RDS, ElastiCache) | Giảm ops burden |
| Production Phase 3 | Kubernetes (EKS/GKE) | Khi cần auto-scaling microservices |

### 2.10 CI/CD

#### GitHub Actions

- **Trigger**: Push to \`main\` (staging deploy), tag \`v*.*.*\` (production)
- **Pipeline**: Lint → Type Check → Unit Tests → Integration Tests → Build → Security Scan → Deploy
- **Secrets**: GitHub Secrets → AWS SSM Parameter Store

### 2.11 Monitoring Stack

| Tool | Purpose | Rationale |
|------|---------|-----------|
| Prometheus | Metrics collection | Pull-based, tích hợp tốt với Node.js |
| Grafana | Dashboards | Visualization + alerts |
| Sentry | Error tracking | Source maps, performance tracing |
| Loki | Log aggregation | Grafana native, thay ELK cho cost |
| Uptime Kuma | Uptime monitoring | Simple, self-hosted |

---

## 3. System Components

### 3.1 API Gateway / BFF (Backend-for-Frontend)

**Purpose:** Entry point duy nhất cho mọi client request. Xử lý authentication, authorization, rate limiting, request routing, và response transformation.

**Responsibilities:**
- Validate JWT tokens và extract \`tenantId\`, \`userId\`, \`role\`
- Set PostgreSQL session variable \`app.current_tenant_id\` cho RLS
- Rate limiting per tenant và per endpoint (Redis-backed)
- Request logging với correlation ID (\`X-Correlation-ID\` header)
- Response caching cho read-heavy endpoints (Conversation list, KB articles)
- CORS configuration per tenant (whitelist domains)
- Health check aggregation (\`/health\`)

**Interfaces:**
\`\`\`
GET  /health                 → aggregate health status
POST /api/v1/auth/login      → returns JWT + refresh token
*    /api/v1/**              → route to appropriate module
WS   /socket.io              → WebSocket handshake
\`\`\`

**Dependencies:** Redis (rate limiting, cache), Tenant & Auth Module

**FRs Addressed:** Authentication (all), Rate Limiting (NFR-2), CORS (NFR-5)

---

### 3.2 Channel Adapter Service

**Purpose:** Normalize incoming messages từ mọi external channel thành unified \`Message\` format trước khi đưa vào Conversation Engine.

**Responsibilities:**
- Expose webhook endpoints cho LINE, Zalo OA, Facebook Messenger
- Verify webhook signatures (HMAC-SHA256) từ external platforms
- Parse channel-specific payload → \`UnifiedMessage\` DTO
- Lookup hoặc create \`Customer\` record từ external identifier
- Lookup hoặc create \`Conversation\` (thread continuity)
- Queue message processing (BullMQ \`channel.inbound\`)
- Send outbound messages qua channel-specific API clients
- Handle rate limits của external APIs (retry + exponential backoff)

**Interfaces:**
\`\`\`
POST /webhooks/line         → LINE Messaging API webhook handler
POST /webhooks/zalo         → Zalo OA webhook handler
POST /webhooks/facebook     → FB Messenger webhook handler
GET  /webhooks/facebook     → FB webhook verification
POST /webhooks/email        → Email inbound (via SendGrid Inbound Parse)
Internal: ChannelAdapterService.send(channelId, message)
\`\`\`

**Dependencies:** Conversation Engine, Customer Module, Redis (rate limiting), external APIs

**FRs Addressed:** FR-CH-0 (LINE), FR-CH-1 (Zalo), FR-CH-2 (FB Messenger), FR-CH-3 (Email), AD-3

---

### 3.3 Conversation Engine

**Purpose:** Core của platform — quản lý toàn bộ vòng đời của conversations, messages, threading, và real-time event broadcasting.

**Responsibilities:**
- CRUD conversations với status lifecycle: \`open → pending → resolved → closed\`
- Store và retrieve messages với pagination (cursor-based)
- Real-time: broadcast new messages tới agent rooms qua Socket.IO
- Typing indicators (WebSocket event \`conversation:typing\`)
- Message delivery status tracking: \`sent → delivered → read\`
- Conversation metadata: channel, customer, assigned agent, tags, priority
- Internal notes (chỉ agent thấy, không gửi tới customer)
- Conversation search (full-text trên message content)
- Trigger routing khi conversation tạo mới hoặc reassign
- Emit events cho Analytics module (async, không block)

**Interfaces:**
\`\`\`typescript
// REST
GET  /api/v1/conversations              → list với filters
POST /api/v1/conversations              → create
GET  /api/v1/conversations/:id          → detail + messages
PATCH /api/v1/conversations/:id         → update status/priority
POST /api/v1/conversations/:id/messages → send message
GET  /api/v1/conversations/:id/messages → message history

// WebSocket events (emitted)
conversation:new         → new conversation arrived
conversation:message     → new message in conversation
conversation:status      → status changed
conversation:assigned    → agent assigned/changed
conversation:typing      → typing indicator
message:status           → delivery status update
\`\`\`

**Dependencies:** Channel Adapter, Routing Engine, AI Service, Notification Service, Redis (pub/sub), PostgreSQL

**FRs Addressed:** FR-CONV-1 through FR-CONV-8, AD-1, AD-3

---

### 3.4 Ticket Management Service

**Purpose:** Quản lý ticket lifecycle — từ tạo mới (auto từ conversation hoặc manual), xử lý, đến đóng. Hỗ trợ custom fields, merge/split, parent-child relationships.

**Responsibilities:**
- Auto-create ticket khi conversation escalate từ AI sang human
- Ticket states: \`new → open → pending → resolved → closed\`
- Custom fields per tenant (text, number, date, select, multi-select)
- Tags management và auto-tagging (via AI/automation rules)
- Merge tickets (duplicate detection)
- Split ticket thành sub-tickets
- Parent-child ticket hierarchy
- Internal notes và activity log
- Ticket templates (canned responses, macro actions)
- SLA tracking integration (Phase 2)
- Linked conversations (one ticket có nhiều conversations)

**Interfaces:**
\`\`\`
POST /api/v1/tickets                   → create ticket
GET  /api/v1/tickets                   → list với filters, search
GET  /api/v1/tickets/:id               → ticket detail
PATCH /api/v1/tickets/:id              → update
POST /api/v1/tickets/:id/merge         → merge tickets
POST /api/v1/tickets/:id/notes         → add internal note
GET  /api/v1/tickets/:id/activity      → activity log
\`\`\`

**Dependencies:** Conversation Engine, Routing Engine, Notification Service

**FRs Addressed:** FR-TKT-1 through FR-TKT-6

---

### 3.5 Routing & Assignment Engine

**Purpose:** Tự động phân công conversations/tickets tới agent phù hợp dựa theo nhiều chiến lược.

**Responsibilities:**
- **Round-robin routing** (Phase 1): distribute evenly across available agents
- **Load-balanced routing** (Phase 1): assign to agent với ít conversation nhất
- **Manual assignment** (Phase 1): supervisor override
- **Skill-based routing** (Phase 2): match conversation tags/intent tới agent skills
- **AI smart routing** (Phase 2): LLM phân tích content → recommend best agent
- **Time-based routing**: theo business hours, agent shifts
- Agent availability management: \`online\`, \`away\`, \`busy\`, \`offline\`
- Max concurrent conversations per agent (capacity limit)
- Escalation rules: auto-reassign nếu agent không response trong X minutes
- Queue management: conversations waiting for assignment

**Interfaces:**
\`\`\`typescript
// Internal service interface
RoutingEngine.route(conversationId: string): Promise<AgentId | null>
RoutingEngine.setAgentStatus(agentId: string, status: AgentStatus): Promise<void>
RoutingEngine.getQueueStats(tenantId: string): Promise<QueueStats>

// REST
GET  /api/v1/routing/queue             → current queue
POST /api/v1/routing/assign            → manual assign
PATCH /api/v1/agents/:id/status        → update agent status
\`\`\`

**Dependencies:** Conversation Engine, AI Service (Phase 2), Redis (agent presence), Notification Service

**FRs Addressed:** FR-RT-1 through FR-RT-5, AD-2

---

### 3.6 AI Service

**Purpose:** Layer trung gian giữa business logic và AI providers. Cung cấp chatbot, copilot, và AI utility functions (summarization, sentiment, categorization).

**Responsibilities:**
- **Chatbot pipeline**: intent detection → KB search → response generation → confidence check → send or escalate
- **Copilot mode** (Phase 2): generate draft response cho agent review
- **Summarization**: tóm tắt conversation dài cho agent khi nhận escalation
- **Sentiment analysis**: detect negative sentiment → trigger alert/escalation
- **Auto-categorization**: classify conversation intent/topic
- **AI Session management**: maintain conversation context window (last N messages)
- **Provider abstraction**: switch giữa Claude, GPT-4, etc. transparent
- **Cost tracking**: token usage per tenant per conversation
- **Guardrails**: content filter, confidence threshold, PII detection before sending

**Interfaces:**
\`\`\`typescript
// Internal interface
AIService.chat(sessionId: string, message: string): Promise<AIResponse>
AIService.generateDraft(conversationId: string): Promise<DraftResponse>
AIService.summarize(conversationId: string): Promise<string>
AIService.analyzeSentiment(text: string): Promise<SentimentResult>
AIService.categorize(text: string): Promise<CategoryResult>

// REST (for AI management)
GET  /api/v1/ai/sessions/:id           → AI session info
POST /api/v1/ai/sessions/:id/handoff   → force handoff to human
GET  /api/v1/ai/metrics                → usage & cost metrics
\`\`\`

**Dependencies:** Knowledge Base, LLM providers (Claude/OpenAI), Redis (session cache), BullMQ (async processing)

**FRs Addressed:** FR-AI-1 through FR-AI-7, AD-4

---

### 3.7 Knowledge Base Service

**Purpose:** Quản lý nội dung KB (articles, categories) và cung cấp search cho cả agents lẫn AI chatbot.

**Responsibilities:**
- Rich text article editor (Tiptap/ProseMirror) với image support
- Category/subcategory hierarchy với drag-drop ordering
- Article versions (draft, published, archived)
- Multi-language articles (vi, en)
- **Search** (Phase 1-2): PostgreSQL FTS với Vietnamese tokenization (\`unaccent\`, \`pg_trgm\`)
- **AI-powered search** (Phase 2): semantic search với embeddings
- Access control: public (customer portal), internal (agents only)
- Article analytics: views, helpful/not helpful votes
- **AI content gap detection**: topics customers ask but no article exists
- **Auto-generate article** từ resolved conversation (AI summarize → agent review)

**Interfaces:**
\`\`\`
GET  /api/v1/kb/articles               → list/search articles
POST /api/v1/kb/articles               → create article
GET  /api/v1/kb/articles/:id           → article detail
PUT  /api/v1/kb/articles/:id           → update article
POST /api/v1/kb/search                 → search (text or semantic)
GET  /api/v1/kb/categories             → category tree
POST /api/v1/kb/articles/:id/feedback  → helpful vote
\`\`\`

**Dependencies:** AI Service (semantic search, generation), PostgreSQL (FTS), S3 (article images)

**FRs Addressed:** FR-KB-1 through FR-KB-5

---

### 3.8 Notification Service

**Purpose:** Dispatch notifications tới nhiều channels (email, in-app, push) dựa trên events từ các modules khác.

**Responsibilities:**
- In-app notifications (WebSocket real-time tới agent browser)
- Email notifications (new ticket assigned, SLA breach, daily digest)
- Browser push notifications (PWA support)
- Webhook delivery (tenant-configured webhooks cho 3rd party integration)
- Notification preferences per agent (opt-in/out per event type)
- Template management (Handlebars templates per notification type)
- Delivery tracking (sent, delivered, failed, bounced)
- Retry failed deliveries (BullMQ với exponential backoff)

**Interfaces:**
\`\`\`typescript
// Internal (event-driven)
NotificationService.dispatch(event: NotificationEvent): Promise<void>
// Events: conversation.assigned, ticket.sla_breach, mention.created, etc.

// REST
GET  /api/v1/notifications             → agent's notifications
PATCH /api/v1/notifications/:id/read   → mark as read
POST /api/v1/notifications/preferences → update preferences
POST /api/v1/webhooks                  → register webhook endpoint
\`\`\`

**Dependencies:** BullMQ (async dispatch), SMTP provider, Redis (pub/sub for in-app)

**FRs Addressed:** FR-NT-1 through FR-NT-4

---

### 3.9 Analytics Service

**Purpose:** Collect, aggregate, và serve metrics cho dashboards và reports.

**Responsibilities:**
- **Real-time metrics** (Phase 1): live queue depth, active conversations, agent status
- **Historical reports** (Phase 1): conversation volume, resolution time, CSAT scores
- **Agent performance** (Phase 2): individual AHT, FRT, CSAT, volume per agent
- **AI metrics** (Phase 2): containment rate, handoff rate, AI vs human CSAT
- **Custom report builder** (Phase 3): drag-drop, scheduled delivery
- **Predictive analytics** (Phase 3): volume forecast, staffing recommendations
- Event ingestion từ all modules qua BullMQ (\`analytics.events\` queue)
- Pre-aggregated materialized views (daily/weekly/monthly rollups)
- Export: CSV, PDF, Excel

**Interfaces:**
\`\`\`
GET  /api/v1/analytics/overview        → real-time dashboard data
GET  /api/v1/analytics/conversations   → conversation metrics với date range
GET  /api/v1/analytics/agents          → agent performance
GET  /api/v1/analytics/csat            → CSAT scores
GET  /api/v1/analytics/ai              → AI service metrics
POST /api/v1/analytics/export          → trigger async export
\`\`\`

**Dependencies:** PostgreSQL (materialized views), Redis (real-time counters), BullMQ (event queue, export jobs)

**FRs Addressed:** FR-AN-1 through FR-AN-5

---

### 3.10 Tenant & Auth Service

**Purpose:** Multi-tenancy foundation — manage organizations, users, authentication, authorization, và billing integration.

**Responsibilities:**
- Tenant (Organization) management: create, configure, suspend, delete
- User management: invite, roles, permissions, profile
- **RBAC**: \`Owner > Admin > Supervisor > Agent > Viewer\`
- **JWT** authentication: access token (15min) + refresh token (7 days, rotate)
- OAuth2 social login (Google, Microsoft) — Phase 2
- **SSO/SAML** (Phase 3 enterprise)
- Tenant settings: business hours, timezone, logo, branding
- Subscription/plan management (integration với billing provider)
- Agent teams/departments structure
- API key management cho integrations
- Session management (force logout, concurrent session limits)

**Interfaces:**
\`\`\`
POST /api/v1/auth/login                → credential login
POST /api/v1/auth/refresh              → refresh access token
POST /api/v1/auth/logout               → revoke refresh token
POST /api/v1/tenants                   → create organization
GET  /api/v1/tenants/me                → current tenant info
PUT  /api/v1/tenants/me/settings       → update settings
POST /api/v1/users/invite              → invite agent
GET  /api/v1/users                     → list agents
PATCH /api/v1/users/:id/role           → update role
\`\`\`

**Dependencies:** PostgreSQL (RLS policies), Redis (session store, token blacklist)

**FRs Addressed:** FR-AUTH-1 through FR-AUTH-5, AD-2, AD-6

---

## 4. Data Architecture

### 4.1 Core Entity Diagram

\`\`\`mermaid
erDiagram
    Tenant {
        uuid id PK
        string name
        string slug UK
        string plan
        jsonb settings
        timestamp created_at
    }

    User {
        uuid id PK
        uuid tenant_id FK
        string email UK
        string name
        enum role
        enum status
        jsonb skills
        timestamp created_at
    }

    Customer {
        uuid id PK
        uuid tenant_id FK
        string name
        string email
        string phone
        jsonb external_ids
        jsonb metadata
        timestamp created_at
    }

    Channel {
        uuid id PK
        uuid tenant_id FK
        enum type
        string name
        boolean is_active
        timestamp created_at
    }

    ChannelConfig {
        uuid id PK
        uuid channel_id FK
        jsonb credentials
        jsonb settings
        timestamp updated_at
    }

    Conversation {
        uuid id PK
        uuid tenant_id FK
        uuid channel_id FK
        uuid customer_id FK
        uuid assigned_agent_id FK
        enum status
        enum priority
        string subject
        string external_thread_id
        timestamp first_response_at
        timestamp resolved_at
        timestamp created_at
    }

    Message {
        uuid id PK
        uuid conversation_id FK
        uuid sender_id FK
        enum sender_type
        enum type
        text content
        jsonb attachments
        enum status
        boolean is_internal
        timestamp created_at
    }

    Ticket {
        uuid id PK
        uuid tenant_id FK
        uuid conversation_id FK
        uuid parent_ticket_id FK
        string number
        enum status
        enum priority
        jsonb custom_fields
        timestamp due_at
        timestamp created_at
    }

    Tag {
        uuid id PK
        uuid tenant_id FK
        string name
        string color
    }

    ConversationTag {
        uuid conversation_id FK
        uuid tag_id FK
    }

    SLAPolicy {
        uuid id PK
        uuid tenant_id FK
        string name
        int first_response_minutes
        int resolution_minutes
        jsonb business_hours
    }

    SLAInstance {
        uuid id PK
        uuid ticket_id FK
        uuid policy_id FK
        timestamp first_response_due
        timestamp resolution_due
        boolean first_response_breached
        boolean resolution_breached
    }

    KBCategory {
        uuid id PK
        uuid tenant_id FK
        uuid parent_id FK
        string name
        string slug
        int position
    }

    KBArticle {
        uuid id PK
        uuid tenant_id FK
        uuid category_id FK
        uuid author_id FK
        string title
        text content
        tsvector search_vector
        enum status
        int view_count
        int helpful_count
        timestamp published_at
    }

    CannedResponse {
        uuid id PK
        uuid tenant_id FK
        string name
        string shortcut
        text content
    }

    AutomationRule {
        uuid id PK
        uuid tenant_id FK
        string name
        boolean is_active
        jsonb conditions
        jsonb actions
        int position
    }

    AISession {
        uuid id PK
        uuid conversation_id FK
        uuid tenant_id FK
        jsonb context_window
        string provider
        int total_tokens
        float total_cost
        boolean handed_off
        timestamp created_at
    }

    Feedback {
        uuid id PK
        uuid tenant_id FK
        uuid conversation_id FK
        uuid customer_id FK
        enum type
        int score
        text comment
        timestamp created_at
    }

    AuditLog {
        uuid id PK
        uuid tenant_id FK
        uuid actor_id FK
        string action
        string resource_type
        uuid resource_id
        jsonb changes
        string ip_address
        timestamp created_at
    }

    Tenant ||--o{ User : has
    Tenant ||--o{ Customer : has
    Tenant ||--o{ Channel : has
    Tenant ||--o{ Conversation : has
    Channel ||--o{ ChannelConfig : has
    Conversation }o--|| Customer : belongs_to
    Conversation }o--|| Channel : via
    Conversation }o--o| User : assigned_to
    Conversation ||--o{ Message : contains
    Conversation }o--o{ Tag : tagged_with
    Conversation ||--o| Ticket : creates
    Ticket ||--o| SLAInstance : tracked_by
    SLAInstance }o--|| SLAPolicy : uses
    Ticket }o--o| Ticket : parent_child
    KBArticle }o--|| KBCategory : in
    AISession }o--|| Conversation : for
    Feedback }o--|| Conversation : on
\`\`\`

### 4.2 Key Table Schemas

#### conversations table
\`\`\`sql
CREATE TABLE conversations (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id   UUID NOT NULL REFERENCES tenants(id),
    channel_id  UUID NOT NULL REFERENCES channels(id),
    customer_id UUID NOT NULL REFERENCES customers(id),
    assigned_agent_id UUID REFERENCES users(id),
    status      VARCHAR(20) NOT NULL DEFAULT 'open'
                CHECK (status IN ('open','pending','resolved','closed')),
    priority    VARCHAR(20) NOT NULL DEFAULT 'normal'
                CHECK (priority IN ('low','normal','high','urgent')),
    subject     TEXT,
    external_thread_id VARCHAR(255), -- LINE/Zalo/FB thread ID
    first_response_at  TIMESTAMPTZ,
    resolved_at        TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS Policy
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON conversations
    USING (tenant_id = current_setting('app.current_tenant_id')::UUID);

-- Indexes
CREATE INDEX idx_conversations_tenant_status ON conversations(tenant_id, status);
CREATE INDEX idx_conversations_tenant_agent ON conversations(tenant_id, assigned_agent_id);
CREATE INDEX idx_conversations_customer ON conversations(customer_id);
CREATE INDEX idx_conversations_created ON conversations(tenant_id, created_at DESC);
\`\`\`

#### messages table (partitioned by month)
\`\`\`sql
CREATE TABLE messages (
    id              UUID DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES conversations(id),
    sender_id       UUID, -- NULL nếu là customer hoặc bot
    sender_type     VARCHAR(20) NOT NULL -- 'customer','agent','bot','system'
                    CHECK (sender_type IN ('customer','agent','bot','system')),
    type            VARCHAR(20) NOT NULL DEFAULT 'text'
                    CHECK (type IN ('text','image','file','audio','video','template','event')),
    content         TEXT,
    attachments     JSONB DEFAULT '[]',
    status          VARCHAR(20) DEFAULT 'sent'
                    CHECK (status IN ('sent','delivered','read','failed')),
    is_internal     BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
) PARTITION BY RANGE (created_at);

-- Monthly partitions
CREATE TABLE messages_2026_01 PARTITION OF messages
    FOR VALUES FROM ('2026-01-01') TO ('2026-02-01');
-- ... auto-create future partitions via pg_partman or cron job

CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at DESC);
CREATE INDEX idx_messages_sender ON messages(sender_id) WHERE sender_id IS NOT NULL;
\`\`\`

#### customers table
\`\`\`sql
CREATE TABLE customers (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id   UUID NOT NULL REFERENCES tenants(id),
    name        VARCHAR(255),
    email       VARCHAR(255),
    phone       VARCHAR(50),
    external_ids JSONB DEFAULT '{}', -- {"zalo": "uid_xxx", "facebook": "psid_xxx"}
    metadata    JSONB DEFAULT '{}',  -- custom fields, tags
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON customers
    USING (tenant_id = current_setting('app.current_tenant_id')::UUID);

-- Unique per channel identifier
CREATE UNIQUE INDEX idx_customers_external_zalo
    ON customers ((external_ids->>'zalo'), tenant_id)
    WHERE external_ids->>'zalo' IS NOT NULL;
\`\`\`

### 4.3 Data Flow: Incoming Message

\`\`\`mermaid
sequenceDiagram
    participant Z as Zalo OA
    participant CA as Channel Adapter
    participant CE as Conversation Engine
    participant RE as Routing Engine
    participant AI as AI Service
    participant WS as WebSocket
    participant AG as Agent Browser

    Z->>CA: Webhook POST (message event)
    CA->>CA: Verify HMAC signature
    CA->>CA: Parse → UnifiedMessage
    CA->>CE: createOrUpdateConversation()
    CE->>CE: Find/create Customer
    CE->>CE: Find/create Conversation
    CE->>CE: Insert Message
    CE->>WS: broadcast('conversation:message', msg)
    WS->>AG: Real-time update (if agent viewing)

    CE->>RE: Check if needs routing
    RE->>RE: Apply routing strategy
    RE->>CE: assignAgent(conversationId, agentId)
    CE->>WS: broadcast('conversation:assigned', assignment)

    alt AI Chatbot enabled
        CE->>AI: processMessage(conversationId, message)
        AI->>AI: Intent detection + KB search
        AI->>AI: Check confidence threshold
        alt Confidence > 0.8
            AI->>CE: sendReply(conversationId, aiResponse)
            CE->>CA: sendMessage(channel, customer, aiResponse)
            CA->>Z: Reply via Zalo API
        else Low confidence
            AI->>CE: escalateToHuman(conversationId)
        end
    end
\`\`\`

### 4.4 Data Flow: CSAT Survey

\`\`\`mermaid
sequenceDiagram
    participant CE as Conversation Engine
    participant NS as Notification Service
    participant C as Customer
    participant FB as Feedback Table
    participant AN as Analytics

    CE->>CE: Conversation resolved
    CE->>NS: emit('conversation.resolved', convId)
    NS->>NS: Schedule CSAT email (delay 30min)
    NS->>C: Send CSAT email với survey link
    C->>NS: Click survey link → POST /feedback
    NS->>FB: Insert Feedback record
    FB->>AN: emit('feedback.created', feedback)
    AN->>AN: Update CSAT aggregates
\`\`\`

---

## 5. API Design

### 5.1 Conventions

\`\`\`
Base URL:    https://api.dora.vn/api/v1
Auth:        Bearer {access_token} (JWT)
Content-Type: application/json
Pagination:  ?page=1&limit=20 hoặc cursor-based ?cursor=xxx&limit=20
Versioning:  URL path versioning (/v1, /v2)
Errors:      RFC 7807 Problem Details
\`\`\`

**Standard error response:**
\`\`\`json
{
  "type": "https://api.dora.vn/errors/not-found",
  "title": "Resource not found",
  "status": 404,
  "detail": "Conversation with id 'abc' not found",
  "instance": "/api/v1/conversations/abc",
  "correlationId": "req_01HX..."
}
\`\`\`

### 5.2 Authentication Endpoints

\`\`\`
POST /api/v1/auth/login                    Login với email/password
POST /api/v1/auth/logout                   Logout (revoke refresh token)
POST /api/v1/auth/refresh                  Refresh access token
POST /api/v1/auth/forgot-password          Request password reset
POST /api/v1/auth/reset-password           Reset password với token
POST /api/v1/auth/verify-email             Verify email address
GET  /api/v1/auth/me                       Current user profile
\`\`\`

### 5.3 Tenant & User Endpoints

\`\`\`
POST /api/v1/tenants                       Create organization
GET  /api/v1/tenants/me                    Get current tenant
PUT  /api/v1/tenants/me                    Update tenant settings
GET  /api/v1/tenants/me/usage              Usage & limits

POST /api/v1/users/invite                  Invite agent via email
GET  /api/v1/users                         List agents
GET  /api/v1/users/:id                     Agent detail
PATCH /api/v1/users/:id                    Update agent profile
PATCH /api/v1/users/:id/role               Update agent role
DELETE /api/v1/users/:id                   Deactivate agent
\`\`\`

### 5.4 Conversation Endpoints

\`\`\`
GET  /api/v1/conversations                 List conversations (filters: status, assignee, channel, tag, date)
POST /api/v1/conversations                 Create conversation manually
GET  /api/v1/conversations/:id             Conversation detail
PATCH /api/v1/conversations/:id            Update (status, priority, assignee)
DELETE /api/v1/conversations/:id           Archive conversation

GET  /api/v1/conversations/:id/messages    Message history (cursor-paginated)
POST /api/v1/conversations/:id/messages    Send message
PATCH /api/v1/conversations/:id/messages/:msgId  Edit message

POST /api/v1/conversations/:id/assign      Assign to agent
POST /api/v1/conversations/:id/tags        Add tags
DELETE /api/v1/conversations/:id/tags/:tagId  Remove tag
POST /api/v1/conversations/:id/notes       Add internal note
\`\`\`

### 5.5 Ticket Endpoints

\`\`\`
GET  /api/v1/tickets                       List tickets
POST /api/v1/tickets                       Create ticket
GET  /api/v1/tickets/:id                   Ticket detail
PATCH /api/v1/tickets/:id                  Update ticket
DELETE /api/v1/tickets/:id                 Delete ticket

POST /api/v1/tickets/:id/merge             Merge with another ticket
POST /api/v1/tickets/:id/split             Split ticket
GET  /api/v1/tickets/:id/activity          Activity history
POST /api/v1/tickets/:id/notes             Internal note
POST /api/v1/tickets/:id/attachments       Upload attachment
\`\`\`

### 5.6 Channel & Integration Endpoints

\`\`\`
GET  /api/v1/channels                      List configured channels
POST /api/v1/channels                      Create channel
GET  /api/v1/channels/:id                  Channel detail
PUT  /api/v1/channels/:id/config           Update channel config (tokens, settings)
DELETE /api/v1/channels/:id                Remove channel
POST /api/v1/channels/:id/test             Test channel connection

POST /webhooks/line                        LINE Messaging API webhook (public)
POST /webhooks/zalo                        Zalo OA webhook (public)
GET  /webhooks/facebook                    FB webhook verification (public)
POST /webhooks/facebook                    FB Messenger webhook (public)
\`\`\`

### 5.7 AI & KB Endpoints

\`\`\`
POST /api/v1/ai/chat                       Direct AI chat (for testing)
GET  /api/v1/ai/sessions/:convId           AI session for conversation
POST /api/v1/ai/sessions/:convId/handoff   Force human handoff
GET  /api/v1/ai/usage                      Token usage & cost

GET  /api/v1/kb/articles                   List/search articles
POST /api/v1/kb/articles                   Create article
GET  /api/v1/kb/articles/:id               Article detail
PUT  /api/v1/kb/articles/:id               Update article
DELETE /api/v1/kb/articles/:id             Delete article
POST /api/v1/kb/articles/:id/publish       Publish article
POST /api/v1/kb/search                     Search articles
GET  /api/v1/kb/categories                 Category tree
POST /api/v1/kb/categories                 Create category
\`\`\`

### 5.8 Analytics Endpoints

\`\`\`
GET  /api/v1/analytics/overview            Real-time dashboard
GET  /api/v1/analytics/conversations       Conversation volume metrics
GET  /api/v1/analytics/agents              Agent performance metrics
GET  /api/v1/analytics/csat               CSAT/NPS scores
GET  /api/v1/analytics/channels            Per-channel breakdown
GET  /api/v1/analytics/ai                  AI containment & accuracy
POST /api/v1/analytics/reports             Create custom report
POST /api/v1/analytics/export              Async export (CSV/PDF)
\`\`\`

### 5.9 WebSocket Events

\`\`\`typescript
// Client → Server
socket.emit('conversation:join',    { conversationId })   // join room
socket.emit('conversation:leave',   { conversationId })   // leave room
socket.emit('conversation:typing',  { conversationId, isTyping })
socket.emit('agent:status',         { status: 'online'|'away'|'busy' })

// Server → Client
socket.on('conversation:new',       (conversation) => ...)   // new conversation
socket.on('conversation:message',   (message) => ...)        // new message
socket.on('conversation:status',    (update) => ...)         // status changed
socket.on('conversation:assigned',  (assignment) => ...)     // agent changed
socket.on('conversation:typing',    (indicator) => ...)      // typing indicator
socket.on('message:status',         (status) => ...)         // delivery status
socket.on('agent:presence',         (presence) => ...)       // agent online/offline
socket.on('notification:new',       (notification) => ...)   // in-app notification
socket.on('queue:update',           (queueStats) => ...)     // live queue stats
\`\`\`

---

## 6. Real-time Architecture

### 6.1 WebSocket Connection Management

\`\`\`mermaid
graph TB
    subgraph Client
        AC[Agent Client<br/>Browser]
    end

    subgraph LB[Load Balancer - Sticky Sessions]
        NGX[Nginx<br/>ip_hash or cookie]
    end

    subgraph Servers
        S1[Server Instance 1<br/>Socket.IO]
        S2[Server Instance 2<br/>Socket.IO]
        S3[Server Instance 3<br/>Socket.IO]
    end

    subgraph Redis
        RA[Redis Adapter<br/>Pub/Sub]
    end

    AC -->|WebSocket| NGX
    NGX -->|sticky| S1
    S1 <-->|pub/sub| RA
    S2 <-->|pub/sub| RA
    S3 <-->|pub/sub| RA
\`\`\`

**Connection lifecycle:**
1. Agent browser kết nối WebSocket tới \`/socket.io\` với JWT token trong handshake
2. Server validates JWT → extract \`tenantId\`, \`userId\`, \`role\`
3. Socket join tenant room: \`socket.join(\`tenant:\${tenantId}\`)\`
4. Socket join agent room: \`socket.join(\`agent:\${userId}\`)\`
5. Agent status cập nhật trong Redis: \`SET agent:\${userId}:status online EX 30\`
6. Heartbeat: client ping mỗi 20s, server expects response trong 10s
7. Disconnect: status set offline, release từ routing pool

### 6.2 Room Strategy

\`\`\`
tenant:{tenantId}              → broadcast tới toàn bộ agents trong tenant
conversation:{conversationId}  → agents đang view conversation này
agent:{agentId}                → personal notifications
queue:{tenantId}               → queue monitor room (supervisors)
\`\`\`

### 6.3 Presence System

\`\`\`typescript
// Agent presence stored in Redis
interface AgentPresence {
  agentId: string;
  tenantId: string;
  status: 'online' | 'away' | 'busy' | 'offline';
  lastSeen: number;       // Unix timestamp
  activeConversations: number;
  socketId: string;
}

// Key: agent:presence:{tenantId}:{agentId}
// TTL: 35 seconds (refresh every 20s via heartbeat)
// On TTL expire → agent considered offline → routing pool updated
\`\`\`

### 6.4 Message Delivery Status

\`\`\`
Customer sends message →
  → Channel Adapter receives
  → Insert to DB (status: 'sent')
  → Broadcast to agent room
  → Agent client receives
    → Client emit 'message:read' event
    → Server update DB (status: 'read')
    → Broadcast 'message:status' to customer channel
\`\`\`

### 6.5 Typing Indicators

\`\`\`typescript
// Debounced typing indicator
// Client emit sau mỗi keystroke (debounce 500ms)
// Server broadcast với TTL 3s (tự clear nếu không refresh)
socket.on('conversation:typing', ({ conversationId, isTyping }) => {
  if (isTyping) {
    redis.setex(\`typing:\${conversationId}:\${userId}\`, 3, '1');
    io.to(\`conversation:\${conversationId}\`).emit('conversation:typing', {
      userId, isTyping: true
    });
  } else {
    redis.del(\`typing:\${conversationId}:\${userId}\`);
    io.to(\`conversation:\${conversationId}\`).emit('conversation:typing', {
      userId, isTyping: false
    });
  }
});
\`\`\`

### 6.6 Channel Adapter → Conversation Engine Flow

External channel events (Zalo, FB) đến qua HTTP webhook. Sau khi Channel Adapter normalize, nó trigger real-time update:

\`\`\`
Zalo Webhook POST
  → Channel Adapter (HTTP handler)
  → BullMQ: queue 'channel.inbound' job
  → Worker picks up job
  → Conversation Engine.processInboundMessage()
  → PostgreSQL insert message
  → Redis pub/sub: publish to 'conversation:{id}' channel
  → All Socket.IO server instances receive via Redis adapter
  → Broadcast to connected agents
\`\`\`

Lý do dùng queue thay vì sync: webhook handler trả về 200 OK ngay lập tức cho Zalo/FB (timeout 5s), xử lý thực tế async trong worker.

---

## 7. AI Architecture

### 7.1 LLM Abstraction Layer

\`\`\`typescript
// Provider interface
interface LLMProvider {
  chat(request: ChatRequest): Promise<ChatResponse>;
  embed(text: string): Promise<number[]>;
  getProviderName(): string;
  estimateCost(tokens: TokenUsage): number;
}

// Implementations
class ClaudeProvider implements LLMProvider { ... }
class OpenAIProvider implements LLMProvider { ... }
class OllamaProvider implements LLMProvider { ... }  // Phase 3

// Factory với fallback
class LLMFactory {
  static create(config: AIConfig): LLMProvider {
    const primary = new ClaudeProvider(config.claude);
    const fallback = new OpenAIProvider(config.openai);
    return new FallbackProvider(primary, fallback);
  }
}
\`\`\`

**Provider selection logic:**
- Default: Claude Sonnet (tốt với Vietnamese & Japanese, cost-effective)
- Fallback: GPT-4o-mini (nếu Claude unavailable hoặc timeout)
- Long context (>100K tokens): Claude Sonnet
- Embeddings: OpenAI text-embedding-3-small (cost-effective)

### 7.1.1 Multilingual AI Personas (VN + JP + EN)

\`\`\`typescript
// Tenant-level AI persona configuration
interface AIPersona {
  language: 'vi' | 'ja' | 'en' | 'auto';  // 'auto' = detect from message
  tone: 'formal' | 'casual' | 'keigo';     // keigo = Japanese honorific
  brandVoice: string;                        // custom instructions
  greetingTemplate: string;
  closingTemplate: string;
  escalationPhrases: string[];               // trigger human handoff
}

// Japan-specific persona (REQUIRED for JP market)
const JAPAN_PERSONA: AIPersona = {
  language: 'ja',
  tone: 'keigo',  // 敬語 — mandatory for business context
  brandVoice: \`
    あなたはお客様サポートのアシスタントです。
    常に丁寧な敬語（です・ます調）で対応してください。
    お客様には「お客様」と呼びかけ、感謝の気持ちを忘れずに。
    回答は簡潔でありながら、おもてなしの心を持って対応してください。
  \`,
  greetingTemplate: 'お問い合わせいただきありがとうございます。',
  closingTemplate: '他にご不明な点がございましたら、お気軽にお問い合わせください。',
  escalationPhrases: [
    'オペレーターに繋いでください',
    '担当者と話したい',
    'スタッフに代わってください',
    '人間と話したい',
  ],
};

// Vietnam persona
const VIETNAM_PERSONA: AIPersona = {
  language: 'vi',
  tone: 'formal',
  brandVoice: 'Bạn là trợ lý hỗ trợ khách hàng. Trả lời lịch sự, thân thiện, sử dụng "bạn/anh/chị".',
  greetingTemplate: 'Cảm ơn bạn đã liên hệ với chúng tôi!',
  closingTemplate: 'Nếu còn thắc mắc, đừng ngần ngại liên hệ lại nhé!',
  escalationPhrases: [
    'tôi muốn nói chuyện với người thật',
    'nhân viên thật',
    'human agent',
  ],
};
\`\`\`

**Keigo Guardrails (Japan):**
- AI response PHẢI dùng です/ます form (polite form)
- Không dùng タメ口 (casual speech) trong mọi trường hợp business
- Post-generation check: regex scan for casual patterns → reject & regenerate
- Claude/GPT-4 xử lý keigo tốt, nhưng cần system prompt chặt chẽ

### 7.2 Chatbot Pipeline

\`\`\`mermaid
flowchart TD
    CM[Customer Message] --> PP[Pre-processing<br/>PII masking, language detect]
    PP --> CTX[Context Assembly<br/>last 10 messages + customer info]
    CTX --> ID[Intent Detection<br/>Claude: classify intent]
    ID --> KBS[KB Search<br/>FTS + semantic similarity]
    KBS --> RG[Response Generation<br/>Claude with KB context]
    RG --> CF[Confidence Check<br/>score > threshold?]

    CF -->|score >= 0.75| GR[Guardrails<br/>content filter, PII check]
    CF -->|score < 0.75| HH[Human Handoff<br/>escalate to agent]

    GR -->|pass| SR[Send Response<br/>via Channel Adapter]
    GR -->|fail| HH

    HH --> NS[Notify Agent<br/>with context summary]
    SR --> TT[Token Tracking<br/>log usage + cost per tenant]
\`\`\`

**Confidence scoring:**
\`\`\`typescript
interface AIResponse {
  content: string;
  confidence: number;      // 0.0 - 1.0
  reasoning: string;       // why this response
  sources: KBArticle[];    // articles used
  handoffReason?: string;  // nếu escalate
}

const CONFIDENCE_THRESHOLD = 0.75;  // configurable per tenant
// Loaded from AIPersona.escalationPhrases per tenant/language
// See Section 7.1.1 for VN/JP/EN persona definitions
\`\`\`

### 7.3 Copilot Mode (Phase 2)

\`\`\`mermaid
sequenceDiagram
    participant C as Customer
    participant CE as Conversation Engine
    participant AI as AI Service
    participant AG as Agent
    participant WS as WebSocket

    C->>CE: Send message
    CE->>AI: generateDraft(conversationId, message)
    AI->>AI: Analyze message + KB search
    AI->>CE: DraftResponse {content, confidence, sources}
    CE->>WS: emit('copilot:draft', draft) to agent
    WS->>AG: Show draft in compose box

    alt Agent approves
        AG->>CE: POST /messages {content: draft.content, isDraft: false}
        CE->>C: Send approved message
    else Agent edits
        AG->>CE: POST /messages {content: editedContent}
        CE->>AI: recordFeedback(draftId, 'edited', editedContent)
    else Agent rejects
        AG->>CE: POST /messages {content: ownContent}
        CE->>AI: recordFeedback(draftId, 'rejected')
    end
\`\`\`

Feedback loop: agent edits/rejections → fine-tuning data → cải thiện draft quality theo thời gian.

### 7.4 Context Management

\`\`\`typescript
interface ConversationContext {
  conversationId: string;
  tenantId: string;
  customer: CustomerProfile;
  messages: ContextMessage[];   // last N messages (token budget)
  kbContext: KBArticle[];       // relevant articles
  customInstructions: string;   // tenant-specific AI persona
}

// Token budget management
const MAX_CONTEXT_TOKENS = 8000;  // leave room for response
// Strategy: include most recent messages, truncate oldest
// Always include: first message (issue description) + last 5 messages
\`\`\`

**AI Session stored in Redis:**
\`\`\`
Key: ai:session:{conversationId}
TTL: 24 hours (reset on new message)
Value: ConversationContext JSON
\`\`\`

### 7.5 Guardrails

\`\`\`typescript
interface GuardrailResult {
  passed: boolean;
  reasons: string[];
}

class AIGuardrails {
  async check(response: string, context: ConversationContext): Promise<GuardrailResult> {
    const checks = await Promise.all([
      this.checkPIILeakage(response),           // không leak PII của customer khác
      this.checkContentPolicy(response),         // no harmful content
      this.checkBrandVoice(response, context),   // within tenant guidelines
      this.checkFactualClaims(response, context) // không claim sai về sản phẩm
    ]);
    return { passed: checks.every(c => c.passed), reasons: checks.flatMap(c => c.reasons) };
  }
}
\`\`\`

### 7.6 Cost Optimization

\`\`\`typescript
// Per-tenant token budget tracking
interface TenantAIUsage {
  tenantId: string;
  month: string;               // YYYY-MM
  inputTokens: number;
  outputTokens: number;
  estimatedCostUSD: number;
  quotaLimitUSD: number;
  quotaExceeded: boolean;
}

// Strategies:
// 1. Cache identical queries (same message + same KB state) trong Redis (TTL 1h)
// 2. Summarize long conversations thay vì gửi full history
// 3. Per-plan quota limits (Free: \$5/month, Pro: \$50/month)
// 4. Cheaper model cho low-stakes tasks (categorization → GPT-4o-mini)
// 5. KB pre-filtering giảm context tokens (chỉ lấy top 3 articles)
\`\`\`

---

## 8. Channel Adapter Architecture

### 8.1 Adapter Interface

\`\`\`typescript
interface ChannelAdapter {
  readonly channelType: ChannelType;

  // Xử lý incoming webhook từ external platform
  handleWebhook(payload: unknown, headers: Record<string, string>): Promise<void>;

  // Gửi message qua channel
  sendMessage(message: OutboundMessage): Promise<SendResult>;

  // Verify webhook signature
  verifySignature(payload: string, signature: string, secret: string): boolean;

  // Normalize incoming payload → UnifiedMessage
  normalize(payload: unknown): UnifiedMessage;

  // Lấy customer profile từ external ID
  getCustomerProfile(externalId: string): Promise<ExternalProfile>;
}

// Unified message format (mọi channel đều convert về đây)
interface UnifiedMessage {
  externalId: string;         // ID của message trên external platform
  externalThreadId: string;   // Thread/conversation ID trên external platform
  channelType: ChannelType;
  senderId: string;           // External customer ID
  senderName: string;
  content: string;
  contentType: 'text' | 'image' | 'file' | 'audio' | 'video' | 'sticker' | 'location' | 'template' | 'flex';
  attachments: Attachment[];
  metadata: Record<string, unknown>;  // raw platform-specific data
  receivedAt: Date;
}
\`\`\`

### 8.2 Specific Adapters

#### ChatWidget Adapter
\`\`\`typescript
class ChatWidgetAdapter implements ChannelAdapter {
  // Chat widget giao tiếp qua WebSocket trực tiếp
  // Không cần webhook verification (internal)
  // Customer auth: anonymous với session token hoặc logged-in
  // Proactive chat trigger theo user behavior (time on page, exit intent)

  // Widget script embedded vào customer website:
  // <script src="https://dora.vn/widget/v1/embed.js" data-token="..."></script>
}
\`\`\`

#### WebForm Adapter
\`\`\`typescript
class WebFormAdapter implements ChannelAdapter {
  // Form submissions qua REST API
  // File attachments (S3 presigned upload)
  // Auto-create ticket với form field mapping
  // Captcha validation (hCaptcha)
  // Custom form builder: field types, validation, conditional logic
}
\`\`\`

#### LINE Official Account Adapter (Priority — Japan Market)
\`\`\`typescript
class LineAdapter implements ChannelAdapter {
  readonly channelType = 'line';

  // LINE Messaging API — webhook events:
  // message (text, image, video, audio, file, location, sticker)
  // follow/unfollow, join/leave (group), postback (button clicks)
  //
  // Customer identifier: LINE User ID (stable per channel)
  //
  // Outbound message types:
  // - Text message
  // - Flex Message (rich card layout — product cards, receipts, booking confirmations)
  // - Rich Menu (custom bottom menu — crucial UX for Japan)
  // - Quick Reply buttons
  // - Image Map
  // - Template messages (buttons, confirm, carousel)
  // - Sticker (important in Japanese communication culture)
  //
  // Rate limit: 100,000 requests/min per channel
  //
  // Reply vs Push:
  // - Reply Token: miễn phí, valid 1 phút sau user message event
  // - Push Message: tính phí theo plan (free tier: 200/tháng)
  // → Ưu tiên reply token khi có, fallback to push
  //
  // LINE Login + LIFF:
  // - OAuth2 + OpenID Connect cho customer authentication
  // - LIFF apps: web forms, surveys chạy trong LINE browser
  // - Có thể dùng cho CSAT survey, knowledge base browsing

  verifySignature(payload: string, sig: string, secret: string): boolean {
    // LINE dùng X-Line-Signature header
    const hash = crypto.createHmac('sha256', secret).update(payload).digest('base64');
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(sig));
  }

  // Rich Menu management — set per customer/default
  async setRichMenu(userId: string, richMenuId: string): Promise<void> { /* ... */ }
  async createRichMenu(menu: RichMenuConfig): Promise<string> { /* ... */ }
}
\`\`\`

#### ZaloOA Adapter
\`\`\`typescript
class ZaloOAAdapter implements ChannelAdapter {
  // Webhook events: user_send_text, user_send_image, user_send_file, user_send_sticker
  // Message types: text, image, file, video
  // Customer identifier: Zalo User ID (stable per OA)
  // Outbound: Zalo OA API (rate limit: 100 req/s per OA)
  // Rich messages: buttons, list, location
  // Template messages for CSAT survey
  verifySignature(payload: string, sig: string, secret: string): boolean {
    return crypto.createHmac('sha256', secret).update(payload).digest('hex') === sig;
  }
}
\`\`\`

#### FacebookMessenger Adapter
\`\`\`typescript
class FacebookMessengerAdapter implements ChannelAdapter {
  // Webhook verification: GET với hub.challenge
  // Events: messages, messaging_postbacks, messaging_read
  // PSID (Page-Scoped ID) làm customer identifier
  // Outbound: Graph API /me/messages
  // Rate limit: 200 req/s per page token
  // Handover Protocol: chuyển giữa AI và human inbox
  // Quick replies, buttons, templates (generic, receipt)
}
\`\`\`

#### Email Adapter
\`\`\`typescript
class EmailAdapter implements ChannelAdapter {
  // Inbound: SendGrid Inbound Parse → POST webhook
  // Parse email headers, body, attachments
  // Thread detection: In-Reply-To header → map tới existing conversation
  // Auto-reply templates
  // Outbound: SMTP via SendGrid/SES
  // Unsubscribe handling
}
\`\`\`

### 8.3 Webhook Processing Flow

\`\`\`mermaid
sequenceDiagram
    participant EXT as LINE / Zalo / FB
    participant WH as Webhook Handler
    participant CA as Channel Adapter
    participant Q as BullMQ Queue
    participant W as Worker
    participant CE as Conversation Engine

    EXT->>WH: POST /webhooks/{line|zalo|facebook}
    WH->>WH: Verify signature (HMAC-SHA256)
    WH->>Q: Enqueue job (raw payload + channelType)
    WH->>EXT: 200 OK (< 1s response time)

    Q->>W: Dequeue job
    W->>CA: adapter.normalize(payload)
    CA->>CA: Map to UnifiedMessage
    W->>CE: processInboundMessage(unifiedMessage)
    CE->>CE: Find/create customer
    CE->>CE: Find/create conversation
    CE->>CE: Insert message
    CE->>CE: Emit real-time events
\`\`\`

### 8.4 Rate Limiting per Channel API

\`\`\`typescript
// Per-channel API rate limiting với sliding window counter trong Redis
class ChannelRateLimiter {
  async checkLimit(channelId: string, channel: ChannelType): Promise<boolean> {
    const limits: Record<ChannelType, { requests: number; window: number }> = {
      line: { requests: 1667, window: 1 },     // 100,000 req/min ≈ 1,667 req/s
      zalo: { requests: 100, window: 1 },      // 100 req/s
      facebook: { requests: 200, window: 1 },  // 200 req/s
      email: { requests: 10, window: 1 },      // 10 req/s
    };
    // Redis INCR + EXPIRE sliding window
  }
}
\`\`\`

---

## 9. Security Architecture

### 9.1 Authentication

**JWT Token Strategy:**
\`\`\`
Access Token:   15 minutes TTL, signed RS256
Refresh Token:  7 days TTL, rotate on use, stored in HttpOnly cookie
Token Blacklist: Redis SET (lưu revoked JTIs)
\`\`\`

**JWT Claims:**
\`\`\`typescript
interface JWTPayload {
  sub: string;       // userId
  tid: string;       // tenantId
  role: UserRole;    // Owner | Admin | Supervisor | Agent | Viewer
  jti: string;       // unique token ID (for blacklisting)
  iat: number;
  exp: number;
}
\`\`\`

**Auth flow:**
\`\`\`
1. POST /auth/login → validate credentials → return accessToken + set refreshToken cookie
2. API request → Authorization: Bearer {accessToken}
3. Guard validates JWT → extract claims → set tenant context
4. Token expire → frontend auto-call POST /auth/refresh → rotate refresh token
5. Logout → blacklist current JTI in Redis → clear cookie
\`\`\`

### 9.2 Authorization (RBAC)

\`\`\`typescript
enum UserRole {
  Owner      = 'owner',       // Full access + billing
  Admin      = 'admin',       // Full access except billing
  Supervisor = 'supervisor',  // Manage agents, view all conversations
  Agent      = 'agent',       // Handle assigned conversations
  Viewer     = 'viewer',      // Read-only analytics
}

// NestJS Guard
@Injectable()
class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<UserRole[]>('roles', context.getHandler());
    const user = context.switchToHttp().getRequest().user;
    return requiredRoles.some(role => ROLE_HIERARCHY[user.role] >= ROLE_HIERARCHY[role]);
  }
}

// Usage
@Roles(UserRole.Admin, UserRole.Owner)
@UseGuards(JwtAuthGuard, RolesGuard)
@Delete('/users/:id')
async deleteUser(@Param('id') id: string) { ... }
\`\`\`

**Resource-level permissions** (conversation ownership):
\`\`\`typescript
// Agents chỉ thấy conversations assigned to them hoặc unassigned
// Supervisors thấy tất cả trong tenant
// Enforced via RLS + application-layer check
\`\`\`

### 9.3 Multi-tenant Data Isolation

**PostgreSQL Row-Level Security:**
\`\`\`sql
-- Set tenant context per request
SET LOCAL app.current_tenant_id = 'tenant-uuid-here';

-- RLS policy tự động filter
CREATE POLICY tenant_isolation ON conversations
  USING (tenant_id = current_setting('app.current_tenant_id')::UUID);

-- Prisma middleware set tenant context
prisma.\$use(async (params, next) => {
  await prisma.\$executeRaw\`SET LOCAL app.current_tenant_id = \${tenantId}\`;
  return next(params);
});
\`\`\`

**Additional isolation layers:**
- S3: bucket prefix \`tenants/{tenantId}/\` cho mọi file
- Redis keys: prefix \`{tenantId}:\` cho mọi key
- BullMQ jobs: \`tenantId\` trong job data, workers validate

### 9.4 Encryption

\`\`\`
At rest:
  - PostgreSQL: AES-256 (disk-level via RDS encryption hoặc LUKS)
  - Sensitive fields (API tokens, credentials): column-level encryption với pgcrypto
  - S3: Server-Side Encryption (SSE-S3 hoặc SSE-KMS)
  - Redis: AOF/RDB files encrypted (disk encryption)

In transit:
  - TLS 1.3 bắt buộc cho mọi connections
  - HSTS headers (max-age=31536000)
  - Certificate pinning cho mobile (Phase 3)
\`\`\`

**Column-level encryption cho sensitive data:**
\`\`\`sql
-- LINE/Zalo/FB credentials encrypted
CREATE EXTENSION IF NOT EXISTS pgcrypto;
INSERT INTO channel_configs (credentials)
VALUES (pgp_sym_encrypt('{"access_token": "..."}', current_setting('app.encryption_key')));
\`\`\`

### 9.5 PII Handling

\`\`\`typescript
// PII fields trong Customer table
const PII_FIELDS = ['name', 'email', 'phone'];

// Data masking cho logs
function maskPII(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (PII_FIELDS.includes(key) && typeof val === 'string') {
      acc[key] = maskString(val);  // "nguyen@..." → "ng***@..."
    } else {
      acc[key] = val;
    }
    return acc;
  }, {} as Record<string, unknown>);
}

// Retention policy: conversations older than X months → anonymize PII
// Configurable per tenant (compliance)
// Cron job: daily anonymization run

// Multi-region compliance:
// - APPI (Japan): 個人情報保護法 — requires consent for data collection,
//   data breach notification within 3-5 days, right to delete.
//   Consider: AWS ap-northeast-1 (Tokyo) for JP tenant data.
// - PDPA (Vietnam): similar to GDPR, data localization requirements.
//   Consider: AWS ap-southeast-1 (Singapore) as nearest region.
// - GDPR (EU): if expanding to EU tenants.
// Region-aware: tenant.dataRegion field determines DB connection routing (Phase 3)
\`\`\`

### 9.6 API Security

\`\`\`
Rate Limiting (Redis-backed):
  - Auth endpoints: 10 req/min per IP
  - API endpoints: 100 req/min per tenant, 1000 req/min per tenant (Pro)
  - Webhook endpoints: 500 req/s per channel

CORS:
  - Whitelist tenant domains (configurable in tenant settings)
  - Chat widget domains thêm vào whitelist khi cài đặt
  - API: strict origin check

Security Headers:
  - Content-Security-Policy
  - X-Frame-Options: DENY (trừ widget iframe)
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin

Input Validation:
  - Zod schemas cho mọi request body
  - SQL injection: parameterized queries via Prisma (không raw SQL)
  - XSS: DOMPurify cho rich text content
\`\`\`

### 9.7 Audit Logging

\`\`\`typescript
// Tất cả state-changing operations được log
interface AuditEvent {
  tenantId: string;
  actorId: string;
  action: AuditAction;          // 'conversation.assigned', 'user.role_changed', etc.
  resourceType: string;
  resourceId: string;
  changes: { before: unknown; after: unknown };
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
}

// NestJS Interceptor tự động log
@Injectable()
class AuditInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      tap(response => this.logAuditEvent(context, response))
    );
  }
}
\`\`\`

---

## 10. Scalability & Performance

### 10.1 Horizontal Scaling Strategy

**Phase 1 (1-100 tenants):** Single Node.js instance + managed PostgreSQL (RDS db.t3.medium) + managed Redis (ElastiCache t3.medium)

**Phase 2 (100-1,000 tenants):** 2-4 Node.js instances behind load balancer (sticky sessions for WebSocket). PostgreSQL read replica cho analytics queries. Redis Cluster.

**Phase 3 (1,000-10,000+ tenants):** Microservices extraction (AI Service first — CPU intensive). Kubernetes với HPA. PostgreSQL partitioning + sharding strategy. Elasticsearch cho search.

**Stateless application design:**
- Không store state in-process (dùng Redis)
- Session data trong Redis
- WebSocket state shared qua Redis adapter
- BullMQ workers horizontally scalable (chỉ Redis shared state)

### 10.2 Caching Strategy

\`\`\`
L1 — In-process cache (Node.js):
  - LRU cache cho tenant config (TTL 5min, max 1000 entries)
  - Không share giữa instances → chỉ cho immutable-ish data

L2 — Redis cache:
  - Active conversation data: TTL 5 min (warm cache cho inbox)
  - User sessions: TTL 24h
  - KB articles: TTL 30 min (invalidate on update)
  - Agent presence: TTL 35s (heartbeat refresh)
  - Rate limit counters: sliding window

L3 — CDN (CloudFront/Cloudflare):
  - Static assets (JS, CSS, images): immutable với content hash
  - Chat widget embed.js: cache 1 hour
  - KB public articles: cache 5 min (purge on publish)
\`\`\`

**Cache invalidation strategy:**
\`\`\`typescript
// Write-through caching cho conversations
async updateConversation(id: string, data: UpdateConversationDTO): Promise<Conversation> {
  const updated = await this.prisma.conversation.update({ where: { id }, data });
  await this.redis.del(\`conversation:\${id}\`);  // invalidate cache
  // Không update cache immediately — next read sẽ warm it up (lazy loading)
  return updated;
}
\`\`\`

### 10.3 Database Optimization

**Key indexes (additional to PKs):**
\`\`\`sql
-- conversations: most frequent queries
CREATE INDEX idx_conv_tenant_status_created ON conversations(tenant_id, status, created_at DESC);
CREATE INDEX idx_conv_agent_status ON conversations(assigned_agent_id, status) WHERE assigned_agent_id IS NOT NULL;

-- messages: conversation thread view
CREATE INDEX idx_msg_conv_created ON messages(conversation_id, created_at DESC);

-- customers: lookup by external ID
CREATE INDEX idx_cust_tenant_email ON customers(tenant_id, email) WHERE email IS NOT NULL;
CREATE INDEX idx_cust_external_ids ON customers USING GIN(external_ids);

-- kb articles: full-text search
CREATE INDEX idx_kb_search ON kb_articles USING GIN(search_vector);
CREATE INDEX idx_kb_tenant_status ON kb_articles(tenant_id, status, published_at DESC);

-- audit logs: compliance queries
CREATE INDEX idx_audit_tenant_created ON audit_logs(tenant_id, created_at DESC);
CREATE INDEX idx_audit_resource ON audit_logs(resource_type, resource_id);
\`\`\`

**Partitioning (messages table):**
\`\`\`sql
-- Auto-create monthly partitions
-- pg_partman extension hoặc cron job
-- Retention: archive partitions older than 2 years to cold storage
-- DROP PARTITION (nếu tenant xóa) = instant, không cần DELETE scan
\`\`\`

**Read replicas:**
\`\`\`
Primary: write + real-time reads (conversations, messages)
Replica 1: analytics queries (slow, long-running reports)
Replica 2: KB search (FTS queries có thể heavy)
\`\`\`

**Connection pooling:**
\`\`\`
PgBouncer: transaction-mode pooling
  - Max connections PostgreSQL: 200
  - Pool size per app instance: 20
  - Multiple app instances → PgBouncer multiplexes efficiently
\`\`\`

### 10.4 Background Job Processing

\`\`\`typescript
// BullMQ queue definitions
const queues = {
  'channel.inbound': {
    concurrency: 50,    // process 50 webhook events simultaneously
    limiter: { max: 100, duration: 1000 }
  },
  'ai.processing': {
    concurrency: 10,    // LLM calls, limited by API rate limits
    limiter: { max: 10, duration: 1000 }
  },
  'notification.email': {
    concurrency: 20,
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 }
  },
  'analytics.events': {
    concurrency: 100,   // high throughput, fire-and-forget
    removeOnComplete: true
  }
};
\`\`\`

---

## 11. Reliability & Monitoring

### 11.1 Health Checks

\`\`\`typescript
// /health endpoint (public, no auth)
@Get('/health')
async health(): Promise<HealthStatus> {
  const [db, redis, queue] = await Promise.allSettled([
    this.checkPostgres(),
    this.checkRedis(),
    this.checkBullMQ(),
  ]);
  return {
    status: [db, redis, queue].every(r => r.status === 'fulfilled') ? 'healthy' : 'degraded',
    timestamp: new Date().toISOString(),
    checks: { db, redis, queue },
    version: process.env.APP_VERSION,
  };
}
\`\`\`

### 11.2 Circuit Breakers

\`\`\`typescript
// Circuit breaker cho external APIs (Zalo, FB, LLM)
class ExternalAPIClient {
  private breaker = new CircuitBreaker(this.callAPI.bind(this), {
    timeout: 5000,           // 5s timeout
    errorThresholdPercentage: 50,  // open circuit nếu 50% errors
    resetTimeout: 30000,     // try again sau 30s
    volumeThreshold: 10,     // cần ít nhất 10 requests để tính
  });

  async send(message: OutboundMessage): Promise<void> {
    try {
      await this.breaker.fire(message);
    } catch (err) {
      if (err.code === 'OPEN') {
        // Circuit open → queue cho retry sau
        await this.queue.add('retry', message, { delay: 60000 });
      }
      throw err;
    }
  }
}
\`\`\`

### 11.3 Retry Strategy

\`\`\`typescript
// Exponential backoff với jitter
function getRetryDelay(attemptNumber: number): number {
  const baseDelay = 1000;  // 1s
  const maxDelay = 60000;  // 60s
  const exponential = Math.min(baseDelay * Math.pow(2, attemptNumber), maxDelay);
  const jitter = Math.random() * 0.3 * exponential;  // ±30% jitter
  return exponential + jitter;
}

// Retry limits per operation type
const retryConfig = {
  'channel.outbound': { attempts: 5, backoff: 'exponential' },
  'notification.email': { attempts: 3, backoff: 'exponential' },
  'ai.processing': { attempts: 2, backoff: 'fixed', delay: 5000 },
};
\`\`\`

### 11.4 Monitoring & Observability

**Prometheus Metrics:**
\`\`\`typescript
// Custom metrics
const metrics = {
  httpRequestDuration: new Histogram({
    name: 'http_request_duration_seconds',
    labelNames: ['method', 'route', 'status_code', 'tenant_plan'],
  }),
  activeConversations: new Gauge({
    name: 'active_conversations_total',
    labelNames: ['tenant_id'],
  }),
  aiRequestCost: new Counter({
    name: 'ai_token_cost_usd_total',
    labelNames: ['tenant_id', 'provider', 'model'],
  }),
  queueDepth: new Gauge({
    name: 'bullmq_queue_depth',
    labelNames: ['queue_name'],
  }),
  wsConnections: new Gauge({
    name: 'websocket_connections_total',
    labelNames: ['namespace'],
  }),
};
\`\`\`

**Grafana Dashboards:**
- System Overview: CPU, memory, latency percentiles (p50, p95, p99)
- Business Metrics: conversations/hour, CSAT trend, AI containment rate
- Queue Health: BullMQ depth, processing time, error rate
- Tenant Usage: per-tenant API calls, AI costs, storage

**Structured Logging:**
\`\`\`typescript
// Winston + correlation ID
const logger = createLogger({
  format: combine(
    timestamp(),
    json(),
  ),
  defaultMeta: {
    service: 'dora-api',
    version: process.env.APP_VERSION,
  },
});

// Mọi log entry bao gồm
interface LogEntry {
  level: string;
  message: string;
  correlationId: string;    // từ X-Correlation-ID header
  tenantId?: string;
  userId?: string;
  duration?: number;
  error?: { message: string; stack: string };
  timestamp: string;
}
\`\`\`

**Sentry Integration:**
\`\`\`typescript
// Capture exceptions với context
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.Integrations.Prisma({ client: prisma }),
    new BullMQIntegration(),
  ],
  beforeSend(event, hint) {
    // Strip PII từ error context
    if (event.request?.data) {
      event.request.data = maskPII(event.request.data);
    }
    return event;
  },
});
\`\`\`

### 11.5 Backup Strategy

\`\`\`
PostgreSQL (RDS):
  - Automated daily snapshots (30-day retention)
  - Point-in-time recovery (PITR) tới 5 minutes
  - Cross-region snapshot copy (Phase 2) cho DR

Redis:
  - AOF persistence (append-only file) — durability
  - RDB snapshots mỗi 1h
  - ElastiCache automatic backups

S3 (file attachments):
  - Versioning enabled
  - Cross-region replication (Phase 2)
  - Lifecycle rules: move to S3 Glacier sau 1 năm

Backup testing:
  - Monthly restore drill từ backup
  - Automated restore test trong staging environment
\`\`\`

---

## 12. Development & Deployment

### 12.1 Monorepo Structure (Turborepo)

\`\`\`
dora/
├── apps/
│   ├── web/                     # Next.js 15 - Agent Dashboard
│   │   ├── app/                 # App Router
│   │   │   ├── (auth)/          # Login, register
│   │   │   ├── (dashboard)/     # Main app layout
│   │   │   │   ├── inbox/       # Unified inbox
│   │   │   │   ├── tickets/     # Ticket management
│   │   │   │   ├── contacts/    # Customer list
│   │   │   │   ├── kb/          # Knowledge base
│   │   │   │   ├── analytics/   # Reports
│   │   │   │   └── settings/    # Tenant settings
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   └── package.json
│   │
│   ├── widget/                  # Chat Widget (standalone embed)
│   │   ├── src/                 # React widget
│   │   ├── embed.ts             # Loader script
│   │   └── package.json
│   │
│   └── api/                     # NestJS Backend
│       ├── src/
│       │   ├── main.ts
│       │   ├── app.module.ts
│       │   ├── modules/
│       │   │   ├── tenant-auth/
│       │   │   │   ├── tenant-auth.module.ts
│       │   │   │   ├── auth.service.ts
│       │   │   │   ├── tenant.service.ts
│       │   │   │   ├── guards/
│       │   │   │   └── dto/
│       │   │   ├── channel-adapter/
│       │   │   │   ├── channel-adapter.module.ts
│       │   │   │   ├── adapters/
│       │   │   │   │   ├── chat-widget.adapter.ts
│       │   │   │   │   ├── web-form.adapter.ts
│       │   │   │   │   ├── line.adapter.ts          ← Priority (Japan)
│       │   │   │   │   ├── zalo-oa.adapter.ts
│       │   │   │   │   ├── facebook.adapter.ts
│       │   │   │   │   └── email.adapter.ts
│       │   │   │   └── webhook.controller.ts
│       │   │   ├── conversation-engine/
│       │   │   ├── ticket-management/
│       │   │   ├── routing-engine/
│       │   │   ├── ai-service/
│       │   │   │   ├── providers/
│       │   │   │   │   ├── claude.provider.ts
│       │   │   │   │   └── openai.provider.ts
│       │   │   │   ├── chatbot.service.ts
│       │   │   │   ├── copilot.service.ts
│       │   │   │   └── guardrails.service.ts
│       │   │   ├── knowledge-base/
│       │   │   ├── notification/
│       │   │   └── analytics/
│       │   ├── common/
│       │   │   ├── decorators/
│       │   │   ├── filters/
│       │   │   ├── guards/
│       │   │   ├── interceptors/
│       │   │   └── pipes/
│       │   └── config/
│       ├── prisma/
│       │   ├── schema.prisma
│       │   └── migrations/
│       └── package.json
│
├── packages/
│   ├── ui/                      # Shared UI components (shadcn/ui base)
│   ├── types/                   # Shared TypeScript types
│   ├── utils/                   # Shared utilities
│   ├── config/                  # Shared ESLint, TypeScript configs
│   └── ai-sdk/                  # AI provider abstraction (publishable)
│
├── infra/
│   ├── docker-compose.yml       # Local development
│   ├── docker-compose.prod.yml  # Production compose
│   ├── k8s/                     # Kubernetes manifests (Phase 3)
│   └── terraform/               # IaC (Phase 3)
│
├── .github/
│   └── workflows/
│       ├── ci.yml               # PR checks
│       └── deploy.yml           # Deploy on merge/tag
│
├── turbo.json
└── package.json
\`\`\`

### 12.2 Docker Compose (Development)

\`\`\`yaml
# docker-compose.yml
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: dora_dev
      POSTGRES_USER: dora
      POSTGRES_PASSWORD: dora_secret
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"

  minio:
    image: minio/minio
    command: server /data --console-address ":9001"
    environment:
      MINIO_ROOT_USER: minioadmin
      MINIO_ROOT_PASSWORD: minioadmin
    volumes:
      - minio_data:/data
    ports:
      - "9000:9000"
      - "9001:9001"

  mailhog:
    image: mailhog/mailhog
    ports:
      - "1025:1025"  # SMTP
      - "8025:8025"  # Web UI
\`\`\`

### 12.3 Testing Strategy

\`\`\`
Unit Tests (Vitest):
  - Services với mocked dependencies
  - Utility functions, transformers, validators
  - AI provider abstraction
  - Channel adapter normalization logic
  Target: > 80% coverage cho business logic modules

Integration Tests (Vitest + Testcontainers):
  - API endpoints với real PostgreSQL (Docker container)
  - BullMQ worker integration với real Redis
  - Database migrations testing
  - Prisma queries với real DB

E2E Tests (Playwright):
  - Critical user flows: login → view inbox → reply conversation
  - Agent assignment flow
  - Ticket creation and management
  - Chat widget customer flow (separate Playwright test)
  Run: nightly CI + before release

Load Tests (k6):
  - WebSocket connections: 1,000 concurrent agents
  - Message throughput: 10,000 messages/minute
  - API latency under load: p95 < 200ms
  Run: weekly, before major releases
\`\`\`

### 12.4 CI/CD Pipeline

\`\`\`yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install
      - run: pnpm run lint
      - run: pnpm run typecheck
      - run: pnpm run test:unit
      - run: pnpm run test:integration
      - run: pnpm run build

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm audit --audit-level=high
      - uses: aquasecurity/trivy-action@master  # Docker image scan
      - uses: github/codeql-action/analyze@v3

  deploy-staging:
    needs: [quality, security]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: docker build -t dora-api:\${{ github.sha }} ./apps/api
      - run: docker push registry/dora-api:\${{ github.sha }}
      - run: ./scripts/deploy-staging.sh \${{ github.sha }}
      - run: pnpm run test:e2e --base-url=\$STAGING_URL

  deploy-production:
    needs: deploy-staging
    if: startsWith(github.ref, 'refs/tags/v')
    environment: production  # requires manual approval
    steps:
      - run: ./scripts/deploy-prod.sh \${{ github.ref_name }}
\`\`\`

### 12.5 Environment Strategy

\`\`\`
Development (local):
  - docker-compose up (postgres, redis, minio, mailhog)
  - .env.local với dev credentials
  - Hot reload (ts-node-dev / Next.js dev)
  - Feature flags: tất cả enabled

Staging:
  - Dedicated environment, mirrors production
  - Synthetic data (không có real customer data)
  - Auto-deploy từ main branch
  - Feature flags: selective (test new features)

Production:
  - Deploy từ tagged releases (vX.Y.Z)
  - Manual approval required
  - Blue-green deployment strategy
  - Feature flags: controlled rollout (%)
\`\`\`

### 12.6 Database Migrations

\`\`\`bash
# Prisma migration workflow
pnpm prisma migrate dev --name add_ai_session_table   # development
pnpm prisma migrate deploy                             # production (idempotent)
pnpm prisma db seed                                    # seed dev data

# Migration safety rules:
# 1. NEVER DROP column/table without deprecation period
# 2. Add columns as nullable first, backfill, then add NOT NULL constraint
# 3. Create indexes CONCURRENTLY (không lock production table)
# 4. Large data migrations: background job, không trong migration file
\`\`\`

### 12.7 Feature Flags

\`\`\`typescript
// LaunchDarkly hoặc self-hosted Unleash
interface FeatureFlag {
  'ai-copilot-mode': boolean;
  'ai-smart-routing': boolean;
  'email-integration': boolean;
  'sla-management': boolean;
  'analytics-v2': boolean;
}

// Usage
const isEnabled = await featureFlags.isEnabled('ai-copilot-mode', {
  tenantId: tenant.id,
  plan: tenant.plan,
});

// Rollout strategy:
// 1. Internal users (dogfooding)
// 2. Beta tenants (opt-in)
// 3. 10% random tenants
// 4. 50%, 100%
\`\`\`

---

## 13. Trade-offs & Decisions (ADR)

### ADR-001: Modular Monolith thay vì Microservices ngay từ đầu

**Context:** Team nhỏ (3-5 engineers), cần ship nhanh, chưa biết chính xác module boundaries.

**Options Considered:**
1. Microservices từ đầu
2. Modular Monolith → Microservices
3. Simple monolith (no modules)

**Chosen:** Modular Monolith (Option 2)

**Rationale:**
- Martin Fowler's "MonolithFirst" pattern — don't distribute a system you don't understand
- Module boundaries rõ ràng từ đầu → migration sau dễ hơn
- Giảm 60% operational overhead (1 deployment, 1 database connection pool, không cần service mesh)
- Shared in-process calls giảm latency so với network calls

**Trade-offs:**
- Rủi ro: một module crash → ảnh hưởng toàn bộ app (thay vì isolated)
- Giải pháp: graceful shutdown, health checks, auto-restart, error boundaries per module
- Scale sau 18-24 tháng cần effort migration → nhưng revenue lúc đó justify nó

---

### ADR-002: Shared Database Schema với Row-Level Security

**Context:** Multi-tenant isolation cần thiết, có 3 approaches phổ biến.

**Options Considered:**
1. Separate database per tenant (highest isolation)
2. Separate schema per tenant (medium isolation)
3. Shared schema với RLS (lowest isolation, highest efficiency)

**Chosen:** Shared schema với RLS (Option 3)

**Rationale:**
- SMB target: 100s tenants với data volume nhỏ → lãng phí resource với separate DB
- RLS enforce at database level → bug trong application layer vẫn bị chặn
- Operational simplicity: 1 database, 1 connection pool, 1 migration
- PostgreSQL RLS production-proven (Supabase dùng cho millions of tenants)

**Trade-offs:**
- Scale limit: >10,000 tenants cần re-evaluate (RLS overhead)
- "Noisy neighbor": một tenant với heavy queries có thể ảnh hưởng others → mitigate bằng per-tenant query timeout và connection limit
- Compliance: một số enterprise yêu cầu physical isolation → Phase 3 enterprise tier offer separate DB option

---

### ADR-003: BullMQ thay vì RabbitMQ/Kafka cho Message Queue

**Context:** Cần async job processing, webhook delivery, notification dispatch.

**Options Considered:**
1. RabbitMQ (AMQP)
2. Apache Kafka
3. BullMQ (Redis-backed)
4. Amazon SQS

**Chosen:** BullMQ (Option 3)

**Rationale:**
- Redis đã có trong stack → zero additional operational cost
- BullMQ API đơn giản hơn RabbitMQ (không cần biết AMQP)
- Job priority, delay, retry, cron jobs — tất cả built-in
- Dashboard (Bull Board) cho visibility
- Kafka over-engineered cho MVP scale (design cho millions events/s)
- SQS adds vendor lock-in và latency

**Trade-offs:**
- Tied to Redis: Redis failure = queue failure
- Không có message replay như Kafka (nếu cần audit trail, phải log riêng)
- Migrate sang Kafka Phase 3 nếu cần event sourcing hoặc replay capability

---

### ADR-004: Prisma ORM thay vì raw SQL hoặc Drizzle

**Context:** Cần database access layer an toàn, type-safe, dễ maintain.

**Options Considered:**
1. Raw SQL (pg library)
2. Knex.js (query builder)
3. Drizzle ORM
4. Prisma ORM

**Chosen:** Prisma (Option 4)

**Rationale:**
- Type-safe queries với auto-generated types từ schema → catch DB query errors at compile time
- Migration system mạnh (prisma migrate)
- Prisma Studio cho dev database exploration
- Ecosystem tốt: NestJS integration, testing utilities
- Schema-first approach phù hợp với architecture-driven development

**Trade-offs:**
- Prisma Client bundle lớn (~3MB) → không ảnh hưởng server-side
- N+1 queries cần explicit \`include\` — developer phải biết Prisma patterns
- Complex queries (window functions, CTEs) cần raw SQL fallback (\`\$queryRaw\`)
- Drizzle nhẹ hơn và SQL-first nhưng ecosystem nhỏ hơn, ít mature hơn ở thời điểm này

---

### ADR-005: Claude API làm primary LLM Provider

**Context:** Cần LLM provider cho chatbot, copilot, summarization. Nhiều options.

**Options Considered:**
1. OpenAI GPT-4o (market leader)
2. Claude Sonnet (Anthropic)
3. Google Gemini Pro
4. Self-hosted Llama (Ollama)
5. Provider-agnostic từ đầu

**Chosen:** Claude primary + abstraction layer (Option 2 + 5)

**Rationale:**
- Claude hiểu Vietnamese tốt hơn GPT-4o trong benchmarks nội bộ
- Claude Constitutional AI → ít hallucination, safer responses
- Abstraction layer từ đầu → switch provider không cần code change
- Cost comparable với GPT-4o (Claude Sonnet vs GPT-4o-mini)
- Self-hosted Llama: quality không đủ cho production chatbot MVP

**Trade-offs:**
- Anthropic có thể thay đổi pricing/API → abstraction layer mitigate
- Claude không có image understanding mạnh bằng GPT-4V (cần cho Phase 3 multimedia)
- Abstraction layer thêm code complexity nhưng justified bởi long-term flexibility

---

### ADR-006: Socket.IO thay vì native WebSocket

**Context:** Real-time communication cho agents và customers.

**Options Considered:**
1. Native WebSocket (ws library)
2. Socket.IO 4
3. Server-Sent Events (SSE) cho một chiều
4. GraphQL Subscriptions

**Chosen:** Socket.IO (Option 2)

**Rationale:**
- Redis adapter cho multi-server WebSocket rooms — crucial cho horizontal scaling
- Automatic fallback: WebSocket → HTTP long-polling cho environments block WebSocket (corporate firewalls)
- Namespace và room abstractions phù hợp với conversation model
- Built-in reconnection logic với exponential backoff
- Acknowledgment callbacks cho reliable message delivery

**Trade-offs:**
- ~15KB overhead so với native WebSocket
- Protocol khác với native WebSocket (Socket.IO packet format) → cần Socket.IO client
- GraphQL Subscriptions elegant hơn nhưng adds GraphQL layer phức tạp không cần thiết

### ADR-007: LINE-first cho Japan Market + Dual-market Architecture

**Context:** Business yêu cầu hỗ trợ thị trường Nhật Bản song song với Việt Nam. LINE là messaging platform dominant tại Nhật (~95M MAU, ~75% dân số).

**Options Considered:**
1. VN-first, thêm LINE sau (Phase 2-3)
2. LINE trong MVP nhưng basic integration
3. LINE-first cho JP market: deep integration (Rich Menu, Flex Messages, LIFF, LINE Login) ngay từ MVP

**Chosen:** Option 3 — LINE deep integration trong MVP

**Rationale:**
- Japan ARPU cao hơn VN 5-10x → revenue impact lớn dù customer count nhỏ hơn
- LINE ecosystem phong phú (Rich Menu, Flex Messages, LIFF) → UX vượt trội nếu tích hợp sâu
- Đối thủ (Zendesk, Freshdesk) tích hợp LINE hời hợt → competitive moat
- LINE Messaging API mature, well-documented, rate limit cao (100K req/min)
- Channel Adapter pattern cho phép add LINE adapter với cùng effort như Zalo/FB

**Trade-offs:**
- Thêm complexity cho AI: phải support keigo (Japanese honorific) bắt buộc
- LINE-specific features (Rich Menu, Flex Messages) cần UI builder riêng
- APPI compliance (Japan data privacy law) cần region-aware data storage
- Tăng testing surface: 3 channel adapters thay vì 2 trong MVP

**Implications:**
- AI persona system phải support multilingual từ MVP (không phải afterthought)
- Data model cần \`dataRegion\` field cho tenant (JP → ap-northeast-1, VN → ap-southeast-1)
- Pricing strategy khác nhau: freemium cho VN, premium-first cho JP

---

## 14. FR & NFR Traceability

### 14.1 Functional Requirements → Components

| Feature (FR) | Phase | Primary Component | Supporting Components |
|-------------|-------|------------------|-----------------------|
| Chat Widget embed | 1 | Channel Adapter | Conversation Engine, WebSocket |
| Web Form | 1 | Channel Adapter | Ticket Management |
| Unified Inbox | 1 | Conversation Engine | API Gateway, WebSocket |
| AI Chatbot (FAQ, auto-reply) | 1 | AI Service | Knowledge Base, Conversation Engine |
| Agent assignment (round-robin) | 1 | Routing Engine | Notification Service |
| Basic ticket management | 1 | Ticket Management | Conversation Engine |
| CSAT survey | 1 | Notification Service | Analytics |
| LINE Official Account (JP) | 1 | Channel Adapter (LineAdapter) | Conversation Engine, Rich Menu, Flex Messages |
| Zalo OA integration (VN) | 1 | Channel Adapter (ZaloAdapter) | Conversation Engine |
| Facebook Messenger | 1 | Channel Adapter (FBAdapter) | Conversation Engine |
| Email integration | 2 | Channel Adapter (EmailAdapter) | Ticket Management |
| Knowledge Base + AI search | 2 | Knowledge Base | AI Service |
| SLA management | 2 | Ticket Management | Notification Service, Analytics |
| Automation rules | 2 | Routing Engine | All modules (event-driven) |
| Skill-based routing | 2 | Routing Engine | AI Service |
| Agent performance dashboard | 2 | Analytics | Conversation Engine, Ticket |
| AI Copilot Mode | 2 | AI Service | Conversation Engine |
| Phone/VoIP | 3 | Channel Adapter (new) | AI Service (transcription) |
| Advanced AI Agent | 3 | AI Service | All modules |
| Predictive analytics | 3 | Analytics | AI Service |
| Marketplace/plugin | 3 | API Gateway (plugin system) | All modules |
| White-label | 3 | Tenant & Auth | Frontend (theming) |
| SSO/SAML | 3 | Tenant & Auth | API Gateway |
| Audit logs (enterprise) | 3 | Audit Logging (cross-cutting) | All modules |

### 14.2 Non-Functional Requirements → Solutions

| NFR | Requirement | Solution | Component |
|-----|------------|---------|-----------|
| NFR-1: Latency | Chat < 100ms | WebSocket direct, Redis pub/sub, in-memory session | Conversation Engine, Redis |
| NFR-2: Availability | 99.9% uptime | Load balancer, health checks, auto-restart, Redis HA | Infrastructure |
| NFR-3: Scalability | 10 → 10,000 tenants | Stateless API, horizontal scaling, DB partitioning | All |
| NFR-4: Data Isolation | Strict tenant separation | PostgreSQL RLS, tenant-prefixed Redis keys | Tenant & Auth, DB |
| NFR-5: Security | PII protection, RBAC | JWT + RBAC, AES-256, TLS 1.3, audit logs | API Gateway, Auth |
| NFR-6: Reliability | No message loss | BullMQ persistence, retry, circuit breakers | Channel Adapter, Queue |
| NFR-7: Maintainability | Clean architecture | Modular monolith, DI, strict TypeScript | All |
| NFR-8: Cost Efficiency | AI cost control | Token budgets, caching, model selection | AI Service |
| NFR-9: Compliance | APPI (JP) + PDPA (VN) + GDPR ready | Data masking, retention policies, audit logs, region-aware data residency | Cross-cutting |
| NFR-10: Observability | Fast incident response | Prometheus + Grafana + Sentry + correlation IDs | Monitoring |

---

## 15. MVP Architecture Diagram

Diagram dưới đây mô tả deployment architecture cho **Phase 1 MVP** — đơn giản, cost-effective, và production-ready.

\`\`\`mermaid
graph TB
    subgraph Internet["Internet / Client Layer"]
        direction LR
        AGT[Agent Browser<br/>Next.js App]
        CUS[Customer Browser<br/>Chat Widget]
        LNW[LINE<br/>Webhook Events]
        ZLW[Zalo OA<br/>Webhook Events]
        FBW[Facebook<br/>Webhook Events]
    end

    subgraph CDN["CDN Layer (CloudFront)"]
        CF[CloudFront<br/>Static Assets + Widget JS]
    end

    subgraph LoadBalancer["Load Balancer"]
        ALB[Application Load Balancer<br/>SSL Termination<br/>Sticky Sessions for WS]
    end

    subgraph AppLayer["Application Layer (2 instances for HA)"]
        subgraph APP1["Instance 1 (t3.medium)"]
            API1[NestJS API<br/>Port 3000]
            WS1[Socket.IO<br/>Port 3000/ws]
        end
        subgraph APP2["Instance 2 (t3.medium)"]
            API2[NestJS API<br/>Port 3000]
            WS2[Socket.IO<br/>Port 3000/ws]
        end
        subgraph WRK["Worker Instance (t3.small)"]
            BW[BullMQ Workers<br/>Channel + AI + Notification]
        end
    end

    subgraph DataLayer["Data Layer (Managed Services)"]
        PG[(RDS PostgreSQL 16<br/>db.t3.medium<br/>Multi-AZ)]
        RD[(ElastiCache Redis 7<br/>cache.t3.micro<br/>Cluster mode)]
        S3[(S3 Bucket<br/>File Attachments<br/>+ Widget Assets)]
    end

    subgraph ExternalAPIs["External APIs"]
        LNAPI[LINE Messaging API<br/>api.line.me]
        ZLA[Zalo API<br/>api.zaloapp.com]
        FBA[Facebook Graph API<br/>graph.facebook.com]
        CLO[Claude API<br/>api.anthropic.com]
        SG[SendGrid<br/>Email Delivery]
    end

    subgraph Monitoring["Monitoring (self-hosted)"]
        PROM[Prometheus]
        GRAF[Grafana]
        SENT[Sentry Cloud]
    end

    AGT -->|HTTPS| CF
    CUS -->|HTTPS| CF
    CF -->|API calls| ALB
    LNW -->|HTTPS POST| ALB
    ZLW -->|HTTPS POST| ALB
    FBW -->|HTTPS POST| ALB

    ALB -->|HTTP| API1
    ALB -->|HTTP| API2
    ALB -->|WS upgrade| WS1
    ALB -->|WS upgrade| WS2

    API1 <-->|Read/Write| PG
    API2 <-->|Read/Write| PG
    BW <-->|Read/Write| PG

    API1 <-->|Cache/PubSub/Queue| RD
    API2 <-->|Cache/PubSub/Queue| RD
    WS1 <-->|Socket.IO Adapter| RD
    WS2 <-->|Socket.IO Adapter| RD
    BW <-->|Job Queue| RD

    API1 -->|Presigned URLs| S3
    BW -->|Upload/Download| S3

    BW -->|LINE outbound| LNAPI
    BW -->|Zalo outbound| ZLA
    BW -->|FB outbound| FBA
    BW -->|AI requests| CLO
    BW -->|Email send| SG

    API1 -->|Metrics| PROM
    API2 -->|Metrics| PROM
    BW -->|Metrics| PROM
    PROM --> GRAF
    API1 -.->|Errors| SENT
    API2 -.->|Errors| SENT

    style Internet fill:#e8f4f8
    style DataLayer fill:#fff3e0
    style ExternalAPIs fill:#f3e5f5
    style Monitoring fill:#e8f5e9
    style AppLayer fill:#fce4ec
\`\`\`

### 15.1 MVP Infrastructure Cost Estimate (AWS, tháng)

| Resource | Spec | Cost/month (USD) |
|----------|------|-----------------|
| EC2 App Instances (2x) | t3.medium | ~\$60 |
| EC2 Worker Instance (1x) | t3.small | ~\$15 |
| RDS PostgreSQL | db.t3.medium Multi-AZ | ~\$100 |
| ElastiCache Redis | cache.t3.micro | ~\$25 |
| ALB | | ~\$20 |
| S3 + CloudFront | 100GB data | ~\$15 |
| Data Transfer | | ~\$10 |
| **Total** | | **~\$245/month** |

Với 20 tenants paying plan, break-even ở ~\$12.25/tenant/month — hoàn toàn viable.

### 15.2 Data Flow Summary (MVP)

\`\`\`
Customer sends message via Chat Widget:
  1. Widget → WSS connection → Socket.IO Server
  2. Message → Conversation Engine → PostgreSQL insert
  3. AI Service processes (async BullMQ job):
     a. Intent detection via Claude API
     b. KB search (PostgreSQL FTS)
     c. Response generation
     d. Confidence check (≥0.75 → send, <0.75 → escalate)
  4. Response → Conversation Engine → WebSocket broadcast
  5. If escalate: Routing Engine → assign agent → notify via WebSocket

Customer sends message via LINE (Japan):
  1. LINE → POST /webhooks/line → verify X-Line-Signature (HMAC-SHA256)
  2. BullMQ enqueue job → return 200 immediately
  3. Worker: LineAdapter.normalize() → UnifiedMessage
  4. Conversation Engine: find/create Customer (LINE userId) + Conversation
  5. Insert Message → same AI pipeline as Chat Widget above
  6. Response: Worker → LineAdapter.replyMessage(replyToken) (free, within 1 min)
     Fallback: LineAdapter.pushMessage(userId) (paid, if reply token expired)
  7. Optional: Flex Message format for rich responses (product cards, etc.)

Customer sends message via Zalo (Vietnam):
  1. Zalo → POST /webhooks/zalo → verify signature
  2. BullMQ enqueue job → return 200 immediately
  3. Worker: ZaloAdapter.normalize() → UnifiedMessage
  4. Conversation Engine: find/create Customer + Conversation
  5. Insert Message → same pipeline as Chat Widget above
  6. Response: Worker → ZaloAdapter.send() → Zalo API
\`\`\`

---

## Appendix A: Key Non-functional Targets (Phase 1)

| Metric | Target | Measurement |
|--------|--------|-------------|
| API p95 latency | < 200ms | Prometheus histogram |
| WebSocket message latency | < 100ms | Client-side measurement |
| System availability | 99.9% | Uptime Kuma |
| Max concurrent WebSocket | 500 connections | k6 load test |
| Message throughput | 1,000 msg/min | BullMQ metrics |
| Database query p95 | < 50ms | Prisma query logging |
| AI response time | < 5s | BullMQ job duration |

## Appendix B: Security Checklist (MVP Launch)

- [ ] TLS 1.3 trên tất cả endpoints
- [ ] JWT RS256 (asymmetric signing)
- [ ] Refresh token rotation
- [ ] Rate limiting trên auth endpoints
- [ ] CORS whitelist configured
- [ ] SQL injection: chỉ dùng parameterized queries
- [ ] XSS: DOMPurify cho user-generated content
- [ ] Webhook HMAC signature verification
- [ ] PII masking trong logs
- [ ] Secrets trong environment variables (không trong code)
- [ ] Dependencies audit (npm audit)
- [ ] Docker image scanning (Trivy)
- [ ] PostgreSQL RLS enabled và tested
- [ ] RBAC tested với boundary tests
- [ ] Audit log cho sensitive operations

## Appendix C: Team Conventions

\`\`\`typescript
// Naming conventions
// Modules: kebab-case (conversation-engine)
// Classes: PascalCase (ConversationService)
// Methods: camelCase (findConversation)
// DB tables: snake_case (conversation_messages)
// Redis keys: colon-separated ({tenantId}:conversation:{id})
// BullMQ queues: dot-separated (channel.inbound)
// Events: dot-separated noun.verb past (conversation.created)

// Error handling: always use custom domain errors
class ConversationNotFoundError extends DomainError {
  constructor(id: string) {
    super('CONVERSATION_NOT_FOUND', \`Conversation \${id} not found\`, 404);
  }
}

// DTO validation: Zod schemas
const CreateConversationSchema = z.object({
  channelId: z.string().uuid(),
  customerId: z.string().uuid().optional(),
  subject: z.string().max(255).optional(),
});
\`\`\`

---

*Document generated: 2026-03-13*
*Next review: 2026-04-13 (sau Phase 1 MVP development start)*
*Maintained by: Architecture team*
`,
  "estimation": `# Timeline & Estimation — Dora Platform

> Tài liệu ước lượng thời gian và nguồn lực cho toàn bộ dự án Dora, dành cho team 4 người.

---

## Team Composition

| Role | Qty | Trách nhiệm chính |
|------|-----|-------------------|
| **PM** | 1 | PRD, wireframe, API spec, stakeholder management, QA coordination |
| **BE** | 1 | NestJS backend, DB, WebSocket, AI integration, Channel Adapters |
| **FE** | 1 | Next.js 15, Unified Inbox UI, Chat Widget, Dashboard, Admin |
| **QC** | 1 | Test plan, manual testing, Playwright automation, regression |

---

## Assumptions

- **Sprint:** 2 tuần (10 working days)
- **Working days/tháng:** 22 ngày
- **Buffer:** 20% mỗi phase (sick leave, unexpected issues, learning curve)
- **Approach:** API-first — BE + FE thống nhất OpenAPI spec trước mỗi sprint
- **QC:** Tham gia từ đầu sprint, viết test plan song song với dev
- **PM:** Hoàn thành wireframe + PRD lead 1 sprint trước khi dev bắt đầu

---

## Master Timeline

\`\`\`mermaid
gantt
    title Dora Platform — Master Timeline 2026
    dateFormat YYYY-MM-DD
    axisFormat %d/%m

    section Phase 0 — Setup
    PRD v1 + Wireframe           :p0-prd, 2026-03-16, 10d
    BE Boilerplate + CI/CD       :p0-be, 2026-03-16, 8d
    FE Boilerplate + Design      :p0-fe, 2026-03-16, 8d
    QC Setup + Test Plan         :p0-qc, 2026-03-16, 6d
    API Contract Workshop        :p0-api, 2026-03-23, 4d
    Channel Sandbox Registration :p0-ch, 2026-03-16, 2d

    section Phase 1 — MVP
    Sprint 1 — Conversation + Inbox     :s1, 2026-03-30, 10d
    Sprint 2 — LINE + Web Widget        :s2, after s1, 10d
    Sprint 3 — Zalo + AI Chatbot        :s3, after s2, 10d
    Sprint 4 — Routing + Ticket         :s4, after s3, 10d
    Sprint 5 — Dashboard + CSAT         :s5, after s4, 10d
    Buffer Phase 1                      :crit, buf1, after s5, 10d
    MVP Release                         :milestone, m1, after buf1, 0d

    section Phase 2 — Growth
    Sprint 6-7 — FB + Email + Skills    :s67, 2026-07-06, 20d
    Sprint 8-9 — AI Copilot + SLA       :s89, after s67, 20d
    Sprint 10 — Polish + Performance    :s10, after s89, 10d
    Buffer Phase 2                      :crit, buf2, after s10, 10d
    Growth Release                      :milestone, m2, after buf2, 0d

    section Phase 3 — Scale
    Sprint 11-12 — Billing + API        :s1112, 2026-10-05, 20d
    Sprint 13-14 — ES + K8s + Launch    :s1314, after s1112, 20d
    Buffer Phase 3                      :crit, buf3, after s1314, 10d
    Platform Launch                     :milestone, m3, after buf3, 0d
\`\`\`

### Timeline Table

| Phase | Sprint | Nội dung chính | Tuần | Thời gian | Output |
|-------|--------|---------------|------|-----------|--------|
| **Phase 0** | Setup | Boilerplate, CI/CD, PRD, Wireframe, API Spec | W1-2 | 16/03 → 27/03 | Foundation ready |
| **Phase 1** | Sprint 1 | Conversation Engine + Basic Inbox | W3-4 | 30/03 → 10/04 | Real-time chat |
| | Sprint 2 | LINE Adapter + Web Chat Widget | W5-6 | 13/04 → 24/04 | First channel live |
| | Sprint 3 | Zalo Adapter + AI Chatbot + KB | W7-8 | 27/04 → 08/05 | AI auto-reply |
| | Sprint 4 | Routing + Ticket + Notification | W9-10 | 11/05 → 22/05 | Auto-assignment |
| | Sprint 5 | Dashboard + CSAT + Multi-tenant | W11-12 | 25/05 → 05/06 | Analytics ready |
| | Buffer | Bug fix, UAT, polish | W13-14 | 08/06 → 19/06 | — |
| | **MVP Release** | | | **Mid Jun 2026** | **Beta users** |
| **Phase 2** | Sprint 6-7 | Facebook + Email + Skill Routing | W15-18 | 06/07 → 31/07 | 4 channels |
| | Sprint 8-9 | AI Copilot + SLA + Automation | W19-22 | 03/08 → 28/08 | Smart features |
| | Sprint 10 | Polish + Performance + Security | W23-24 | 31/08 → 11/09 | Production-grade |
| | Buffer | Regression, load test | W25-26 | 14/09 → 25/09 | — |
| | **Growth Release** | | | **End Sep 2026** | **Full features** |
| **Phase 3** | Sprint 11-12 | Billing + Public API + White-label | W27-30 | 05/10 → 30/10 | Monetization |
| | Sprint 13-14 | Elasticsearch + K8s + Launch prep | W31-34 | 02/11 → 27/11 | Scale-ready |
| | Buffer | Pen testing, final QA | W35-36 | 30/11 → 11/12 | — |
| | **Platform Launch** | | | **End Dec 2026** | **Public launch** |

---

## Phase 0 — Foundation & Setup (2 tuần)

**Timeline:** Tuần 1-2 | **Target:** End Mar 2026

| Task | Owner | Days | Notes |
|------|-------|------|-------|
| PRD v1.0 + User Stories Phase 1 | PM | 10 | Hoàn thành trước Sprint 1 |
| UI Wireframe (Figma) — Inbox, Widget, Dashboard | PM | 10 | Low-fidelity |
| NestJS boilerplate + Docker Compose | BE | 3 | Module scaffolding |
| PostgreSQL schema v1 + Prisma | BE | 2 | Core tables |
| Redis + BullMQ setup | BE | 1 | Cache + queue |
| Auth module (JWT + refresh token) | BE | 2 | Login, RBAC |
| Next.js 15 + shadcn/ui boilerplate | FE | 2 | App Router, Tailwind |
| Design System (tokens, components) | FE | 2 | Colors, fonts, spacing |
| CI/CD (GitHub Actions) | BE | 1 | Lint, test, build, deploy |
| LINE Messaging API sandbox | PM | 1 | **Approval 1-2 tuần** |
| Zalo OA sandbox | PM | 1 | **Approval 1-2 tuần** |
| Playwright setup + test template | QC | 3 | Framework + conventions |
| API Contract (OpenAPI) Sprint 1 | ALL | 2 | Align before coding |

---

## Phase 1 — MVP (10 tuần + 2w buffer)

**Timeline:** Tuần 3-14 | **Target:** Mid Jun 2026

### Sprint 1 (Tuần 3-4): Conversation Engine + Basic Inbox

| Task | Owner | Days |
|------|-------|------|
| Conversation Engine (CRUD, lifecycle) | BE | 5 |
| Message model + cursor pagination | BE | 2 |
| WebSocket (Socket.IO) + real-time events | BE | 3 |
| Auth pages (Login, Register) | FE | 2 |
| Inbox — conversation list | FE | 3 |
| Inbox — conversation detail + chat | FE | 3 |
| WebSocket client integration | FE | 2 |
| Test plan + manual testing | QC | 5 |
| PRD refine + wireframe Sprint 2 | PM | 5 |

> **Output:** Agent login, xem conversation list, nhắn tin real-time

### Sprint 2 (Tuần 5-6): Channel Adapters — LINE + Web Chat

| Task | Owner | Days |
|------|-------|------|
| Channel Adapter base + UnifiedMessage DTO | BE | 2 |
| LINE Messaging API adapter | BE | 4 |
| Web Chat Widget backend | BE | 2 |
| Chat Widget (embed.js) | FE | 4 |
| Inbox — channel indicators | FE | 1 |
| Typing indicator + delivery status | FE | 2 |
| Customer profile sidebar | FE | 1 |
| Test LINE E2E | QC | 3 |
| Test Widget cross-browser | QC | 3 |
| API spec Sprint 3 | PM | 5 |

> **Output:** LINE/Web Widget messages appear in Unified Inbox, agent replies

### Sprint 3 (Tuần 7-8): Zalo + AI Chatbot

| Task | Owner | Days |
|------|-------|------|
| Zalo OA adapter | BE | 3 |
| AI Service — provider abstraction | BE | 2 |
| AI Chatbot pipeline (intent, KB search, response) | BE | 3 |
| Confidence threshold + auto-escalation | BE | 2 |
| Knowledge Base — CRUD articles | FE | 3 |
| AI Demo — split screen view | FE | 3 |
| Confidence meter UI | FE | 1 |
| AI vs Human indicator | FE | 1 |
| Test Zalo E2E | QC | 2 |
| Test AI accuracy + edge cases | QC | 4 |
| **AI Spike: Keigo prompt tuning** | BE+PM | 2 |

> **Output:** AI auto-reply, confidence meter, Zalo channel live

### Sprint 4 (Tuần 9-10): Routing + Ticket + Notification

| Task | Owner | Days |
|------|-------|------|
| Routing Engine (round-robin, load-balanced) | BE | 3 |
| Agent status (online/away/busy/offline) | BE | 2 |
| Ticket Management (auto-create from escalation) | BE | 3 |
| Notification (in-app + email basic) | BE | 2 |
| Routing config page | FE | 2 |
| Agent status selector | FE | 1 |
| Ticket list + detail | FE | 3 |
| Notification bell + dropdown | FE | 2 |
| Test routing logic | QC | 3 |
| Test ticket lifecycle | QC | 2 |
| Regression Sprint 1-3 | QC | 3 |

> **Output:** Auto-assignment, ticket creation on escalation, notifications

### Sprint 5 (Tuần 11-12): Dashboard + CSAT + Polish

| Task | Owner | Days |
|------|-------|------|
| Analytics module (event collection) | BE | 2 |
| Analytics API (stats endpoints) | BE | 2 |
| CSAT collection (post-conversation) | BE | 2 |
| Multi-tenant admin | BE | 2 |
| Dashboard — key metrics | FE | 3 |
| Dashboard — AI performance | FE | 2 |
| CSAT score display | FE | 1 |
| Tenant settings + Channel config | FE | 4 |
| Full regression Phase 1 | QC | 5 |
| Performance testing | QC | 2 |
| Bug fix buffer | BE+FE | 3 |
| UAT prep | PM | 3 |

> **Output:** MVP complete — Dashboard, CSAT, multi-tenant ready

---

## Phase 2 — Growth (10 tuần + 2w buffer)

**Timeline:** Tuần 15-26 | **Target:** End Sep 2026

### Sprint 6-7 (Tuần 15-18): Facebook + Email + Skill Routing

| Task | Owner | Days |
|------|-------|------|
| Facebook Messenger adapter | BE | 5 |
| Email channel (SendGrid Inbound) | BE | 4 |
| Email template system | BE | 3 |
| Skill-based routing | BE | 4 |
| Facebook UI in Inbox | FE | 2 |
| Email thread view | FE | 3 |
| Agent skill config | FE | 2 |
| Automation rules builder (basic) | FE | 4 |
| Test Facebook E2E | QC | 3 |
| Test Email E2E | QC | 3 |
| Test skill routing | QC | 2 |

### Sprint 8-9 (Tuần 19-22): AI Copilot + SLA + Automation

| Task | Owner | Days |
|------|-------|------|
| AI Copilot (draft response) | BE | 4 |
| AI Summarization | BE | 2 |
| AI Sentiment analysis | BE | 2 |
| SLA tracking module | BE | 4 |
| Automation engine | BE | 4 |
| Semantic search (embeddings) | BE | 3 |
| Copilot UI (suggested reply panel) | FE | 3 |
| SLA dashboard + alerts | FE | 3 |
| Automation builder (advanced) | FE | 3 |
| Advanced analytics | FE | 4 |
| Test AI Copilot | QC | 4 |
| Test SLA + automation | QC | 5 |

### Sprint 10 (Tuần 23-24): Polish + Performance + Security

| Task | Owner | Days |
|------|-------|------|
| Performance optimization | BE | 3 |
| Rate limiting per tenant | BE | 2 |
| Bug fixes + tech debt | BE+FE | 4 |
| UI polish + responsive | FE | 3 |
| Mobile responsive Inbox | FE | 3 |
| Full regression Phase 1+2 | QC | 5 |
| Load testing | QC | 2 |
| Security audit (OWASP) | QC+BE | 3 |

---

## Phase 3 — Scale (8 tuần + 2w buffer)

**Timeline:** Tuần 27-36 | **Target:** End Dec 2026

### Sprint 11-12 (Tuần 27-30): Billing + Public API

| Task | Owner | Days |
|------|-------|------|
| Billing integration (Stripe/SePay) | BE | 5 |
| Public REST API + API key management | BE | 5 |
| Webhook system (tenant-configured) | BE | 3 |
| White-label support | BE+FE | 4 |
| API documentation portal | FE | 3 |
| Billing/subscription UI | FE | 3 |
| Webhook config UI | FE | 2 |
| Test billing flows | QC | 3 |
| Test public API | QC | 3 |

### Sprint 13-14 (Tuần 31-34): Elasticsearch + K8s + Launch

| Task | Owner | Days |
|------|-------|------|
| Elasticsearch migration | BE | 4 |
| Microservices readiness prep | BE | 4 |
| Kubernetes config | BE | 3 |
| Customer self-service portal | FE | 5 |
| Monitoring (Grafana) | BE | 2 |
| Final regression + pen testing | QC | 5 |
| Production deployment | BE+PM | 3 |
| Launch checklist + docs | PM | 3 |

---

## Effort Summary (Man-days)

### By Phase

| Phase | PM | BE | FE | QC | Total |
|-------|----|----|----|----|-------|
| Phase 0 — Setup | 10 | 10 | 8 | 6 | **34** |
| Phase 1 — MVP | 25 | 45 | 42 | 38 | **150** |
| Phase 2 — Growth | 20 | 44 | 40 | 35 | **139** |
| Phase 3 — Scale | 15 | 32 | 28 | 22 | **97** |
| **TOTAL** | **70** | **131** | **118** | **101** | **420** |

### Effort Distribution

\`\`\`mermaid
pie title Effort by Role (Man-days)
    "PM — 70d" : 70
    "BE — 131d" : 131
    "FE — 118d" : 118
    "QC — 101d" : 101
\`\`\`

### By Module (BE Breakdown)

\`\`\`mermaid
pie title BE Effort by Module
    "Auth & Tenant" : 12
    "Conversation Engine" : 15
    "Channel Adapters" : 22
    "AI Service" : 20
    "Knowledge Base" : 8
    "Routing & Ticket" : 14
    "Analytics & Dashboard" : 10
    "Notification" : 6
    "Infrastructure" : 12
    "Billing & API" : 12
\`\`\`

---

## Key Milestones

| # | Milestone | Target | Deliverable |
|---|-----------|--------|-------------|
| M0 | Project Kickoff | Mid Mar 2026 | Team assembled, tools ready |
| M1 | Foundation Complete | End Mar 2026 | Boilerplate, CI/CD, design system |
| M2 | Core Chat Working | Mid Apr 2026 | Inbox + WebSocket + conversation |
| M3 | First Channel Live | End Apr 2026 | LINE or Widget in Inbox |
| M4 | AI Chatbot Demo | Mid May 2026 | AI auto-reply, confidence meter |
| **M5** | **MVP Release** | **Mid Jun 2026** | **Phase 1 complete, beta users** |
| M6 | Growth Features | End Sep 2026 | AI Copilot, 4 channels, SLA |
| **M7** | **Platform Launch** | **End Dec 2026** | **Public API, billing, marketplace** |

---

## Risk Register

| # | Risk | Prob. | Impact | Mitigation |
|---|------|-------|--------|------------|
| R1 | BE burnout (workload heaviest) | High | Critical | API-first, mock API cho FE. Xem xet them 1 BE intern tu Phase 2 |
| R2 | Channel API approval delay (LINE/Zalo) | Medium | High | Submit tuan 1, code voi mock trong khi cho |
| R3 | AI keigo quality thap | Medium | High | Spike som, native Japanese reviewer |
| R4 | QC bottleneck o regression | High | Medium | Automation tu Sprint 1 cho critical paths |
| R5 | 1 nguoi nghi = block team | Medium | High | Cross-training, documentation, pair sessions |
| R6 | Scope creep | Medium | Medium | PM kiem soat backlog, "nice-to-have" chuyen Phase sau |
| R7 | External API breaking changes | Low | Medium | Adapter pattern isolation, version pinning |

---

## Sprint Velocity Tracking

> Template cho PM theo doi velocity moi sprint

| Sprint | Planned | Completed | Velocity | Notes |
|--------|---------|-----------|----------|-------|
| Sprint 0 (Setup) | — | — | — | Foundation |
| Sprint 1 | | | | |
| Sprint 2 | | | | |
| Sprint 3 | | | | |
| Sprint 4 | | | | |
| Sprint 5 | | | | |
| Sprint 6-7 | | | | |
| Sprint 8-9 | | | | |
| Sprint 10 | | | | |
| Sprint 11-12 | | | | |
| Sprint 13-14 | | | | |

---

## Summary

| Metric | Value |
|--------|-------|
| **Team size** | 4 (1 PM, 1 BE, 1 FE, 1 QC) |
| **Total effort** | 420 man-days |
| **Calendar duration** | ~36 tuan + buffer = **~40 tuan (~10 thang)** |
| **MVP ready** | Mid Jun 2026 |
| **Full platform** | End Dec 2026 |
| **Sprints** | 14 sprints + 1 setup |
| **Heaviest role** | BE (131 man-days / 31%) |

---

*Document: Dora Platform Estimation*
*Version: 1.0.0 | Date: 2026-03-13*
*Generated from brainstorming session using Mind Mapping, Reverse Brainstorming & SWOT Analysis*
`
};
