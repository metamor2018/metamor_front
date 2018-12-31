<script>

import { setIdToken, setAccessToken } from '../../utils/auth';

export default {
  name: '',
  mounted() {
    this.$nextTick(() => {
      setAccessToken();
      setIdToken();
      this.$router.push({ name: 'checkSignUp' });
    });
  },
};
</script>
