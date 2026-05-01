import { useState } from "react";

export default function App() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      {liked ? <h1>You liked this message</h1> : 
      <button onClick={() => setLiked(true)}>Like</button>}
    </div>
  );
}
 
