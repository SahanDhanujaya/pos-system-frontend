import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/provider/ThemeProvider.tsx'
import { RouterProvider } from 'react-router-dom'
import route from './routes/router.routes.tsx'
import { Provider } from 'react-redux'
import { store } from './state/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey='vite-ui-theme'>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
