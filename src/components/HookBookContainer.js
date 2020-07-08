import React from 'react';
import {View,Text,Button} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {buyBook} from '../redux/index';
function HookBookContainer(){
    const numberOfBooks=useSelector(state=>state.numberOfBooks);
    const dispatch=useDispatch();
    return(
        <View>
            <View>
            <Text style={{fontSize:35,marginTop:40,textAlign:'center'}}> HookContainer </Text>
            <Text style={{fontSize:25,marginTop:20,textAlign:'center'}}> Number of Book -- {numberOfBooks} </Text>
            </View>
            <View style={{marginTop:30}}>
            <Button onPress={()=>dispatch(buyBook())} title='buyBook'/>
            </View>
        </View>
    )
    
}
export default HookBookContainer;