const quoteContainer = document.getElementById('quote-container'); 
const quoteText = document.getElementById('quote'); 
const authorText = document.getElementById('author'); 
const twitterBtn = document.getElementById('twitter'); 
const newQuoteBtn = document.getElementById('new-quote'); 
let apiQuote = [];

// Show New Quote
function newQuote(){
    // Pick a random quote from apiQuoates array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    // Check if author field is blank and replace it with 'Unkowm'
    if (!quote.author){
        authorText.textContent ='Unkowm';
    }else{
        authorText.textContent = quote.author;
    }
    //Check quote lenght to determine styling
    if (quote.text.length>50){
        quoteText.classList.add('long-quote')
    } else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;

   
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
// Tweet Quote
function tweetQuote(){
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote)

// On load
getQuotes();
