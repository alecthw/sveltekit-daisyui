<script lang="ts">
  import { BlindWatermark } from 'watermark-js-plus';

  let inImage: FileList | undefined = $state();
  let outImage: string = $state('');

  $effect(() => {
    if (inImage) {
      BlindWatermark.decode({
        url: URL.createObjectURL(inImage[0]),
        onSuccess: (imageBase64: string) => {
          outImage = imageBase64;
        },
      });
    }
  });
</script>

<div class="flex h-full flex-col items-center justify-center bg-base-100">
  <input type="file" class="file-input" bind:files={inImage} />
  <img src={outImage} width={400} alt="out_image" class="m-8" />
</div>
