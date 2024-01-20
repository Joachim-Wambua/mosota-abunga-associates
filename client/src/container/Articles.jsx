import { Typography } from "@mui/material";

const Articles = () => {
  return (
    <>
      <section id="articles" className="mt-8">
        <div className="text-center">
          <Typography
            variant="h3"
            style={{ marginBottom: "0.75rem", color: "#AC2333" }}
          >
            Latest Articles
          </Typography>
        </div>
        <div className="container">
          <div className="article_card">
            <figure className="card__thumb">
              <img
                src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705769907/article-img_fqztzh.png"
                alt=""
                className="card__image"
              />
              <figcaption className="card__caption">
                <h2 className="card__title">What is an Encroachment?</h2>
                <p className="card__snippet">
                  Recent Supreme Court of Kenya Decision - A Timely Reminder
                  about What Is, and What Is Not, an ‘Encroachment’ or
                  ‘Building’ for the purposes of the Property Law Act 1974. In
                  the recent decision of Bartholomeusz & Anor v Body Corporate
                  for 211 Ron Penhaligon Way Offices Community Titles Scheme
                  25277
                </p>
                <p className="mb-3">By: Victor Mosota</p>
                <a href="" className="card__button">
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="article_card">
            <figure className="card__thumb">
              <img
                src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705769689/article-img-2_exdjy1.png"
                alt=""
                className="card__image"
              />
              <figcaption className="card__caption">
                <h2 className="card__title">Court Affidavits</h2>
                <p className="card__snippet">
                  A Court affidavit is an intricate, highly regulated and
                  immensely important statutory document. This is because an
                  affidavit is a written statement containing the actual
                  evidence of the person swearing, or affirming, the affidavit,
                  given in the first person (as if the person was giving the
                  evidence orally during
                </p>
                <p className="mb-3">By: Victor Mosota</p>
                <a href="" className="card__button">
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="article_card">
            <figure className="card__thumb">
              <img
                src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705769691/article-img-3_r5pl3f.png"
                alt=""
                className="card__image"
              />
              <figcaption className="card__caption">
                <h2 className="card__title">Retaining Land Disputes in Kenya</h2>
                <p className="card__snippet">
                  If you and your neighbour are having a dispute about who has
                  responsibility for the maintenance, repair or replacement of a
                  retaining wall dividing the properties, this article will give
                  you valuable insight into the legal landscape governing
                  retaining walls in Kenya and what your options may be to
                  resolve the dispute.
                </p>
                <p className="mb-3">By: Victor Mosota</p>
                <a href="" className="card__button">
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
