import React, { useEffect, useState} from 'react'
import product from '../api/product'

export const ProductContext = React.createContext()

export const ProductProvider = ({children})=>{

    const [dataProducts,setDataProducts]=useState([])
    const [dataBuyProduct,setDataBuyProduct]=useState([])

    const getProducts = ()=> new Promise((resolve,reject)=>{
        product.getProducts().then((data)=>{
            setDataProducts(data)
            resolve()
        }).catch(e=>{
            reject(e)
        })
    })

    const registerProduct = (data)=> new Promise((resolve,reject)=>{
        product.registerProduct(data).then(()=>{
            
            resolve()
        }).catch(e=>{
            reject(e)
        })
    })

    const buyProduct = (data)=> new Promise((resolve,reject)=>{
        product.buyProduct(data).then((data)=>{
            setDataBuyProduct(data)
            resolve()
        }).catch(e=>{
            reject(e)
        })
    })

    


    /*USE EFFECT**********************/

    useEffect(()=>{
        const hydrate = async ()=>{
            try {
                await getProducts()
            }
            catch (e) {
                console.log(e)
            }
        }
        hydrate()
    },[])

    /*render store********************/

    const renderStore = <ProductContext.Provider value={{
        dataProducts,
        registerProduct,
        getProducts,
        buyProduct,
        dataBuyProduct
    }}>
        {children}
    </ProductContext.Provider>
    
    return renderStore
}