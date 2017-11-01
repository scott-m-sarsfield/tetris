var Tetris = require('./tetris');
var $ = require('jquery');


var dummyGame = new Tetris();

// LEEEEEROOOOOYY  JEEEEEEEEEENNNNNKIIIIIINNNNSS
$(document).ready(function(){
	dummyGame.splash();
	$("#restart").click(function(){dummyGame.launchGame();});
});


// touch plugin (sorta)

global.touchAction =
function touchAction(id,action,opp_action,executable,arg1){
	//alert("called"+id+action);
	$(id).bind(action,function(){
		//alert('pressed');
		$(id).unbind(opp_action);
		event.preventDefault();
		if (arg1 !== undefined) executable(arg1);
		else executable();

	});
};
