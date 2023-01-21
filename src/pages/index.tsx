import ContentLayout from "@/components/ContentLayout";
import Link from "next/link";

const title = "Home";

const Home = () => {
  return (
    <ContentLayout title={title}>
      <ul>
        <li>
          <Link href="/man-nansai">満何歳？</Link>
        </li>
      </ul>
    </ContentLayout>
  );
};

export default Home;
