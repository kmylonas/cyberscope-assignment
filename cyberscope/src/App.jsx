import "./App.css";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout darkMode={darkMode} onChangeMode={handleChangeMode} />
    </>
  );
}

export default App;
