// ..........dom selection ...........
let counter = document.querySelector(".counter");
let createInput = document.querySelector(".createInput");
let TodoList_div = document.querySelector(".TodoList_div");

// Enter keyPress function to run the button
createInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") handleClickCreate();
});
//..............create click event........
let handleClickCreate = () => {
  if (createInput.value == "") {
    alert("Enter something......");
  } else {
    // ..................creating dom/Tags
    let singleTodoCard_div = document.createElement("div");
    let todoCardInput_input = document.createElement("input");
    let wrapper_ul = document.createElement("ul");

    // ...appending Children for TodoList_div..........
    TodoList_div.appendChild(singleTodoCard_div);
    // ...appending Children for single card..........
    singleTodoCard_div.appendChild(todoCardInput_input);
    singleTodoCard_div.appendChild(wrapper_ul);

    //   adding className for single Card div
    singleTodoCard_div.classList.add("singleTodoCard");
    //   adding className for single Card input
    todoCardInput_input.classList.add("todoCardInput");
    //   adding className for single Card ul
    wrapper_ul.classList.add("wrapper");
    //   wrapper_ul.className = "wrapper"; it replaces
    // all the previous existing classes

    // adding input value
    todoCardInput_input.value = createInput.value;

    // ..................creating dom/Tags for buttons
    // edit button......
    let edit_icon_li = document.createElement("li");
    let edit_span_toolTip = document.createElement("span");
    let edit_button_icon = document.createElement("i");

    // appending edit buttons in the edit_icon_li
    edit_icon_li.appendChild(edit_span_toolTip);
    edit_icon_li.appendChild(edit_button_icon);

    // edit button tooltip text
    edit_span_toolTip.textContent = "Edit";

    // appending edit buttons in the wrapper_ul
    wrapper_ul.appendChild(edit_icon_li);

    //   adding className for edit button
    edit_icon_li.classList.add("icon", "edit");
    edit_span_toolTip.classList.add("tooltip");
    edit_button_icon.classList.add("fa-solid", "fa-pen-to-square");

    // delete button......
    let delete_icon_li = document.createElement("li");
    let delete_span_toolTip = document.createElement("span");
    let delete_button_icon = document.createElement("i");

    // appending delete buttons in the delete_icon_li
    delete_icon_li.appendChild(delete_span_toolTip);
    delete_icon_li.appendChild(delete_button_icon);

    // delete button tooltip text
    delete_span_toolTip.textContent = "Delete";

    // appending delete buttons in the wrapper_ul
    wrapper_ul.appendChild(delete_icon_li);
    //   adding className for delete button
    delete_icon_li.classList.add("icon", "delete");
    delete_span_toolTip.classList.add("tooltip");
    delete_button_icon.classList.add("fa-solid", "fa-trash");
    // Done button......
    let done_icon_li = document.createElement("li");
    let done_span_toolTip = document.createElement("span");
    let done_button_icon = document.createElement("i");

    // appending Done buttons in the done_icon_li
    done_icon_li.appendChild(done_span_toolTip);
    done_icon_li.appendChild(done_button_icon);

    // done button tooltip text
    done_span_toolTip.textContent = "Done";

    // appending Done button in the wrapper_ul
    wrapper_ul.appendChild(done_icon_li);
    //   adding className for Done button
    done_icon_li.classList.add("icon", "done");
    done_span_toolTip.classList.add("tooltip");
    done_button_icon.classList.add("fa-regular", "fa-circle-check");

    // Clearing input value
    createInput.value = "";

    //   making the input read only
    //   todoCardInput_input.readOnly = true; // alternative
    todoCardInput_input.setAttribute("readonly", "readOnly");

    //   editing function.....
    edit_icon_li.addEventListener("click", () => {
      edit_icon_li.classList.toggle("save");
      if (edit_icon_li.classList.contains("save")) {
        //   todoCardInput_input.readOnly = false;
        todoCardInput_input.removeAttribute("readonly");
        todoCardInput_input.style.backgroundColor = "#f0e9e99d";
        edit_span_toolTip.textContent = "Save";
        edit_button_icon.classList.add("fa-solid", "fa-floppy-disk");
      } else {
        todoCardInput_input.style.backgroundColor = "";

        edit_button_icon.classList.remove("fa-solid", "fa-floppy-disk");
        edit_button_icon.classList.add("fa-solid", "fa-pen-to-square");
        // edit button click to make read only true again

        todoCardInput_input.setAttribute("readonly", "readOnly");
        edit_span_toolTip.textContent = "Edit";
      }
    });

    //   deleting function.....
    delete_icon_li.addEventListener("click", () => {
      singleTodoCard_div.remove();
    });
    //   done function.....
    done_icon_li.addEventListener("click", () => {
      if (done_icon_li.style.backgroundColor === "rgb(219, 219, 24)") {
        done_icon_li.style.backgroundColor = "";
      } else {
        done_icon_li.style.backgroundColor = "rgb(219, 219, 24)";
      }
    });
  }
};
// ....................alternative and easier............
// just put it inside the handleClick function
// ......function to create a button .....

//   const createButtonItem = (type, tooltipText, iconClassList) => {
//     let li = document.createElement("li");
//     li.classList.add("icon", type);

//     let span = document.createElement("span");
//     span.classList.add("tooltip");
//     span.textContent = tooltipText;

//     let icon = document.createElement("i");
//     icon.classList.add(...iconClassList);

//     li.appendChild(span);
//     li.appendChild(icon);
//     wrapper_ul.appendChild(li);
//   };

//   // Create buttons
//   createButtonItem("edit", "Edit", ["fa-solid", "fa-pen-to-square"]);
//   createButtonItem("delete", "Delete", ["fa-solid", "fa-trash"]);
//   createButtonItem("done", "Done", ["fa-regular", "fa-circle-check"]);
