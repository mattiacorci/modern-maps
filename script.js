

var BASE_NODE_ID = 'BASE';
var MAP_NODE_CLASS = 'MAP';

var xCoord = 0;
var yCoord = 0;
var inverse = false;

var palettes = [{ "colors": ["rgb(214, 210, 178)", "rgb(230, 222, 187)", "rgb(245, 95, 58)", "rgb(245, 148, 109)", "rgb(69, 67, 63)", "rgb(127, 119, 109)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(229, 224, 210)", "rgb(223, 214, 184)", "rgb(122, 181, 179)", "rgb(88, 57, 73)", "rgb(236, 192, 121)", "rgb(240, 128, 71)"] }, { "colors": ["rgb(101, 176, 148)", "rgb(242, 237, 206)", "rgb(243, 235, 180)", "rgb(217, 204, 146)", "rgb(112, 169, 149)", "rgb(248, 103, 86)", "rgb(243, 209, 107)", "rgb(174, 215, 185)", "rgb(111, 168, 147)"] }, { "colors": ["rgb(27, 46, 73)", "rgb(21, 38, 55)", "rgb(215, 205, 114)", "rgb(204, 203, 171)", "rgb(49, 99, 146)", "rgb(72, 120, 136)", "rgb(106, 192, 201)", "rgb(45, 115, 154)", "rgb(51, 163, 193)"] }, { "colors": ["rgb(77, 73, 69)", "rgb(62, 57, 51)", "rgb(179, 202, 85)", "rgb(186, 199, 137)", "rgb(211, 206, 190)", "rgb(236, 233, 225)", "rgb(237, 236, 229)", "rgb(169, 214, 194)", "rgb(164, 214, 213)", "rgb(126, 117, 123)", "rgb(122, 117, 154)", "rgb(113, 97, 139)"] }, { "colors": ["rgb(94, 112, 123)", "rgb(32, 57, 58)", "rgb(230, 222, 187)", "rgb(128, 183, 188)", "rgb(135, 180, 175)", "rgb(132, 175, 187)", "rgb(97, 135, 146)", "rgb(91, 95, 98)", "rgb(27, 39, 48)", "rgb(91, 118, 123)"] }, { "colors": ["rgb(234, 234, 224)", "rgb(57, 174, 181)", "rgb(234, 208, 62)", "rgb(234, 142, 63)", "rgb(236, 87, 63)", "rgb(36, 148, 191)", "rgb(23, 103, 146)", "rgb(30, 91, 147)"] }, { "colors": ["rgb(233, 226, 209)", "rgb(233, 219, 192)", "rgb(37, 131, 181)", "rgb(133, 203, 224)", "rgb(86, 176, 201)", "rgb(127, 199, 220)", "rgb(47, 50, 55)", "rgb(63, 70, 78)", "rgb(241, 126, 102)", "rgb(240, 114, 86)"] }, { "colors": ["rgb(211, 206, 192)", "rgb(240, 236, 219)", "rgb(45, 167, 178)", "rgb(181, 203, 186)", "rgb(231, 75, 92)", "rgb(59, 59, 59)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(96, 96, 96)", "rgb(231, 161, 187)", "rgb(32, 27, 24)", "rgb(125, 127, 127)", "rgb(77, 79, 78)", "rgb(181, 181, 182)", "rgb(216, 213, 213)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(96, 96, 96)", "rgb(240, 199, 83)", "rgb(32, 27, 24)", "rgb(125, 127, 127)", "rgb(77, 79, 78)", "rgb(181, 181, 182)", "rgb(216, 213, 213)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(96, 96, 96)", "rgb(203, 167, 131)", "rgb(32, 27, 24)", "rgb(125, 127, 127)", "rgb(77, 79, 78)", "rgb(181, 181, 182)", "rgb(216, 213, 213)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(96, 96, 96)", "rgb(59, 164, 158)", "rgb(32, 27, 24)", "rgb(125, 127, 127)", "rgb(77, 79, 78)", "rgb(181, 181, 182)", "rgb(216, 213, 213)"] }, { "colors": ["rgb(139, 152, 167)", "rgb(20, 30, 42)", "rgb(177, 188, 204)", "rgb(119, 166, 192)", "rgb(255, 255, 255)", "rgb(35, 83, 132)", "rgb(27, 65, 107)", "rgb(28, 98, 139)", "rgb(43, 150, 185)"] }, { "colors": ["rgb(227, 220, 194)", "rgb(228, 221, 175)", "rgb(136, 190, 171)", "rgb(138, 190, 169)", "rgb(32, 141, 117)", "rgb(81, 171, 157)", "rgb(32, 142, 121)", "rgb(62, 38, 13)", "rgb(86, 84, 72)", "rgb(37, 139, 118)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(209, 211, 195)", "rgb(234, 235, 210)", "rgb(105, 192, 158)", "rgb(25, 151, 136)", "rgb(49, 84, 95)", "rgb(35, 20, 38)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(62, 42, 70)", "rgb(238, 28, 87)"] }, { "colors": ["rgb(32, 27, 26)", "rgb(43, 38, 38)", "rgb(137, 189, 176)", "rgb(149, 195, 184)", "rgb(47, 65, 60)", "rgb(239, 15, 113)", "rgb(213, 133, 167)", "rgb(255, 255, 255)", "rgb(154, 157, 165)", "rgb(113, 139, 149)"] }, { "colors": ["rgb(69, 69, 69)", "rgb(231, 225, 204)", "rgb(235, 232, 214)", "rgb(70, 67, 59)", "rgb(112, 107, 90)", "rgb(229, 26, 85)", "rgb(46, 169, 183)", "rgb(44, 143, 164)", "rgb(47, 162, 156)", "rgb(225, 191, 169)", "rgb(185, 187, 73)", "rgb(202, 207, 71)", "rgb(207, 212, 183)"] }];

var logoCounter = 0;

var accettati = 0;
var scartati = 0;

window.onload = render;
window.onkeypress = render;


if(SVGRectElement.prototype.getTotalLength == null) {
    SVGRectElement.prototype.getTotalLength = function() {
        let width = this.width.baseVal.value,
            height = this.height.baseVal.value
        
        // Return the calculated value
        return width * 2 + height * 2;
    }
}


function duplicate() { 
    var now = new Date().getTime();
    var clone = document.getElementById(BASE_NODE_ID).cloneNode(true);
    clone.id = 'MAP_CONTAINER_'+ now;
    clone.classList.add('logo-container');
    document.body.appendChild(clone);
    return clone;
}

function render() {

    logoCounter++;
    logLogoCounter();

    var container = duplicate();
    var mapId = 'MAP';
    colorizeBase(container, randomItem(palettes));
    transformBase(container);
    chooseMap(container);
    if(!totalFills(container)) {
        container.remove();
        scartati++;
        render();
        return;
    } else {
        accettati++;
    }
    console.log("accettati: " + accettati + ", scartati: " + scartati);
    addTerminator(container);
}

function bulkRender() {
    var nstr = prompt("How many logo?");
    if(isNaN(nstr)) return;
    var n = parseInt(nstr);
    for(var i = 0; i < n; i++) {
        render();
    }
}

function colorizeBase(container, palette) {
    var maps = container.getElementsByClassName(MAP_NODE_CLASS);
    for(var i = 0; i < maps.length; i++) {
        var map = maps[i];
        colorizeRecursive(map, palette);
    }

    logPalette(container, palette);
}

function colorizeRecursive(node, palette) {
    var children = node.children;
    if(children.length == 0) {
        // if(node.nodeName == 'rect') node.style.fill = palette.street;
        // else node.style.fill = randomItem(palette.colors)
        node.style.fill = randomItem(palette.colors);
    } else {
        for(var i = 0; i < children.length; i++) {
            var child = children[i];
            colorizeRecursive(child, palette);
        }
    }
}

function transformBase(container) {
    var transformParams = {
        xCoord: Math.round(Math.random()*100),
        yCoord: Math.round(Math.random()*100),
        scale: Math.round((Math.random() * 3 + 0.6)*10000)/10000,
        rotate: Math.floor(Math.random() * 360) + 0
    };
    var maps = container.getElementsByClassName(MAP_NODE_CLASS);

    for(var i = 0; i < maps.length; i++) {
        var map = maps[i];
        transformRecursive(map, transformParams, container);
    }

    logTransform(container, transformParams);
}

function transformRecursive(node, params) {
    var children = node.children;
    if(children.length == 0) {
        node.style.transform = 'translate(' + params.xCoord + 'px, ' + params.yCoord + 'px) scale('+ params.scale +') rotate(' + params.rotate + 'deg)';
    } else {
        for(var i = 0; i < children.length; i++) {
            var child = children[i];
            transformRecursive(child, params);
        }
    }
}

function chooseMap(container) {
    var maps = container.getElementsByClassName(MAP_NODE_CLASS);
    
    while(maps.length > 1) {
        randomItem(maps).remove();
    }
}

function addTerminator(container) {
    var terminatorBtn = document.createElement('button');
    terminatorBtn.className = 'terminator-btn';
    terminatorBtn.onclick = function() {
        deleteNode(container.id);
    }
    terminatorBtn.innerText = 'delete';
    container.appendChild(terminatorBtn);
}

function totalFills(container) {
    var svg = container.getElementsByTagName('svg')[0];
    var rect = container.getElementsByClassName('MRECT')[0];
    var letter = container.getElementsByClassName('MLETTER')[0];
    console.log(rect);
    var matrix = rect.getCTM();
    var mapLength = rect.getTotalLength();
    // var mapLength = getRectLength(rect);
    var inside = 0;
    var outside = 0;
    for (var i = 0; i < mapLength; i++) {
        var p = rect.getPointAtLength(i).matrixTransform(matrix);
        var isInside = letter.isPointInFill(p);
        if(isInside) inside++;
        else outside++;
    }

    return inside == 0 && outside > 0;
}

function deleteNode(nodeId) {
    var node = document.getElementById(nodeId);
    node.remove();
}

function toggleHistory() {
    document.body.classList.toggle('showcase');
    document.body.classList.toggle('history');
}

function toggleNegative() {
    document.body.classList.toggle('negative');
}

function toggleTerminate() {
    document.body.classList.toggle('terminate');
}


function randomItem(arr) {
    var rand = Math.round(Math.random()*(arr.length-1));
    return arr[rand];
}

function getRectLength(rect) {
    return rect.width.baseVal.value * 2 + rect.height.baseVal.value;
}

function logPalette(container, palette) {
    // if(!container) container = document.getElementsByTagName('body')[0];
    var paletteDiv = document.getElementById('palette-log');
    if(!paletteDiv) {
        var paletteDiv = document.createElement('div');
        paletteDiv.className = 'palette-log';
        container.appendChild(paletteDiv);
    }
    paletteDiv.innerHTML = '';

    var makeRect = function(color) {
        var rect = document.createElement('div');
        rect.style.width = '10px';
        rect.style.height = '10px';
        rect.style.display = 'inline-block';
        rect.style.backgroundColor = color;
        return rect;
    }
    for(var i = 0; i < palette.colors.length; i++) {
        var color = palette.colors[i];

        paletteDiv.appendChild(makeRect(color));
    }

    paletteDiv.appendChild(makeRect(palette.street));
}

function logTransform(container, p) {
    // if(!container) container = document.getElementById('transform-log');
    if(!transformLog) {
        var transformLog = document.createElement('div');
        transformLog.className = 'transform-log';
        container.appendChild(transformLog);
    }
    var code = '';
    var acapo = '<br/>';

    code += 'translate: ' + p.xCoord + 'x, ' + p.yCoord + 'y';
    code += acapo;
    code += 'scale: ' + p.scale + '%';
    code += acapo;
    code += 'rotate: ' + p.rotate + 'deg';

    transformLog.innerHTML = code;
}

function logLogoCounter() {
    var logLogoCounter = document.getElementById('counter-log');
    if(!logLogoCounter) {
        var logLogoCounter = document.createElement('div');
        logLogoCounter.id = 'counter-log';
        document.body.appendChild(logLogoCounter);
    }
    logLogoCounter.innerHTML = "generated logos: " + logoCounter;
}


function transformCss(mapId) {
    var style = document.getElementById('map-style');
    if(!style) {
        var style = document.createElement('style');
        style.id = 'map-style';
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    var xCoord = Math.round(Math.random()*100);
    var yCoord = Math.round(Math.random()*100);
    var scale = Math.round((Math.random() * 3 + 0.6)*10000)/10000;
    var rotate = Math.floor(Math.random() * 360) + 0;
    style.innerHTML = style.innerHTML + 
    '\r\n#' + mapId +' * { transform: translate('+ xCoord+'px, ' + yCoord + 'px) scale('+ scale +') rotate(' + rotate + 'deg); }';
    logTransform(xCoord, yCoord, scale, rotate);
}