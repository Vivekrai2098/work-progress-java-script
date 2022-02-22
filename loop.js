//we make a universal veriable

function shyam(){
for(var i=0;i<3;i++){
	var us=document.getElementById("user").value
	for(j=0;j<=2;j++){
	if(us=="jai"){
	var good=document.getElementById("cio").innerHTML="your user name is correct"
	}
	else if(us!=="jai"){
		var good1=document.getElementById("cio1").innerHTML="your user name is not correct"

	}
	else if(pass!=="jai"){
		var good1=document.getElementById("cio1").innerHTML="your user password is not correct"
		break;

	}
	}
	var pass=document.getElementById("wo").value
	if(us=="jai"){
	if(pass=="jai"){
		alert("you are welcome"+" "+pass)
		break;
	}
	else{
		alert("wrong password")
		var b=i[2]
		if(b==b){
			alert("you blocked")
			break
		}
	}
	}

}
}

/*this is create user name*/
function ne(){
    var x=prompt("enter your name")
    var y=prompt("enter your password")
    alert("Register succeful/Login in")
}