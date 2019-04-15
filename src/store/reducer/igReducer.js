const initState = {}
// const igReducer = (state = initState, action) => {
//   console.log(action)
//   switch (action.type) {
//     case 'GET_IG':
//       console.log('Instagram fetched', action)
//       return state;
//     case 'GET_IG_ERROR':
//       console.log('Instagram fetch error', action.err)
//       return state;
//     default:
//       return state;
//   }



// }
// const igReducer = (state = initState, action) => {
//   if (action.type === "GET_IG") {
//     console.log(action)
//     return {
//       ...state,
//       igUser: action.user.data
//     }
//   } else {
//     return {
//       ...state
//     }
//   }
// }
const igReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_IG_USER':
      return {
        ...state,
        igUser: action.user.data
      }
    case 'GET_IG_DATA':
      console.log(action)
      return {
        ...state,
        igData: action.user
      }
    case 'GET_IG_ERROR':
      console.log('ig fetch error', action.err)
      return state;
    default:
      return state;
  }



}


export default igReducer