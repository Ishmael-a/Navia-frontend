import { useState } from "react";
import useAuthContext from "./useAuthContext";

interface InitialError {
  username?: string;
  email?: string;
  password?: string;
  message?: string;
}

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<InitialError | null>(null);
  const { dispatch } = useAuthContext();

  const resetErrors =() => setErrors(null);

  const signup = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    setErrors(null);

    try {
      const response = await fetch("http://localhost:4000/api/users/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const json = await response.json();
      console.log("Full response:", json); // Add this line
  
      if (!response.ok) {
        // console.log("Errors received:", json); // Add this line
        // setErrors({...json});

        const errorToSet = json.errors ? json.errors : json;
        console.log("Errors to set:", errorToSet);
        setErrors(errorToSet);
        setIsLoading(false);
        return json;
      }

      // Clear any previous errors explicitly
       setErrors(null);

      // Save the user in localStorage
      localStorage.setItem("user", JSON.stringify(json));

      // Update auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);

    } catch (err) {
      console.error("Catch block error:", err); // Improve error logging
      setErrors({ message: "Failed to connect to the server." });
      setIsLoading(false);
      return null;
    }
  };

  return { signup, isLoading, errors, resetErrors };
};
