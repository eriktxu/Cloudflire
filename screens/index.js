import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import useCloudflareImageUploader from '../cloudflire/cloudfire' ;


export default function ImagePickerExample() {
    const { submitImage, variants } = useCloudflareImageUploader();  
    const [isImageSelected, setIsImageSelected] = useState(false);
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,  3],
            quality:  1,
        });

        if (!result.cancelled && result.assets.length >  0 && result.assets[0].uri) {
            setImage(result.assets[0].uri);
            setIsImageSelected(true);
        }
    };

    const uploadImage = async () => {
        if (isImageSelected) {
            const formData = new FormData();
            formData.append("file", { uri: image });
            submitImage(formData);
        }
    };

    useEffect(() => {
        if (variants.length >  0) {
            setIsImageSelected(true);
        }
    }, [variants]);

    return (
        <ScrollView contentContainerStyle={{ flexGrow:  1 }}>
            <View style={{ flex:  1, alignItems: 'center', justifyContent: 'center', padding:  20,  }}>
                <View style={{ marginBottom: 30 }}>
                <Button title="Selecciona una imagen" onPress={pickImage} color={"purple"}/>
                </View>
                {isImageSelected && (
                    <>
                        <View style={{ marginBottom:20}}>
                        <Button title="Guardar" onPress={uploadImage} color={"purple"} />
                        </View>
                        <Image source={{ uri: image }} style={{ width:  200, height:  200, marginTop:  20 }} />
                        {variants.map((variantUrl, index) => (
                            <View key={index} style={{ alignItems: 'center', justifyContent: 'center', marginTop:  10 }}>
                                <Text>Variante {index +  1}</Text>
                                <Image source={{ uri: variantUrl }} style={{ width:  200, height:  200 }} />
                                <Text>{variantUrl}</Text>
                            </View>
                        ))}
                    </>
                )}
            </View>
        </ScrollView>
    );
}


