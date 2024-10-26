import { useState } from 'react';

interface SubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export const useFormSubmission = () => {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const handleSubmit = async (formData: any, formType: 'contact' | 'directory') => {
    setSubmissionState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      // Log the submission data
      console.log(`${formType} form submission:`, formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success state
      setSubmissionState({
        isSubmitting: false,
        isSuccess: true,
        error: null
      });

      return true;
    } catch (error) {
      setSubmissionState({
        isSubmitting: false,
        isSuccess: false,
        error: 'An error occurred. Please try again.'
      });
      return false;
    }
  };

  return { submissionState, handleSubmit };
};