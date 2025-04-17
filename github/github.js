const divEl = document.createElement("div");
divEl.classList.add("my-div-el");
divEl.innerHTML = `
<details>
    <summary>展开</summary>
    <div class="my-content">
        <p> <span>0</span> / <span>5</span> </p>
        <button id="my-btn">点击获取所有仓库</button>
        <div id="my-show">
            <details>
                <summary>展开</summary>
                <ul></ul>
            </details>
        </div>
    </div>
</details>
`;

document.body.appendChild(divEl);

const btnEl = document.getElementById("my-btn");
const showEl = document.getElementById("my-show");
btnEl.onclick = () => {
    const ulEl = showEl.querySelector("ul");
    divEl.querySelector("p > span:nth-child(1)").innerHTML = "?";
    btnEl.setAttribute("disabled", "true");
    renderAllRepo(ulEl);
};

async function renderAllRepo(ulEl) {
    /** github 的 head 中会提供一个 meta 标签，里面包含当前登录的用户名 */
    const username = document
        .querySelector('meta[name="user-login"]')
        .getAttribute("content");

    /** 上方的 Repositories 会显示总的仓库数量 */
    const totalRepo = Number(
        document.querySelectorAll(
            'ul[class="UnderlineNav-body list-style-none"] .Counter'
        )[1].innerText
    );
    if (!isNaN(totalRepo)) {
        const data = await getAllRepo(Math.ceil(totalRepo / 30), username);
        const htmlStr = data.map((item) => `<li>${item}</li>`).join("");
        ulEl.innerHTML = htmlStr;
    }
}

/** 获取每页中的仓库名 */
async function getRepo(page, username) {
    page ??= 1;
    const res = await fetch(
        `//github.com/${username}?page=${page}&tab=repositories`
    );
    const html = await res.text();
    const doc = Document.parseHTMLUnsafe(html);
    const result = [];
    doc.querySelectorAll('a[itemprop="name codeRepository"]').forEach((a) =>
        result.push(a.href)
    );
    return result;
}

/** 获取用户的所有仓库 */
async function getAllRepo(totalPage = 5, username = "Linhieng") {
    const result = [];
    for (let i = 1; i <= totalPage; i++) {
        result.push(...(await getRepo(i, username)));
        divEl.querySelector("p > span:nth-child(1)").innerHTML = i;
    }
    return result;
}
