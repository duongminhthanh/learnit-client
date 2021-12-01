import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
	return (
		<Row className='mt-5' style={{ marginRight: 0 }}>
			<Col className='text-center'>
				<Button
					variant='primary'
					href='https://www.facebook.com/minhthanh.duong.5686/'
					size='lg'
				>
					Click here to contact me
				</Button>
				<Button
					variant='primary'
					href='https://www.facebook.com/hachoahoaha'
					size='lg'
				>
					Click here to contact my temamate
				</Button>
			</Col>
		</Row>
	)
}

export default About
