import { useState } from 'react';
import axios from 'axios';

const useCloudflareImageUploader = () => {
    const [variants, setVariants] = useState([]);

    const submitImage = async (formData) => {
        try {
            const response = await axios.post(
                "https://api.cloudflare.com/client/v4/accounts/ca9b43f77ee269734e8818fd05c17671/images/v1",
                formData,
                {
                    headers: {
                        "Authorization": "Bearer OfwKJFrPqG7NU_pZ3fek-L52HgbAlGFZTZxzaOcg",
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Response from Cloudflare API:", response.data); 
            const { result } = response.data;
            if (result && result.variants) {
                setVariants(result.variants);
            } else {
                console.error("La respuesta de la API no contiene el campo 'result' o 'variants'.");
            }
        } catch (error) {
            console.error("ERROR! al subir la imagen:", error);
        }
    };
    return { variants, submitImage };
};

export default useCloudflareImageUploader;
