import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../ui";
import { DC, Marvel } from "../heroes";
import { Login } from "../auth";



export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/dc" element={<DC />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
