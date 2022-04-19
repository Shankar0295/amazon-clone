import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { useCartContext } from '../../cartContext';
import { db } from '../../firebase';

const Orders = () => {
    const [{ user }, dispatch] = useCartContext();
    console.log(user)
    const [data, setData] = useState([]);


    useEffect(() => {
        getData();
    }, [user])

    const getData = async () => {
        let arr = [];
        if (user) {
            const querySnapshot = await getDocs(collection(db, "amazon-clone", user.uid, "orders"));
            console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                arr.push(doc.data())
            });
            setData(arr)
        } else {
            setData([])
        }
    }

    console.log(data, "Data")
    return (
        <div>
            orders
        </div>
    )
}

export default Orders
