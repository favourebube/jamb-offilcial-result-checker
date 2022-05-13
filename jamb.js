const body = document.querySelector('body')
const container = document.querySelector('.container')


body.addEventListener('click', (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX)/15 ;
    let yAxis = (window.innerHeight / 2 - e.pageY)/15

	container.style.transform = `rotatex(${xAxis}deg) rotatey(${yAxis}deg)`
})

body.addEventListener('mouseout', (e) => {
	let xaxis = window.innerWidth/2 - e.pagex
	let yaxis = window.innerheight/2 - e.pagex

	container.style.transform = `rotatez(0) rotatez(0)`
})