const btm = document.querySelector('div#btm')
const minWidth = btm.style.minWidth
const maxWidth = btm.style.maxWidth

const div = document.createElement('div')
div.id = 'my-ele'
div.innerHTML = `
	<input type="checkbox" id="toggle-width">
	<label for="toggle-width">适应宽度</label>
`
document.body.appendChild(div)

const checkbox = div.querySelector('input#toggle-width')
checkbox.addEventListener('change', () => {
	toggleWidth(checkbox.checked)
})


function toggleWidth(checked) {

	if (checked) {
		btm.style.width = '2000px'
		btm.style.minWidth = null
		btm.style.maxWidth = null
	} else {
		btm.style.width = null
		btm.style.minWidth = minWidth
		btm.style.maxWidth = maxWidth
	}
}
