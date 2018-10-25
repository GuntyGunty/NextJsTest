import React, { Component } from 'react';
import Link from 'next/link';
import './Social.scss';

class Social extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div className="social">
        <Link href="https://github.com/GuntyGunty">
          <a className="social__link" title="GitHub">
            <img className="social__img" src="/static/github-logo.png" width="40" height="40" /> 
          </a>
        </Link>
        <Link href="https://vk.com/ps050">
          <a className="social__link" title="Вконтакте">
            <img className="social__img" src="/static/vk.png" width="40" height="40" /> 
          </a>
        </Link>
        <Link href="https://www.facebook.com/gunter0705">
          <a className="social__link" title="Facebook">
            <img className="social__img" src="/static/facebook-logo-button.png" width="40" height="40" /> 
          </a>
        </Link>
      </div>
    )
  }
}

export default Social;