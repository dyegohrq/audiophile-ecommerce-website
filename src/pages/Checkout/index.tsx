import { Link } from "react-router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import './index.css'
import style from '../../components/root.module.css'
import { useContext } from "react";
import { productContext } from "../../context/Context";

export function Checkout() {
    // const [selected, setSelected] = useState(false)
    const { product, calculateTotal, vatAmount, shipping, grandTotal } = useContext(productContext)

    return(
        <div>
            <Header/>
            <main>
                <div className=" w-full h-[90px] bg-black mb-[16px] " ></div>
                <Link to={'/'} >Go back</Link>

                <form className=" flex flex-col md:flex-row justify-between md:gap-[30px] mb-[64px] " >
                    <div className="form bg-white rounded-[8px] md:w-full md:max-w-[70%] md:p-[50px] ">
                        <h1 className={style['text-present-4']} >Checkout</h1>
                        <article>
                            <h2 className={`${style.subtitle}`} >Billing Details</h2>
                            <div className=" w-full flex flex-col md:flex-row gap-4 " >
                                <div className="w-full" >
                                    <label htmlFor="name">Name</label>
                                    <Input
                                        id="name"
                                        placeholder="Alexei Ward"
                                    />
                                </div>
                                <div className="w-full" >
                                    <label htmlFor="email">Email Address</label>
                                        <Input
                                            id="email"
                                            placeholder="alexei@gmail.com"
                                        />
                                </div>
                            </div>
                            <div className="mt-4 md:max-w-[50%] " >
                                <label htmlFor="phone">Phone Number</label>
                                <Input
                                    id="phone"
                                    placeholder="+1 202-555-0136"
                                />
                            </div>
                        </article>
                        <article>
                            <h2 className={style.subtitle} > Shippinng Info </h2>
                            <div>
                                <label htmlFor="Address">You Address</label>
                                <Input
                                    id="Address"
                                    placeholder="1137 Williams Avenue"
                                />
                            </div>
                            <div className=" flex flex-col md:flex-row gap-4 my-4 " >
                                <div className=" w-full " >
                                    <label htmlFor="code">ZIP Code</label>
                                    <Input
                                        id="code"
                                        placeholder="10001"
                                    />
                                </div>
                                <div className=" w-full " >
                                    <label htmlFor="city">City</label>
                                    <Input
                                        id="city"
                                        placeholder="New York"
                                    />
                                </div>
                            </div>
                            <div className=" md:max-w-[50%] " >
                                <label htmlFor="country">Country</label>
                                <Input
                                    id="country"
                                    placeholder="United States"
                                />
                            </div>
                        </article>
                        <article>
                            <h2 className={style.subtitle} > Payment Details </h2>
                            <div className=" flex flex-col gap-[17px] md:flex-row md:justify-between " >
                                <label>Payment Method</label>
                                <div className=" flex flex-col gap-[16px] w-full md:max-w-[50%] " >
                                    <label className=" method w-full border-[1px] py-[18px] px-[16px] flex items-center gap-[16px] rounded-[8px] " >
                                        <input
                                            type="radio"
                                        />
                                        <span>e-Money</span>
                                    </label>
                                    <label className=" method w-full border-[1px] py-[18px] px-[16px] flex items-center gap-[16px] rounded-[8px] " >
                                        <input
                                            type="radio"
                                        />
                                        <span>Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>
                            <div className=" flex flex-col w-full my-[16px] md:flex-row gap-[16px] " >
                                <div className="w-full md:max-w-[50%] " >
                                    <label htmlFor="number">e-Money Number</label>
                                    <Input
                                        id="number"
                                        placeholder="238521993"
                                    />
                                </div>
                                <div className="w-full md:max-w-[50%] " >
                                    <label htmlFor="pin">e-Money PIN</label>
                                    <Input
                                        id="pin"
                                        placeholder="6891"
                                    />
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="form bg-white rounded-[8px] lg:w-full lg:max-w-[30%] h-full lg:max-h-auto" >
                        <h1 className={style['text-present-4']} >Summary</h1>

                        <ul className="flex flex-col gap-[16px] my-[16px] " >
                            {
                                product.map((item) => (
                                    <li key={item.id} className="flex items-center justify-between" >
                                        <div className="flex gap-[16px] items-center " >
                                            <div>
                                                <img src={item.categoryImage.mobile.replace("./assets/", "/assets/")} alt={item.slug} className="max-w-[64px] rounded-[8px] " />
                                            </div>
                                            <div>
                                                <h3 className={style['text-present-7']} > 
                                                {
                                                    item.name.replace('Headphones', '')
                                                    .replace('Wireless Earphones', '')
                                                } 
                                                </h3>
                                                <span className="number" > 
                                                    {item.price.toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'USD'
                                                    })} 
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="number" >x {item.amount}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        
                        <div className="summary flex flex-col gap-[8px] " >
                            <div className="flex justify-between " >
                                <h3>Total</h3>
                                <span>
                                    {
                                        calculateTotal().toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD'
                                        })
                                    }
                                </span>
                            </div>
                            <div className="flex justify-between " >
                                <h3>Shipping</h3>
                                <span> {shipping.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} </span>
                            </div>
                            <div className="flex justify-between " >
                                <h3>Vat (Included) </h3>
                                <span> {vatAmount().toLocaleString('en-US', {style: 'currency', currency: 'USD'})} </span>
                            </div>
                            <div className="flex justify-between my-[16px]" >
                                <h3> Grand Total </h3>
                                <span className="grandTotal" > {grandTotal().toLocaleString('en-US', {style: 'currency', currency: 'USD'})} </span>
                            </div>

                            <button className="button_default orange " >Continue & Pay</button>
                        </div>
                    </div>
                </form>
            </main>
            <Footer/>
        </div>
    )
}