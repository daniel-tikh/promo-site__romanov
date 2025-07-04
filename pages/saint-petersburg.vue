<script>
export default {
  name: 'saint-petersburg'
}
</script>

<template>
  <div class="page page_bg page_warning saint-petersburg">
    <div class="saint-petersburg-bg">
    </div>

    <div class="saint-petersburg__section-one">
      <div class="saint-petersburg__section-one-bg">
        <div class="saint-petersburg__section-one-logo">
          <img src="../assets/img/saint-petersburg/r-spb.png" alt="" class="">
        </div>

        <div class="saint-petersburg__section-one-logo-mobile">
          <div class="saint-petersburg__section-one-mobile-image">
            <img src="../assets/img/saint-petersburg/r-spb.png" alt="">
          </div>
          <div class="saint-petersburg__section-one-mobile-text">
            Водка <span>«<span class="no-style">ROMANOV</span> SAINT-PETERSBURG»</span> – это
            не просто алкогольный напиток, это путешествие
            во времени, возможность прикоснуться к истории.
            Она создана для тех, кто ценит качество, стремится
            ощутить вкус настоящего Санкт-Петербурга, где
            каждый глоток – это рассказ о величии и традициях.
          </div>
        </div>

        <div class="container saint-petersburg__section-one-content">
          <div class="saint-petersburg__section-one-bottle">
            <img src="../assets/img/saint-petersburg/bottle.png" alt="">
          </div>

          <div class="saint-petersburg__section-one-item-image-mobile">
            <img src="../assets/img/saint-petersburg/first-screen-item.png" alt="">
          </div>

          <div class="saint-petersburg__section-one-text">
            <div>
              Водка <span>«<span class="no-style">ROMANOV</span> SAINT-PETERSBURG»</span> – это<br>
              не просто алкогольный напиток, это путешествие<br>
              во времени, возможность прикоснуться к истории.<br>
              <br>
              Она создана для тех, кто ценит качество, стремится<br>
              ощутить вкус настоящего Санкт-Петербурга, где<br>
              каждый глоток – это рассказ о величии и традициях.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container saint-petersburg__section-two">
      <div class="saint-petersburg__section-two-left">
        <img class="border" src="../assets/img/saint-petersburg/border-top.png" alt="">
        <div class="saint-petersburg__section-two-content">
          <div class="saint-petersburg__section-two-title">
            Водка <span>«<span class="no-style">ROMANOV</span> SAINT-PETERSBURG»</span>
          </div>
          <div>
            Создана по классической рецептуре с использованием<br>
            отборного зерна и чистейшей воды, прошедшей<br>
            многоступенчатую систему фильтрации.<br class="alive">
            <br class="alive">
            Уникальность водки заключается в её особом аромате,<br>
            достигаемом благодаря использованию натурального<br>
            экстракта кедрового ореха.<br>
            Этот компонент придает напитку мягкий, слегка<br>
            терпкий вкус и неповторимый аромат.<br class="alive">
            <br class="alive">
            <span>Состав:</span> вода питьевая подготовленная (исправленная),<br>
            спирт этиловый ректификованный "Люкс" (зерновой),<br>
            сахар белый, ароматный спирт кедрового ореха.<br class="alive">
            <br class="alive">
            <span>Крепость:</span> 40 %<br>
            <br class="alive">
            <span>Объём:</span> 0,5 л; 0,7 л
          </div>
        </div>
        <img src="../assets/img/saint-petersburg/border-bottom.png" class="border" alt="" style="rotate: 180deg">
      </div>

      <div class="saint-petersburg__right">
        <img src="../assets/img/saint-petersburg/bottle-2.png" alt="">
      </div>
    </div>

    <div class="container">
      <div class="saint-petersburg__section-three">
        <div class="left">
          Дизайн бутылки – это визитная карточка, где насыщенный синий цвет символизирует величие и благородство императорского прошлого Санкт-Петербурга.
        </div>

        <img class="bottle" src="../assets/img/saint-petersburg/gerb.png" alt="gerb">

        <div class="right">
          Этот оттенок также ассоциируется с небесной чистотой и водной гладью Невы, а герб Романовых отражает мощь и глубину истории, а также дух аристократии.
        </div>

        <div class="bg-item">
          <img src="../assets/img/saint-petersburg/description-bg-item.png" alt="item">
        </div>
      </div>
    </div>
    <div class="warning">Чрезмерное употребление алкоголя вредит вашему здоровью.</div>
  </div>
</template>

<style lang="scss">
.saint-petersburg {
  padding-bottom: 0;
  background: linear-gradient(0deg, rgba(216,235,255,1) 10%, rgba(212, 229, 250 ,1) 20%, rgba(212, 229, 250,1) 65%, rgba(216,235,255,1) 75%);

}
.saint-petersburg-bg {
  background-size: 100% 100%;
  position: relative;
  padding-top: 366px;
  z-index: 2;
  transition: background-size 1s ease-in-out;
  padding-bottom: 120px;
}

.saint-petersburg__section-one-bg {
  margin-top: -340px;
  padding-top: 300px;
  width: 100%;
  height: 75vw;
  background: url("../assets/img/saint-petersburg/first-screen.png") no-repeat;
  background-size: 100% auto;
}

.saint-petersburg__section-one-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.saint-petersburg__section-one-logo-mobile {
  display: none;
}

.saint-petersburg__section-one-item-image-mobile {
  display: none;
}

.saint-petersburg__section-one-content {
  position: relative;
}

.saint-petersburg__section-one-bottle {
  position: absolute;
  left: -4vw;
  top: -390px;
}

.saint-petersburg__section-one-text {
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 24px;
  line-height: 36px;
  font-style: italic;
  font-weight: 400;
  margin-top: 40px;
  .no-style {
    font-style: normal;
  }

  * {
    font-family: "Playfair Display",sans-serif;
  }
}

.saint-petersburg__section-one-text span {
  font-weight: 600;
}

.saint-petersburg__section-two {
  display: flex;
  align-items: end;
  margin-top: -200px;
  justify-content: space-between;
}

.saint-petersburg__section-two-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.saint-petersburg__section-two-title {
  font-size: 30px;
  font-family: "Playfair Display",sans-serif;
  .no-style {
    font-style: normal;
  }
  span {
    font-weight: 600;
    font-family: "Playfair Display",sans-serif;
    font-style: italic;
  }
  margin-bottom: 30px;
}

.saint-petersburg__section-two-content {
  margin-top: -35px;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: -40px;
  span {
    font-weight: 600;
  }
}

.saint-petersburg__section-three {
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
  margin-bottom: 180px;

  .left {
    text-align: right;
    font-size: 24px;
    line-height: 40px;
    max-width: 450px;
  }

  .right {
    text-align: left;
    font-size: 24px;
    line-height: 40px;
    max-width: 450px;
  }

  .bg-item {
    position: absolute;
    bottom: -50px;
    width: 200px;
    left: calc(50% - 90px);
    img {
      max-width: 100%;
    }
  }
}

@media (max-width: 1890px) {
  .saint-petersburg__section-one-bg {
    margin-top: -350px;
  }

  .saint-petersburg__section-one-logo {
    img {
      max-height: 250px;
    }
  }

  .saint-petersburg__section-one-bottle {
    top: -350px;
    left: 20px;
    img {
      max-width: 30vw;
    }
  }
}

@media (max-width: 1715px) {
  .saint-petersburg__section-one-bg {
    background-position: bottom;
    height: 95vw;
  }

  .saint-petersburg__section-one-logo {
    img {
      max-height: 230px;
    }
  }

  .saint-petersburg__section-one-bottle {
    top: -320px;
    left: 20px;
    img {
      max-width: 30vw;
    }
  }

  .saint-petersburg__section-one-text {
    font-size: 20px;
    line-height: 30px;
  }
}

@media (max-width: 1530px) {
  .saint-petersburg__section-one-logo {
    img {
      max-height: 200px;
    }
  }
  .saint-petersburg__section-one-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: start;
    justify-content: space-between;
    height: 100%;
  }
  .saint-petersburg__section-one-bottle {
    position: inherit;
    top: -220px;
    left: 0;
    img {
      max-height: 100%;
    }
  }
}
@media (max-width: 1440px) {
  .saint-petersburg__section-one-logo {
    img {
      max-height: 150px;
    }
  }
  .saint-petersburg__section-one-bottle {
    top: -150px;
    left: 2%;
    img {
      height: 600px;
    }
  }
}
@media (max-width: 1350px) {
  .saint-petersburg__section-one-content {
    flex-direction: column-reverse;
    align-items: center;
    gap: 30px;
  }
  .saint-petersburg__section-one-bottle {
    top: 0;
    left: 0;
    img {
      min-width: auto;
      height: auto;
      width: 400px;
      max-width: none;
    }
  }
  .saint-petersburg__section-one-bg {
    height: auto;
    margin-top: -280px;
    max-width: 100vw;
    background: url("../assets/img/saint-petersburg/first-screen-bg.png") no-repeat;
    background-size: 100% auto;
  }

  .saint-petersburg__section-one-logo {
    margin-top: -100px;
  }

  .saint-petersburg__section-two {
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
}

@media (max-width: 1225px) {
  .saint-petersburg__section-three {
    .left {
      margin-right: -80px;
    }
    .right {
      margin-left: -80px;
    }
    .left, .right {
      font-size: 20px;
    }
  }
}

@media (max-width: 1000px) {
  .saint-petersburg__section-one-logo-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding: 0 20px;
    margin-top: -140px;
  }

  .saint-petersburg__section-one-bottle {
    position: relative;
    z-index: 10;
  }

  .saint-petersburg__section-one-item-image-mobile {
    display: block;
    width: 126.5vw;
    padding-right: 2px;
    position: absolute;
    bottom: -100px;
    img {
      width: 100%;
    }
  }

  .saint-petersburg__section-one-content {
    flex-direction: column;
    position: relative;
  }

  .saint-petersburg__section-one-mobile-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 250px;
    }
  }

  .saint-petersburg__section-one-mobile-text {
    font-size: 16px;
    line-height: 28px;
    font-style: italic;
    font-weight: 500;
    padding: 0 10px;
    font-family: "Playfair Display",sans-serif;
    text-align: center;
    .no-style {
      font-style: normal;
    }

    * {
      font-family: "Playfair Display",sans-serif;
    }

    span {
      font-weight: 600;
    }
  }

  .saint-petersburg__section-one-logo {
    display: none;
  }

  .saint-petersburg__section-one-text {
    display: none;
  }

  .saint-petersburg__section-two {
    margin-top: 100px;
  }

  .saint-petersburg__section-two-title {
    font-size: 24px;
  }

  .saint-petersburg__section-two-content {
    font-size: 18px;
    padding: 0 40px;
  }
  .saint-petersburg__section-one-bg {
    margin-top: -300px;
    background-size: auto 100%;
    background-position: center center;
  }

  .saint-petersburg__section-three {
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;

    .left, .right {
      text-align: center;
      margin: 0;
    }
    .left {
      margin-bottom: -60px;
    }
    .right {
      margin-top: -60px;
    }
  }
}
@media (max-width: 500px) {
  .saint-petersburg__section-two-left {
    .border {
      display: none;
    }
  }

  .saint-petersburg__section-one-text {
    font-size: 18px;
  }

  .saint-petersburg__section-one-bottle {
    z-index: 10;
    img {
      width: 300px;
    }
  }

  .saint-petersburg__section-one-item-image-mobile {
    bottom: -10vw;
  }

  .saint-petersburg__section-two-title  {
    font-size: 26px;
    line-height: 36px;
  }

  .saint-petersburg__section-two-content {
    font-size: 14px;
    line-height: 28px;
    padding: 0;
    text-align: center;
    br {
      display: none;

      &.alive {
        display: block;
      }
    }
  }
  .saint-petersburg__section-three {
    padding: 30px 40px 60px 40px;
    .left, .right {
      font-size: 18px;
      line-height: 32px;
    }
    .left {
      margin-bottom: -30px;
    }
    .right {
      margin-top: -30px;
    }
  }

  .saint-petersburg__section-one-logo-mobile {
    gap: 10px;
    padding: 0 5px;
    align-items: start;
  }

  .saint-petersburg__section-one-mobile-image {
    min-width: 100px;
  }

  .saint-petersburg__section-one-mobile-text {
    font-size: 14px;
    line-height: 20px;
  }
}

@media (max-width: 400px) {
  .saint-petersburg__section-three {
    .left, .right {
      font-size: 16px;
      line-height: 26px;
    }
    .left {
      margin-bottom: -10px;
    }
    .right {
      margin-top: -10px;
    }
  }
}
</style>
