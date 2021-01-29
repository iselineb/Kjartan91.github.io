
class Upgrade {

    constructor(buildingNum, buildingName, buildingPrice) {

        this.name = buildingName;
        this.curPrice = buildingPrice;

        // Main div
        let buildingDiv = document.createElement("div");
        buildingDiv.style.width = "100%";
        buildingDiv.style.height = "80px";
        buildingDiv.style.marginBottom = "2px";
        buildingDiv.style.position = "absolute";
        buildingDiv.style.top = `${buildingNum*90}px`;
        //buildingDiv.style.display = "flex";
        //newDiv.style.backgroundColor = "white";
        buildingDiv.style.backgroundImage = "url('img/BuildingsBackground.png')";
        let parent = document.querySelector(".upgrades");
        parent.appendChild(buildingDiv);
        //alert();

        // Image
        let image = new Image(80, 80);
        image.src = "img/BuildingsImagesElvis.png";
        image.style.position = "absolute";
        image.style.left = "0px";
        image.style.top = "-1px";
        buildingDiv.appendChild(image);

        
        // Name
        let name = document.createElement("p");
        name.innerHTML = this.name;
        name.style.position = "absolute";
        name.style.left = "90px";
        name.style.top = "-5px";
        name.style.width = "150px";
        name.style.margin = "0px";
        name.style.fontSize = "50px";
        name.style.color = "white";
        name.style.fontFamily = "Comic Sans MS";
        buildingDiv.appendChild(name);

        // Diamond icon
        let diamondImage = new Image(20, 20);
        diamondImage.src = "img/Diamond.png";
        diamondImage.style.position = "absolute";
        diamondImage.style.left = "90px";
        diamondImage.style.top = "55px";
        buildingDiv.appendChild(diamondImage);

        // Price
        this.price = document.createElement("p");
        this.price.innerHTML = this.curPrice;
        this.price.style.position = "absolute";
        this.price.style.left = "110px";
        this.price.style.top = "56px";
        this.price.style.margin = "0px";
        this.price.style.fontSize = "15px";
        this.price.style.color = "white";
        this.price.style.fontFamily = "Comic Sans MS";
        buildingDiv.appendChild(this.price);
    
        // Event listener
        alert(this.curPrice);
        buildingDiv.addEventListener("click", function()
        {
            alert(this.curPrice);

        });
    }
}

function addUpgrades()
{

    new Upgrade(0, "Elvis", 15);

    
    //new Upgrade(1, "Arne", 100);
    
    
}