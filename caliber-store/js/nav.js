document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // پیش‌نمایش تعویض تصویر گالری در صفحه‌ی محصول (صرفاً برای دمو طرح)
  document.querySelectorAll(".gallery-thumbs .t").forEach((t) => {
    t.addEventListener("click", () => {
      const mainImg = document.querySelector(".gallery-main img");
      const thumbImg = t.querySelector("img");
      if (mainImg && thumbImg) mainImg.src = thumbImg.src;
      document
        .querySelectorAll(".gallery-thumbs .t")
        .forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
    });
  });
});
