import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Blog2 extends Component{
  render(){
    return(
            <div className="container-fuid">
                <div className="split left">
                    <div className="centered">
                        <h1 className ="TextStyles">Go surfing in Kuta!</h1>
                        <img className = "blogImage" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-JIbxnx33JHhwnzu4gD8ZRhTvBMLIb3xensYyHRuyKeq9je3s&usqp=CAU"></img>

                        <p className="paragraph"> Ever since I was a teenager, I had always wanted to visit Dharamshala because having almost zero knowledge 
                            of the Tibetan culture was something that attracted me so much to the Tibetan monasteries, Tibetan people, 
                            their art and culture. And when my hubby dear offered me a small vacation to the Himalayas, to take a break 
                            from the Delhi pollution after Diwali, I instantly zeroed in Dharamshala and McLeodganj, 
                            the home of the Dalai Lama in India.</p>
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
export default Blog2;
