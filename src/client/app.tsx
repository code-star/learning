import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import RenderTree from "./components/_RenderTree.tsx";
import { guide } from "./generated/_guide.tsx";

const App = () => (
  <>
    <h1>Study guide</h1>
    <RenderTree topicTree={guide} />
  </>
);

export default App;
