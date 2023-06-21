const SelectedOptions = ({ selectedOptions }) => {
    return (
      <div>
        <h3>Selected Options:</h3>
        <ul>
          {Object.entries(selectedOptions).map(([questionId, selectedOption]) => (
            <li key={questionId}>
              Question ID: {questionId}, Selected Option: {selectedOption}
            </li>
          ))}
        </ul>
      </div>
    );
  };