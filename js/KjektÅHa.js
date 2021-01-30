function buy(price)
{
    let diamonds = sessionStorage.getItem("diamonds");

    if (diamonds >= price)
    {
        diamonds -= price;
        sessionStorage.setItem("diamonds", diamonds);
        return true;
    }
    else
        return false;
}

function changePickaxe(imgPath) {
    document.getElementById("img-pickaxe").src = imgPath;
}

function increaseDiamonds(increaseBy)
{
    let diamonds = +sessionStorage.getItem("diamonds");
    diamonds += increaseBy;
    sessionStorage.setItem("diamonds", diamonds);
}

function curDiamonds()
{
    let diamonds = +sessionStorage.getItem("diamonds");
    return diamonds;
}