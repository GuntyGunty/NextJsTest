import React, { Component } from 'react';
import Link from 'next/link';
import './Banner.scss';

class Banner extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <section className="banner">
        <div className="banner__container">
          <img src="/static/ava.png" width="300" height="400" />
          <p className="banner__text">
            <h2 className="banner__title">Velit ullamco eiusmod voluptate cupidatat sint officia</h2>
            <span>Velit ullamco eiusmod voluptate cupidatat sint officia esse ea proident. Proident non ea duis laboris commodo nostrud. Pariatur nisi incididunt labore sit magna duis ex id veniam. Velit ullamco eiusmod voluptate cupidatat sint officia esse ea proident. Proident non ea duis laboris commodo nostrud. Pariatur nisi incididunt labore sit magna duis ex id veniam. Velit ullamco eiusmod voluptate cupidatat sint officia esse ea proident. Proident non ea duis laboris commodo nostrud. Pariatur nisi incididunt labore sit magna duis ex id veniam. Velit ullamco eiusmod voluptate cupidatat sint officia esse ea proident. Proident non ea duis laboris commodo nostrud. Pariatur nisi incididunt labore sit magna duis ex id veniam.  Proident non ea duis laboris commodo nostrud. Pariatur nisi incididunt labore sit magna duis ex id veniam. Velit ullamco eiusmod voluptate cupidatat sint officia esse ea proident. Proident non ea duis laboris commodo nostrud. Pariatur nisi incididunt labore sit magna duis ex id veniam.</span>
          </p>
        </div>
      </section>
        )
  }
}

export default Banner;