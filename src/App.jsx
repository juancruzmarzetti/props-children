import Hijo from "./components/Hijo";
import Padre from "./components/Padre";

function App() {
  return (
    <>
      <Padre>
        <Hijo nombre="Juan"/>
      </Padre>
      <Padre>
        <Hijo nombre="Jorge"/>
      </Padre>
    </>
  )
}

export default App;
