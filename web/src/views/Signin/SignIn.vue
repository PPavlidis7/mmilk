<script lang="ts" setup>
import {reactive} from "vue";

interface FormState {
  username: string;
  password: string;
}

// import { ref } from 'vue';
// // import { useStore } from 'pinia';
// import { Input, Button } from 'ant-design-vue';

// // const store = useStore();
// const formRef = ref(null);
// const username = ref('');
// const password = ref('');

// const handleSubmit = () => {
//   if (username.value && password.value) {
//     // store.login(username.value, password.value, false);
//   }
// };

// const footerText = 'Footer Text'; // Replace with your own footer text or import from settings

defineProps<{
  msg: string
}>()

const formState = reactive<FormState>({
  username: '',
  password: '',
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

</script>

<template>
  <ALayout class="mainLayout">
    <a-row aligne="middle" class="signInContainer" justify="center" style="background-color: #f1f3f6">
      <a-col :lg="18" :md="20" :sm="24" :xl="14" :xs="24" :xxl="11">
        <a-row :gutter=48 justify="center">

          <a-col :span="24">
            <img alt="Vue logo" class="logo-wrapper" src="@/image/sign.png"/>
          </a-col>

          <a-col :span="24">
            <!--      <a-spin>-->
            <a-form
                :model="formState"
                autocomplete="off"
                name="basic"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  :label="$t('general.email')"
                  :rules="[{ required: true, message: $t('signin.requiredEmail') }]"
                  name="username"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>

              <a-form-item
                  :label="$t('signin.password')"
                  :rules="[{ required: true, message: $t('signin.requiredPassword') }]"
                  name="password"
              >
                <a-input-password v-model:value="formState.password"/>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button html-type="submit" type="primary">{{ $t('general.submit') }}</a-button>
              </a-form-item>
            </a-form>
            <!--      </a-spin>-->
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </ALayout>
</template>

<style scoped>
.signInContainer {
  padding: 0px 20px;
  height: 88vh;
}

.logo-wrapper {
  width: 100%;
  min-height: 300px;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
}

.mainLayout {
  background: #f1f3f6;
  overflow: hidden;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media only screen and (max-height: 555px) {
    height: 100%;
  }
}

.input-wrapper {
  /* Add your own styles for the input wrapper */
}

.sign-in-button {
  /* Add your own styles for the sign-in button */
}

.footer {
  /* Add your own styles for the footer */
}
</style>
