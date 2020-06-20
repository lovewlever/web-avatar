<template>
    <div class="f-six">
        <!--<img style="margin: auto" src="../assets/welcome_loading.gif" alt="loading...">-->
        <div class="progress" style="margin: auto;width: 50%">
            <div class="progress-bar" role="progressbar" :style="{width: progress + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                {{progress}}%</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Welcome",
        data () {
            return {
                progress: 0,
                timer:null
            }
        },
        created() {
            this. timer = setInterval(this.countDownTimer,100)
        },
        methods: {
            countDownTimer: function() {
                this.progress += 5
                if (this.progress >= 100) {
                    clearInterval(this.timer)
                }
            }
        }
    }
</script>

<style scoped>
    .f-six {
        height: 100%;
        width: 100%;
        display: flex;
        position: absolute;
    }
</style>
