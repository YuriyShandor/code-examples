<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Vuelidate Validation Example
    </div>
    <div class="code-example__description">
      Form fields validation with Vuelidate library
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/tree/vue3-with-typescript/src/components/ui-elements/forms/veulidate-validation"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__result">
      <div class="example-form">
        <div class="example-form__field">
          <InputText
            label="Full Name*"
            id="vuelidate-full-name"
            v-model:value="state.fullName"
            :isRequired="true"
            :minLength="3"
            :maxLength="33"
          />
        </div>
        <div class="example-form__field">
          <InputEmail
            label="Email*"
            id="vuelidate-email"
            v-model:value="state.email"
            :isRequired="true"
          />
        </div>
        <div class="example-form__field">
          <SelectComponent
            label="Country"
            id="vuelidate-country"
            v-model:value="state.country"
            :isRequired="false"
            :selectOptions="state.countriesSelectOptions"
            :isFilterable="true"
          />
        </div>
        <div class="example-form__field">
          <InputPassword
            label="Password*"
            id="vuelidate-password"
            v-model:value="state.password"
            :isRequired="true"
            :minLength="8"
            :maxLength="30"
            :autocompleteEnabled="false"
          />
        </div>
        <div class="example-form__field">
          <InputPassword
            label="Confirm Password*"
            id="vuelidate-confirm-password"
            v-model:value="state.confirmPassword"
            :isRequired="true"
            :minLength="8"
            :maxLength="30"
            :autocompleteEnabled="false"
            :mainPassword="state.password"
          />
        </div>
        <div class="example-form__field">
          <TextareaBlock
            label="Message"
            id="vuelidate-message"
            v-model:value="state.message"
            :isRequired="false"
            :minLength="7"
            :maxLength="355"
          />
        </div>
        <div
          class="button green example-form__button"
          :class="{'disabled': !isFormValid}"
          @click="sendFormData">
          Send
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted, watch } from 'vue';
import InputText from '@/components/ui-elements/forms/veulidate-validation/InputText.vue';
import InputEmail from '@/components/ui-elements/forms/veulidate-validation/InputEmail.vue';
import SelectComponent from '@/components/ui-elements/forms/veulidate-validation/SelectComponent.vue';
import InputPassword from '@/components/ui-elements/forms/veulidate-validation/InputPassword.vue';
import TextareaBlock from '@/components/ui-elements/forms/veulidate-validation/TextareaBlock.vue';
import { SelectOptionsObject } from '@/types';
import CountriesApiHelper from '@/api-helpers/countries.api-helper';

export default defineComponent({
  name: 'VuelidateValidationExample',
  components: {
    InputText,
    InputEmail,
    SelectComponent,
    InputPassword,
    TextareaBlock,
  },
  setup() {
    const state = reactive({
      fullName: '' as string,
      email: '' as string,
      country: '' as string,
      countriesSelectOptions: [] as Array<SelectOptionsObject>,
      password: '' as string,
      confirmPassword: '' as string,
      message: '' as string,
    });

    const isFormValid = computed(() => state.fullName.length > 0 && state.email.length > 0
      && state.password.length > 0 && state.password === state.confirmPassword);

    const getCountriesList = () => {
      CountriesApiHelper.getCountriesFromRestCountries().then(({ data }) => {
        if (data.length > 0) {
          data.forEach((country) => {
            state.countriesSelectOptions.push({
              label: country.name.official,
              value: country.cca3,
            });
          });
        }
      });
    };

    const sendFormData = () => {
      const userdata : {[key: string]: (string | number | boolean)} = {
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
      };
      if (state.fullName.length > 0) {
        userdata.firstName = state.fullName.split(' ')[0];
        if (state.fullName.split(' ')[1].length > 0) {
          userdata.lastName = state.fullName.split(' ')[1];
        }
      }
      if (state.country.length > 0) {
        userdata.country = state.country;
      }
      if (state.country.length > 0) {
        userdata.country = state.country;
      }
      if (state.message.length > 0) {
        userdata.message = state.message;
      }

      console.log(userdata);
    };

    onMounted(() => {
      getCountriesList();
    });

    return {
      state,
      isFormValid,
      sendFormData,
    };
  },
});
</script>

<style scoped lang="scss">
.example-form {
  width: 100%;
  max-width: 700px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and (min-width: 700px) {
    margin: 40px auto;
  }
}

.example-form__field {
  width: 100%;
  margin-bottom: 15px;

  @media only screen and (min-width: 700px) {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1200px) {
    margin-bottom: 30px;
  }
}

.example-form__button {
  width: 260px;
}
</style>
