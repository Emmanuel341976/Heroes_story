export function Selector ({label, selectoptions, value}){

	const obj = {
		name:"julien",
		las_name:"viatge",
		yuyu:{
			lol:"mdr",
			rere:"lulu"
		}
	}

	/* class car {

		color="red"

		start(){
			console.log('start')
		}
		moteur(){
			console.log("vrouuum")
		}
	} */

	const car = {
		color:"red",
		start: () => {
			console.log('start')
		},
		moteur: () => {
			console.log('vrouuum')
		}
	}

	/* const oppel = new car() */
	const oppel = car
	oppel.color = "yellow"
	oppel.start()
	oppel.moteur()

	console.log(oppel["color"])

	console.log(obj.yuyu.rere)

	
	return <div>
		<label>{label}</label>
		<select className="select-book">
		
		{selectoptions.data.map((option) => 
		// console.log(option))
		<option key={option.id} value={option[value]} >{option[value]}</option>)
		
		}
		</select>
		
		</div>
			
}