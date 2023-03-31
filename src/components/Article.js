import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes }) {


    //Under 30 min coffee cup, for every 5 minutes add cup
    //longer than 30 minutes bento box, every 10 add box
    //display minutes in <small>
    
    function emojiGenerator(minutes) {
        let interval = 5
        let emoji = "☕️"
        let emojies = ""

        if (minutes >= 30) {
            interval = 10
            emoji = "🍱"
        }

        for (let i=0; i < minutes; i += interval) {
            emojies += emoji;
        }

        return emojies;
    }



    return (
        <article>
            <h3>{title}</h3>
            <small>{date} | {emojiGenerator(minutes)} {minutes} min read </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;