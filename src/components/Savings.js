import React, { useState } from "react"

const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

const Savings = ({ dailyWithdrawal, updateDailyWidthDraw }) => {
  const [currentSavings, setCurrentSavings] = useState(12000)
  const [withdraw, setWithdraw] = useState(false)
  const [deposit, setDeposit] = useState(false)
  const [amount, setAmount] = useState(0)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(amount)

    if (amount <= 0) return
  }

  return (
    <div className='savings'>
      <h4>Savings</h4>
      <span>
        <p>Current Balance: {formatCurrency.format(currentSavings)}</p>
      </span>
      <button onClick={() => setWithdraw(true)}>Withdraw</button>
      <button onClick={() => setDeposit(true)}>Deposit</button>

      {(withdraw || deposit) && (
        <div>
          <form onSubmit='handleSubmit'>
            <label>{withdraw ? "Withdraw" : "Deposit"} Amount:</label>
            <input
              type='string'
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
              }}
            />
            <button type='submit'>
              Submit {withdraw ? "Withdraw" : "Deposit"}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Savings
