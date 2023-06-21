const ExamHead = () => {
  const examTitle = "แบบทดสอบความสามารถด้านวิทยาศาสตร์";
  const academicYear = "ปีการศึกษา 2563";
  const gradeLevel = "ชั้นประถมศึกษาปีที่ 4";

  return (
    <>
      <h1 className="text-left font-medium text-xl text-darkviolet">
        {examTitle} {gradeLevel} {academicYear}
      </h1>
    </>
  );
};

export default ExamHead;
