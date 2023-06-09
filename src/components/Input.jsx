import { useState } from "react";

const Input = () => {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(() => e.target.value)
    console.log(search)
  }


  return (
      <input type="text" placeholder="search" onChange={(e) => handleChange(e)}/>
  );
};

export default Input;