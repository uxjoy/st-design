"use client";

// import { RiErrorWarningLine } from "@remixicon/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const usernameDB = process.env.PRIVATE_API_USERNAME;
const passwordDB = process.env.PRIVATE_API_PASSWORD;

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // State for displaying login errors
  const router = useRouter();

  // Determine if the button should be disabled
  const isButtonDisabled = !username || !password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isButtonDisabled) {
      setError("Please fill in both username and password.");
      return;
    }

    // console.log("Attempting login with:", username, password);

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const text = await response.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = { message: text || response.statusText };
      }

      if (response.ok) {
        console.log("Login successful!");
        window.location.href = "/";
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Network or API error:", err);
      setError("Could not connect to the server.");
    }
  };

  return (
    <div className="bg-slate-50 w-screen h-screen flex flex-col gap-8 items-center justify-center p-4">
      {/* <img src="/logo.svg" alt="ShareT Logo" className="h-10" /> */}

      <form
        className="w-full sm:w-[400px] flex flex-col gap-8 items-center justify-center bg-white p-12 rounded-xl shadow-xl shadow-slate-950/5 border border-slate-100"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1 w-full text-center">
          <h1 className="text-2xl font-semibold text-slate-950">ST Assets</h1>
          <p className="text-slate-500"> Please fill-up the credentials </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 h-11 border border-slate-200 bg-slate-50 rounded-md placholder:text-slate-300"
          />

          <div className="group relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 h-11 border border-slate-200 bg-slate-50 rounded-md placholder:text-slate-300 w-full"
            />
            <button
              className="absolute right-0.5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-slate-600 transition duration-200 w-10 h-10 text-2xl"
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              {showPassword ? "🤓" : "😎"}
            </button>
          </div>

          {error && ( // Display error message if present
            <p className="text-red-500 text-sm flex items-center gap-1">
              ⚠️ {error}{" "}
            </p>
          )}

          <button
            type="submit"
            // Dynamically set disabled state and classes
            disabled={isButtonDisabled}
            className={`px-4 py-2 rounded-md transition duration-200 h-11 w-full
              ${
                isButtonDisabled
                  ? "bg-blue-300 text-white cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
