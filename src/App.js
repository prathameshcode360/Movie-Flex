import MovieCard from "./movieCard";
import Student from "./student";

function App() {
  return (
    <>
      {/* <h1>Movie-Flex</h1>; */}
      {/* <MovieCard /> */}
      <Student name="Alexa" />
      <Student />
    </>
  );
}

Student.defaultProps = {
  name: "Student",
};

export default App;
