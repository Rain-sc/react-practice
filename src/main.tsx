import ReactDOM from 'react-dom/client'
import '@/index.scss'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { RouterProvider } from "react-router-dom"
import router from "./router"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
