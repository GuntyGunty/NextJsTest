import React, { Component } from 'react';
import Link from 'next/link';
import './Interests.scss';

class Interests extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <section className="interests">
        <h2 className="interests__title">Интересы</h2>
        <ul className="interests__list">
          <li className="interests__item">
            <Link href="/">
              <a className="interests__item-link">
                <img className="interests__img" src="/static/icon1.png" width="60" height="60" />
                <span className="interests__item-title">eiusmod</span>
                <p className="interests__item-descr">laboris commodo nostrud</p>
              </a>
            </Link>
          </li>
          <li className="interests__item">
            <Link href="/">
              <a className="interests__item-link">
                <img className="interests__img" src="/static/icon2.png" width="60" height="60" />
                <span className="interests__item-title">voluptate</span>
                <p className="interests__item-descr">voluptate cupidatat sint officia esse ea proident</p>
              </a>
            </Link>
          </li>
          <li className="interests__item">
            <Link href="/">
              <a className="interests__item-link">
                <img className="interests__img" src="/static/icon3.png" width="60" height="60" />
                <span className="interests__item-title">Velit</span>
                <p className="interests__item-descr">ullamco eiusmod voluptate cupidatat sint</p>
              </a>
            </Link>
          </li>
          <li className="interests__item">
            <Link href="/">
              <a className="interests__item-link">
                <img className="interests__img" src="/static/icon4.png" width="60" height="60" />
                <span className="interests__item-title">ullamco</span>
                <p className="interests__item-descr">llabore sit magna duis ex id veniam</p>
              </a>
            </Link>
          </li>
        </ul>
      </section>
    )
  }
}

export default Interests;