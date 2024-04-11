// Återanvändbara komponenter 3p
// 1. Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 2. Skapa en komponent ButtonWithChildren som änvänder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 3. Skapa en komponent Article som tar en title och en text som props
// Använd komponenten 2 gånger med olika title och text.

import React from "react";

const Button = ({ color, title }) => {
  return (
    <button style={{ backgroundColor: color}}>{title}</button>
  );
};

const ButtonWithChildren = ({ color, children }) => {
  return (
    <button style={{ backgroundColor: color}}>{children}</button>
  );
};

const Article = ({ title, text }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Button color="yellow" title="Click" />
      <Button color="green" title="Press here" />
      
      <ButtonWithChildren color="orange">Click here</ButtonWithChildren>
      <ButtonWithChildren color="blue">Press here</ButtonWithChildren>
      
      <Article title="Article 1" text="article number 1." />
      <Article title="Article 2" text="article number 2." />
    </div>
  );
};

export default App;


