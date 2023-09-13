import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
// import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "accessLevel",
          headerName: "Access Level",
          flex: 1,
          renderCell: ({ row: { access } }) => {
            return (
              <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  access === "admin"
                    ? colors.greenAccent[600]
                    : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
              >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {access}
                </Typography>
              </Box>
            );
          },
        },
      ];

    return ( 
        <Box m = "20px" > { /* HEADER */ } <
        Box display = "flex"
        justifyContent = "space-between"
        alignItems = "center" >
        <
        Header title = "DASHBOARD"
        subtitle = "Welcome to your dashboard" / >

        <
        /Box>

        { /* GRID & CHARTS */ } <
        Box display = "grid"
        gridTemplateColumns = "repeat(12, 1fr)"
        gridAutoRows = "120px"
        gap = "20px" > { /* ROW 1 */ }
         
       

        { /* ROW 2 */ }
        <
        Box gridColumn = "span 12"
        gridRow = "span 2"
        backgroundColor = { colors.primary[400] } >
        <
        Typography variant = "h3"
        fontWeight = "400"
        sx = {
            { padding: "10px 10px 0 10px" }
        } >
        Your Performance in Last 5 Years <
        /Typography> <
        Box height = "250px"
        mt = "-20px" >
        <
        BarChart isDashboard = { true }
        /> < /
        Box > <
        /Box> 
        

        { /* ROW 3 */ }  
        <
        Box gridColumn = "span 12"
        gridRow = "span 2"
        backgroundColor = { colors.primary[400] }
        p = "30px" >
        <
        Typography variant = "h3"
        fontWeight = "600" >
        Monthly Performance <
        /Typography> <
        Box display = "flex"
        flexDirection = "column"
        alignItems = "center"
        mt = "25px" >
        <
        ProgressCircle size = "120" / >
        <
        Typography variant = "h5"
        color = { colors.greenAccent[500] }
        sx = {
            { mt: "15px" }
        } >
        Dark: Pending Works <
        /Typography> <
        Typography >  Light: Completed Works < /Typography> < /
        Box > <
        /Box>
        
    < /
        Box > <
        /Box>
        
    );
};




export default Dashboard;