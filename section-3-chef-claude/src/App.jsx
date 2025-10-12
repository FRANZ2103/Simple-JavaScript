import { createRoot } from "react-dom/client";
import ChefHeader from "../chef components/components/ChefHeader";
import Chef from "../chef components/components/Chef";
createRoot(document.getElementById("root")).render(
  <>
  <ChefHeader/>
  <Chef/>
  </>
)

export default  App()