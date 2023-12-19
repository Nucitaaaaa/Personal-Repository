
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part1 = (props) => {
  return (
    <>
      <p>{props.part1}: {props.exercises1}</p>
    </>
  )
}

const Part2 = (props) => {
  return (
    <>
      <p>{props.part2}: {props.exercises2}</p>
    </>
  )
}

const Part3 = (props) => {
  return (
    <>
      <p>{props.part3}: {props.exercises3}</p>
    </>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <br />
      <p><strong>Content:</strong></p>
      <Part1 part1 = {part1} exercises1 = { exercises1}/>
      <Part2 part2 = {part2} exercises2 = { exercises2}/>
      <Part3 part3 = {part3} exercises3 = { exercises3}/>
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
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <>
      <Header course = {course}/>

      <Content/>

      <Total  exercises1 = { exercises1} exercises2 = { exercises2} exercises3 = { exercises3}/>
    </>
  )
}

export default App


