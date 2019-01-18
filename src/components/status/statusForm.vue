<template>
  <div id="status-form">
    <b-form @submit="onSubmit">
      <b-form-group id="exampleInputGroup1"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.text"
                      required
                      placeholder="Enter text">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
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
