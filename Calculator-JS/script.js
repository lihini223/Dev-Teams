//hojitha
function insert(num){
    document.form.textview.value=document.form.textview.value+num;
}
function equal(){
    var exp = document.form.textview.value
    if(exp){
        document.form.textview.value=eval(exp);
    }
    
function clean(){
    document.form.textview.value="";
}
function back(){
    var exp = document.form.textview.value
    document.form.textview.value=exp.substring(0,exp.length-1);
}
    
function power(){
    document.form.textview.value=document.form.textview.value*document.form.textview.value;
}
function percentage(){
    document.form.textview.value=document.form.textview.value/100;
}   
    
    
//senehe
function dis(val) {
  document.getElementById("result").value += val;
}

function clr() {
  document.getElementById("result").value = "";
}

function perc() {
  document.getElementById("result").value = result / 100;
}

function power() {
  document.getElementById("result").value = result * result;
}

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;

}
