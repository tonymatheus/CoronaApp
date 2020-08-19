import React from "react";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  console.log(confirmed);
  if (!confirmed) {
    return "Loading";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary " gutterBottom>
              INFECTADOS
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=" ,"
              />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(lastUpdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              {" "}
              Número de Casos Ativos do Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary " gutterBottom>
              CURADOS
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=" ,"
              />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(lastUpdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              {" "}
              Número de pessoas curadas da COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary " gutterBottom>
              MORTES
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=" ,"
              />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(lastUpdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              {" "}
              Número de mortes por Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
