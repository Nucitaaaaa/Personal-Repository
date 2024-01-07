
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
        <tbody>
          <Votes text='Good' vote={props.voteG}/>
          <Votes text='Neutral' vote={props.voteN}/>
          <Votes text='Bad' vote={props.voteB}/>
          <Votes text='All' vote={props.voteG + props.voteN + props.voteB}/>
          <Votes text='Average' vote={props.avg / props.all}/>
          <Votes text='Positives' vote={`${(props.voteG / (props.voteG + props.voteN + props.voteB)) * 100}%`}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [prom, setProm] = useState(0)
  const all = good + bad + neutral

  if (good  === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>Give Feedback</h1>
        <Button text='Good' handleClick={() => {setGood(good + 1); setProm(prom + 1)}}/>
        <Button text='Neutral' handleClick={() => {setNeutral(neutral + 1); setProm(prom + 0)}}/>
        <Button text='Bad' handleClick={() => {setBad(bad + 1); setProm(prom - 1)}} />
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
        <Button text='Good' handleClick={() => {setGood(good + 1); setProm(prom + 1)}}/>
        <Button text='Neutral' handleClick={() => {setNeutral(neutral + 1); setProm(prom + 0)}}/>
        <Button text='Bad' handleClick={() => {setBad(bad + 1); setProm(prom - 1)}} />
        <br />
        <Statistics voteG={good} voteN={neutral} voteB={bad} avg={prom} all={all}/>
      </div>
    )
  }
}

export default App
