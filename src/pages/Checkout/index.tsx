import { Link } from "react-router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import './index.css'
import style from '../../components/root.module.css'
import { useState } from "react";

export function Checkout() {
    const [selected, setSelected] = useState(false)

    return(
        <div>
            <Header/>
            <main>
                <div className=" w-full h-[90px] bg-black mb-[16px] " ></div>
                <Link to={'/'} >Go back</Link>

                <form className="bg-white rounded-[8px] " >
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
                </form>
            </main>
            <Footer/>
        </div>
    )
}