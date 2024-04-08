import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../modules/home/Home";
import PageNotFound from "../modules/404/PageNotFound";

const DefaultLayout = () => {
  return (
    <Home />
    // Import your main routes here
  );
};

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DefaultLayout />
            </>
          }
        />

        {/* 404 PAGE */}
        <Route element={<PageNotFound />} path="*" />
        {/* <Route element={<NotFoundPage />} path="*" /> */}
      </Routes>
    </Router>
  );
};

export default MainRoutes;
