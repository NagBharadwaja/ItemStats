var person = (function(){
	var people= ["Naga", "Phenomenal"];
		
	// Cache DOM
	var $el = $('#peopleModule');
	var $button = $el.find('button');
	var $input = $el.find('input');
	var $ul = $el.find('ul');
	var template = $el.find('#people-template').html();
	
	// Bind Events
	$button.on('click', addPerson);
	$ul.delegate('i.del', 'click', deletePerson);

	_render();
	
	// Render
	function _render(){
		$ul.html(Mustache.render(template, {people: people}));
		//stats.setPeople(people.length);
		events.emit('peopleChanged', people.length);
	}

	// Add Person
	function addPerson(value){
		var name = (typeof value === 'string') ? value: $input.val();
		people.push(name);
		_render();
		$input.val('');
	}

	// Delete Person
	function deletePerson(event){
		var i;
		if(typeof event === 'number'){
			i = event;
		}else{
			var $remove = $(event.target).closest('li');
			i = $ul.find('li').index($remove);	
		}
		
		people.splice(i, 1);
		_render();
	}

	return{
		addPerson: addPerson,
		deletePerson: deletePerson
	};
})();



/*var people = [];
var template = $('#people-template').html();

$('#peopleModule').find('button').on('click', function(){
	people.push($('#peopleModule').find('input').val());
	$('#peopleModule').find('input').val('');
	// data for mustache template
	var data = {
		people: people
	};
	$('#peopleModule').find('ul').html(Mustache.render(template, data));
});

$('#peopleModule').find('ul').delegate('i.del', 'click', function(e){
	var $remove = $(e.target).closest('li');
	var i = $('#peopleModule').find('ul').find('li').index($remove);
	$remove.remove();
	people.splice(i, 1);
});*/