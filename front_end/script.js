// Define an array of quote objects, each with text and author
const quotes = [
    {
        quoteText: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quoteText: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quoteText: "Do not wait to lead; simply begin. Lead by your actions.",
        author: "Carly Fiorina"
    },
    {
        quoteText: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quoteText: "May the code be with you",
        author: "Nyari Samushonga"
    }
];

// Function to display a random quote
function displayRandomQuote() {
    // Generate a random index based on the array length
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Update the HTML elements with the selected quote and author
    document.getElementById('quote-display').textContent = randomQuote.quoteText;
    document.getElementById('author-display').textContent = "- " + randomQuote.author;
}
