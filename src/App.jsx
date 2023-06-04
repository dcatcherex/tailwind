
import GenerateContent from "./components/GenerateContent/GenerateContent";
import TemplateSet from "./components/TemplateSet/TemplateSet";
import ExamList from "./components/ExamList/ExamList";



const App = () => {
  

  return (
    <>

    <div className="bg-white py-4 px-4">
      {/* <ExamList /> */}
    </div>
    <TemplateSet />
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
    </>
  );
};

export default App;
