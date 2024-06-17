import MainLayout from "@/src/Layout/Layout";
import Loading from "@/src/components/shared/Loading/Loading";
import CategoryTemplate from "@/src/components/templates/products/CategoryTemplate";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const { slug } = useRouter().query;
  // console.log(slug);
  if (!slug) {
    return (
      <MainLayout>
        <Loading />
      </MainLayout>
    );
  }
  return <CategoryTemplate slug={slug[0]} />;
}
