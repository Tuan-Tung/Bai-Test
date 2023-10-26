import { useState } from 'react';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Stack from '@mui/joy/Stack';
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from '@mui/joy';

interface IFormInput {
    firstName: string
}

const TabOne = ({ register,errors }: any) => {

    return (
        <Stack spacing={2}>
            <FormControl error>
                <FormLabel>first Name</FormLabel>
                <Input {...register("firstName")} placeholder="Type in here…" />
                <FormHelperText>
                {errors.firstName?.message}
                </FormHelperText>
            </FormControl>
            <FormControl error>
                <FormLabel>last Name</FormLabel>
                <Input {...register("lastName")} placeholder="Type in here…" />
                <FormHelperText>
                {errors.lastName?.message}
                </FormHelperText>
            </FormControl>
        </Stack>
    )
}

export default TabOne