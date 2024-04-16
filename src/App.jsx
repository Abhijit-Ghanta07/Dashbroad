import { Suspense, lazy } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const StaffPage = lazy(() => import("./pages/StaffPage"));
const StudentPage = lazy(() => import("./pages/StudentPage"));
const TeacherPage = lazy(() => import("./pages/TeacherPage"));
import { Login, Home, Loader, Error } from "./components/index.js";
const SuspenseLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SuspenseLayout />} errorElement={<Error />}>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/auth" element={<AuthPage />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/staff" element={<StaffPage />}></Route>
      <Route path="/student" element={<StudentPage />}></Route>
      <Route path="/teacher" element={<TeacherPage />}></Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
