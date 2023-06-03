import {useState} from "react";

const Form = () => {
  const [name, setName ] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault()
    alert({name})
  }

  return (
    <div className=" ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-xs items-center">
        <label htmlFor="name">Name</label>
        <input
          onChange={e => setName(e.target.value)
          }
          className="border-2"
          id="name"
          type="text"
          value={name}
          placeholder="please input name..."
        />
        <button type="submit">Submit</button>
      </form>
      <p>Your name is {name}</p>
    </div>
  );
};

export default Form;
