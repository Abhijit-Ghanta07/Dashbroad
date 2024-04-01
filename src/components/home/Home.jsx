import { useState } from "react";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";

import { Trend, Trans, Sales, Trans_Table, Sales_Table } from "./index";

import { dashbroadCard } from "../../constants/Constant";
// scss
import style from "./home.module.scss";

const Home = () => {
  const [tabVal, setTabVAl] = useState("one");
  return (
    <Box className={style.home}>
      <Container maxWidth="xl">
        <Grid container gap={2} justifyContent={"space-between"} pt={3}>
          {dashbroadCard.map((card, i) => {
            return (
              <Grid xs item key={card.title}>
                <Card className={style.card} sx={{ background: card.bg }}>
                  <Stack>
                    <Typography variant="subtitle1">{card.title}</Typography>

                    <Stack direction={"row"} spacing={1}>
                      {/* <ChartCard color={COLORS[i + 1]} /> */}

                      <Stack direction={"row"} alignItems={"center"}>
                        {card.icon}
                        <Typography variant="h5">{card.amount}</Typography>
                      </Stack>

                      {/* {card.hike ? (
                        <Typography
                          sx={{ color: "green" }}
                          variant="caption"
                          className={style.card__hikes}
                        >
                          {card.hike}
                        </Typography>
                      ) : (
                        <Typography
                          variant="caption"
                          sx={{ color: "red" }}
                          className={style.card__hikes}
                        >
                          {card.down}
                        </Typography>
                      )} */}
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid container spacing={2} my={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ paddingBlock: 2, paddingInline: 1 }}>
              <Trend />
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ paddingBlock: 2, paddingInline: 1 }}>
              <Sales />
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <Trans />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Sales_Table />
          </Grid>
          <Grid item xs={4}>
            <Trans_Table />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
