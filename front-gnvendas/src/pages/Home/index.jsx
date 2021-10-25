
import './styles.css'



export default function Home() {
    return (
      <>
      <main className = "contentContainer">
        <section className = "hero">
          <span id="section_span">👏 Bem vindo ao GN-Vendas</span>
          <h1>Encontre os melhores <span className="color_span">Produtos</span></h1>
          <p id="p_text">
            Aqui você também pode cadastrar <br /> novos produtos  
            <span className="color_span"> para venda</span>
          </p>
          
        </section>
        <img src="/carrinho.png" alt="girl conding" />
      </main>
      </>
      
    )
  }

