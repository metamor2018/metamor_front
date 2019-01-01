<template>
  <div id="creator-regi">
    <h1>創作者新規作成</h1>
    <creator-form></creator-form>
  </div>
</template>

<script>
import CreatorForm from '@/components/creator/CreatorForm';

export default {
  components: { CreatorForm },
};
</script>

<style lang="scss" scoped>
#creator-regi{
  width: 1000px;
  margin: 20px auto;
}
</style>
