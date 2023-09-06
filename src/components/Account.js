import React, { useState } from "react"
import Checking from "./Checking"
import Savings from "./Savings"

const Account = () => {
  const [dailyWithdrawal, setDailyWithDrawal] = useState(300)

  const updateDailyWidthDraw = (amount) => {}

  return (
    <>
      <h2>Available Balances</h2>
      <Savings
        dailyWithdrawal='dailyWithdrawal'
        updateDailyWidthDraw={updateDailyWidthDraw}
      />
      <Checking />
    </>
  )
}

export default Account
