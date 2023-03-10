const App = {
  data() {
    return {
      isFullscreen: false,
      activeIndex: 0,
      list: [
        {
          nameBack : "Ilan",
          name: "Ilan Outhier",
          role: "Développeur",
          difficulty: "moderate",
          desc:
            "Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow form—a malevolent spirit magic as dangerous and corrupting as it is powerful. Zed has mastered all of these forbidden techniques to destroy anything he sees as a threat to his nation, or his new order.",
          img:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
          thumbImg:
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt402d6da485218720/5db0601de9effa6ba5295fc5/RiotX_ChampionList_zed.jpg"
        },
        {
          nameBack : "Mathieu",
          name: "Mathieu Chavanel",
          role: "Développeur",
          difficulty: "low",
          desc:
            "A magical cat from Bandle City, Yuumi was once the familiar of a yordle enchantress, Norra. When her master mysteriously disappeared, Yuumi became the Keeper of Norra's sentient Book of Thresholds, traveling through portals in its pages to search for her. Yearning for affection, Yuumi seeks friendly companions to partner with on her journey, protecting them with luminous shields and fierce resolve. While Book strives to keep her on task, Yuumi is often drawn to worldly comforts, such as naps and fish. In the end, however, she always returns to her quest to find her friend.",
          img:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg",
          thumbImg:
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta312e7cca0e594d1/5db0601d2140ec675d68f4c1/RiotX_ChampionList_yuumi.jpg"
        },
        {
          nameBack : "P-L",
          name: "Pierre-Louis Rousseaux",
          role: "Développeur",
          difficulty: "low",
          desc:
            "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from the shadows of Demacia—even as others seek to repress it—by casting shields and chains of dark fire. More than anything else, Morgana truly believes that even the banished and outcast may one day rise again.",
          img:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
          thumbImg:
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc81eece55f126d2d/5db05fe86af83b6d7032c904/RiotX_ChampionList_morgana.jpg"
        },
        {
          nameBack : "Anthony",
          name: "Anthony Pelaz",
          role: "Développeur",
          difficulty: "low",
          desc:
            "In the black heart of the Shadow Isles, a lone yordle trudges through the spectral fog, content in its murky misery. With an endless supply of teen angst and a powerful shadow in tow, Vex lives in her own self-made slice of gloom, far from the revolting cheer of the “normie” world. Though she lacks ambition, she is quick to strike down color and happiness, stopping all would-be interlopers with her magical malaise.",
          img:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg",
          thumbImg:
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltad313195d6b48daa/614e702764c8007a9bdec6b2/RiotX_ChampionList_vex.jpg"
        },
        {
          nameBack : "Ethan",
          name: "Ethan Carollo",
          role: "Développeur",
          difficulty: "moderate",
          desc:
            "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of deadly blades. After proving herself as a fighter, she was thrust into the role of resistance leader and figurehead, and to this day remains dedicated to the preservation of her homeland.",
          img:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",
          thumbImg:
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf5f2b8de93870aef/5db05fcea6470d6ab91ce59a/RiotX_ChampionList_irelia.jpg"
        },
        {
          nameBack : "Raphael",
          name: "Raphael Makaryan",
          role: "Développeur",
          difficulty: "high",
          desc:
            "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self defense. Even after his master's true killer was revealed, Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
          img:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
          thumbImg:
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3a319fc884dc6880/5db0601c242f426df132f985/RiotX_ChampionList_yasuo.jpg"
        }
      ]
    };
  },
  computed: {
    activeInfo() {
      if (!this.list.length) return null;
      return this.list[this.activeIndex];
    },
    itemPosition() {
      const len = this.list.length;
      return this.list.map((_, key) => {
        const deg = (360 / len) * key - 90;
        const radius = "2rem";
        return `rotate(${deg}deg) translate(${radius}) rotate(${-deg}deg)`;
      });
    }
  },
  methods: {
    toggleFullScreen() {
      const el = document.documentElement;
      if (!this.isFullscreen) {
        // open
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
          /* Safari */
          el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
          /* IE11 */
          el.msRequestFullscreen();
        }
      } else {
        // close
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen();
        }
      }
      this.isFullscreen = !this.isFullscreen;
    }
  }
};

Vue.createApp(App).mount("#app");