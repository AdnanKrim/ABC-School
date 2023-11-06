import ad1 from '../../../../public/images/sheikh mujib.png'
import ad2 from '../../../../public/images/shadinota.jpeg'
import ad3 from '../../../../public/images/bijoy.png'

const Advertisement = () => {
    return (
        <div className='sm: hidden lg:flex md:flex mt-10'>
            <div>
            <img className='w-[550px] h-[250px]' src={ad1} alt="মুজিব শতবর্ষ" />
            <img className='w-[350px] h-[250px]' src={ad2} alt="স্বাধীনতা দিবস" />
            <img className='w-[350px] h-[250px]' src={ad3} alt="বিজয় দিবস " />
            </div>
        </div>
    );
};

export default Advertisement;