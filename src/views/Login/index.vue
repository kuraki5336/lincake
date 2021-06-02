<template>
  <div>Login</div>
  {{getname}}
</template>

<script>
export default {
  data: () => ({
    count: 0  
  }),
  methods: {
    inc() {
      this.count++;
    }
  },
  computed:{
    getname(){
      console.log(this.$store);
      return this.$store.state.name
    }
  }
};
</script>

<style></style>
