import {
  DollarOutlined,
  ProfileOutlined,
  TeamOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";

export const sideBarSubMenus: MenuProps["items"] = [
  {
    key: "subnav-transactions",
    label: "Transactions",
    icon: <WalletOutlined />,
    children: [
      {
        key: "item-transactions-myTransactions",
        label: <Link href={"transactions/my"}>My transactions</Link>,
        icon: <DollarOutlined />,
      },
    ],
  },
  {
    key: "subnav-user",
    label: "User",
    icon: <UserOutlined />,
    children: [
      {
        key: "item-user-usuarios",
        label: <Link href={"users"}>Usuários</Link>,
        icon: <TeamOutlined />,
      },
      {
        key: "item-user-myProfile",
        label: <Link href={"profile"}>My profile</Link>,
        icon: <ProfileOutlined />,
      },
    ],
  },
];
