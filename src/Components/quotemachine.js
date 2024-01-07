import { useState } from 'react';
import './Quotemachine.css';
import { TweetIcon } from './tweet.icon';
import { TurblrIcon } from './tumblr.icon';


function Quote() {
    const [quote, setQuotes] = useState("");

    const getQuote = () => {
        fetch('https://type.fit/api/quotes ')
            .then((res) => res.json())
            .then((data) => {
                let randomNum = Math.floor(Math.random() * data.length);
                setQuotes(data[randomNum]);
            });
    }


    const handleClickFunction = (e) => {
        const body = document.querySelector("body");
        body.style.background = getRandomColor();

    };

    const getRandomColor = () => {
        const letter = '123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letter[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const handleCOmbine = () => {

        getQuote();
        handleClickFunction()

    }
    return (
        <div className="wrapper" >
            <div id='quote-box'>
                <div className="quote-text">
                    <span id="text">"{quote.text} You cannot find peace by avoiding life."</span>
                </div>
                <div className='quote-Author'>
                    <span id="Author">-{quote.author}-</span>
                </div>
                <div className="buttons">
                    <a href="https://twitter.com/intent/tweet">
                        <a><TweetIcon /></a>
                    </a>
                    <a className="buttons" href="https://www.tumblr.com/register">
                        <a><TurblrIcon /></a>
                    </a>
                </div>
                <div className='button' id='new-quote' >
                    <button onClick={handleCOmbine} >New Quote</button>
                </div>
            </div>
            <div className='note'>
                <a href="https://codepen.io/hezag/">  By hezag`</a>
            </div>
        </div>

    )
}
export default Quote;