<template>
  <v-app style="background: #056839">
    <v-main>
      <v-container class="fill-height justify-center">
        <v-card elevation="1" height="700" width="900">
          <v-row align="center" justify="center" dense>
            <v-col cols="12" sm="8" md="6" lg="6">
              <v-img
                class="mt-15 mb-5"
                :src="require('../assets/logo.png')"
                contain
                height="200"
              >
              </v-img>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    required
                    :rules="emailRules"
                    @keyup.enter="submit"
                    label="อีเมล"
                    name="Email"
                    prepend-inner-icon="mdi-mail"
                    type="email"
                    class="rounded-1"
                    outlined
                    v-model="email"
                  >
                  </v-text-field>
                  <v-text-field
                    required
                    :rules="passwordRules"
                    @keyup.enter="submit"
                    label="รหัสผ่าน"
                    name="password"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    class="rounded-1"
                    outlined
                    v-model="pass"
                  >
                  </v-text-field>
                  <v-btn
                    class="rounded-1"
                    color="#056839"
                    x-large
                    block
                    @click="submit"
                  >
                    <div class="white--text font-weight-bold">เข้าสู่ระบบ</div>
                  </v-btn>
                </v-form>
                <a href="register" class="float-right mt-5 font-weight-bold"
                  >ลงทะเบียน</a
                >
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h6" style="font-weight: bold"
          >ข้อผิดพลาด
        </v-card-title>
        <v-card-text style="font-weight: bold">
          อีเมลหรือรหัสผ่านไม่ถูกต้อง
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false"> ปิด </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-overlay :value="loading"></v-overlay>
    <div class="text-center">
      <v-dialog v-model="loading" hide-overlay persistent width="300">
        <v-card color="#056839" dark>
          <v-card-text>
            กำลังเข้าสู่ระบบ
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>
<script>
import login from '~/middleware/login'
export default {
  layout: 'empty',
  middleware: 'login',
  data: () => ({
    dialog: false,
    loading: false,
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'โปรดระบุอีเมล',
      (v) => /.+@.+\..+/.test(v) || 'โปรดระบุอีเมลที่ถูกต้อง',
    ],
    pass: '',
    passwordRules: [(v) => !!v || 'โปรดระบุรหัสผ่าน'],
  }),

  methods: {
    submit() {
      this.$refs.form.validate()
      console.log(this.$refs.form.validate())
      if (this.$refs.form.validate() == true) {
        this.login()
      }
    },
    async login() {
      try {
        this.loading = true
        const credential = await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.pass
        )
        await this.$store.dispatch('login', credential.user)
        this.loading = false
        this.$router.push('/')
      } catch (error) {
        if ((error.code = 'auth/wrong-password')) {
          this.loading = false
          this.dialog = true
        }
        console.log('this is error msg', error.code)
      }
    },
  },
}
// export default {
//   layout: 'empty',
//   middleware: 'login',
//   data() {
//     return {
//       loading: false,
//       emailRules: [
//         (v) => !!v || 'โปรดระบุอีเมล',
//         (v) => /.+@.+/.test(v) || 'โปรดระบุอีเมลที่ถูกต้อง',
//       ],
//       passwordRules: [(v) => !!v || 'โปรดระบุรหัสผ่าน'],
//       form: {
//         email: '',
//         pass: '',
//       },
//     }
//   },
//   methods: {
//     async login() {
//       try {
//         this.loading = true
//         const credential = await this.$fire.auth.signInWithEmailAndPassword(
//           this.form.email,
//           this.form.pass
//         )
//         await this.$store.dispatch('login', credential.user)
//         this.loading = false
//         this.$router.push('/')
//       } catch (e) {
//         console.log(e.message)
//       }
//     },
//   },
// }
</script>
