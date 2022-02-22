<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-avatar color="teal" rounded size="80">
              <v-icon dark size="55"> mdi-account-circle </v-icon>
            </v-avatar>
            <span class="text-h5">&nbsp;&nbsp; ข้อมูลส่วนตัว</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="4">
                  <v-text-field
                    disabled
                    label="หน่วยงานสังกัด"
                    value="สำนักดิจิทัลการแพทย์"
                  />
                </v-col>
              </v-row>
            </v-container>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="ชื่อ"
                    value="Jirayus"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="นามสกุล"
                    value="Preechadech"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="ตำแหน่ง"
                    value="นักวิชาการคอมพิวเตอร์"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.user_tel"
                    :rules="telRules"
                    label="โทรศัพท์"
                    value="9072"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.user_fax"
                    :rules="faxRules"
                    label="โทรสาร"
                    value="9073"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="form.user_email"
                    :rules="emailRules"
                    label="อีเมล"
                    value="jirayus.p62@rsu.ac.th"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small
              >*โปรดระมัดระวังในการแก้ไขข้อมูล
              เนื่องจากส่งผลต่อข้อมูลของท่านบนฐานข้อมูลองค์กร</small
            ><v-col cols="12" class="text-right">
              <v-btn color="teal" min-width="150" dark> Update Profile </v-btn>
            </v-col>
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: 'middleware-auth',
  name: 'profile',
  data() {
    return {
      valid: true,
      form: {
        user_tel: '3751',
        user_fax: '4751',
        user_email: 'test1@moph.go.th',
      },
      telRules: [
        (v) => !!v || 'โปรดระบุเบอร์โทรศัพท์',
        (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
      ],
      faxRules: [
        (v) => !!v || 'โปรดระบุเบอร์โทรสาร',
        (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
      ],
      emailRules: [
        (v) => !!v || 'โปรดระบุอีเมลหัวหน้าส่วนราชการ',
        (v) => /.+@.+/.test(v) || 'อีเมลไม่ถูกต้องตามรูปแบบ',
        (v) => v.length <= 100 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
      ],
    }
  },
}
</script>
