function Card() {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-3">
            <div class="col">
                <div class="card text-bg-primary mb-3">
                    <div class="card-header">
                        <h5 class="card-title">Card 01</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Welcome to my Website.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-bg-danger mb-3">
                    <div class="card-header">
                        <h5 class="card-title">Card 02</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">All I have so far are these cards and a Navbar.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-bg-success mb-3">
                    <div class="card-header">
                        <h5 class="card-title">Card 03</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Please enjoy!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;