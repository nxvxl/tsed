---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation isEmpty function
---
# isEmpty <Badge text="Function" type="function"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { isEmpty }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/core"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.2/src//core/utils/ObjectUtils.ts#L0-L0">/core/utils/ObjectUtils.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">isEmpty</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span> <span class="token punctuation">{</span>
  return value === "" || value === null || value === undefined<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

/**
 *
 * @param target
 * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span>
 */</code></pre>



<!-- Description -->
## Description

::: v-pre

Return true if the value is an empty string, null or undefined.

:::