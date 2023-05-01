import React from 'react';
import Layout from './master/Layout';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toFormData } from "./../utils";

const ClientsRegistration = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
            const formData = toFormData(data);
        
            post(route('client.submit'), {
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
        <>
            <section class="relative min-h-screen z-10 w-full bg-cover  bg-red-400 " style={{backgroundImage:`url('/reg.jpg')`}}>
    <div class="p-6" x-data="app">
        <section
            class="absolute bg-white p-5 rounded-lg top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
            <form onSubmit={handleSubmit}>
            <div x-show="isLoginPage" class="space-y-4 ">
                <header class="mb-3 text-2xl font-bold">Create Your Account</header>
               
                <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="text" name='name' placeholder="Name"
                     errors={errors.name}
                     // value={data.email}
                     onChange={(e) => setData("name", e.target.value)}
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="text" placeholder="Email" name='email'
                     errors={errors.email}
                     // value={data.email}
                     onChange={(e) => setData("email", e.target.value)}
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="text" placeholder="Phone" name='phone'
                     errors={errors.phone}
                     // value={data.email}
                     onChange={(e) => setData("phone", e.target.value)}
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
                {/* <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="" placeholder="Password"
                        class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div> */}
                <button
                    class="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                    CREATE ACCOUNT
                </button>
             
            </div>
            </form>

           
            

            {/* <div class="flex items-center space-x-4">
                <hr class="w-full border border-gray-300" />
                <div class="font-semibold text-gray-400">OR</div>
                <hr class="w-full border border-gray-300" />
            </div> */}

            <footer>
               

                <div class="mt-8 text-sm text-gray-400">
                    By signing in to ********, you agree to our
                    <a href="#" class="font-medium text-gray-500">Terms</a> and
                    <a href="#" class="font-medium text-gray-500">Privacy Policy</a>.
                </div>
            </footer>
        </section>
    </div>
</section>
        </>
    );
}
ClientsRegistration.layout = (page) => <Layout title="Registration" children={page} />;

export default ClientsRegistration;
