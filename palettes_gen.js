var palettes = [{ "colors": ["rgb(214, 210, 178)", "rgb(230, 222, 187)", "rgb(245, 95, 58)", "rgb(245, 148, 109)", "rgb(69, 67, 63)", "rgb(127, 119, 109)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(229, 224, 210)", "rgb(223, 214, 184)", "rgb(122, 181, 179)", "rgb(88, 57, 73)", "rgb(236, 192, 121)", "rgb(240, 128, 71)"] }, { "colors": ["rgb(101, 176, 148)", "rgb(242, 237, 206)", "rgb(243, 235, 180)", "rgb(217, 204, 146)", "rgb(112, 169, 149)", "rgb(248, 103, 86)", "rgb(243, 209, 107)", "rgb(174, 215, 185)", "rgb(111, 168, 147)"] }, { "colors": ["rgb(27, 46, 73)", "rgb(21, 38, 55)", "rgb(215, 205, 114)", "rgb(204, 203, 171)", "rgb(49, 99, 146)", "rgb(72, 120, 136)", "rgb(106, 192, 201)", "rgb(45, 115, 154)", "rgb(51, 163, 193)"] }, { "colors": ["rgb(77, 73, 69)", "rgb(62, 57, 51)", "rgb(179, 202, 85)", "rgb(186, 199, 137)", "rgb(211, 206, 190)", "rgb(236, 233, 225)", "rgb(237, 236, 229)", "rgb(169, 214, 194)", "rgb(164, 214, 213)", "rgb(126, 117, 123)", "rgb(122, 117, 154)", "rgb(113, 97, 139)"] }, { "colors": ["rgb(94, 112, 123)", "rgb(32, 57, 58)", "rgb(230, 222, 187)", "rgb(128, 183, 188)", "rgb(135, 180, 175)", "rgb(132, 175, 187)", "rgb(97, 135, 146)", "rgb(91, 95, 98)", "rgb(27, 39, 48)", "rgb(91, 118, 123)"] }, { "colors": ["rgb(234, 234, 224)", "rgb(57, 174, 181)", "rgb(234, 208, 62)", "rgb(234, 142, 63)", "rgb(236, 87, 63)", "rgb(36, 148, 191)", "rgb(23, 103, 146)", "rgb(30, 91, 147)"] }, { "colors": ["rgb(233, 226, 209)", "rgb(233, 219, 192)", "rgb(37, 131, 181)", "rgb(133, 203, 224)", "rgb(86, 176, 201)", "rgb(127, 199, 220)", "rgb(47, 50, 55)", "rgb(63, 70, 78)", "rgb(241, 126, 102)", "rgb(240, 114, 86)"] }, { "colors": ["rgb(211, 206, 192)", "rgb(240, 236, 219)", "rgb(45, 167, 178)", "rgb(181, 203, 186)", "rgb(231, 75, 92)", "rgb(59, 59, 59)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(96, 96, 96)", "rgb(231, 161, 187)", "rgb(32, 27, 24)", "rgb(125, 127, 127)", "rgb(77, 79, 78)", "rgb(181, 181, 182)", "rgb(216, 213, 213)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(96, 96, 96)", "rgb(240, 199, 83)", "rgb(32, 27, 24)", "rgb(125, 127, 127)", "rgb(77, 79, 78)", "rgb(181, 181, 182)", "rgb(216, 213, 213)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(96, 96, 96)", "rgb(203, 167, 131)", "rgb(32, 27, 24)", "rgb(125, 127, 127)", "rgb(77, 79, 78)", "rgb(181, 181, 182)", "rgb(216, 213, 213)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(96, 96, 96)", "rgb(59, 164, 158)", "rgb(32, 27, 24)", "rgb(125, 127, 127)", "rgb(77, 79, 78)", "rgb(181, 181, 182)", "rgb(216, 213, 213)"] }, { "colors": ["rgb(139, 152, 167)", "rgb(20, 30, 42)", "rgb(177, 188, 204)", "rgb(119, 166, 192)", "rgb(255, 255, 255)", "rgb(35, 83, 132)", "rgb(27, 65, 107)", "rgb(28, 98, 139)", "rgb(43, 150, 185)"] }, { "colors": ["rgb(227, 220, 194)", "rgb(228, 221, 175)", "rgb(136, 190, 171)", "rgb(138, 190, 169)", "rgb(32, 141, 117)", "rgb(81, 171, 157)", "rgb(32, 142, 121)", "rgb(62, 38, 13)", "rgb(86, 84, 72)", "rgb(37, 139, 118)"] }, { "colors": ["rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(209, 211, 195)", "rgb(234, 235, 210)", "rgb(105, 192, 158)", "rgb(25, 151, 136)", "rgb(49, 84, 95)", "rgb(35, 20, 38)", "rgb(96, 96, 96)", "rgb(96, 96, 96)", "rgb(62, 42, 70)", "rgb(238, 28, 87)"] }, { "colors": ["rgb(32, 27, 26)", "rgb(43, 38, 38)", "rgb(137, 189, 176)", "rgb(149, 195, 184)", "rgb(47, 65, 60)", "rgb(239, 15, 113)", "rgb(213, 133, 167)", "rgb(255, 255, 255)", "rgb(154, 157, 165)", "rgb(113, 139, 149)"] }, { "colors": ["rgb(69, 69, 69)", "rgb(231, 225, 204)", "rgb(235, 232, 214)", "rgb(70, 67, 59)", "rgb(112, 107, 90)", "rgb(229, 26, 85)", "rgb(46, 169, 183)", "rgb(44, 143, 164)", "rgb(47, 162, 156)", "rgb(225, 191, 169)", "rgb(185, 187, 73)", "rgb(202, 207, 71)", "rgb(207, 212, 183)"] }];
var TITLE = "<h1>Modern Maps Color Palette";
var credits = "<div class='credits'>by Mattia Corciulo - m. 6521</div>";
function generator() {
    var code = '';
    var paletteCounter = 1;
    for(var p in palettes) {
        var palette = palettes[p];
        var paletteCode = '';
        for(var c in palette.colors) {
            var color = palette.colors[c];
            paletteCode+= getDiv(color) + '\r\n';
        }
        code+= "<div class='palette'>\r\n";
        code+= "<div class='palette-label'> Palette #" + paletteCounter + "</div>";
        code+= paletteCode + '\r\n</div>\r\n\r\n';
        paletteCounter++;
    }

    return code;
}

function getDiv(rgbString) {
    var d = "<div class='color-container'>\r\n";
    d+= "<div class='color' style='background-color: "+ rgbString +"; '></div>\r\n";
    d+= "<div class='color-label'>";
    d+= "RGB: " + rgbString + '<br/>';
    d+= "RGB: " + rgbStrToHex(rgbString) + '<br/>';
    d+= '</div>\r\n';
    d+= '</div>';
    return d;
}





function componentToHex(c) {
    var hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function rgbStrToHex(rgbStr) {
    const RGB_REGEX = /rgb\(([0-9]+),\W*([0-9]+),\W*([0-9]+)\)/i;
    var m = rgbStr.match(RGB_REGEX);
    return rgbToHex(m[1], m[2], [3]);

}

document.addEventListener("DOMContentLoaded", function(event) { 
    var code = TITLE + credits + generator();
    document.body.innerHTML = code;
  });
