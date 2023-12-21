
const Header = (props) => (
  <>
    <h1>{props.name}</h1>
  </>
);

const Parts = (props) => (
  <>
    <br />
    {props.parts.map(part => (
      <p key={part.name}>{part.name} : {part.exercises}</p>
    ))}
  </>
);

const Content = (props) => (
  <>
    <br />
    <p><strong>Content:</strong></p>
    <Parts parts={props.parts} />
  </>
);

const Total = (props) => (
  <>
    <br />
    <p><strong>Number of exercises:</strong> {props.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  </>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;




