import React, { useState } from 'react';

function JsonFile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Helper function to read data from the file
  async function readFile() {
    try {
      setLoading(true);
      const response = await fetch('/path/to/file.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Helper function to write data to the file
  async function writeFile(newData) {
    try {
      setLoading(true);
      const response = await fetch('/path/to/file.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      setData(newData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button disabled={loading} onClick={readFile}>
        {loading ? 'Loading...' : 'Load Data'}
      </button>
      
      <button disabled={loading} onClick={() => writeFile({ foo: 'bar' })}>
        {loading ? 'Saving...' : 'Save Data'}
      </button>

     {loading ? (
       <div>Loading...</div>
     ) : (
       data && (
         <pre>{JSON.stringify(data, null, 2)}</pre>
       )
     )}
    </div>
  );
}

export default JsonFile;