const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const pptx = new pptxgen();

// ---- Brand colors ----
const BLUE = "1a56db";
const BLUE_DARK = "1e3a5f";
const BLUE_LIGHT = "e8f0fe";
const ORANGE = "f97316";
const RED = "dc2626";
const RED_BG = "fef2f2";
const GRAY = "6b7280";
const DARK = "111827";
const WHITE = "ffffff";
const GREEN = "16a34a";

// ---- Defaults ----
pptx.author = "Diso";
pptx.company = "Diso";
pptx.title = "Diso Commerce Suite - Pitch Deck";
pptx.subject = "Pitch Deck";
pptx.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 inches

function addFooter(slide, slideNum) {
  slide.addText(`Diso Commerce Suite`, {
    x: 0.4, y: 6.9, w: 4, h: 0.4,
    fontSize: 8, color: "aaaaaa", fontFace: "Arial",
  });
  slide.addText(`${slideNum} / 14`, {
    x: 9, y: 6.9, w: 4, h: 0.4,
    fontSize: 8, color: "aaaaaa", fontFace: "Arial", align: "right",
  });
}

// ==================== SLIDE 1: COVER ====================
{
  const slide = pptx.addSlide();
  slide.background = { fill: BLUE_DARK };

  slide.addText("GIẢI PHÁP KINH DOANH ONLINE TRỌN BỘ", {
    x: 0.5, y: 1.2, w: 12.3, h: 0.5,
    fontSize: 14, color: "8ab4f8", fontFace: "Arial",
    charSpacing: 6, align: "center",
  });

  slide.addText("Diso Commerce Suite", {
    x: 0.5, y: 1.9, w: 12.3, h: 1.2,
    fontSize: 48, bold: true, color: WHITE, fontFace: "Arial",
    align: "center",
  });

  slide.addText("Từ website bán hàng\nđến đội ngũ bán hàng nghìn người", {
    x: 2, y: 3.3, w: 9.3, h: 1,
    fontSize: 20, color: "c0d8f8", fontFace: "Arial",
    align: "center", lineSpacingMultiple: 1.4,
  });

  const flowItems = ["Website TMĐT", "Affiliate", "Vận hành", "Reseller", "Đại sứ"];
  const startX = 2.2;
  flowItems.forEach((item, i) => {
    const x = startX + i * 2;
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 5, w: 1.6, h: 0.5,
      fill: { color: WHITE, transparency: 85 },
      rectRadius: 0.15,
    });
    slide.addText(item, {
      x, y: 5, w: 1.6, h: 0.5,
      fontSize: 11, color: "c0d8f8", fontFace: "Arial", align: "center",
    });
    if (i < flowItems.length - 1) {
      slide.addText("→", {
        x: x + 1.6, y: 5, w: 0.4, h: 0.5,
        fontSize: 14, color: "6b9fd8", fontFace: "Arial", align: "center",
      });
    }
  });
}

// ==================== SLIDE 2: VẤN ĐỀ ====================
{
  const slide = pptx.addSlide();
  slide.addText("Kinh doanh online nghe dễ — làm thì khó", {
    x: 0.5, y: 0.3, w: 12.3, h: 0.8,
    fontSize: 28, bold: true, color: BLUE_DARK, fontFace: "Arial",
  });

  const pains = [
    { icon: "🏗️", title: `"Muốn bán online nhưng không biết bắt đầu từ đâu"`, desc: "Thuê dev làm website tốn 500 triệu – 2 tỷ, mất 6-12 tháng. Lên sàn thì phí 3-15% mỗi đơn, data khách không thuộc về mình." },
    { icon: "📉", title: `"Có website rồi nhưng không ai vào mua"`, desc: "Chi phí quảng cáo Facebook/Google ngày càng đắt. Chạy ads xong thì hết tiền, hết khách." },
    { icon: "📊", title: `"Đơn hàng nhiều lên, quản lý bằng Excel vỡ trận"`, desc: "Đối soát vận chuyển sai, tính hoa hồng nhầm, kế toán khóc. 100 đơn/ngày là bắt đầu rối." },
    { icon: "🚀", title: `"Muốn mở rộng nhưng không có cách"`, desc: "Tuyển sales tốn lương cứng. Mở đại lý thì không kiểm soát được. Affiliate thì không biết build hệ thống." },
  ];

  pains.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 6.2;
    const y = 1.4 + row * 2.7;

    slide.addShape(pptx.ShapeType.roundRect, {
      x, y, w: 5.9, h: 2.4,
      fill: { color: RED_BG },
      rectRadius: 0.1,
      line: { color: RED, width: 0, dashType: "solid" },
    });
    // Left border accent
    slide.addShape(pptx.ShapeType.rect, {
      x, y, w: 0.06, h: 2.4,
      fill: { color: RED },
    });

    slide.addText(p.title, {
      x: x + 0.25, y: y + 0.2, w: 5.4, h: 0.7,
      fontSize: 14, bold: true, color: RED, fontFace: "Arial",
      valign: "top",
    });
    slide.addText(p.desc, {
      x: x + 0.25, y: y + 1, w: 5.4, h: 1.2,
      fontSize: 12, color: "555555", fontFace: "Arial",
      valign: "top", lineSpacingMultiple: 1.3,
    });
  });

  addFooter(slide, 2);
}

// ==================== SLIDE 3: THỊ TRƯỜNG ====================
{
  const slide = pptx.addSlide();
  slide.addText("Thị trường e-commerce & affiliate Việt Nam", {
    x: 0.5, y: 0.3, w: 12.3, h: 0.8,
    fontSize: 28, bold: true, color: BLUE_DARK, fontFace: "Arial",
  });

  const stats = [
    { num: "~28 tỷ USD", label: "Thị trường TMĐT VN (2025)\nTăng trưởng ~20%/năm" },
    { num: "920.000+", label: "SMEs tại Việt Nam\n98% tổng doanh nghiệp" },
    { num: "~1 tỷ USD", label: "Affiliate marketing VN\nTăng 30x so với 2022" },
    { num: "300.000+", label: "KOL, KOC, affiliate\nđang bán hàng online" },
    { num: "5 tỷ USD", label: "Social commerce 2025\n→ 10 tỷ USD vào 2030" },
    { num: "97% GMV", label: "Tập trung Shopee + TikTok\nDN phụ thuộc nặng vào sàn" },
  ];

  stats.forEach((s, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 4.1;
    const y = 1.4 + row * 2.4;

    slide.addShape(pptx.ShapeType.roundRect, {
      x, y, w: 3.8, h: 2, fill: { color: BLUE_LIGHT }, rectRadius: 0.12,
    });
    slide.addText(s.num, {
      x, y: y + 0.2, w: 3.8, h: 0.7,
      fontSize: 24, bold: true, color: BLUE, fontFace: "Arial", align: "center",
    });
    slide.addText(s.label, {
      x, y: y + 1, w: 3.8, h: 0.8,
      fontSize: 10, color: GRAY, fontFace: "Arial", align: "center", lineSpacingMultiple: 1.3,
    });
  });

  // Key message
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 6.3, w: 12.3, h: 0.6, fill: { color: BLUE_LIGHT }, rectRadius: 0.08,
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 6.3, w: 0.06, h: 0.6, fill: { color: BLUE },
  });
  slide.addText("Doanh nghiệp cần giải pháp trọn bộ — không phải ghép 10 công cụ rời rạc lại với nhau", {
    x: 0.8, y: 6.3, w: 11.8, h: 0.6,
    fontSize: 13, color: BLUE_DARK, fontFace: "Arial", valign: "middle",
  });

  addFooter(slide, 3);
}

// ==================== SLIDE 4: GIẢI PHÁP TỔNG QUAN ====================
{
  const slide = pptx.addSlide();
  slide.addText("Diso Commerce Suite — 1 nền tảng, 5 giải pháp", {
    x: 0.5, y: 0.3, w: 12.3, h: 0.8,
    fontSize: 28, bold: true, color: BLUE_DARK, fontFace: "Arial",
  });

  const pillars = [
    { icon: "🌐", title: "WEBSITE\nTMĐT", sub: "Có chỗ bán hàng" },
    { icon: "🔗", title: "AFFILIATE\nMARKETING", sub: "Có khách mua hàng" },
    { icon: "⚙️", title: "VẬN HÀNH\nBACKEND", sub: "Chạy trơn tru" },
    { icon: "🏪", title: "RESELLER\nNETWORK", sub: "Mở rộng kênh bán" },
    { icon: "⭐", title: "ĐẠI SỨ\nTHƯƠNG HIỆU", sub: "Xây thương hiệu" },
  ];

  pillars.forEach((p, i) => {
    const x = 0.5 + i * 2.5;
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 2, w: 2.2, h: 2.8,
      fill: { color: BLUE },
      rectRadius: 0.15,
    });
    slide.addText(p.title, {
      x, y: 2.3, w: 2.2, h: 1,
      fontSize: 12, bold: true, color: WHITE, fontFace: "Arial", align: "center",
      lineSpacingMultiple: 1.2,
    });
    slide.addText(p.sub, {
      x, y: 3.5, w: 2.2, h: 0.6,
      fontSize: 11, color: "c0d8f8", fontFace: "Arial", align: "center",
    });

    if (i < pillars.length - 1) {
      slide.addText("→", {
        x: x + 2.2, y: 2.8, w: 0.3, h: 0.6,
        fontSize: 18, color: BLUE, fontFace: "Arial", align: "center",
      });
    }
  });

  // Key message
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 5.5, w: 12.3, h: 0.6, fill: { color: BLUE_LIGHT }, rectRadius: 0.08,
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 5.5, w: 0.06, h: 0.6, fill: { color: BLUE },
  });
  slide.addText("Mua từng phần hoặc trọn bộ — bắt đầu từ đâu cũng được, mở rộng bất cứ lúc nào", {
    x: 0.8, y: 5.5, w: 11.8, h: 0.6,
    fontSize: 13, color: BLUE_DARK, fontFace: "Arial", valign: "middle",
  });

  addFooter(slide, 4);
}

// ---- Helper: Pillar slide with 6 feature cards ----
function addPillarSlide(slideNum, pillarNum, title, features, keyMsg) {
  const slide = pptx.addSlide();

  // Pillar badge
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 1.4, h: 0.35, fill: { color: BLUE }, rectRadius: 0.15,
  });
  slide.addText(`TRỤ CỘT ${pillarNum}`, {
    x: 0.5, y: 0.3, w: 1.4, h: 0.35,
    fontSize: 10, bold: true, color: WHITE, fontFace: "Arial", align: "center",
  });

  slide.addText(title, {
    x: 2.1, y: 0.2, w: 10.5, h: 0.6,
    fontSize: 24, bold: true, color: BLUE_DARK, fontFace: "Arial",
  });

  features.forEach((f, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 4.1;
    const y = 1.2 + row * 2.2;

    slide.addShape(pptx.ShapeType.roundRect, {
      x, y, w: 3.8, h: 1.9, fill: { color: BLUE_LIGHT }, rectRadius: 0.1,
    });
    slide.addText(f.title, {
      x: x + 0.2, y: y + 0.15, w: 3.4, h: 0.5,
      fontSize: 13, bold: true, color: BLUE_DARK, fontFace: "Arial", valign: "top",
    });
    slide.addText(f.desc, {
      x: x + 0.2, y: y + 0.7, w: 3.4, h: 1,
      fontSize: 11, color: GRAY, fontFace: "Arial", valign: "top", lineSpacingMultiple: 1.3,
    });
  });

  // Key message
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 5.8, w: 12.3, h: 0.7, fill: { color: BLUE_LIGHT }, rectRadius: 0.08,
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 5.8, w: 0.06, h: 0.7, fill: { color: BLUE },
  });
  slide.addText(keyMsg, {
    x: 0.8, y: 5.8, w: 11.8, h: 0.7,
    fontSize: 12, color: BLUE_DARK, fontFace: "Arial", valign: "middle",
    lineSpacingMultiple: 1.3,
  });

  addFooter(slide, slideNum);
}

// ==================== SLIDE 5: WEBSITE ====================
addPillarSlide(5, 1, "Website bán hàng chuyên nghiệp — không cần biết code", [
  { title: "📦 Quản lý sản phẩm", desc: "SKU, giá, biến thể, ảnh sản phẩm" },
  { title: "🛒 Giỏ hàng & Thanh toán", desc: "Mua hàng mượt mà, hỗ trợ COD & online" },
  { title: "🏷️ Mã giảm giá & Flash Sale", desc: "Tạo promotion tăng chuyển đổi" },
  { title: "🎨 Website thương hiệu riêng", desc: "Domain riêng, logo riêng, giao diện tùy chỉnh" },
  { title: "📱 Tối ưu Mobile", desc: "60%+ giao dịch TMĐT diễn ra trên điện thoại" },
  { title: "🔍 Chuẩn SEO", desc: "Khách tìm thấy bạn trên Google" },
], 'Triển khai trong 2 tuần. Website 100% thương hiệu của bạn — không phải "gian hàng trên sàn"');

// ==================== SLIDE 6: AFFILIATE ====================
addPillarSlide(6, 2, "Kéo khách về website — không tốn tiền quảng cáo", [
  { title: "🔗 Link Tracking", desc: "Biết chính xác ai mang khách về, bao nhiêu click, bao nhiêu đơn" },
  { title: "💰 Hoa hồng linh hoạt", desc: "Theo sản phẩm, theo tier, theo campaign" },
  { title: "📊 Dashboard cho Affiliate", desc: "Tự theo dõi hiệu quả, thu nhập" },
  { title: "🎯 Promotion Tools", desc: "Banner, link, mã giảm giá riêng cho từng affiliate" },
  { title: "👥 Phân nhóm & Targeting", desc: "Gửi đúng campaign cho đúng affiliate" },
  { title: "🛡️ Chống gian lận", desc: "Tự động phát hiện click/đơn ảo" },
], "Biến blogger, KOL, và bất kỳ ai có mạng xã hội thành kênh bán hàng. Chỉ trả tiền khi có đơn.");

// ==================== SLIDE 7: BACKEND VẬN HÀNH ====================
{
  const slide = pptx.addSlide();

  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 1.4, h: 0.35, fill: { color: BLUE }, rectRadius: 0.15,
  });
  slide.addText("TRỤ CỘT 3", {
    x: 0.5, y: 0.3, w: 1.4, h: 0.35,
    fontSize: 10, bold: true, color: WHITE, fontFace: "Arial", align: "center",
  });
  slide.addText("Từ đơn hàng đến giao hàng — tự động hóa toàn bộ", {
    x: 2.1, y: 0.2, w: 10.5, h: 0.6,
    fontSize: 24, bold: true, color: BLUE_DARK, fontFace: "Arial",
  });

  // Left column
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 1.2, w: 5.9, h: 4.2, fill: { color: BLUE_LIGHT }, rectRadius: 0.1,
  });
  slide.addText("📦 Quản lý đơn hàng & Logistics", {
    x: 0.8, y: 1.4, w: 5.4, h: 0.5,
    fontSize: 14, bold: true, color: BLUE, fontFace: "Arial",
  });
  slide.addText(
    "• Quản lý đơn tập trung — 1 nơi xem tất cả\n• Tích hợp GHN, GHTK, Viettel Post, J&T — tạo vận đơn 1 click\n• Quản lý tồn kho — cảnh báo hết hàng tự động\n• Đổi trả hàng — quy trình chuyên nghiệp",
    { x: 0.8, y: 2, w: 5.4, h: 3, fontSize: 12, color: "444444", fontFace: "Arial", lineSpacingMultiple: 1.5, valign: "top" }
  );

  // Right column
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 6.9, y: 1.2, w: 5.9, h: 4.2, fill: { color: BLUE_LIGHT }, rectRadius: 0.1,
  });
  slide.addText("💼 Tài chính & Quản trị", {
    x: 7.2, y: 1.4, w: 5.4, h: 0.5,
    fontSize: 14, bold: true, color: BLUE, fontFace: "Arial",
  });
  slide.addText(
    "• Đối soát tự động 4 loại: đơn hàng, affiliate, reseller, đại sứ\n• Chi trả hoa hồng tự động, tính thuế\n• CRM khách hàng — chăm sóc, tái mua\n• Analytics real-time & Admin portal phân quyền",
    { x: 7.2, y: 2, w: 5.4, h: 3, fontSize: 12, color: "444444", fontFace: "Arial", lineSpacingMultiple: 1.5, valign: "top" }
  );

  // Key message
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 5.8, w: 12.3, h: 0.6, fill: { color: BLUE_LIGHT }, rectRadius: 0.08,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.8, w: 0.06, h: 0.6, fill: { color: BLUE } });
  slide.addText("Vận hành như doanh nghiệp lớn — chi phí doanh nghiệp nhỏ", {
    x: 0.8, y: 5.8, w: 11.8, h: 0.6,
    fontSize: 13, color: BLUE_DARK, fontFace: "Arial", valign: "middle",
  });

  addFooter(slide, 7);
}

// ==================== SLIDE 8: RESELLER ====================
addPillarSlide(8, 4, "1.000 người bán hàng cho bạn — bạn chỉ cần quản lý", [
  { title: "🏪 Reseller Storefront", desc: 'Mỗi reseller có "shop" riêng trên platform' },
  { title: "👥 Quản lý đội ngũ", desc: "Duyệt, theo dõi, đánh giá reseller" },
  { title: "💎 Hoa hồng đa cấp", desc: "Thưởng theo doanh số, incentive linh hoạt" },
  { title: "🔗 Mã giới thiệu", desc: "Đội ngũ tự phát triển qua referral" },
  { title: "📊 Dashboard cho Reseller", desc: "Tự xem đơn, thu nhập, minh bạch" },
  { title: "🎮 Gamification", desc: "Bảng xếp hạng, nhiệm vụ, đổi quà" },
], "Không tốn lương cứng. Reseller bán được thì bạn mới trả hoa hồng. Scale không giới hạn.");

// ==================== SLIDE 9: ĐẠI SỨ THƯƠNG HIỆU ====================
addPillarSlide(9, 5, "Content marketing hiệu quả — đo lường được từng đồng", [
  { title: "📝 Campaign content", desc: "Tạo chiến dịch theo brief, điều kiện tham gia" },
  { title: "🌐 7 mạng xã hội", desc: "TikTok, YouTube, Facebook, Instagram, Threads, Shopee, Google" },
  { title: "✅ Duyệt nội dung", desc: "Kiểm tra chất lượng, hashtag, batch approve/reject" },
  { title: "📈 Analytics chi tiết", desc: "Views, likes, comments, engagement rate hàng ngày" },
  { title: "🛡️ Chống gian lận", desc: "Phát hiện fake views, fake followers tự động" },
  { title: "🏆 Thưởng theo hiệu quả", desc: "3 loại: theo thống kê, milestone, views" },
], "Đại sứ tạo content → Brand nhận diện → Khách tin tưởng → Doanh thu tăng.\nVòng lặp tăng trưởng bền vững.");

// ==================== SLIDE 10: SOCIAL PROOF ====================
{
  const slide = pptx.addSlide();
  slide.addText("Được tin dùng bởi các thương hiệu hàng đầu", {
    x: 0.5, y: 0.3, w: 12.3, h: 0.8,
    fontSize: 28, bold: true, color: BLUE_DARK, fontFace: "Arial",
  });

  slide.addText("Ngân hàng & Fintech", {
    x: 0.5, y: 1.3, w: 12.3, h: 0.4,
    fontSize: 12, color: GRAY, fontFace: "Arial", align: "center",
  });

  const row1 = ["TPBank", "HDBank", "VPBank", "MBBank", "VNPay"];
  row1.forEach((name, i) => {
    const x = 1.4 + i * 2.2;
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 1.8, w: 1.9, h: 0.7, fill: { color: "f3f4f6" }, rectRadius: 0.1,
    });
    slide.addText(name, {
      x, y: 1.8, w: 1.9, h: 0.7,
      fontSize: 13, bold: true, color: BLUE_DARK, fontFace: "Arial", align: "center",
    });
  });

  slide.addText("Brand & Entertainment", {
    x: 0.5, y: 2.9, w: 12.3, h: 0.4,
    fontSize: 12, color: GRAY, fontFace: "Arial", align: "center",
  });

  const row2 = ["VNG", "Yody", "Anker", "Flamingo", "Turborg", "Wild Rift"];
  row2.forEach((name, i) => {
    const x = 0.9 + i * 1.95;
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 3.4, w: 1.7, h: 0.7, fill: { color: "f3f4f6" }, rectRadius: 0.1,
    });
    slide.addText(name, {
      x, y: 3.4, w: 1.7, h: 0.7,
      fontSize: 13, bold: true, color: BLUE_DARK, fontFace: "Arial", align: "center",
    });
  });

  slide.addText("11+ thương hiệu  ·  6 ngành  ·  7 nền tảng social", {
    x: 0.5, y: 4.8, w: 12.3, h: 0.6,
    fontSize: 18, bold: true, color: BLUE_DARK, fontFace: "Arial", align: "center",
  });

  addFooter(slide, 10);
}

// ==================== SLIDE 11: CASE STUDIES ====================
{
  const slide = pptx.addSlide();
  slide.addText("Mô hình này đã được chứng minh", {
    x: 0.5, y: 0.3, w: 12.3, h: 0.8,
    fontSize: 28, bold: true, color: BLUE_DARK, fontFace: "Arial",
  });

  const cases = [
    {
      flag: "🇻🇳 Việt Nam", title: "Coolmate — D2C Thời trang nam",
      lines: ["Bán chủ yếu qua website riêng", "Doanh thu: 139 tỷ VND, tăng 3.5x", "Sở hữu toàn bộ data khách hàng"],
      highlight: "139 tỷ VND",
    },
    {
      flag: "🇬🇧 Quốc tế", title: "Gymshark — Từ $500K đến £1 tỷ+",
      lines: ["100% D2C qua website riêng", "Ambassador Instagram → ROI 6.6x", "Startup → unicorn nhờ own-platform"],
      highlight: "ROI 6.6x",
    },
    {
      flag: "🇮🇳 Ấn Độ", title: "Meesho — Nền tảng Reseller",
      lines: ["187 triệu người dùng", "IPO valuation: $600 triệu", "Reseller network scale cực lớn"],
      highlight: "$600M",
    },
  ];

  cases.forEach((c, i) => {
    const x = 0.5 + i * 4.2;
    // Card bg
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 1.3, w: 3.9, h: 4.2,
      fill: { color: WHITE },
      line: { color: "e5e7eb", width: 1 },
      rectRadius: 0.12,
      shadow: { type: "outer", blur: 4, offset: 2, color: "000000", opacity: 0.08 },
    });
    // Flag badge
    slide.addShape(pptx.ShapeType.roundRect, {
      x: x + 0.2, y: 1.5, w: 1.5, h: 0.35, fill: { color: BLUE_LIGHT }, rectRadius: 0.12,
    });
    slide.addText(c.flag, {
      x: x + 0.2, y: 1.5, w: 1.5, h: 0.35,
      fontSize: 9, bold: true, color: BLUE, fontFace: "Arial", align: "center",
    });
    // Title
    slide.addText(c.title, {
      x: x + 0.2, y: 2, w: 3.5, h: 0.6,
      fontSize: 14, bold: true, color: BLUE_DARK, fontFace: "Arial", valign: "top",
    });
    // Lines
    slide.addText(c.lines.join("\n"), {
      x: x + 0.2, y: 2.7, w: 3.5, h: 2.2,
      fontSize: 11, color: GRAY, fontFace: "Arial", valign: "top", lineSpacingMultiple: 1.6,
    });
  });

  // Key message
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 5.8, w: 12.3, h: 0.7, fill: { color: BLUE_LIGHT }, rectRadius: 0.08,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.8, w: 0.06, h: 0.7, fill: { color: BLUE } });
  slide.addText("Own-platform + đội quân bán hàng = công thức tỷ đô. Diso giúp bạn áp dụng — ngay tại Việt Nam.", {
    x: 0.8, y: 5.8, w: 11.8, h: 0.7,
    fontSize: 13, color: BLUE_DARK, fontFace: "Arial", valign: "middle",
  });

  addFooter(slide, 11);
}

// ==================== SLIDE 12: TẦM NHÌN 3 NĂM ====================
{
  const slide = pptx.addSlide();
  slide.addText("Build xong, bạn được gì?", {
    x: 0.5, y: 0.3, w: 12.3, h: 0.8,
    fontSize: 28, bold: true, color: BLUE_DARK, fontFace: "Arial",
  });

  const phases = [
    { period: "Tháng 1-3", title: "Xây nền móng", desc: "Website riêng + thanh toán + vận chuyển tự động", result: "→ Đơn hàng đầu tiên trên kênh riêng", bg: "e8f0fe" },
    { period: "Tháng 3-6", title: "Kích hoạt đội quân", desc: "50-100 affiliate + 20-50 reseller có storefront riêng", result: "→ Chi phí/đơn giảm 40-60%", bg: "dbeafe" },
    { period: "Tháng 6-12", title: "Vòng lặp tăng trưởng", desc: "200-500 affiliate + reseller. CRM 10.000+ khách", result: "→ Kênh riêng = 30-50% doanh thu", bg: "bfdbfe" },
    { period: "Năm 2-3", title: "Nền tảng vững chắc", desc: "1.000+ người bán. Database 50K-100K+ khách hàng", result: "→ Kênh riêng 50-70% DT. Margin +15-30%", bg: BLUE },
  ];

  phases.forEach((p, i) => {
    const x = 0.5 + i * 3.15;
    const isDark = i === 3;
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 1.4, w: 2.9, h: 4,
      fill: { color: p.bg },
      rectRadius: 0.12,
    });
    slide.addText(p.period, {
      x, y: 1.6, w: 2.9, h: 0.4,
      fontSize: 12, bold: true, color: isDark ? WHITE : BLUE_DARK, fontFace: "Arial", align: "center",
    });
    slide.addText(p.title, {
      x: x + 0.15, y: 2.1, w: 2.6, h: 0.5,
      fontSize: 13, bold: true, color: isDark ? WHITE : BLUE_DARK, fontFace: "Arial",
    });
    slide.addText(p.desc, {
      x: x + 0.15, y: 2.7, w: 2.6, h: 1.2,
      fontSize: 11, color: isDark ? "c0d8f8" : GRAY, fontFace: "Arial", valign: "top", lineSpacingMultiple: 1.4,
    });
    slide.addText(p.result, {
      x: x + 0.15, y: 4.2, w: 2.6, h: 0.5,
      fontSize: 11, bold: true, color: isDark ? WHITE : BLUE_DARK, fontFace: "Arial",
    });
  });

  // Key message
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 5.8, w: 12.3, h: 0.7, fill: { color: BLUE_LIGHT }, rectRadius: 0.08,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.8, w: 0.06, h: 0.7, fill: { color: BLUE } });
  slide.addText("Đó không phải phần mềm. Đó là tài sản.", {
    x: 0.8, y: 5.8, w: 11.8, h: 0.7,
    fontSize: 16, bold: true, color: BLUE_DARK, fontFace: "Arial", valign: "middle",
  });

  addFooter(slide, 12);
}

// ==================== SLIDE 13: TẠI SAO CHỌN DISO ====================
{
  const slide = pptx.addSlide();
  slide.addText("Tại sao Diso Commerce Suite?", {
    x: 0.5, y: 0.3, w: 12.3, h: 0.8,
    fontSize: 28, bold: true, color: BLUE_DARK, fontFace: "Arial",
  });

  const headers = ["", "Tự Build", "Bán trên Sàn", "Diso Commerce Suite ✓"];
  const rows = [
    ["Chi phí", "1-2 tỷ VND", '"Miễn phí" + 3-15%/đơn', "Phí SaaS hàng tháng"],
    ["Thời gian", "6-12 tháng", "Ngay", "2-4 tuần"],
    ["Thương hiệu", "Của bạn", "Của sàn", "Của bạn (white-label)"],
    ["Data khách hàng", "Của bạn", "Của sàn", "Của bạn"],
    ["Affiliate + Reseller", "Tự build thêm", "Không có", "Built-in"],
    ["Đối soát", "Tự build", "Sàn quyết định", "4 loại tự động"],
    ["Rủi ro", "Team nghỉ = dừng", "Sàn đổi policy = mất kênh", "Diso maintain & upgrade"],
  ];

  const tableRows = [
    headers.map((h, i) => ({
      text: h,
      options: {
        bold: true,
        fontSize: 11,
        color: WHITE,
        fill: { color: i === 3 ? BLUE : BLUE_DARK },
        align: i === 0 ? "left" : "center",
        valign: "middle",
      },
    })),
    ...rows.map((row) =>
      row.map((cell, i) => ({
        text: cell,
        options: {
          fontSize: 10,
          color: i === 3 ? BLUE : DARK,
          bold: i === 3 || i === 0,
          fill: { color: i === 3 ? "eef5ff" : WHITE },
          align: i === 0 ? "left" : "center",
          valign: "middle",
          border: [
            { type: "solid", pt: 0, color: WHITE },
            { type: "solid", pt: 0, color: WHITE },
            { type: "solid", pt: 0.5, color: "e5e7eb" },
            { type: "solid", pt: 0, color: WHITE },
          ],
        },
      }))
    ),
  ];

  slide.addTable(tableRows, {
    x: 0.5, y: 1.2, w: 12.3,
    colW: [2.2, 3.2, 3.5, 3.4],
    rowH: [0.5, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45],
    border: { type: "solid", pt: 0, color: WHITE },
  });

  // Key message
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 5.5, w: 12.3, h: 0.8, fill: { color: BLUE_LIGHT }, rectRadius: 0.08,
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.5, w: 0.06, h: 0.8, fill: { color: BLUE } });
  slide.addText("Bán trên sàn = xây nhà trên đất thuê.  Tự build = đắt và lâu.\nDiso = website riêng, data riêng, triển khai nhanh.", {
    x: 0.8, y: 5.5, w: 11.8, h: 0.8,
    fontSize: 13, bold: true, color: BLUE_DARK, fontFace: "Arial", valign: "middle", lineSpacingMultiple: 1.3,
  });

  addFooter(slide, 13);
}

// ==================== SLIDE 14: NEXT STEPS ====================
{
  const slide = pptx.addSlide();
  slide.background = { fill: BLUE_DARK };

  slide.addText("Bắt đầu chỉ với 3 bước", {
    x: 0.5, y: 0.4, w: 12.3, h: 0.8,
    fontSize: 32, bold: true, color: WHITE, fontFace: "Arial", align: "center",
  });

  const steps = [
    { num: "1", title: "Demo miễn phí", desc: "Xem trực tiếp platform hoạt động, hỏi đáp cùng team Diso. 30 phút." },
    { num: "2", title: "Pilot 1-2 tháng", desc: "Chạy thử với 1 chiến dịch thực tế, đánh giá hiệu quả." },
    { num: "3", title: "Go live", desc: "Triển khai chính thức, đội ngũ Diso hỗ trợ onboarding toàn bộ." },
  ];

  steps.forEach((s, i) => {
    const x = 1 + i * 4;
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 1.8, w: 3.5, h: 3,
      fill: { color: WHITE, transparency: 5 },
      rectRadius: 0.15,
    });
    // Number circle
    slide.addShape(pptx.ShapeType.ellipse, {
      x: x + 1.3, y: 2.1, w: 0.6, h: 0.6,
      fill: { color: BLUE },
    });
    slide.addText(s.num, {
      x: x + 1.3, y: 2.1, w: 0.6, h: 0.6,
      fontSize: 16, bold: true, color: WHITE, fontFace: "Arial", align: "center", valign: "middle",
    });
    slide.addText(s.title, {
      x: x + 0.2, y: 2.9, w: 3.1, h: 0.5,
      fontSize: 16, bold: true, color: BLUE_DARK, fontFace: "Arial", align: "center",
    });
    slide.addText(s.desc, {
      x: x + 0.3, y: 3.5, w: 2.9, h: 1,
      fontSize: 11, color: GRAY, fontFace: "Arial", align: "center", lineSpacingMultiple: 1.3,
    });
  });

  // CTA button
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 4, y: 5.3, w: 5.3, h: 0.8,
    fill: { color: ORANGE },
    rectRadius: 0.12,
    shadow: { type: "outer", blur: 8, offset: 3, color: ORANGE, opacity: 0.3 },
  });
  slide.addText("Đặt lịch demo ngay →", {
    x: 4, y: 5.3, w: 5.3, h: 0.8,
    fontSize: 20, bold: true, color: WHITE, fontFace: "Arial", align: "center", valign: "middle",
  });

  slide.addText("Không cam kết · Không phí · Chỉ cần 30 phút", {
    x: 0.5, y: 6.3, w: 12.3, h: 0.4,
    fontSize: 11, color: "8ab4f8", fontFace: "Arial", align: "center",
  });
}

// ---- Generate ----
const outPath = path.join(__dirname, "..", "statistic", "pitch-deck", "Diso-Commerce-Suite-Pitch-Deck.pptx");
pptx.writeFile({ fileName: outPath }).then(() => {
  console.log(`✅ PPTX generated: ${outPath}`);
}).catch(err => {
  console.error("Error:", err);
});
