import './styles.css';
import { Link } from 'react-router-dom'
import { ProductContext } from '../../stores/ProductStore';
import { useContext, useEffect, useState } from 'react';
import Modal from '../../components/Modal';
function Products() {


  const { dataProducts, getProducts } = useContext(ProductContext)



  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [dataCompra,setDataCompra]=useState({})

  useEffect(()=>{
    if(isVisibleModal){
      document.body.style.overflow = 'hidden'
    }else{
       document.body.style.overflow = 'unset';
    }
    
  },[isVisibleModal])
  

  
  useEffect(() => {
    const hydrate = async () => {
      try {
        await getProducts()
      }
      catch (e) {
        console.log(e)
      }
    }
    hydrate()
    // eslint-disable-next-line
  }, [])


  if (dataProducts.length > 0) {

    return (
      <>
        <ul className="productList">

          {dataProducts.map((product) => {
            return (
              <li key={product.id}>

                <strong className="nome_produto" >{product.nome_produto}</strong>
                <span className="preco_produto">R$ {product.valor_produto}</span>
                <button
                  type="button"
                  data-testid="add-product-button"
                  onClick={() => {
                    setDataCompra({
                      "nome_produto":product.nome_produto,
                      "valor_produto":product.valor_produto
                    })
                    setIsVisibleModal(true)
                  }}
                >

                  <span id="span_button">COMPRAR</span>
                </button>
              </li>
            )
          })}

        </ul>
        {isVisibleModal ?
          <Modal onClose={() => { setIsVisibleModal(false) }} data={dataCompra} /> : null}
      </>
    );

  } else {
    return (
      <div id="NoProducts">
        <h2>Nenhum produto Cadastrado</h2>
        <p>Vá para a página <Link to="/register">Cadastro de produtos</Link> e adicione produtos para a venda.</p>
      </ div>

    )

  }

}

export default Products;
