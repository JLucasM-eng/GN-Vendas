import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:3040",
    headers:{
        "Content-Type":"application/json"
    }
})

// eslint-disable-next-line
export default {
    getProducts:()=>
    new Promise((resolve,reject)=>{
        instance.get('listProduct')
        .then(response => {
            if(response.status ===200){
                resolve(response.data)
            }else{
                reject(new Error("Error"))
            }
        })
        .catch(err =>{
            reject(err.response ||err)
        })
    }),
    registerProduct:(data)=>
    new Promise((resolve,reject)=>{
        instance.post('register',data)
        .then(response => {
            if(response.status ===200){
                resolve(response.data)
            }else{
                reject(new Error("Error"))
            }
        })
        .catch(err =>{
            reject(err.response ||err)
        })
    }),
    buyProduct:(data)=>
    new Promise((resolve,reject)=>{
        instance.post('buyProduct',data)
        .then(response => {
            console.log("TESTANDO RESPONSE",response)
            if(response.status ===200){
                resolve(response.data)
            }else{
                reject(new Error("Error"))
            }
        })
        .catch(err =>{
            reject(err.response ||err)
        })
    })
}