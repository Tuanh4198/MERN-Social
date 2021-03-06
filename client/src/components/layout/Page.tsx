import Head, { HeadProps } from "components/layout/Head";
import Header from "components/layout/Header";
import React, { PropsWithChildren, HTMLAttributes } from "react";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type PageProps = PropsWithChildren<HeadProps> &
  HTMLAttributes<HTMLDivElement> & {
    mainClassName?: string;
  };

const Page = (props: PageProps) => (
  <>
    <Head {...props} />
    <Header />
    <main className={"flex-grow flex items-center justify-center bg-gray-100"}>
      <div className={"h-full mx-auto" + props.className}>{props.children}</div>
    </main>
    <Footer />
    <ToastContainer />
  </>
);

export default React.memo(Page);
