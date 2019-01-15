<template>
  <div id="character-form">
    <b-form @submit="onSubmit">
      <b-form-group horizontal
                    :label-cols="2"
                    id="id_group"
                    label="id"
                    label-for="id"
                    :invalid-feedback="invalidDisplayID"
                    :valid-feedback="validDisplayID"
                    :state="idState">
        <b-form-input id="id" :state="idState" v-model.trim="form.id"></b-form-input>
      </b-form-group>
      <b-form-group horizontal
                    :label-cols="2"
                    id="name_group"
                    label="名前"
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
import { createCharacter } from '../../../utils/apis/character';

export default {
  data() {
    return {
      form: {
        id: '',
        name: '',
      },
    };
  },
  computed: {
    // バリデーションチェック
    // id
    idState() {
      return this.form.id.length >= 4;
    },
    invalidDisplayID() {
      if (this.form.id.length > 4) {
        return '';
      } else if (this.form.id.length > 0) {
        return '４文字以上で入力してください';
      }

      return 'IDを入力してください';
    },
    validDisplayID() {
      return this.state === true ? 'このIDは使用できます' : '';
    },
    // 名前
    nameState() {
      return this.form.name.length >= 1;
    },
    invalidName() {
      if (this.form.name.length > 1) {
        return '';
      }
      return '名前を入力してください';
    },
    validName() {
      return this.state === true ? 'ok' : '';
    },
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      createCharacter(this.form)
        .then((data) => { // キャラクターのプロフィールページに移動したい
          this.$router.push({ name: 'top' });
        })
        .catch((e) => {
          const statusCode = e.response.status;
          if (statusCode === 400) { // バリデーションエラー
            alert(e.response.data.join('\n'));
          } else { // バックエンドで何か問題が発生した場合
            alert('問題が発生しました。もう一度お試しください');
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#character-form{
  margin: 30px 0;

  .submit-btn{
    display: block;
    margin: 20px auto;
    padding: 10px 100px;
  }
}
</style>
