
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name}: {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <br />
      <p><strong>Content:</strong></p>
      <Part {...props.part1} />
      <Part {...props.part2} />
      <Part {...props.part3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <br />
      <p><strong>Number of exercises:</strong> {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      
      <Content part1={part1} part2={part2} part3={part3} />
      
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </>
  )
}

export default App


