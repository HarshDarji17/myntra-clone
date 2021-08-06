<template>
  <div>
    <div class="ref d-flex justify-center pt-5 mt-2 pl-3">
      <div>
        <div id="clockdiv">
          <div>
            <small class="smalltext">Sales end</small>
            <span class="hours"></span>
            <small class="smalltext">H</small>:
          </div>
          <div>
            <span class="minutes"></span>
            <small class="smalltext">M</small>
          </div>
          <div>
            <span class="seconds"></span>
            <small class="smalltext">S</small>
          </div>
        </div>
      </div>
      <v-img src="/rupee.png" max-height="40" max-width="60"></v-img>
      <p class="rup pl-2">
        Invite friends to EORS & get up to ₹150 <br />
        MynCash for every person who visits
      </p>
      <v-btn class="ma-2" small outlined color="#ff3f6c">Invite Now ></v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      par: '',
    }
  },
  mounted() {
    this.par = this.$route.path
    this.timer()
  },

  methods: {
    timer() {
      function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date())
        const seconds = Math.floor((total / 1000) % 60)
        const minutes = Math.floor((total / 1000 / 60) % 60)
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
        const days = Math.floor(total / (1000 * 60 * 60 * 24))

        return {
          total,
          days,
          hours,
          minutes,
          seconds,
        }
      }

      function initializeClock(id, endtime) {
        const clock = document.getElementById(id)
        const hoursSpan = clock.querySelector('.hours')
        const minutesSpan = clock.querySelector('.minutes')
        const secondsSpan = clock.querySelector('.seconds')

        function updateClock() {
          const t = getTimeRemaining(endtime)

          hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

          if (t.total <= 0) {
            clearInterval(timeinterval)
          }
        }

        updateClock()
        const timeinterval = setInterval(updateClock, 1000)
      }

      const deadline = new Date(
        Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000
      )
      initializeClock('clockdiv', deadline)
    },
  },
}
</script>
<style scoped>
.ref {
  background-image: linear-gradient(90deg, #f9f9ff, #dee8ff);
  height: 70px;
}
.rup {
  font-size: 13px;
  font-weight: bold;
}
#clockdiv {
  font-family: sans-serif;
  display: flex;
  text-align: center;
  color: #535766;
  font-size: 22px;
}

.smalltext {
  -webkit-text-size-adjust: 100%;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: 56px;
  text-align: left;
  box-sizing: inherit;
  color: #535766;
  font-size: 13px;
  padding-right: 2px;
}
.hours,
.minutes,
.seconds {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  line-height: 56px;
  text-align: left;
  box-sizing: inherit;
  color: #ff3f6c;
  font-size: 20px;
  font-family: helvetica, arial, sans-serif;
  font-weight: 100;
  padding: 2px;
}
</style>
