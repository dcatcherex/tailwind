// To create a React component that can read from and write to a Google Sheet, you’ll need to use the Google Sheets API. First, set up the API by following these steps:

// Go to the Google Developers Console.
// Create a new project or select an existing one.
// Click on “Enable APIs and Services” and search for “Google Sheets API.” Enable it.
// Click “Create credentials” and select “Web Browser (Javascript)” as your platform.
// Copy the generated API key.
// Next, install the googleapis package:

// npm install googleapis

//<SheetsComponent spreadsheetId="YOUR_SPREADSHEET_ID" />;

import { useState, useEffect } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';



const GOOGLE_SHEETS_API_KEY = 'YOUR_GOOGLE_SHEETS_API_KEY';

const SheetsComponent = ({ spreadsheetId }) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const doc = new GoogleSpreadsheet(spreadsheetId);

  useEffect(() => {
    async function fetchData() {
      await doc.useApiKey(GOOGLE_SHEETS_API_KEY);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows();
      setData(rows.map((row) => row.yourColumnName)); // Replace 'yourColumnName' with the name of the column in your sheet
    }

    fetchData();
  }, [spreadsheetId]);

  const handleWriteData = async () => {
    await doc.useApiKey(GOOGLE_SHEETS_API_KEY);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ yourColumnName: inputValue }); // Replace 'yourColumnName' with the name of the column in your sheet
  };

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleWriteData}>Submit</button>
    </div>
  );
};

export default SheetsComponent;