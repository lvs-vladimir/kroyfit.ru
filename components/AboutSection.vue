<template>
  <section class="about" id="about">
    <div class="container-max">
      <div class="about-content">
        <!-- Left side - Image -->
        <div class="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop" 
            alt="Людмила Лукьянова" 
            class="about-image"
          >
          <div class="about-overlay"></div>
        </div>

        <!-- Right side - Text -->
        <div class="about-text">
          <p class="about-tag text-uppercase text-accent">Основатель</p>
          
          <h2 class="about-name">Людмила Лукьянова</h2>
          <p class="about-title">Автор методики точного кроя</p>

          <div class="about-facts">
            <div class="fact">
              <span class="fact-icon">📍</span>
              <span class="fact-text"><strong>50+ лет</strong> опыта в шитье</span>
            </div>
            <div class="fact">
              <span class="fact-icon">📅</span>
              <span class="fact-text">Преподаёт <strong>с 2014 года</strong></span>
            </div>
            <div class="fact">
              <span class="fact-icon">✨</span>
              <span class="fact-text">Создала <strong>авторскую методику</strong></span>
            </div>
          </div>

          <blockquote class="about-quote">
            «Идеальная посадка одежды — это не магия, это наука. Когда вы понимаете принципы точного кроя, вы можете шить что угодно.»
          </blockquote>

          <p class="about-description">
            Людмила разработала уникальную методику, которая позволяет шить одежду, идеально сидящую на любой фигуре. Её ученицы не нуждаются в примерках — одежда садится с первой попытки.
          </p>

          <p class="about-description">
            За 12 лет преподавания она обучила более 500 человек, многие из которых открыли собственные ателье и работают по её методике.
          </p>
        </div>
      </div>
    </div>

    <!-- Decorative stitch line -->
    <svg class="about-stitch" viewBox="0 0 1000 50" preserveAspectRatio="none">
      <path d="M0,25 L10,20 L20,30 L30,20 L40,30 L50,20 L60,30 L70,20 L80,30 L90,20 L100,30 L110,20 L120,30 L130,20 L140,30 L150,20 L160,30 L170,20 L180,30 L190,20 L200,30 L210,20 L220,30 L230,20 L240,30 L250,20 L260,30 L270,20 L280,30 L290,20 L300,30 L310,20 L320,30 L330,20 L340,30 L350,20 L360,30 L370,20 L380,30 L390,20 L400,30 L410,20 L420,30 L430,20 L440,30 L450,20 L460,30 L470,20 L480,30 L490,20 L500,30 L510,20 L520,30 L530,20 L540,30 L550,20 L560,30 L570,20 L580,30 L590,20 L600,30 L610,20 L620,30 L630,20 L640,30 L650,20 L660,30 L670,20 L680,30 L690,20 L700,30 L710,20 L720,30 L730,20 L740,30 L750,20 L760,30 L770,20 L780,30 L790,20 L800,30 L810,20 L820,30 L830,20 L840,30 L850,20 L860,30 L870,20 L880,30 L890,20 L900,30 L910,20 L920,30 L930,20 L940,30 L950,20 L960,30 L970,20 L980,30 L990,20 L1000,30" stroke="var(--color-copper)" stroke-width="2" fill="none"/>
    </svg>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  const { observeElements } = useScrollReveal()
  observeElements('.about-text')
})
</script>

<style scoped>
.about {
  background-color: var(--color-cream);
  padding: 6rem 0;
  position: relative;
}

.container-max {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image-wrapper {
  position: relative;
  aspect-ratio: 2/3;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.about-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(196, 98, 45, 0.2) 0%, rgba(196, 98, 45, 0.05) 100%);
  pointer-events: none;
}

.about-text {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.about-tag {
  font-size: 0.875rem;
  color: var(--color-copper);
  letter-spacing: 0.3em;
  display: block;
  margin-bottom: 0.5rem;
}

.about-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--color-dark);
  margin: 0 0 0.5rem 0;
}

.about-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--color-text);
  margin: 0 0 2rem 0;
  font-weight: 500;
}

.about-facts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.fact {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.fact-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.fact-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.6;
}

.about-quote {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-style: italic;
  color: var(--color-copper);
  margin: 2rem 0;
  padding: 0;
  border-left: 3px solid var(--color-copper);
  padding-left: 1.5rem;
  line-height: 1.8;
}

.about-description {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.8;
  margin: 1rem 0;
}

.about-stitch {
  width: 100%;
  height: 50px;
  margin-top: 4rem;
  opacity: 0.3;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .about {
    padding: 3rem 0;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-image-wrapper {
    order: -1;
  }

  .about-name {
    font-size: 2rem;
  }

  .about-quote {
    font-size: 1rem;
  }

  .about-stitch {
    margin-top: 2rem;
    height: 30px;
  }
}
</style>
