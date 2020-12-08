import Head from "next/head";

export default function Register() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-40 h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('images/bg.jpg')" }}
      ></div>
      <div className="flex flex-col justify-center pl-6">
        <h1 className="text-lgmb-2">sign up</h1>
      </div>
    </div>
  );
}
