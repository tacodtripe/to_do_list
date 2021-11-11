import { JSDOM } from "jsdom";

const toDoListCointainer = new JSDOM(`
<div id="toDoListContainer">
  <div class="row justify-content-center align-items-baseline border-top">
    <div class="col-1 checkBoxContainer">
      <span class="checkBoxSpan" style="display: block;"></span>
      <i class="fas fa-check" style="display: none;" aria-hidden="true"></i>
    </div>
    <p class="col-10 align-self-center">one</p>
    <input class="col-10 align-self-center" style="display: none;">
    <div class="col-1 d-flex justify-content-end">
      <i class="fas fa-ellipsis-v mt-1 me-3" aria-hidden="true"></i>
      <i class="fas fa-trash-alt mt-1" aria-hidden="true"></i>
    </div>
  </div>
  <div class="row justify-content-center">
    <button class="col-12" id="clearAllButton">Clear all completed</button>
  </div>
</div>
`);

export default toDoListCointainer;
