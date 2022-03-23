<template>
  <v-container fluid>
    <v-row align="center" dense>
      <v-col cols="12" sm="4" md="6">
        <v-card class="mx-auto" max-width="auto" height="470">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                สรุปโครงการ
              </v-list-item-title>
              <v-list-item-subtitle
                >ประจำปีงบประมาณ {{ getCurrentGovYear() }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-avatar tile size="90" color="info"
              ><v-icon color="#ffff" size="50"
                >mdi-file-document-multiple</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>
          <v-card-text>
            <v-row align="center">
              <v-col class="text-h4" cols="6">{{ allProject }}</v-col>
              <v-col class="text-h4 text-right" cols="6">โครงการ</v-col>
            </v-row>
          </v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-desktop-classic</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ฮาร์ดแวร์</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >{{ hardware.count }}&nbsp; &nbsp; &nbsp;
                &nbsp;โครงการ</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-application-parentheses</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ซอฟต์แวร์</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >{{ software.count }}&nbsp; &nbsp; &nbsp;
                &nbsp;โครงการ</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-access-point-network</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ระบบเครือข่าย</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >{{ network.count }}&nbsp; &nbsp; &nbsp;
                &nbsp;โครงการ</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-webcam</v-icon>
              </v-list-item-icon>
              <v-list-item-title>กล้องวงจรปิด</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >{{ cam.count }}&nbsp; &nbsp; &nbsp;
                &nbsp;โครงการ</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="6">
        <v-card class="mx-auto" max-width="auto" height="470">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                สรุปงบประมาณ
              </v-list-item-title>
              <v-list-item-subtitle
                >ประจำปีงบประมาณ {{ getCurrentGovYear() }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-avatar tile size="90" color="success"
              ><v-icon color="#ffff" size="50"
                >mdi-cash-multiple</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>
          <v-card-text>
            <v-row align="center">
              <v-col class="text-h4" cols="6"> {{ allBudget }} </v-col>
              <v-col class="text-h4 text-right" cols="6">บาท</v-col>
            </v-row>
          </v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-checkbox-blank-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>เงินงบประมาณ</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >{{ normalBudget.sum }}&nbsp; &nbsp; &nbsp;
                &nbsp;บาท</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-checkbox-blank-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>เงินบำรุง</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >{{ maintenanceBudget.sum }}&nbsp; &nbsp; &nbsp;
                &nbsp;บาท</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-checkbox-blank-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>เงินบริจาค</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >{{ donationBudget.sum }}&nbsp; &nbsp; &nbsp;
                &nbsp;บาท</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-checkbox-blank-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>เงินมูลนิธิ</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >{{ foundationBudget.sum }}&nbsp; &nbsp; &nbsp;
                &nbsp;บาท</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <!-- <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                จำนวนโครงการทั้งสิ้น
              </div>
              <v-list-item-title class="text-h3 mb-3"> 15 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold"
                >โครงการที่ส่งเข้าระบบประจำเดือน</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="info"
              ><v-icon color="#ffff" size="50"
                >mdi-file-document-multiple</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                โครงการได้รับการอนุมัติทั้งสิ้น
              </div>
              <v-list-item-title class="text-h3 mb-3"> 5 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold"
                >ส่งคืนไปยังหน่วยงานแล้ว</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="success"
              ><v-icon color="#ffff" size="50">mdi-check-underline</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                รอเข้าที่ประชุมพิจารณา
              </div>
              <v-list-item-title class="text-h3 mb-3"> 1 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold">
                โครงการรอการพิจารณา</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="warning"
              ><v-icon color="#ffff" size="50">mdi-clock-edit-outline</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row> -->
    <!-- <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                กรมการแพทย์ลงนาม
              </div>
              <v-list-item-title class="text-h3 mb-3"> 7 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold">
                รอการลงนามโดยกรมการแพทย์</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="success"
              ><v-icon color="#ffff" size="50">mdi-account-edit</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                กระทรวงสาธารณสุขลงนาม
              </div>
              <v-list-item-title class="text-h3 mb-3"> 2 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold">
                รอกระทรวงสาธารณสุข ลงนาม</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="#156623"
              ><v-icon color="#ffff" size="50">mdi-draw-pen</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                มีข้อแก้ไข
              </div>
              <v-list-item-title class="text-h3 mb-3"> 0 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold"
                >ที่ประชุมมีความเห็นแก้ไขเพิ่มเติม</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="error"
              ><v-icon color="#ffff" size="50"
                >mdi-alert</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>
        </v-card>
      </v-col>
    </v-row> -->

    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="font-weight-bold">
            รายการโครงการทั้งหมด
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="allDoc"
            sort-by="created_date"
            :search="search"
            :items-per-page="5"
          >
            <template v-slot:[`item.date`]="{ item }">
              <span>{{ new Date(item.date).toLocaleString() }}</span>
            </template></v-data-table
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" md="6">
        <v-card elevation="2" height="350">
          <v-card-title class="font-weight-bold">
            ดาวน์โหลดแบบรายงานฯ และเอกสารที่เกี่ยวข้อง
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item-title class="ml-7"
                ><v-icon x-small class="mr-3">mdi-checkbox-blank-circle</v-icon>
                <a href="/" class="text-decoration-underline"
                  >แบบรายงานการจัดหาระบบคอมพิวเตอร์ภาครัฐที่มีมูลค่าไม่เกิน 5
                  ล้านบาท</a
                >
              </v-list-item-title>
            </v-list>
            <v-list>
              <v-list-item-title class="ml-7">
                <v-icon x-small class="mr-3">mdi-checkbox-blank-circle</v-icon>
                <a href="/" class="text-decoration-underline"
                  >แบบรายงานการจัดหาระบบคอมพิวเตอร์ภาครัฐที่มีมูลค่าเกิน 5
                  ล้านบาท</a
                >
              </v-list-item-title>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="6">
        <v-card elevation="2" height="350">
          <v-card-title class="font-weight-bold">
            ติดต่อสำนักดิจิทัลการแพทย์
          </v-card-title>
          <v-card-text>
            <p class="subtitle-1 font-weight-bold">
              กรมการแพทย์ กระทรวงสาธารณสุข 88/23 ถ.ติวานนท์ ต.ตลาดขวัญ อ.เมือง
              จ.นนทบุรี 11000 อาคาร 3 ชั้น5 ถนนติวานนท์ ต.ตลาดขวัญ อ.เมือง
              จ.นนทบุรี 11000
            </p>
            <p class="subtitle-1 font-weight-bold">โทร. 02-5258566</p>
            <p class="subtitle-1 font-weight-bold">แฟกซ์. 02-5258566</p>
            <p class="subtitle-1 font-weight-bold">อีเมล. dms@moph.go.th</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: 'login',
  //  async fetch() {
  //   this.hardware = await this.$store.dispatch('api/getPublicHardware')
  // },
  async asyncData({ store }) {
    let hardware = []
    let software = []
    let network = []
    let cam = []
    let normalBudget = []
    let maintenanceBudget = []
    let donationBudget = []
    let foundationBudget = []
    let allProject = ''
    let allBudget = ''
    let allDoc = []
    try {
      hardware = await store.dispatch('api/getPublicHardware')
      software = await store.dispatch('api/getPublicSoftware')
      network = await store.dispatch('api/getPublicNetwork')
      cam = await store.dispatch('api/getPublicCam')

      normalBudget = await store.dispatch('api/getPublicNormalBudget')
      maintenanceBudget = await store.dispatch('api/getPublicMaintenanceBudget')
      donationBudget = await store.dispatch('api/getPublicDonationBudget')
      foundationBudget = await store.dispatch('api/getPublicFoundationBudget')

      allDoc = await store.dispatch('api/getPublicDoc')
      allProject = hardware.count + software.count + network.count + cam.count
      allBudget =
        normalBudget.sum +
        maintenanceBudget.sum +
        donationBudget.sum +
        foundationBudget.sum
    } catch (err) {
      console.log(err)
    }
    return {
      hardware,
      software,
      network,
      cam,
      normalBudget,
      maintenanceBudget,
      donationBudget,
      foundationBudget,
      allProject,
      allBudget,
      allDoc,
    }
  },
  data() {
    return {
      hardware: [],
      software: [],
      network: [],
      cam: [],
      normalBudget: [],
      maintenanceBudget: [],
      donationBudget: [],
      foundationBudget: [],
      allBudget: '',
      allProject: '',
      allDoc: [],
      dashBoardRoute: {
        waiting: 'doc-list/waitingList',
        dms: 'doc-list/dmsList',
        moph: 'doc-list/mophList',
        approved: 'doc-list/approvedList',
        rejected: 'doc-list/rejectedList',
      },
      search: '',
      headers: [
        {
          text: 'ชื่อโครงการ',
          value: 'name',
          align: 'start',
          sortable: false,
        },

        { text: 'วันที่ยื่นคำร้อง', value: 'date' },
        { text: 'สถานะ', value: 'status' },
      ],
    }
  },
  methods: {
    getCurrentGovYear() {
      let date = new Date()
      const currentYear = date.getFullYear()
      const currentThaiYear = currentYear + 543
      const currentMonth = date.getMonth() + 1
      //   console.log("currentThaiYear ", currentThaiYear);
      //   console.log("currentMonth ", currentMonth);
      let govYear = ''
      if (currentMonth < 10) {
        return currentThaiYear
      } else {
        return currentThaiYear + 1
      }
    },
  },
}
</script>
