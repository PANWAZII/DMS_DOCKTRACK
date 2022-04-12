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
          <v-divider></v-divider>
          <h5 class="text-center mt-3">แบบรายงานไม่เกิน 5 ล้านบาท</h5>
          <v-list-group :value="true">
            <template v-slot:activator>
              <v-list-item-title class="ml-5">เลือกแบบฟอร์ม</v-list-item-title>
            </template>
            <v-list-item-group color="primary" class="mb-1">
              <v-list-item :to="this.menu.lessthan_Hardware.to">
                <v-list-item-icon>
                  <v-icon>{{ this.menu.lessthan_Hardware.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="this.menu.lessthan_Hardware.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group color="primary" class="mb-1">
              <v-list-item :to="this.menu.lessthan_Software.to">
                <v-list-item-icon>
                  <v-icon>{{ this.menu.lessthan_Software.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="this.menu.lessthan_Software.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group color="primary" class="mb-1">
              <v-list-item :to="this.menu.lessthan_Network.to">
                <v-list-item-icon>
                  <v-icon>{{ this.menu.lessthan_Network.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="this.menu.lessthan_Network.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group color="primary" class="mb-1">
              <v-list-item :to="this.menu.lessthan_Camera.to">
                <v-list-item-icon>
                  <v-icon>{{ this.menu.lessthan_Camera.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="this.menu.lessthan_Camera.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>

          <v-divider></v-divider>
          <h5 class="text-center mt-3">แบบรายงานเกิน 5 ล้านบาท</h5>
          <v-list-group :value="true">
            <template v-slot:activator>
              <v-list-item-title class="ml-5">เลือกแบบฟอร์ม</v-list-item-title>
            </template>
            <v-list-item-group color="primary" class="mb-1">
              <v-list-item :to="this.menu.morethan_Hardware.to">
                <v-list-item-icon>
                  <v-icon>{{ this.menu.morethan_Hardware.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="this.menu.morethan_Hardware.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group color="primary" class="mb-1">
              <v-list-item :to="this.menu.morethan_Software.to">
                <v-list-item-icon>
                  <v-icon>{{ this.menu.morethan_Software.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="this.menu.morethan_Software.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group color="primary" class="mb-1">
              <v-list-item :to="this.menu.morethan_Network.to">
                <v-list-item-icon>
                  <v-icon>{{ this.menu.morethan_Network.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="this.menu.morethan_Network.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group color="primary" class="mb-1">
              <v-list-item :to="this.menu.morethan_Camera.to">
                <v-list-item-icon>
                  <v-icon>{{ this.menu.morethan_Camera.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="this.menu.morethan_Camera.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>

          <v-divider></v-divider>
        </v-list-item-group>

        <!-- <v-list-item-group color="primary" class="mb-1">
          <v-list-item :to="this.menu.document.to">
            <v-list-item-icon>
              <v-icon>{{ this.menu.document.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="this.menu.document.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group> -->

        <v-list-item-group color="primary" class="mb-1">
          <v-list-item :to="this.menu.support.to">
            <v-list-item-icon>
              <v-icon>{{ this.menu.support.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="this.menu.support.title"
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
          to: '/user/profile',
        },
        // document: {
        //   icon: 'mdi-file-document-multiple',
        //   title: 'แบบรายงานการจัดซื้อ',
        //   to: '/document',
        // },
        all_doc: {
          icon: 'mdi-file-document-multiple',
          title: 'ส่งแบบรายงานฯ',
          to: '/user/document',
        },
        lessthan_Hardware: {
          icon: 'mdi-desktop-classic',
          title: 'ฮาร์ดแวร์',
          to: '/user/doc-store/lessthan/hardware',
        },
        lessthan_Software: {
          icon: 'mdi-application-parentheses',
          title: 'ซอฟต์แวร์',
          to: '/user/doc-store/lessthan/software',
        },
        lessthan_Network: {
          icon: 'mdi-access-point-network',
          title: 'ระบบเครือข่าย',
          to: '/user/doc-store/lessthan/network',
        },
        lessthan_Camera: {
          icon: 'mdi-webcam',
          title: 'ระบบกล้องวงจรปิด',
          to: '/user/doc-store/lessthan/camera',
        },
        morethan_Hardware: {
          icon: 'mdi-desktop-classic',
          title: 'ฮาร์ดแวร์',
          to: '/user/doc-store/morethan/hardware',
        },
        morethan_Software: {
          icon: 'mdi-application-parentheses',
          title: 'ซอฟต์แวร์',
          to: '/user/doc-store/morethan/software',
        },
        morethan_Network: {
          icon: 'mdi-access-point-network',
          title: 'ระบบเครือข่าย',
          to: '/user/doc-store/morethan/network',
        },
        morethan_Camera: {
          icon: 'mdi-webcam',
          title: 'ระบบกล้องวงจรปิด',
          to: '/user/doc-store/morethan/camera',
        },

        support: {
          icon: 'mdi-face-agent',
          title: 'Support',
          to: '/support',
        },
        tracking: {
          title: 'ติดตามแบบรายงานฯ',
          to: '../pages/doc-list/waitingList',
        },
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
      if (this.$route.path === '/user') {
        return 'หน้าหลัก'
      } else if (this.$route.path === '/user/document') {
        return 'แบบคำขอจัดหาระบบคอมพิวเตอร์ภาครัฐ'
      } else if (this.$route.path === '/support') {
        return 'Support'
      } else if (this.$route.path === '/profile') {
        return 'โปรไฟล์'
      } else if (this.$route.path === '/user/doc-store/lessthan/hardware') {
        return 'โครงการไม่เกิน 5 ล้านบาท / ฮาร์ดแวร์'
      } else if (this.$route.path === '/user/doc-store/lessthan/software') {
        return 'โครงการไม่เกิน 5 ล้านบาท / ซอฟต์แวร์'
      } else if (this.$route.path === '/user/doc-store/lessthan/network') {
        return 'โครงการไม่เกิน 5 ล้านบาท / ระบบเครือข่าย'
      } else if (this.$route.path === '/user/doc-store/lessthan/camera') {
        return 'โครงการไม่เกิน 5 ล้านบาท / ระบบกล้องวงจรปิด'
      } else if (this.$route.path === '/user/doc-store/morethan/hardware') {
        return 'โครงการเกิน 5 ล้านบาท / ฮาร์ดแวร์'
      } else if (this.$route.path === '/user/doc-store/morethan/software') {
        return 'โครงการเกิน 5 ล้านบาท / ซอฟต์แวร์'
      } else if (this.$route.path === '/user/doc-store/morethan/network') {
        return 'โครงการเกิน 5 ล้านบาท / ระบบเครือข่าย'
      } else if (this.$route.path === '/user/doc-store/morethan/camera') {
        return 'โครงการเกิน 5 ล้านบาท / ระบบกล้องวงจรปิด'
      }
    },
  },
}
</script>
