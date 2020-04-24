import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

//import bali from "/Users/anchalsingh/Desktop/Project/blog/src/components/pages/images/bali.png";

class Blog1 extends Component{
  render(){
    return(
        <div className="container-fuid">
            <div className="split left">
                <div className="centered">
                <h1 className ="TextStyles"> Why Bali is so beautiful! </h1>
                <img className = "blogImage" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwNhw772p6K_ePA5PKPJAlSxAWjSo7nu2PchI1aV-8-hezQdZ9&usqp=CAU"></img>

                <p className="paragraph"> Bali is surely a paradise on earth, a beautiful island in the Indonesian archipelago. 
                    There is raw untouched beauty everywhere and mother nature has really blessed this island nation. 
                    In fact you need good enough time to explore the whole of Bali. Beauty is there in every small nook and 
                    corner of this island. You can just go on and on exploring Bali and yet you may feel one trip is just not enough.
                    I have fallen in love with Bali totally and would definitely visit Bali a second time again in the future. 
                    Such is the magic of this stunning island. And why not, after all Bali has so many things to make a tourist 
                    fall totally in love with it. Lets see the top 15 things that a tourist must do here in Bali. </p>
    
                </div>
            </div>
            <div className="split right">
                <div className="centered">
                    <h3 className = "TextStyles"><Link to="/">Home</Link></h3>
                    <h3>Top Tweets</h3>
                        <TwitterTimelineEmbed
                        sourceType="list"
                            ownerScreenName="palafo"
                            slug="breakingnews"
                            options={{height: 800}}
                        />
                </div>
            </div>
      </div>
       
    );
  }
}
export default Blog1;
