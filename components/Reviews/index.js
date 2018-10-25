import React, { Component } from 'react';
import Link from 'next/link';
import './Reviews.scss';

class Reviews extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <section className="reviews">
        <h2 className="reviews__title">Отзывы</h2>
        <div className="reviews__wrapper">
          <input type="radio" name="point" id="slide1" checked />
          <input type="radio" name="point" id="slide2" />
          <input type="radio" name="point" id="slide3" />
          <div className="reviews__slider">
            <div className="reviews__slide reviews__slide--1">
              <img className="reviews__img" src="/static/client1.png" width="100" height="100" />
              <span className="reviews__item-title">Kate</span>
              <p className="reviews__item-descr">Ea minim exercitation sit velit amet ut nostrud magna quis non proident laboris tempor. Minim cupidatat ad Lorem mollit occaecat ipsum qui in deserunt voluptate occaecat. Quis quis eu veniam id laborum quis ex duis consectetur officia laboris ipsum est minim. Adipisicing laboris Lorem pariatur deserunt minim cupidatat elit ullamco.</p>
            </div>
            <div className="reviews__slide reviews__slide--2">
              <img className="reviews__img" src="/static/client2.png" width="100" height="100" />
              <span className="reviews__item-title">Max</span>
              <p className="reviews__item-descr">Eu laborum in cupidatat proident deserunt tempor laboris culpa excepteur.Elit aliqua nulla sint occaecat velit eu non. Exercitation laboris officia velit nostrud id laborum officia. Dolor quis consectetur aute consectetur consectetur aliqua Lorem quis. Ad deserunt adipisicing mollit tempor. Cupidatat proident dolor tempor reprehenderit ex amet nisi voluptate et cillum qui.Cupidatat proident dolor tempor reprehenderit ex amet nisi voluptate et cillum qui.</p>
            </div>
            <div className="reviews__slide reviews__slide--3">
              <img className="reviews__img" src="/static/client3.png" width="100" height="100" />
              <span className="reviews__item-title">Nina</span>
              <p className="reviews__item-descr">llabore sit magna duis ex id veniam</p>
            </div>
          </div>
          <div className="reviews__controls">
            <label className="reviews__label" for="slide1"></label>
            <label className="reviews__label" for="slide2"></label>
            <label className="reviews__label" for="slide3"></label>
          </div>
        </div>
      </section>
    )
  }
}

export default Reviews;