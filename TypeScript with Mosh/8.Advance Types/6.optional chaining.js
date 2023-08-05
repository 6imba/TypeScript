// when working with nullable object 
function getCustomerInfo(id) {
    return id != 0 ? { name: "Homo Sapiens", birthday: new Date() } : null;
}
var customer_1 = getCustomerInfo(6);
console.log(customer_1 === null || customer_1 === void 0 ? void 0 : customer_1.birthday.getFullYear); //// # Optional property access operator:
console.log(customer_1 === null || customer_1 === void 0 ? void 0 : customer_1.birthday.getFullYear()); //// # Optional property access operator:
