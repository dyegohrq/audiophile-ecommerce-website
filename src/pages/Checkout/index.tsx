import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import style from "../../components/root.module.css";
import React, { useContext, useState } from "react";
import { productContext } from "../../context/Context";
import { useForm } from "react-hook-form";
import codImg from "/assets/checkout/icon-cash-on-delivery.svg";
import { Container } from "../../components/container/Container";
import { GoBack } from "../../components/goBack";
import { OrderSuccess } from "../../components/orderSuccess";
import toast from "react-hot-toast";

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
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<checkoutFormData>();
  const paymentMethod = watch("paymentMethod");
  const [isOrderSuccess, setIsOrderSuccess] = useState<boolean>(false);
  const [orderedProducts, setOrderedProducts] = useState<typeof product>([]);

  function onSubmit() {

    if (product.length === 0) {
      toast.error("Cart is empty")
      return;
    }

    setOrderedProducts(product)
    setIsOrderSuccess(true);
  }

  return (
    <div>
      <Header />
      <main className="mb-[45px]">
        <div className=" w-full h-[90px] bg-black mb-[16px] "></div>
        <Container>
          <GoBack url="/" />

          <form
            className=" flex flex-col md:flex-row justify-between md:gap-[30px] mb-[64px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="bg-white rounded-[8px] flex flex-col gap-[32px] p-[24px] md:w-full md:max-w-[70%] md:p-[50px] ">
              <h1 className={style["text-present-4"]}>Checkout</h1>
              <article>
                <h2 className={`${style.subtitle} text-Orange-900 my-[16px] `}>
                  Billing Details
                </h2>
                <div className=" w-full flex flex-col md:flex-row gap-4 ">
                  <div className="w-full">
                    <Input
                      placeholder="Alexei Ward"
                      title="Name"
                      id="name"
                      error={errors?.name?.message}
                      register={register}
                      requiredMessage="Name is required "
                      pattern={{
                        value: /^[\p{L}\s]+$/u,
                        message: "Wrong Format",
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      placeholder="alexei@gmail.com"
                      title="Email Address"
                      id="email"
                      error={errors?.email?.message}
                      register={register}
                      requiredMessage="Email is required"
                      pattern={{
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Wrong Format",
                      }}
                    />
                  </div>
                </div>
                <div className="mt-4 md:max-w-[50%] ">
                  <Input
                    id="phoneNumber"
                    placeholder="+1 (202) 555-0136"
                    title="Phone Number"
                    register={register}
                    requiredMessage=" Phone number is required "
                    error={errors.phoneNumber?.message}
                    pattern={{
                      value: /^(?:\+1[-\s]?)?(?:\(?\d{3}\)?[-\s]?)?\d{3}[-\s]?\d{4}$/,
                      message: 'Wrong Format'
                    }}
                  />
                </div> 
              </article>
              <article>
                <h2 className={`${style.subtitle} text-Orange-900 my-[16px] `}> Shippinng Info </h2>
                <div>
                  <Input
                    id="address"
                    placeholder="1137 Williams Avenue"
                    title="Your Address"
                    error={errors.address?.message}
                    register={register}
                    requiredMessage=" Address is required "
                  />
                </div>
                <div className=" flex flex-col md:flex-row gap-4 my-4 ">
                  <div className=" w-full ">
                    <Input 
                      id="zipcode" 
                      placeholder="10001" 
                      title="ZIP Code" 
                      error={errors.zipcode?.message}
                      register={register}
                      requiredMessage=" ZIP Code is required "
                      pattern={
                        {
                          value: /^\d+$/,
                          message: 'Wrong Format'
                        }
                      }
                    />
                  </div>
                  <div className=" w-full ">
                    <Input 
                      id="city" 
                      placeholder="New York" 
                      title="City" 
                      error={errors.city?.message}
                      register={register}
                      requiredMessage=" City is required "
                      pattern={{
                        value: /^[\p{L}\s]+$/u,
                        message: 'Wrong Format'
                      }}
                    />
                  </div>
                </div>
                <div className=" md:max-w-[50%] ">
                  <Input
                    id="country"
                    placeholder="United States"
                    title="Country"
                    error={errors.country?.message}
                    register={register}
                    requiredMessage=" Country is required "
                    pattern={{
                      value: /^[A-Za-z\s]+$/,
                      message: 'Wrong Format'
                    }}
                  />
                </div>
              </article>
              <article>
                <h2 className={`${style.subtitle} text-Orange-900 my-[16px] `}>
                  {" "}
                  Payment Details{" "}
                </h2>
                <div className=" flex flex-col gap-[17px] md:flex-row md:justify-between relative ">
                  <label htmlFor="paymentMethod">Payment Method</label>
                  {
                    errors.paymentMethod?.message && (
                      <p 
                        className="text-red text-[12px] text-medium tracking-[-0.21px] absolute top-[0px] right-[0] md:top-[-28px] "
                      > {errors.paymentMethod.message}</p>
                    )
                  }

                  <div className=" flex flex-col gap-[16px] w-full md:max-w-[50%]">
                    <label
                      htmlFor="eMoney"
                      className=" border-[#cfcfcf] w-full border-[1px] py-[18px] px-[16px] flex items-center gap-[16px] rounded-[8px] focus:border-Orange-900 active:border-Orange-900 peer-checked:border-Orange-900 hover:border-Orange-900 cursor-pointer "
                    >
                      <input
                        type="radio"
                        value="eMoney"
                        id="eMoney"
                        {...register("paymentMethod",  {
                          required: 'Please select a payment method',
                        })}
                        className=" accent-Orange-900 peer "
                      />
                      <span className="text-[14px] tracking-[-0.25px] font-bold  ">
                        e-Money
                      </span>
                    </label>

                    <label
                      htmlFor="cash"
                      className=" border-[#cfcfcf] method w-full border-[1px] py-[18px] px-[16px] flex items-center gap-[16px] rounded-[8px] focus:border-Orange-900 active:border-Orange-900 peer-checked:border-Orange-900 hover:border-Orange-900 cursor-pointer "
                    >
                      <input
                        type="radio"
                        value="cash"
                        id="cash"
                        {...register("paymentMethod", {
                          required: 'Please select a payment method',
                        })}
                        className=" accent-Orange-900 peer "
                      />
                      <span className="text-[14px] tracking-[-0.25px] font-bold  ">
                        Cash on Delivery
                      </span>
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
                        error={errors.eMoneyNumber?.message}
                        register={register}
                        requiredMessage=" eMoney Number is required "
                        pattern={{
                          value: /^\d+$/,
                          message: 'Wrong Format'
                        }}
                      />
                    </div>
                    <div className="w-full md:max-w-[50%] ">
                      <Input
                        id="eMoneyPin"
                        placeholder="6891"
                        title="e-Money PIN"
                        error={errors.eMoneyPin?.message}
                        register={register}
                        requiredMessage="eMoney pin is required "
                        pattern={{
                          value: /^\d+$/,
                          message: 'Wrong Format'
                        }}
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === "cash" && (
                  <div className="flex items-center gap-[32px] my-[32px] ">
                    <img src={codImg} alt="" />
                    <p className={`${style["text-present-7"]} text-Gray-900 `}>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </article>
            </div>
            <div className="bg-white flex flex-col gap-[32px] rounded-[8px] mt-[32px] md:mt-[0] p-[24px] lg:w-full lg:max-w-[30%] h-full lg:max-h-auto">
              <h1 className={style["text-present-4"]}>Summary</h1>

              <ul className="flex flex-col gap-[16px] my-[16px] ">
                {product.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between"
                  >
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
                        <span className="text-White-300 font-bold ">
                          {item.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="font-[15px] leading-[25px] font-bold text-White-300 ">
                        x {item.amount}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-[8px] ">
                <div className="flex justify-between ">
                  <h3 className=" text-[15px] leading-[25px] text-medium text-White-300 uppercase ">
                    Total
                  </h3>
                  <span className="text-[18px] font-bold ">
                    {calculateTotal().toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                </div>
                <div className="flex justify-between ">
                  <h3 className="text-White-300">Shipping</h3>
                  <span className="font-bold">
                    {" "}
                    {shipping.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}{" "}
                  </span>
                </div>
                <div className="flex justify-between ">
                  <h3 className="text-White-300">Vat (Included) </h3>
                  <span className="font-bold">
                    {" "}
                    {vatAmount().toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}{" "}
                  </span>
                </div>
                <div className="flex justify-between my-[16px]">
                  <h3 className="text-White-300"> Grand Total </h3>
                  <span className="text-Orange-900 font-bold ">
                    {" "}
                    {grandTotal().toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}{" "}
                  </span>
                </div>

                <button 
                  className=" w-full h-[48px] border-0 bg-Orange-900 uppercase  font-manrope text-[13px] font-bold tracking-[1px] transition-all duration-[.5s] ease-in-out cursor-pointer hover:bg-Orange-300 text-White "
                >
                  Continue & Pay
                </button>
              </div>
            </div>
          </form>
        </Container>
        {
          isOrderSuccess && <OrderSuccess setIsOrderSuccess={setIsOrderSuccess} productItem={orderedProducts} resetForm={reset} />
        }
      </main>
      <Footer />
    </div>
  );
}
