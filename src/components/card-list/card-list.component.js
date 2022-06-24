import { useState, useEffect } from 'react';

import Card from '../card/card.component';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

// class CardList extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className='card-list'>
//         {monsters.map((monster) => {
//           return <Card key={monster.id} monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;