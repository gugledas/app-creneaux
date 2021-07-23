<template>
  <div>
    <div class="container first-block">
      <div class="creneaux-mbt--block mt-5">
        <div>
          <h1 class="text-left font-weight-bold">
            Finalisation de la commande
          </h1>
        </div>
        <div class="block-left">
          <tab-option></tab-option>
        </div>
        <div class="block-border">
          <div
            class="row list-inline mt-3 ml-md-4 font-weight-bold type-livraison"
          >
            <div class="list-inline-item col-md-8">
              <div class="d-flex justify-content-between">
                <span>Créneau horaire de 60 min </span>
                <span>Délai de traitement de 2 jours </span>
              </div>
            </div>
            <div class="list-inline-item col-md-4">
              <p><span> Frais de livraison : 9.99€ </span></p>
            </div>
          </div>
          <div class="row d-flex justify-content-start commande-detail mb-5">
            <!-- affiche les alerts -->

            <div
              class="
                rectangle
                rond-left rond-right
                mx-3 mx-md-0
                mb-3 mb-md-0
                ml-md-5
                mr-lg-5
                pt-3
                pl-3
                pr-3
                col-md-3
              "
            >
              <div class="h2 cursor-pointer">ADRESSE</div>
              <div
                class="
                  d-flex
                  justify-content-between justify-content-md-start
                  align-items-center
                "
              >
                <div class="">
                  <div class="h1 cursor-pointer"></div>
                  <p class="cursor-pointer"></p>
                  <span class="btn option-badge mt-4 mb-3">
                    Ajouter une adresse
                  </span>
                </div>
                <div class="icone-map">
                  <!-- <map-calandar-svg></map-calandar-svg> -->
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="row ml-md-4">
                <div
                  class="
                    rectangle
                    rond-left
                    mx-2 mx-md-0
                    mb-3 mb-md-0
                    mx-3
                    pt-4
                    pl-sm-3
                    col-md-6
                  "
                >
                  <div class="title-creneau h2">Collecte</div>
                  <div
                    class="
                      d-flex
                      justify-content-between justify-content-md-start
                      line-creneau
                      h1
                    "
                  >
                    <div>00:00</div>
                    <i class="icone-svg mb-md-1 mb-lg-2 cursor-pointer"></i>
                  </div>
                  <p class="cursor-pointer">mercredi 7 juillet</p>
                </div>
                <div
                  class="
                    rectangle
                    rond-right
                    mx-2 mx-md-0
                    mb-3 mb-md-0
                    mx-3
                    pt-4
                    pl-sm-3
                    col-md-6
                  "
                >
                  <div class="title-creneau h2">livraison</div>
                  <div
                    class="
                      d-flex
                      justify-content-between justify-content-md-start
                      line-creneau
                      h1
                    "
                  >
                    <div>00:00</div>
                    <i class="icone-svg mb-md-1 mb-lg-2 cursor-pointer"></i>
                  </div>
                  <p class="cursor-pointer">mercredi 7 juillet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabOption from "./components/creneau/TabOption.vue";
export default {
  name: "App",
  components: { TabOption },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
@import "./scss/default.scss";
</style>
