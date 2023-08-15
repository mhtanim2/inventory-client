import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "../state-slice/brand-slice";
import categoryReducer from "../state-slice/category-slice";
import customerReducer from "../state-slice/customer-slice";
import dashboardReducer from "../state-slice/dashboard-slice";
import expenseReducer from "../state-slice/expense-slice";
import expensetypeReducer from "../state-slice/expensetype-slice";
import productReducer from "../state-slice/product-slice";
import profileReducer from "../state-slice/profile-slice";
import purchaseReducer from "../state-slice/purchase-slice";
import reportReducer from "../state-slice/report-slice";
import returnReducer from "../state-slice/return-slice";
import saleReducer from "../state-slice/sale-slice";
import settingsReducer from "../state-slice/settings-slice";
import supplierReducer from "../state-slice/supplier-slice";


export default configureStore({
    reducer:{
        settings:settingsReducer,
        dashboard:dashboardReducer,
        profile:profileReducer,
        brand:brandReducer,
        supplier:supplierReducer,
        category:categoryReducer,
        customer:customerReducer,
        expense:expenseReducer,
        expensetype:expensetypeReducer,
        purchase:purchaseReducer,
        report:reportReducer,
        product:productReducer,
        return:returnReducer,
        sale:saleReducer,
    }
})