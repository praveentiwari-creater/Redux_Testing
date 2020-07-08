import React from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import BookContaner from './src/components/BookContainer';
import HookBookContainer from './src/components/HookBookContainer';
import store from './src/redux/store';
const App=()=>{
  return(
<Provider store={store}>
    <View>
      <BookContaner/>
      <HookBookContainer/>
    </View>
    </Provider>
  )
}
export default App;