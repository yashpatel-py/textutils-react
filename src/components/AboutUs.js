import React, { useState } from "react";

export default function AboutUs() {

	const [myStyle, setMyStyle] = useState({
		color: 'black',
		backgroundColor: 'white',
	})

	const [btnText, setBtnText] = useState('Enable Dark Mode')

	const toggleStyle = () => {
		if (myStyle.color === 'black') {
			setMyStyle({
				color: 'white',
				backgroundColor: 'black',
			})
			setBtnText('Enable Dark Mode')
		}
		else {
			setMyStyle({
				color: 'black',
				backgroundColor: 'white'
			})
			setBtnText('Enable Light Mode')
		}
	}

	return (
		<div className="container mt-4" style={myStyle}>
			<div className="card-flush">
				<div className="card-body">
					<h1 className="card-title">About Us</h1>
					<p className="card-text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione nihil recusandae culpa illo, ullam consequatur odit quibusdam numquam expedita veniam delectus obcaecati minus eius nemo aspernatur architecto ad doloremque! At ad neque accusamus numquam optio voluptatibus dolorum excepturi nihil ratione, sit quia ipsam, sunt aut sint, natus soluta impedit asperiores odit possimus ipsa? Vitae ad consectetur ea reprehenderit saepe tempore tenetur molestias exercitationem voluptatum, necessitatibus veniam rem rerum magni quae aperiam alias quasi. Ad commodi eius, assumenda molestiae rem soluta aspernatur animi dolores modi architecto laborum aperiam incidunt, doloribus eveniet culpa vero ipsam excepturi laudantium voluptatem facere sapiente repellat debitis. Fuga id excepturi tempora laudantium accusantium et sunt molestias fugiat, rem, accusamus qui tenetur minima eveniet! Ducimus similique porro dolorem enim quasi et. Amet repudiandae odio culpa modi eveniet recusandae voluptas quaerat magni sed vitae, numquam nulla molestiae itaque, nisi vero ad suscipit. Itaque architecto sit quaerat. Eum harum qui earum quod ex sit esse atque modi placeat dolor quasi consequuntur, corporis voluptatem sapiente asperiores perspiciatis autem, voluptatibus perferendis animi voluptates pariatur debitis, consequatur repudiandae architecto? Enim, voluptatibus modi at vitae amet incidunt odio, blanditiis suscipit voluptates aspernatur iusto molestiae soluta! Impedit veniam odit deleniti explicabo itaque, veritatis ducimus cumque.
					</p>
					<p className="card-text">Last updated 3 mins ago</p>
				</div>
			</div>
            <button type="button" onClick={toggleStyle} className="btn btn-primary mb-2">{btnText}</button>
		</div>
	);
}
