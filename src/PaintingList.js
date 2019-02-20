import React, { Component } from 'react';
import Painting from './Painting';
import paintings from './paintings';

class PaintingList extends Component {
  state = {
    paintings: paintings
  }

  render () {
  return <ul>
  {
    this.state.paintings.filter(painting => painting.title.includes(this.props.filter)).map(painting =>
      <Painting key={painting.id} painting={painting} />
    )
  }
  </ul>
}
}

export default PaintingList
