import { collection, getDocs, query } from "firebase/firestore";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const Index: NextPage = () => {
  const [traits, setTraits] = useState<string[]>([]);

  useEffect(() => {
    setTraits([]);

    const fetchTraits = async () => {
      const querySnapshot = await getDocs(query(collection(db, "traits")));

      querySnapshot.forEach((doc) => {
        setTraits((oldTraits) => [...oldTraits, doc.data().trait]);
      });
    };

    fetchTraits();
  }, []);

  return (
    <div>
      <h1>You can&#39;t come into my coffee shop if...</h1>
      <div>
        {traits.map((trait, i) => {
          return <p key={i}>{trait}</p>;
        })}
      </div>
    </div>
  );
};

export default Index;
