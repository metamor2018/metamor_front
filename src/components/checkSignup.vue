<script>
import signup from '../../utils/apis/account';

export default {
  mounted() {
    this.$nextTick(() => {
      signup()
        .then((data) => {
          if (data.data.existsCreator) {
            window.location.href = '/'; // 既に創作者を作成している場合
          } else {
            window.location.href = '/signup'; // 創作者が作成されていない場合フォームを表示
          }
        })
        .catch(); // TODO エラーページを表示させる等する
    });
  },
};
</script>
