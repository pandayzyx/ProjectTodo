var arr = [];
var flag = false;
var flag2 = false;

//Function to display the card to the user when he adds a item to the todo list
const display_items = () => {
	const inputs = document.getElementById("items_value");

	// Creating the card for thr todo list and appending it to the col parent with id todo_list
	let todo_list = document.getElementById("todo_list");
	let divs = document.createElement("div");
	divs.setAttribute("class", "card");
	todo_list.appendChild(divs);

	// Creating parent div flex which contains checkboxes, h3tag,editinput and edit btn.
	let flex_div = document.createElement("div");
	flex_div.setAttribute("class", "p-1 py-1 d-flex flex-row");
	flex_div.setAttribute("id", "flex_div");
	divs.appendChild(flex_div);

	// Creating checkboxes to  the todo list
	let check_box = document.createElement("input");
	check_box.setAttribute("type", "checkbox");
	check_box.setAttribute("style", "height:30px;width:8%");
	check_box.addEventListener("click", remove_items);

	// Creating h3 tag to display the todo list
	let h3 = document.createElement("h3");
	h3.setAttribute("class", "ml-2 mt-1");
	h3.addEventListener("click", edit);
	h3.textContent = inputs.value;

	//Appending check boxes and h3 tags to the parent div with class flex
	flex_div.append(check_box, h3);
	inputs.value = "";
};
let btn = document.getElementById("add_items");
btn.addEventListener("click", display_items);

//Creating edit button and input for editing the items in the list
const edit = () => {
	if (flag2 == false) {
		let input = document.createElement("input");
		input.setAttribute("class", "form-control border border-danger ml-5 mr-5");

		let edit_btn = document.createElement("button");
		edit_btn.setAttribute("class", "btn btn-secondary px-3 mr-5");
		edit_btn.textContent = "Edit";
		edit_btn.addEventListener("click", edit_items);
		event.target.parentNode.append(input, edit_btn);
		flag2 = true
	}
};

//Function to edit the item in the card
const edit_items = () => {
	let x = event.target.previousSibling.value;
	console.log(x);
	event.target.previousSibling.previousSibling.textContent = x;
	event.target.previousSibling.remove();
	event.target.remove();
	flag2 = false
	
};

//Function to remove items from the todolist
const remove_items = () => {
	let done_list = document.getElementById("done_list");
	let todo_list = document.getElementById("todo_list");
	if (
		event.target.parentNode.parentNode.parentNode ==
		document.getElementById("todo_list")
	) {
		event.target.nextSibling.style.textDecoration = "line-through";
		var y = event.target.parentNode.parentNode;

		setTimeout(() => {
			done_list.append(y);
			console.log(done_list);
		}, 300);
	} else {
		event.target.nextSibling.style.textDecoration = "none";
		var z = event.target.parentNode.parentNode;
		todo_list.prepend(z);
	}
};

//Function to keep and display the tasks which are already completed 
const display_done_task = () => {
	let done_list = document.getElementById("done_list");
	if (flag == false) {
		done_list.setAttribute("class", "col-4 d-block");
		flag = true;
	} else {
		done_list.setAttribute("class", "col-4 d-none");
		flag = false;
	}
};
var complete_btn = document.getElementById("completed_task");
complete_btn.addEventListener("click", display_done_task);
