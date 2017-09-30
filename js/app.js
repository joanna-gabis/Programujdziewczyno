'use strict'

document.addEventListener('DOMContentLoaded', function() {
//Zadanie 1
		
	var menu = document.querySelector('.dropdown');
	var forDropdown = document.querySelector('.for-dropdown');

	forDropdown.addEventListener('mouseover', function(){
	//console.log('hello');}

	menu.style.display = 'block';});

	forDropdown.addEventListener('mouseout', function(){
	//console.log('hello');}

	menu.style.display = 'none'});

//Zadanie 2


	//console.log(buttons);
	//console.log(buttons[0].previousElementSibling);
		var buttons = document.querySelectorAll('.read-more');
		
	function showHide() {
		  var textArea = this.previousElementSibling;
		
		  if (textArea.style.display === 'none' || textArea.style.display === '') {
			textArea.style.display = 'block';
			this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
		  } else {
			textArea.style.display = 'none';
			this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
		  };
	};

	//buttons[0].addEventListener('click', showHide); 
	for (var i = 0; i <= buttons.length-1; i++) {
        buttons[i].addEventListener('click', showHide);
    }

	
//Zadanie 3
	var navlist = document.querySelector('.nav-list');
	//console.log(navlist);
	
	window.addEventListener('scroll', function() {
      navlist.style.borderBottom = '1px solid #7f7f7f';
    });
	
	
	
});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
