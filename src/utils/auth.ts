import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("bloodToken");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return true;
};

export default useAuth;
