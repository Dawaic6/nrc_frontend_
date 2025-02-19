import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">{isSignIn ? "Sign In" : "Sign Up"}</h1>
      <p>{isSignIn ? "Access your account." : "Create a new account."}</p>

      {/* Render either SignIn or SignUp form */}
      {isSignIn ? (
        <div>
          {/* Sign In Form */}
          <form>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Sign In</button>
          </form>
          <p>
            Don't have an account?{" "}
            <button onClick={toggleAuthMode} className="text-blue-500">
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div>
          {/* Sign Up Form */}
          <form>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <button onClick={toggleAuthMode} className="text-blue-500">
              Sign In
            </button>
          </p>
        </div>
      )}
    </MainLayout>
  );
};

export default Auth;
