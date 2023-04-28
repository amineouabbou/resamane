import Footer from '../Footer'
import Header from '../Header'

const Layout = (props) => {
  return (
    <>
      <Header lang={props.lang} />
      {props.children}
      <Footer lang={props.lang} />
    </>
  )
}

export default Layout
