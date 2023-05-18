import { useRoutes } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from './routes'

const App = () => {
  const elements = useRoutes(routes)
  return <Container>{elements}</Container>
}

export default App

const Container = styled.div`
  color: red;
`
