import React from "react";

// SEO优化
import Head from "next/head";

// 组件懒加载
// import dynamic from "next/dynamic";

// const One = dynamic(import("../components/one"));

export default function index() {
  return (
    <>
      <Head>
        <title> jspang.com </title>
      </Head>
      <div>约定式路由</div>
      <style jsx>
        {`
          div {
            color: red;
            font-size: 20px;
          }
        `}
      </style>
    </>
  );
}
