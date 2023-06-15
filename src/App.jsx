import GenerateContent from "./components/GenerateContent/GenerateContent";
import TemplateSet from "./components/TemplateSet/TemplateSet";
import ExamList from "./components/ExamList/ExamList";
import Tab from "./components/Tabs/Tab";
import Tabs from "./components/Tabs/Tabs";
import FilteredPaginatedList from "./components/FilteredPaginatedList";
import JsonCarousel from "./components/JsonCarousel";
import FileUploader from "./components/FileUploader";
import { PDFViewer } from '@react-pdf/renderer';





import jsonData from "./assets/datas/prompttemplatedata.json"
import ScrollableList from "./components/ScrollableList";
import PdfDocument from "./components/PDF/PdfDocument";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import ProgressBar from "./components/ProgressBar";
import ExamType from "./components/ExamType/ExamType";
import UserVisitCount from "./components/UserVisitCount";
import ButtonScroller from "./components/ButtonScroller";
import FetchJson from "./components/FetchJson";
import FlickitySlide from "./components/FlickitySlide";
import ScrollWrap from "./components/ScrollWrap";
import BottomMenuBar from "./components/BottomMenuBar";
import TopMenuBar from "./components/TopMenuBar";




const App = () => {
  return (
    <><div className="bg-violet-100 mt-12">
      
        {/* <FetchJson /> */}
        {/* <ExamList /> */}
        <ExamType />
        <UserVisitCount />
        <Tabs>
          <Tab label="Tab 1">
          </Tab>
          <Tab label="Tab 2">
            <p>Content for Tab 2</p>
          </Tab>
          <Tab label="Tab 3">
      
          </Tab>
        </Tabs>
          <ProgressBar correct={25} incorrect={20} total={50} />
          <div className="my-2">
            <ProgressBar correct={40} incorrect={10} total={50} />
          </div>
          <ProgressBar correct={20} incorrect={20} total={50} />
        <TemplateSet />
        {/* <FilteredPaginatedList jsonData={jsonData} /> */}
        {/* <JsonCarousel jsonData={jsonData} />; */}
        {/* <ScrollableList jsonData={jsonData} />; */}
        <FileUploader />
        <PDFViewer>
          <PdfDocument />
        </PDFViewer>
        <GenerateContent />
        {/* <div className="max-w-lg mx-auto px-4 ">
          <h1>this is app.js</h1>
          <div className="divide-x-8"></div>
          <button className="btn hover:ring hover:ring-offset-2 hover:ring-orange-500 hover:bg-orange-500">
            this is button
          </button>
          <div className="w-[300px] scale-90 m-2 bg-blue-400 rounded-md hover:scale-100 hover:border-2 ease-out duration-300 ">
            <img
              className="w-full rounded-t-md "
              src="https://picsum.photos/200/300"
              alt=""
            />
            <h3 className="text-2xl font-bold p-4 ">Head title</h3>
            <p className="p-4 -mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
              neque, iure quia laboriosam tempore quo mollitia placeat voluptatum
              et cumque v adipisicing elit. Eos, ratione?
            </p>
          </div>
          <div className="mb-1 text-base font-medium dark:text-white">
            ด.ช. ดำเนิน ตระกูลเมือง
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="w-[50%] bg-blue-500 rounded-full h-1.5 mb-4">
              <div className="w-[10%] bg-red-500 rounded-full h-1.5 mb-4 text-xs text-right">
                10%
              </div>
            </div>
          </div>
          <div>
            <SelectMenu></SelectMenu>
            <TextAreaPill></TextAreaPill>
            <ToggleIcon></ToggleIcon>
            <Breadcrumbs></Breadcrumbs>
            <Button text="Menu" icon="getCheckCircleIcon" />
          </div>
          <GenAssessment />
          <Form />
          <Login />
        </div> */}
    </div>
    </>
  );
};

export default App;
