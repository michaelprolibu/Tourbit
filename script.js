const ready = () => {
	const menu_button = document.getElementById("menu_activate");
	if(menu_button){
		menu_button.addEventListener("click", () => {
			const menu = document.getElementById("menu_lateral");
			if(menu){
				menu.classList.add("open");
			}
		}) 
	}
	const menu_button_close = document.getElementById("menu_deactivate");
	if(menu_button_close){
		menu_button_close.addEventListener("click", () => {
			const menu = document.getElementById("menu_lateral");
			if(menu){
				menu.classList.remove("open");
			}
		}) 
	}
}

ready();