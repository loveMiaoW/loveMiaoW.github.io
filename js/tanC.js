let modalHeight = document.getElementById('modal').offsetHeight;
	  document.getElementById('modal').style.marginTop=-(modalHeight/2)+"px";
	  
	  function fnClose(){
		  document.getElementById('modal').setAttribute("class","hidden");
		  document.getElementById('body').setAttribute("class","body-class");
	  };
