<template>
    <div>
        <div class="col s12 m6">
        <div class="card red darken-2">
          <div class="card-content white-text">
            <span class="card-title">{{card.tittle}}</span>
            <p>{{card.description}}</p>
          </div>
          <div class="card-action">
            <router-link class="grey-text text-lighten-4"  :to="card.golink">{{card.go}}</router-link>
            <a class="grey-text text-lighten-4" href="#">{{card.help}}</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default{
    props: ['card']
}
</script>
