import React from "react"
import styles from "./Produto.module.css"
import { useParams } from "react-router-dom"
import Head from "./Head"

const Produto = () => {
  const { id } = useParams()
  const [produto, setProduto] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setProduto(json)
      } catch (error) {
        console.error("Ocorreu um erro: ", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if(loading) return <p>Carregando...</p>
  if(!produto) return null
  return (
    <section className={styles.produto + ' animeLeft'}>
      <Head title={`Ranek | ${produto.nome}`} description={produto.descricao} />
      {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo}/>)}
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto
