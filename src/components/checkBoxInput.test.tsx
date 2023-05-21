import React from 'react'
import { act, render } from '@testing-library/react'
import CheckBoxInput from './checkBoxInput'

const renderCheckBoxInput = () => {
  // 컴포넌트를 렌더링 한다.
  const result = render(<CheckBoxInput />)

  // 컴포넌트에서 공통 Dom 요소를 가져오기 위한 헬퍼 함수이다.

  const Heading = () => result.getByText('Test CheckBox')

  const checkInput = () => result.getByLabelText('show message')
}
