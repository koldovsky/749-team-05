(function () {
	const benefitsText = document.querySelectorAll('.benefits__card-text')

	const randomColor = changer => {
		const r = Math.floor(Math.random() * 255)
		const g = Math.floor(Math.random() * 255)
		const b = Math.floor(Math.random() * 255)

		changer.target.style.color = `rgb(${r},${g},${b})`
	}

	const colourDefault = change => {
		change.target.style.color = ''
	}

	benefitsText.forEach(text => {
    text.addEventListener('pointerenter', randomColor)
    text.addEventListener('pointerleave', colourDefault)
	})
})()