import Message from "./Message"
import Header from "./Header"
import Banner from "./Banner"
import LogoCloud from "./LogoCloud"
import Section1 from "./Section1"
import Tile from "./Tile"
import Price from "./Price"
import Content from "./ContentProduct"
import ContentFeature from "./ContentFeatureProduct"
import Footer from "./Footer"
import CosmosCanvas from "./Prueba"

function App() {
  return (
    <div>
      <Header></Header>
      

      <Message></Message>
      <ContentFeature></ContentFeature>
      <Section1></Section1>
      <LogoCloud></LogoCloud>
      <Tile></Tile>

      <Content></Content>
      <Price></Price>
      <CosmosCanvas></CosmosCanvas>
      <Footer></Footer>

    </div>
  )
}
export default App