import  { useState, useEffect } from 'react';
import axios from 'axios';

const FetchJson = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1/comments'
      );
      setComments(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Comments for Post #1:</h2>
      {comments.map((comment) => (
        <div key={comment.id}
        className="mb-6 ml-6">
          <h4 className='font-bold'>Comment #{comment.id}</h4>
          <p>{comment.body}</p>
          <h4 className='font-bold'>Name</h4>
          <p>{comment.name}</p>
          <h4 className='font-bold'>Email</h4>
          <p>{comment.email}</p>


          
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FetchJson;