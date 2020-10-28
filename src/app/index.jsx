import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../styles/default-theme'
import Pages from '../pages';
import Grid from './Grid'

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <Grid>
        <Pages />
      </Grid>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
