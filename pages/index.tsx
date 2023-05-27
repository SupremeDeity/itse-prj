import { initializeApp } from "firebase/app";
import { getAuth, User } from "firebase/auth";
import SignIn from "./signin";
import Main from "./main";
import { useState } from "react";
import { useAuth } from "@/lib/auth_context";

export default function Home() {
  const auth = useAuth();

  return auth.user != null ? <Main /> : <SignIn />;
}
