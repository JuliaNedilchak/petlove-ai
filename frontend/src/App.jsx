import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import MainLayout from "./layouts/MainLayout/MainLayout"
import NewsPage from "./pages/NewsPage/NewsPage"
import NoticesPage from "./pages/NoticesPage/NoticesPage"
import FriendsPage from "./pages/FriendsPage/FriendsPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"


const App = () => {
  return (
   <Routes>
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
 <Route  path="home" element={<HomePage/>}/>
 <Route path="news" element={<NewsPage/>} />
 <Route path="notices" element={<NoticesPage/>}/>
  <Route path="friends" element={<FriendsPage/>}/>
  <Route path="login" element={<LoginPage/>}/>
  <Route path="register" element={<RegisterPage/>}/>
  <Route path="profile" element={<ProfilePage/>}/>
  </Route>
</Routes>
  )
}

export default App
