
var list=document.getElementById("list");
//li ka tag bana na ha for add
//js se banaege html me nhi dia






function addTodo(){
	//get input (create li tag with text node)
	var todo_item=document.getElementById("todo-item")
	var li=document.createElement('li')
	li.setAttribute("class","list1")
	//text create krdega li me woh chaiye
	var liText=document.createTextNode(todo_item.value)

	//inset this textinto li
	li.appendChild(liText)



	//creating delete button with js
	var delBtn=document.createElement("button")
	var delText=document.createTextNode("DELETE")
	
	delBtn.setAttribute("class","btn")//aik time pe multiple att set krwasakte ha js me
	delBtn.setAttribute("onclick","deleteItem(this)")
	delBtn.appendChild(delText)


	//create edit button

	var editBtn=document.createElement("button");
	var editText=document.createTextNode("EDIT")
	editBtn.setAttribute("class","editbtn")
	editBtn.appendChild(editText)
	editBtn.setAttribute("onclick","editItem(this)")


	//delbtn add into the li 
	li.appendChild(delBtn)
	li.appendChild(editBtn)





//	console.log(todo_item.value)
	list.appendChild(li)
	todo_item.value="" //input ko dubara empty krdega 
//	console.log(li)
	//console me value aegi isse jasie k gohus likha
	//woh ajega
}



function deleteItem(e){
  // console.log(e.parentNode) //pura parent miljaega li bhi li parent ha delbtn ka 
  e.parentNode.remove()
}


function editItem(e){
	var val=e.parentNode.firstChild.nodeValue;
	var editValue=prompt("Enter edit value",val)
//	console.log(e.parentNode.firstChild)

	e.parentNode.firstChild.nodeValue=editValue

}






function deleteAll(){
	list.innerHTML=""
}