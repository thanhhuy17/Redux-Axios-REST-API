import { useParams } from "react-router-dom";
import useFetchProduct from "../CustomHooks/fetchProduct";
import { TypeDataProduct } from "../store/reducer/productReducers";

interface TypeDetail extends TypeDataProduct {
  rating: object;
}

const ProductDetailPage = () => {
  const param = useParams();
  // console.log( "Param: ",`products/${param.id}`);
  const { data }: TypeDetail[] = useFetchProduct(`products/${param.id}`);
  // const data = useSelector((state : RootState)=> state.productData)
  console.log("Huy Detail Page", data);
  return (
    <div className="flex items-center justify-center">
      <div className="my-20 w-[70vw] h-[70vh] flex items-center 
      shadow-xl shadow-emerald-500 bg-white rounded-full gap-5">
        <div className="ml-[8rem]">
          <img src={data?.image} className="max-w-[250px]" />
        </div>

        <div className="">
        <h3 className="text-2xl font-bold text-neutral-500">{data?.title}</h3>
        <p className="text-neutral-400">{data?.description}</p>
        <p className="text-3xl text-emerald-500 font-semibold">{data?.price}$</p>
      </div>
      </div>
      
    </div>
  );
};

export default ProductDetailPage;
