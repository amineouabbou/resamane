import Mobileheader from '../../html/Mobileheader'
import Footer from '../Footer'

const HomeLayout = ({ children }) => {
  return (
    <>
      <Mobileheader />
      {children}
      <Footer />
    </>
  )
}

export default HomeLayout
