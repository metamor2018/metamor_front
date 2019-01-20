<template>
  <div id="status-form">
    <div>
      <b-dropdown id="ddown-offset" class="m-2" offset="25" :text="this.ddText" v-if="this.characters.length">
        <b-dropdown-item href="#" v-for="character in characters" :key="character.id" v-on:click="selectCharacter(character)">{{ character.name }}</b-dropdown-item>
      </b-dropdown>
      <p class="text-muted" v-else>参加しているキャラクターがありません</p>
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
          <b-button type="submit" variant="primary" class="sub-btn">送信</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import { postStatus } from '../../../utils/apis/status';

export default {
  props: ['statuses', 'characters'],
  data() {
    return {
      ddText: 'キャラクターを選択',
      form: {
        characterId: '',
        text: '',
        reply: false,
      },
    };
  },
  methods: {
    selectCharacter(character) {
      this.form.characterId = character.id;
      this.ddText = character.name;
    },
    onSubmit(evt) {
      evt.preventDefault();
      if (this.form.characterId.length < 1) {
        alert('キャラクターを選択するか、参加してください');
        return;
      }
      const worldId = this.$route.params.worldId;
      postStatus(this.form.characterId, worldId, this.form)
        .then(() => {
          this.form.text = '';
        }) // 作成成功時
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

