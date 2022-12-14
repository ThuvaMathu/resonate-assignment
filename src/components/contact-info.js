import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProvider } from "../context/provider";

export default function ContactInfo() {
  const { contactData } = useProvider();

  return (
    <>
      {contactData != null ? (
        <Box sx={{ padding: 2 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#bd1c4e" }}
            gutterBottom
          >
            {contactData.name}
          </Typography>
          <Card sx={{ maxWidth: 500 }}>
            <CardContent>
              <Typography sx={{ fontSize: 18 }} gutterBottom>
                <span style={{ fontWeight: "bold" }}>Username: </span>
                {contactData.username}
              </Typography>
              <Typography sx={{ fontSize: 18 }} gutterBottom>
                <span style={{ fontWeight: "bold" }}>Email: </span>
                {contactData.email}
              </Typography>
              <Typography sx={{ fontSize: 18 }} gutterBottom>
                <span style={{ fontWeight: "bold" }}>Phone: </span>
                {contactData.phone}
              </Typography>
              <Typography sx={{ fontSize: 18 }} gutterBottom>
                <span style={{ fontWeight: "bold" }}>Address: </span>
                {contactData.address.suite}, {contactData.address.street},
                {contactData.address.city},{contactData.address.zipcode}
              </Typography>
              <Typography sx={{ fontSize: 18 }} gutterBottom>
                <span style={{ fontWeight: "bold" }}>Company: </span>
                {contactData.name}
              </Typography>
              <Button
                size="small"
                variant="contained"
                sx={{ backgroundColor: "#bd1c4e" }}
                onClick={() => {
                  window.open(contactData.website, "_blank");
                }}
              >
                Website
              </Button>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} gutterBottom>
              Click row to View Contact Information
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
