import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from '../ingredient/Ingredient';
import style from './ListIngredients.module.css'

const ListIngredients = React.forwardRef(({ ingredients, title, clickIngredient, onClick }, ref) => {

   const clickItem = (elem) => {
      clickIngredient(elem);
      onClick();
   }

   return (
      <>
         <div className='text text_type_main-medium mt-10 mb-6' ref={ref}>{title}</div>

         <div className={style.colomn}>
            {
               ingredients.map((element) => {
                  return (
                     <Ingredient ingredient={element} counter={1} onClick={clickItem} key={element._id} />
                  )
               })
            }
         </div>
      </>
   )
})

ListIngredients.propTypes = {
   ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
   title: PropTypes.string.isRequired,
   clickIngredient: PropTypes.func.isRequired,
   onClick: PropTypes.func.isRequired
}

export default ListIngredients;