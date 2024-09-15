import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Page from "./components/Page";
import AllBlogsPage from "./pages/AllBlogsPage";
import ViewBlogPage from "./pages/ViewBlogPage";

// git push comment
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Page />} />
      <Route index={true} path="/blog/all-blogs" element={<AllBlogsPage />} />
      <Route
        index={true}
        path="/blog/blog-category/the-quick-brown-fox-jumps-over-the-lazy-dog/"
        element={<ViewBlogPage />}
      />
      {/* blog/{blog-category}/{view-timestamp&blog-id}/{blog-title} */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
