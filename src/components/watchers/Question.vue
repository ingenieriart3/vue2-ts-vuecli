<!-- VUE 3 INSTANCE !!! -->

<!-- <template>
    <p>template </p>
    <p>
        Ask a yes/no question:
        <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { ref, watch } from 'vue'
  
  export default defineComponent({
    setup(){

        const question = ref('')
        const answer = <any> ref('Questions usually contain a question mark. ;-)')

        const fn = async (a: any, b: any) => { 
          await new Promise(res => setTimeout(<any> res, 120)); 
          return a + b; 
        }

        // watch works directly on a ref
        watch(question, async (newQuestion, oldQuestion) => {
        if (newQuestion.indexOf('?') > -1) {
            answer.value = 'Thinking...'
            try {
            // const res = await fetch('https://yesno.wtf/api')
            // answer.value = (await res.json()).answer
                const res = fn('hola .. ', 'ref ' )
                answer.value = res
            } catch (error) {
            answer.value = 'Error! Could not reach the API. ' + error
            }
        }
        })
    }
  })
  </script> -->