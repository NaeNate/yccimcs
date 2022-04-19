import crypto from "crypto";
import { NextPage } from "next";
import { FormEvent, useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const [trait, setTrait] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hash = crypto.createHash("sha256").update(password).digest("base64");

    if (hash !== "VQmEDQhzrbBAVYiCEZeoY0UBKTSGxgHKUeFAY6viXQY=") return;

    await setDoc(doc(collection(db, "traits")), {
      trait,
    });

    router.push("/");
  };

  return (
    <>
      <h1>New</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="trait"
          value={trait}
          onChange={(e) => setTrait(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add trait</button>
      </form>
    </>
  );
};

export default Index;
