import { Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { HeroesRoutes } from "../heroes/routes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
