entrybox=document.querySelector("#display")
function appendOperator(str){
    entrybox.value=entrybox.value+str
    display.scrollLeft = display.scrollWidth; 
}
function appendNumber(num){
    entrybox.value=entrybox.value+num
    display.scrollLeft = display.scrollWidth; 
}
function clearDisplay(){
    entrybox.value=''
}
function deleteLast(){
    entrybox.value=entrybox.value.slice(0,(entrybox.value).length-1)
}
function invalid_division(str){
    const len=str.length
    for(let i=0;i<len-1;i++){
        if(str[i]=="/" && str[i+1]=="/"){
            return 1
        }
    }
    return 0
}
function calculate(){
    try{
        if(entrybox.value==''){
            entrybox.value=''
        }else if(invalid_division(entrybox.value)){
            entrybox.value="ERROR"
        }else{
            entrybox.value=eval(entrybox.value)
        }
        

    }catch{
        entrybox.value="ERROR"
    }
}