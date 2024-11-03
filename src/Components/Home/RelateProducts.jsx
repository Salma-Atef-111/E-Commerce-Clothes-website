import n1 from "../../Img/n1.jpg";
import n2 from "../../Img/n2.jpg";
import n3 from "../../Img/n3.jpg";
import n5 from "../../Img/n5.jpg";

import "../Css/RelateProducts.css";

export default function RelateProducts() {
    return (
        <>
            <p className="RelateProducts">Relate Products</p>
            <hr className="hrCustomRelateProducts" />

            <div className="RelateProductsParent">
                <div className="RelateProducts1">
                    <button className="badge">20% OFF</button>
                    <img src={n1} alt="" className="RelateProductsImg" />
                    <p className="RelateProductsDes">Cartoon Astronaut <br /> T-Shirts <br />
                        <span className="oldPrice">Rp 1.500.000</span> <br />
                        <span className="newPrice">Rp 1.264.000</span>
                    </p>
                </div>
                <div className="RelateProducts1">
                <button className="badge"style={{ backgroundColor: '#01522D' }} >NEW</button>
                <img src={n2} alt="" className="RelateProductsImg" />
                    <p className="RelateProductsDes">Cartoon Astronaut <br /> T-Shirts <br />
                        <span className="newPrice">Rp 1.264.000</span>
                    </p>
                </div>
                <div className="RelateProducts1">
                <img src={n3} alt="" className="RelateProductsImg" />
                    <p className="RelateProductsDes">Cartoon Astronaut <br /> T-Shirts <br />
                        <span className="newPrice">Rp 1.118.000</span>
                    </p>
                </div>
                <div className="RelateProducts1">
                <button className="badge">20% OFF</button>
                <img src={n5} alt="" className="RelateProductsImg" />
                    <p className="RelateProductsDes">Cartoon Astronaut <br /> T-Shirts <br />
                        <span className="oldPrice">Rp 1.500.000</span> <br />
                        <span className="newPrice">Rp 1.024.000</span>
                    </p>
                </div>
            </div>
        </>
    );
}
