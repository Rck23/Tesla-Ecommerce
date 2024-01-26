import { Sidebar, TopMenu } from "@/components";
import React, { Component } from "react";

export default function Shoplayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ">
      <TopMenu />
      <Sidebar/>

      <div className="px-0 sm:px-10">{children}</div>
    </main>
  );
}
