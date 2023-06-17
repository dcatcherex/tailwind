import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import ExamType from './components/ExamType/ExamType';
import './index.css'
// import Index from "./routes/index";
import TemplateSet from './components/TemplateSet/TemplateSet';
import GenerateQuiz from "./components/GenerateQuiz/GenerateQuiz";
import ExamList from './components/ExamList/ExamList';

import templates from "../src/assets/datas/prompttemplatedata.json";
import ExamPortal from "./components/Exam/ExamPortal";
import ExamSetting from "./components/Exam/ExamSetting";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      // { index: true, element: <Index /> },
      {
        path: "examtype",
        element: <ExamType />,
        // loader: ExamTypeLoader,
      },
      {
        path: "template",
        element: <TemplateSet jsonData={templates}/>,
        // loader: ExamTypeLoader,
      },
      {
        path: "generatequiz",
        element: <GenerateQuiz />,
        // loader: ExamTypeLoader,
      },
      {
        path: "examlist",
        element: <ExamList />,
        // loader: ExamTypeLoader,
      },
      {
        path: "examportal",
        element: <ExamPortal />,
        // loader: ExamTypeLoader,
      },
      {
        path: "examsetting",
        element: <ExamSetting />,
        // loader: ExamTypeLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);