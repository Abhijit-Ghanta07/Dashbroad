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
    <Box>
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
    </Box>
  );
}
export default Demograph;
