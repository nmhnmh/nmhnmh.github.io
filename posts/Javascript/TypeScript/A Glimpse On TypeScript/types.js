// boolean
var isOpen = false;
// number
var ultimate_anwser = 42;
var hex = 0xff;
var oct = 63;
var bin = 255;
// string
var ts_name = 'TypeScript';
var full_name = ts_name + " by Microsoft";
// array
var robots = ['R2D2', 'C3PO', 'BB8'];
var world_cup_years = [2010, 2014, 2018, 2022];
// tuple
var pair = ['one', 1];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Red;
// any
var value = 'hello';
value = 12;
value = {};
// void
function notify(msg) {
    alert(msg);
}
// null, undefined
var empty = null;
empty = undefined;
// never
function error(msg) {
    // this function should never return any thing
    throw new Error(msg);
}
