 <template>
  <!-- eslint-disable -->
  <div class="home">
    <h1>Vue API Mock with MSW</h1>
    <br />
    <h2>Post Data</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    this.posts = response.data;
  },
};
</script>
