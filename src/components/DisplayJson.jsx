import data from '../assets/datas/samplequestions.json'

const DisplayJson = () => {
     
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.question}</h2>
          <ul>
            {item.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
          <p>คำตอบ: {item.answer}</p>
          <p>อธิบาย: {item.explain}</p>
        </div>
      ))}
    </div>
    
  );
};

export default DisplayJson;
