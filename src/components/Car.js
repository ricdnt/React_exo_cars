import '../components_css/car.css';
import Wrapper from './Wrapper';

function Car({ carBrand, carYear, carColor }) {

    if (carBrand && carColor) {
        return (
            
            <Wrapper>
                <p>Marque: { carBrand } </p>
                <p>Année: { carYear }</p>
                <p>Couleur: { carColor } </p>
            </Wrapper>
        
        )
    }
    else if (carBrand && !carColor) {
        return (
            <Wrapper>
                <p>Marque: { carBrand } </p>
                <p>Année: { carYear }</p>
                <p>Couleur: No data </p>
            </Wrapper>
        )
    }
    
}

export default Car;
