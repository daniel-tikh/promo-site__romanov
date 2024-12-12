<template>
  <div class="cognac page page_bg page_warning">
    <div class="cognac-intro">
<!--      <div class="cloud2"></div>-->
      <div class="cloud1"></div>
<!--      <div class="cloud3"></div>-->
      <div class="cloud4"></div>
      <div class="bottle animate-fade"></div>
      <div class="zerno-intro__container container animate">
        <div class="cognac-intro__inner">
          <div class="cognac-intro__title">
            <span>LA FAMILLE</span>   ROMANOV VSOP
          </div>
          <div class="cognac-intro__text">
            Изготовлен из винограда сорта <br>
            <b>Ugni Blanc</b>, выращенного <br>
            на виноградниках <b>Grand Cru</b> <br>
            региона Grande Champagne
          </div>
          <div class="cognac-intro__subtext">
            Семейное предприятие Maison Prunier основанное в 1769 году — <br>
            это всегда натуральное виноградарство, отборный урожай, строгий контроль <br>
            и соблюдение индивидуальной технологии производственного процесса <br>
            и выдержки
          </div>
        </div>
      </div>
    </div>
    <div class="cognac-description">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Особенности производства</h2>
            <p>
              На производстве компании <span>Prunier</span>
              всегда использовался исключительно ручной труд.
              Мастерство и секреты купажирования уже многие годы передаются от поколения к поколению.
            </p>
          </div>
          <div class="col">
            <img src="~/assets/img/cognac/block2-row-1.png" />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <img src="~/assets/img/cognac/block2-row-2.png" />
          </div>
          <div class="col">
            <p>
              Выдержка коньяка <span>LA FAMILLE ROMANOV VSOP</span> проходит до 4  лет в бочках, которые обязательно изготавливаются по старинным традициям из отборной древесины лимузенского дуба. Причем, при их производстве никогда
              не используются гвозди, которые имеют свойство передавать содержимому емкости неприятный металлический привкус, а также склеивающие вещества,
              которые способны полностью испортить качество, вкус и запах алкогольного напитка.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="cognac-about">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Вкус и аромат</h2>
            <p>
              Букет: свежий, яркий, с ведущими нотками фруктов (изюм, яблоко, слива, абрикос), дубовой бочки, специй и пряностей.
              <br><br>
              Вкус
              <b>COGNAC LA FAMILLE ROMANOV VSOP</b>
              с пикантной горчинкой, терпкий, древесно-фруктовый, обволакивающий.
              <br><br>
              Послевкусие: согревающее с нотками фруктов, орешков, специй.
            </p>
            <ul>
              <li>
                <b>Регион:</b> КОНЬЯК
              </li>
              <li>
                <b>Страна производителя:</b> ФРАНЦИЯ
              </li>
              <li>
                <b>Производитель:</b> PRUNIER
              </li>
              <li>
                <b>Сорт винограда:</b> УНИ БЛАН
              </li>
              <li>
                <b>Выдержка в ёмкости:</b> БОЧКА
              </li>
              <li>
                <b>Крепость: </b> 40 %
              </li>
              <li>
                <b>Объём:</b> 0,7 л
              </li>
              <li>
                <b>Класс:</b> VSOP
              </li>
              <li>
                <b>Выдержка:</b> 4 ГОДА
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img class="cognac-cups" src="~/assets/img/cognac/cups.png" />
    <div class="warning">Чрезмерное употребление алкоголя вредит вашему здоровью.</div>
  </div>
</template>
<script>
export default {
  name: 'cognac',
  transition() {
    if (!localStorage.fromTo) return 'slide-left';

    const { from, to } = JSON.parse(localStorage.fromTo);
    return to > from ? 'slide-left' : 'slide-right'
  },
}
</script>
<style lang="scss">
.cognac {

  &-intro {
    background: url(~/assets/img/cognac/bg-intro.png) top no-repeat;
    padding-top: 480px;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      background: #e6e2d7;
      z-index: 3;
      opacity: 64%;
    }

    .cloud1 {
      background-image: url(~/assets/img/cognac/cloud-1.png);
      width: 815px;
      height: 455px;
    }

    .cloud4 {
      background-image: url(~/assets/img/cognac/cloud-2.png);
      width: 847px;
      height: 485px;
      right: auto;
      left: 0;
    }

    &__title {
      font-family: "Playfair Display",sans-serif;
      font-weight: 600;
      font-size: 52px;
      line-height: 59px;
      display: inline-flex;
      align-items: center;
      gap: 24px;
      margin-bottom: 40px;

      span {
        display: inline-block;
        font-family: "Playfair Display",sans-serif;
        //height: 64px;
        line-height: 42px;
        padding: 14px 24px;
        color: #FFF;
        background-color: #e7a366;
        display: flex;
        align-items: center;
      }
    }

    &__text {
      font-size: 32px;
      line-height: 56px;
      margin-bottom: 74px;
      font-weight: 500;
      text-transform: uppercase;

      b {
        font-weight: 700;
      }
    }

    &__subtext {
      font-size: 16px;
      line-height: 30px;
      font-weight: 300;
    }

    &__inner {
      width: 62%;
      max-width: 62%;
      padding-top: 60px;
      padding-bottom: 300px;
    }

    .bottle {
      background: url(~/assets/img/cognac/bottle.png) 50% no-repeat;
      height: 800px;
      top: 480px;
      left: 50vw;
    }
  }

  &-cups {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 40vw;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }

  h2 {
    font-family: "Playfair Display",sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 53px;
    font-style: italic;
  }

  p {
    margin-top: 70px;
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;

    span {
      text-transform: uppercase;
      font-weight: 700;
      color: white;
      background: #e7a366;
      padding: 2px 6px;
    }

    b {
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  ul {
    margin-top: 58px;
    margin-bottom: 70px;

    li {
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
      margin-top: 12px;

      b {
        font-weight: 600;
      }
    }
  }

  &-description {
    padding-top: 280px;
    padding-bottom: 150px;
    margin-top: -230px;
    z-index: 3;
    position: relative;
    background-image: url(~/assets/img/cognac/bg-block-2.png);
    background-size: cover;
    background-position: center;

    img {
      max-width: 88%;
    }
  }

  @media (min-width: 1600px) {
    &-intro {
      &__inner {
        width: 52%;
        max-width: 52%;
      }
    }
  }

  @media (min-width: 1500px) {
    &-description {
      background-size: contain;
    }
  }

  @media (max-width: 1300px) {
    &-intro {
      &__inner {
        width: 66%;
        max-width: 66%;
      }

      &__title {
        font-size: 42px;
        line-height: 49px;
      }

      &__text {
        font-size: 24px;
        line-height: 46px;
      }
    }

    .row {
      margin-bottom: 30px;
    }

    h2 {
      font-size: 32px;
      line-height: 45px;
    }

    p {
      margin-top: 40px;
      font-size: 14px;
      line-height: 28px;
    }
  }

  @media (max-width: 1024px) {
    &-intro {
      .bottle {
        transform: translateX(calc(-40% + 23px));
        height: 335px;
        width: 215px;
        background-size: cover;
        top: 910px;

      }

      .zerno-intro__container {
        justify-content: center;
      }

      &__inner {
        width: 100%;
        padding-bottom: 300px;
        text-align: center;
      }

      &__title {
        display: flex;
        flex-direction: column;
        gap: 14px;
        align-items: center;

        span {
          line-height: 39px;
          padding: 10px 14px;
        }
      }

      &__text {
        margin-bottom: 420px;
        font-size: 20px;
        line-height: 40px;
      }

      &__subtext {
        br {
          display: none;
        }
      }
    }

    &-cups {
      z-index: 1;
      opacity: 50%;
    }

    .row {
      grid-template-columns: 1fr;
      margin-bottom: 60px;
      gap: 50px;

      &:last-child {
        .col {
          &:last-child {
            order: -1;
          }
        }
      }
    }

    &-description {
      text-align: center;
    }

    &-about {
      z-index: 2;
      position: relative;
      text-align: center;


      .row {
        grid-template-columns: 1fr;
      }
    }
  }

  @media (max-width: 768px) {
    &-intro {
      padding-top: 358px;

      .bottle {
        top: 750px;
      }



      .zerno-intro__container {
        justify-content: center;
      }

      &__inner {
        width: 100%;
        max-width: 90%;
      }

      &__title {
        align-items: center;
        font-size: 32px;
        line-height: 39px;
      }

      &__text {
        text-align: center;
        font-size: 18px;
        line-height: 32px;

        br {
          display: none;
        }
      }

      &__subtext {
        text-align: center;
      }
    }

    h2 {
      font-size: 32px;
      line-height: 45px;
    }

    p {
      margin-top: 40px;
      font-size: 14px;
      line-height: 28px;
    }

    &-description {
      padding-top: 289px;
      padding-bottom: 0;
      margin-top: -332px;

      img {
        max-width: 100%;
      }
    }
  }
}
</style>
