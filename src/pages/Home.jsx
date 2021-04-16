import React, { useEffect, useState } from "react";

import { login } from "../utils/api";

import { useAsync } from "react-async";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    run: requestConfirmOrder,
    isPending,
    isResolved,
    isRejected,
    data: loginData,
    error: loginError,
  } = useAsync({
    deferFn: (args, props, abort) => {
      return login(...args);
    },
    foo: "teste",
    foo1: "teste1",
    foo2: "teste2",
  });

  function handleLogin(event) {
    event.preventDefault();

    requestConfirmOrder({ email, password });
  }

  useEffect(() => {
    console.log("loginData", loginData?.data);
  }, [loginData]);

  useEffect(() => {
    console.log("isResolved", isResolved);
  }, [isResolved]);

  useEffect(() => {
    console.log("isRejected", isRejected);
  }, [isRejected]);

  useEffect(() => {
    console.log("loginError", loginError);
  }, [loginError]);

  // equivalente
  function handleQualquercoisa() {
    try {
      setError(null)
      setLoading(true)
      await fetchSomething()

    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="home">
      <h1>Login Page</h1>

      {isPending ? "logando" : ""}

      {isRejected ? (
        <div>
          deu erro{" "}
          <pre>{JSON.stringify(loginError.response.data, null, 2)}</pre>
        </div>
      ) : null}

      <form onSubmit={handleLogin}>
        email:
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        senha:
        <input
          name="password"
          value={password}
          onChange={(p) => setPassword(p.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default HomePage;
