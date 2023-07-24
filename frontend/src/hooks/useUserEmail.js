import { useRef } from "react";

const useUserEmail = () => {
  const userEmailRef = useRef(null);

  const setUserEmail = (email) => {
    userEmailRef.current = email;
  };

  const getUserEmail = () => {
    return userEmailRef.current;
  };

  return { setUserEmail, getUserEmail };
};

export default useUserEmail;
