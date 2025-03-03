function computeInterest()
{
    var pricipal = document.getElementById("principal").value;
    pricipal = parseInt(pricipal, 10);

    var rate = document.getElementById("rate").value;
    rate = parseFloat(rate);

    var years  = document.getElementById("years").value;
    years  = parseInt(years , 10);

    var interest  = pricipal * years * rate / 100;

    var amount = pricipal + parseInt(interest);

    var result = document.getElementById("result");
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    
    document.getElementById("rate_val").innerText = rateval;
}

