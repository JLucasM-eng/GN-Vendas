import { useContext} from 'react';
import { ProductContext } from '../../stores/ProductStore';
import {useHistory} from 'react-router-dom'
import './styles.css';

//import {Link} from 'react-router-dom'
//import { useLocation } from 'react-router-dom'

function FinishedBuy() {

    const {dataBuyProduct} = useContext(ProductContext)
    const history = useHistory()

  

    
  return (

      <div id="containerFinished">
      <h2 id="titleFinished">{dataBuyProduct?.error===undefined?"Compra Realizada Com sucesso!":"Compra NÃO realizada"}</h2>
      {dataBuyProduct?.error===undefined?
       // eslint-disable-next-line
      <><a href={dataBuyProduct?.pdf.charge} target="_blank">Gerar Boleto</a>
      <button onClick={()=>{history.push('/')}}>Voltar para Home</button></>
      :
      <><div>{dataBuyProduct?.code === 3500034 ?"Nome ou telefone inválido":dataBuyProduct?.error_description}</div>
      <button onClick={()=>{history.push('/products')}}>Tentar novamente</button></>
      }
      
      </div>
      
    
  );
}

export default FinishedBuy;
