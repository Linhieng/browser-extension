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

    eleTopUl.prepend(eleGotoDraft, eleGotoCode, eleGotoPin);
}
