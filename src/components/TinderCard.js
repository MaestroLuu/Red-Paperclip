import React, { useState } from "react";
import TinderCard from "react-tinder-card";

export default function TinderCards() {
    const [items, setItems] = useState([
        {
            name: "paperclip",
            url: "https://www.mediamatic.net/image/2016/12/14/undefined-545394688.jpg%28mediaclass-full-width.c3083fedae46a95f1139ff9d5833b1b6b8e20a69%29.jpg"
        },
        {
            name: "candle",
            url: "https://media.cnn.com/api/v1/images/stellar/prod/211102125834-candle-homesickjustmarried.jpg?q=x_0,y_0,h_956,w_1698,c_fill/h_270,w_480"
        }
    ]);

    return (
        <div>       
            <h1>TinderCards</h1>
            {items.map(item => (
                <TinderCard
                    className="swipe"
                    key={item.name}
                    preventSwipe={['up','down']}
                >
                    <div 
                    style={{ backgroundImage: `url(${item.url})` }}
                    className="card">
                        <h3>{item.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
}