const textarea = document.querySelector('#bgm-editor > textarea')
const editButtonsList = document.querySelector('#bgm-editor > p')

const saveBtn = document.createElement('button')
saveBtn.innerText = '保存'
editButtonsList.append('\u00A0', saveBtn)

saveBtn.addEventListener('click', () => {
    localStorage.setItem('本地番组表', textarea.value)
    alert('成功保存')
})

const local = localStorage.getItem('本地番组表')
if (local !== null) {
    textarea.value = local
    textarea.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }))
}

// ================= //
const div = document.createElement('div')
div.setAttribute('id', 'lin')
div.innerHTML = `
<ul>
    <li id="edit-cartoon"><button>回到首页</button></li>
</ul>
`
document.body.prepend(div)

const editBtn = document.getElementById('edit-cartoon')
editBtn.addEventListener('click', () => {
    window.location.assign('https://www.kisssub.org/')
})
