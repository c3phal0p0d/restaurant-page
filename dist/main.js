(()=>{function e(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.classList.add("heading-container"),e.appendChild(t);const n=document.createElement("div");n.classList.add("title-container"),t.appendChild(n);const d=document.createElement("span");d.classList.add("title"),d.classList.add("small-text"),d.appendChild(document.createTextNode("The")),n.appendChild(d);const o=document.createElement("h1");o.classList.add("title"),o.classList.add("large-text"),o.appendChild(document.createTextNode("Double R")),n.appendChild(o);const c=document.createElement("span");c.classList.add("title"),c.classList.add("small-text"),c.appendChild(document.createTextNode("Diner")),n.appendChild(c);const a=document.createElement("div");a.classList.add("about-container"),e.appendChild(a);const l=document.createElement("h2");l.appendChild(document.createTextNode("About")),a.appendChild(l);const i=document.createElement("p");i.appendChild(document.createTextNode("Located in the idyllic town of Twin Peaks is a favorite destination among both tourists and locals. We serve a variety of delicious food all day long, including our famed cherry pie and coffee.")),a.appendChild(i),a.appendChild(document.createElement("hr"));const s=document.createElement("div");s.classList.add("testimonials-container"),e.appendChild(s);const r=document.createElement("h2");r.appendChild(document.createTextNode("Reviews")),s.appendChild(r);const m=document.createElement("p");m.appendChild(document.createTextNode('"This diner, and its extraordinarily good coffee and pie, has become, I admit, something of an obsession for me." - Dale Cooper')),s.appendChild(m);const u=document.createElement("p");u.appendChild(document.createTextNode('"This cherry pie is a miracle." - Log Lady')),s.appendChild(u),s.appendChild(document.createElement("hr"));const p=document.createElement("div");p.classList.add("notice-container"),e.appendChild(p);const C=document.createElement("h2");C.appendChild(document.createTextNode("Notice")),p.appendChild(C);const h=document.createElement("img");h.src="/src/bob.webp",p.appendChild(h)}function t(){const e=document.createElement("div");e.classList.add("footer-container"),content.append(e)}e(),function n(){const d=document.querySelector("#content"),o=document.createElement("div");o.classList.add("navigation-container"),d.appendChild(o);const c=document.createElement("button");c.textContent="Home",c.classList.add("about-button"),o.appendChild(c),c.addEventListener("click",(function(){e(),n(),t(),document.querySelector(".about-button").style.backgroundColor="rgba(188, 0, 0, 0.696)",document.querySelector(".menu-button").style.backgroundColor="rgba(0, 0, 0, 0.6)",document.querySelector(".contact-button").style.backgroundColor="rgba(0, 0, 0, 0.6)"}));const a=document.createElement("button");a.textContent="Menu",a.classList.add("menu-button"),o.appendChild(a),a.addEventListener("click",(function(){!function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h2");t.classList.add("menu-title"),t.textContent="Menu",e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-container"),e.appendChild(n);const d=document.createElement("div");d.classList.add("menu-item"),n.appendChild(d);let o=document.createElement("img");o.src="/src/coffee.jpg",d.append(o);let c=document.createElement("h3");c.textContent="Coffee",d.appendChild(c);let a=document.createElement("p");a.textContent="Black as midnight on a moonless night.",d.appendChild(a);let l=document.createElement("button");l.textContent="$3",l.classList.add("item-price"),d.appendChild(l);const i=document.createElement("div");i.classList.add("menu-item"),n.appendChild(i),o=document.createElement("img"),o.src="/src/cherry-pie.jpg",i.append(o),c=document.createElement("h3"),c.textContent="Cherry pie",i.appendChild(c),a=document.createElement("p"),a.textContent="The best in Washington state.",i.appendChild(a),l=document.createElement("button"),l.textContent="$6",l.classList.add("item-price"),i.appendChild(l);const s=document.createElement("div");s.classList.add("menu-item"),n.appendChild(s),o=document.createElement("img"),o.src="/src/donuts.jpeg",s.append(o),c=document.createElement("h3"),c.textContent="Donuts",s.appendChild(c),a=document.createElement("p"),a.textContent="Detectives' favorite.",s.appendChild(a),l=document.createElement("button"),l.textContent="$4",l.classList.add("item-price"),s.appendChild(l)}(),n(),t(),document.querySelector(".about-button").style.backgroundColor="rgba(0, 0, 0, 0.6)",document.querySelector(".menu-button").style.backgroundColor="rgba(188, 0, 0, 0.696)",document.querySelector(".contact-button").style.backgroundColor="rgba(0, 0, 0, 0.6)"}));const l=document.createElement("button");l.textContent="Contact",l.classList.add("contact-button"),o.appendChild(l),l.addEventListener("click",(function(){!function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.classList.add("contact-details"),e.appendChild(t);const n=document.createElement("h2");n.textContent="Contact us",t.appendChild(n);const d=document.createElement("p");d.textContent="Phone: 425-831-5511",t.appendChild(d);const o=document.createElement("p");o.textContent="Email: doublerdiner@bobmail.com",t.appendChild(o),t.appendChild(document.createElement("hr"));const c=document.createElement("div");c.classList.add("location-container"),e.appendChild(c);const a=document.createElement("h2");a.textContent="Come visit!",c.appendChild(a);const l=document.createElement("p");l.textContent="We are located at 123 Main St, Twin Peaks, Washington, United States.",c.appendChild(l);const i=document.createElement("img");i.src="/src/map.jpg",c.appendChild(i)}(),n(),t(),document.querySelector(".about-button").style.backgroundColor="rgba(0, 0, 0, 0.6)",document.querySelector(".menu-button").style.backgroundColor="rgba(0, 0, 0, 0.6)",document.querySelector(".contact-button").style.backgroundColor="rgba(188, 0, 0, 0.696)"}))}(),t(),document.querySelector(".about-button").style.backgroundColor="rgba(188, 0, 0, 0.696)"})();