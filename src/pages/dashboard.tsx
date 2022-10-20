import { getCookie, removeCookies } from "cookies-next";
import Head from "next/head";
import React from "react";
import connect from "../lib/database";
import jwt from "jsonwebtoken";
import User from "../models/Users";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

function Dashboard({ username, orcid }) {
  const router = useRouter();

  const logout = () => {
    removeCookies("token");
    router.replace("/login");
  };

  return (
    <div>
      <Box>
        <title>Dashboard</title>
      </Box>
      <div>Welcome {username}!</div>
      <div>{orcid}</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    // connect db
    await connect();
    // check cookie
    const token = getCookie("token", { req, res });
    if (!token){
      console.error("token missing, login again")
      };

    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    const obj = await User.findOne({ _id: verified.id });
    if (!obj)
      return {
        redirect: {
          destination: "/login",
        },
      };
    return {
      props: {
        orcid: obj.orcid,
        username: obj.username,
      },
    };
  } catch (err) {
    removeCookies("token", { req, res });
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
}

export default Dashboard;
