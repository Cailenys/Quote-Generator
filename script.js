let apiQuote = [];

// Show New Quote
function newQuote(){
    // Pick a random quote from apiQuoates array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}
// Get Quotes From api

async function getQuotes(){
    const apiUrl ='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch(error){
        // Catch error
    }
}

// On load
getQuotes();
