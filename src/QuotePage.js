import React from 'react';
import quotesData from './quote.json';

const QuotePage = () => {
   const { quotes } = quotesData;

   return (
      <div className="quote-page">
         <h1>Geek Food Quotes</h1>
         <div className="quote-list">
            {quotes.map((quote, index) => (
               <div key={index} className="quote">
                  <p>{quote.quote}</p>
                  {quote.author && <p className="author">- {quote.author}</p>}
               </div>
            ))}
         </div>
      </div>
   );
};

export default QuotePage;
