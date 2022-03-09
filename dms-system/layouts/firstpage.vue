<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-img
        :src="require('../assets/logo.png')"
        max-height="50px"
        max-width="50px"
      ></v-img>

      <h5 class="ml-5">ระบบจัดหาคอมพิวเตอร์ภาครัฐ</h5>

      <v-spacer />
      <!-- <v-btn>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn> -->

      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="secondary"
            depressed
            class="ma-2"
            v-bind="attrs"
            v-on="on"
            ><v-icon>mdi-shield-account</v-icon>
            <h5 class="ml-2">สำหรับผู้ดูแลระบบ</h5></v-btn
          >
          <v-btn color="info" depressed class="ma-2" v-bind="attrs" v-on="on"
            ><v-icon>mdi-account-circle</v-icon>
            <h5 class="ml-2">เข้าสู่ระบบ</h5></v-btn
          >
        </template>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ 'DMS-DOCTRACK ' + new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DefaultLayout',
  // async asyncData({ store }) {
  //   let userInfo = []
  //   try {
  //     // const user_uid = await $cookies.get('uid_token')
  //     const user_uid = store.getters.uid
  //     console.log('uid from async', user_uid)
  //     userInfo = await store.dispatch('api/getUserInfo', {
  //       params: { uid: user_uid },
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  //   return { userInfo }
  // },
  async fetch() {
    const user_uid = await this.$cookies.get('uid_token')
    this.userInfo = await this.$store.dispatch('api/getUserInfo', {
      params: { uid: user_uid },
    })
  },
  data() {
    return {
      userInfo: [],
      menu: {
        home: {
          icon: 'mdi-home',
          title: 'หน้าหลัก',
          to: '/',
        },
        profile: {
          icon: 'mdi-account',
          title: 'โปรไฟล์',
          to: '/profile',
        },
        document: {
          icon: 'mdi-file-document-multiple',
          title: 'แบบรายงานการจัดซื้อ',
          to: '/document',
        },
        all_doc: {
          icon: 'mdi-file-document-multiple',
          title: 'สร้างแบบคำขอฯ',
          to: '/document',
        },
        track_doc: {
          icon: 'mdi-file-document-multiple',
          title: 'ติดตามแบบรายงานฯ',
          to: '/',
        },

        support: {
          icon: 'mdi-face-agent',
          title: 'Support',
          to: '/support',
        },
        waiting: {
          title: 'รอพิจารณา',
          to: '/doc-list/waitingList',
        },
        dms: {
          title: 'กรมฯ ลงนาม',
          to: '/doc-list/dmsList',
        },
        moph: {
          title: 'กระทรวงฯ ลงนาม',
          to: '/doc-list/mophList',
        },
        approved: {
          title: 'ส่งคืนแล้ว',
          to: '/doc-list/approvedList',
        },
        rejected: {
          title: 'มีข้อแก้ไข',
          to: '/doc-list/rejectedList',
        },
        logout: {
          icon: 'mdi-account-arrow-right',
          title: 'ออกจากระบบ',
        },
      },
      clipped: false,

      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    logout() {
      this.$fire.auth
        .signOut()
        // .signInWithEmailAndPassword(this.form.email, this.form.pass)
        .then((user) => {
          return this.$store.dispatch('logout')
        })
        .then(() => {
          this.$router.push('/login')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getUserInfo() {
      try {
        // const user_uid = await this.$cookies.get('uid_token')
        const user_uid = this.$store.getters.uid
        console.log('this is user uid from cookie', user_uid)
        const response = await axios.get('/users/userInfo', {
          data: { uid: user_uid },
          // uid: "ttPQcL9dCTUPcealHLZtqGHNAuW2"
        })
        const userDetail = await response.data
        // if (userDetail == undefined) {
        //   window.location.reload(true)
        // }
        console.log('this is res', response.data)
        return userDetail
      } catch (err) {
        console.log(err)
      }
    },
  },
  computed: {
    currentRouteName() {
      if (this.$route.path === '/') {
        return 'หน้าหลัก'
      } else if (this.$route.path === '/document') {
        return 'แบบคำขอจัดหาระบบคอมพิวเตอร์ภาครัฐ'
      } else if (this.$route.path === '/support') {
        return 'Support'
      } else if (this.$route.path === '/profile') {
        return 'โปรไฟล์'
      } else if (this.$route.path === '/doc-list/waitingList') {
        return 'แบบคำขอฯ รอการพิจารณา'
      } else if (this.$route.path === '/doc-list/dmsList') {
        return 'แบบคำขอฯ รอกรมการแพทย์ลงนาม'
      } else if (this.$route.path === '/doc-list/mophList') {
        return 'แบบคำขอฯ รอกระทรวงสาธารณสุขลงนาม'
      } else if (this.$route.path === '/doc-list/approvedList') {
        return 'แบบคำขอฯ อนุมัติและส่งคืนแล้ว'
      } else if (this.$route.path === '/doc-list/rejectedList') {
        return 'แบบคำขอฯ มีข้อแก้ไข'
      }
    },
  },
}
</script>
