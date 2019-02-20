import React, { Component } from 'react';
import Painting from './Painting';
import paintings from './paintings';

class PaintingList extends Component {
  state = {
    paintings: paintings
  }

  getFilteredPaintings = () =>
    this.state.paintings
      .filter(painting => painting.title.includes(this.props.filter))

  render () {

    return <ul>
    {
      this.getFilteredPaintings().map(painting =>
        <Painting
          selectPainting={this.props.selectPainting}
          key={painting.id}
          painting={painting}
        />
    )
  }
      </ul>
    }
}

export default PaintingList
