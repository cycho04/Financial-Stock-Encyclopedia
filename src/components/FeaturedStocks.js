import React from 'react';
import { connect } from  'react-redux';




const FeaturedStocks = props => {
    
    if(props.state.symbols.symbols){
        const stockLength = Math.floor(Math.random() * props.state.symbols.symbols.data.length);
        console.log(props.state.symbols.symbols.data[stockLength]);
    }
    // const randomStock = Math.random() * props.state.
    return <div>Featured</div>
}

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(FeaturedStocks);