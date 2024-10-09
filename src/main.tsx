import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.tsx";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Dino } from "./components/dino/index.tsx";
import PixiMaker from "./components/PixiMaker/index.tsx";
import { AppProvider, useAppContext } from "./context/app-context.tsx";
import { Header } from "./components/Header/header.tsx";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/runner",
        element: <Dino />,
      },
      {
        path: "/maker",
        element: <PixiMaker />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </ConvexProvider>
  </StrictMode>
);

function Root() {
  const { isOverlayOpen } = useAppContext();
  return (
    <main>
      {!isOverlayOpen && <Header />}
      <Outlet />
    </main>
  );
}
