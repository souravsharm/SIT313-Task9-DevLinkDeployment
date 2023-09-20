
import Navbar from './../Navbar/Navbar';
import Image from '../Background/Image';
import List from '../ui/List/List';
import Footer from '../Footer/Footer';
import NewsLetter from '../Subscription/NewsLetter';

function HomePage() {
  return (
    <div className="App">
      
        
      <Navbar/>
      <Image text='Bringing your imagination to life'/>
      <List title="Featured FreeLancers"/>
      <List title="Featured Customers"/>
      <NewsLetter/>
      <Footer />

     
    </div>
  );
}

export default HomePage;
