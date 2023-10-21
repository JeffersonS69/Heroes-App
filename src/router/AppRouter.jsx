import { Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { HeroesRoutes } from "../heroes/routes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRouter>
              <Routes>
                <Route path="/*" element={<Login />} />
              </Routes>
            </PublicRouter>
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="/*" element={<HeroesRoutes />} />  */}
      </Routes>
    </>
  );
};
