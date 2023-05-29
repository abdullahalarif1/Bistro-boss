import { useContext } from "react";
import { AuthProvider } from "../Pages/Providers/AuthContext";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthProvider);
  
  const { refetch, data: cart = [] } = useQuery({
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};
export default useCart;
