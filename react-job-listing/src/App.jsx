import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage"
import ErrorPage from "./pages/ErrorPage";
import {createBrowserRouter,
        RouterProvider} from 'react-router-dom';
import CareerPage from "./pages/CareerPage";
import AddJob from "./pages/AddJob";
import AdminLoginPage from "./pages/AdminLoginPage";
import HrLayout from "./layouts/HrLayout";
import HrHomePage from "./pages/HrHomePage";
import HrCareerPage from "./pages/HrCareerPage";
import ApplicationSubmit from "./components/ApplicationSubmit";
import UpdateJob from "./pages/UpdateJob";
import RemoveJobPage from "./pages/RemoveJobPage";
import HrCandidates from "./pages/HrCandidates";
import ApplicationStatus from "./pages/ApplicationStatus";

const appState = 10;
function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/career",
          element:<CareerPage/>
        },
        {
          path:"/apply",
          element:<ApplicationSubmit/>
        },
        {
          path:"*",
          element:<ErrorPage/>
        },
        {
          path:"/status",
          element:<ApplicationStatus/>
        },
      ]
    },
    {
      path:"/hr-login",
      element:<AdminLoginPage/>,
    },
    {
      path:"/hr",
      element:<HrLayout/>,
      children:[
        {
          path:"/hr",
          element:<><HrHomePage/></>
        },
        {
          path:"/hr/career",
          element:<HrCareerPage/>
        },
        {
          path:"/hr/add-job",
          element:<AddJob/>
        },
        {
          path:"/hr/update-job",
          element:<UpdateJob/>
        },
        {
          path:"/hr/remove-job",
          element:<RemoveJobPage/>
        },
        {
          path:"/hr/candidates",
          element:<HrCandidates/>
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
