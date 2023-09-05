let block = document.querySelector("#block"); 
			let click = document.querySelector("#click"); 
            let boxdiv = document.querySelector("#boxdiv") 
            let chkdom = document.querySelector("#chkdom") 
            let chkmirq = document.querySelector("#chkmirq") 
            let ld = document.querySelector("#ld") 
            let ti = document.querySelector("#ti") 
            ld.addEventListener("click", t ) 
            click.addEventListener('click', m ) 
            let arr = [] 
            const domElements = []; 
            let sum = 0; 
            let x = 0; 
            let y = 0; 
            let nshacMirq = [] 
            let dr = document.querySelector("#dr") 

            function addElement(el) {
                let diiv = document.createElement("div") 
                diiv.classList.add('list') 
                    


                let nkar = document.createElement('img') 
                nkar.src = el.im 
                nkar.style.width = '300px' 
                nkar.style.height = '178px' 
                nkar.classList.add('nkar2') 
                diiv.append( nkar ) 


                // sa klni cbox 
                let chbox = document.createElement("input"); 
                chbox.type = 'checkbox' 
                chbox.addEventListener('change', function(e) { 

                    // sa ternar 
                    // sum += this.checked? el.pric : -el.pric; 
                    if( this.checked ) { 
                        sum +=el.pric ; 
                        nshacMirq.push( el . anun ) 
                        chkmirq.innerHTML = [...nshacMirq   ] 
                        console.log( this.parentElement ) 
                    } else{ 
                        -el.pric 
                        nshacMirq.pop( ) 
                        chkmirq.innerHTML = [...nshacMirq   ] 
                        sum -= el.pric ;  
                    } 
                    y = this.checked? ++y : --y  
                    boxdiv.innerHTML = y  
                    ti.innerHTML = +sum +' dram' + typeof sum 
                }) 
                chbox.classList.add('bb') 
                diiv.append( chbox ) 

                let h = document.createElement("h4") 
                h.innerHTML = 'Համար' + el.id 
                diiv.append( h ) 

                // sa klni anun 
                let p1 = document.createElement('h1') 
                p1.classList.add('anun') 
                p1.innerHTML = el.anun 
                diiv.append( p1 ) 

                // sa klini sort@ 
                let s1 = document.createElement('p') 
                s1.innerHTML = el.sort 
                diiv.append( s1 ) 

                // sa klni gin@ 
                let pric1 = document.createElement('p') 
                pric1.classList.add('pric') 
                pric1.innerHTML = el.pric +' դրամ ' 
                diiv.append( pric1 ) 



                // sa klni button 
                let btn = document.createElement("button") 
                btn.innerHTML = 'կարդալ' 
                btn.addEventListener('click', function(e) { 
                    x++ 
                    //  
                    (x%2 != 0) ? pric1.innerHTML = el.txt : pric1.innerHTML = el.pric + ' դրամ' ; 
                    (x%2 != 0) ? btn.innerHTML = ' գին ' : btn.innerHTML = ' կարդալ '  
                    console.log( x ) 
                }) 
                btn.classList.add('bb') 
                diiv.append( btn ) 

                let b = document.createElement("button") 
                b.innerHTML = 'Ջնջել'
                b.classList.add('bbbb') 
                b.addEventListener("click", function(x) { 
                    diiv.remove() 
                } ) 
                diiv.append( b ) 
                domElements.push(diiv) 
                block.append( diiv ); 
            } 

            block.innerHTML = '' 
                fetch('http://localhost:3000/mirq') 
                .then((response) => response.json()) 
                .then(data => { 
                

                    block.innerHTML = '' 
                    data.forEach( el => { 

                        addElement(el)
                    })  
                    return data 
                } ) 
                .then(x => arr = x ) 
                .then( _ => console.log( arr ) ) 

                

                







// filtr arjq 
            let inpu = document.querySelector('#inpu') 
            inpu.addEventListener( 'input', f1 ) 
            function f1() { 
                block.innerHTML = '' 
                arr.forEach((itm, index) => { 
                    if (itm.pric >= +inpu.value) { 
                            
                         block.append(domElements[index]); 
                    } 
                })
            } 
            
            
// filtr anun  
            let inpuAnun = document.querySelector("#inpuAnun") 
            inpuAnun.addEventListener('input', f2 ) 
            function f2() { 
                block.innerHTML = '' 
                arr.forEach(( itm, index ) => { 
                    if( itm.anun.startsWith( inpuAnun.value )  ) { 
                        block.append( domElements[index] ) 
                        console.log( itm.anun ) 
                    } 
                }) 
            } 



// zxch 

            let zxc = document.querySelector("#clickk") 
            zxc.addEventListener('click', f44 ) 
            function f44() { 
                block.innerHTML = '' 
                arr.filter(( itm, ind ) => { 
                    if( itm.zxc == 'tru' ) { 
                        block.append( domElements[ind] )  
                    } 
                }) 
            } 






            
// cuyc tall 
            function m() { 
                block.innerHTML = '' 
                arr.filter(( itm, ind ) => { 
                        block.append( domElements[ind] )  
                }) 
            } 

// ligth dark 
            let luys = document.querySelector("#luys") 
            function t() { 
                if( this.checked ) { 
                
                    document.body.style.background = 'black' 
                    document.body.style.color = 'silver' 
                    luys.innerHTML = ' ԼՈՒՅՍ ' 
            } else{ 
                    document.body.style.background = 'white' 
                    document.body.style.color = 'black' 
                    luys.innerHTML = 'ՄՈՒԹ' 
            } 
        } 









        











        // avlacumm taza itmm 
        // sa form i hamara 
        // nor graca 
// 00000000000000 
let bt = [] 
            let fo = document.querySelector("#costum-form") 
                    
            fo.addEventListener('submit', (x) => { 
                x.preventDefault() 
                let l = 16 
                let m = new FormData( x.target ) 
// սա նայմ 
                let id1 = m.get(l)   
                let anun1 = m.get("anun") 
                let sort1 = m.get("sort") 
                let pric1 = m.get("pric") 
                let im1 = m.get( "kiwi.jpg" ) 
        // սա նայի 
                let o = Object.fromEntries( m.entries()  ) 
                console.log( arr.push( o )  ) 
                console.log( arr  ) 
                addElement(o) 
            }) 


            














            let formBlock = document.querySelector('#formBlock') 
            let formbutton = document.querySelector("#formbutton") 
            formbutton.addEventListener("click", sw ) 





            let formSw = 0 
            function sw() { 
                formSw++ 
                if( formSw % 2 == 0 ) { 
                formBlock.style.display = 'none' 
                } else{ 
                    formBlock.style.display = 'block' 
                }
            } 
            