function Sprint1() {
    return (
        <main className="sprint-page">
            {/* Sprint 1 Sub-Navigation */}
            <nav className="sprint-subnav">
                <a href="#market-research">Market Research</a>
                <a href="#business-strategy">Business Strategy</a>
                <a href="#project-charter">Project Charter</a>
                
            </nav>
            <div className="sprint-header">
                <h1>Sprint 1</h1>
                <p>
                    Explore our market research, business strategy, and
                    project charter for Sprint 1.
                </p>
            </div>

            <div className="sprint-content">

                {/* Market Research */}
                <section id="market-research" className="sprint-section">
                    <div className="section-heading">
                        <h2>Market Research</h2>
                        <a
                            href="/"
                            download
                            className="pdf-button"
                        >
                            [PDF]
                        </a>
                    </div>
                
                    <div className="sprint-topic">
                        <h3>Aggregate Findings</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>

                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Top Pick: Deep Dive</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Integer
                            posuere erat a ante venenatis dapibus posuere velit
                            aliquet.
                        </p>

                        <p>
                            Maecenas faucibus mollis interdum. Cras mattis
                            consectetur purus sit amet fermentum. Vestibulum id
                            ligula porta felis euismod semper.
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>What Didn't Work / What We Pivoted From</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam quis risus eget urna mollis ornare vel
                            eu leo. Aenean lacinia bibendum nulla sed
                            consectetur.
                        </p>

                        <p>
                            Curabitur blandit tempus porttitor. Etiam porta sem
                            malesuada magna mollis euismod. Donec ullamcorper
                            nulla non metus auctor fringilla.
                        </p>
                    </div>
                </section>

                {/* Business Strategy */}
                <section id="business-strategy" className="sprint-section">
                    <div className="section-heading">
                        <h2>Business Strategy</h2>
                        <a
                            href="/"
                            download
                            className="pdf-button"
                        >
                            [PDF]
                        </a>
                    </div>

                    <div className="sprint-topic">
                        <h3>The Strategy-to-Project Chain</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed posuere consectetur est at lobortis.
                            Maecenas sed diam eget risus varius blandit sit amet
                            non magna.
                        </p>

                        <p>
                            Aenean eu leo quam. Pellentesque ornare sem lacinia
                            quam venenatis vestibulum. Cras justo odio, dapibus
                            ac facilisis in, egestas eget quam.
                        </p>
                    </div>
                </section>

                {/* Project Charter */}
                <section id="project-charter" className="sprint-section">
                    <div className="section-heading">
                        <h2>Project Charter</h2>
                        <a
                            href="/"
                            download
                            className="pdf-button"
                        >
                            [PDF]
                        </a>
                    </div>

                    <div className="sprint-topic">
                        <h3>Scope Boundary</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante venenatis dapibus
                            posuere velit aliquet. Donec id elit non mi porta
                            gravida at eget metus.
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Assumptions</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum id ligula porta felis euismod
                            semper. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros.
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Stakeholder Register</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Nullam id dolor id nibh
                            ultricies vehicula ut id elit.
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default Sprint1;