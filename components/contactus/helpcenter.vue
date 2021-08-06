<template>
  <v-container>
    <div class="set">
      <v-row>
        <!-- help center -->
        <v-col class="ml-10">
          <h3>HELP CENTER</h3>
          <p class="caption">We are here to help you</p>
        </v-col>

        <!-- orders related -->

        <v-col>
          <v-card>
            <v-form class="form">
              <v-icon large class="ml-3"> mdi-briefcase </v-icon>
              <div>
                <h5 class="ml-3 mt-2 body-2">TRACK,CANCEL,RETURN/EXCHANGE</h5>
                <p class="caption ml-3">Manage Your Purchases</p>
              </div>
              <v-btn class="order" outlined color="green"> order </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="mt-7"></v-divider>

      <v-row> </v-row>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
.form {
  display: flex;
  flex-direction: row;
  border: 1px solid grey;
  padding: 2px;
  height: 65px;
}
.input {
  flex-grow: 2;
  border: none;
}
input:focus {
  outline: none;
}
.order {
  margin-top: 9px;
  margin-left: 190px;
}
.set {
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 50px;
}
</style>