import React, { useState } from 'react'

const CheckBoxInput = () => {
  const [showMessage, setShowMessage] = useState(false)

  const handleChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowMessage(e.target.checked)
  }
  return (
    <div>
      <h2>Test CheckBox</h2>
      <label htmlFor="toggle">show message</label>
      <input id="toggle" type="checkbox" onChange={handleChangeToggle} checked={showMessage} />
      {showMessage ? '안녕안녕' : null}
    </div>
  )
}

export default CheckBoxInput
