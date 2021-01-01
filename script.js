const num_btn = document.querySelectorAll(".num");
const op_btn = document.querySelectorAll('.operation');
const target_input = document.getElementById('current-num');
const result = document.getElementById('result');
const clear_text =  document.getElementById("clear-text");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const clear_all = document.getElementById("clear-all");
let click_once = false;
let dot_click = false;
let target_input_val = '';

num_btn.forEach(function(current_val){
	current_val.addEventListener('click',setVal);
});
op_btn.forEach(function(current_val){
	current_val.addEventListener('click',selectOperation);
});
clear_text.addEventListener('click',clearText);
clear_all.addEventListener('click',clearAll);
equal.addEventListener('click',performCalc);
dot.addEventListener('click',putDot);

function setVal(event,current){
	let calculate_text;
	let is_calculate = false;
	target_input.innerText += event.target.innerText;
	calculate_text = target_input.innerText;
	is_calculate = calculate_text.includes('+') || calculate_text.includes('-') || calculate_text.includes('*') || calculate_text.includes('/');
	if (is_calculate == true) {
		try{
			result.innerText = eval(calculate_text);
		}catch(e){
			alert('Please enter valid input');
			clearAll();
		}
	}
	click_once = false;
	dot_click = false;
}

function clearText(){
	let num_val = target_input.innerText;
	let is_calculate = false;
	let calculate_text;
	calculate_text = num_val.slice(0,num_val.length - 1);
	target_input.innerText = calculate_text;
	is_calculate = calculate_text.includes('+') || calculate_text.includes('-') || calculate_text.includes('*') || calculate_text.includes('/');
	if ( is_calculate === true) {
		result.innerText = eval(num_val);
	}
	else{
		result.innerText = '';
	}
	click_once = false;
	dot_click = false;
}

function selectOperation(){
	if ( target_input.innerText != '' && click_once === false) {
		target_input.innerText += event.target.innerText ;
		click_once = true;
		dot_click = false;
	}
}
function clearAll(){
	target_input.innerText = '';
	result.innerText = '';
	click_once = false;
	dot_click = false;
}
function performCalc(){
	if ( result.innerText != '' ) {
		target_input.innerText = result.innerText;
		result.innerText = '';
		click_once = false;
		dot_click = false;
	}
}
function putDot(event){
	if ( dot_click === false ) {
		setVal(event);
		click_once = false;
		dot_click = true;
	}
}