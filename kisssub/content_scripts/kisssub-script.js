const div = document.createElement('div')
div.setAttribute('id', 'lin')
div.innerHTML = `
<ul>
    <li id="edit-cartoon"><button>编辑番组表</button></li>
</ul>
`
document.body.prepend(div)

const editBtn = document.getElementById('edit-cartoon')
editBtn.addEventListener('click', () => {
    window.location.assign('addon.php?r=bangumi/table&layout=frame')
})
