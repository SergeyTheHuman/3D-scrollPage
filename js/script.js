// 3D Scroll
const zSpacing = -1500
let lastPosition = zSpacing / 5
let zValues = []

const $frames = document.querySelectorAll('.gallery__frame')
const $framesArray = Array.from($frames)
const body = document.body;
const html = document.documentElement;

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

// Audio

let $soundButton = document.querySelector('.sound-button')
let $audio = document.querySelector('.audio')
$audio.volume = 0.25;

$soundButton.addEventListener('click', e => {
	$soundButton.classList.toggle('paused')
	$audio.paused ? $audio.play() : $audio.pause()
})

window.onfocus = () => {
	$soundButton.classList.contains('paused') ? $audio.pause() : $audio.play()
}

window.onblur = () => {
	$audio.pause()
}
