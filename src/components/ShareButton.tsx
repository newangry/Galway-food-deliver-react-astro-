import { useState } from "preact/hooks";

import MdiTwitter from "~icons/mdi/twitter";
import MdiFacebook from "~icons/mdi/facebook";
import MdiLinkedin from "~icons/mdi/linkedin";
import MdiWhatsapp from "~icons/mdi/whatsapp";
import MdiReddit from "~icons/mdi/reddit";

import ShareIcon from "~icons/material-symbols/ios-share";

interface ShareButtonProps {
    title: string;
    description: string;
    url: string;
}

function ShareButton({ title, description, url }: ShareButtonProps){
    const [showShareItems, setShowShareItems] = useState(false);
  return (
    <button title={"Compartilhe"} class="relative">
      <ShareIcon onClick={() => setShowShareItems(!showShareItems)} />
      {showShareItems && (
        <div class="flex flex-col space-y-4 items-start absolute bottom-10 right-0 lg:-right-16 z-30 w-auto h-auto  bg-zinc-300 dark:bg-zinc-700 rounded-lg p-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            class="no-underline flex items-center space-x-2 text-sm"
          >
            <span>
              <MdiTwitter />
            </span>
            <span>Twitter</span>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            class="no-underline flex items-center space-x-2 text-sm"
          >
            <span>
              <MdiFacebook />
            </span>
            <span>Facebook</span>
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}`}
            target="_blank"
            rel="noopener noreferrer"
            class="no-underline flex items-center space-x-2 text-sm"
          >
            <MdiLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${title} ${url}`}
            target="_blank"
            rel="noopener noreferrer"
            class="no-underline flex items-center space-x-2 text-sm"
          >
            <MdiWhatsapp />
            <span>WhatsApp</span>
          </a>
          <a
            href={`https://www.reddit.com/submit?url=${url}&title=${title}`}
            target="_blank"
            rel="noopener noreferrer"
            class="no-underline flex items-center space-x-2 text-sm"
          >
            <MdiReddit />
            <span>Reddit</span>
          </a>
        </div>
      )}
    </button>
  );
}

export default ShareButton;
