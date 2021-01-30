class PickaxeUpgrade {
	constructor(name, basePrice, description, imgPath) {
		let pickaxeUpgrade = new Image();
		pickaxeUpgrade.src = imgPath;
		var container = document.getElementById("pickaxeUpgrades");
		pickaxeUpgrade.className = "pickaxe-upgrade";

		this.tooltip = null;

		pickaxeUpgrade.addEventListener("mouseover", function(Event) {
			this.tooltip = new Tooltip(name, description, basePrice, Event.pageX, Event.pageY);	
		});

		pickaxeUpgrade.addEventListener("click", function(Event) {
			if(buy(basePrice)) {
				pickaxeUpgrade.style.opacity = 0.5;
				changePickaxe(imgPath); 
				//TODO: Stoppe folk i å kjøpeden samme to ganger
			}
		});

		pickaxeUpgrade.addEventListener("mouseout", function(Event) {
			this.tooltip.removeTooltip();
		});

		container.appendChild(pickaxeUpgrade);
	}
}