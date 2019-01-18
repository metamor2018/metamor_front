<template>
  <div id="status-form">
    <div class="dropdown">
      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        選択キャラ
      </a>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item" href="#">キャラ1</a>
        <a class="dropdown-item" href="#">キャラ2</a>
        <a class="dropdown-item" href="#">キャラ3</a>
      </div>
    </div>
    <b-form @submit="onSubmit">
      <div class="row">
        <b-form-group id="exampleInputGroup1"
                      label-for="exampleInput1"
                      class="col-sm-9">
          <b-form-input id="exampleInput1"
                        type="text"
                        v-model="form.text"
                        required
                        placeholder="Enter text">
          </b-form-input>
        </b-form-group>
        <div class="form-group col-sm-3">
          <b-button type="submit" variant="primary" class="sub-btn">Submit</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import { postStatus } from '../../../utils/apis/status';

export default {
  props: ['statuses'],
  data() {
    return {
      form: {
        text: '',
        reply: false,
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const characterId = this.$route.params.characterId;
      const worldId = this.$route.params.worldId;
      postStatus(characterId, worldId, this.form)
        .then((data) => {
          this.$emit('input', { // 作成した投稿を親コンポーネントのstatusesに追加する
            statuses: this.statuses.unshift(data.data),
          });
        })
        .catch(() => {
          this.$router.push({ path: '/error' });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown{
  margin: 10px 0;
  .dropdown:hover .dropdown-menu {
    display: block;
  }
}
.sub-btn{
  width: 100%;
}
</style>

