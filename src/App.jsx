import { calculateInvestmentResults, formatter } from './util/investment'
import { useState, useEffect } from 'react';



function App() {
  let prevTotalInterest = 0;
  const [ initialInvestment, setInitialInvestment ] = useState(10000);
  const [ annualInvestment, setAnnualInvestment ] = useState(1200);
  const [ expectedReturn, setExpectedReturn ] = useState(6);
  const [ duration, setDuration ] = useState(10);
  // const [ calcValues, setCalcValues ] = useState();
  const [ calcValues, setCalcValues ] = useState(calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration }));
  useEffect(() => 
    setCalcValues(() => 
      calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration })
    ), 
    [initialInvestment, annualInvestment, expectedReturn, duration]);
  let prevInvestedCapital = initialInvestment;
  function handleChangeInitialInvestment(e) {
    setInitialInvestment(Number(e.target.value));
  }
  function handleChangeAnnualInvestment(e) {
    setAnnualInvestment(Number(e.target.value));
  }
  function handleChangeExpectedReturn(e) {
    setExpectedReturn(Number(e.target.value));
  }
  function handleChangeDuration(e) {
    setDuration(Number(e.target.value));
  }
  console.log(initialInvestment, annualInvestment, expectedReturn, duration, prevInvestedCapital);
  console.log(calcValues);
  return (
    <>
      <div id="header">
        <img src="investment-calculator-logo.png"/>
        <h1>Investment Calculator</h1>
      </div>
      <div id="user-input">
        <div className="input-group">
          <label htmlFor="init_invest"> INITIAL INVESTMENT </label><br></br>
          <input type="number" id="init_invest" name="init_invest" value={initialInvestment} onChange={handleChangeInitialInvestment} required />
          <label htmlFor="annual_invest"> ANNUAL INVESTMENT </label><br></br>
          <input type="number" id="annual_invest" name="annual_invest" value={annualInvestment} onChange={handleChangeAnnualInvestment} required />
        </div>
        <div className="input-group">
          <label htmlFor="expected_return"> EXPECTED RETURN </label><br></br>
          <input type="number" id="expected_return" name="expected_return" value={expectedReturn} onChange={handleChangeExpectedReturn} required />
          <label htmlFor="duration"> DURATION </label><br></br>
          <input type="number" id="duration" name="duration" value={duration} min="1" max="24" onChange={handleChangeDuration} required />
        </div>
      </div>
      {/* <input type="text" required id="myInput" value="You can edit me!"></input>
      <input type="text" required value="abcd" /> */}

      <div id="result" className="center">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest(Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                <td>abcd</td>
                <td>abcd</td>
                <td>abcd</td>
                <td>abcd</td>
                <td>abcd</td>
            </tr> */}
            {calcValues.map((val, key) => {
              prevTotalInterest += val.interest
              prevInvestedCapital += val.annualInvestment
              return (
                <tr key={key}>
                  <td>{val.year}</td>
                  <td>{formatter.format(val.valueEndOfYear)}</td>
                  <td>{formatter.format(val.interest)}</td>
                  <td>{formatter.format(prevTotalInterest)}</td>
                  <td>{formatter.format(prevInvestedCapital)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </>
  )
}

export default App
