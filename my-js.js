
function add()
{
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;

    var z = parseInt(x)+parseInt(y);
    var display = "Adding both numbers up gives us: "+z;

    document.getElementById("ans").innerText = display;

}

function sub()
{
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;

    var z = parseInt(x)-parseInt(y);
    var display = "Subtracting both numbers up gives us: "+z;

    document.getElementById("ans").innerText = display;

}

    function mult()
    {
        var x = document.getElementById("number1").value;
        var y = document.getElementById("number2").value;
    
        var z = parseInt(x)*parseInt(y);
        var display = "Multipling both numbers up gives us: "+z;
    
        document.getElementById("ans").innerText = display;
    
    }

    function div()
    {
        var x = document.getElementById("number1").value;
        var y = document.getElementById("number2").value;
    
        var z = parseInt(x)/parseInt(y);
        var display = "Diving both numbers up gives us: "+z;
    
        document.getElementById("ans").innerText = display;
    
    }
    
