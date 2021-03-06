import axios from "axios";
import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM, SAVE_SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD } from '../constants/basketConstants'

export const addToBasket = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: BASKET_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            qty
        }
    })

    localStorage.setItem('basketItems', JSON.stringify(getState().basket.basketItems))
}

export const removeFromBasket = (id) => (dispatch, getState) => {
    dispatch({
        type: BASKET_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('basketItems', JSON.stringify(getState().basket.basketItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}