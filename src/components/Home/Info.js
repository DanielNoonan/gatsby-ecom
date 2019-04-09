import React from "react"
import { Link } from "gatsby"
import Title from '../Globals/Title'

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
      <Title title='our story' />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse adipisci iste deleniti officia cum laudantium fugiat sed, veniam hic reiciendis eaque, voluptatibus excepturi vero ab impedit provident facilis! Sequi deserunt fugiat reiciendis commodi necessitatibus delectus voluptatem voluptatum provident doloremque doloribus rerum, est quaerat quo praesentium? Quae deleniti harum aperiam.
            </p>
            <Link to='/about/' >
            <button className='btn text-uppercase btn-yellow' >about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
