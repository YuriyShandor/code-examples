<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Vuelidate Library Example
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/ui-elements/modals/ModalWithoutPlugins.vue"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__block">
      <div class="vuelidate-form">
        <div class="vuelidate-form__field">
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
        <div class="vuelidate-form__field">
          <InputEmail
            label="Email*"
            id="email"
            :defaultValue="state.email"
            :isRequired="true"
            @update-email="updateEmail"
          />
        </div>
        <div class="vuelidate-form__field">
          <SelectComponent
            label="Country"
            id="country"
            :defaultValue="state.country"
            :isRequired="true"
            :selectOptions="state.countriesSelectOptions"
            :isFilterable="true"
            @update-country="updateCountry"
          />
        </div>
        <div class="vuelidate-form__field">
          <InputPassword
            label="Password*"
            id="password"
            :defaultValue="state.password"
            :isRequired="true"
            :minLength="8"
            :maxLength="30"
            :autocomplete="false"
            @update-password="updatePassword"
          />
        </div>
        <div class="vuelidate-form__field">
          <InputPassword
            label="Confirm Password*"
            id="confirm-password"
            :defaultValue="state.confirmPassword"
            :isRequired="true"
            :minLength="8"
            :maxLength="30"
            :autocomplete="false"
            :mainPassword="state.password"
            @update-confirm-password="updateConfirmPassword"
          />
        </div>
        <div class="vuelidate-form__field">
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
          class="button green vuelidate-form__button"
          :class="{'disabled': !isFormValid}">
          Send
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import InputText from '@/components/ui-elements/forms/veulidate-fields/InputText.vue';
import InputEmail from '@/components/ui-elements/forms/veulidate-fields/InputEmail.vue';
import SelectComponent from '@/components/ui-elements/forms/veulidate-fields/SelectComponent.vue';
import InputPassword from '@/components/ui-elements/forms/veulidate-fields/InputPassword.vue';
import TextareaBlock from '@/components/ui-elements/forms/veulidate-fields/TextareaBlock.vue';
import { SelectOptionsObject } from '@/types';
import CountriesApiHelper from '@/api-helpers/countries.api-helper';

export default defineComponent({
  name: 'VuelidateLibraryExample',
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
      const updateUserParams : any = {
        email: state.email,
      };
      if (state.fullName.length > 0) {
        updateUserParams.first_name = state.fullName.split(' ')[0];
        if (state.fullName.split(' ')[1].length > 0) {
          updateUserParams.last_name = state.fullName.split(' ')[1];
        }
      }
      if (state.confirmPassword.length > 0) {
        updateUserParams.password = state.password;
        updateUserParams.password_confirm = state.confirmPassword;
      }

      console.log(updateUserParams);
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
.vuelidate-form {
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

.vuelidate-form__field {
  width: 100%;
  margin-bottom: 15px;

  @media only screen and (min-width: 700px) {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1200px) {
    margin-bottom: 30px;
  }
}

.vuelidate-form__button {
  width: 260px;

}
</style>
