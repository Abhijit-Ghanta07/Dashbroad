import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LoopIcon from "@mui/icons-material/Loop";
import ApiIcon from "@mui/icons-material/Api";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
// images
import avatar from "../assets/images/avatar.jpg";
export const sidebarMenu = [
  {
    title: "Overview",
    icon: <SpaceDashboardIcon />,
    path: "/",
  },
  {
    title: "Transactions",
    icon: <LoopIcon />,
    path: "/student",
  },
  {
    title: "Customers",
    icon: <AccountTreeIcon />,
    path: "/teacher",
  },
  {
    title: "Reports",
    icon: <AssessmentIcon />,
    path: "/student",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/student",
  },
  {
    title: "Developer",
    icon: <ApiIcon />,
    path: "/student",
  },
];

export const dashbroadCard = [
  {
    title: "Today Revenue",
    amount: "$12000",
    hike: "+ 10.27%",
    bg: "#6e8898",
  },
  {
    title: "Product Sold",
    amount: "2000",
    down: "- 10.27%",
    bg: "#9fb1bc",
  },
  {
    title: "New Customers",
    amount: "25",
    hike: "+ 20.27%",
    bg: "#d3d0cb",
  },
  {
    title: "New Visitors",
    amount: "$12000",
    down: "- 05.27%",
    bg: "#e2c044",
  },
];

export const transactions_data = [
  {
    id: 1,
    avatar: avatar,
    name: "Abhijit",
    country: "India",
    payment_status: "paid",
  },
  {
    id: 2,
    avatar: avatar,
    name: "Jhon",
    country: "America",
    payment_status: "failed",
  },
  {
    id: 3,
    avatar: avatar,
    name: "Koushik",
    country: "India",
    payment_status: "paid",
  },
  {
    id: 4,
    avatar: avatar,
    name: "Dadid",
    country: "France",
    payment_status: "failed",
  },
  {
    id: 5,
    avatar: avatar,
    name: "Joy",
    country: "India",
    payment_status: "Process",
  },
  {
    id: 6,
    avatar: avatar,
    name: "Abhijit",
    country: "India",
    payment_status: "paid",
  },
];
