import Signin from "../../components/auth/Signin";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <div>
      <PageMeta title="Signin" description="This is Dashboard page." />
      <Signin />
    </div>
  );
}
