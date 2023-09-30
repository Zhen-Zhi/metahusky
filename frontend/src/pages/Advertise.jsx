import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

// import { useStateContext } from '../context';
import { createCampaign, money } from '../assets';
import { CustomButton, FormField } from '../components';
import { checkIfImage } from '../utils';

const Advertise = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
      name: '',
      title: '',
      description: '',
      target: '', 
      deadline: '',
      image: ''
    });

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate('/')

        // checkIfImage(form.image, async (exists) => {
        //     if(exists) {
        //         setIsLoading(true)
        //         setIsLoading(false)
        //         navigate('/')
        //     }
        //     else {
        //         alert('Invalid url')
        //         setForm({...form, image: ''})
        //     }
        // })
        

        
    }

    return (
        <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
            {isLoading && 'Loader...'}
            <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
                <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Purchase Advertise Space</h1>
            </div>
            <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
                <FormField 
                    LabelName="No. of Space to Purchase *"
                    placeholder="1"
                    inputType="number"
                    value={form.target}
                    handleChange={(e) => handleFormFieldChange('target', e)}
                />

                <table className='w-full text-white text-xl text-right'>
                    <tr>
                        <td>Total: </td>
                        <td className='w-24'>1 Eth</td>
                    </tr>
                    <tr>
                        <td>Total Space Occupied: </td>
                        <td className='w-24'>0.02 %</td>
                    </tr>
                </table>

                <div className="flex justify-center items-center mt-[40px]">
                    <CustomButton 
                        btnType="submit"
                        title="Purchase Now"
                        styles="bg-[#00cfeb]"
                    />
                </div>
            </form>
        </div>
    )
}

export default Advertise;