import css from './contacts.module.css'

const Field = (props) => {
	const click = e => {
		e.preventDefault()
	}
  

	return (
		<article className={css.field}>
			{
				!props.show ? <h2>Drop a Line</h2> : null
			}
			<form>
				<input type='text' name='name' placeholder='Name' />
				<input type='email' name='email' placeholder='Email' />
				<div>
					<input type='text' name='massage' placeholder='Massage'></input>
				</div>
				{props.show ? (
					<div>
						<select name='select'>
							<option value='value1'>Earrings</option>
							<option value='value2'>Necklaces</option>
							<option value='value3'>Bracelets</option>
							<option value='value4'>Rings</option>
						</select>
					</div>
				) : null}

				<div className={css.check}>
					<input type='checkbox' className={css.checkbox} />
					<h5>I have read and agree to the Privacy Policy</h5>
				</div>
				<button onClick={click} className={css.btn}>
					Send Massage
				</button>
			</form>
		</article>
	)
}

export default Field
