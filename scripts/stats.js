var stats = (function(){
	var people = 0;

	// Cache DOM
	var $stats = $('#statsModule');
	var template = $('#stats-template').html();

	//bind events
	events.on('peopleChanged', setPeople);

	render();

	function render(){
		$stats.html(Mustache.render(template, { people, people }));
	}

	function setPeople(newPeople){
		people = newPeople;
		render();
	}

	function destroy(){
		$stats.remove();
		events.off('peopleChanged', setPeople);
	}

	return{
		destroy: destroy
	};

})();