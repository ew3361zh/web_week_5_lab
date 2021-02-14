/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

// console.log('Lab. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

// Extract the latitude value, and log it to the console.
let latitudeValue = iss_location.iss_position.latitude
console.log('The latitude is ' + latitudeValue)
// Extract the longitude value, and log it to the console.
let longitudeValue = iss_location.iss_position.longitude
console.log('The longitude is ' + longitudeValue)



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates["CHF"] = 1.1787
console.log(rates)

// if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)
let audExchangeRate = rates["AUD"]
// below statement gets value by itself
let amountInAud1 = (audExchangeRate*100).toFixed(2)
console.log(amountInAud1)
//this time the variable holds the calculated value within a statement and is a little 
//more confusing in code but more readable in the console
let amountInAud = `You have ${(audExchangeRate*100).toFixed(2)} AUD`
console.log(amountInAud)

// write code to identify the currency symbol that has the highest exchange rate 
// compared to Euros.
// In other words, identify the property with the largest value. the answer is BRL 
// (Brazilian Real) at 3.8959 BRL to 1 Euro.

//I'm not clear if we're supposed to pull the value out and find the max or assume we know
//the max and just pull out the property name. I did both to try and figure them both out.

//first way - harder. Start by building a blank array to hold the exchange values in
let exchangeArray = []
//use a for loop to pull them each out and push them into the array
for ( let rate in rates) {
  exchangeArray.push(rates[rate])
}

//create a new variable to hold the max rate
let biggestRate = 0
//do a forEach loop over the array built above
//compare the values through each time and work towards putting the largest
//value in the biggestRate variable
exchangeArray.forEach ( function(rate, index) {
  if (rate < exchangeArray[index +1]) {
    biggestRate = exchangeArray[index +1]
  } else {
    return
  }
})
//print to the console - it does produce the largest value
console.log(biggestRate)
//alternative (quicker) method for getting max value in array
let maxRate = Math.max.apply(Math, exchangeArray)
console.log(maxRate)

//If we were just supposed to pull out the property associated with the largest value:
//do a for loop over the rates object
for (let country in rates) {
  if (rates[country] === biggestRate) { //look for the instance of where the value is the largest
    console.log(country) //print out the property associated with that value
  } 
}

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// print Gary Oldman's cat's name
let oldmanCatName = cats_and_owners[1].cat //gary oldman is in index 1 of the cats_and_owners array
console.log(oldmanCatName) 

// Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push({name : 'Taylor Swift', cat: 'Meredith'})
console.log(cats_and_owners)

// write a loop to print each cat owner, and their cat's name, one per line. 
// Use the forEach style.

cats_and_owners.forEach( function(pairOfOwners){ //pair of owners represents each element which is a pair of owner and cat object
  console.log('Name of Owner: ' + pairOfOwners.name + '; Name of Cat: ' + pairOfOwners.cat)//this prints out each line with comma in between
})

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}

// print the full name of the Literature Nobel laureate.
let litCategory = nobel_prize_winners_2017.prizes[3] //literature is the 3rd object element in the prizes array
let fullNameLitLaureate = litCategory.laureates[0].firstname + ' ' + litCategory.laureates[0].surname //once in the lit object is reached, get the first laureate [0]th element and first and last names
console.log('The name of the 2017 Nobel Laureate for Literature is ' + fullNameLitLaureate) //added some string to make it pretty

// print the ids of each of the Physics Nobel laureates. 
//Your code should still work without modification if a laureate was added, or removed.
let prizeList = nobel_prize_winners_2017.prizes //break down to prizes array
let physLaureates = prizeList[0].laureates //physics is the 0th element of the prizelist array
physLaureates.forEach ( function(laureateID) { //forEach loop to get the ids out of each laureates element
  console.log(laureateID.id)
})

// write code to print the names of all of the prize categories 
// (So your output would start physics, chemistry, medicine... ).
prizeList.forEach (function(categoryName){ //use prizelist from above to cycle through with a forEach loop and grab the category names
  console.log(categoryName.category)
})

// write code to print the total number of prize categories
let prizeCategoryCount = 0 //start by initializing the prizeCategoryCount
prizeList.forEach (function(categoryName){ //forEach loop that ups the count each time through the prize list hits on a category name element
  prizeCategoryCount++
})

console.log('The total number of prize categories is ' + prizeCategoryCount) //add some string to make it pretty

// write code to count the total number of laureates from 2017. 
// have a good look at how the JSON is structured, and think 
// about what loop(s) you'll need to write.

let laureateCounter = 0 //initialize laureateCounter variable
prizeList.forEach( function(laureateList) { //run a forEach loop first on the prizelist array from above
  laureateList.laureates.forEach( function (winner) { //within that, have another forEach loop to run through the laureates arrays and up the count 1x/laureate 
    laureateCounter++
  })
})

console.log('The total number of 2017 laureates is ' + laureateCounter)