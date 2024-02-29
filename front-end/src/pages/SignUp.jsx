import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    setLoading(true);
    setShowSpinner(true);
    setErrorMessage(null);

    // Wait for at least 2 seconds before submitting the form
    setTimeout(async () => {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          return setErrorMessage(data.message);
        }
        if (res.ok) {
          navigate("/sign-in");
        }
        // If successful, you can navigate or perform any other action here
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
        setShowSpinner(false);
      }
    }, 2000); // Wait for 2 seconds
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold  text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500
             to-pink-500 rounded-lg text-white"
            >
              Quote
            </span>
            Rider
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}

        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <div>Your username</div>
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="w-[350px] rounded-md p-1 bg-slate-100"
                onChange={handleChange}
              />
            </div>
            <div>
              <div>Your email</div>
              <input
                type="email"
                placeholder="name@company.com"
                id="email"
                className="w-[350px] rounded-md p-1 bg-slate-100"
                onChange={handleChange}
              />
            </div>
            <div>
              <div>Your password</div>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="w-[350px] rounded-md p-1 bg-slate-100"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white p-1 ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  <span className="ml-2">Loading...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <div className="mt-5 text-red-500">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}
