// Update boat's x,y position and angle to HTML asychronously
var xmlobj;
var count;
var rtime = 10;

function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        xmlobj = new ActiveXObject("Microsoft.XMLHTTP");
        xmlobjy = new ActiveXObject("Microsoft.XMLHTTP");
        xmlobja = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlobj = new XMLHttpRequest();
        xmlobjy = new XMLHttpRequest();
        xmlobja = new XMLHttpRequest();
    }
}

function Autofresh() {
    var timestamp3 = new Date().getTime();
    createXMLHttpRequest();
    count = count + 1;
    xmlobj.open("GET", "06_queryXposition.php", true);
    xmlobj.onreadystatechange = doAjax;
    xmlobj.send();
    xmlobjy.open("GET", "06_queryYposition.php", true);
    xmlobjy.onreadystatechange = doAjaxy;
    xmlobjy.send();
    xmlobja.open("GET", "06_queryAngle.php", true);
    xmlobja.onreadystatechange = doAjaxa;
    xmlobja.send();
}

function doAjax() {// Update positionX
    if (xmlobj.readyState == 4 && xmlobj.status == 200) {
        var xx = xmlobj.responseText;
        var mid = document.getElementById("mid");
        mid.style.left = xx;
        document.getElementById("positionX").innerHTML = xx;
        //console.log(xx);
        setTimeout("Autofresh()", rtime);
    }
}

function doAjaxy() {// Update positionY
    if (xmlobjy.readyState == 4 && xmlobjy.status == 200) {
        var yy = xmlobjy.responseText;
        var mid = document.getElementById("mid");
        mid.style.top = yy;
        document.getElementById("positionY").innerHTML = yy;
        //console.log(xx);
        setTimeout("Autofresh()", rtime);
    }
}

function doAjaxa() {// Update angle
    if (xmlobja.readyState == 4 && xmlobja.status == 200) {
        var aa = xmlobja.responseText - 135;
        var mid = document.getElementById("mid");
		var maxAngle = ;	// Maximum angle
		var minAngle = ;	// Minimum angle
		var maxBack2 = ;	// Maximum back2
		var minBack2 = ;	// Minimum back2
        mid.style.transform = 'rotate(' + aa + 'deg)';
        document.getElementById("angle").innerHTML = aa;
        //console.log(xx);
        setTimeout("Autofresh()", rtime);
        var timestamp4 = new Date().getTime();
        dis2 = timestamp4 - timestamp3;
        document.getElementById("back2").innerHTML = dis2;
		// below
		var angleRate = (aa-minAngle) / (maxAngle-minAngle) * 100 + "%";
		var back2Rate = (dis2-minBack2) / (maxBack2-minBack2) * 100 + "%";
		angleBar.style.width = angleRate;
		back2Bar.style.width = back2Rate;
    }
}
