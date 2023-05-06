import { MainLayout } from "@/components/MainLayout";
import Router from "next/router";
export default function Error() {
  return (
    <MainLayout title="Not Found">
      <h1>Page not found</h1>
      <button
        onClick={() => {
          Router.push("/");
        }}
      >
        Go back
      </button>
    </MainLayout>
  );
}
