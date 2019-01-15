<script>
import { setIdToken, setAccessToken, setCreator } from '../../utils/auth';
import { signup } from '../../utils/apis/account';

export default {
  mounted() {
    this.$nextTick(() => {
      setAccessToken();
      setIdToken();
      signup() // アカウントが作成されてなければ作成
        .then((data) => {
          if (data.data.existsCreator) { // 創作者が既に作成されている場合
            setCreator(); // localStorageに創作者を保存
            this.$router.push({ name: 'top' });
          } else {
            this.$router.push({ name: 'signup' }); // 創作者が作成されていない場合フォームを表示
          }
        }).catch(); // TODO エラーページを表示させる等する
    });
  },
};
</script>
