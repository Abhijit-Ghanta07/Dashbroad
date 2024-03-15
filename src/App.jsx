import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Home, Loader, Error } from "./components/index.js";

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
          path="/auth"
          element={
            <Suspense fallback={<Loader />}>
              <AuthPage />
            </Suspense>
          }
        >
          <Route index element={<Login />} />
        </Route>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
        </Route>
        <Route
          path="/staff"
          element={
            <Suspense fallback={<Loader />}>
              <StaffPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/student"
          element={
            <Suspense fallback={<Loader />}>
              <StudentPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/teacher"
          element={
            <Suspense fallback={<Loader />}>
              <TeacherPage />
            </Suspense>
          }
        ></Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
