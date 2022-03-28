const navBtnElem = document.querySelector('.nav-btn');
const menuElem = document.querySelector('.menu');

navBtnElem.addEventListener('click', 
	()=>{
	menuElem.classList.toggle('active');
})

// scroll

const pointsArr = document.querySelectorAll('.points li');
const pageArr = document.querySelectorAll('.page');

pointsArr.forEach((elem, index)=>{
	elem.addEventListener('click', ()=>{
		pageArr[index].scrollIntoView({behavior: 'smooth'});
	})
})