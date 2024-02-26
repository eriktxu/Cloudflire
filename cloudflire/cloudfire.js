import { useState } from 'react';
import axios from 'axios';

const cloudflareImage = () => {
    const [variants, setVariants] = useState([]);

    const saveImage = async (formData) => {
        try {

            await axios.post(
            "https://api.cloudflare.com/client/v4/accounts/ca9b43f77ee269734e8818fd05c17671/images/v1",
            formData,{
                headers: {
                    "Authorization": "Bearer OfwKJFrPqG7NU_pZ3fek-L52HgbAlGFZTZxzaOcg",
                    "Content-Type": "multipart/form-data",
                },
            });

        } catch (error) {
            console.error("ERROR! al subir la imagen:", error);
        }
    };
    return { variants, saveImage };
};

export default cloudflareImage;
