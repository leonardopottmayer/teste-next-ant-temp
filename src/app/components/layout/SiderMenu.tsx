import React, { useState } from "react";
import { Avatar, Button, Typography, Layout, Menu } from "antd";
import Link from "next/link";
import { sideBarSubMenus } from "./MenuItems";
const { Sider } = Layout;
const { Text } = Typography;

const SiderMenu = () => {
  const [siderCollapsed, setSiderCollapsed] = useState<boolean>(true);

  const onCollapse = () => {
    setSiderCollapsed(!siderCollapsed);
  };

  return (
    <Sider
      width={250}
      collapsible
      collapsed={siderCollapsed}
      onCollapse={onCollapse}
    >
      <div>
        <div>
          <Link href="profile">

            <Text type="warning">lpottmayer</Text>
          </Link>
          <Menu theme="dark" mode="inline" items={sideBarSubMenus} />
        </div>
        <div>
          <Button type="link" danger>
            Logout
          </Button>
        </div>
      </div>
    </Sider>
  );
};

export default SiderMenu;
