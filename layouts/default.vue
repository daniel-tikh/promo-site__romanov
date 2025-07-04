<template>
    <main
        class="app"
        :class="{
            app_loaded: loaded,
            app_disabled: !loaded
        }"
    >
        <!-- <NuxtLoadingIndicator /> -->
        <preloader @loaded="loaded = true" />
        <background-logo />
        <div class="app__wrapper">
            <header-app />
            <main-menu :menu="menu" :allMenu="allMenu" :current-path="currentPath"/>
            <div class="app__inner">
                <nuxt />
            </div>
            <footer class="footer">
                <div class="container footer__container">
                    <div class="footer__info">
                        <div class="footer__info--text">
                            Информация, опубликованная на сайте, не является публичной офертой, определяемой положениями Гражданского кодекса Российской Федерации. <br>Информация размещена в ознакомительных целях и может быть изменена без предварительного уведомления.
                        </div>
                        <div class="footer__info--text">© 2023-{{ new Date().getFullYear() }}, ООО "Постнофф и Ко" Все права защищены.</div>
                    </div>
                    <div class="footer__right">
                        <div class="footer__made">
                            Сделано в 
                            <a href="http://stickyhands.ru/" target="_blank">StickyHands</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

        <agreement
            v-if="showAgreement"
            @agreement-click="agreementClick"
        />
        <reject v-if="showReject" />
    </main>
</template>

<script>
import Agreement from '../components/Agreement.vue'
import HeaderApp from '../components/layout/HeaderApp.vue'
import MainMenu from '../components/layout/MainMenu.vue'
import Reject from '../components/Reject.vue'
import BackgroundLogo from '../components/svg/BackgroundLogo.vue'

export default {
  components: { BackgroundLogo, Agreement, Reject, HeaderApp, MainMenu },
  name: 'default',
  data() {
    return {
        showAgreement: true,
        showReject: false,
        loaded: false,
        menu: [
            {
                id: 0,
                name: "LA FAMILLE ROMANOV",
                route: "",
                subMenu: [
                    {
                        id: 11,
                        name: "VODKA ROMANOV",
                        route: "/romanov"
                    },
                    {
                        id: 12,
                        name: "COGNAC VSOP",
                        route: "/cognac"
                    },
                    {
                        id: 13,
                        name: "ALEXANDER I",
                        route: "/alexander"
                    },
                  {
                    id: 14,
                    name: "ROMANOV SAINT-PETERSBURG",
                    route: "/saint-petersburg"
                  },
                ],
            },
            {
                id: 1,
                name: "Зерно",
                route: "/zerno"
            },
            {
                id: 50,
                name: "ТОРГОВЫЙ ДОМ РОМАНОВ",
                route: "/"
            },
            {
                id: 101,
                name: "FINKA",
                route: "/finka"
            },
            {
                id: 102,
                name: "Контакты",
                route: "/contacts"
            },
        ],
    }
  },
  created() {
    this.$nuxt.$on('to-page', this.goToPage);
  },
  computed: {
    allMenu() {
        const menu = [];

        this.menu.forEach(menuItem => {
            menu.push(menuItem)

            if (menuItem.subMenu) {
                menuItem.subMenu.forEach(smItem => menu.push(smItem));
            }
        })

        return menu;
    },

    currentPath() {
        const { path } = this.$route;

        return path != "/" && path[path.length - 1] === '/'
                ? path.slice(0, -1)
                : path
    },
  },
  mounted() {
    this.$nuxt.$on('loaded', () => {
        this.loaded = true;
    })
  },
  methods: {
    agreementClick(value) {
        this.showAgreement = false
        if (value === 'n') this.showReject = true;
    },
    goToPage(route) {
        if (route) {
            this.beforeRoute(route);
            this.$router.push({ path: route });
        }
    },
    beforeRoute(route) {
        const to = this.allMenu.find(item => item.route === route);
        const from = this.allMenu.find(item => item.route === this.currentPath);

        localStorage.fromTo = JSON.stringify({
            to: to.id,
            from: from.id,
        })
    },
  },
}
</script>
