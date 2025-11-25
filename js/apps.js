// 简单的搜索和筛选功能脚本
    
// 1. 搜索功能
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.app-card');

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    cards.forEach(card => {
        const name = card.querySelector('.app-name').innerText.toLowerCase();
        const desc = card.querySelector('.app-desc').innerText.toLowerCase();
        if (name.includes(value) || desc.includes(value)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});

// 2. 分类筛选功能
function filterApps(category, element) {
    // 更新按钮样式
    document.querySelectorAll('.tag').forEach(tag => tag.classList.remove('active'));
    element.classList.add('active');

    // 筛选卡片
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}


// 检查是否有adguard插件

const link = document.getElementById("app-wei");
    const modal = document.getElementById("adguardModal");
    const realUrl = link.getAttribute("href");  // 真实目标地址

    // 点击链接弹出提示框
    link.addEventListener("click", e => {
      e.preventDefault();
      modal.classList.add("show");
    });

    // 去安装 AdGuard（新标签页打开）
    document.querySelector(".btn-install").onclick = function () {
      window.open("https://adguard.com/zh_cn/adguard-browser-extension/overview.html", "_blank");
      // 如果你只想给 Edge 用户：
      // window.open("https://microsoftedge.microsoft.com/addons/detail/adguard-adblocker/pdffkfellgipmhklpdmokmckkkfcopbh", "_blank");
    };

    // 我已安装 → 在新窗口打开真实页面，当前页保持不动
    document.querySelector(".btn-continue").onclick = function () {
      modal.classList.remove("show");
      window.open(realUrl, "_blank");   // 关键：新标签页打开
    };

    // 可选：点击遮罩层关闭弹窗
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });

    // 可选：按 ESC 键快速关闭
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") modal.classList.remove("show");
    });