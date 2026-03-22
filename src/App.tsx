import { useState } from 'react';

import marsRover from './assets/mars_rover.png';
import texture from './assets/orange-details-moon-texture.jpg';
import { simulateRobots } from './utils/martianRobots/martianRobots';
import { Header, InputArea, ExecuteButton, OutputDisplay, Footer, RoverImage } from './components';

const DEFAULT_INPUT = `5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`;

function App() {
  const [input, setInput] = useState<string>(DEFAULT_INPUT);
  const [output, setOutput] = useState<string>('');

  const handleRun = () => {
    const result = simulateRobots(input);
    setOutput(result);
  };

  return (
    <div className={`flex flex-col min-h-screen w-full bg-cover`} style={{ backgroundImage: `url(${texture})` }}>
      <Header title="Martian Robots" />
      <main className="flex-col grow p-4 ">
        <RoverImage src={marsRover} />
        <InputArea value={input} onChange={setInput} />
        <ExecuteButton onClick={handleRun} />
        <OutputDisplay output={output} />
      </main>
      <Footer text="&copy; 2026 Martian Robots. All rights reserved." />
    </div>
  );
}

export default App;
