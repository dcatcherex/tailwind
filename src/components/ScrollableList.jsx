const ScrollableList = ({ jsonData }) => {
    return (
      <div className="max-h-[400px] overflow-y-auto p-4">
        <ul>
          {jsonData.map((item, id) => (
            <li key={id}>{`${item.title} (${item.type})`}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ScrollableList;