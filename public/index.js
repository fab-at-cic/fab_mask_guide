import { render, makeID } from "./libs.js";
import { section } from "./sections/section-template.js";

render(document.body, section({}, makeID()));
// render(section({}, makeID()), document.body);
