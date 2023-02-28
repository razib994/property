import React from 'react';
import Layout from './master/Layout';

const PrivacyPolicy = () => {
    return (
        <>
           
          <section className="pb-20 mt-[70px] md:mt-[100px]">
          <div className="bg-gray-200 py-28">
        <div className="w-[82%] mx-auto">
            <h2 className="text-3xl font-bold pb-2">Privacy Policy</h2>
            <p> Home / Privacy Policy  </p>
        </div>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-[85%] mx-auto mt-10">
                <div className="col-span-2 py-6 md:px-10">
                    <h2 className="text-3xl font-bold py-3">Lorem Ipsum</h2>
                    <p className="py-2 space-y-6 text-xl text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
                <div className="md:px-10 text-center">
                    <h2 className="text-3xl font-bold py-3">Important Link</h2>
                    <div className="">
                        <ul>
                            <li className="py-2"> <a className="text-xl text-blue-500 hover:text-blue-900"  href="#">Link 01 </a> </li>
                            <li className="py-2"> <a className="text-xl text-blue-500 hover:text-blue-900"  href="#">Link 01 </a> </li>
                            <li className="py-2"> <a className="text-xl text-blue-500 hover:text-blue-900"  href="#">Link 01 </a> </li>
                            <li className="py-2"> <a className="text-xl text-blue-500 hover:text-blue-900"  href="#">Link 01 </a> </li>
                            <li className="py-2"> <a className="text-xl text-blue-500 hover:text-blue-900"  href="#">Link 01 </a> </li>
                            <li className="py-2"> <a  className="text-xl text-blue-500 hover:text-blue-900" href="#">Link 01 </a> </li>
                        </ul>
                    
                    
                    </div>
                </div>
            </div>
            </section>   
        </>
    );
}
PrivacyPolicy.layout = (page) => <Layout children={page}/>
export default PrivacyPolicy;
