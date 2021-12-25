import Joblists from "./component/Joblists";
import JobContext from "./context/JobContext";
import Header from "./component/Header"

function App() {
  return (
    <>
      <JobContext>
        <Header />
        <Joblists />
      </JobContext>
    </>
  );
}

export default App;
