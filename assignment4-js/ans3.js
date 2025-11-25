const user = {
name: "vaishnavi",
showName: () => {
console.log(this.name); 
}
};
user.showName();

theUser = {
name: "Reema",
showName() {
console.log(this.name);
}
};
theUser.showName();
