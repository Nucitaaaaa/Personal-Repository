
import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Votes = (props) => {
  return (
  <>
    <tr>
      <td>{props.text}</td>
      <td>{props.vote}</td>
    </tr>
  </>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics:</h2>
      <table>
        <Votes text='Good' vote={props.voteG}/>
        <Votes text='Neutral' vote={props.voteN}/> 
        <Votes text='Bad' vote={props.voteB}/>
        <Votes text='All' vote={props.voteG + props.voteN + props.voteB}/>
        <Votes text='Average' vote={'...'}/>
        <Votes text='Positives' vote={`${(props.voteG / (props.voteG + props.voteN + props.voteB)) * 100}%`}/>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good  === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>Give Feedback</h1>
        <Button handleClick={() => {setGood(good + 1)}} text='Good'/>
        <Button handleClick={() => {setNeutral(neutral + 1)}} text='Neutral'/>
        <Button handleClick={() => {setBad(bad + 1)}} text='Bad'/>
        <br />
        <h2>Statistics:</h2>
        <p>No feedback given</p>
      </>
    )
  }

  else {
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={() => {setGood(good + 1)}} text='Good'/>
        <Button handleClick={() => {setNeutral(neutral + 1)}} text='Neutral'/>
        <Button handleClick={() => {setBad(bad + 1)}} text='Bad'/>
  
        <Statistics voteG={good} voteN={neutral} voteB={bad}/>
      </div>
    )
  }
}

export default App
