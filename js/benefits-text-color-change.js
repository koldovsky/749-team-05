(function () {
	const benefitsText = document.querySelectorAll('.benefits__card-text')

	const changeColor = event => {
		const r = Math.floor(Math.random() * 255)
		const g = Math.floor(Math.random() * 255)
		const b = Math.floor(Math.random() * 255)

		event.target.style.color = `rgb(${r},${g},${b})`
	}

	const colourDefault = change => {
		change.target.style.color = ''
	}

	benefitsText.forEach(text => {
		text.addEventListener('pointerenter', changeColor)
	})
	benefitsText.forEach(text => {
		text.addEventListener('pointerleave', colourDefault)
	})
})()
