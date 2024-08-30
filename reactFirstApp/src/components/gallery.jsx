
function Gallery({
  title = "title",
  img = "https://dummyimage.com/720x600",
  price = "-",
  onPress}) {
  
  return (
    <div className="p-4 md:w-1/3 cursor-pointer" onClick={onPress}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={img}
          alt={title}
        />
        <div className="p-6">
          <h2 className="text-base font-medium text-indigo-600 mb-1">
            {title}
          </h2>
          <h1 className="text-2xl font-semibold mb-3">{price}</h1>
          <a href="{ProductDetail}"><p>Learn more...</p></a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
