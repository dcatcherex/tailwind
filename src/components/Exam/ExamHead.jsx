const ExamHead = () => {
  const examTitle = "แบบทดสอบความสามารถด้านวิทยาศาสตร์";
  const academicYear = "ปีการศึกษา 2566";
  const gradeLevel = "ชั้นประถมศึกษาปีที่ 4";

  return (
    <>
      <h1 className="text-left font-medium text-xl text-darkviolet">
        {examTitle} {gradeLevel} {academicYear}
      </h1>
      <br />
      <hr />
    </>
  );
};

export default ExamHead;
