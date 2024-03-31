"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NotifProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  <ToastContainer />;
  return { children };
}
