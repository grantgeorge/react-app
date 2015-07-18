/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ContactPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContactPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Contact Me';
    this.context.onSetTitle(title);
    return (
      <div className="ContactPage">
        <div className="ContactPage-container">
          <h1>{title}</h1>
          <p>Grant George</p>
          <p>Email: grant [at] grantgeorge [dot] io</p>
          <p>GitHub: https://github.com/grantgeorge</p>
          <p>StackOverflow: http://stackoverflow.com/users/2403277/grant</p>
        </div>
      </div>
    );
  }

}

export default ContactPage;
