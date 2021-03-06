import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


class Blog3 extends Component{
    render(){
        return(
                <div className="container-fuid">
                    <div className="split left">
                        <div className="centered">
                        <h1 className ="TextStyles">Why temples are so popular!</h1>
                            <img className = "blogImage" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScumbqHZDpAn9Ht2cxhL38VdvLOUbRGoTDgRODSo6gNtGxzUCj&usqp=CAU"></img>

                            <p className="paragraph"> Bali is so aptly called the 'Land of a Thousand Temples' . 
                                Every nook and corner of this island is beautifully adorned with a strikingly beautiful 'Pura' or temple. 
                                Balinese people are extremely religious and majority of them are Hindus, 
                                that's why you get to see a temple in almost every courtyard of the private houses in Bali. 
                                Each temple is unique in its own way and some of the most famous public temples 
                                of Bali will take your breath away due to their stunning locations. Some are located on the cliffs,
                                some on the shoreline, some are beautifully placed in gardens, 
                                some in the middle of a lake and some even on the flanks of an active volcano. </p>
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
export default Blog3;
