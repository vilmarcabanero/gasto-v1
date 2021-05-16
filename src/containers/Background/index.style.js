import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: ${({ theme }) => theme.particleColor};
	transition: all 0.5s ease;
`
