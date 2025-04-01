import React, {useContext, useEffect} from 'react';
import {UserContext} from '../../context/userContext'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {useState} from 'react';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {Select, SelectItem, SelectTrigger, SelectValue, SelectContent, SelectGroup} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import createListing from '../lib/createListing';



const SellPage = () => {
    const {user, isLoading} = useContext(UserContext);
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const categories = ["T-Shirts", "Hoodies", "Gameday", "Pants", "Accessories", "Furniture", "Cosmetics", "Hats"];
    const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large"];
    const conditions = ["Worn", "Used", "Slightly Used", "Like New"];

    const [itemData, setItemData] = useState({
        title: "",
        size: "",
        condition: "",
        description: "",
        thumbnail: "",
        userID: "",
        userEmail: ""
    });

    useEffect(() => {
        if(!isLoading && (!user || !user.email || !user.id)) {
            navigate('/login');
        } else {
            setItemData({...itemData, userID: user.id, userEmail: user.email});
        }
    }, [user, isLoading]);


    const handleImage = async(e) => {
        const image = e.target.files[0];
        const base64Image = await toBase64(image);
        setItemData({...itemData, thumbnail: base64Image});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(itemData);
        createListing(itemData);
    }

  
    const values = {
        1: 33,
        2: 66,
        3: 99
    };

    return (
        <div style={{backgroundColor: "#f2f4fa"}} className="flex min-h-11/12 fixed bottom-0 items-center justify-center w-full flex-col pt-3 pb-3">  {/* selling page div */}
            <h1 className="text-4xl font-bold mb-5">
                Sell Your Gator Gear
            </h1>
            <h2 className="text-xl mb-10">
                S.Y.L.G is a sustainable, safe and responsible way to buy and sell secondhand UF apparel
            </h2>

            <Progress className="w-3/5 mb-10" value={values[page]}>

            </Progress>


            <Card className="flex w-3/5 justify-center items-center">
                {page === 1 && (<><CardTitle className="text-4xl">
                        Item Details
                    </CardTitle>
                    <CardDescription className="text-xl">
                        Let's get to know your Items!
                    </CardDescription></>)
                }
                {page === 2 && (<><CardTitle className="text-4xl">
                        Upload Thumbnail
                    </CardTitle>
                    <CardDescription className="text-xl">
                        Show the people what they want to see!
                    </CardDescription></>)
                }

                <form className="w-3/4 flex flex-col mt-10" onSubmit={(e) => handleSubmit(e)}> {/* be sure to include onSubmit later */}
                    {page === 1 && (<><div className="flex flex-row w-full mb-4">

                        <div className="w-full mr-2">
                            <h1 className="text-xl ">Enter a title
                                <span className="text-red-400">*</span>
                            </h1>
                            <Input placeholder="Title of item" onChange={(e) => setItemData({...itemData, title: e.target.value})}/>
                        </div>
                            
                        <div className="w-full mr-2">
                            <h1 className="text-xl ">Choose a size
                                <span className="text-red-400">*</span>
                            </h1>
                            <Select onValueChange={(value) => setItemData({...itemData, size: value})}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a size"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {sizes.map((size) => {
                                            return(
                                                <SelectItem value={size}>
                                                    {size}
                                                </SelectItem>
                                            )
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-full">
                            <h1 className="text-xl ">Select a Condition
                                <span className="text-red-400">*</span>
                            </h1>
                            <Select onValueChange={(value) => setItemData({...itemData, condition: value})}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="How worn is the item?"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {conditions.map((size) => {
                                            return(
                                                <SelectItem value={size}>
                                                    {size}
                                                </SelectItem>
                                            )
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>


                        <div className="w-full mt-4">
                            <h1 className="text-xl"> Description 
                                <span className="text-red-400">*</span>
                            </h1>
                            <Input onChange={(e) => setItemData({...itemData, description: e.target.value})} className="h-24" placeholder="Description of your item..."/>
                        </div>
                
                        <Button disabled={!itemData.title || !itemData.size || !itemData.condition || !itemData.description} onClick={()=>{setPage(2)}} className="cursor-pointer mt-5"> {/* page 1 -> page 2 */}
                            Continue
                        </Button>
                    </>
                )}

                {page === 2 && (<>
                    <div className="w-full flex flex-col">
                        <div className="flex justify-between w-full">
                            <input className="border-1 border-black" type="file" name="thumbnail" accept=".jpeg, .png, .jpg" onChange={handleImage}/>
                            <Button disabled={!itemData.thumbnail} type="submit" className="cursor-pointer mt-5"> {/* create listing */}
                                Submit
                            </Button>
                        </div>
                        {!itemData.thumbnail ? <p> </p> : <img className="block rounded-2xl w-2/5" src={itemData.thumbnail}/>}
                    </div>
                </>)
                }
                </form>
            </Card>
        </div>
    )
}

export default SellPage


const toBase64 = (image) => {
    return new Promise((res, rej) => {
        const fr = new FileReader();
        fr.readAsDataURL(image);
        fr.onload = () => {
            res(fr.result);
        };
        fr.onerror = (err) => {
            rej(err);
        }
    })
}