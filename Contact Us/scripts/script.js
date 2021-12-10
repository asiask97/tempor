const button=document.getElementById("button");
button.addEventListener('click', submission); 

function submission(){
	
	//vars	
	var visitorName=document.getElementById("name");
	var visitorEmail=document.getElementById("email");
	var visitorMessage=document.getElementById("exampleFormControlTextarea1");
	var errorMessage1=document.getElementById("errorMessage1");
	var errorMessage2=document.getElementById("errorMessage2");
	var errorMessage3=document.getElementById("errorMessage3");
	var locationMap=document.getElementById("map");
	var change=document.getElementById("main");
	
	//user input validation
	if (!visitorName.value){
		errorMessage1.innerHTML+="Name in invalid format, please try again!";	
	}
	else if (!visitorEmail.value){
		errorMessage2.innerHTML+="Email in invalid format, please try again!";
	}
	else if (!visitorMessage.value){
		errorMessage3.innerHTML="You have to type in something!";
	}
	
	//after succesful submission
	if (visitorName.value && visitorEmail.value && visitorMessage.value){
		document.getElementById("submission_form").style.display="none";
		locationMap.classList.toggle("afterSubmission");
		change.classList.toggle("changeBackground");
		document.getElementById("location").style.display="none";
		document.getElementById("walk-ins").innerHTML="Walk-ins also welcome!";
		
		//setting the time out so that alert appears after the background change
		setTimeout(() => {
		alert("thank you for your details "+visitorName.value+", one of our team members will be in touch shortly!"); 
		}, 200)
		return true;
	}
	else{
		return false;
	}
	
    
                
}
	
				

