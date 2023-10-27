function printResults(res)
{
    console.log('Result: '+res);
}


function calc(val1,val2,printResults)
{
  var res=val1*val2;
    printResults(res);
}

calc(100,200,printResults);

var IMEI=123456789;


module.exports={calculate:calc, pr:printResults, imei:IMEI};