import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { updateProduct } from './Actions/productsActions'
import { bindActionCreators } from 'redux'
 


class App extends React.Component {

  constructor(){
    super();

    this.inputChanged=this.inputChanged.bind(this);
  }
  
  inputChanged(event){
    
    this.props.onUpdateProduct(event.target.value);
  }

  render(){
    return (
      <div className="App">
      <input onChange={this.inputChanged}/>
      {this.props.products}
     
     
      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch,props) => {

  return bindActionCreators({
    onUpdateProduct:updateProduct ,
    deneme:props.aRandomProps

  },dispatch)
  
}

const mapStateToProps = (state,props) => {
 
  return{
    products:state.products ,
    owner:state.owner ,
    randomProps:props.aRandomProps
  }
}


 
const mergeProps = (propsFromState,propsFromDispatch,ownProps) => {

  console.log(propsFromState,propsFromDispatch,ownProps)
  
  return Object.assign({},ownProps,propsFromState,propsFromDispatch)

}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(App);
