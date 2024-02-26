import MainHeader from "../components/mainHeader";

export default function Bag() { 
    return (
        <div>
            <MainHeader />
            <div className="mx-64 my-12">
                <h1 className="text-3xl font-bold tracking-wide">Your Shopping Cart is empty</h1>
            </div>
        </div>
    )
}