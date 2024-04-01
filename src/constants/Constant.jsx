import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LoopIcon from "@mui/icons-material/Loop";
import ApiIcon from "@mui/icons-material/Api";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HailIcon from "@mui/icons-material/Hail";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";

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
    icon: <AttachMoneyIcon />,
    amount: "1200",
    hike: "+ 10.27%",
    bg: "#6e8898",
  },
  {
    title: "Product Sold",
    icon: <InventoryIcon />,
    amount: "2120",
    down: "- 10.27%",
    bg: "#9fb1bc",
  },
  {
    title: "New Customers",
    icon: <PeopleAltIcon />,
    amount: "250",
    hike: "+ 20.27%",
    bg: "#d3d0cb",
  },
  {
    title: "New Visitors",
    icon: <HailIcon />,
    amount: "1230",
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
    name: "David",
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
];

export const user = {
  id: 1,
  name: "abhijit",
  img: "https://images.pexels.com/photos/20393504/pexels-photo-20393504/free-photo-of-a-woman-taking-a-picture-of-a-cherry-blossom-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export const sales_history = [
  {
    id: 1,
    productName: "Iphone 9",
    price: "$999",
    status: "Done",
    amount: 2,
    date: "20 May 2023",
    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    productName: "Iphone 7",
    price: "$999",
    status: "Done",
    amount: 5,
    date: "30 May 2022",
    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    productName: "Iphone 6",
    price: "$799",
    status: "Done",
    amount: 5,
    date: "10 May 2023",
    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    productName: "Iphone 10",
    price: "$1200",
    status: "Done",
    amount: 10,
    date: "20 May 2023",
    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
export const trans_history = [
  {
    id: 1,
    name: "Comission",
    icon: <FileDownloadIcon color="green" />,
    time: "2H ago",
    amount: "$9234",
  },
  {
    id: 2,
    name: "Outcome",
    icon: <FileUploadIcon />,
    time: "2H ago",
    amount: "$9234",
  },
  {
    id: 3,
    name: "Income",
    icon: <FileDownloadIcon color="green" />,
    time: "4.5H ago",
    amount: "$1234",
  },
  {
    id: 4,
    name: "Sale",
    icon: <FileUploadIcon />,
    time: "3H ago",
    amount: "$7534",
  },
  {
    id: 5,
    name: "Comission",
    icon: <FileDownloadIcon color="green" />,
    time: "5H ago",
    amount: "$9234",
  },
  {
    id: 6,
    name: "Outcome",
    icon: <FileUploadIcon />,
    time: "2H ago",
    amount: "$9234",
  },
];
