<template>
    <div id="cookie_notification">
        <p class="cookie_text">
            Этот сайт использует <span class="cookie_link" @click="showModal = true">cookie-файлы</span>.
        </p>
        <button class="cookie_accept">Принять</button>

        <Modal v-if="showModal" @close="showModal = false">
          <CookiesInfo />
        </Modal>
    </div>
</template>

<!-- Cookies -->

<script>
  import Modal from './ModalWindow.vue'
  import CookiesInfo from './cookies-info.vue'

  export default 
  {
    components: { Modal, CookiesInfo },
    data() {
      return {
        showModal: false
      }
    },

    mounted() {
      this.checkCookies();
    },
    methods: {
      checkCookies() {
        let cookieDate = localStorage.getItem('cookieDate');
        let cookieNotification = document.getElementById('cookie_notification');
        let cookieBtn = cookieNotification.querySelector('.cookie_accept');

        // Если записи про куки нет или она просрочена на 1 год (31536000000), то показываем информацию про кукисы
        if( !cookieDate || (+cookieDate + 31536000000) < Date.now() )
          cookieNotification.classList.add('show');

        // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
        cookieBtn.addEventListener('click', function(){
          localStorage.setItem( 'cookieDate', Date.now() );
          cookieNotification.classList.remove('show');
        })
      }
    }
  }
</script>

<style>

  /* Cookies */

  .cookie_link {
    color: #1f1ff0;
  }

  @media screen {
    #cookie_notification {
      position: fixed;
      right: 10px;
      bottom: 30px;
      display: none;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      overflow: visible;
      border-radius: 100px;
      max-width: 680px;
      font-family: "Montserrat", serif;
      font-style: normal;
      background-color: white;
      box-shadow: 0px 0px 10px 0px rgba(10,13,4,0.08);
      z-index: 998;
    }

    #cookie_notification.show {
      display: flex;
    }

    .cookie_text {
      margin: -3px 40px -2px;
      font-family: "Montserrat", serif;
      font-style: normal;
      font-size: 13px;
      line-height: 11px;
    }

    .cookie_text a {
      text-decoration: none;
      transition: all .25s linear;
    }

    @media (min-width: 1025px) {
      .cookie_text a:hover {
        text-decoration: none;
        opacity: .56;
      }
    }

    .cookie_accept {
      border-radius: 100px;
      padding: 14px 40px;
      margin-right: -2px;
      font-family: "Montserrat", serif;
      font-style: normal;
      font-size: 13px;
      line-height: 16px;
      font-weight: 600;
      color: white;
      background-color: #000;
      box-sizing: content-box;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all .25s linear;
    }

    @media (min-width: 1025px) {
      .cookie_accept:hover {
        background-color: #666;
      }
    }
  }

  @media screen and (max-width: 1960px) {
      #cookie_notification {
          width: auto;
      }
  }

  @media screen and (max-width: 768px) {
      #cookie_notification {
          right: 30px;
      }

      .cookie_text {
          margin: -3px 20px -2px;
      }

      .cookie_accept {
          padding: 14px 30px;
      }
  }

  @media screen and (max-width: 500px) {
      #cookie_notification {
          width: 100%;
          max-width: calc(100% - 30px*2);
      }
  }

  @media screen and (max-width: 425px) {
      #cookie_notification {
          right: 20px;
          max-width: calc( 100% - 20px*2 );
      }
  }

  @media screen and (max-width: 375px) {
      .cookie_text {
          margin: -3px 15px -2px;
      }
      .cookie_accept {
          padding: 11px 20px;
      }
  }

</style>
