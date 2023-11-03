import { ProductDetails } from "./product-details"

export const ProductInfo = () => {
    const temp={
        title:"London Dry",
        subtitle:"made with British gin",
        origin:"England",
        quantity:"700ml",
        price:"£29.99",
    }
    return(
        <div className="flex-1 flex-col flex items-center">
            <nav className="flex justify-between items-center gap-x-8">
                <span>LONDON DRY</span>
                <span>SPICED BLEND</span>
                <span>APERITIF</span>                
                <span>TRIO</span>
            </nav>
            <hr className="w-[60%] h-[3px] bg-black my-4" />
            <ProductDetails title="London Dry" subtitle="made with British gin" process="Distilled" origin="England" quantity="700ml" price="£29.99" description={"LONDON DRY is perfect for those who love a G&T. It's full of flavour but at 10% ABV it means you can enjoy the same ritual and taste but just with less alcohol. The unique combination of botanicals are steeped for 24 hours, then distilled, capturing the essential oils and big flavours. Before being masterfully blended with natural flavours to boost the character and provide a long refreshing finish at just 10%"} taste={"Upfront Juniper berry, authentic woody juniper with more of a floral berry coming through the mid palate, coriander seed in the middle, finishing with herbaceous backnotes."} serve={"Simply serve 50ml chilled over ice with 150ml premium Indian Tonic and a lemon slice. 2.3% ABV."}/>
            <hr className="w-[60%] h-[3px] bg-black my-4" />
        </div>
    )
}