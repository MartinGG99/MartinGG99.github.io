document.addEventListener('DOMContentLoaded', function () {
	
	document.querySelectorAll('section > div').forEach(div => {
	  div.style.display = 'none';
	});
	document.querySelector('#Experiencia').style.display = 'block';
  
	
	document.querySelectorAll('nav a').forEach(link => {
	  link.addEventListener('click', function (event) {



		event.preventDefault();
  

	
		const targetId = this.getAttribute('href');
  

	
		document.querySelectorAll('section > div').forEach(div => {
		  div.style.display = 'none';
		});
		document.querySelector(targetId).style.display = 'block';
	  });
	});
  });