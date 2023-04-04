<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Custom Validation Example
    </div>
    <div class="code-example__description">
      Form fields with custom validation
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/tree/vue3-with-typescript/src/components/ui-elements/forms/custom-validation"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__block">
      <div class="example-form">
        <div class="example-form__field">
          <InputText
            label="Full Name*"
            id="full-name"
            :defaultValue="state.fullName"
            :isRequired="true"
            :minLength="3"
            :maxLength="33"
            @update-full-name="updateFullName"
          />
        </div>
        <div class="example-form__field">
          <InputEmail
            label="Email*"
            id="email"
            :defaultValue="state.email"
            :isRequired="true"
            @update-email="updateEmail"
          />
        </div>
        <div class="example-form__field">
          <SelectComponent
            label="Country"
            id="country"
            :defaultValue="state.country"
            :isRequired="false"
            :selectOptions="state.countriesSelectOptions"
            :isFilterable="true"
            @update-country="updateCountry"
          />
        </div>
        <div class="example-form__field">
          <InputPassword
            label="Password*"
            id="password"
            :defaultValue="state.password"
            :isRequired="true"
            :minLength="8"
            :maxLength="30"
            :autocompleteEnabled="false"
            @update-password="updatePassword"
          />
        </div>
        <div class="example-form__field">
          <InputPassword
            label="Confirm Password*"
            id="confirm-password"
            :defaultValue="state.confirmPassword"
            :isRequired="true"
            :minLength="8"
            :maxLength="30"
            :autocompleteEnabled="false"
            :mainPassword="state.password"
            @update-confirm-password="updateConfirmPassword"
          />
        </div>
        <div class="example-form__field">
          <TextareaBlock
            label="Message"
            id="message"
            :defaultValue="state.message"
            :isRequired="false"
            :minLength="7"
            :maxLength="355"
            @update-message="updateMessage"
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
import { defineComponent, reactive, computed, onMounted } from 'vue';
import InputText from '@/components/ui-elements/forms/custom-validation/InputText.vue';
import InputEmail from '@/components/ui-elements/forms/custom-validation/InputEmail.vue';
import SelectComponent from '@/components/ui-elements/forms/custom-validation/SelectComponent.vue';
import InputPassword from '@/components/ui-elements/forms/custom-validation/InputPassword.vue';
import TextareaBlock from '@/components/ui-elements/forms/custom-validation/TextareaBlock.vue';
import { SelectOptionsObject } from '@/types';
import CountriesApiHelper from '@/api-helpers/countries.api-helper';

export default defineComponent({
  name: 'CustomValidationExample',
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

    const updateFullName = (value: string) => {
      state.fullName = value;
    };

    const updateEmail = (value: string) => {
      state.email = value;
    };

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

    const updateCountry = (value: string) => {
      state.country = value;
    };

    const updatePassword = (value: string) => {
      state.password = value;
    };

    const updateConfirmPassword = (value: string) => {
      state.confirmPassword = value;
    };

    const updateMessage = (value: string) => {
      state.message = value;
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
      updateFullName,
      updateEmail,
      updateCountry,
      updatePassword,
      updateConfirmPassword,
      updateMessage,
      sendFormData,
    };
  },
});
</script>

<style scoped lang="scss">
.example-form {
  width: 100%;
  max-width: 700px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and (min-width: 700px) {
    margin: 40px auto 0;
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
