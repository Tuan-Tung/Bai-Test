import { Delete, Create } from '@mui/icons-material';
import { useState } from 'react';

import { Box, Grid, IconButton, Tab, TabList, TabPanel, Tabs, TextField } from '@mui/joy';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { useController } from 'react-hook-form';

interface IFormInput {
    firstName: string
}

const TabTwo = ({ register, tabs, handleAddTab, handleDeleteTab, handleAddInput, handleDeleteInput,watch }: any) => {
   
    const CommonInput = ({ register, index }: any) => {
        
        return (
            <div>
                <IconButton variant="solid" style={{ background: 'blue', width: '100px' }} onClick={() => handleAddInput(index)}>
                    <Create />
                </IconButton>
                {tabs[index]?.arrInput?.map((value: any, indexItem: number) => (
                    <FormControl error key={indexItem}>
                        <FormLabel>Action</FormLabel>
                        <Grid display='flex' justifyContent='space-between'>
                            <Grid width='100%'>
                                <Input {...register(`action-${value?.name}-${indexItem}`)} placeholder="Type in here…" />
                            </Grid>
                            <IconButton
                                variant="solid"
                                style={{ background: 'blue', width: '100px' }}
                                onClick={() => handleDeleteInput(index, indexItem)}>
                                <Delete />
                            </IconButton>
                        </Grid>
                    </FormControl>
                ))}
            </div>
        )
    }
    return (

        <Stack spacing={2}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <IconButton variant="solid" style={{ background: 'blue', width: '100px' }} onClick={() => handleAddTab(tabs?.length + 1)}>
                    <Create />
                </IconButton>
                <IconButton variant="solid" style={{ background: 'blue', width: '100px' }} onClick={handleDeleteTab}>
                    <Delete />
                </IconButton>
            </Box>
            <Tabs aria-label="Basic tabs" defaultValue={0} className='w-full'>
                <TabList>
                    {tabs?.map((value: any, index: number) => (
                        <Tab key={index}>
                            <p>{value?.title}</p>
                            <p>{value?.number}</p>
                        </Tab>
                    ))}
                </TabList>

                {tabs?.map((value: any, index: number) => (
                    <TabPanel value={index} key={index}>
                        <CommonInput register={register} index={index} />
                    </TabPanel>
                ))}
            </Tabs>
        </Stack>
    )
}

export default TabTwo