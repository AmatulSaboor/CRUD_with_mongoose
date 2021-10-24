/* eslint-disable no-unused-vars */
/**
 * This is a function to open a modal
 * and show all the details of the selected user
 * @param {user} user
 */
function openModalEditUser(user) {
  // console.log(user);
  console.log(user._id);
  $('#idEdit').val(user._id);
  $('#nameEdit').val(user.name);
  $('#emailEdit').val(user.email);
  $('#addressEdit').val(user.address);
  $('#phoneEdit').val(user.phone);
}
