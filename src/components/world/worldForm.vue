<template>
  <div id="world-form">
    <b-form @submit="onSubmit">
      <b-form-group horizontal
                    :label-cols="2"
                    id="name_group"
                    label="名前"
                    label-for="name"
                    :invalid-feedback="invalidName"
                    :valid-feedback="validName"
                    :state="nameState">
        <b-form-input id="name" :state="nameState" v-model="form.name"></b-form-input>
      </b-form-group>
      <b-form-group horizontal
                    :label-cols="2"
                    id="detail_group"
                    label="詳細"
                    label-for="detail"
                    :invalid-feedback="invalidDetail"
                    :valid-feedback="validDetail"
                    :state="detailState">
        <b-form-input id="detail" :state="detailState" v-model="form.detail"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="submit-btn">作成</b-button>
    </b-form>
  </div>
</template>

<script>
import { createWorld } from '../../../utils/apis/world';
import { getCreator } from '../../../utils/auth';


export default {
  data() {
    return {
      form: {
        creatorId: '',
        name: '',
        detail: '',
      },
    };
  },
  mounted() {
    const creator = getCreator();
    this.form.creatorId = creator.id;
  },
  computed: {
    // バリデーションチェック
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
    // id
    detailState() {
      return this.form.detail.length >= 1;
    },
    invalidDetail() {
      if (this.form.detail.length > 0) {
        return '';
      }
      return '詳細を入力してください';
    },
    validDetail() {
      return this.state === true ? 'ok' : '';
    },
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      createWorld(this.form)
        .then((data) => {
          this.$router.push({ name: 'world-detail', params: { worldId: data.data.worldId } });
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
#world-form{
  margin: 30px 0;

  .submit-btn{
    display: block;
    margin: 20px auto;
    padding: 10px 100px;
  }
}
</style>
