function App() {
  return (
    <>
      <div id="header">
        <img src="investment-calculator-logo.png"/>
        <h1>Investment Calculator</h1>
      </div>
      <div id="user-input">
        <div class="input-group">
          <label for="init_invest"> INITIAL INVESTMENT </label><br></br>
          <input type="number" id="init_invest" name="init_invest" value="1000" required />
          <label for="annual_invest"> ANNUAL INVESTMENT </label><br></br>
          <input type="number" id="annual_invest" name="annual_invest" value="12000" required />
        </div>
        <div class="input-group">
          <label for="expected_return"> EXPECTED RETURN </label><br></br>
          <input type="number" id="expected_return" name="expected_return" value="100000" required />
          <label for="duration"> DURATION </label><br></br>
          <input type="number" id="duration" name="duration" value="12" min="1" max="24" required />
        </div>
      </div>
      <input type="text" required id="myInput" value="You can edit me!"></input>
      <input type="text" required value="abcd" />
    </>
  )
}

export default App
