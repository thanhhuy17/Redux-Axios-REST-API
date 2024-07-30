// Có các hành động từ UI hay API thì để vào actions
import axios from "axios";
// Lấy Link hình ảnh
export const fetchProductData = async () => {
  try {
    const response = await axios.get("products");

    return response

  } catch (error) {
    console.log("Get Trending Error!", error);
  }
};