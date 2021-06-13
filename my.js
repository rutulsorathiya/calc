function add(n)
{
	document.getElementById("display").innerHTML=document.getElementById("display").innerHTML+n
}
function op(p)
{
	temp=document.getElementById("display").innerHTML
	temp2=p
	if(temp2=='sin' || temp2=='cos' || temp2=='tan')
	{
		document.getElementById("display1").innerHTML= temp2;

	}
	document.getElementById("display").innerHTML=" "
	document.getElementById("display1").innerHTML=temp+temp2
}
function ce()
{
		document.getElementById("display").innerHTML="";
		document.getElementById("display1").innerHTML="";
}
function eq()
{
	

	temp3=document.getElementById("display").innerHTML
	document.getElementById("display1").innerHTML=document.getElementById("display1").innerHTML=temp+temp2 + temp3
	if(temp2=='+')
	{
		temp=parseInt(temp)+parseInt(temp3);
		document.getElementById("display").innerHTML=temp
	}
	if(temp2=='-')
	{	
		temp=parseInt(temp)-parseInt(temp3);
		document.getElementById("display").innerHTML=temp
	}
	if(temp2=='x')
	{	
		temp=parseInt(temp)*parseInt(temp3);
		document.getElementById("display").innerHTML=temp
	}
	if(temp2=='/')
	{	
		temp=parseInt(temp)/parseInt(temp3);
		document.getElementById("display").innerHTML=temp
	}
	if(temp2=='sin')
	{
		temp3=document.getElementById("display").innerHTML;
		document.getElementById("display").innerHTML=Math.sin(parseInt(temp3)*(Math.PI/180));
	}
	if(temp2=='cos')
	{
		temp3=document.getElementById("display").innerHTML;
		document.getElementById("display").innerHTML=Math.cos(parseInt(temp3)*(Math.PI/180));
	}
	if(temp2=='tan')
	{
		temp3=document.getElementById("display").innerHTML;
		document.getElementById("display").innerHTML=Math.tan(parseInt(temp3)*(Math.PI/180));
	}
}





