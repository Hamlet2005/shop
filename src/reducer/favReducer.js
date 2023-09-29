const defaultState = {
	favorites: []
}

const changePrice = (itemArray, item, name) => {
	if(name === "inc"){
		itemArray.forEach(reduxItem => {
			if(reduxItem.id === item.id){
				reduxItem.total += reduxItem.price
			}
		});
	}
	else if(name === "dec"){
		itemArray.forEach(reduxItem => {
			if(reduxItem.id === item.id){
				reduxItem.total -= reduxItem.price
			}
		});
	}
	defaultState.favorites = itemArray
	return defaultState
  };

export const favReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_FAVORITE":
			return{
				...state,
				favorites: [...state.favorites, action.fav]
			}
		case "DEL_FAVORITE":
			return{
				...state,
				favorites: [...state.favorites.filter(item => item.id !== action.id)]
			}
		case "changePrice":
			return changePrice(state.favorites, action.item, action.name)
			
		default:
			return state
	}
}