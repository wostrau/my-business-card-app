import { useState } from 'react';

import { CardsList } from './components/CardsList/CardsList';
import { MainHeader } from './components/MainHeader/MainHeader';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MainHeader onCreatePost={() => setIsOpen(true)} />
      <main>
        <CardsList
          isPosting={isOpen}
          finishPosting={() => setIsOpen(false)}
        />
      </main>
    </>
  );
}

export default App;
