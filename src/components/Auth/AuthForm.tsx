export const AuthForm = ({ formik }: { formik: any }) => {
  return (
    <form className='space-y-3' onSubmit={formik.handleSubmit} method='POST'>
      <div>
        <div className='flex items-center justify-between'>
          <label
            htmlFor='password'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Password
          </label>
        </div>
        <div className='mt-2'>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className='text-red-500'>{formik.errors.password}</div>
        )}
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label
            htmlFor='confirmPassword'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Confirm Password
          </label>
        </div>
        <div className='mt-2'>
          <input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            autoComplete='current-confirmPassword'
            required
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className='text-red-500'>{formik.errors.confirmPassword}</div>
        )}
      </div>
      <div>
        <button
          type='submit'
          className='mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Submit
        </button>
      </div>
    </form>
  );
};
