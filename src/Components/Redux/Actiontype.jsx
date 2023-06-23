export const takedata = (data)=>{
    return{
        type:"Datas",
        payload:data
    }
}

export const funcsend = (data)=>{
    return{
        type:"SEND",
        payload:data
    }
}