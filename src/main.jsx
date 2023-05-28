import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "../src/Routes/Router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AuthContext from "./Pages/Providers/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-lg mx-auto">
            <RouterProvider router={router}></RouterProvider>
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthContext>
  </React.StrictMode>
);
