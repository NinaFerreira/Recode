
import Carousel from '../carousel-home/Carousel';

function Home() {
    return (
        <div className="row mb-5">
            <div className="row justify-content-center shadow  mt-5">
                <Carousel img1="/img/PARIS.jpg" img2="/img/noranha.jpg" img3="/img/maragogi-alagoas.jpg" link="Destinos" text="Destinos"/>

                <Carousel img1="/img/natal.jpg" img2="/img/ferias.jpg" img3="/img/carnaval.jpg" link="Promocoes" text="Promoções" />
            </div>
        </div >
    )
}

export default Home