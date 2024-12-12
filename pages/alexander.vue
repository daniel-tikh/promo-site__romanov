<script>
export default {
  name: 'alexander'
}
</script>

<template>
<div class="page page_bg page_warning alexander">
  <div class="alexander-bg">
    <div class="alexander-clouds">
      <img src="../assets/img/alexander/clouds.png" alt="clouds">
    </div>

    <div class="alexander__section-one">
      <div class="container">
        <div class="left">
          <img src="../assets/img/alexander/section-one-bottle.png" alt="bottle">
        </div>

        <div class="right">
          <img src="../assets/img/alexander/romanov-ai.png" alt="romanov">

          <div class="text">
            Еще с <b>XVIII века</b> водка занимала<br>
            особое место на застольях русских<br>
            императоров.
            <p>
              Для сохранения традиций производства русской водки мы создаем напитки с<br>
              использованием сырья и ингридиентов самого высокого качества.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="alexander__separator">
      <img src="../assets/img/alexander/separator.png" alt="separator">
    </div>

    <div class="alexander__logo">
      <img src="../assets/img/index/background-logo.svg" alt="romanov">
    </div>

    <div class="alexander__history">
      <div class="container">
        <div class="left">
          <img src="../assets/img/alexander/star.png" alt="star">
          <div class="text">
            Каждая бутылка украшена<br>
            золотой восьмиконечной <br>
            звездой - <b>орден Петра I</b><br>
            — высшая награда в<br>
            Российской империи за<br>
            особые достижения
          </div>
        </div>

        <div class="right">
          В каждой капле напитка<br>
          "Александр I" заложено<br>
          наследие вековых<br>
          традиций и уникальный<br>
          дух российской культуры
        </div>
      </div>
    </div>

    <div class="container">
      <div class="alexander__description">
        <div class="left">
          Для водки «<b>Александр I</b>» разработан<br>
          специальный дизайн бутылки: теперь водка<br>
          бренда «<b>ROMANOV</b>» представлена в стекле<br>
          благородно синего оттенка.<br>
          <br><br>
          Несмотря на стандартную крепость в сорок<br>
          градусов, водка «<b>Александр I</b>» обладает<br>
          мягким вкусом, а аромат кедрового ореха<br>
          звучит ненавязчиво и сбалансированно.
        </div>

        <img class="bottle" src="../assets/img/alexander/description-bottle.png" alt="bottle">

        <div class="right">
          <b>Состав:</b><br>
          вода питьевая подготовленная (исправленная),<br>
          спирт этиловый ректификованный "Люкс"<br>
          (зерновой), сахар белый, ароматный спирт<br>
          кедрового ореха<br>
          <br>
          <b>Крепость:</b> 40%<br>
          <br>
          <b>Объем:</b> 0,7л
        </div>

        <div class="bg-item">
          <img src="../assets/img/alexander/description-bg-item.png" alt="item">
        </div>
      </div>
    </div>
    <div class="warning">Чрезмерное употребление алкоголя вредит вашему здоровью.</div>
  </div>
</div>
</template>

<style>
.alexander {
  padding-bottom: 0;
  background: linear-gradient(0deg, rgba(216,235,255,1) 10%, rgba(189,220,255,1) 20%, rgba(189,220,255,1) 65%, rgba(216,235,255,1) 75%);

}

.alexander-bg {
  background-size: 100% 100%;
  position: relative;
  padding-top: 366px;
  z-index: 2;
  transition: background-size 1s ease-in-out;
  padding-bottom: 120px;
}

.alexander-clouds {
  margin-top: -200px;
  position: absolute;
  z-index: 0;
  opacity: 0.64;
}

.alexander__section-one {
  width: 100%;
  position: relative;
  z-index: 10;
  background: url("../assets/img/alexander/section-one-bg.png") no-repeat;
  background-size: auto 90%;
  background-position: left bottom;
}

.alexander__section-one .container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  gap: 10%;
}

.alexander__section-one .left img {
  height: 820px;
}

.alexander__section-one .right img {
  width: 788px;
}

.alexander__section-one .right .text {
  font-family: Montserrat, sans-serif;
  font-size: 34px;
  line-height: 46px;
  max-width: 1310px;
  margin-top: 50px;
  text-transform: uppercase;
}
.alexander__section-one .right .text b {
  font-family: Montserrat, sans-serif;
  font-weight: 500;
}

.alexander__section-one .right .text p {
  font-family: Montserrat, sans-serif;
  margin-top: 50px;
  font-size: 16px;
  line-height: 24px;
  text-transform: none;
}

.alexander__separator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.alexander__history {
  background: url('../assets/img/alexander/alexander.png') no-repeat center;
  background-size: auto 100%;
  background-position-x: 60%;
  padding: 100px 0;
}

.alexander__history .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-family: Montserrat, sans-serif;
  max-width: 1600px;
  padding-right: 80px;
}

.alexander__history .left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.alexander__history .left img {
  width: 292px;
}

.alexander__history .text {
  font-size: 30px;
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  line-height: 50px;
  color: #000;
}

.alexander__history .text b {
  font-family: "Playfair Display", sans-serif;
  font-weight: bold;
  font-style: italic;
}

.alexander__history .right {
  font-family: "Playfair Display", sans-serif;
  font-size: 38px;
  line-height: 50px;
  color: #000;
}

.alexander__description {
  background-image: url("../assets/img/alexander/description-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  gap: 5px;
  margin-top: 50px;
  position: relative;
}
.alexander__description .left {
  font-size: 16px;
  font-weight: 200 !important;
  text-align: right;
  line-height: 30px;
  margin-left: 25px;
}

.alexander__description .left b {
  font-weight: 500;
}

.alexander__description .right b {
  font-weight: 500;
}

.alexander__description .right {
  line-height: 30px;
  font-size: 16px;
  font-weight: 200 !important;
}

.alexander__description .bg-item {
  position: absolute;
  bottom: -50px;
  width: 150px;
}

.alexander__description .bg-item img {
  max-width: 100%;
}

.alexander__logo {
  position: absolute;
  z-index: -1;
  right: -20px;
  opacity: 0.025;
  filter: invert(100%);
  top: 125vh;
}

.alexander__logo img {
}

@media(max-width: 1300px) {

  .alexander__description {
    position: relative;
  }

  .alexander__description .bottle {
    max-width: 300px;
  }
}

@media(max-width: 1125px) {
  .alexander__history .container {
    flex-direction: column;
    gap: 100px;
    padding-right: 0;
  }

  .alexander__history .left {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .alexander__history .text {
    font-size: 30px;
    max-width: 100%;
    line-height: 50px;
  }

  .alexander__history .right {
    font-size: 30px;
    max-width: 100%;
    line-height: 50px;
    text-align: center;
  }

  .alexander__description {
    flex-direction: column;
    padding: 100px 0 100px 0;
    margin-bottom: 50px;
  }

  .alexander__description .bottle {
    width: 70%;
    max-width: none;
  }

  .alexander__description .left {
    font-size: 24px;
    line-height: 40px;
    text-align: center;
  }

  .alexander__description .right {
    font-size: 24px;
    line-height: 40px;
    text-align: center;
  }

  @media(max-width: 900px) {
    .alexander__section-one .container {
      flex-direction: column-reverse;
      gap: 100px;
    }

    .alexander__section-one .right {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .alexander__section-one .right .text {
      font-size: 40px;
      line-height: 50px;
    }

    .alexander__section-one .right .text p {
      font-size: 24px;
      line-height: 34px;
    }
  }

  @media(max-width: 690px) {
    .alexander__section-one .left img {
      height: auto;
    }

    .alexander__history {
      margin: 100px 0;
      padding: 0 50px;
      background-size: auto 400px;
      background-position: center 65%;
    }


    .alexander__history .container {
      gap: 500px;
    }

    .alexander__history .left .text {
      font-size: 20px;
      line-height: 40px;
      text-align: center;
    }

    .alexander__history .right {
      font-size: 20px;
      line-height: 40px;
      text-align: center;
    }

    .alexander__description .left {
      font-size: 20px;
      line-height: 40px;
      text-align: center;
      padding: 0;
      margin: 0;
    }

    .alexander__description .right {
      font-size: 20px;
      line-height: 40px;
      text-align: center;
    }
  }

  @media(max-width: 550px) {
    .alexander__section-one .right .text {
      font-size: 30px;
      line-height: 40px;
    }
    .alexander__section-one .right .text p {
      font-size: 20px;
    }

    .alexander__history {
      padding: 10px;
    }

    .alexander__description .left {
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      padding: 0;
      margin: 0;
    }

    .alexander__description .right {
      font-size: 16px;
      line-height: 30px;
      text-align: center;
    }

    .alexander__description .left {
      font-size: 14px;
    }

    .alexander__description .right {
      font-size: 14px;
    }
  }
}
</style>
