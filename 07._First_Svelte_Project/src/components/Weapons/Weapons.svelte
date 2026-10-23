<script>
    let { weapon, damage } = $props();

    function resetDamage() {
        damage = 0;
    }
</script>

<!-- 
    Why write the component with Pascal case?

    1. Easy to differentiate is a component and what is plain html when it is used as a tag
    2. Historical reason: Components used to be classes

-->

<h4>Weapons</h4>

<p>{weapon}</p>
<p>{damage}</p>
<button onclick={() => damage++}>Increase Damage</button>
<button onclick={resetDamage}>Reset Damage</button>
