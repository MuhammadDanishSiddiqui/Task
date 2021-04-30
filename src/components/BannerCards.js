import '../App.css';

function BannerCards() {
    return (
        <div className="banner_cards">
            <div className="card grn">
                <button>For Carrer</button>
                <p>Looking for Career.</p>
            </div>
            <div className="card org">
                <button>For Jobs</button>
                <p>Looking for jobs.</p>
            </div>
            <div className="card blu">
                <button>For Scholarship</button>
                <p>Looking for scholarship.</p>
            </div>
        </div>
    );
}

export default BannerCards;
