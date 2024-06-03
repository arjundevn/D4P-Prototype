import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from '../api-client'

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  membershipId: number;
  aadharId: number;
  panId: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess:  () => {
      console.log("Registration successful")
    },
    onError: (error:Error) => {
      console.log(error.message);
    }
  })

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Create an Account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray=700 text-sm font-bold flex-1">
          First Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("firstName", { required: "This field is required" })}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message} </span>
          )}
        </label>
        <label className="text-gray=700 text-sm font-bold flex-1">
          Last Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("lastName", { required: "This field is required" })}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message} </span>
          )}
        </label>
      </div>
      <label className="text-gray=700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
            <span className="text-red-500">{errors.email.message} </span>
          )}
      </label>
      <label className="text-gray=700 text-sm font-bold flex-1">
        CA Membership ID
        <input
          maxLength={1}
          type="number"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("membershipId", { required: "This field is required" })}
        />
        {errors.membershipId && (
            <span className="text-red-500">{errors.membershipId.message} </span>
          )}
      </label>
      <div className="flex flex-col md:flex-row gap-5">
      <label className="text-gray=700 text-sm font-bold flex-1">
        Phone Number
        <input
          type="number"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("phoneNumber", { required: "This field is required" })}
        />
        {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message} </span>
          )}
      </label>
      <label className="text-gray=700 text-sm font-bold flex-1">
        OTP
        <input
          type="number"
          className="border rounded w-full py-1 px-2 font-normal"
        />
      </label>
      </div>
      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xs"
        >
          Generate SMS-based OTP
        </button>
      </span>
      <div className="flex flex-col md:flex-row gap-5">
      <label className="text-gray=700 text-sm font-bold flex-1">
        Aadhar Number
        <input
          type="number"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("aadharId", { required: "This field is required" })}
        />
        {errors.aadharId && (
            <span className="text-red-500">{errors.aadharId.message} </span>
          )}
      </label>
      <label className="text-gray=700 text-sm font-bold flex-1">
        OTP
        <input
          type="number"
          className="border rounded w-full py-1 px-2 font-normal"
        />
      </label>
      </div>
      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xs"
        >
          Generate Aadhar-based OTP
        </button>
      </span>
      <label className="text-gray=700 text-sm font-bold flex-1">
        PAN Number
        <input
          type="string"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("panId", { required: "This field is required" })}
        />
        {errors.panId && (
            <span className="text-red-500">{errors.panId.message} </span>
          )}
      </label>
      <div className="flex flex-col md:flex-row gap-5">
      <label className="text-gray=700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be atleast 6 characters",
            },
          })}
        />
        {errors.password && (
            <span className="text-red-500">{errors.password.message} </span>
          )}
      </label>
      <label className="text-gray=700 text-sm font-bold flex-1">
        Confirm Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do not match";
              }
            },
          })}
        />
        {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword.message} </span>
          )}
      </label>
      </div>
      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
        >
          Create Account
        </button>
      </span>
    </form>
  );
};

export default Register;
