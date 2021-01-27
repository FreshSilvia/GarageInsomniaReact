import ImageSlider from '../Components/Hero/ImageSlider';
import { SliderData } from '../Components/Hero/SliderData';
import '../css/main.css';
// import Hero from '../Components/Hero/Hero';

const Contactus = () => {
    return (
        <>
            <ImageSlider slides={SliderData}/>
            {/* <Hero /> */}
        </>
    )
}

export default Contactus;