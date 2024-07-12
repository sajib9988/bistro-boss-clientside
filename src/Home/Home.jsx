
import Catagory from '../Catagory/Catagory';
import Banner from './Banner/Banner';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='mx-auto container'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;