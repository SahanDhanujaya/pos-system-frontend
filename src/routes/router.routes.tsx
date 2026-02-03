import MainLayout from "@/layouts/MainLayout";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/Signup";
import CustomerSection from "@/pages/cashier/customerSection/CustomerSection";
import ProcessReturnPage from "@/pages/cashier/refundSection/Refund";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
    {
        path: '/',
        children: [
            {
               index: true,
                element: <MainLayout />
            },
            {
                path: '/customers',
                element: <CustomerSection />
            },
            {
                path: '/terminal',
                element: <h1>Terminal</h1>
            },
            {
                path: '/history',
                element: <h1>History</h1>
            },
            {
                path: '/returns',
                element: <ProcessReturnPage />
            },
            {
                path: '/shift',
                element: <h1>Shift</h1>
            }
           
        ]
    },
    {
        path: '/auth',
        children: [
            {
                path: 'signin',
                element: <SignIn />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    }
])

export default route