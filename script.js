/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.
*/


var currentYear = new Date().getFullYear();

class Element {
	constructor(name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
	
}

class Park extends Element {
	constructor(name, buildYear, numberOfTrees, parkArea) {
		super(name, buildYear);
		this.numberOfTrees = numberOfTrees;
		this.parkArea = parkArea;
	}
	
	treeDensity() {
		const density = (this.numberOfTrees / this.parkArea).toFixed(1);
		console.log(`${this.name} has a tree density of ${density} trees per acre. Area: ${this.parkArea} acres.`);
	}
	
	isMoreThan(limit) {
		return (this.numberOfTrees >= limit) && console.log(`${this.name} has more than ${limit} trees.`);
	}
};


class Street extends Element {
	constructor(name, buildYear, streetLength, size = 3) {
		super(name, buildYear);
		this.streetLength = streetLength;
		this.size = size;
	}
	
	classifyStreet() {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');
		console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street`);
	}
};

function getAverage(arr) {
		const total = arr.reduce((prev, cur, index) => prev + cur, 0);
		return [total, total / arr.length];
}

const parks = [new Park('Central Park', 1853, 20000, 843), 
			 new Park('Sakura Park', 1912, 2500, 2.067), 
			 new Park('Cherry Tree Park', 1957, 970, 1.5),
			 new Park('Morningside Park', 1895, 10355, 30),
			 new Park('Tiny Park', 1995, 255, 0.5)
			];
		
const streets = [new Street('Central Park blvd.', 1830, 7, 5), 
			 new Street('Balboa ave', 1830, 5, 5), 
			 new Street('Cherry Pot st.', 1910, 3, 4),
			 new Street('Torrey Pines st.', 1960, 2),
			 new Street('La Jolla st.', 1995, 1, 2),
			 new Street('Tiny pkwy', 1998, 0.5, 1)
			];


function showReport() {
	console.log('----- PARKS REPORT -----');
	
	// Average age of parks
	const agesParks = parks.map(cur => currentYear - cur.buildYear);
	const [totalAge, avgAge] = getAverage(agesParks);
	console.log(`Our ${parks.length} parks have an average age of ${avgAge} years.`);
	
	// Tree Density 
	parks.forEach(el => el.treeDensity());
	
	// Which park has more than 1000 trees
	parks.forEach(el => el.isMoreThan(1000));
	
	
	console.log('----- STREETS REPORT -----');
	
	// Total length and average lenght of streets
	const lengthStreet = streets.map(cur => cur.streetLength);
	console.log(lengthStreet);
	const [totalLength, avgLength] = getAverage(lengthStreet);
	console.log(`Our ${streets.length} streets have a total length ${totalLength} miles, with an average of ${avgLength.toFixed(2)} miles`);
	
	// Name, year of build and classification of streets
	streets.forEach(el => el.classifyStreet());
}

showReport();
