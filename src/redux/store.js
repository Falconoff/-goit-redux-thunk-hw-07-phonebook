// ========== HW-6 without Local Storage, with Slice =========

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: combineReducers({
//       items: contactsSlice.reducer,
//       filter: filterSlice.reducer,
//     }),
//   },
// });
// ========== HW-7  =========
import { entities, isLoading, error } from './contacts/contactsReducers';

const contacts = combineReducers({
  entities,
  isLoading,
  error,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: {
    // contacts: combineReducers({
    //   items: contactsReducer,
    //   filter: filterSlice.reducer,
    // }),
    contacts,
    // filter: filterSlice.reducer,
  },
});
// ================== HW-6 with redux-persist =========================
/*
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // localStorage

const rootReducer = combineReducers({
  items: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistConfig = {
  key: 'phones',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
*/
