var gettablinks = document.getElementsByClassName('tablinks');
var gettabpanels = document.querySelectorAll('.tab-panel');
var getbtncloses = document.querySelectorAll('.btn-close');
// console.log(getbtnclose);

function gettab(evn,linkid){

	gettabpanels.forEach(function(gettabpanel){
		gettabpanel.style.display = "none";
	});

	for(let i = 0; i < gettablinks.length; i++){
		// gettablinks[i].classList.remove('active');
		gettablinks[i].className = gettablinks[i].className.replace(" active","");

		getbtncloses[i].addEventListener('click',(e)=>{
			e.target.parentElement.style.display = "none";
			// e.target.parentElement.parentElement.previousElementSibling.children.children.classList.remove("active");
		});
	}

	document.addEventListener('click',function(e){

		switch(e.target.id){
			case "home1":
				gettablinks[0].classList.remove("active");
				break;
			case "profile1":
				gettablinks[1].classList.remove("active");
				break;
			case "contact1":
				gettablinks[2].classList.remove("active");
				break;
			case "settings1":
				gettablinks[3].classList.remove("active");
				break;
		}

	});

	document.getElementById(linkid).style.display = "block";

	// evn.target.className = "tablinks active";
	evn.target.className = evn.target.className.replace("tablinks","tablinks active");

}

document.getElementById('autoclick').click();