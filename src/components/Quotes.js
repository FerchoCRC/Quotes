import React, { useState } from 'react';
import quotes from "../quotes.json";

const getRandom = () => Math.floor(Math.random() * quotes.length);

const colors = 
["#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#F9F871"];

const Quotes = () => {

const [quote, setQuote] = useState(quotes[getRandom()]);

const changeQuote = () => {
const random = getRandom()
setQuote(quotes[random]);
}

const color = colors[Math.floor(Math.random() * 6)]
document.body.style =`background: ${color}`


    return (
        <div className="quote" style={{color: color}}>
            <h1>
                {quote.quote}
            </h1>
            <h2>
                {quote.author}
            </h2>
            <button onClick={changeQuote} style={{color: color}}>

            <i className="fa-solid fa-angles-down"></i>
            </button>
        </div>
    );
}

export default Quotes;
