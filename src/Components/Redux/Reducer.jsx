const initialdata = {
    add_data:null,
    sendata:null
}

export let Reducer=(Storedata=initialdata,action)=>{
 if(action.type=="Datas"){
    return{
        ...Storedata,
       add_data : action.payload
    }
 }
 
 else if(action.type == "SEND"){
    return{
        sendata:action.payload
    }
 }
 return Storedata
}