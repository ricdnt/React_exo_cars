import React from 'react';
import Car from './Car';
import Wrapper from './Wrapper';
import MyHeaders from './MyHeaders';
import Welcome from './Welcome';
import '../components_css/car.css';




class Mycars extends React.Component {

    state = {
        cars : [
            {name: 'Ford', year: 2001, color: 'Blue'},
            {name: 'Fiat', year: 2005, color: 'White'},
            {name: 'Volvo', year: 2018, color: 'Black'},
            {name: 'Peugeot', year: 2022, color: 'Green'}
        ]

    }


      /*  brand:["Ford", "Fiat", "Volvo"],
        year: ["2001", "2005", "2018"],
        color: ["Blue", "White", "Black"],
    }*/

    addTenYears = () => {

    const newAge = this.state.cars.map( (param) => {
        return param.year += 10 ;
    })

        this.setState(
            newAge
        )
    }
  
    render(){
        const { title, colorTitle, subTitle } = this.props;

        
    
        return (
            <div>

                <Welcome/>
               
                <Wrapper >
                    <MyHeaders  title = { title } headerColor = { colorTitle } subTitle = { subTitle } />
                </Wrapper>
     

                <button onClick={ this.addTenYears }> + 10 ans </button>
               
                {
                
                this.state.cars.map(({name, year, color}, index) => {
                    return(
                        <div key = {index}>
                    <Car carBrand= {name}
                         carYear= {year}
                         carColor= {color}
                     />
                       </div>
                )
                })
                 
                }

            </div>
        )
    }
}

export default Mycars;

//BIN
 //  {
   //     console.log(e.target);
   //}
//onMouseOver = {this.addstyled}

/* noCopy = () => {
        alert('do not copy that !');
    }

    ifClick = (e) => {
        console.log(e.target);
    }*/

    //onCopy = {this.noCopy}

    //headerColor = { colorTitle }

    /* ifClick = (e) => {
        console.log(e.target);

         <p  onMouseOver={ addStyled }>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>


                <Car carBrand= {this.state.cars[0].name} carYear= {this.state.cars[0].year} carColor= {this.state.cars[0].color} />
                <Car carBrand= {this.state.cars[1].name} carYear= {this.state.cars[1].year} carColor= {this.state.cars[1].color} />
                <Car carBrand= {this.state.cars[2].name} carYear= {this.state.cars[2].year} carColor= {this.state.cars[2].color} />
                

    }*/