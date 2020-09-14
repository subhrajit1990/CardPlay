if (typeof (SUBU) == "undefined") {
    SUBU = {}
}

SUBU.CardPlayStarts = new function(){
	this.init = function(){
		var counter;
		counter = new cardPlay();
		counter.init("timer", 180); // expects in seconds
	}
}

su_cardPlay = SUBU.CardPlayStarts;
