//3D Scroll

let zSpacing = -1000
let lastPosition = zSpacing / 5
let zValues = []

let $frames = document.querySelectorAll('.gallery__frame')
let $framesArray = Array.from($frames)

window.addEventListener('scroll', () => {
	let top = document.documentElement.scrollTop
	let delta = lastPosition - top


	console.log(top, delta);
	lastPosition = top

	$framesArray.forEach((frame, index) => {
		zValues.push((index * zSpacing) + zSpacing)
		zValues[index] += delta * -5

		let transform = `transform: translateZ(${zValues[index]}px)`
		frame.setAttribute('style', transform)
	})
})

