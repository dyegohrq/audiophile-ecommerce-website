import { Link } from "react-router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import './index.css'
import style from '../../components/root.module.css'

export function Checkout() {
    return(
        <div>
            <Header/>
            <main>
                <div className=" w-full h-[90px] bg-black mb-[16px] " ></div>
                <Link to={'/'} >Go back</Link>

                <form className="bg-white rounded-[8px] " >
                    <h1 className={style['text-present-4']} >Checkout</h1>
                    <div className="mt-[32px] formImputs " >
                        <h2 className={style.subtitle} >Billig details</h2>
                        <article  >
                            <div className="my-[16px] " >
                                <label>Name</label>
                                <Input
                                    type="text"
                                    placeholder="Alexei Ward"
                                />
                            </div>
                            <div className="my-[16px] " >
                                <label>Email Address</label>
                                <Input
                                    type="text"
                                    placeholder="alexei@email.com"
                                />
                            </div>
                            <div className="my-[16px] " >
                                <label>Phone Number</label>
                                <Input
                                    type="text"
                                    placeholder="+1 202-555-0136"
                                />
                            </div>
                        </article>
                    </div>
                    <div className="mt-[32px] formImputs " >
                        <h2 className={style.subtitle} >Shipping info</h2>
                        <article  >
                            <div className="my-[16px] " >
                                <label>Your Address</label>
                                <Input
                                    type="text"
                                    placeholder="1137 Williams Avenue"
                                />
                            </div>
                            <div className="my-[16px] " >
                                <label>ZIP Code</label>
                                <Input
                                    type="text"
                                    placeholder="10001"
                                />
                            </div>
                            <div className="my-[16px] " >
                                <label>City</label>
                                <Input
                                    type="text"
                                    placeholder="New York"
                                />
                            </div>
                            <div className="my-[16px] " >
                                <label>Country</label>
                                <Input
                                    type="text"
                                    placeholder="United States"
                                />
                            </div>
                        </article>
                    </div>
                    <div className="mt-[32px] formImputs " >
                        <h2 className={style.subtitle} >Payment Datails</h2>
                        <article  >
                            <div className="my-[16px] " >
                                <label>Payment Method</label>
                                <div className=" flex items-center gap-[21px] border rounded-[8px] py-[18px] px-[20px] " >
                                    <input
                                        type="radio"
                                        placeholder="1137 Williams Avenue"
                                        name="e-money"
                                        id="number"
                                    /> <label htmlFor="number">e-Money</label>
                                </div>
                                <div className=" flex items-center gap-[21px] border rounded-[8px] py-[18px] px-[20px] " >
                                    <input
                                        type="radio"
                                        placeholder="1137 Williams Avenue"
                                        name="e-money"
                                        id="pin"
                                    /> <label htmlFor="pin">Cash on Delivery</label>
                                </div>
                            </div>
                            <div className="my-[16px] " >
                                <label>e-Money Number</label>
                                <Input
                                    type="text"
                                    placeholder="238521993"
                                />
                            </div>
                            <div className="my-[16px] " >
                                <label>e-Money PIN</label>
                                <Input
                                    type="text"
                                    placeholder="6891"
                                />
                            </div>
                        </article>
                    </div>
                </form>
            </main>
            <Footer/>
        </div>
    )
}