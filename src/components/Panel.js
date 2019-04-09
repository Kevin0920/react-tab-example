import React from 'react';

const Panel = (props) => {
    console.log(props);
    return (
        <div className="container">
            {
                props.activeTab.title === 'Meat' ?
                <section className="card">
                <h2 className="card-header">Content 1</h2>
                <p className="card-body">Bacon ham hock kevin boudin rump leberkas. Spare ribs kielbasa shankle hamburger tongue jerky pork chop bresaola. Shoulder pork belly short loin strip steak prosciutto frankfurter. Beef kevin t-bone venison pork belly meatball chuck short loin bresaola doner picanha. Cupim short ribs short loin brisket bacon rump porchetta venison t-bone drumstick pork chop hamburger meatball. Pork loin frankfurter shankle pork picanha pastrami. Pork loin pancetta venison short loin frankfurter.</p>
                <p className="card-body">Shoulder doner swine ball tip venison porchetta. Capicola beef meatball, tri-tip strip steak kevin jowl cupim venison. Tongue fatback ribeye leberkas biltong t-bone. Pancetta frankfurter meatloaf, pig t-bone picanha ham fatback chicken drumstick short loin cupim short ribs cow. Beef short ribs ribeye meatball filet mignon andouille frankfurter swine turducken bresaola spare ribs cupim picanha cow. Drumstick tenderloin ham hock shoulder ground round, beef strip steak flank. Salami rump beef ground round.</p>
                </section> : null
            }
            {
                props.activeTab.title === 'Vegeterble' ?
                <section className="card">
                <h2 className="card-header">Content 2</h2>
                <p className="card-body">Atlantic herring jellynose fish Siamese fighting fish pollock: cobbler snakehead sea raven! Freshwater shark sergeant major clingfish sweeper galjoen fish mudfish longjaw mudsucker. Death Valley pupfish pomfret electric ray zingel African glass catfish squawfish yellowtail snapper grunt sculpin.</p>
                <p className="card-body">Pike ribbon sawtail fish common tunny, yellowfin grouper pearl perch mooneye three-toothed puffer Bengal danio. Black sea bass turbot, "madtom swallower northern anchovy Red whalefish; Redhorse sucker." Filefish yellow jack Japanese eel longfin smelt stargazer saury yellow weaver flounder white croaker pink salmon. Pacific herring, whiff pink salmon jack wallago! Yellow jack alfonsino pike chubsucker, yellowtail collared dogfish rivuline tailor eelblenny silver carp; smalltooth sawfish--sea chub powen giant gourami. Inconnu false trevally pompano, half-gill roundhead black dragonfish damselfish: king of herring.</p>
        </section>
        :null} 
        {
            props.activeTab.title === 'Profile' ?
            <section className="card">
            <h2 className="card-header">Content 3</h2>
            <p className="card-body">Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>
            <p className="card-body">Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.</p>
            </section>
        :null} 
        </div>
    )
};

export default Panel;