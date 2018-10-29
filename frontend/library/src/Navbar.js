import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl} from 'react-bootstrap';
import './Navbar.css';

const Navigation = () => {

	return (
		<Navbar inverse collapseOnSelect fixedTop>
	  		<Navbar.Header>
	    		<Navbar.Brand>
	      			<Link to='/'>
	      				<img className="sricity" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/IIIT_Sri_City_Logo.png/220px-IIIT_Sri_City_Logo.png"  />
	      				Project B-02
	      			</Link>

	    		</Navbar.Brand>
	    		<Navbar.Toggle />
	 		</Navbar.Header>
	  		<Navbar.Collapse>
			    <Nav>
					<NavItem eventKey={2} href="#">
			    		<i class="fa fa-chevron-left"></i> Back
			    	</NavItem>
			      	<NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
			        	<MenuItem eventKey={3.1}>Action</MenuItem>
				        <MenuItem eventKey={3.2}>Another action</MenuItem>
				        <MenuItem eventKey={3.3}>Something else here</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.3}>Separated link</MenuItem>
			      	</NavDropdown>
				    <Navbar.Form pullLeft>
				     	<FormGroup>
				    		<FormControl type="text"  placeholder="Search" />
				    	</FormGroup>{' '}
				    </Navbar.Form>
				    
			    </Nav>
			    <Nav pullRight>
					<NavItem eventKey={2} href="#">
			    		<i class="fa fa-bell"></i> Notifications
			    	</NavItem>
			    	<NavDropdown eventKey={3} 
			    		title={ <span>
			    				<i class="fa fa-user"></i> Welcome, Paras!
			    			</span>
			    		} 
			    		id="basic-nav-dropdown">
			        	<MenuItem eventKey={3.1}>
				        	<Link to='/suggest'>
				        		Suggest a Book
				        	</Link>
			        	</MenuItem>
				        <MenuItem eventKey={3.2}>
					        <Link to='/donate'>
					       		Donate a Book
					        </Link>
				        </MenuItem>
				        <MenuItem eventKey={3.3}>
				        	<Link to='/fine'>
				        		View Dues
				        	</Link>
				        </MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.3}>Logout</MenuItem>
			      	</NavDropdown>
					<Navbar.Brand>
	      			<Link to='/profile'>
	      				<img className="sricity" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDRAQEBAKEBAKDRYNCwkJDRsICQgWIB0iIiAdHx8kKDQsJCYxJx8fLTstMT01MENDIyszQT9BNzQtLisBCgoKDg0NFQ4PFS0lFRkrKys3Ky4rKzc3LTctKy03MCstLTctKy0rKys3KzcrLS0tKystKy0tLSsrLSsrKy0rK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABCEAABAwIEAwUFBQcCBQUAAAABAAIDBBEFEiExBkFREyIyYXEHgZGh8BRCUrHRIzNTYsHh8XKSFiRDVKIlRGNkgv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACMRAAICAgICAwADAAAAAAAAAAABAhEDIRIxBEETIlEyYXH/2gAMAwEAAhEDEQA/AM1fiBfKHu1U/Slk0ZJAGmhOirEFO4WJBAUxMycMHZxyFvVrd1RyvSZx0L4Nw4auoc10jWNbtfS6Xr+H5aWdoiewgHR3RMqakrzqyKUZuY7t0+ZgeJvt3X//AKJNlR17YYuS6NTw2QSUTYXyMdI9ouBuFUsa9nDs5ew3GW581DYbWz4XNepY89pbK7cBaLHxzSCBjnPGZzdWJN3ofpGMNwmQyujDXF0d72FytW9kwkZE+NzXAX1LhYJLBeKcPdUkmJrS8/vHC7Sr1hNTBIwmDJlvrkFroMZj9GCLdQXFPFENBCXvIc86R07f3spSilhVd4o4wpqBpD3tdNluylb45P0WT4p7R8RnfeKTsGcooGi49SVW5XPqXukmfI6Qn9pI45pAfNBySHULNHg9rc1zmpqcgnQslLWsHmmNb7TMQ7YOYKcRSHuw5M9h6qjwyZRldbM3wuAuyRNqqqsQRax/D4R5pFN2U4KjYqL2qRiwqYZGcjLD+1YFcMF4po6sDsZonE/9PNlkHu3XnOnnDmG+gJyl2+U+fkkrhr+6bFp7k0TuycEU/TF4fh6uZbyXSsBwP2i11IA15ZVRjlI61Q30dz96vuE+0WKoBIIjcwXfDU2jd7uqYHRoK6ofB+IIKlt2PjJ2IacwCmAUFoJwoqMuFAKK5xZWupozLFE6R52DN1lONcc1znEOb2d25cpGq3aRoIIIBHQi4VXx3hynmeHPY3u7Brd1oxje0ZylVIwVjpJXkhrnEm5yi5XVtvD2AU8U7y1rSSNiL2QVuRGv0zXgjDhVPtI3ut8tCtRp8Oha0NEbLN6i5UFwPhoipw61i/4qztas0r0SOxxNA0a0W/lThpSIRwgxije1iWH7O1rheQ+B3NY5IXC176fJaN7VqomZjbEBv3uTlWsAijmqomPAIkNiBuni6HUbVkVSTOuBZxv4epWw+zSeaxaWOazLqTsVIUHA9FG4PDLluzTo1TxiZBA/sw1oaCfIJWw23oiuLOJY6SGQ9o1smQ9kw6mQrAsTlqKiZ08j3SOebuc5/aFv9kbGsQdUVUsj3ukLpHZLus0C+gCQYQGD94HX2+6pSdFIxoFHVFr9RY82nUFLTVjRJctI5OaDkJ9EgHtzd7MHDUHxhy5O7Nrb4cklWOgxqG/dN7/dk5Ju9/T56gpB7Pd16oo+P5lOkkAdQVRZcDLZ/jY7UFc7SxNibfhOrU1LkQu+uQR0Yfibre/UckYzncl5HNvJR5f9ckM6ICy4FjLqeZksTntLHXLQe5IOi9I8N4q2pgY9pvmAPmvKNE1znAAXvvyAWy8BYjJCAxguMvhPJKZmuSygC55bk6ALglBbmBuAL3GoVcxSqdJRvN8rrcjsqnhPFUkLckmsd8pkJutQtl5k4ihu9rTd7Pu73VZoMbmnq3teMrWE25XVZZjsQxJpjF2yHvHdT7cRgbPK8kDukjkihWyc4cbeecoKrcO8ZxRyyNOznePqgi2ZFnp2BrQ0bBLscs3b7RC1rAY3E/f8lL4JxvFK1xk/ZkOs1p0JTkqZdWoybQTh7Q5pBDhcapcOQCVL2jYKKilLxa8XlqVTOCOF5zUxzkZWRm+Z3NaxiMXaQvbr3mlUCrGINiLGAsZHezm8wig2XXF8cjhiLg5pLdwDqqbjXHrZKWeMCxfGWse3cGyp1T24BMjn97qd0wrYoxC4h5L7eHcFZgV2QAYL6/AJy+N7G6GTKdcrtWpoX5dt9+qUNUXeK56a2AUWdKCPmLt9TyJ8S42/n7iusjzH60TyKm0+Xkg5UPGFjRjSfrZHZASdvf0Ug2nThkH1yS8yqxjBtD9dEWXDtLgqZbFp9aJTshbql5DfGmVN8RBsRt80QNViqaQHlr5blRVRBa4t/dUjKyE4UxCEEG4v8bK+cMYzIyzSQCRbPsqNTu0tzHxU1h9QOzLTcGPvRuG5RbEovmJY5O2FzQ+4d97oq9JWl1M4FwJ/8ipOSz6EfjePeqjU3Z3Te/PzWWyUtFj4NbG+bNIWjJqM2l0MfxIPle1lwG90uGoKq9PUFurXOHoU4FdZpFrl+7uaYUc0VQwXDt777LqhmT2JQRCjfJPZnRnZzwmc3sqpztLI3pbSyeN9pdHuRNrr4LhHPtJodNZNerCLLhTkjrpMYs4AnjAEVbJYcn7BH/4YxJnhqoj/AK+amIeN8PdtURjycMqct4noztUQf7rJvkmbhH8K59gxdn/bvt/Na6YYlT4w4aQstaxDXXurr/xBSf8AcU/+9BuO0p0FRTX6ZwCisswPFExnE+HcRebyQTabCMZmqIquHqsMd/y9UNP4RK9EMna4Xa5jh1Y4PCGbzTfNJifDG7PJMo19NOhC5EL+9X32kcHmnrs0OUxV2aaNg3hP3h87qoQ04b4tDf4qinaGUNhqaA9FMU1C4i4tcmwaDqUthz4mEB2Sw8WbUBWCFtK+zo3tBHIatUJzOuEFRACke0kFuvTe6O2mvpYgje+llPPII1bd3KQHUJBkzYvGQb65tyl5lOJGxUjnaAfE5QhNSPbu13rulZ+I4WkgAnztZN3cRNc2w57pvsxW4r2Eyaef5KJq2am/+VO0kzZdi2/4TuEatwgOY5w0LRfXZFSp7JzjyWilNFnqXw+G8jWtuS/pqAFGzROzEiw5E7K38I01nRvNr2IHoqy6s5VrQ9xkmGJgaPDZViukzOuRqVbOMjaInzVFMpJ1TY3ojkWwzGpXKCEnmsuCRMIKCDpqghDUFv1ugsYnOOq18JpGRnIfst5MgtmN1W2cQ1Q/6gP+pgcpX2hO/wCbjb/DpmjrZVdJGKo6G9kw3iSfmIHesdrpQcRu+9DTn0GS6grLqbggcmTpxyFws6lb6xyltknhUsclVEzs32mmY0NL9gSoa310UxwhHmxKjb+KpZp11SyikgqTs36LgihZqxlTGesFU+Mj5pwOHQ3wVWLMH4ftPaN+YKnQguctZReI8NyGMuqamoyh7ezqcrzFe3QBZhjlM0yE2aA3RjGi1lZ8Or5pKqpike5wiLyxr9S05lCY5hFQXEsY5zTfVmpCip/c7HiqNdlVljbci73Fv4dguwTZToXjXrdKz4bMGEG7CDqx7uyDwh9jJaxjGl0mznMPaNJXV9aOZJp9Fx4WEk8chALhHpm3AUZjLLOcHkjKdtir3wHhBpcPfn8cjs8g3y9AqZxnAXTEtB/mtqVywdzdHXJVDZUp52ZrBotfdxtdLQGPQlnvYczQmM1OTYaXafQFTTGRmBjGxkPaO9UvdZ3uXW1o403fQ5pIRmDmG38zdCrnSgOYBp32lvkqVSMy/qNirVgZJAB1GYEeShJP2dCqtFMloy52QX0ecxtorVw5S5SzK7MI22d+JpSVRThks7bC+dx8xfVOuFDft3egHRF5G9CS8eKg5+xhxlPcBnmqkCGlTfFk37ayrbjc/Wq6oLR5sux2X5t9Ei4cgiZijR+adiizbIJJxHVdSgZKe0c/+qTNG0TWs+SrICsPH8mbFqsjbtbfJV9CPRaXZxcsurqcBwBWL2eRZsZoh/8AYB+AKrwKtPswbfG6PfSQnr90pZdMaPZ6TIRClAiOC5UWM4xjCBT4pJI3wVjM45ZTfX5qTpom5bGykuLKe4jf/DuLqGp3n3deS5Mq2ehilcUdqOH6abxAE+Tb2XIMBgpwXNaL8nEWIT2Ooyjf9AmOIYmwDM91mN3P3Sp8nVFOOyQZpSvPUqhYoyzy7z2KtbsdgNPYOBEneDgdFXazFqbNkkDLO2a52R59FbFoE1YwPD0dQzM0ZXHpsVHS8PyRnUH4bq0YBUta57ASWtPcLtXAFTFTMCNm/mn+Vp0J8SZQqagsdRy57Kw4RDY/mlagsNyA33ckph4sf9QVHO0JworvEs4bWy5T90ZrdbJ3w4zK14/C3XzKLPTB75XPaLPkEhl5mx0CkMGgu2U9blZJVZLPPSiUjiM3nN1D5ApXiA/t3DzUUGkLsj0ebII4a2RiLIpK5muUWKccgljfoghYw74tfmrql34qh3moROsSnL5pHfieXeuqbHqtHSHfYVBBdTABZXb2Pw5sahP8OKR/poqUtB9iUd8Vc7+HSuPpeySfQ0ezebri4uErnLDfEIBJC9hF7sJHUHks/jltfX3bLRnFZdiwMdRLGfuyG3Qa6KOaOrOnxpdoeGcu06pxVshNLJG8tIlYQ6+tiqxV1xYCfLfYKCZxIy5EnbSFu0bBla5c8ccn0dTmuhrPelf2Vw6O945Bo1Nn1kZfmLWk8pD3nKbfW1E0Tg2gBiLbFxiL3AdbqC7O2nYnTk9uUhdmP+yU4y9E7gGJtZIcx7svdLjuDyKmquutsbg7WNwVR6oAM/dyNJ8PZnMSlcOrXOs119OTvEEJ403yBGbWmWyCe5Hn8FOUfhJ8iR5Kr0b7WurFTVAaNeiRLaRsj+rZD1bG5gy7gGuvlvcEqxYfS5aVzhsRuq5iT80oLRoDqrJTY/EaTsA2xa3Uq2WLXR5uKVttszHGGXnefNNAwc9k+rml8z7bZkq3DgY8wOrdwuhPjQvC7Id0I7QDkTr1UpNg4zAs2sjYcxnajMBYKdfKy5y5bBLOT9DwhF9kA2mIBBGrea6pNrcwNhq48hqgsmxWkuiiuOp9Vx3JcuuFUFOhAfXkuFBYwZaZ7CmXrql34KUAddXLMrLSfY26Rrqt8TMz8jGtJORrUs+hodm4lJkeqimYjM2EvljAe02ayF3aB6c0FZI82fBJGLXEjiHBy5yw7+Ky3j/EYRiJYx13NjAqR91ruQ9bK7caY6KGifKC3tXjs6ZhOrnnn7t15/rJnOJeXOL3OLnPJu5x6puPJGjPi7RaqqTtGFp5m45kBPKClYyIBoZmte7m3DlXMPrHtpRO6zm5zE4DxRkFWHCcRhkAINjzaVyTi10d8Jp9kdW40+Jxa6ORh/8AjdZpUY7ExK6+V9+vVXLEKyDsyHxxv3sH9VV2sh1LO5Y+C+dqpiaa6GyTf6FA02A8zq5JwRgSXHv6JSSdoB8vgU2irRnA7tiddbAKtEHJWTsDblvl804qa9jnFjXtLoyMwablqQoLFwvtueipMteRWzSN2fO425EXWwRuVv0T8mTUKXsvDJD1RJZrA23tyTOOpDmNc3Y+eyDZN/ILols4YqhlDA/tL2OpUhMwtYd+8jMqbDkkK6t0GmhSZE21RaE0k0yIeSHiydMeep1TeR4LgOZTnLsj/pnXG0T+AOs7UAhvXZBMo8zRvbNz5hBFJk2ygFBcKCYB1C64giY7da/7EoL0laRoXytYD7lj62X2QVcdNhNRPM4MZ9pN3u52CSfQ0OzRKalcAwHUMGpOt0zxni2ipLiSUOeP/b047aX+yz3iv2hSzNdFTZoYzoZdqmYf0VHbISSSSfXUkqaiUbJ3jriL7fUB7WvZHCwRxRPdmc3mT71VpfCf01Skpv7z6FJuGh9NuiYQkuHf2tNV0xOuTt4xzNt/yUCHyROu0nTmNynWEVf2eqjk1yh2WQb3adCn+OUHZSkDVj+/FINnNOyn/GbvpnSvvBNdoijikhFiXHW+qJ9tdy/uUs2BpIuOfpdP46OI2JaL2tb7oTNxXoVQk/ZEioe4gC5J0AGpKlaLDnhwfJYWNwzxE+qfxBjPC1otzA1QlqOZ/wAped6RSONR22LVFX2cZdcaN0HVUuI3NzuTdSGLVZdpy6JjEPrmrY40iGafJ0WPBpO4Wn3X5KQYLB3ooaiNmE+ROnJSVPUZm2uLhoPqm9nP0HAB5pzXYe4QNf3bE6DmU2+xTbgaciNQlpoZXMa0l1mm9uSad3oWNXsTw3BZpJCQ2+lwnsmCzh4OQ2adeacYdWyxG4J2tspMY7JzsfcpPkU+pE17HGM6WLfcgpDEMT7SIjKATzHNBWgtbROUqejKrLi7v7+W91Iw0YABIJda/wDK1IOMY4HO2HvPdanDKDq4ejO85Oh02/NIyS6gDf5rBFIaeK4BaT5k6lSRqnCEQgkRNeXiBptGHHmotjtbpd2yWxkB02u/9UdpNuf5BIxssddfkAlDzQMJlx+eqNG7X61XJPqyIxwv/ZYyG9Q3f/N1aMNIq6IMOstLo3kSOSrNRuPoqV4VmLapjfuzdw+R5KWZfW/w6PHdSr9ETEQbc9jfQhOIwpziTCS1xlA0d+8A5HqoDPZThJTVnQ48HsVkfYKPqqiw+iUrNIfgoydxJV4ROfJMQkNylIvrmkQl4RqFdHKyVdZsJP4hpbmm1LUftddi3KeVketd+xZb8evwTKM8/oIRAyyYHixieY5CSwG1zqW+atDJGvaC0tcDzacwWcTyd+4NrjVdpq6Rnhc4ebTZUQko30aE8jp+pRDHflb81VqXiiRmj2tf5+FwU5RY3DNpmyO/BJ3b+9OqZNxa7Fanut0a5xOwQTojzCCZITkZ/SwBozO8R2H4U5jdrrz+aTcb3P0UUP0v9BcbOsPLobj9UzveQp1I67T/AJTOn8Z9N+iKCOGncc9wnLTcA/FMmu79tdr9U6gd8PmErCmH+vNF6/1XJD7vzKDTp/TmVjAck2n62ulDsk766/osYLKNvq6kMOcWPa8fdcHfBMnj5bc09oz3R/lZq1RXG6karCGztuQC2Rt7HYgql8R4EYH3AJjf4H9PJWLhSqLqcDnCcvqOSmK2MSxujcLh/wAQvMjJ4p0enKKnEyGdm4t+qY1Edgp7EaUxyOaQe6SOhUPWDQr1ItNWjzckadMiglo/rqEpHSm1zp+ZXSLJ7OcNNMXR8u6dQNrokJ+vCUmSRcbh3LojD4FMgBak94joixoTG5XDoPVYxwO1v/hOKa5df/CQY25sOfNP42ZbAf5QujUS2H4s+IhpGdnTdw9EEwYbXPTX1QTKYrgmNnOsPeiE2J89fIIs3h964DcfWqkOKA90pvTbk+SVB0KRZz+gsjClP43H6KcB1jf4prS8ynIH11QYULSG4uk2OXW7W6JJju8gYcBvXn8kmRr9AlKDkk5j3ljByO7y/VK0btPQpJnhP1ZGozv5lFDR0y68Gz997PxtzAHnZXEDyH5LOuHKoR1MZJ0Jyu6C60ljwvP8qNSPUwSuJXuJsLEjTI0d9o7wH31ndRDZxB+B1Wv1B5LPOLYWMqmhgtmjzvHRN42V3wZPyYKuRXpjy6Jo4pxM65+gmrt7czoF3o81hSLn5eq60X/XmnJaDpyboiZMv9eVk9gERFqSdm6eqRk39Eu6Tuepui0jAXEn7vvBKFmDUzN/8Jyw/L3og39/xQ5+p+CVhFKh9mlBJVTrNHk5BFdAEnatI+iiRu0C4ggAVA5aJu9BBZGFabY+qXzIIIMZHWnVAnn+SCCBhVrgQbX6hElGx11+aCCxgzNk0mlLXCxt6c0EEyNZLQSkBpvqOY1utEoMXY6Fj3PjaHNsc7g1wK6guTyVaTZ2eNJqxtV8S07L990hH8IZgfeqbjOIfaJ3SAOaMoa1rjmIsggthxxTtAzZJNUyGl57/wBEWHe/4Qgguw4zp+aSlJ2+fVBBZGEZXcuic0TbNJ/EUEFmYUZzRSUEEDehOsd3R5ldQQRRj//Z"  />	
	      			</Link>
					</Navbar.Brand>
			    </Nav>
	  		</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;