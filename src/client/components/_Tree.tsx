// TODO fix to use import_map
import { React } from "https://deno.land/x/pagic@v1.2.1/mod.ts";
import generateHtml from "../utils/_generateHtml.tsx";
import { guide } from "../../generated/_guide.ts";

const Tree = () => {
  //   fetch("http://127.0.0.1:3000/guide.json")
  //     .then((x) => x.json())
  //     .then((x) => console.log(x));
  return (
    <>
      <h1>Study guide</h1>
      {generateHtml(guide)}
    </>
  );
};

export default Tree;
