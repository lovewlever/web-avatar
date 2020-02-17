<template>
  <div>
    <Navigation/>
    <div style="margin-top: 60px;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import Navigation from "../components/Navigation";

  export default {
    name: "Home",
    components:{
      Navigation
    },
    created:function () {
      this.$router.push("/emoticon")
    }
  }
</script>
