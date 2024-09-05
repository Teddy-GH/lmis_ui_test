import { useMutation } from '@apollo/client';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SIGN_IN } from '../graphql/mutations';

type FieldType = {
  phoneNumber?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
interface SignInInputs {
  password: string;
  phoneNumber: string;
}

const LoginForm = () => {
  const { handleSubmit } = useForm<SignInInputs>();
  const [signIn] = useMutation(SIGN_IN);

  const onSubmit: SubmitHandler<SignInInputs> = async (formData) => {
    try {
      const result = await signIn({
        variables: {
          password: formData.password,
          phoneNumber: formData.phoneNumber,
        },
      });

      const tokens = result.data.signIn.tokens;

      localStorage.setItem('access_token', tokens.access_token);

      console.log('Login successful, token saved.');
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          placeholder="phone Number"
          prefix={
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.234 14.7963L16.0509 12.477C15.85 12.39 15.6305 12.3545 15.4124 12.3737C15.1943 12.3928 14.9845 12.4661 14.8018 12.5867C14.7872 12.596 14.7732 12.6063 14.7601 12.6175L12.0379 14.9379C11.9773 14.9749 11.9085 14.9963 11.8377 15.0003C11.7669 15.0043 11.6961 14.9908 11.6317 14.961C9.84915 14.1004 8.00399 12.2695 7.14343 10.5078C7.11299 10.4439 7.09886 10.3734 7.10231 10.3028C7.10575 10.2321 7.12667 10.1634 7.16319 10.1027L9.49022 7.33554C9.50119 7.32237 9.51107 7.3081 9.52095 7.29383C9.64125 7.1114 9.71426 6.90191 9.73342 6.68424C9.75259 6.46656 9.71729 6.24753 9.63072 6.0469L7.30698 0.872544C7.1948 0.610474 7.00062 0.391872 6.75361 0.249565C6.5066 0.107257 6.22009 0.0489253 5.9371 0.0833292C4.55578 0.265452 3.28799 0.94418 2.37052 1.99274C1.45306 3.0413 0.948662 4.38799 0.95155 5.78126C0.95155 14.2552 7.84483 21.1485 16.3187 21.1485C17.712 21.1513 19.0587 20.6469 20.1073 19.7295C21.1558 18.812 21.8345 17.5442 22.0167 16.1629C22.0508 15.8812 21.9931 15.596 21.8521 15.3498C21.7111 15.1035 21.4943 14.9094 21.234 14.7963ZM21.1484 16.0531C20.9934 17.223 20.4177 18.2963 19.5288 19.0724C18.6399 19.8486 17.4988 20.2744 16.3187 20.2703C8.33 20.2703 1.82968 13.77 1.82968 5.78126C1.82559 4.60122 2.25143 3.46009 3.02758 2.57122C3.80373 1.68234 4.87705 1.10658 6.04687 0.951575C6.06442 0.950521 6.08201 0.950521 6.09956 0.951575C6.18618 0.952314 6.27064 0.978658 6.34233 1.02729C6.41401 1.07593 6.4697 1.14468 6.5024 1.22489L8.81955 6.39924C8.84659 6.46248 8.85839 6.53119 8.854 6.59983C8.84962 6.66847 8.82917 6.73511 8.7943 6.7944L6.46837 9.56049C6.45739 9.57476 6.44642 9.58793 6.43654 9.6033C6.31262 9.7928 6.23964 10.011 6.22465 10.237C6.20965 10.4629 6.25314 10.6888 6.35092 10.893C7.30478 12.8458 9.27178 14.7985 11.2465 15.7524C11.4521 15.8495 11.6793 15.8918 11.9061 15.875C12.1329 15.8583 12.3515 15.7832 12.5406 15.6569L12.5812 15.6261L15.3067 13.3079C15.365 13.2723 15.4309 13.251 15.4991 13.2459C15.5672 13.2407 15.6356 13.2518 15.6986 13.2783L20.8806 15.6009C20.9681 15.6373 21.0414 15.701 21.0897 15.7825C21.1379 15.864 21.1585 15.9589 21.1484 16.0531Z"
                fill="#C2C2C2"
              />
            </svg>
          }
        />
      </Form.Item>

      <Form.Item<FieldType>
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          placeholder="password"
          prefix={
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <path
                  d="M24.4014 14.6642C24.4014 13.3358 23.3211 12.2555 21.9927 12.2555H20.7883V8.64235C20.7883 5.32188 18.0869 2.62045 14.7664 2.62045C11.4459 2.62045 8.74449 5.32188 8.74449 8.64235V12.2555H7.54011C6.21168 12.2555 5.13135 13.3358 5.13135 14.6642V24.2993C5.13135 25.6277 6.21168 26.708 7.54011 26.708H21.9927C23.3211 26.708 24.4014 25.6277 24.4014 24.2993V14.6642ZM11.1532 8.64235C11.1532 6.65031 12.7743 5.02921 14.7664 5.02921C16.7584 5.02921 18.3795 6.65031 18.3795 8.64235V12.2555H11.1532V8.64235Z"
                  fill="#333333"
                />
              </g>
            </svg>
          }
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          className="w-72 flex justi-center rounded-lg"
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
