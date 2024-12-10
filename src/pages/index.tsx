import Head from "next/head";
import { Auth } from "../components/layout/auth";
import { Dashboard } from "../components/layout/dashboard";
import { useAuth } from "@/hooks/auth";
import { Header } from "@/components/layout/Header";

export default function Home() {
  const { userData } = useAuth();

  return (
    <>
      <Head>
        <title>BlackPass | Eventos</title>
      </Head>
      <>
        {userData ? (
          <>
            <Text>GUILHERME</Text>
          </>
        ) : (
          <Auth />
        )}
      </>
    </>
  );
}
