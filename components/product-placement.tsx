import { ProductCarousal } from "./product-carousal";
import { ProductInfo } from "./product-info";

export const ProductPlacement = () => {
    const productImages:string[] = ["/LondonDry1.png","/LondonDry2.png","/LondonDry3.png"];
    console.log(productImages);
    return(
        <div className="flex justify-center w-full">
            <ProductCarousal productImages={productImages} />
            <ProductInfo />
        </div>
    )
}