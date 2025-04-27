renderElementToPage()

// 监听 SPA 网页的变化，使用监听元素的方式最合适。
const observer = new MutationObserver(() => {
	console.log('DOM ID "juejin" 发生变化');
	renderElementToPage()
});
observer.observe(window.juejin, { childList: true });

function renderElementToPage() {
    if (!/https:\/\/juejin.cn\/creator\/home.*/.test(window.location.href)) {
        return
    }

	if (window.linhiengElement) {
		return
	}


    const eleTopUl = document.querySelector(".nav-list .right-side-nav");

    const eleGotoPin = document.createElement("li");
	eleGotoPin.id = "linhiengElement"
    eleGotoPin.classList.add("nav-item", "linhieng");
    eleGotoPin.innerHTML = ` <a target="_blank" href="https://juejin.cn/pins">发沸点</a> `;

    const eleGotoCode = document.createElement("li");
    eleGotoCode.classList.add("nav-item", "linhieng");
    eleGotoCode.innerHTML = ` <a target="_blank" href="https://code.juejin.cn/">写代码</a> `;

    const eleGotoDraft = document.createElement("li");
    eleGotoDraft.classList.add("nav-item", "linhieng");
    eleGotoDraft.innerHTML = ` <a target="_blank" href="https://juejin.cn/editor/drafts/7269743983189786660">文章草稿</a> `;

    try {
        // 首次执行时，eleTopUI 没有子元素，会报错 HierarchyRequestError。
        // 这就算了，问题是报错后掘金直接不渲染了。
        // 还不行，由于修改了网页结构，导致掘金自己的代码也出现了 HierarchyRequestError 报错。
        // TODO
        // eleTopUl.prepend(eleGotoDraft, eleGotoCode, eleGotoPin);
    } catch (error) { }
}

const times = setInterval(() => {
    closeBannerAd()
}, 100)
setTimeout(() => {
    clearTimeout(times)
    console.log('10秒后无论如何都关闭广告');
}, 1000 * 10);
function closeBannerAd() {
    const btn1 = document.querySelector('.top-banners-container .slide-logo img')
    btn1 && btn1.click()
    const btn2 = document.querySelector('.top-banners-container  img.global-banner-close')
    btn2 && btn2.click()
    if (btn1 && btn2) {
        clearTimeout(times)
        console.log('关闭广告成功');
    } else {
        console.log('检测不到');
    }
}
