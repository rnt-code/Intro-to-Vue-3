app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            require: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li vfor = "(review, index) in reviews" : key="index">
                {{ review.name }} gave this {{ review.rating}} stars
                <br/>
                "{{ review.review}}"
            </li>
        </ul>
    </div>

    `
})