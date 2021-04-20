import RenderTree from "./components/_RenderTree.js";
import { guide } from "./generated/_guide.js";
const App = () => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "Study guide"),
    React.createElement(RenderTree, { topicTree: guide })));
export default App;
