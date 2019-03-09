// Basic control instruction for ARS


// Sail control
function DOWN() {
    var timestamp1 = new Date().getTime();
    var xmlhttp;  // 新建一个 XMLHttpRequest 对象用于 AJAX
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("sail_angle").innerHTML = xmlhttp.responseText;
            var result = xmlhttp.responseText;
            //console.log(result);
            var timestamp2 = new Date().getTime();
            var dis = timestamp2 - timestamp1;
            document.getElementById("test").innerHTML = dis;
            console.log(dis);
        }
    }
    xmlhttp.open("GET", "06_queryInsertDown.php", true);  // 向服务器发送请求
    xmlhttp.send();
}

function UP() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("sail_angle").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_queryInsert.php", true);
    xmlhttp.send();
}

function SAILRESET() {
    // Reset the sail angle to 0
    var xmlhttp; // XMLHttpRequest Object
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("sail_angle").innerHTML = xmlhttp.responseText;
        }
    }
	xmlhttp.open("GET", '06_queryRelayXX.php?relayY=10', true);
    //xmlhttp.open("GET", "06_querySailReset.php", true);
    xmlhttp.send();
}

function SAILSETMAX(){
    // Set the sail angle to its maximum
    var xmlhttp; // XMLHttpRequest Object
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("sail_angle").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_querySailSetMax.php", true);
    xmlhttp.send();
}

// Rudder control
function LEFT() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_queryInsertRudderLeft.php", true);
    xmlhttp.send();
}

function RIGHT() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_queryInsertRudderRight.php", true);
    xmlhttp.send();
}

function RELEASERUDDER() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
        }
    }
    //xmlhttp.open("GET", "06_queryReleaseRudder.php", true);
    xmlhttp.send();
}

function RUDDERRESET(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRudderReset.php", true);
    xmlhttp.send();
}

function RUDDERRESET(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRudderSetTo45.php", true);
    xmlhttp.send();
}

function WINDE(){
    // Turn on the East fan (top)
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //document.getElementById("relay1").innerHTML = xmlhttp.responseText;
		document.getElementById("fanE").src='images/FanE_on1.png';
		//document.getElementById("fanE_C").src='../images/fanE_on.png';
      }
    }
	xmlhttp.open("GET", '06_queryRelayXX.php?relayY=31', true);
    //xmlhttp.open("GET", "06_queryRelay13.php", true);
    xmlhttp.send();
}

function WINDW(){
    // Turn on the West fan (bottom)
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
		document.getElementById("fanW").src='../images/fanW_on1.png';
		document.getElementById("fanW_C").src='../images/fanW_on.png';
      }
    }
	xmlhttp.open("GET", "06_queryRelay12.php", true);
    xmlhttp.send();
}

function LED(){
    // Turn on the light
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", '06_queryRelayXX.php?relayY=11', true);
	//xmlhttp.open("GET", "06_queryRelay11.php", true);
    xmlhttp.send();
}

function REMAINED(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRelay14.php", true);
    xmlhttp.send();
}

function WINDEC(){
    // Turn off the East fan (top)
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //document.getElementById("relay1").innerHTML = xmlhttp.responseText;
		document.getElementById("fanE").src='images/fanE_off1.png';
		//document.getElementById("fanE_C").src='../images/fanE_off.png';
      }
    }
	xmlhttp.open("GET", '06_queryRelayXX.php?relayY=30', true);
    //xmlhttp.open("GET", "06_queryRelay130.php", true);
    xmlhttp.send();
}

function WINDWC(){
    // Turn off the West fan (bottom)
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
		document.getElementById("fanW").src='../images/fanW_off1.png';
		document.getElementById("fanW_C").src='../images/fanW_off.png';
      }
    }
    xmlhttp.open("GET", "06_queryRelay120.php", true);
    xmlhttp.send();
}

function LEDC(){
    // Turn off the light
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
	xmlhttp.open("GET", '06_queryRelayXX.php?relayY=10', true);
    //xmlhttp.open("GET", "06_queryRelay110.php", true);
    xmlhttp.send();
}

function REMAINEDC(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRelay140.php", true);
    xmlhttp.send();
}

// Direction Control Left
function DIRECL() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("dir_ection").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_query8802D.php?dir=220", true);
    xmlhttp.send();
}

function DIRECR() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("dir_ection").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_query8802D.php?dir=60", true);
    xmlhttp.send();
}

function DIRECD() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("dir_ection").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_query8802D.php?dir=330", true);
    xmlhttp.send();
}

function DIRECU() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("dir_ection").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_query8802D.php?dir=60", true);
    xmlhttp.send();
}

function RU(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("sail_angle").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRightUp.php", true);
    xmlhttp.send();
}

function RD(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("sail_angle").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRightDown.php", true);
    xmlhttp.send();
}
function LU(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryLeftUp.php", true);
    xmlhttp.send();
}
function LD(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryLeftDown.php", true);
    xmlhttp.send();
}

function HW(){
    // Hybrid Accelerate
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryHybridW.php", true);
    xmlhttp.send();
}

function HS(){
    // Hybrid Accelerate
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryHybridS.php", true);
    xmlhttp.send();
}

function HA(){
    // Hybrid turn left
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryHybridL.php", true);
    xmlhttp.send();
}

function HD(){
    // Hybrid Turn Right
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder_angle").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryHybridR.php", true);
    xmlhttp.send();
}

// Support keyboard control
// I don't know why it does not work
function KBCONTROL(){
	window.onload = function () {
      var current = 0;
      document.getElementById('mid').onclick = function () {
        current = (current + 15) % 360;
        this.style.transform = 'rotate(' + current + 'deg)';
      }
    }

    var mid = document.getElementById("mid");
    //给mid设置事件的监听
    window.document.onkeydown = function (ent) {
      var event = ent || window.event;
      switch (event.keyCode) {
        // 监听键盘操作
        case 87:  // Press KeyW
          UP();
          break;
        case 83:  // Press KeyS
          DOWN();
          break;
        case 65:  // Press KeyA
          LEFT();
          break;
        case 68:  // Press KeyD
          RIGHT();
          break;
        case 37:  // Press ArrowLeft
          mid.style.left = Math.max(0, mid.offsetLeft - 5) + "px";
          var pageCoords = "( " + mid.style.top + ", " + mid.style.down + " )";
          var clientCoords = "( " + mid.style.left + ", " + mid.style.top + " )";
          //  $( "span:first" ).text( "( position.pageX, position.pageY ) : " + pageCoords+ ","+clientCoords);
          $("span:last").text("( postion.clientX, position.clientY ) : " + clientCoords);
          break;
        case 38:  // Press ArrowUp
          mid.style.top = Math.max(0, mid.offsetTop - 5) + "px";
          var pageCoords = "( " + mid.style.top + ", " + mid.style.down + " )";
          var clientCoords = "( " + mid.style.left + ", " + mid.style.top + " )";
          //  $( "span:first" ).text( "( position.pageX, position.pageY ) : " + pageCoords+ ","+clientCoords);
          $("span:last").text("( postion.clientX, position.clientY ) : " + clientCoords);
          break;
        case 39:  // Press ArrowRight
          mid.style.left = Math.min(375, mid.offsetLeft + 5) + "px";
          var pageCoords = "( " + mid.style.top + ", " + mid.style.down + " )";
          var clientCoords = "( " + mid.style.left + ", " + mid.style.top + " )";
          //  $( "span:first" ).text( "( position.pageX, position.pageY ) : " + pageCoords+ ","+clientCoords);
          $("span:last").text("( postion.clientX, position.clientY ) : " + clientCoords);
          break;
        case 40:  // Press ArrowDown
          mid.style.top = Math.min(575, mid.offsetTop + 5) + "px";
          //var pageCoords = "( " + mid.style.top + ", " + mid.style.down + " )";
          //var clientCoords = "( " + mid.style.left + ", " + mid.style.top + " )";

          $("span:last").text("( postion.clientX, position.clientY ) : " + clientCoords);
          break;
        // default:
        // need some prompt message here
      }
    }
}