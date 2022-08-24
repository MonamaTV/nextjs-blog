import styles from "./Form.module.css";
import { useState } from "react";
const Form = () => {
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    const inp = e.target.value;
    setValue(inp);
    //i am know testing the fps rgubf
  };

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = "/search/?search=" + value;
  };

  return (
    <form className={styles.search__form}>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        placeholder="Search using keywords..."
      />
      <button onClick={handleSearch}>Search</button>
    </form>
  );
};

export default Form;
