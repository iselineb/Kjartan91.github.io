
class Upgrade {

    constructor(buildingNum, buildingName, buildingPrice) {

        this.name = buildingName;
        //this.curPrice = buildingPrice;
        let curPrice = buildingPrice;
        let curPriceElement;

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
        curPriceElement = document.createElement("p");
        curPriceElement.innerHTML = curPrice;
        curPriceElement.style.position = "absolute";
        curPriceElement.style.left = "110px";
        curPriceElement.style.top = "56px";
        curPriceElement.style.margin = "0px";
        curPriceElement.style.fontSize = "15px";
        curPriceElement.style.color = "white";
        curPriceElement.style.fontFamily = "Comic Sans MS";
        buildingDiv.appendChild(curPriceElement);

    

        // Event listener
        //alert(this.curPrice);
        buildingDiv.addEventListener("click", function(Event)
        {
            if (buy(curPrice))
            {
                curPrice += 15;
                curPriceElement.innerHTML = curPrice;
            }
            
        });
    }
}

function addUpgrades()
{

    
    new Upgrade(1, "Elvis", 15);

    
    //new Upgrade(1, "Arne", 100);
    
    
}