// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./reducer";

// export const store = configureStore({
//     reducer: productReducer
// })

// export type RootState = ReturnType<typeof store.getState> 
// export type AppDispatch = typeof store.dispatch

//--------------------------------------------------
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    productReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: {
    //         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]

    //     }
    // })
});
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
