
class Upgrade {

    constructor(buildingNum, buildingName, buildingPrice) {

 

        let unlocked = false;
        //this.curPrice = buildingPrice;

        let name = buildingName;
        let nameElement;

        let curPrice = buildingPrice;
        let curPriceElement;

        let count = 0;
        let countElement;

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
        nameElement = document.createElement("p");
        nameElement.innerHTML = "?";
        nameElement.style.position = "absolute";
        nameElement.style.left = "90px";
        nameElement.style.top = "-5px";
        nameElement.style.width = "150px";
        nameElement.style.margin = "0px";
        nameElement.style.fontSize = "50px";
        nameElement.style.color = "white";
        nameElement.style.fontFamily = "Comic Sans MS";
        buildingDiv.appendChild(nameElement);

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

        // Count
        countElement = document.createElement("p");
        countElement.innerHTML = count;
        countElement.style.position = "absolute";
        countElement.style.right = "40px";
        countElement.style.top = "-10px";
        countElement.style.margin = "0px";
        countElement.style.fontSize = "65px";
        countElement.style.color = "white";
        countElement.style.fontFamily = "Comic Sans MS";
        buildingDiv.appendChild(countElement);

        setInterval(function(){
            // Unlock building
            if (!unlocked)
            {
               
                if (curDiamonds() >= curPrice)
                {
                   
                    nameElement.innerHTML = name;
                    unlocked = true;


                }
            }

            increaseDiamonds(count);
        }, 1000);

        // Event listener
        //alert(this.curPrice);
        buildingDiv.addEventListener("click", function(Event)
        {
            if (buy(curPrice))
            {
                curPrice += 15;
                curPriceElement.innerHTML = curPrice;

                count++;
                countElement.innerHTML = count;
            }
            
        });
    }
}

function addUpgrades()
{

    
    new Upgrade(1, "Elvis", 15);

    
    //new Upgrade(1, "Arne", 100);
    
    
}