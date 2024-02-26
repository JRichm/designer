import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function MainHeader() {
    return (
        <span className="flex flex-row justify-between p-5 bg-gray-100">
            <div>
                <a href="/" className="text-3xl font-bold"></a>
            </div>
            <div className="flex flex-row gap-8 place-items-center">
                <a href="/signin" className="flex flex-row place-items-center gap-2">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <p>Sign In</p>
                </a>
                <a href="/bag" className="flex flex-row place-items-center gap-2">
                    <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    <p>Shopping Bag</p>
                </a>
            </div>
        </span>
    )
}