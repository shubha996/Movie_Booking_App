import React, { Component } from "react";
import "./right.css";
import moviesData from "../../../../Common/moviesData";
import genres from "../../../../Common/genres";
import artists from "../../../../Common/artists";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";

class Right extends Component {
  render() {
    return (
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              style={{ minWidth: "240px", maxWidth: "240px", padding: "20px" }}
              sx={{ fontSize: 18 }}
              color="primary.light"
              gutterBottom
            >
              FIND MOVIES BY:
            </Typography>
            <TextField
              style={{ minWidth: "240px", maxWidth: "240px", margin: "20px" }}
              id="standard-search"
              label="Movie Name"
              type="search"
              variant="standard"
            />
            <br />
            <TextField
              style={{ minWidth: "240px", maxWidth: "240px", margin: "20px" }}
              id="standard-search"
              label="Genres"
              type="search"
              variant="standard"
              select
            >
              <div>
                {genres.map((item) => (
                  <MenuItem>
                    <Checkbox {...genres} />
                    {item.name}
                  </MenuItem>
                ))}
              </div>
            </TextField>
            <br />
            <TextField
              style={{ minWidth: "240px", maxWidth: "240px", margin: "20px" }}
              id="standard-search"
              label="Artists"
              type="search"
              variant="standard"
              select
            >
              <div>
                {artists.map((item) => (
                  <MenuItem>
                    <Checkbox {...artists} />
                    {item.first_name + " " + item.last_name}
                  </MenuItem>
                ))}
              </div>
            </TextField>
            <TextField
              style={{ minWidth: "240px", maxWidth: "240px", margin: "20px" }}
              id="standard-search"
              label="Release Date Start"
              type="search"
              variant="standard"
            >
            </TextField>
            <TextField
              style={{ minWidth: "240px", maxWidth: "240px", margin: "20px" }}
              id="standard-search"
              label="Release Date End"
              type="search"
              variant="standard"
            >
            </TextField>
          </CardContent>
          <CardActions style={{ padding: "20px" }}>
            <Button
              id="btn-apply"
              color="primary"
              variant="contained"
              size="large"
            >
              Apply
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default Right;
