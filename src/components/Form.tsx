import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

// TypeScript type for form data
interface FormData {
  occsName: string;
  region: { value: string; label: string };
  description: string;
  subCity: { value: string; label: string };
  district: { value: string; label: string };
  houseNumber: string;
  phoneNumber: string;
}

const regionsOptions = [
  { value: 'region1', label: 'Region 1' },
  { value: 'region2', label: 'Region 2' },
];

const subCityOptions = [
  { value: 'subcity1', label: 'Sub City 1' },
  { value: 'subcity2', label: 'Sub City 2' },
];

const districtOptions = [
  { value: 'district1', label: 'District 1' },
  { value: 'district2', label: 'District 2' },
];

const OsccForm: React.FC = () => {
  const { handleSubmit, control, register, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* OCCS Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">OCCS Name *</label>
            <input
              {...register('occsName', { required: 'OCCS Name is required' })}
              type="text"
              placeholder="Enter name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.occsName && <p className="text-red-500 text-sm">{errors.occsName.message}</p>}
          </div>

          {/* Region Select */}
          <div>
            <label className="block text-sm font-medium mb-1">Region *</label>
            <Controller
              name="region"
              control={control}
              rules={{ required: 'Region is required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={regionsOptions}
                  className="w-full"
                  placeholder="Select Region"
                />
              )}
            />
            {errors.region && <p className="text-red-500 text-sm">{errors.region.message}</p>}
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            {...register('description')}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Write description"
          />
        </div>

        {/* Zone/Sub City and District */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1">Zone or Sub city *</label>
            <Controller
              name="subCity"
              control={control}
              rules={{ required: 'Sub city is required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={subCityOptions}
                  className="w-full"
                  placeholder="Select Sub City"
                />
              )}
            />
            {errors.subCity && <p className="text-red-500 text-sm">{errors.subCity.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Woreda or District *</label>
            <Controller
              name="district"
              control={control}
              rules={{ required: 'District is required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={districtOptions}
                  className="w-full"
                  placeholder="Select District"
                />
              )}
            />
            {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
          </div>
        </div>

        {/* House Number and Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1">House Number *</label>
            <input
              {...register('houseNumber', { required: 'House number is required' })}
              type="text"
              placeholder="Enter house number"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.houseNumber && <p className="text-red-500 text-sm">{errors.houseNumber.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number *</label>
            <input
              {...register('phoneNumber', { required: 'Phone number is required' })}
              type="text"
              placeholder="Enter phone number"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-600 transition"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default OsccForm;
