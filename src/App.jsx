import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Home } from "./components/index.js";
import New from "./new/New.jsx";
const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const StaffPage = lazy(() => import("./pages/StaffPage"));
const StudentPage = lazy(() => import("./pages/StudentPage"));
const TeacherPage = lazy(() => import("./pages/TeacherPage"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <AuthPage />
            </Suspense>
          }
        >
          <Route index element={<Login />} />
        </Route>
        <Route
          path="/home"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <HomePage />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
        </Route>
        <Route
          path="/staff"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <StaffPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/student"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <StudentPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/teacher"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <TeacherPage />
            </Suspense>
          }
        ></Route>

        <Route path="/new" element={<New />} />
      </Routes>
    </>
  );
}

export default App;
