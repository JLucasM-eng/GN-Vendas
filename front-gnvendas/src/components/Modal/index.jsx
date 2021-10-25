import React, { useContext, useState,useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { ProductContext } from '../../stores/ProductStore'
import './styles.css'

const Modal = ({onClose = ()=>{},data})=>{
    const history = useHistory()
    const {buyProduct} = useContext(ProductContext)

    const [nome,setNome]=useState("")
    const [telefone,setTelefone]=useState("")
    const [cpf,setCpf]=useState("")
    const [dataToSend,setDataToSend]=useState({
        "nome":"", 
        "cpf":"",
        "telefone":"",
        "item":{"nome_produto":"","valor_produto":null}
    })

    useEffect(()=>{
        const hydrate = async ()=>{
            try {
                await buyProduct(dataToSend)
            }
            catch (e) {
                console.log(e)
            }
            finally {
              history.push('/finishedBuy')
              onClose()
            }
        }
        if(dataToSend.nome!==""){
            hydrate()
        }
       // eslint-disable-next-line 
    },[dataToSend])
    
    return(
        <div className="modal">
            <div className="container">
                <button id="close" onClick={onClose}/>
                <div className="content">
                <>
              <h2 id="titleModal">Comprar Produto</h2>
              <h4 id="subtitleModal">Preencha as informações abaixo para concluir a compra:</h4>
              <form onSubmit={(event) => {
                event.preventDefault()
                setDataToSend({
                    "nome":nome, 
                    "cpf":String(cpf),
                    "telefone":String(telefone),
                    "item":{
                        "nome_produto":data.nome_produto,
                        "valor_produto":String(data.valor_produto).replace(/[^0-9]/g,'').length>=4?Number(String(data.valor_produto).replace(/[^0-9]/g,'')):Number(String(data.valor_produto).concat('0'.repeat(4-String(data.valor_produto).replace(/[^0-9]/g,'').length)).replace(/[^0-9]/g,''))}
                })
                setNome('')
                setCpf('')
                setTelefone('')
                
                
              }}>
                <fieldset>
                  <div>
                    <label>Nome Completo</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder={nome.length > 0 ? '' : 'Ex: Peter Clovis'}
                      value={nome}
                      onChange={event => {
                        setNome(event.target.value)
                      }}
                      required />
                  </div>

                  <div>
                    <label>Telefone</label>
                    <input
                      type="text"
                      id="telefone"
                      name="telefone"
                      minlength="10"
                      placeholder={telefone.length>0 ? '' : 'Ex: 31999999999'}
                      value={telefone}

                      onChange={event => {
                        setTelefone(Number(event.target.value))
                      }}
                      required />
                      <p>*Apenas números, DDD de 2 caracteres</p>
                  </div>

                  <div>
                    <label>CPF</label>
                    <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      placeholder={cpf.length>0 ? '' : 'Ex: 13245678900'}
                      value={cpf}
                      minlength="11" 
                      maxlength="11"

                      onChange={event => {
                        setCpf(Number(event.target.value))
                      }}
                      required />
                      <p>*Apenas números</p>
                  </div>
                </fieldset>
                <h4 id="Compra">Informações da Compra:</h4>
                <div>Nome do Produto: {data.nome_produto}</div>
                <div> Valor: R${data.valor_produto}</div>


                <button type="submit">Finalizar Compra</button>
              </form>
            </>
                </div>
            </div>
        </div>
    )
}

export default Modal;