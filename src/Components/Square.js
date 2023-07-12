function Square({values, onSquareClick}){
    return(
      <button className='buttonoption' onClick={onSquareClick}>{values}</button>
    );
  }

export default Square;