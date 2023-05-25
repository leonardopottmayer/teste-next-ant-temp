"use client";
import { Layout, Menu } from "antd";
import { ThemeProvider } from "./context/Theme";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import SiderMenu from "./components/layout/SiderMenu";
import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Content, Footer } = Layout;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devers Blog",
  description: "A blog about technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Layout hasSider>
            <SiderMenu />
            <Layout>
              <Content>{children}</Content>
              <Footer>Teste</Footer>
            </Layout>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
