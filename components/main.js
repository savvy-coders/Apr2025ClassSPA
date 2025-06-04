import html from "html-literal";
import * as views from "../views";

export default (viewName) => html`
  ${views[viewName]}
  <!-- ${views['home']()}
  ${views['aboutMe']()}
  ${views['pizza']()}
  ${views['order']()}
  ${views['viewNotFound']()} -->
`;

