import React from 'react'
import './style-guide.scss'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

export const StyleGuide = () => (
  <Layout>
    <div className="content">
      <section>
        <div className="style-guide grid col-2 gap-looser">
          <section className="grid-item">
            <h4>Color</h4>
            <div className="color-swatch__group grid col-4 gap-tight f-regular">
              <div className="color-swatch__item primary500 fc--white500"></div>
              <div className="color-swatch__item secondary500"></div>
              <div className="color-swatch__item tertiary500"></div>
              <div className="color-swatch__item gray500"></div>
            </div>
            <h4 className="mtbase fs-m f-regular mtloose mbbase">Button</h4>
            <p>
              <button type="button" className="btn btn-primary">
                Primary
              </button>
              <button type="button" className="btn btn-secondary">
                Secondary
              </button>
              <button type="button" className="btn btn-tertiary">
                Tertiary
              </button>
            </p>
            <h4 className="mtbase fs-m f-regular mtloose mbbase">Forms</h4>
            <div className="grid  gap-base f-regular fs-l fw-base f-up">
              <input type="text" className="input-field" placeholder="Name" />
              <input type="email" className="input-field" placeholder="Email" />
              <textarea
                name="test"
                id=""
                cols="30"
                rows="10"
                placeholder="Say hello"
              ></textarea>
              <form>
                <fieldset>
                  <legend className="h4">
                    Please select your preferred contact method:
                  </legend>
                  <div>
                    <label className="input-label" htmlFor="contactChoice1">
                      <input
                        type="radio"
                        id="contactChoice1"
                        name="contact"
                        value="email"
                        className="input-checkBox"
                        checked
                      />
                      Email
                    </label>
                    <label className="input-label" htmlFor="contactChoice2">
                      <input
                        type="radio"
                        id="contactChoice2"
                        name="contact"
                        value="text"
                        className="input-checkBox"
                      />
                      Text
                    </label>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>
          <section className="grid-item">
            <h4>Typography</h4>
            <div className="typefaceDemo-group grid col-4 gap-loose">
              <div className="typefaceDemo">
                <div className="typefaceDemo-title font-base">Aa</div>
                <span className="typefaceDemo-name">Geomanist Regular</span>
              </div>

              <div className="typefaceDemo">
                <div className="typefaceDemo-title font-light">Aa</div>
                <span className="typefaceDemo-name">Geomanist Light</span>
              </div>

              <div className="typefaceDemo">
                <div className="typefaceDemo-title font-book">Aa</div>
                <span className="typefaceDemo-name">Geomanist Book</span>
              </div>

              <div className="typefaceDemo">
                <div className="typefaceDemo-title font-medium">Aa</div>
                <span className="typefaceDemo-name">Geomanist Medium</span>
              </div>
            </div>
            <hgroup>
              <h1 className="h1">H1</h1>
              <h2 className="h2">H2</h2>
              <h3 className="h3">H3</h3>
              <h4 className="h4">H4</h4>
            </hgroup>
            <p>
              <Link to="#">This is an example of a Text link</Link>
            </p>
            <p>
              This is a paragraph.....Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ut error excepturi at nobis mollitia sunt.
              Consequatur eos iure blanditiis,tempora, asperiores placeat nisi
              officia, nam beatae a quam recusandae. Voluptatem minima, culpa
              quia praesentium excepturi minus libero veritatis doloribus quae,
              unde vitae, quam et aperiam!
            </p>

            <p className="drop-cap lead-in">
              This is a Lead Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ut error excepturi at nobis mollitia sunt. Consequatur eos
              iure blanditiis,tempora, asperiores placeat nisi officia, nam
              beatae a quam recusandae. Voluptatem minima, culpa quia
              praesentium excepturi minus libero veritatis doloribus quae, unde
              vitae, quam et aperiam!
            </p>
          </section>
        </div>
      </section>
    </div>
  </Layout>
)
