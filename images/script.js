// js/script.js
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = location.pathname.split('/').slice(-1)[0].replace('.html', '') || 'index';
    const map = {
        'index': 'home',
        'about': 'about',
        'projects': 'portfolio',
        'contact': 'contact'
    };
    const pageId = map[currentPage] || 'home';

    const activeLink = document.querySelector(`.nav-links a[href*="${currentPage}.html"], .nav-links a[href="./"]`);
    if (activeLink) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        activeLink.classList.add('active');
    }
});

// 点击复制文本
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    // 使用 class 获取元素（注意：getElementsByClassName 返回类数组）
    const toast = document.querySelector('.copy-toast'); // 推荐用 querySelector
    
    if (toast) {
      toast.style.opacity = '1';
      toast.style.visibility = 'visible';

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.visibility = 'hidden';
      }, 2000);
    }
  }).catch(err => {
    console.error('复制失败:', err);
  });
}
