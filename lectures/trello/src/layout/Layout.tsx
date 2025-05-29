import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import NavBar from "./NavBar";

export const Layout = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Container component="main" sx={{ flexGrow: 1, py: 8 }}>
        <CssBaseline/>
        <NavBar open={open} onOpen={()=>{setOpen(true)}}/>
        <Sidebar open={open} onClose={()=>{setOpen(false)}}/>
        <Outlet />
      </Container>
    </Box>
  );
};
