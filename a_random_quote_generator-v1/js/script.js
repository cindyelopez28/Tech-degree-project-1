/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
  
 

/*** 
 * `quotes` array 
 //A data structure is necessary to store and organize the quotes in your app. 
 //A basic array of objects is a lightweight way to store information.

In your js/script.js file:

Create a variable named quotes and set it equal to an empty array.
Add a minimum of five empty objects to your quotes array.
***/
//see quotes.js//
// As a fellow Spongebob fan, I got my quote from the website below:
//https://kidadl.com/quotes/best-spongebob-quotes-are-you-ready

var quotes = [
  { 
    quote: "Goodbye everyone, I'll remember you all in therapy.",
    source: 'Plankton',
    citation: 'Spongebob Squarepants,The Algaes Always Greener ',
    year: '2002',

  },
  {
    quote: "The inner machinations of my mind are an enigma.",
    source: 'Patrick',
    citation: 'Spongebob Squarepants,The Secret Box',
    year: '2001',

  },
  {
    quote: "Fortunately, I have enough talent for all of you.",
    source: 'Squidward',
    citation: 'Spongebob Squarepants, Band Geeks',
    year: '2001',
  },
  {
    quote: "If you believe in yourself, with a tiny pinch of magic all your dreams can come true!",
    source: 'Spongebob',
    citation: 'Spongebob Squarepants,Episode 14A',
    year: '1999',
  },
  {
    quote: "Home is where you’re surrounded by other critters that care about you.",
    source: 'Sandy Cheeks',
    citation: 'Spongebob Squarepants,Episode12B',
    year: '1999',
  },
  {
    quote: "A five letter word for happiness…money.",
    source: 'Eugene Krabs',
    citation: 'Spongebob Squarepants,Your Shoes Untied',
    year: '2001',
  },
  {
    quote: "You never really know the true value of a moment, until it becomes a memory.",
    source: 'Spongebob',
    citation: 'Spongebob Squarepants,Sentimental Sponge',
    year: '2001',
  },
  
 

];






/***
 * `getRandomQuote` function
 //Create the getRandomQuote function
The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.

Project Warm Up: Dealing with functions, arrays and random numbers can be confusing at first. For some helpful practice, check out the project Warm Up Random Array Index.
Create a function named getRandomQuote.
In the function body, create a variable to store a random number ranging from zero to the index of the last item in the quotes array.
Lastly, the function should return a random quote object using the random number variable above and bracket notation on the quotes array.
***/

function getRandomQuote (){
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

getRandomQuote();

    //console.log(getRandomQuote);



/***
 * `printQuote` function
 * //The app should display a new quote each time the user clicks the "Show another quote" button using a printQuote function.

Create a function named printQuote.

You will program the printQuote function to perform three tasks: call the getRandomQuote function, use the returned quote object to build a string of HTML and quote properties,
then use that string to display a random quote in the browser.

In the body of the printQuote function, create a variable to store a random quote object from the getRandomQuote() function.

Create another variable to store the HTML string. Set it equal to a string containing two <p> elements. Use this code snippet as a guide for what the HTML string should look like at this point:
***/

function printQuote() {
  let randomQuote = getRandomQuote();

  let html = `<p class="quote" > ${randomQuote.quote} </p>
                <p class="source"> ${randomQuote.source} `

  if (randomQuote.citation) {
    html += `<span  class="citation" >${randomQuote.citation} </span> `
  };

  if (randomQuote.year) {
    
  html += `<span class="year">${randomQuote.year} </span>`

  };

  html += ` </p> `;


  document.getElementById("quote-box").innerHTML = html;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);

