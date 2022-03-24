var last_position_of_x , last_position_of_y;
color="black";
width_of_line="2";
canvas.document.getElementById(myCanvas).value;
ctx.getContext("2d");
var width=screen.width;
new width=screen.width-70;
new height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width="new width";
    document.getElementById("myCanvas").height="new height";
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart","my_touchstart");
function touchstart(e)
{
    console.log(my_touchstart)
    color=document.getElementById("color").value;
    width_of_line.document.getElementById("width_of_line").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", "my_touchmove");
function touchmove(e)
{
    console.log(my_touchmove);
    if(touchstart==touchdown)
    {
        ctx.beginPath();
        ctx.strokeStyle="color";
        ctx.lineWidth="width_of_line";
        current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
        current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
        console.log("Last position of x and y coordinates =" );
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("Current Position Of X and Y Coordinates = ");
        console.log("x =" + current_position_of_touch_x + "y =" + last_position_of_y);
        ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}

