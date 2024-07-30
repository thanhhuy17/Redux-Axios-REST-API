import { useParams } from "react-router-dom";
import useFetchProduct from "../CustomHooks/fetchProduct";
import { TypeDataProduct } from "../store/reducer/productReducers";
import { FaStar } from "react-icons/fa";

interface TypeDetail extends TypeDataProduct {
  rating: object;
}

const ProductDetailPage = () => {
  const param = useParams();
  // console.log( "Param: ",`products/${param.id}`);
  const { data, loading }: TypeDetail[] = useFetchProduct(
    `products/${param.id}`
  );
  // const data = useSelector((state : RootState)=> state.productData)
  console.log("Huy Detail Page", data);
  console.log("Huy Detail Page", loading);
  return (
    <div className="flex items-center justify-center">
      <div
        className="my-20 w-[70vw] h-[70vh] flex items-center 
      shadow-xl shadow-emerald-500 bg-white rounded-full gap-5"
      >
        <div className="ml-[8rem]">
          <img src={data?.image} className="max-w-[250px]" />
        </div>

        <div className="mx-5 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-neutral-500">{data?.title}</h3>
          <p className="text-neutral-400">{data?.description}</p>
          <p className="text-3xl text-emerald-500 font-semibold">
            {data?.price}$
          </p>
          <p className="text-neutral-600">
            The remaining amount :{" "}
            <span className="text-emerald-500 font-semibold">
              {" "}
              {data?.rating?.count}
            </span>
          </p>
          <p className="text-neutral-600 flex gap-2">
            Star :
            <span className="text-emerald-500 font-semibold flex items-baseline">
              {data?.rating?.rate} <FaStar />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
