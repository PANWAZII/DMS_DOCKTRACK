<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../../../assets/logo.png')"
          class="my-3"
          contain
          height="150"
        />
      </v-col>

      <v-col class="mb-4">
        <p class="topices">แบบรายงานการจัดหาฯ<br />ประภท ระบบเครือข่าย</p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="8">
        <template>
          <v-form ref="form" v-model="valid" lazy-validation>
            <!-- <p class="topices">ก. ข้อมูลทั่วไป</p> -->
            <p class="topices">ชื่อโครงการ</p>

            <v-text-field
              v-model="form.project_name"
              :rules="projnRules"
              :counter="255"
              label="ชื่อโครงการ (ระบุทั้งภาษาไทยและภาษาอังกฤษ)"
              required
            ></v-text-field>
            <!-- <br />
            <p class="topices">ประเภทโครงการ</p>
            <v-radio-group v-model="form.project_type" row required>
              <v-radio label="Hardware" value="hardware"></v-radio>
              <v-radio label="Software" value="software"></v-radio>
              <v-radio label="ระบบเครือข่าย" value="network"></v-radio>
              <v-radio label="ระบบกล้องวงจรปิด" value="camera"></v-radio>
            </v-radio-group> -->
            <!-- <p class="topices">2. ส่วนราชการ / รัฐวิสาหกิจ</p> -->
            <!-- <p class="subtop">2.1 ชื่อส่วนราชการ</p> -->
            <!-- <v-text-field
              v-model="form.department_name"
              :rules="deptnRules"
              :counter="255"
              label="ชื่อส่วนราชการ"
              required
            ></v-text-field> -->
            <!-- <br /> -->
            <!-- <p class="subtop">2.2 หัวหน้าส่วนราชการ</p> -->
            <!-- <v-row> -->
            <!-- <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.boss_name"
                  :rules="bossnameRules"
                  :counter="255"
                  label="ชื่อ สกุล"
                  required
                ></v-text-field>
              </v-col> -->

            <!-- <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.boss_position"
                  :rules="bossposRules"
                  :counter="255"
                  label="ตำแหน่ง"
                  required
                ></v-text-field>
              </v-col> -->
            <!-- <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.boss_tel"
                  :rules="bosstRules"
                  :counter="10"
                  label="โทรศัพท์"
                  required
                ></v-text-field>
              </v-col> -->
            <!-- <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.boss_fax"
                  :rules="bossfRules"
                  :counter="10"
                  label="โทรสาร"
                  required
                ></v-text-field>
              </v-col> -->

            <!-- <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.boss_email"
                  :rules="bosseRules"
                  :counter="100"
                  label="อีเมล"
                  required
                ></v-text-field>
              </v-col> -->
            <!-- </v-row> -->
            <!-- <br /> -->
            <!-- <p class="subtop">2.3 ผู้รับผิดชอบโครงการ</p> -->

            <!-- <p class="smalltop">ผู้รับผิดชอบโครงการลำดับที่ 1</p> -->
            <!-- <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.Proj1"
                  :rules="proj1Rules"
                  :counter="255"
                  label="ชื่อ สกุล"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.ProjPos1"
                  :rules="projpos1Rules"
                  :counter="255"
                  label="ตำแหน่ง"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.ProjT1"
                  :rules="projt1Rules"
                  :counter="10"
                  label="โทรศัพท์"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.ProjF1"
                  :rules="projf1Rules"
                  :counter="10"
                  label="โทรสาร"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.ProjE1"
                  :rules="proje1Rules"
                  :counter="100"
                  label="อีเมล"
                  required
                >
                </v-text-field>
              </v-col>
            </v-row> -->
            <br />
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <p class="topices">ปีงบประมาณ</p>
                <v-select
                  v-model="form.budget_year"
                  :items="budget_year"
                  item-text="year"
                  item-value="year"
                  :rules="[(v) => !!v || 'โปรดระบุปีงบประมาณ']"
                  label="ระบุปีงบประมาณ"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <p class="subtop">แหล่งเงิน</p>
                <v-select
                  v-model="form.budget_resource"
                  :items="budget"
                  item-text="name"
                  item-value="value"
                  :rules="[(v) => !!v || 'โปรดระบุแหล่งเงิน']"
                  label="โปรดระบุแหล่งเงิน"
                  required
                >
                </v-select>
              </v-col>
            </v-row>

            <br />
            <p class="topices">งบประมาณ</p>
            <p class="subtop">งบประมาณรวมทั้งสิ้น</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.sum"
                  :rules="sumRules"
                  dense
                  label="จำนวนเงิน (บาท)"
                  required
                >
                </v-text-field>
              </v-col>
              <!-- <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.baht_text"
                  :rules="texttotalRules"
                  dense
                  label="ตัวอักษร"
                  required
                ></v-text-field>
              </v-col> -->
            </v-row>
            <br />

            <p class="topices">แนบไฟล์แบบรายงานการจัดหาฯ</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input label="แบบรายงานการจัดหาฯ"></v-file-input>
              </v-col>
            </v-row>
            <br />
            <!-- <p class="topices">4. รายละเอียดของอุปกรณ์</p> -->

            <!-- <p class="subtop">
              รายละเอียดที่ไม่ตรงกับมาตรฐานกลาง พร้อมระบุเหตุผล ความจำเป็น
            </p> -->
            <!-- <v-textarea
              v-model="form.detail_notstd"
              label="กรอกรายละเอียด"
              required
              :counter="3000"
              :rules="textareasRules"
            ></v-textarea> -->
            <!-- <br /> -->
            <!-- <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.quantity"
                  :rules="quantRules"
                  :counter="10"
                  label="จำนวน"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="form.unit"
                  :items="form.iunit"
                  :rules="[(v) => !!v || 'โปรดระบุหน่วยการนับ']"
                  label="โปรดเลือกหน่วยการนับ"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.price_unit"
                  :rules="priceRules"
                  label="ราคาต่อหน่วย"
                  required
                ></v-text-field>
              </v-col>
            </v-row> -->
            <!-- <br /> -->
            <!-- <v-row>
              <v-col cols="12">
                <div>
                  <h3>
                    ราคารวม &nbsp; &nbsp; <span>{{ sumresult }}</span> &nbsp;
                    &nbsp; บาท
                  </h3>
                </div>
              </v-col>
            </v-row> -->
            <!-- <br /> -->
            <!-- <p class="topices">วิธีการจัดหา</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-radio-group
                  v-model="form.method"
                  row
                  required
                  @blur="$v.form.method.$touch()"
                >
                  <v-radio label="จัดซื้อ" color="red" value="first"></v-radio>
                  <v-radio label="จัดจ้าง" color="red" value="second"></v-radio>
                  <v-radio label="การเช่า" color="red" value="third"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row> -->
            <!-- <br /> -->
            <!-- <p class="topices">6. สถานที่ติดตั้งอุปกรณ์</p> -->
            <!-- <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.destination"
                  :rules="destiRules"
                  :counter="255"
                  label="ชื่อสถานที่/หน่วยงานติดตั้ง"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.cert"
                  :rules="recomRules"
                  :counter="255"
                  label="คำรับรองการปฏิบัติราชการกรมการแพทย์ (ใส่ - กรณีไม่ระบุ)"
                  required
                ></v-text-field>
              </v-col>
            </v-row> -->
            <!-- <br /> -->
            <!-- <p class="topices">
              7. ระบบหรืออุปกรณ์คอมพิวเตอร์ทั้งหมดที่มีอยู่เดิม
            </p> -->
            <!-- <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.list_old"
                  :rules="listRules"
                  :counter="255"
                  label="รายการ"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.locate_old"
                  :rules="locaoldRules"
                  :counter="255"
                  label="สถานที่ติดตั้ง"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.year_old"
                  :rules="insyearRules"
                  :counter="255"
                  label="ติดตั้งใช้งานเมื่อปี พ.ศ."
                  required
                >
                </v-text-field>
              </v-col>
            </v-row> -->
            <!-- <br /> -->
            <!-- <p class="topices">
              8.
              ปัญหาอุปสรรคในการปฏิบัติงาน/เหตุผลความจำเป็นที่ต้องจัดหาอุปกรณ์ในครั้งนี้
            </p> -->
            <!-- <v-textarea
              v-model="form.obstacle"
              label="กรอกปัญหาอุปสรรค/เหตุผลความจำเป็น"
              required
              :counter="700"
              :rules="obstRules"
            ></v-textarea> -->
            <!-- <br /> -->
            <!-- <p class="topices">
              9. ลักษณะงานหรือระบบงานที่จะใช้กับอุปกรณ์ที่จัดหาครั้งนี้
            </p> -->
            <!-- <v-textarea
              v-model="form.purpose_of_use"
              label="กรอกลักษณะ/ระบบงานที่จะใช้กับอุปกรณ์ที่จัดหา"
              required
              :counter="700"
              :rules="pouseRules"
            ></v-textarea> -->
            <!-- <br /> -->
            <!-- <p class="topices">
              10. เปรียบเทียบอุปกรณ์ที่จัดหาครั้งนี้กับปริมาณงาน
            </p> -->
            <!-- <v-textarea
              v-model="form.compare"
              label="เปรียบเทียบอุปกรณ์ที่จัดหากับปริมาณงาน"
              required
              :counter="700"
              :rules="compareRules"
            ></v-textarea> -->
            <!-- <br /> -->
            <!-- <p class="topices">
              11. บุคลากรด้านคอมพิวเตอร์
              หรือบุคลากรที่ได้รับมอบหมายให้รับผิดชอบด้าน IT ที่มีอยู่ในปัจจุบัน
            </p> -->
            <!-- <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.major"
                  :rules="majRules"
                  :counter="255"
                  label="ด้าน/สาขา"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.quantity_major"
                  :rules="qmajRules"
                  :counter="255"
                  label="จำนวน (คน)"
                  required
                ></v-text-field>
              </v-col>
            </v-row> -->

            <!-- <p class="topices">ประเภทการจัดหา</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-radio-group v-model="form.specific_info" row required>
                  <v-radio
                    label="จัดหาใหม่"
                    color="red"
                    value="first"
                  ></v-radio>
                  <v-radio
                    label="ทดแทนของเดิม"
                    color="red"
                    value="second"
                  ></v-radio>
                  <v-radio
                    label="เพื่อใช้ในการเพิ่มประสิทธิภาพ"
                    color="red"
                    value="third"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <br /> -->
            <p class="topices">
              กรณีไม่ตรงเกณฑ์ราคากลางฯ โปรดแนบใบเสนอราคา 3 ใบ
            </p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input label="แนบใบเสนอราคา 1"></v-file-input>
                <v-file-input label="แนบใบเสนอราคา 2"></v-file-input>
                <v-file-input label="แนบใบเสนอราคา 3"></v-file-input>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <br />
            <!-- <p class="topices">
              กรณี Software โปรดแนบแบบบัญชีราคากลางและแผนพัฒนา software
            </p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input label="แบบบัญชีราคากลาง"></v-file-input>
                <v-file-input label="แผนพัฒนาซอฟต์แวร์"></v-file-input>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <br /> -->
            <p class="topices">โปรดแนบผังเครือข่าย</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input label="ผังเครือข่าย"></v-file-input>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <br />

            <v-btn
              class="rounded-1"
              color="#056839"
              @click="submit"
              x-large
              block
            >
              <div class="white--text font-weight-bold">ส่งข้อมูล</div>
            </v-btn>
            <br />

            <v-btn
              class="rounded-1"
              color="error"
              x-large
              block
              @click.stop="warningdialog = true"
            >
              <div class="white--text font-weight-bold">ยกเลิก</div>
            </v-btn>
          </v-form>
          <br />
        </template>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center"> </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="warningdialog" max-width="300" max-height="300">
        <v-card>
          <v-card-title class="text-h5"> คำเตือน </v-card-title>
          <v-divider class="mb-3"></v-divider>
          <v-card-text
            >คำขอจัดซื้อครุภัณฑ์กำลังจะถูกยกเลิก ทำให้ข้อมูลไม่ถูกบันทึกในระบบ
            ท่านจะต้องกรอกใหม่อีกครั้ง</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="success"
              @click="warningdialog = false"
              class="font-weight-medium mt-3"
            >
              ยกเลิก
            </v-btn>
            <v-btn
              text
              color="error"
              to="/document"
              class="font-weight-medium mt-3"
            >
              ตกลง
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'middleware-user-auth',
  layout: 'user',
  name: 'lessthanfivem',
  async asyncData({ store }) {
    let budget_year = []
    let department = []
    try {
      department = await store.dispatch('api/getAllDepartments')
      budget_year = await store.dispatch('api/getBudgetYear')
    } catch (err) {
      console.log(err)
    }
    return { budget_year, department }
  },
  async fetch() {
    const user_uid = await this.$cookies.get('uid_token')
    const userInfo = await this.$store.dispatch('api/getUserInfo', {
      params: { uid: user_uid },
    })
    this.userDept = userInfo.department_id
  },
  data: () => ({
    warningdialog: false,
    budget: [
      { name: 'เงินงบประมาณ', value: 'normal_budget' },
      { name: 'เงินบำรุง', value: 'maintenance_budget' },
      { name: 'เงินบริจาค', value: 'donation_budget' },
      { name: 'เงินมูลนิธิ', value: 'foundation_budget' },
    ],

    valid: true,
    budget_year: [],
    department: [],
    userDept: [],
    form: {
      project_name: '',
      project_type: '',
      budget_year: '',
      department_name: '',
      // boss_name: '',
      // boss_position: '',
      // boss_tel: '',
      // boss_fax: '',
      // boss_email: '',
      // Proj1: '',
      // ProjPos1: '',
      // ProjT1: '',
      // ProjF1: '',
      // ProjE1: '',
      // user2_name: '',
      // user2_position: '',
      // user2_tel: '',
      // user2_fax: '',
      // user2_email: '',
      // user3_name: '',
      // user3_position: '',
      // user3_tel: '',
      // user3_fax: '',
      // user3_email: '',

      baht_text: '',
      budget_resource: null,
      // detail_notstd: '',
      // quantity: 0,
      // unit: null,
      // price_unit: 0,
      sum: '',

      // destination: '',
      // cert: '',
      // list_old: '',
      // locate_old: '',
      // year_old: '',
      // obstacle: '',
      // purpose_of_use: '',
      // compare: '',
      // major: '',
      // quantity_major: '',

      // items: [
      //   'งบประมาณประจำปี 2565',
      //   'เงินรายได้',
      //   'เงินบำรุง',
      //   'เปลี่ยนแปลงรายการ/เงินเหลือจ่าย',
      //   'เงินช่วยเหลือ/เงินนอกงบประมาณ',
      // ],
    },

    projnRules: [
      (v) => !!v || 'โปรดระบุชื่อโครงการ',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    budget_yearRules: [
      (v) => !!v || 'โปรดระบุปีงบประมาณ',
      (v) => /\d/.test(v) || 'โปรดระบุเป็นตัวเลขเท่านั้น',
      (v) => v.length <= 4 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    sumRules: [
      (v) => !!v || 'โปรดระบุยอดงบประมาณรวม',
      (v) => /\d/.test(v) || 'โปรดระบุเป็นตัวเลขเท่านั้น',
    ],

    // deptnRules: [
    //   (v) => !!v || 'โปรดระบุชื่อหน่วยงาน',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // bossnameRules: [
    //   (v) => !!v || 'โปรดระบุชื่อหัวหน้าส่วนราชการ',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // bossposRules: [
    //   (v) => !!v || 'โปรดระบุตำแหน่งหัวหน้าส่วนราชการ',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // bosstRules: [
    //   (v) => !!v || 'โปรดระบุเบอร์โทรศัพท์หัวหน้าส่วนราชการ',
    //   (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // bossfRules: [
    //   (v) => !!v || 'โปรดระบุเบอร์โทรศัพท์หัวหน้าส่วนราชการ',
    //   (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // bosseRules: [
    //   (v) => !!v || 'โปรดระบุอีเมลหัวหน้าส่วนราชการ',
    //   (v) => /.+@.+/.test(v) || 'อีเมลไม่ถูกต้องตามรูปแบบ',
    //   (v) => v.length <= 100 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // proj1Rules: [
    //   (v) => !!v || 'โปรดระบุชื่อผู้รับผิดชอบโครงการ',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // projpos1Rules: [
    //   (v) => !!v || 'โปรดระบุตำแหน่ง',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // projt1Rules: [
    //   (v) => !!v || 'โปรดระบุเบอร์โทรศัพท์ผู้รับผิดชอบโครงการ',
    //   (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // projf1Rules: [
    //   (v) => !!v || 'โปรดระบุเบอร์โทรสารผู้รับผิดชอบโครงการ',
    //   (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // proje1Rules: [
    //   (v) => !!v || 'โปรดระบุอีเมลผู้รับผิดชอบโครงการ',
    //   (v) => /.+@.+/.test(v) || 'อีเมลไม่ถูกต้องตามรูปแบบ',
    //   (v) => v.length <= 100 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // texttotalRules: [(v) => !!v || 'โปรดระบุจำนวนเงินแบบตัวอักษร'],

    // textareasRules: [
    //   (v) => !!v || 'โปรดระบุรายละเอียด',
    //   (v) => v.length <= 3000 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // quantRules: [
    //   (v) => !!v || 'โปรดระบุจำนวน',
    //   (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // priceRules: [(v) => !!v || 'โปรดระบุราคาต่อหน่วย'],

    // destiRules: [
    //   (v) => !!v || 'โปรดระบุสถานที่ตั้งอุปกรณ์',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // recomRules: [
    //   (v) => !!v || 'โปรดใส่เครื่องหมาย - กรณีไม่ระบุ',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // listRules: [
    //   (v) => !!v || 'โปรดใส่เครื่องหมาย - กรณีไม่ระบุ',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // locaoldRules: [
    //   (v) => !!v || 'โปรดใส่เครื่องหมาย - กรณีไม่ระบุ',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // insyearRules: [
    //   (v) => !!v || 'โปรดใส่เครื่องหมาย - กรณีไม่ระบุ',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // obstRules: [
    //   (v) => !!v || 'โปรดระบุปัญหาอุปสรรค เหตุความจำเป็น',
    //   (v) => v.length <= 700 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // pouseRules: [
    //   (v) => !!v || 'โปรดระบุลักษณะงานหรือระบบที่จะใช้กับอุปกรณ์นี้',
    //   (v) => v.length <= 700 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // compareRules: [
    //   (v) => !!v || 'โปรดระบุการเปรียบเทียบ',
    //   (v) => v.length <= 700 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // majRules: [
    //   (v) => !!v || 'โปรดระบุด้าน/สาขา',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],

    // qmajRules: [
    //   (v) => !!v || 'โปรดระบุจำนวน',
    //   (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    // ],
  }),
  methods: {
    submit() {
      this.saveAct()
      // this.$refs.form.validate()
      // console.log(this.$refs.form.validate())
      // if (this.$refs.form.validate() == true) {
      //   this.testfunc()
      // }
    },
    // Create New product
    testfunc() {
      const mutiplied = this.Quant * this.Price
      if (mutiplied > 5000000) {
        alert('ราคารวมเกินห้าล้านบาท โปรดเลือกแบบฟอร์มชนิดอื่น')
      } else {
        this.saveAct()
      }
    },
    async saveAct() {
      try {
        // const user_id = await this.$cookies.get('uid_token')
        const user_id = this.$store.getters.uid
        for (let index = 0; index < this.department.length; index++) {
          if (this.userDept === this.department[index]._id) {
            this.form.department_name = this.department[index].department_name
          }
        }
        await this.$store.dispatch('api/lessThanCreatDoc', {
          uid: user_id,
          project_name: this.form.project_name,
          project_type: 'network',
          document_type: 'less',
          budget_year: this.form.budget_year,
          department_name: this.form.department_name,
          budget_resource: this.form.budget_resource,
          detail_notstd: this.form.detail_notstd,
          quantity: this.form.quantity,
          unit: this.form.unit,
          price_unit: this.form.price_unit,
          sum: this.form.sum,
          method: this.form.method,
          destination: this.form.destination,
          cert: this.form.cert,
          list_old: this.form.list_old,
          locate_old: this.form.locate_old,
          year_old: this.form.year_old,
          obstacle: this.form.obstacle,
          purpose_of_use: this.form.purpose_of_use,
          compare: this.form.compare,
          major: this.form.major,
          quantity_major: this.form.quantity_major,
          specific_info: this.form.specific_info,
        })

        alert('Add Completed')
      } catch (err) {
        console.log(err)
        alert('Add Fail')
      }
    },
  },
  computed: {
    sumresult() {
      const mutiplied = this.form.quantity * this.form.price_unit
      if (mutiplied > 5000000) {
        alert('ราคารวมเกินห้าล้านบาท โปรดเลือกแบบฟอร์มชนิดอื่น')
        const deny = 'ไม่สามารถใช้ฟอร์มนี้ได้'
        return deny
      } else {
        // this.sum = parseInt(mutiplied)
        this.form.sum = mutiplied
        return mutiplied
      }
    },

    // numtotext() {
    //   bahttext(20520)
    // },
  },
}
</script>
<style>
.radiobtn {
  justify-content: center;
}
h3 span {
  color: red;
  font-weight: bold;
  font-size: 20px;
}

.smalltop {
  font-size: 21px;
  font-weight: bold;
}
.subtop {
  font-size: 23px;
  font-weight: bold;
}
.topices {
  font-size: 25px;
  font-weight: bold;
}
.card-ti {
  justify-content: center;
}
</style>
