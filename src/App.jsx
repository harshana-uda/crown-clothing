 
export default function App() {

    const categories = [
        {
            id: 1,
            title: 'Hats'
        },
        {
            id: 2,
            title: 'Jackets'
        },
        {
            id: 3,
            title: 'Sneakers'
        },
        {
            id: 4,
            title: 'Womens'
        },
        {
            id: 5,
            title: 'Mens'
        },
    ]

    return (
        <>
            <h1>Welcoem to <code>crown clothing</code></h1>
            <div className="categories-container">
                {
                    categories.map(({ id, title }) => {
                        return (
                            <div className="category-container" key={id}>
                                {/* Place category image here */}
                                <div className="category-body-container">
                                    <h2>{title}</h2>
                                    <p>Shop Now</p>
                                </div>
                            </div>
                        )
                    })
                }  
            </div>
        </>
    )
}