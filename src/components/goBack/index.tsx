import { Link } from "react-router";
import style from '../root.module.css'

interface GoBackProps {
    url: string
}

export function GoBack({url}: GoBackProps) {
    return(
        <Link to={url} className={`${style["text-present-7"]} flex text-Black-300 hover:text-Orange-900 transition-all ease-in-out duration-[.3s] my-[24px] md:my-[33px] lg:my-[50px] `}>
          Go back
        </Link>
    )
}