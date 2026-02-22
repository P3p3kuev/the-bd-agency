'use client';

import { useState } from 'react';

interface ContactFormProps {
  onSuccess?: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  phone?: string;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.role.trim()) newErrors.role = 'Role is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          role: '',
          phone: '',
        });
        setTimeout(() => {
          onSuccess?.();
        }, 2000);
      } else {
        setErrors({ submit: 'Failed to submit form. Please try again.' });
      }
    } catch (error) {
      setErrors({
        submit: 'An error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-navy-900 mb-2">
          Assessment Requested
        </h3>
        <p className="text-sm text-gray-600">
          We&apos;ll be in touch within 24 hours to schedule your Executive Revenue
          Assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={isSubmitting}
          />
          {errors.firstName && (
            <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={isSubmitting}
          />
          {errors.lastName && (
            <p className="text-xs text-red-600 mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={isSubmitting}
        />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 ${
            errors.company ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={isSubmitting}
        />
        {errors.company && (
          <p className="text-xs text-red-600 mt-1">{errors.company}</p>
        )}
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
          Your Role
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 ${
            errors.role ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={isSubmitting}
        >
          <option value="">Select a role</option>
          <option value="CEO">CEO</option>
          <option value="CFO">CFO</option>
          <option value="CRO">CRO</option>
          <option value="VP Sales">VP Sales</option>
          <option value="VP Revenue">VP Revenue</option>
          <option value="Sales Director">Sales Director</option>
          <option value="Finance Director">Finance Director</option>
          <option value="Other">Other</option>
        </select>
        {errors.role && <p className="text-xs text-red-600 mt-1">{errors.role}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
          disabled={isSubmitting}
        />
      </div>

      {errors.submit && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-600">
          {errors.submit}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Submitting...' : 'Request Assessment'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. Your information is secure and will only be used to
        schedule your assessment.
      </p>
    </form>
  );
}
