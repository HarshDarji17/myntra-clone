<template>
  <div>
    <div class="connect-bg">
      <div class="career-intro">
        <div class="container">
          <div class="career-intro__boxwrap">
            <div class="career-intro__box">
              <div>
                <img
                  src="https://careers.myntra.com/wp-content/uploads/2019/12/career-logo3.png"
                  alt
                  class="active"
                />
                <img
                  src="https://careers.myntra.com/wp-content/uploads/2021/01/MYNTRA_LOGOUNITS-AWARDS-01.jpg"
                  clsss="inline"
                />
              </div>
            </div>

            <div class="career-intro__box">
              <div>
                <img
                  src="https://careers.myntra.com/wp-content/uploads/2021/01/MYNTRA_LOGOUNITS-AWARDS-01.jpg"
                />
              </div>
            </div>

            <div class="career-intro__box">
              <div>
                <img
                  src="https://careers.myntra.com/wp-content/uploads/2019/12/career-logo5.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  max-width: 1200px;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}
.career-intro {
  margin-top: 150px;
}
.career-intro {
  position: relative;
  background: #fff;
  text-align: center;
  z-index: 1;
}
.career-intro__boxwrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.career-intro__box:first-of-type {
  margin-left: 0;
  -webkit-transform: rotate(-4deg);
  -ms-transform: rotate(-4deg);
  transform: rotate(-4deg);
}
.career-intro__box {
  width: 220px;
  height: 220px;
  -webkit-border-radius: 46px;
  border-radius: 46px;
  -webkit-box-shadow: 0 0 16px 4px rgb(0 0 0 / 5%);
  box-shadow: 0 0 16px 4px rgb(0 0 0 / 5%);
  display: inline-block;
  padding: 10px;
  margin: -350px 25px 0;
  background: #fff;
  position: relative;
  top: 30px;
}
.career-intro__box img {
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  max-width: calc(100% - 40px);
  max-height: calc(100% - 40px);
  position: absolute;
}
.career-intro__box > div img.active {
  display: block;
}
.career-intro__box:first-of-type > div {
  -webkit-transform: rotate(4deg);
  -ms-transform: rotate(4deg);
  transform: rotate(4deg);
}

.career-intro__box > div {
  height: 200px;
  width: 200px;
  padding: 15px;
  background-image: url(https://life.myntra.com/wp-content/themes/myntra_life/assets/img/career/logo-sub-bg.svg);
  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%;
  background-size: 100%;
  -webkit-border-radius: 46px;
  border-radius: 46px;
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}
.career-intro__box > div img,
.career-intro__boxwrap > img {
  display: inline;
  opacity: 0.806454;
}
.career-intro__box img {
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
  max-width: calc(100% - 40px);
  max-height: calc(100% - 40px);
  position: absolute;
}
fieldset,
img {
  border: 0;
}
img {
  vertical-align: middle;
}
</style>