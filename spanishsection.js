var Translate = (function(translate) {
 var 

 
 	solarsystem.getcloset5 = function() {
    	return closest5;
    };
    
    solarsystem.getAge = function() {
      return estimatedAge;
    };
    solarsystem.setAge = function(age) {
      estimatedAge = age;
    };
    solarsystem.getDwarfPlanets = function() {
    	return dwarfPlanets;
    };
    solarsystem.setDwarfPlanets = function(dwarfPlanetsName) {
    	dwarfPlanets.push(dwarfPlanetsName);
    };

    return solarsystem

})(Translate);


