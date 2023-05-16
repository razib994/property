import React from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toFormData } from "./../../../utils";

const Create = () => {
      
  const { data, setData, post, processing, errors } = useForm({

  
    image: "",
    gallery: [],
});


function handleSubmit(e) {
e.preventDefault();
    const formData = toFormData(data);
    post(route('image.submit'), {
        data: formData,
        onFinish: () => {
            //
        },
        onSuccess: () => {
   
            // if (document.querySelector("#createDialog")) {
            // 	document.querySelector("#createDialog").click();
            // }
        },
    });
}
    return (
        <div>
            <form onSubmit={handleSubmit} enctype="multipart/formData">
                <input type="file" name="image" onChange={(e) =>
                                                setData("image", e.target.files[0])
                                            }/>
                                            <input type="file" name="gallery" multiple onChange={(e) =>
                                                setData("gallery", e.target.files[0])
                                            }/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Create;
