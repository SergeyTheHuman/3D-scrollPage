//3D Scroll
let zSpacing = -1500
let lastPosition = zSpacing / 5
let zValues = []

let $frames = document.querySelectorAll('.gallery__frame')
let $framesArray = Array.from($frames)

window.addEventListener('scroll', () => {
	let top = document.documentElement.scrollTop
	let delta = lastPosition - top

	lastPosition = top

	$framesArray.forEach((frame, index) => {
		zValues.push((index * zSpacing) + zSpacing)
		zValues[index] += delta * -2
		let translateZ = `translateZ(${zValues[index]}px)`

		let opacity;
		if ((zValues[index] < Math.abs(zSpacing) / 1.8) && !(Math.abs(zValues[index]) > 2000)) {
			opacity = 1
		} else {
			opacity = 0
		}

		frame.setAttribute('style', `transform: ${translateZ}; opacity: ${opacity}`)
	})
})

window.scrollTo(0, 1)
