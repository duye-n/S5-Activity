import { createBrowserRouter } from "react-router-dom";
import ClassExample from "./class/class";
import UseHoc from "./components/Hoc";
import Memoryzation from "./components/Memoryzation";
import Part01 from "./components/Part01";
import Part02 from "./components/Part02";
import Ref from "./components/useRef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Part01 />,
  },
  {
    path: "/useEffect",
    element: <Part02 />,
  },
  {
    path: "/Ref",
    element: <Ref />,
  },
  {
    path: "/memoryzation",
    element: <Memoryzation />,
  },
  {
    path: "/hoc",
    element: <UseHoc />,
  },
  {
    path: "/class",
    element: <ClassExample />,
  },
]);

export default router;
