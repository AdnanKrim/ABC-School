import Advertisement from '../../Shared/Advertisement/Advertisement';
import Banner from '../../Shared/Banner/Banner';
import Messages from '../../Shared/Messages/Messages';

const Home = () => {
    return (
<div>

<Banner/>
<div className='flex mx-3 items-center'>
<Messages/>
<Advertisement/>
</div>

 </div>
    );
};

export default Home;