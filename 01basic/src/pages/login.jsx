import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './RegistrationForm.css';

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter valid email"),
  password: z.string().min(8, "Password must be at least 8 chars"),
  confirmPassword: z.string(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept terms" })
  })
}).refine(data => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match"
});

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch } =
    useForm({ resolver: zodResolver(schema), mode: 'onBlur' });

  const onSubmit = async (data) => {
    console.log("Registering", data);
    // do API call
    await new Promise(r => setTimeout(r, 500));
    reset();
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="input-group">
            <input
              type="text"
              {...register("fullName")}
              placeholder=" "
            />
            <label>Full Name</label>
            {errors.fullName && <div className="error">{errors.fullName.message}</div>}
          </div>
          <div className="input-group">
            <input
              type="email"
              {...register("email")}
              placeholder=" "
            />
            <label>Email</label>
            {errors.email && <div className="error">{errors.email.message}</div>}
          </div>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder=" "
            />
            <label>Password</label>
            <span className="password-toggle" onClick={() => setShowPassword(v => !v)}>
              {showPassword ? "Hide" : "Show"}
            </span>
            {errors.password && <div className="error">{errors.password.message}</div>}
          </div>
          <div className="input-group">
            <input
              type={showConfirm ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder=" "
            />
            <label>Confirm Password</label>
            <span className="password-toggle" onClick={() => setShowConfirm(v => !v)}>
              {showConfirm ? "Hide" : "Show"}
            </span>
            {errors.confirmPassword && <div className="error">{errors.confirmPassword.message}</div>}
          </div>
          <div className="input-group" style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" {...register("terms")} id="terms" style={{ marginRight: '8px' }} />
            <label htmlFor="terms" style={{ top: '0', position: 'static', transform: 'none', fontSize: '14px', color: '#555' }}>
              I agree to terms & conditions
            </label>
            {errors.terms && <div className="error" style={{ marginTop: '4px' }}>{errors.terms.message}</div>}
          </div>
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
