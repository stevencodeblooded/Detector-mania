import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Introduction = () => {
  return (
    <div>
        <section className="max-w-7xl mx-auto px-3">
            <div className="grid grid-cols-7 items-center">
                <p className="col-span-1 uppercase w-fit font-semibold text-lg bg-emerald-500 text-white px-8 rounded-lg py-1">news</p>
                <div className="col-span-6">
                  <hr className="border-b border-emerald-600"></hr>
                </div>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col gap-5 my-20">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-snug text-left md:text-center">Dolor sit amet consectetur erferendis adipisci, facere quis magni laboriosam fugiat a.</h1>
                <p className="text-base text-left md:text-2xl md:text-center max-w-5xl mx-auto text-gray-400 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis reprehenderit nostrum soluta dicta repudiandae voluptate dignissimos delectus minus mollitia? Possimus, beatae deserunt?</p>
                <p className="flex text-xs md:items-center justify-center gap-3 md:text-lg text-gray-400"><span className="hover:text-emerald-500"><Link to={''}>Home</Link></span> <FontAwesomeIcon icon={faChevronRight} /> <Link to={'news'}  className="hover:text-emerald-500">News</Link> <FontAwesomeIcon icon={faChevronRight} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </section>
    </div>
  )
}

export default Introduction