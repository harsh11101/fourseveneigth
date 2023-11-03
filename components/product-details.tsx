interface ProductDetailsProps{
    title:string,
    subtitle:string,
    process:string,
    origin:string,
    quantity:string,
    price:string,
    description:string,
    taste:string,
    serve:string
}

export const ProductDetails=({
    title,
    subtitle,
    process,
    origin,
    quantity,
    price,
    description,
    taste,
    serve
}:ProductDetailsProps)=>{
    return (
        <div className="w-full">
            <div className="flex flex-col items-start justify-center">
                <h1>{title}</h1>
                <h1><em>made with</em>&nbsp;{subtitle}</h1>
            </div>
            <div className="flex flex-col items-center jsutify-center">
                <div className="w-full flex items-center justify-between">
                    <h3>{process} <em>in</em> {origin}</h3>
                    <h3>{quantity}</h3>
                </div>
                <button className="w-[400px] bg-black border text-white rounded-full hover:bg-[#2455f6] transition ease-in-out">{price} — Add to Bag</button>
                <h4 className="text-[#2455f6]">Free UK delivery</h4>
            </div>
        </div>
    )
}