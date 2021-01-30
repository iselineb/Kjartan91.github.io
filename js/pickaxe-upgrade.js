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

		pickaxeUpgrade.addEventListener("mouseout", function(Event) {
			this.tooltip.removeTooltip();		
		});

		container.appendChild(pickaxeUpgrade);
	}
}