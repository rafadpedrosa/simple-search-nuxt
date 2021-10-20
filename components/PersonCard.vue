<template>
  <b-card
    :img-src="avatar"
    img-height="180"
    img-width="180"
    img-alt="Card image"
    img-left
    class="user-card mb-3"
  >
    <b-card-text>
      <span class="email">
        {{ email }}
      </span>
      <div class="main-info">
        <p
          v-highlight="{highlight}"
          class="name"
          v-html="name"
        />
        <p
          v-highlight="{highlight}"
          class="job-description"
          v-html="title"
        />
        <p
          v-highlight="{highlight}"
          class="address"
          v-html="address"
        />
      </div>
      <hr>
      <div class="body-footer">
        <b-link @click="toggleSuitable">
          {{ isSuitable ? 'Skip Selection' : 'Mark As Suitable' }}
        </b-link>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'PersonCard',
  props: ['user', 'highlight'],
  data () {
    return {
      id: 0,
      name: '',
      avatar: '',
      title: '',
      address: '',
      email: '',
      isSuitable: false
    }
  },
  computed: {
    userData () {
      const {
        id,
        name,
        title,
        address,
        email,
        avatar,
        isSuitable
      } = this

      return {
        id,
        name,
        title,
        avatar,
        address,
        email,
        isSuitable
      }
    }
  },
  watch: {
    user: {
      immediate: true,
      handler (user) {
        Object.assign(this, user)
      }
    }
  },
  methods: {
    toggleSuitable () {
      this.isSuitable = !this.isSuitable

      this.$emit('input', this.userData)
    }
  }
}
</script>

<style lang="scss" scoped>
.user-card:hover {
  border: #eee 1px solid;
  background-color: #eee;
  cursor: pointer;
}

.user-card {
  .body-footer {
    text-align: center;
  }
}

p {
  margin-bottom: 3px;
}

@media only screen and (min-width: 800px) {
  .email {
    position: absolute;
    right: 0;
    padding: 0 20px;
    text-align: right;
    font-size: 12px;
    font-weight: lighter;
  }
}

@media only screen and (max-width: 800px) {
  .email {
    position: relative;
    text-align: left;
    right: 0;
    font-size: 12px;
    font-weight: lighter;
  }
}

.main-info {
  .name {
    font-size: 18px;
  }

  .job-description {
    font-size: 12px;
    font-weight: bold;
  }

  .address {
    font-size: 12px;
    font-weight: lighter;
  }
}

</style>
