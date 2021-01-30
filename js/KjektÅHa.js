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