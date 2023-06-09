import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { rootLoader } from "./routes/root";


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
import ExamMonitor from "./components/Exam/ExamMonitor";
import ExamResult from "./components/Exam/ExamResult";
import TakeExam from "./components/Exam/TakeExam";

import AiChat from "./components/AiChat/AiChat";











const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      { index: true, element: <GenerateQuiz /> },
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
      {
        path: "exammonitor",
        element: <ExamMonitor />,
        // loader: ExamTypeLoader,
      },
      {
        path: "examresult",
        element: <ExamResult />,
        // loader: ExamTypeLoader,
      },
      {
        path: "takeexam",
        element: <TakeExam />,
        // loader: ExamTypeLoader,
      },
      {
        path: "aichat",
        element: <AiChat />,
        // loader: ExamTypeLoader,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);