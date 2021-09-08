document.onkeydown=function(evt)
{
    if((evt.keyCode>95) &&(evt.keyCode<106))
    {
        var nbr = evt.keyCode-96;
        document.calc.display.value+=nbr;
    }
    else if (evt.keyCode==107)
    {
        document.calc.display.value+='+';
    }
    else if (evt.keyCode==109)
    {
        document.calc.display.value+='-';
    }
    else if (evt.keyCode==106)
    {
        document.calc.display.value+='-';
    }
    else if(evt.keyCode==106)
    {
        document.calc.display.value+='*';
    }
    else if (evt.keyCode==110||evt.keyCode==188||evt.keyCode==190)
    {
        document.calc.display.value+='.';
    }
    else if(evt.keyCode==13)
    {
        document.calc.display.value=eval(document.calc.display.value);
    }
    else if (evt.keyCode==111)
    {
        document.calc.display.value='';
    }
} 

