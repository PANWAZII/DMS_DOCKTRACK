<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="require('../assets/logo.png')"></v-img>
          </v-list-item-avatar>
          <h5>ระบบบริหารการจัดหา<br />ระบบคอมพิวเตอร์</h5>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item-group color="primary" class="mb-1">
          <v-list-item :to="this.menu.home.to">
            <v-list-item-icon>
              <v-icon>{{ this.menu.home.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="this.menu.home.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group color="primary" class="mb-1">
          <v-list-item :to="this.menu.profile.to">
            <v-list-item-icon>
              <v-icon>{{ this.menu.profile.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="this.menu.profile.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-group :value="false" prepend-icon="mdi-file-document-multiple">
          <template v-slot:activator>
            <v-list-item-title to="/user/document">การจัดการ</v-list-item-title>
          </template>
          <v-list-item :to="this.menu.check_doc.to">
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>

            <v-list-item-title
              v-text="this.menu.check_doc.title"
            ></v-list-item-title>
          </v-list-item>
          <v-list-item :to="this.menu.manage_doc.to">
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>

            <v-list-item-title
              v-text="this.menu.manage_doc.title"
            ></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- <v-list-item-group color="primary" class="mb-1">
          <v-list-item :to="this.menu.manage_doc.to">
            <v-list-item-icon>
              <v-icon>{{ this.menu.manage_doc.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="this.menu.manage_doc.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group> -->
        <v-list-item-group color="primary" class="mb-1">
          <v-list-item :to="this.menu.manage_user.to">
            <v-list-item-icon>
              <v-icon>{{ this.menu.manage_user.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="this.menu.manage_user.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group color="primary" class="mb-1">
          <v-list-item :to="this.menu.register.to">
            <v-list-item-icon>
              <v-icon>{{ this.menu.register.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="this.menu.register.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="currentRouteName" />
      <v-spacer />
      <!-- <v-btn>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn> -->

      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed class="ma-2" v-bind="attrs" v-on="on"
            ><v-icon>mdi-account-circle</v-icon>
            <h5 class="ml-2">{{ userInfo.first_name }}</h5></v-btn
          >
        </template>
        <v-list class="text-center font-weight-bold">
          <!-- <v-divider></v-divider> -->
          <!-- <v-list-item class="ma-0" height="200" width="100" to="/profile">
            <v-list-item-title><h5>Profile</h5></v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="ma-0" height="200" width="100" to="/document">
            <v-list-item-title><h5>dsdffdff</h5></v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="ma-0" height="200" width="100" to="/document">
            <v-list-item-title><h5>Pfsdffile</h5></v-list-item-title>
          </v-list-item> -->
          <!-- <v-divider></v-divider> -->
          <v-list-item @click="logout"
            ><v-icon medium>{{ this.menu.logout.icon }}</v-icon>
            <h5 class="ml-1">{{ this.menu.logout.title }}</h5></v-list-item
          >
          <!-- <v-btn color="red" @click="logout" class="mt-2 p-0 font-weight-bold">
            <v-icon>{{ this.menu.logout.icon }}</v-icon
            >Logout</v-btn
          > -->
        </v-list>
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
    this.userInfo = await this.$store.dispatch('api/getAdminInfo', {
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
        check_doc: {
          icon: 'mdi-file-document-multiple',
          title: 'ตรวจสอบรายงาน',
          to: '/admin/checkDoc',
        },
        manage_doc: {
          icon: 'mdi-file-document-multiple',
          title: 'จัดการแบบรายงาน',
          to: '/admin/managedoc',
        },
        manage_user: {
          icon: 'mdi-account-search-outline',
          title: 'รายชื่อผู้ใช้งาน',
          to: '/admin/manageUser',
        },

        register: {
          icon: 'mdi-account-plus',
          title: 'ลงทะเบียนผู้ใช้งาน',
          to: '/admin/register',
        },
        // waiting: {
        //   title: 'รอพิจารณา',
        //   to: '/doc-list/waitingList',
        // },
        // dms: {
        //   title: 'กรมฯ ลงนาม',
        //   to: '/doc-list/dmsList',
        // },
        // moph: {
        //   title: 'กระทรวงฯ ลงนาม',
        //   to: '/doc-list/mophList',
        // },
        // approved: {
        //   title: 'ส่งคืนแล้ว',
        //   to: '/doc-list/approvedList',
        // },
        // rejected: {
        //   title: 'มีข้อแก้ไข',
        //   to: '/doc-list/rejectedList',
        // },
        logout: {
          icon: 'mdi-account-arrow-right',
          title: 'ออกจากระบบ',
        },
      },
      clipped: false,
      drawer: false,
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
      if (this.$route.path === '/admin') {
        return 'หน้าหลัก'
      } else if (this.$route.path === '/admin/document') {
        return 'แบบคำขอจัดหาระบบคอมพิวเตอร์ภาครัฐ'
      } else if (this.$route.path === '/admin/register') {
        return 'Register'
      } else if (this.$route.path === '/admin/profile') {
        return 'โปรไฟล์'
      } else if (this.$route.path === '/admin/managedoc') {
        return 'จัดการแบบรายงานฯ'
      } else if (this.$route.path === '/admin/manageUser') {
        return 'จัดการผู้ใช้งาน'
      } else if (this.$route.path === '/admin/checkDoc') {
        return 'ตรวจสอบแบบรายงานฯ'
      }
    },
  },
}
</script>
