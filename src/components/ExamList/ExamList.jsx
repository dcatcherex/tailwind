import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import data from "../../assets/datas/samplequestions.json";
import data2 from "../../assets/datas/samplequestions2.json";
import data3 from "../../assets/datas/samplequestions3.json";
import studentdata from "../../assets/datas/studentquestions.json";

import IndicatorBar from "../IndicatorBar";
import { Link } from "react-router-dom";
import ExamHead from "../../components/Exam/ExamHead";
import { StarIcon } from "@heroicons/react/20/solid";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import ProgressBar from "../ProgressBar";
import ProgressBar2 from "../ProgressBar2";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { PrinterIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { WifiIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

import truelogo from "../../assets/images/partners/true.png";
import aksornlogo from "../../assets/images/partners/aksorn.png";
import careervisalogo from "../../assets/images/logos/careervisalogo.png";
import depalogo from "../../assets/images/logos/depa.png";
import edvlogo from "../../assets/images/logos/edvlogo.png";
import newtonlogo from "../../assets/images/logos/newtonlogo.png";

import ImageGallery from "../ImageGallery/ImageGallery";

import { motion } from "framer-motion";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

const ExamList = () => {
  const [dataValue, setDataValue] = useState(data);
  const [partnerDataValue, setPartnerDataValue] = useState(data2);
  const [studentDataValue, setStudentDataValue] = useState(studentdata);
  let [isOpen, setIsOpen] = useState(true);

  const [trueRangeValue, setTrueRangeValue] = useState(0);
  const [aksornRangeValue, setAksornRangeValue] = useState(0);
  const [student1RangeValue, setStudent1RangeValue] = useState(0);
  const [student2RangeValue, setStudent2RangeValue] = useState(0);
  const [private1RangeValue, setPrivate1RangeValue] = useState(0);
  const [private2RangeValue, setPrivate2RangeValue] = useState(0);
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const minRange = "0";
  const maxRange = "5";
  const step = "1";

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };
  const handleTrueRangeChange = (e) => {
    setTrueRangeValue(e.target.value);
  };
  const handleAksornRangeChange = (e) => {
    setAksornRangeValue(e.target.value);
  };
  const handleStudent1RangeChange = (e) => {
    setStudent1RangeValue(e.target.value);
  };
  const handleStudent2RangeChange = (e) => {
    setStudent2RangeValue(e.target.value);
  };
  const handlePrivate1RangeChange = (e) => {
    setPrivate1RangeValue(e.target.value);
  };
  const handlePrivate2RangeChange = (e) => {
    setPrivate2RangeValue(e.target.value);
  };

  const partnerFilteredData = partnerDataValue.slice(0, trueRangeValue);
  const student1FilteredData = studentDataValue.slice(0, student1RangeValue);

  const rememberingTotal = dataValue.reduce((total, { indicator }) => {
    if (indicator === "Remembering") {
      return total + 1;
    }
    return total;
  }, 0);

  const understandingTotal = dataValue.reduce((total, { indicator }) => {
    if (indicator === "Understanding") {
      return total + 1;
    }
    return total;
  }, 0);

  const applyingTotal = dataValue.reduce((total, { indicator }) => {
    if (indicator === "Applying") {
      return total + 1;
    }
    return total;
  }, 0);

  const analyzingTotal = dataValue.reduce((total, { indicator }) => {
    if (indicator === "Analyzing") {
      return total + 1;
    }
    return total;
  }, 0);

  const evaluatingTotal = dataValue.reduce((total, { indicator }) => {
    if (indicator === "Evaluating") {
      return total + 1;
    }
    return total;
  }, 0);

  const creatingTotal = dataValue.reduce((total, { indicator }) => {
    if (indicator === "Creating") {
      return total + 1;
    }
    return total;
  }, 0);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const handlePresetChange = (preset) => {
    switch (preset) {
      // case "basic":
      //   setTrueRangeValue(3); // Set specific value for True preset
      //   setAksornRangeValue(0); // Set default value for Aksorn preset
      //   break;
      case "partners":
        setTrueRangeValue(3); // Set specific value for Student Explorer or Private Library preset
        setAksornRangeValue(0); // Set specific value for Student Explorer or Private Library preset
        setStudent1RangeValue(2);
        setStudent2RangeValue(0);
        setPrivate1RangeValue(0);
        setPrivate2RangeValue(0);
        break;
      case "students":
        setTrueRangeValue(1); // Set specific value for Student Explorer or Private Library preset
        setAksornRangeValue(0); // Set specific value for Student Explorer or Private Library preset
        setStudent1RangeValue(3);
        setStudent2RangeValue(0);
        setPrivate1RangeValue(0);
        setPrivate2RangeValue(0);
        break;
      case "private":
        setTrueRangeValue(1); // Set specific value for Student Explorer or Private Library preset
        setAksornRangeValue(0); // Set specific value for Student Explorer or Private Library preset
        setStudent1RangeValue(2);
        setStudent2RangeValue(0);
        setPrivate1RangeValue(2);
        setPrivate2RangeValue(0);
        break;
      default:
        setTrueRangeValue(1); // Set specific value for Student Explorer or Private Library preset
        setAksornRangeValue(1); // Set specific value for Student Explorer or Private Library preset
        setStudent1RangeValue(1);
        setStudent2RangeValue(1);
        setPrivate1RangeValue(1);
        setPrivate2RangeValue(1);
    }
  };

  return (
    <div className="">
      {/* head */}
      <div className="p-2 mb-2 flex items-center justify-between">
        <ExamHead />
        <div className="btn rounded-full fixed right-4 m-auto bottom-[50%] z-10">
          <div className="flex flex-col items-center justify-center  rounded-full">
            <PrinterIcon className="w-6 h-6 text-white" />
            <p>พิมพ์</p>
          </div>
        </div>
      </div>

      <div id="bar" className="mb-2">
        <IndicatorBar
          remembering={rememberingTotal}
          understanding={understandingTotal}
          applying={applyingTotal}
          analyzing={analyzingTotal}
          evaluating={evaluatingTotal}
          creating={creatingTotal}
        />
      </div>
      <div className="px-4 mt-8 text-base font-light font-sans text-slate-600 text-center  ">
        อ้างอิง: หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช 2551
      </div>

      {/* ปุ่มสอบ */}
      <div className="max-w-[1400px] mx-auto p-4 grid grid-cols-2 gap-x-2  ">
        <button className="text-base font-light py-4 btn bg-dimviolet inline-flex justify-center gap-x-1.5 items-center ">
          <BookOpenIcon className="w-6 h-6" />
          ให้การบ้าน
        </button>

        <Link
          to={"/examsetting"}
          className=" text-base font-light py-4 btn bg-dimviolet inline-flex justify-center gap-x-1.5 items-center"
        >
          <WifiIcon className="w-6 h-6" />
          จัดสอบ
        </Link>
      </div>

      {/* recent */}

      <div className="hidden sm:block max-w-[1400px] mx-auto  mb-4">
        <div className="flex gap-4 items-center mx-4">
          <h3>แบบทดสอบที่ใช้มา:</h3>
          <button className="btn" onClick={() => setDataValue(data)}>
            แบบทดสอบที่ 1
          </button>
          <button className="btn" onClick={() => setDataValue(data2)}>
            แบบทดสอบที่ 2
          </button>
          <button className="btn" onClick={() => setDataValue(data3)}>
            แบบทดสอบที่ 3
          </button>
          <button
            className="flex items-center gap-x-2 btn cursor-pointer bg-dimviolet text-white "
            onClick={openModal}
          >
            <DocumentMagnifyingGlassIcon className="h-5" />{" "}
            <p>พรีวิวแบบทดสอบ</p>
          </button>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-[800px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <div className=" flex items-center justify-between">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          พรีวิวแบบทดสอบ
                        </Dialog.Title>
                        <div className="">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            OK
                          </button>
                        </div>
                      </div>
                      {/* ข้อสอบ */}
                      <div className="mt-4">
                        <ExamHead />
                      </div>
                      <div className="grid grid-cols-2">
                        {dataValue.map(
                          ({
                            id,
                            question,
                            options,
                          }) => (
                            <div
                              key={id}
                              className=" p-4 font-body font-medium sm:rounded-lg"
                        
                            >
                              <h3 className=" font-medium list-decimal">
                                {id}.{question}
                              </h3>
                              <div className="flex gap-x-2 font-light font-base font-sans">
                        
                              </div>
                              <div className=" items-center">
                        
                              </div>
                              <ol className="list-decimal my-2 pl-8">
                                {options.map((option) => (
                                  <li key={option} className="font-light py-0.5 ">
                        
                                      {option}
                        
                                  </li>
                                ))}
                              </ol>
                        
                            </div>
                          )
                        )}
                      </div>

                      
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>

      {/* List */}

      <div className="  max-w-[1400px] mx-auto flex">
        <motion.div
          className="  mt-4 text-lg grid grid-cols-1 gap-4 sm:grid-cols-2 sm:mx-4 lg:grid-cols-2 lg:mx-4 "
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {/* Partners exam */}
          {trueRangeValue > 0 ? (
            <div className="">
              <div className="font-semibold text-xl">Partner</div>
              {partnerFilteredData.map(
                ({
                  id,
                  question,
                  options,
                  answer,
                  indicator,
                  difficulty,
                  right,
                  wrong,
                  wrong_answer,
                }) => (
                  <div
                    key={id}
                    className="shadow-md bg-white p-4 font-body font-medium sm:rounded-lg mb-4 mt-2"
                    // className={`shadow-md p-4 font-body font-medium sm:rounded-lg item ${
                    //   indicator === "Remembering"
                    //     ? "bg-lime-200"
                    //     : indicator === "Understanding"
                    //     ? "bg-yellow-200"
                    //     : indicator === "Applying"
                    //     ? "bg-orange-200"
                    //     : indicator === "Analyzing"
                    //     ? "bg-sky-300"
                    //     : indicator === "Evaluating"
                    //     ? "bg-rose-300"
                    //     : "bg-indigo-300"
                    // }`}
                  >
                    <h3 className=" font-medium list-decimal">
                      {id}.{question}
                    </h3>
                    <div className="flex gap-x-2 font-light font-base font-sans">
                      {difficulty === 1 && (
                        <>
                          <StarIcon className="w-4 h-4 text-red-500" />
                        </>
                      )}
                      {difficulty === 2 && (
                        <>
                          <StarIcon className="w-4 h-4 text-red-500" />
                          <StarIcon className="w-4 h-4 -ml-2 text-red-500" />
                        </>
                      )}
                      {difficulty === 3 && (
                        <>
                          <StarIcon className="w-4 h-4 text-red-500" />
                          <StarIcon className="w-4 h-4 -ml-2 text-red-500" />
                        </>
                      )}
                    </div>
                    <ol className="list-decimal my-2 pl-8">
                      {options.map((option) => (
                        <li key={option} className="font-light py-0.5 ">
                          <span
                            className={`px-1 ${
                              option === answer
                                ? "border-green-500 border-b-2"
                                : option === wrong_answer
                                ? "border-red-500 border-b-2"
                                : ""
                            }`}
                          >
                            {option}
                          </span>
                        </li>
                      ))}
                    </ol>
                    <div>
                      <div className="flex  gap-x-2">
                        <img src={newtonlogo} className="w-10 mb-2" />
                        <img src={edvlogo} className="w-14 mb-2" />
                        <img src={depalogo} className="w-20 mb-2" />
                        <img src={careervisalogo} className="w-14 mb-2" />
                      </div>
                    </div>
                    <div className="relative ">
                      {right[1] - right[0] > 0 ? (
                        <ArrowUpIcon className="absolute bottom-6 right-6 w-6 h-6 text-green-700 object-right" />
                      ) : right[1] - right[0] < 0 ? (
                        <ArrowDownIcon className="absolute bottom-6 right-6 w-6 h-6 text-red-700 object-right" />
                      ) : (
                        ""
                      )}

                      <ProgressBar
                        correct={right[0]}
                        incorrect={wrong[0]}
                        total={right[0] + wrong[0]}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            ""
          )}
          {/* End Partners exam */}

          {/* Student exam */}
          {student1RangeValue > 0 ? (
            <div className="">
              <div className="font-semibold text-xl">Student Explorere</div>
              {student1FilteredData.map(
                ({
                  id,
                  question,
                  options,
                  answer,
                  indicator,
                  // difficulty,
                  right,
                  wrong,
                  wrong_answer,
                }) => (
                  <div
                    key={id}
                    className="shadow-md bg-white p-4 font-body font-medium sm:rounded-lg mb-4 border-4 border-sky-500 mt-2"
                    // className={`shadow-md p-4 font-body font-medium sm:rounded-lg item ${
                    //   indicator === "Remembering"
                    //     ? "bg-lime-200"
                    //     : indicator === "Understanding"
                    //     ? "bg-yellow-200"
                    //     : indicator === "Applying"
                    //     ? "bg-orange-200"
                    //     : indicator === "Analyzing"
                    //     ? "bg-sky-300"
                    //     : indicator === "Evaluating"
                    //     ? "bg-rose-300"
                    //     : "bg-indigo-300"
                    // }`}
                  >
                    <h3 className=" font-medium list-decimal">
                      {id}.{question}
                    </h3>
                    <p className="font-sans font-light text-sm text-gray-500">
                      บุคลิกภาพด้านสังคม(Introvert,Extrovert)
                    </p>
                    <ol className="list-decimal my-2 pl-8">
                      {options.map((option) => (
                        <li key={option} className="font-light py-0.5 ">
                          <span
                            className={`px-1 ${
                              option === answer
                                ? "border-sky-500 border-b-2"
                                : option === wrong_answer
                                ? "border-blue-500 border-b-2"
                                : ""
                            }`}
                          >
                            {option}
                          </span>
                        </li>
                      ))}
                    </ol>

                    <ProgressBar2
                      progress={right[0]}
                      total={right[1]}
                      progress_color="bg-sky-500"
                      total_color="bg-orange-500"
                    />
                  </div>
                )
              )}
            </div>
          ) : (
            ""
          )}

          {/* ข้อสอบ */}
          {dataValue.map(
            ({
              id,
              question,
              options,
              answer,
              indicator,
              difficulty,
              right,
              wrong,
              wrong_answer,
            }) => (
              <div
                key={id}
                className={`shadow-md p-4 font-body font-medium sm:rounded-lg item ${
                  indicator === "Remembering"
                    ? "bg-lime-200"
                    : indicator === "Understanding"
                    ? "bg-yellow-200"
                    : indicator === "Applying"
                    ? "bg-orange-200"
                    : indicator === "Analyzing"
                    ? "bg-sky-300"
                    : indicator === "Evaluating"
                    ? "bg-rose-300"
                    : "bg-indigo-300"
                }`}
              >
                <h3 className=" font-medium list-decimal">
                  {id}.{question}
                </h3>
                <div className="flex gap-x-2 font-light font-base font-sans">
                  {difficulty === 1 && (
                    <>
                      <StarIcon className="w-4 h-4 text-red-500" />
                    </>
                  )}
                  {difficulty === 2 && (
                    <>
                      <StarIcon className="w-4 h-4 text-red-500" />
                      <StarIcon className="w-4 h-4 -ml-2 text-red-500" />
                    </>
                  )}
                  {difficulty === 3 && (
                    <>
                      <StarIcon className="w-4 h-4 text-red-500" />
                      <StarIcon className="w-4 h-4 -ml-2 text-red-500" />
                    </>
                  )}
                </div>
                <div className=" items-center">
                  <ImageGallery />
                  <YoutubeVideo />
                </div>
                <ol className="list-decimal my-2 pl-8">
                  {options.map((option) => (
                    <li key={option} className="font-light py-0.5 ">
                      <span
                        className={`px-1 ${
                          option === answer
                            ? "border-green-500 border-b-2"
                            : option === wrong_answer
                            ? "border-red-500 border-b-2"
                            : ""
                        }`}
                      >
                        {option}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="relative ">
                  {right[1] - right[0] > 0 ? (
                    <ArrowUpIcon className="absolute bottom-6 right-6 w-6 h-6 text-green-700 object-right" />
                  ) : right[1] - right[0] < 0 ? (
                    <ArrowDownIcon className="absolute bottom-6 right-6 w-6 h-6 text-red-700 object-right" />
                  ) : (
                    ""
                  )}

                  <ProgressBar
                    correct={right[0]}
                    incorrect={wrong[0]}
                    total={right[0] + wrong[0]}
                  />
                </div>
              </div>
            )
          )}
        </motion.div>
        {/* control */}
        <div className="hidden sm:block m-4 p-4 min-w-[30%] border-2 rounded-lg border-dimviolet justify-items-start">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-darkviolet">
              Exam Mixer
            </h2>
            <div className="hover:bg-dimviolet hover:text-white hover:cursor-pointer p-2 rounded-md border-2 border-gray-300">
              <ArrowDownTrayIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="border-b-2 border-gray-300 w-full my-2"></div>
          <div className="flex flex-col">
            <div>
              <div className="w-full mb-3">
                <label htmlFor="preset">Preset:</label>
                <select
                  {...register("preset")}
                  className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2"
                  onChange={(e) => handlePresetChange(e.target.value)}
                >
                  <option value="basic">เลือกรูปแบบที่สนใจ</option>
                  <option value="partners">เน้นที่ Partners</option>
                  <option value="students">เน้นที่ Student Explorer</option>
                  <option value="private">เน้นที่ Private Library</option>
                </select>
              </div>
              <h3 className="text-xl font-medium text-darkviolet mb-2 mt-2">
                Partners(พันธมิตร)
              </h3>

              <div className="flex flex-col gap-y-2">
                <div className="min-h-[60px] flex items-center gap-x-2 bg-white rounded-md p-2 hover:ring-2 ring-dimviolet cursor-pointer">
                  {/* <input type="checkbox" className="rounded-md w-5 h-5" /> */}
                  {/* <img src={truelogo} className="w-28	" /> */}
                  <p>องค์กร สถาบัน</p>
                  <input
                    type="range"
                    className="w-full rounded-sm w-5 h-5"
                    min="0"
                    max={maxRange}
                    step="1"
                    value={trueRangeValue}
                    onChange={handleTrueRangeChange}
                  />
                  <div className="">
                    {trueRangeValue > 0 ? (
                      <p className=" ml-2 mr-2 text-lg text-right w-2 font-semibold text-darkviolet">
                        {trueRangeValue}
                      </p>
                    ) : (
                      <p className="  text-darkviolet font-semibold text-lg  ">
                        Auto
                      </p>
                    )}
                  </div>
                </div>
                <div className="min-h-[60px] flex items-center gap-x-2 bg-white rounded-md p-2 hover:ring-2 ring-dimviolet cursor-pointer">
                  {/* <input type="checkbox" className="rounded-md w-5 h-5" /> */}
                  <img src={aksornlogo} className="w-28	" />
                  <input
                    type="range"
                    className="w-full rounded-sm w-5 h-5"
                    min="0"
                    max="5"
                    step="1"
                    value={aksornRangeValue}
                    onChange={handleAksornRangeChange}
                  />
                  <div className="">
                    {aksornRangeValue > 0 ? (
                      <p className=" ml-2 mr-2 text-lg text-right w-2 font-semibold text-darkviolet">
                        {aksornRangeValue}
                      </p>
                    ) : (
                      <p className="  text-darkviolet font-semibold text-lg  ">
                        Auto
                      </p>
                    )}
                  </div>
                </div>

                <div className="min-h-[60px] flex items-center gap-x-2 border-2 border-gray-300 border-dashed  rounded-md p-2 hover:ring-2 ring-dimviolet cursor-pointer text-gray-600">
                  <PlusCircleIcon className="w-6 h-6" />
                  เพิ่มพันธมิตร...
                </div>
              </div>

              <h3 className="text-xl font-medium text-darkviolet mb-2 mt-3">
                Student Explorer
              </h3>
              <div className="flex flex-col gap-y-2">
                <div className="min-h-[60px] flex items-center gap-x-2 bg-white rounded-md p-2 hover:ring-2 ring-dimviolet cursor-pointer">
                  {/* <input type="checkbox" className="rounded-md w-5 h-5" /> */}
                  <p className="w-[300px] inline-flex items-center">
                    <DocumentTextIcon className="w-8 h-8 mr-2 text-gray-500" />
                    แบบทดสอบบุคลิกภาพ
                  </p>
                  <input
                    type="range"
                    className="w-full rounded-sm w-5 h-5"
                    min="0"
                    max={maxRange}
                    step="1"
                    value={student1RangeValue}
                    onChange={handleStudent1RangeChange}
                  />
                  <div className="">
                    {student1RangeValue > 0 ? (
                      <p className=" ml-2 mr-2 text-lg text-right w-2 font-semibold text-darkviolet">
                        {student1RangeValue}
                      </p>
                    ) : (
                      <p className="  text-darkviolet font-semibold text-lg  ">
                        Auto
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <ProgressBar2
                    progress={3}
                    total={5}
                    progress_color="bg-sky-500"
                  />
                </div>

                <div className="min-h-[60px] flex items-center gap-x-2 bg-white rounded-md p-2 hover:ring-2 ring-dimviolet cursor-pointer">
                  {/* <input type="checkbox" className="rounded-md w-5 h-5" /> */}
                  <p className="w-[300px] inline-flex items-center">
                    <DocumentTextIcon className="w-10 h-10 mr-2 text-gray-500" />
                    แบบทดสอบเทคโนโลยีปัจจุบัน
                  </p>
                  <input
                    type="range"
                    className="w-full rounded-sm w-5 h-5"
                    min="0"
                    max={maxRange}
                    step="1"
                    value={student2RangeValue}
                    onChange={handleStudent2RangeChange}
                  />
                  <div className="">
                    {student2RangeValue > 0 ? (
                      <p className=" ml-2 mr-2 text-lg text-right w-2 font-semibold text-darkviolet">
                        {student2RangeValue}
                      </p>
                    ) : (
                      <p className="  text-darkviolet font-semibold text-lg  ">
                        Auto
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <ProgressBar2
                    progress={2}
                    total={5}
                    progress_color="bg-sky-500"
                  />
                </div>
                <div className="min-h-[60px] flex items-center gap-x-2 bg-white rounded-md p-2 hover:ring-2 ring-dimviolet cursor-pointer">
                  {/* <input type="checkbox" className="rounded-md w-5 h-5" /> */}
                  <p className="w-[300px] inline-flex items-center">
                    <DocumentTextIcon className="w-10 h-10 mr-2 text-gray-500" />
                    แบบทดสอบการระวังภัยไซเบอร์
                  </p>
                  <input
                    type="range"
                    className="w-full rounded-sm w-5 h-5"
                    min="0"
                    max={maxRange}
                    step="1"
                    value={student2RangeValue}
                    onChange={handleStudent2RangeChange}
                  />
                  <div className="">
                    {student2RangeValue > 0 ? (
                      <p className=" ml-2 mr-2 text-lg text-right w-2 font-semibold text-darkviolet">
                        {student2RangeValue}
                      </p>
                    ) : (
                      <p className="  text-darkviolet font-semibold text-lg  ">
                        Auto
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <ProgressBar2
                    progress={2}
                    total={5}
                    progress_color="bg-sky-500"
                  />
                </div>

                <div className="min-h-[60px] flex items-center gap-x-2 border-2 border-gray-300 border-dashed  rounded-md p-2 hover:ring-2 ring-dimviolet cursor-pointer text-gray-600">
                  <PlusCircleIcon className="w-6 h-6" />
                  เพิ่ม Student Explorer
                </div>
              </div>

              <h3 className="text-xl font-medium text-darkviolet mb-2 mt-3">
                Private Library(คลังส่วนตัว)
              </h3>
              <div className="flex flex-col gap-y-2">
                <div className="min-h-[60px] flex items-center gap-x-2 bg-white rounded-md p-2 hover:ring-2 ring-dimviolet cursor-pointer">
                  {/* <input type="checkbox" className="rounded-md w-5 h-5" /> */}
                  <DocumentTextIcon className="w-8 h-8 text-gray-500" />
                  เอกสาร
                  <input
                    type="range"
                    className="w-full rounded-sm w-5 h-5"
                    min="0"
                    max={maxRange}
                    step="1"
                    value={private1RangeValue}
                    onChange={handlePrivate1RangeChange}
                  />
                  <div className="">
                    {private1RangeValue > 0 ? (
                      <p className=" ml-2 mr-2 text-lg text-right w-2 font-semibold text-darkviolet">
                        {private1RangeValue}
                      </p>
                    ) : (
                      <p className="  text-darkviolet font-semibold text-lg  ">
                        Auto
                      </p>
                    )}
                  </div>
                </div>
                <div className="min-h-[60px] flex items-center gap-x-2 bg-white rounded-md p-2 hover:ring-2 ring-dimviolet cursor-pointer">
                  {/* <input type="checkbox" className="rounded-md w-5 h-5" /> */}
                  <DocumentTextIcon className="w-8 h-8 text-gray-500" />
                  เอกสาร
                  <input
                    type="range"
                    className="w-full rounded-sm w-5 h-5"
                    min="0"
                    max="5"
                    step="1"
                    value={private2RangeValue}
                    onChange={handlePrivate2RangeChange}
                  />
                  <div className="">
                    {private2RangeValue > 0 ? (
                      <p className=" ml-2 mr-2 text-lg text-right w-2 font-semibold text-darkviolet">
                        {private2RangeValue}
                      </p>
                    ) : (
                      <p className="  text-darkviolet font-semibold text-lg  ">
                        Auto
                      </p>
                    )}
                  </div>
                </div>

                <div className="min-h-[60px] flex items-center gap-x-2 border-2 border-gray-300 border-dashed  rounded-md p-2 hover:ring-2 ring-dimviolet cursor-pointer text-gray-600">
                  <PlusCircleIcon className="w-6 h-6" />
                  เพิ่มเอกสาร...
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamList;
