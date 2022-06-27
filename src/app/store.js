// code 
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
        reducer:{
            cake:cakeReducer,
            icecream:icecreamReducer,
            user:userReducer,
            [pokemonApi.reducerPath]: pokemonApi.reducer,
        },
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})
setupListeners(store.dispatch)
export default store