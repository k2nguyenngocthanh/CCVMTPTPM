import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({Component}) {
    return (
      <div className='min-h-screen h-full flex flex-col space-y-10'>
         <Header/>
         
         <div className='flex-grow'>
         <Component/>
         </div>
         <Footer/>
  
     
  
          
      </div>
    )
  }
  