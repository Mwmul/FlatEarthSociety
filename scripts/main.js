let menu = document.getElementById('menu'),
		menuIcon = document.getElementById('menuIcon'),
		element = document.documentElement,
		menuList = document.querySelectorAll('#menu > ul')[0];

function menuColour() {
	let vh = window.innerHeight,
			
			sct = element.scrollTop;
	if( sct > vh ) {
		menu.style.color = "black";
	} else {
		menu.style.color = "white";
	}
}
document.addEventListener('scroll', menuColour);

function exposeMenu() {
	if( menuList.style.marginLeft == "-130px" ) {
		 	menuList.style.marginLeft = "0px";
			menuIcon.innerText = "clear";
		 } else {
		 	menuList.style.marginLeft = "-130px";
			 menuIcon.innerText = "dehaze";
		 }
}

menuIcon.addEventListener('click', exposeMenu);



let elems = document.querySelectorAll('section > .inner *'),
		sct,
		vh;
console.log(elems)

function fadeIn() {
	// update viewport height incase browser size is changed.
	vh = window.innerHeight;
	// update scroll top variable every time this function is executed.
	sct = document.documentElement.scrollTop;
	vh = window.innerHeight-50;
	elems.forEach(e => {
		if(sct > e.offsetTop-vh) {
			e.style.opacity = "1"
		} else {
			e.style.opacity = "0"
		}
	})
}
fadeIn()	
document.addEventListener('scroll', fadeIn);