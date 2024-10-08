
import NavBar from '../NavBar';
import Footer from '../Footer';
import ListBooks from '../ListBooks';
function Books() {
    
  return (
    <>
    <NavBar/>
    <div className='min-h-screen'>
        <ListBooks/>
    </div>
    <Footer/>
    </>
  )
}

export default Books