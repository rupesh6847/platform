import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AppWrapper } from './components/common/PageMeta.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.js';
import { socket, SocketContext } from './context/SocketContext.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AppWrapper>
            <SocketContext.Provider value={socket}>
              <App />
              <Toaster />
            </SocketContext.Provider>
          </AppWrapper>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
