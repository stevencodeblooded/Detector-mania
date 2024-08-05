import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from '../src/shared/Layout'
import HomeScreen from "./container/HomeScreen"
import NewsScreen from "./container/NewsScreen"
import SchedeScreen from "./container/SchedeScreen"
import ProductDetailsScreen from "./container/ProductDetailsScreen"
import ConfrontoScreen from "./container/ConfrontoScreen"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="news" element={<NewsScreen />} />
        <Route path='schede' element={<SchedeScreen />} />
        <Route path='details/:id' element={<ProductDetailsScreen />} />
        <Route path="confronto" element={<ConfrontoScreen />} />
      </Route>
    )
  )
  return (
      <RouterProvider
        router={router}
      />
  )
}

export default App