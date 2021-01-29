class Tooltip {
	constructor(title, description, price, x, y) {
		this.tooltip = document.createElement("DIV");
		this.tooltip.className = "tooltip";

		var titleTag = document.createElement("h3");
		titleTag.innerHTML = title;

		var descriptionTag = document.createElement("DIV");
		descriptionTag.className = "tooltip-description"
		descriptionTag.innerHTML = description;

		var priceTag = document.createElement("DIV");
		priceTag.className = "tooltip-price"
		priceTag.innerHTML = "Pris: " + price + " diamanter";

		this.tooltip.appendChild(titleTag);
		this.tooltip.appendChild(descriptionTag);
		this.tooltip.appendChild(priceTag);

		this.tooltip.style.top = y+"px";
		this.tooltip.style.left = (x-200)+"px";

		document.body.appendChild(this.tooltip);
	}
	
	removeTooltip() {
		this.tooltip.remove();
	}

	moveTo(x, y) {
		//TODO
	}
}
