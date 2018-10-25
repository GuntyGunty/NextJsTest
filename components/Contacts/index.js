import React, { Component } from 'react';
import Link from 'next/link';
import './Contacts.scss';

class Contacts extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div className="contacts">
        <Link href="mailto:gunter0705@gmail.com">
          <a className="contacts__link" title="Почта">
            Почта: <span className="contacts__name">gunter0705@gmail.com</span>
          </a>
        </Link>
        <Link href="tel:89112780349">
          <a className="contacts__link" title="Телефон для связи">
            Телефон: <span className="contacts__name">89112780349</span>
          </a>
        </Link>
      </div>
    )
  }
}

export default Contacts;