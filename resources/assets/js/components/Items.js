import React, { Component } from 'react';

export default class Items extends Component {

  render() {

    let shopItem;

    if (this.props.shops) {
      shopItem = this.props.shops.map(shop => {
        //console.log(shop);
        return (
          <article className="col-3 card" key={shop._id.$oid}>
            <div className="card-header">{shop.name}</div>
            <img className="card-img-top" src={shop.picture} alt={shop.name} />
            <div className="card-body">
              <p className="card-text">{shop.city} | {shop.location.coordinates[1]},{shop.location.coordinates[0]}</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Dislike</a>
              <a href="#" className="btn btn-primary">Like</a>
            </div>
          </article>
        )
      });
    }

    return (
      <section className="row">
        {shopItem}
      </section>
    );
  }
}