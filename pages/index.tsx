
import { ThemeProvider } from 'next-themes'

import Home from './Home';

function App() {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Home />
    </ThemeProvider>
  );
}

export default App;
