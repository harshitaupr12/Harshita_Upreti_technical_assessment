import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { ThemeProvider } from './ThemeContext';
import { ThemeToggle } from './ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggle />
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </div>
    </ThemeProvider>
  );
}

export default App;