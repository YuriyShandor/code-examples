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
    <div class="code-example__block">
      <div class="example-form">
        <div class="example-form__field">
          <InputText
            label="Full Name*"
            id="vuelidate-full-name"
            :defaultValue="state.fullName"
            :isRequired="true"
            :minLength="3"
            :maxLength="33"
            @update-vuelidate-full-name="updateFullName"
          />
        </div>
        <div class="example-form__field">
          <InputEmail
            label="Email*"
            id="vuelidate-email"
            :defaultValue="state.email"
            :isRequired="true"
            @update-vuelidate-email="updateEmail"
          />
        </div>
        <div class="example-form__field">
          <SelectComponent
            label="Country"
            id="vuelidate-country"
            :defaultValue="state.country"
            :isRequired="false"
            :selectOptions="state.countriesSelectOptions"
            :isFilterable="true"
            @update-vuelidate-country="updateCountry"
          />
        </div>
        <div class="example-form__field">
          <InputPassword
            label="Password*"
            id="vuelidate-password"
            :defaultValue="state.password"
            :isRequired="true"
            :minLength="8"
            :maxLength="30"
            :autocompleteEnabled="false"
            @update-vuelidate-password="updatePassword"
          />
        </div>
        <div class="example-form__field">
          <InputPassword
            label="Confirm Password*"
            id="vuelidate-confirm-password"
            :defaultValue="state.confirmPassword"
            :isRequired="true"
            :minLength="8"
            :maxLength="30"
            :autocompleteEnabled="false"
            :mainPassword="state.password"
            @update-vuelidate-confirm-password="updateConfirmPassword"
          />
        </div>
        <div class="example-form__field">
          <TextareaBlock
            label="Message"
            id="vuelidate-message"
            :defaultValue="state.message"
            :isRequired="false"
            :minLength="7"
            :maxLength="355"
            @update-vuelidate-message="updateMessage"
          />
        </div>
        <div class="example-form__field">
          <CheckboxBlock
            id="vuelidate-remember-user"
            label="Remember Me"
            :checkboxValue="state.shouldRememberUser"
            @update-vuelidate-remember-user="updateRememberUserStatus"
            class="checkbox-block"
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
import InputText from '@/components/ui-elements/forms/veulidate-validation/InputText.vue';
import InputEmail from '@/components/ui-elements/forms/veulidate-validation/InputEmail.vue';
import SelectComponent from '@/components/ui-elements/forms/veulidate-validation/SelectComponent.vue';
import InputPassword from '@/components/ui-elements/forms/veulidate-validation/InputPassword.vue';
import TextareaBlock from '@/components/ui-elements/forms/veulidate-validation/TextareaBlock.vue';
import CheckboxBlock from '@/components/ui-elements/forms/veulidate-validation/CheckboxBlock.vue';
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
    CheckboxBlock,
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
      shouldRememberUser: false as boolean,
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

    const updateRememberUserStatus = (value: boolean) => {
      state.shouldRememberUser = value;
    };

    const updateMessage = (value: string) => {
      state.message = value;
    };

    const sendFormData = () => {
      const userdata : {[key: string]: (string | number | boolean)} = {
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
        shouldRememberUser: state.shouldRememberUser,
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
      updateRememberUserStatus,
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
