import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { NewDish } from "../pages/NewDish"
import { EditDish } from "../pages/EditDish"
import { Dish } from "../pages/Dish"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/editdish/:id" element={<EditDish />} />
      <Route path="/dish/:id" element={<Dish />} />
    </Routes>
  )
}