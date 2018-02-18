"use strict";

const NewsUrl = "https://api.nytimes.com/svc/topstories/v2/";
const Api = "3c035efdd1b642d78fcfcdd0bb4af908";
const SECTIONS = "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world";

function buildUrl(url){
	return NewsUrl + url + ".json?api-key=" + Api;
}

Vue.component('news-list', {
	props:['results'],
	template:`
		<section>
			<div class="row" v-for="posts in processedPosts">
				<div class="columns large-3 medium-6" v-for="post in posts">
					<div class="card">
						<div class="card-divider">
						{{ post.title }}
						</div>
						<a :href="post.url" target="_blank"><img :src="post.image_url"></a>
						<div class="card-section">
							<p>{{ post.abstract }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,
	computed:{
		processedPosts(){
			let posts = this.results;

			//添加image_url属性
			posts.map(post => {
				let imgObj = post.multimedia.find(media => media.format === "superJumbo");
				post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
			})

			//将数据分组
			let i, j, chunkedArr = [], chunk = 4;
			for(i = 0, j = 0; i < posts.length; i += chunk, j++) {
				chunkedArr[j] = posts.slice(i, i + chunk);
			}
			return chunkedArr;
		}
	}
});

const vm = new Vue({
	el:'#app',
	data:{
		results: [],
		sections: SECTIONS.split(', '),
		//设置默认的展示类别
		section: 'home'
 	},
	mounted(){
		this.getPosts(this.section);
	},
	methods:{
		getPosts(section){
			let url = buildUrl(section);
			axios.get(url).then((response) => {
				this.results = response.data.results;
			}).catch( err => {
				console.log(err);
			})
		}
	}
});
