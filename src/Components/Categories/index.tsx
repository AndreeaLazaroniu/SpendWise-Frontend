import { Box, Button, Divider, IconButton } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { Category } from '../shared/types/Category';
import { CategoriesApiClient } from '../../api/Clients/CategoriesApiClients';
import { CategoryModel } from '../../api/Models/CategoryModel';
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { AddCategoryPopup } from "./AddCategoryPopup";
import { EditCategoryPopup } from "./EditCategoryPopup";

import './Categories.css';

export const Categories: FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    const [editableCategory, setEditableCategory] = useState<Category>();

    const fetchCategories = async () => {
        try{
            const res = await CategoriesApiClient.getAllAsync();

            const categories = res.map((e:CategoryModel) => ({...e} as Category));
            setCategories(categories);
        }catch(error:any){
            console.log(error);
        }
    };

    const deleteCategory = async (id?: number) => {
        if (!id) return;
    
        try {
          await CategoriesApiClient.deleteOneAsync(id);
          const newCategories = categories.filter((el) => el.id !== id);
          setCategories(newCategories);
        } catch (error: any) {
          console.log(error);
        }
      };

    useEffect(() => {
        fetchCategories();
    }, []);


    return ( <Box>
        <Box className={'new-category-section'}>
            <Box className={"categories-title-text"}>Add new category</Box>
            <Button 
                size="medium" 
                variant="contained" 
                color="primary" 
                onClick={handleOpen}
                sx={{color:"#fff"}}
            >

                <AddIcon fontSize="large" />
            </Button>
        </Box>

        <Divider/>

        <Box className={"categories-list-section"}>
            <Box className={"categories-title-text"}>Current Categories</Box>
            <Box className={"categories-list"}>
                {categories.map((category: Category, index: number) => (
                    <Box key={`${category.id}-${index}`} className={"category"}>
                        <Box className={"category-text-container"}>
                            {category.name}
                        </Box>
                        <IconButton
                            onClick={() => {
                                setEditableCategory(category);
                                handleOpenEdit();
                            }}
                        >
                        <ModeEditIcon color="primary" fontSize="large" />
                        </IconButton>
                        <IconButton onClick={() => deleteCategory(category.id)}>
                            <CancelIcon color="primary" fontSize="large" />
                        </IconButton>
                    </Box>
                ))}

            </Box>

        </Box>

        <AddCategoryPopup 
            open={open} 
            onClose={handleClose} 
            onEditing={(category:Category) => {
                setCategories([...categories, category]);
            }} 
        />

        {editableCategory && (
            <EditCategoryPopup
                open={openEdit}
                onClose={handleCloseEdit}
                onEditing={(category: Category) => {
                    const filtered = categories.filter((el) => el.id !== category.id);
                    setCategories([...filtered, category]);
                    setEditableCategory(undefined);
                }}
                category={editableCategory}
            />
        )}
    </Box>
    );
};