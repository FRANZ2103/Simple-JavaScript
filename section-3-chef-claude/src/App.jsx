import { createRoot } from "react-dom/client";
import Chef from "../chef components/components/Chef";
import ChefHeader from "../chef components/components/ChefHeader";
createRoot(document.getElementById("root")).render(
  <>
  <ChefHeader/>
  <Chef/>
  </>
)

export default  App()