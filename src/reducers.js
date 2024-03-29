
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE ,ADD_TO_CART, DELETE_FROM_CART} from './actions';

const initialState = {
  cart: [],
  totalAmount: 0,
  loading: false,
  error: null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCart = [...state.cart, action.payload];
      const updatedTotalAmount = state.totalAmount + action.payload.price;                                                                              // Update total amount
      return {
        ...state,
        cart: updatedCart,
        totalAmount: updatedTotalAmount
      };

      case DELETE_FROM_CART:
        const filteredCart = state.cart.filter(item => item.id !== action.payload);
        const updatedTotalAmountAfterDelete = state.totalAmount - state.cart.find(item => item.id === action.payload).price;                            // Update total amount
        return {
          ...state,
          cart: filteredCart,
          totalAmount: updatedTotalAmountAfterDelete
        };

    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};



export default productReducer;
