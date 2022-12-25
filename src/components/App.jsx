import React from "react";
import EmojiCard from "./EmojiCard";
import emojipedia from "../emojipedia";

function createCard(emoji) {
  return (
    <EmojiCard
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
