import { Box, Card, CardContent, Typography } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Demograph = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h6">Customer Demograph</Typography>
          <Graph />
        </CardContent>
      </Card>
    </Box>
  );
};

function Graph(params) {
  return (
    <Box sx={{ position: "relative" }}>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#e2c044"
                stroke="#d3d0cb"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {/* Example Label */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "10px",
          backgroundColor: "#e2c044",
          padding: "5px",
          borderRadius: "15px",
          padding: "5px 10px",
        }}
      >
        <span>Cuntries</span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "100px",
          backgroundColor: "#6e8898",
          padding: "5px",
          borderRadius: "15px",
          padding: "5px 10px",
        }}
      >
        <span>Customers</span>
      </div>
    </Box>
  );
}
export default Demograph;
