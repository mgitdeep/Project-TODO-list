
const MenuCard = () => {
  return (
    <>
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className='card-author subtle'>Breakfast</span>
                    <h2 className="card-title"> Chow mein </h2>
                    <span className="card-description subtle">
                      Delicious food originated from Asia. I love it! Lorem ipsum dolor sit amet.
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  {/* <img src={image} alt="images" className="card-media" /> */}

                  <span className="card-tag  subtle">Order Now</span>
            </div>
        </div>
    </>
  )
}

export default MenuCard