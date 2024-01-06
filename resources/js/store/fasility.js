// import { ref } from "vue";
// import { defineStore, storeToRefs } from "pinia";
// import { useGlobalStore } from "./global.js";
// import Swal from "sweetalert2";
// import axios from "axios";

// export const useCategory = defineStore(
//     "category",
//     () => {
//         const store = useGlobalStore();
//         const { room, singleData, pagination } = storeToRefs(store);

//         const getSingleData = (id) => {
//             store.getSingleData("http://127.0.0.1:8000/api/kamar", id);
//         };

//         const searchData = async (search) => {
//             try {
//                 const res = await axios.get(
//                     `http://127.0.0.1:8000/api/kamar/search?query=${search}`
//                 );
//                 room.value = res.data;
//             } catch {
//                 console.log(err);
//             }
//         };

//         const updateData = async (payload) => {
//             try {
//                 await axios.patch(
//                     `http://127.0.0.1:8000/api/kamar/${payload.id}`,
//                     payload
//                 );
//                 singleData.value = [];
//                 const Toast = Swal.mixin({
//                     toast: true,
//                     position: "top-end",
//                     showConfirmButton: false,
//                     timer: 1000,
//                     timerProgressBar: true,
//                     didOpen: (toast) => {
//                         toast.onmouseenter = Swal.stopTimer;
//                         toast.onmouseleave = Swal.resumeTimer;
//                     },
//                 });
//                 Toast.fire({
//                     icon: "success",
//                     title: "Update successfully",
//                 });
//             } catch (err) {
//                 console.log(err);
//             }
//         };

//         const deleteData = async (id) => {
//             try {
//                 Swal.fire({
//                     title: "Are you sure to delete this data ?",
//                     icon: "question",
//                     showConfirmButton: true,
//                     showCancelButton: true,
//                     cancelButtonText: "cancel",
//                     confirmButtonText: "delete",
//                 }).then(async (result) => {
//                     if (result.isConfirmed) {
//                         let deletedItem = room.value.find(
//                             (item) => item.id === id
//                         );
//                         if (deletedItem) {
//                             await axios.delete(
//                                 `http://127.0.0.1:8000/api/kamar/${id}`
//                             );
//                             const index = room.value.indexOf(deletedItem);
//                             room.value.splice(index, 1);
//                         }
//                     }
//                 });
//             } catch {
//                 Swal.fire({
//                     title: "Delete Error!",
//                     icon: "Error",
//                     confirmButtonText: "Ok",
//                 });
//             }
//         };

//         const addData = async (payload) => {
//             try {
//                 const res = await axios.post(
//                     "http://127.0.0.1:8000/api/kamar",
//                     payload
//                 );
//                 room.value.push(res.data.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         return {
//             room,
//             singleData,
//             pagination,
//             getSingleData,
//             searchData,
//             updateData,
//             deleteData,
//             addData,
//         };
//     },
//     {
//         persist: true,
//     }
// );
