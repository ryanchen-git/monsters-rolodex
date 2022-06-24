import { useState, useEffect } from 'react';

const Card = ({ monster }) => {
  const { id, name } = monster;

  return (
    <div className='card-container' key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
    </div>
  );
};

// class Card extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const { id, name } = this.props.monster;

//     return (
//       <div className='card-container' key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h2>{name}</h2>
//       </div>
//     );
//   }
// }

export default Card;
