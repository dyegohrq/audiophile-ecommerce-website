import { Link } from "react-router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import "./index.css";
import style from "../../components/root.module.css";
import { useContext } from "react";
import { productContext } from "../../context/Context";
import { useForm } from "react-hook-form";
import codImg from '../../../public/assets/checkout/icon-cash-on-delivery.svg'

export type checkoutFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  paymentMethod: "eMoney" | "cash";
  eMoneyNumber: string;
  eMoneyPin: string;
};

export function Checkout() {
  const { product, calculateTotal, vatAmount, shipping, grandTotal } =
    useContext(productContext);
  const { register, watch } = useForm<checkoutFormData>();
  const paymentMethod = watch("paymentMethod");

  return (
    <div>
      <Header />
      <main className="mb-[45px]">
        <div className=" w-full h-[90px] bg-black mb-[16px] "></div>
        <Link to={"/"}>Go back</Link>

        <form className=" flex flex-col md:flex-row justify-between md:gap-[30px] mb-[64px] ">
          <div className="form bg-white rounded-[8px] md:w-full md:max-w-[70%] md:p-[50px] ">
            <h1 className={style["text-present-4"]}>Checkout</h1>
            <article>
              <h2 className={`${style.subtitle}`}>Billing Details</h2>
              <div className=" w-full flex flex-col md:flex-row gap-4 ">
                <div className="w-full">
                  <Input placeholder="Alexei Ward" title="Name" id="name" />
                </div>
                <div className="w-full">
                  <Input
                    placeholder="alexei@gmail.com"
                    title="Email Address"
                    id="email"
                  />
                </div>
              </div>
              <div className="mt-4 md:max-w-[50%] ">
                <Input
                  id="phoneNumber"
                  placeholder="+1 202-555-0136"
                  title="Phone Number"
                />
              </div>
            </article>
            <article>
              <h2 className={style.subtitle}> Shippinng Info </h2>
              <div>
                <Input
                  id="address"
                  placeholder="1137 Williams Avenue"
                  title="Your Address"
                />
              </div>
              <div className=" flex flex-col md:flex-row gap-4 my-4 ">
                <div className=" w-full ">
                  <Input id="zipcode" placeholder="10001" title="ZIP Code" />
                </div>
                <div className=" w-full ">
                  <Input id="city" placeholder="New York" title="City" />
                </div>
              </div>
              <div className=" md:max-w-[50%] ">
                <Input
                  id="country"
                  placeholder="United States"
                  title="Country"
                />
              </div>
            </article>
            <article>
              <h2 className={style.subtitle}> Payment Details </h2>
              <div className=" flex flex-col gap-[17px] md:flex-row md:justify-between ">
                <label htmlFor="paymentMethod">Payment Method</label>
                <div className=" flex flex-col gap-[16px] w-full md:max-w-[50%] ">
                  <label
                    htmlFor="eMoney"
                    className=" border-[#cfcfcf] method w-full border-[1px] py-[18px] px-[16px] flex items-center gap-[16px] rounded-[8px] focus:border-[#d87d4a] active:border-[#d87d4a] peer-checked:border-[#d87d4a]"
                    style={{
                      borderColor: paymentMethod === "eMoney" ? "#d87d4a" : "",
                    }}
                  >
                    <input
                      type="radio"
                      value="eMoney"
                      id="eMoney"
                      {...register("paymentMethod")}
                      className=" accent-[#d87d4a] peer "
                    />
                    <span>e-Money</span>
                  </label>
                  <label
                    htmlFor="cash"
                    className=" border-[#cfcfcf] method w-full border-[1px] py-[18px] px-[16px] flex items-center gap-[16px] rounded-[8px] focus:border-[#d87d4a] active:border-[#d87d4a] peer-checked:border-[#d87d4a] "
                    style={{
                      borderColor: paymentMethod === "cash" ? "#d87d4a" : "",
                    }}
                  >
                    <input
                      type="radio"
                      value="cash"
                      id="cash"
                      {...register("paymentMethod")}
                      className=" accent-[#d87d4a] peer "
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>
              {paymentMethod === "eMoney" && (
                <div className=" flex flex-col w-full my-[16px] md:flex-row gap-[16px] ">
                  <div className="w-full md:max-w-[50%] ">
                    <Input
                      id="eMoneyNumber"
                      placeholder="238521993"
                      title="e-Money Number"
                    />
                  </div>
                  <div className="w-full md:max-w-[50%] ">
                    <Input
                      id="eMoneyPin"
                      placeholder="6891"
                      title="e-Money PIN"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === "cash" && (
                <div>
                    <img src={codImg} alt="" />
                    <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                    </p>
                </div>
              )}
            </article>
          </div>
          <div className="form bg-white rounded-[8px] lg:w-full lg:max-w-[30%] h-full lg:max-h-auto">
            <h1 className={style["text-present-4"]}>Summary</h1>

            <ul className="flex flex-col gap-[16px] my-[16px] ">
              {product.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div className="flex gap-[16px] items-center ">
                    <div>
                      <img
                        src={item.categoryImage.mobile.replace(
                          "./assets/",
                          "/assets/"
                        )}
                        alt={item.slug}
                        className="max-w-[64px] rounded-[8px] "
                      />
                    </div>
                    <div>
                      <h3 className={style["text-present-7"]}>
                        {item.name
                          .replace("Headphones", "")
                          .replace("Wireless Earphones", "")}
                      </h3>
                      <span className="number">
                        {item.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="number">x {item.amount}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="summary flex flex-col gap-[8px] ">
              <div className="flex justify-between ">
                <h3>Total</h3>
                <span>
                  {calculateTotal().toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
              <div className="flex justify-between ">
                <h3>Shipping</h3>
                <span>
                  {" "}
                  {shipping.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                </span>
              </div>
              <div className="flex justify-between ">
                <h3>Vat (Included) </h3>
                <span>
                  {" "}
                  {vatAmount().toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                </span>
              </div>
              <div className="flex justify-between my-[16px]">
                <h3> Grand Total </h3>
                <span className="grandTotal">
                  {" "}
                  {grandTotal().toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                </span>
              </div>

              <button className="button_default orange ">Continue & Pay</button>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
