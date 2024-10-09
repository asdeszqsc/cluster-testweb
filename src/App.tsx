import GlobalStyles from "@/styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminLayout } from "./home";
import { ServiceHome } from "./page/ServiceHome";

const ServicePage = () => <ServiceHome />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <ServicePage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
