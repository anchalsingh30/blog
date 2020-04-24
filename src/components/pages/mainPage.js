import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Mainpage extends Component{
  render(){
    return(
     
      <div className="container-fuid">
        <div className="split left">
        <div className="centered">
                <div className="blog1">
                  <h3 className ="TextStyles"><Link to="/Blog1">Why Bali is so beautiful!</Link></h3>
                  <h5 className="date"> Date : Jan 20/2019</h5>
                  <img className = "frontImage" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwNhw772p6K_ePA5PKPJAlSxAWjSo7nu2PchI1aV-8-hezQdZ9&usqp=CAU"></img>
                  <p className="summary">The Indonesian island of Bali is a travel destination that has a little bit of everything. Although most famous for its beautiful beaches, the list of things to see and do on the island does not end there. Bali is home to snorkeling and scuba sites, active volcanoes, green jungles and exotic temples.  </p>
                </div>
                <div className="blog2">
                  <h3 className ="TextStyles"><Link to="/Blog2">Go surfing in Kuta!</Link></h3>
                  <h4 className="date"> Date : Feb 22/2019</h4>
                  <img className = "frontImage" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-JIbxnx33JHhwnzu4gD8ZRhTvBMLIb3xensYyHRuyKeq9je3s&usqp=CAU"></img>
                  <p className="summary">KUTA beach surf spot. The most famous of all of Bali's beaches, primarily because tourism in Bali began with Kuta Beach. The long stretch of golden sand provides a beautiful coastline for beachgoers and a safe bottom for surfers of all levels</p>
                </div>
                <div className="blog3">
                  <h3 className ="TextStyles"><Link to="/Blog3">Why temples are so popular! </Link></h3>
                  <h4 className="date"> Date : March 24/2019</h4>
                  <img className = "frontImage" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScumbqHZDpAn9Ht2cxhL38VdvLOUbRGoTDgRODSo6gNtGxzUCj&usqp=CAU"></img>
                  <p className="summary">Lempuyang Temple is one of Bali's oldest temples. It's believed to predate the majority of Hindu temples on the island. The main temple is at 1,175m above sea level, up on the peak of the namesake Mount Lempuyang in East Bali. 
                  The heights are reachable via a steep staircase of over 1,700 steps. </p>
                </div>
            </div>
            
        </div>
        <div className="split right">
          <div className="centered">
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


export default Mainpage;
