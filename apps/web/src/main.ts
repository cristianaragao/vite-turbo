import { Header } from "@repo/ui/header";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Counter } from "@repo/ui/counter";
import { setupCounter } from "@repo/ui/setup-counter";

// import * as dotenv from "dotenv";

// dotenv.config({ path: "../../.env" });

console.log('YOUR_STRING_VARIABLE: ', process.env.YOUR_STRING_VARIABLE)

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${Header({ title: "Web" })}
    <div class="card">
      ${Counter()}
       ${process.env.YOUR_STRING_VARIABLE}
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
