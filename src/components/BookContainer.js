import React from 'react';
import {connect} from 'react-redux';
import {View,Text,Button} from 'react-native';
import {buyBook} from '../redux/index';
 function BookContainer(props){
    return(
        <View>
            <View >
            <Text style={{fontSize:30,marginTop:30,textAlign:'center'}}>
                Number of books - {props.numberOfBooks}
            </Text>
            </View>
            <View style={{marginTop:100}}>
            <Button onPress={props.buyBook} title='Buy Book'/>
            </View>
        </View>
    )
}

const mapStatetoProps=(state)=>{
    return{
        numberOfBooks:state.numberOfBooks
    }

}

const mapDispatchtoProps=(dispatch)=>{
  return{
    buyBook:function(){
          dispatch(buyBook());
      }
  }  
}
export default connect(mapStatetoProps,mapDispatchtoProps) (BookContainer);