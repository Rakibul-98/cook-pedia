
export default function BlogSection() {

    const blogs = [
        { id: 1, title: "A Tale Of Two... and why I've always loved Sundays!", pic: "https://i.ibb.co/PxGgJ9K/sprout.jpg", userImg: "https://i.ibb.co/Zxgqw08/person-3.jpg", userName: "Alice" },
        { id: 2, title: "Fave Favorite Recipes For The Big Game", pic: "https://i.ibb.co/JpqC6ZJ/macaroni.jpg", userImg: "https://i.ibb.co/k6qt1nc/person-1.jpg", userName: "Bob" },
        { id: 3, title: "Live Peacefully. Cook Fearlessly. Here's 5 tips.", pic: "https://i.ibb.co/D5KVdGz/saslik.jpg", userImg: "https://i.ibb.co/0nys17Q/person-2.jpg", userName: "Jason" },
    ]

    return (
        <div className="my-20 md:flex items-center">
            <div className="md:w-5/12 mx-auto p-5">
                <h3 className="text-4xl mb-5">Latest Blogs</h3>
                {
                    blogs.map(blog =>
                        <div key={blog.id}
                            className="flex items-center gap-5 mb-5">
                            <img className="h-28 hover:opacity-50 " src={blog.pic} alt="" />
                            <div>
                                <a href="" className="font-semibold text-2xl text-emerald-500 md:w-10/12 mb-1 hover:text-black">{blog.title}</a>
                                <div className="flex gap-2 items-center">
                                    <img className="h-11" src={blog.userImg} alt="" />
                                    <div>
                                        <p>{blog.userName}</p>
                                        <p>date</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="md:w-6/12">
                <div className="bg-gray-200 rounded-md w-11/12 md:w-9/12 mx-auto p-10 relative">
                    <h3 className="font-semibold text-2xl mb-5"><span className="font-bold">About</span> All Recipes</h3>
                    <p className="w-9/12">Each recipe on our website is thoughtfully curated and meticulously crafted, complete with step-by-step instructions, ingredient lists, and stunning visuals that bring the cooking process to life. Whether you are a seasoned chef or a novice in the kitchen, our recipes cater to all skill levels and dietary preferences, ensuring there is something for everyone to enjoy.</p>
                    <p className="w-8/12 my-5">Join us on a culinary journey like no other. Start exploring, start cooking, and let your taste buds be your guide. </p>
                    <button className="bg-emerald-400 rounded-sm font-semibold text-white px-8 py-2">Contact Us</button>
                    <img className="absolute -bottom-2 -right-3 h-[350px] overflow-hidden" src="https://i.ibb.co/LP94N7p/blog-bg.png" alt="" />
                </div>
            </div>
        </div>
    )
}
