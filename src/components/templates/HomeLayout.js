import React, { Component } from 'react';
import { Navbar, Footer, Banner, FeedList } from '../organisms';

class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="home-page">
          <Banner />
          <div className="container page">
            <div className="row">
              <div className="col-md-9">
                <FeedList />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomeLayout;
