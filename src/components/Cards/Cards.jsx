// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import CardItem from '../CardItem';
// import { itemsFetchData } from '../../actions/items';

// import './Cards.scss';

// const Cards = (props) => {
//   const { fetchData } = this.props;
//   useEffect(() => {
//     fetchData('http://localhost:5000/bestsellers');
//   });
//   return (
//     <div className="container-cards">
//       <img className="img-back" src="./img/cards-back.png" alt="back"></img>
//       <h2 className="about-our">Our best</h2>
//       <div className="cards">
//         <CardItem />
//         <CardItem />
//         <CardItem />
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     items: state.items,
//     hasErrored: state.itemsHasErrored,
//     isLoading: state.itemsIsLoading,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: (url) => dispatch(itemsFetchData(url)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Cards);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardItem from '../CardItem';
import { itemsFetchData } from '../../actions/items';
import Spinner from '../Spinner';

import './Cards.scss';

class Cards extends Component {
  componentDidMount() {
    this.props.fetchData('http://localhost:5000/bestsellers');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <Spinner />;
    }
    return (
      <div className="container-cards">
        <img className="img-back" src="./img/cards-back.png" alt="back"></img>
        <h2 className="about-our">Our best</h2>
        <div className="cards">
          {this.props.items.map((item) => {
            return <CardItem item={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
