// import Footer from "../components/Footer";
// import Header from "../components/Header";

import { useState } from "react";
import CustomButton from "../components/customButton";

function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* <Header /> */}
      <h1>Home Page Content</h1>

      <CustomButton title="Click Me" />
      <h1>{count}</h1>

      <button onClick={handleIncrement}>Add</button>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
