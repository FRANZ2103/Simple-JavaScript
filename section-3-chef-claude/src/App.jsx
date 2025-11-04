import { createRoot } from "react-dom/client";
import ChefHeader from "../chef components/components/ChefHeader";
import Chef from "../chef components/components/Chef";

import Contact from "../contact-components/Contact"
import SimpleForm from "../form-data-components/SimpleForm";
createRoot(document.getElementById("root")).render(
  <>
  {/* <ChefHeader/>
  <Chef/> */}
  <SimpleForm/>
  </>
)

export default  App()