const redux =require('redux');
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const applyMiddleware=redux.applyMiddleware;

// const Buy_Book='Buy_Book';

const initialStateBooks={
    numberOfBooks:10,
}
const initialStatePens={
        numberOfPens:15,
}
// const action={
//     type:Buy_Book,
//     info:'my first redux code'
// }

//action creater:wrapping the action in a single function
function buyBook(){
    return {
        //action
        type:'Buy_Book',
        payload:'my first redux code'
    }
    // action;
}

function buyPen(){
    return {
        //action
        type:'Buy_Pen',
        payload:'my second redux code'
    }
    // action;
}

const booksReducer=(state=initialStateBooks,action)=>{
switch(action.type){
case 'Buy_Book':return{
    ...state,
    numberOfBooks:state.numberOfBooks-1
}
default : return state;
}
}

const pensReducer=(state=initialStatePens,action)=>{
    switch(action.type){
    case 'Buy_Pen':return{
        ...state,
        numberOfPens:state.numberOfPens-2
    }
    default : return state;
    }
    }

    const Reducer=combineReducers({
        book:booksReducer,
        pen:pensReducer
    })

  const  logger=store=>{
return next=>{
    return action=>{
        const result=next(action);
        console.log('middleware log',result);
        return result;
    }
}
    }

const store=createStore(Reducer,applyMiddleware(logger));
console.log('inisitial state',store.getState());
const unsubscribe=store.subscribe(()=>{console.log('updated state value',store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPens());
store.dispatch(buyPens());
store.dispatch(buyPens());
unsubscribe();