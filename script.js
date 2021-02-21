
function compute()
{
    principal = document.getElementById("principal").value;
    rate=document.getElementById("rate").value;
    years=document.getElementById("years").value;
    result=(principal*rate/100)*years;
    year=2021+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+","+"<br>"+
    "at interest of "+rate+"."+"<br>"+
    "You will receive an amount of "+result+","+"<br>"+
    "in the year "+year;


}
    
function showrate(){
	document.getElementById("id_rate").innerHTML=document.getElementById("rate").value;
}        