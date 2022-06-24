import { useState, useEffect } from 'react';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div>
    <input
      className={className}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

// class SearchBox extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <input
//           className={this.props.className}
//           type='search'
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}
//         />
//       </div>
//     );
//   }
// }

export default SearchBox;
