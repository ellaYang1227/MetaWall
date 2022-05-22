export const FormsSchema: any = {
  name: {
    name: '暱稱',
    type: 'text',
    error: '暱稱至少 2 個字元以上',
    validates: {
      isRequired: true,
      minlength: 2
    }
  },
  email: {
    name: 'Email',
    type: 'email',
    error: '必填欄位，請輸入您的 E-Mail',
    validates: {
      isRequired: true
    }
  },
  password: {
    name: 'Password',
    type: 'password',
    error: {
      default: '密碼需至少 8 碼以上，並英數混合',
      confirm: '密碼不一致'
    },
    validates: {
      isRequired: true,
      minlength: 8,
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$'
    }
  },
  sex: {
    name: '性別',
    type: 'radio',
    options: [{
      label: '男性',
      value: 'male',
      isChecked: true
    }, {
      label: '女性',
      value: 'female',
      isChecked: false
    }],
    validates: {
      isRequired: true
    }
  }

};
