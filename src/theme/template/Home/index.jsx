import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import DocumentTitle from 'react-document-title';

import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

class Home extends React.Component {
  constructor() {
    super(...arguments);
    this.tweenAnim = { y: 30, opacity: 0, type: 'from', ease: 'easeOutQuad' };
  }

  render() {
    return (
      <DocumentTitle title="Ant Motion - 高效的动效设计解决方案">
        <div className="home-wrapper">
          <Banner />
          <Page1 />
          <Page2 pageData={this.props.pageData} utils={this.props.utils} tweenAnim={this.tweenAnim} />
          <Page3 pageData={this.props.pageData} utils={this.props.utils} tweenAnim={this.tweenAnim} />
          <Page4 tweenAnim={this.tweenAnim} />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;