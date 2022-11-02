import { Layout } from "antd";

const { Content } = Layout;

export default function AppLayout({
  children,
}) {
  return (
    <Layout>
      <Content>
        {children}
      </Content>
    </Layout>
  );
}
