<template>
  <div id="creator-form">
    <b-form @submit="onSubmit">
      <b-form-group horizontal
                    :label-cols="2"
                    id="id_group"
                    label="創作者ID"
                    label-for="id"
                    :invalid-feedback="invalidDisplayID"
                    :valid-feedback="validDisplayID"
                    :state="idState">
        <b-form-input id="id" :state="idState" v-model.trim="form.id"></b-form-input>
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
import { create } from '../../../utils/apis/creator';

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
    // 創作者ID
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
    // 創作者名
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
      create(this.form)
        .then((data) => { // 創作者作成成功時、プロフィールページに移動
          this.$router.push({ name: 'create-profile', params: { id: data.data.creatorId } });
        })
        .catch((e) => {
          const statusCode = e.response.status;
          if (statusCode === 400) { // バリデーションエラー
            alert(e.response.data.join('\n'));
          } else if (statusCode === 303) { // 既に創作者を作成していた場合
            this.$router.push({ name: 'top' });
          } else { // バックエンドで何か問題が発生した場合
            alert('問題が発生しました。もう一度お試しください');
          }
        });
    },
  },
};
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
