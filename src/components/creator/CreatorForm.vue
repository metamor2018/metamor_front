<template>
  <div id="creator-form">
    <b-form @submit="onSubmit">
      <b-form-group horizontal
                    :label-cols="2"
                    id="display_id_group"
                    label="創作者ID"
                    label-for="display_id"
                    :invalid-feedback="invalidDisplayID"
                    :valid-feedback="validDisplayID"
                    :state="displayIdState">
        <b-form-input id="display_id" :state="displayIdState" v-model.trim="form.display_id"></b-form-input>
      </b-form-group>
      <b-form-group horizontal
                    :label-cols="2"
                    id="name_group"
                    label="創作者名"
                    label-for="name"
                    :invalid-feedback="invalidName"
                    :valid-feedback="validName"
                    :state="nameState">
        <b-form-input id="name" :state="nameState" v-model.trim="form.name"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="submit-btn">作成</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        display_id: '',
        name: '',
      },
    }
  },
  computed: {
    // バリデーションチェック
    // 創作者ID
    displayIdState () {
      return this.form.display_id.length >= 4 ? true : false
    },
    invalidDisplayID () {
      if (this.form.display_id.length > 4) {
        return ''
      } else if (this.form.display_id.length > 0) {
        return '４文字以上で入力してください'
      } else {
        return 'IDを入力してください'
      }
    },
    validDisplayID () {
      return this.state === true ? 'このIDは使用できます' : ''
    },
    // 創作者名
    nameState () {
      return this.form.name.length >= 1 ? true : false
    },
    invalidName () {
      if (this.form.name.length > 1) {
        return ''
      } else {
        return '名前を入力してください'
      }
    },
    validName () {
      return this.state === true ? 'ok' : ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  }
}
</script>

<style lang="scss" scoped>
#creator-form{
  margin: 30px 0;

  .submit-btn{
    display: block;
    margin: 20px auto;
    padding: 10px 100px;
  }
}
</style>
