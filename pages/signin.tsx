import Head from "next/head";
import styles from "@/styles/signin.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useAuth } from "@/lib/auth_context";

type Inputs = {
  email: string;
  password: string;
  weight: number;
};

export default function SignIn() {
  const [bRegister, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (bRegister) {
      setLoading(true);
      auth.signUp(data["email"], data["password"]).catch((e: any) => {
        console.log(e);
        if (e.code == "auth/email-already-in-use") {
          setError("Email already in use.");
        }
        setLoading(false);
      });
    } else {
      setLoading(true);
      auth.logIn(data["email"], data["password"]).catch((e: any) => {
        console.log(e);
        if (
          e.code == "auth/wrong-password" ||
          e.code == "auth/user-not-found"
        ) {
          setError("Email or password entered incorrectly.");
        }
        setLoading(false);
      });
    }
  };

  return (
    <>
      <Head>
        <title>ITSE Project</title>
        <meta name="description" content="ITSE Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-sky-500">
          {bRegister && "Register"}
          {!bRegister && "Login"}
        </h1>
        {error && (
          <>
            <br />
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <Input
            className={styles.input}
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email &&
            (errors.email.type == "pattern" ? (
              <span className="text-rose-500">Invalid email.</span>
            ) : (
              <span className="text-rose-500">This field is required.</span>
            ))}
          <br />
          <Input
            className={styles.input}
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 5 })}
          />
          {errors.password &&
            (errors.password.type == "minLength" ? (
              <span className="text-rose-500">
                Minimum password length is 5
              </span>
            ) : (
              <span className="text-rose-500">This field is required.</span>
            ))}
          <br />
          {bRegister && (
            <>
              <Input
                className={styles.input}
                type="number"
                min={25}
                placeholder="Weight (KG)"
                {...register("weight", { required: true, min: 25 })}
              />
              {errors.weight &&
                (errors.weight.type == "min" ? (
                  <span className="text-rose-500">Minimum weight is 25KG</span>
                ) : (
                  <span className="text-rose-500">This field is required.</span>
                ))}
            </>
          )}
          <br />
          <Button disabled={loading} type="submit">
            {bRegister && "Register"}
            {!bRegister && "Login"}
          </Button>
          <br />
          <br />
          <p className="text-xl text-muted-foreground inline-block px-3 align-text-bottom">
            Login
          </p>
          <Switch
            checked={bRegister}
            onCheckedChange={(checked) => setRegister(checked)}
          ></Switch>
          <p className="text-xl text-muted-foreground inline-block px-3 align-text-bottom">
            Register
          </p>
        </form>
      </main>
    </>
  );
}
