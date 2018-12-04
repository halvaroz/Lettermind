'use strict';

document.addEventListener("DOMContentLoaded", function(event)
{	

	setRustine();

	window.addEventListener('resize',debounce(function(){
			setRustine();

		},180));/*Jeu - Au clic sur le bouton power*/

    $('#light').click(function(){
    	if (gamestate === 0){
    		document.body.className = "loading";
    		if(gameEverSet === false) {
    			setGame()
    			gameEverSet = true
    		}

    		$('#light').css('background-position','-178px -178px');
    		activate(['start']);
    	
    		playSound(2);

	    	activate(['lvlchange',
							'start',
							'instructions',
							'topscores',
							'infos',
							'stats',
							'comments']);
	    		
	    	$('#js-g-header').toggleClass('shadow');
	    	$('#js-g-body').toggleClass('shadow');
	    	$('#js-g-rustine').toggleClass('shadow');
	    	$('#js-g-rustine').html('<p class="welcome">Bienvenue !</p>');

	    	gamestate=1;
	    	document.body.className = "";
	    } else {
	    	document.body.className = "loading";
	    	playSound(3);
	    	$('#light').css('background-position','-178px -94px');
	    	$('#start').css('background-position','-10px -10px');
	    	

	    	inactivate(['help','giveup','newgame','lvlchange','start',
				'instructions','topscores','infos','stats','comments']);



	    	$('#start').on('click',startGame);
	    	$('#start').prop('disabled','true');

	    	for (let i=0;i<13;i++){
				sleepingTry(i);
			}
	    	$('#js-g-header').toggleClass('shadow');
	    	$('#js-g-body').toggleClass('shadow');
	    	$('#js-g-rustine').toggleClass('shadow');
	    	$('#js-g-rustine').empty();
	    	$('.tentries').val('');
	    	$('.tentries').attr('disabled','true');

	    	$('.gameline').css('display','inline-block');

	    	$('#js-stats').empty();
	    	$('.result').empty();
	    	$('#winners').empty();
	
			if($('#infos').hasClass('help')) {
				$('#js-further').toggle('slow');
				$('#infos').removeClass('help');
			}

			if ($('#instructions').hasClass('help')){
				$('#js-rules').toggle('slow');
				$('#instructions').removeClass('help');
			}


			difficulty=3;
			setDifficulty(difficulty);

	    	gamestate=0;
	    	document.body.className = "";
	    }
    });



