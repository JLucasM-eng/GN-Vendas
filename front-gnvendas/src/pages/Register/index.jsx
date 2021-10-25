import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../stores/ProductStore';
import './styles.css';

//import {Link} from 'react-router-dom'
//import { useLocation } from 'react-router-dom'

function Register() {

    const {registerProduct} = useContext(ProductContext)

    const [nomeProduto,setNomeProduto] = useState("")
    const [valorProduto,setValorProduto] = useState(null)
    const [dataToSend,setDataToSend]=useState({"nome_produto":"",
    "valor_produto":0})
    const [successRegister,setSuccessRegister]=useState(false)


    useEffect(()=>{
        const hydrate = async ()=>{
            try {
                await registerProduct(dataToSend)
            }
            catch (e) {
                console.log(e)
            }
        }
        if(dataToSend.nome_produto!==""){
            hydrate()
        }
       // eslint-disable-next-line 
    },[dataToSend])

  return (
      <>
      <h2 id="title">Cadastro de Produto</h2>
        <form onSubmit={(event)=>{
            event.preventDefault()
            setDataToSend({
                "nome_produto":nomeProduto,
                "valor_produto":Number(valorProduto)
            })
            if(nomeProduto.length>0 && valorProduto!==0){
                setSuccessRegister(true)
            }
            setNomeProduto('')
            setValorProduto(0)
        }}>
            <fieldset>
                <div>
                    <label>Nome do Produto</label>
                    <input 
                        type="text" 
                        id="nome_prod" 
                        name="name_prod" 
                        placeholder={nomeProduto.length>0?'':'Ex: Produto 1'}
                        value={nomeProduto}
                        onChange={event=>{
                            setNomeProduto(event.target.value)

                        }} 
                        required/>
                </div>

                <div>
                    <label>Valor do Produto (R$)</label>
                    <input 
                        type="number" 
                        id="valor_prod"
                        min="0" 
                        name="valor_prod"
                        value={valorProduto}
                        step="any"
                        onChange={event=>{
                            setValorProduto(event.target.value)
                        }}  
                        required/>
                        <p>*Utilize a vírgula para separar casas decimais</p>
                </div>
                

                
            </fieldset>
            
            
            <button type="submit">Cadastrar produto</button>
        </form>
        <div id="SuccessMessage">{successRegister?"🤙 Cadastro Realizado com sucesso":null}</div>
      </>
    
  );
}

export default Register;
