import * as React from "react";
import { Grid, Typography } from "@mui/material";
import enrollImg from "../../img/Intersect.png";

function ProductList() {

  return (
    <div
      style={{
        height: 550,
        background:
          "linear-gradient(257.7deg, #68A4D4 36.33%, rgba(158, 187, 211, 0.47) 71.69%)",
      }}>
      <Grid justifyContent={"center"} container columns={16}>
        <Grid item xs={6}>
          <Grid textAlign={"center"} mt={4} xs={12}>
            <Typography color={"#020B57"} variant={"h4"}>
              Мы поможем вам найти подходящего врача
            </Typography>
          </Grid>
          <Grid ml={3} mt={4}>
            <Typography fontSize={24} fontFamily={"Inter"} variant={"p"}>
              Введите ваше имя:
            </Typography>
          </Grid>
          <Grid ml={3} mt={3} xs={11}>
            <input
              placeholder={"Айдай Жантаева"}
              style={{
                width: 410,
                borderRadius: 25,
                fontSize: 20,
                border: "none",
                padding: 15,
              }}
            />
          </Grid>
          <Grid ml={3} mt={4}>
            <Typography fontSize={24} fontFamily={"Inter"} variant={"p"}>
              Введите ваш телефон:
            </Typography>
          </Grid>
          <Grid ml={3} mt={3} xs={6}>
            <input
              placeholder={"+996 (___) __ __ __"}
              type={"tel"}
              style={{
                width: 410,
                borderRadius: 25,
                fontSize: 20,
                border: "none",
                padding: 15,
              }}
            />
          </Grid>
          <Grid textAlign={"center"} mt={4} xs={12}>
            <button
              style={{
                width: 222,
                background: "#011669",
                height: 59,
                fontFamily: "Roboto",
                fontWeight: 700,
                fontSize: 24,
                color: "#fff",
                borderRadius: 30,
                border: "2px solid #FFFFFF",
                cursor: "pointer",
              }}>
              Записаться
            </button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img width={660} height={550} src={enrollImg} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductList;
