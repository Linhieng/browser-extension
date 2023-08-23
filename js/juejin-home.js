const eleTopUl = document.querySelector('.nav-list .right-side-nav')

const eleGotoPin = document.createElement('li')
eleGotoPin.classList.add('nav-item', 'linhieng')
eleGotoPin.innerHTML = ` <a target="_blank" href="https://juejin.cn/pins">发沸点</a> `

const eleGotoDraft = document.createElement('li')
eleGotoDraft.classList.add('nav-item', 'linhieng')
eleGotoDraft.innerHTML = ` <a target="_blank" href="https://juejin.cn/editor/drafts/7269743983189786660">文章草稿</a> `

eleTopUl.prepend(eleGotoDraft, eleGotoPin)
