<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../assets/logo.png')"
          class="my-3"
          contain
          height="150"
        />
      </v-col>

      <v-col class="mb-4">
        <p class="topices">
          แบบฟอร์มรายงานการจัดหาระบบคอมพิวเตอร์ภาครัฐ<br />ที่มีมูลค่าเกิน 5
          ล้านบาท
        </p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="8">
        <template>
          <v-form ref="form" v-model="valid" lazy-validation>
            <p class="topices">ก. ข้อมูลทั่วไป</p>
            <p class="topices">1. ชื่อโครงการ</p>

            <v-text-field
              v-model="ProjN"
              :rules="projnRules"
              :counter="255"
              label="ชื่อโครงการ (ระบุทั้งภาษาไทยและภาษาอังกฤษ)"
              required
            ></v-text-field>
            <br />
            <p class="topices">2. ส่วนราชการ / รัฐวิสาหกิจ</p>
            <p class="subtop">2.1 ชื่อส่วนราชการ</p>
            <v-text-field
              v-model="DeptN"
              :rules="deptnRules"
              :counter="255"
              label="ชื่อส่วนราชการ"
              required
            ></v-text-field>
            <br />
            <p class="subtop">2.2 หัวหน้าส่วนราชการ</p>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="BossName"
                  :rules="bossnameRules"
                  :counter="255"
                  label="ชื่อ สกุล"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="BossPos"
                  :rules="bossposRules"
                  :counter="255"
                  label="ตำแหน่ง"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="BossT"
                  :rules="bosstRules"
                  :counter="10"
                  label="โทรศัพท์"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="BossF"
                  :rules="bossfRules"
                  :counter="10"
                  label="โทรสาร"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="BossE"
                  :rules="bosseRules"
                  :counter="100"
                  label="อีเมล"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <br />
            <p class="subtop">2.3 ผู้รับผิดชอบโครงการ</p>

            <p class="smalltop">ผู้รับผิดชอบโครงการลำดับที่ 1</p>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="Proj1"
                  :rules="proj1Rules"
                  :counter="255"
                  label="ชื่อ สกุล"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="ProjPos1"
                  :rules="projpos1Rules"
                  :counter="255"
                  label="ตำแหน่ง"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="ProjT1"
                  :rules="projt1Rules"
                  :counter="10"
                  label="โทรศัพท์"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="ProjF1"
                  :rules="projf1Rules"
                  :counter="10"
                  label="โทรสาร"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="ProjE1"
                  :rules="proje1Rules"
                  :counter="100"
                  label="อีเมล"
                  required
                >
                </v-text-field>
              </v-col>
            </v-row>
            <br />
            <p class="topices">3. งบประมาณ</p>
            <p class="subtop">3.1 งบประมาณรวมทั้งสิ้น</p>
            <v-row>
              <v-col cols="12" md="6">
                <div>
                  <h3>
                    ตัวเลข &nbsp; &nbsp; {{ sumresult }} &nbsp; &nbsp; บาท
                  </h3>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="Texttotal"
                  :rules="texttotalRules"
                  dense
                  label="ตัวอักษร"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <p class="subtop">3.2 แหล่งเงิน</p>
            <v-row>
              <v-col cols="12" md="4">
                <v-select
                  v-model="select"
                  :items="items"
                  :rules="[(v) => !!v || 'โปรดระบุแหล่งเงิน']"
                  label="โปรดระบุแหล่งเงิน"
                  required
                >
                </v-select>
              </v-col>
            </v-row>
            <br />
            <p class="topices">4. รายละเอียดของอุปกรณ์</p>

            <p class="subtop">
              รายละเอียดที่ไม่ตรงกับมาตรฐานกลาง พร้อมระบุเหตุผล ความจำเป็น
            </p>
            <v-textarea
              v-model="Textareas"
              label="กรอกรายละเอียด"
              required
              :counter="3000"
              :rules="textareasRules"
            ></v-textarea>
            <br />
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="Quant"
                  :rules="quantRules"
                  :counter="10"
                  label="จำนวน"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="selectUnit"
                  :items="iunit"
                  :rules="[(v) => !!v || 'โปรดระบุหน่วยการนับ']"
                  label="โปรดเลือกหน่วยการนับ"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="Price"
                  :rules="priceRules"
                  label="ราคาต่อหน่วย"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <br />
            <v-row>
              <v-col cols="12">
                <div>
                  <h3>
                    ราคารวม &nbsp; &nbsp; <span>{{ sumresult }}</span> &nbsp;
                    &nbsp; บาท
                  </h3>
                </div>
              </v-col>
            </v-row>
            <br />
            <p class="topices">5. วิธีการจัดหา</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-radio-group
                  v-model="Findmethod"
                  row
                  required
                  @blur="$v.Findmethod.$touch()"
                >
                  <v-radio label="จัดซื้อ" color="red" value="first"></v-radio>
                  <v-radio label="จัดจ้าง" color="red" value="second"></v-radio>
                  <v-radio label="การเช่า" color="red" value="third"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <br />
            <p class="topices">6. สถานที่ติดตั้งอุปกรณ์</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="Desti"
                  :rules="destiRules"
                  :counter="255"
                  label="ชื่อสถานที่/หน่วยงานติดตั้ง"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="Recom"
                  :rules="recomRules"
                  :counter="255"
                  label="คำรับรองการปฏิบัติราชการกรมการแพทย์ (ใส่ - กรณีไม่ระบุ)"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <br />
            <p class="topices">
              7. ระบบหรืออุปกรณ์คอมพิวเตอร์ทั้งหมดที่มีอยู่เดิม
            </p>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="List"
                  :rules="listRules"
                  :counter="255"
                  label="รายการ"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="Locaold"
                  :rules="locaoldRules"
                  :counter="255"
                  label="สถานที่ติดตั้ง"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="Insyear"
                  :rules="insyearRules"
                  :counter="255"
                  label="ติดตั้งใช้งานเมื่อปี พ.ศ."
                  required
                >
                </v-text-field>
              </v-col>
            </v-row>
            <br />
            <p class="topices">
              8.
              ปัญหาอุปสรรคในการปฏิบัติงาน/เหตุผลความจำเป็นที่ต้องจัดหาอุปกรณ์ในครั้งนี้
            </p>
            <v-textarea
              v-model="Obst"
              label="กรอกปัญหาอุปสรรค/เหตุผลความจำเป็น"
              required
              :counter="700"
              :rules="obstRules"
            ></v-textarea>
            <br />
            <p class="topices">
              9. ลักษณะงานหรือระบบงานที่จะใช้กับอุปกรณ์ที่จัดหาครั้งนี้
            </p>
            <v-textarea
              v-model="Pouse"
              label="กรอกลักษณะ/ระบบงานที่จะใช้กับอุปกรณ์ที่จัดหา"
              required
              :counter="700"
              :rules="pouseRules"
            ></v-textarea>
            <br />
            <p class="topices">
              10. เปรียบเทียบอุปกรณ์ที่จัดหาครั้งนี้กับปริมาณงาน
            </p>
            <v-textarea
              v-model="Compare"
              label="เปรียบเทียบอุปกรณ์ที่จัดหากับปริมาณงาน"
              required
              :counter="700"
              :rules="compareRules"
            ></v-textarea>
            <br />
            <p class="topices">
              11. บุคลากรด้านคอมพิวเตอร์
              หรือบุคลากรที่ได้รับมอบหมายให้รับผิดชอบด้าน IT ที่มีอยู่ในปัจจุบัน
            </p>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="Maj"
                  :rules="majRules"
                  :counter="255"
                  label="ด้าน/สาขา"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="Qmaj"
                  :rules="qmajRules"
                  :counter="255"
                  label="จำนวน (คน)"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <p class="topices">ข. ข้อมูลเฉพาะกรณี</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-radio-group v-model="Spi" row required>
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
          </v-form>
          <br />
        </template>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { bahttext } from 'bahttext'

import axios from 'axios'

export default {
  //   },
  name: 'lessthanfivem',
  middleware: 'middleware-auth',
  name: 'Lessthanfivem',

  data: () => ({
    valid: true,
    ProjN: '',
    projnRules: [
      (v) => !!v || 'โปรดระบุชื่อโครงการ',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    DeptN: '',
    deptnRules: [
      (v) => !!v || 'โปรดระบุชื่อหน่วยงาน',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    BossName: '',
    bossnameRules: [
      (v) => !!v || 'โปรดระบุชื่อหัวหน้าส่วนราชการ',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    BossPos: '',
    bossposRules: [
      (v) => !!v || 'โปรดระบุตำแหน่งหัวหน้าส่วนราชการ',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    BossT: '',
    bosstRules: [
      (v) => !!v || 'โปรดระบุเบอร์โทรศัพท์หัวหน้าส่วนราชการ',
      (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    BossF: '',
    bossfRules: [
      (v) => !!v || 'โปรดระบุเบอร์โทรศัพท์หัวหน้าส่วนราชการ',
      (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    BossE: '',
    bosseRules: [
      (v) => !!v || 'โปรดระบุอีเมลหัวหน้าส่วนราชการ',
      (v) => /.+@.+/.test(v) || 'อีเมลไม่ถูกต้องตามรูปแบบ',
      (v) => v.length <= 100 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Proj1: '',
    proj1Rules: [
      (v) => !!v || 'โปรดระบุชื่อผู้รับผิดชอบโครงการ',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    ProjPos1: '',
    projpos1Rules: [
      (v) => !!v || 'โปรดระบุตำแหน่ง',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    ProjT1: '',
    projt1Rules: [
      (v) => !!v || 'โปรดระบุเบอร์โทรศัพท์ผู้รับผิดชอบโครงการ',
      (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    ProjF1: '',
    projf1Rules: [
      (v) => !!v || 'โปรดระบุเบอร์โทรสารผู้รับผิดชอบโครงการ',
      (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    ProjE1: '',
    proje1Rules: [
      (v) => !!v || 'โปรดระบุอีเมลผู้รับผิดชอบโครงการ',
      (v) => /.+@.+/.test(v) || 'อีเมลไม่ถูกต้องตามรูปแบบ',
      (v) => v.length <= 100 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Texttotal: '',
    texttotalRules: [(v) => !!v || 'โปรดระบุจำนวนเงินแบบตัวอักษร'],
    select: null,
    Textareas: '',
    textareasRules: [
      (v) => !!v || 'โปรดระบุรายละเอียด',
      (v) => v.length <= 3000 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Quant: 0,
    quantRules: [
      (v) => !!v || 'โปรดระบุจำนวน',
      (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    selectUnit: null,
    Price: 0,
    priceRules: [(v) => !!v || 'โปรดระบุราคาต่อหน่วย'],
    Multiply: '',
    Findmethod: '',
    Desti: '',
    destiRules: [
      (v) => !!v || 'โปรดระบุสถานที่ตั้งอุปกรณ์',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Recom: '',
    recomRules: [
      (v) => !!v || 'โปรดใส่เครื่องหมาย - กรณีไม่ระบุ',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    List: '',
    listRules: [
      (v) => !!v || 'โปรดใส่เครื่องหมาย - กรณีไม่ระบุ',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Locaold: '',
    locaoldRules: [
      (v) => !!v || 'โปรดใส่เครื่องหมาย - กรณีไม่ระบุ',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Insyear: '',
    insyearRules: [
      (v) => !!v || 'โปรดใส่เครื่องหมาย - กรณีไม่ระบุ',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Obst: '',
    obstRules: [
      (v) => !!v || 'โปรดระบุปัญหาอุปสรรค เหตุความจำเป็น',
      (v) => v.length <= 700 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Pouse: '',
    pouseRules: [
      (v) => !!v || 'โปรดระบุลักษณะงานหรือระบบที่จะใช้กับอุปกรณ์นี้',
      (v) => v.length <= 700 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Compare: '',
    compareRules: [
      (v) => !!v || 'โปรดระบุการเปรียบเทียบ',
      (v) => v.length <= 700 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Maj: '',
    majRules: [
      (v) => !!v || 'โปรดระบุด้าน/สาขา',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Qmaj: '',
    qmajRules: [
      (v) => !!v || 'โปรดระบุจำนวน',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    Spi: '',
    name: '',
    iunit: ['ระบบ', 'เครื่อง'],
    items: [
      'งบประมาณกรมการแพทย์ประจำปี',
      'เงินเหลือจ่ายประจำปีงบประมาณ 2565',
      'เงินบำรุง',
      'เงินนอกงบประมาณ',
      'คำของบประมาณประจำปี พ.ศ. 2565 (คำขอขาขึ้น)',
    ],
  }),
  methods: {
    submit() {
      this.$refs.form.validate()
      console.log(this.$refs.form.validate())
      if (this.$refs.form.validate() == true) {
        this.testfunc()
      }
    },
    // Create New product
    testfunc() {
      const mutiplied = this.Quant * this.Price
      if (mutiplied < 5000000) {
        alert('ราคารวมน้อยกว่าห้าล้านบาท โปรดเลือกแบบฟอร์มชนิดอื่น')
      } else {
        alert('Send data')
      }
    },
    async saveAct() {
      try {
        await axios.post('http://localhost:5000/activity', {
          dept: this.select,
          topic: this.Topic,
          target: this.selecttarget,
          start_date: this.sdate,
          end_date: this.edate,
          detail: this.Detail,
          file_name: this.files,
        })
        this.ProjN = ''
        this.DeptN = ''
        this.BossName = ''
        this.BossPos = ''
        this.BossT = ''
        this.BossF = ''
        this.BossE = ''
        this.Proj1 = ''
        this.ProjPos1 = ''
        this.ProjT1 = ''
        this.ProjF1 = ''
        this.ProjE1 = ''
        this.Texttotal = ''
        this.select = ''
        this.Textareas = ''
        this.Quant = ''
        this.selectUnit = ''
        this.Price = ''
        this.Multiply = ''
        this.Findmethod = ''
        this.Desti = ''
        this.Recom = ''
        this.List = ''
        this.Locaold = ''
        this.Insyear = ''
        this.Obst = ''
        this.Pouse = ''
        this.Compare = ''
        this.Maj = ''
        this.Qmaj = ''
        this.Spi = ''

        this.$router.push('/completedHw')
      } catch (err) {
        console.log(err)
      }
      alert('Add Completed')
    },
  },
  computed: {
    sumresult() {
      const mutiplied = this.Quant * this.Price
      if (mutiplied < 5000000) {
        const deny = 'จะแสดงเมื่อผลรวมข้อ 4 มากกว่า 5 ล้าน'
        return deny
      } else {
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
