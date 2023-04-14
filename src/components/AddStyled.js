


/*function addstyled(e) {
   console.log(e)
   e.target.classList.add('styled')
}*/

function AddStyled (e) {

    // console.log(e);

     if (e.target.classList.contains('styled')){
         e.target.classList.remove('styled')
     } else {
         e.target.classList.add('styled')

     }
 }

export default AddStyled;