<template>
  <div>
    Here's how you can configure Guess.js:
    <div class="highlight">
      <pre class="chroma">
          <code class="language-javascript" data-lang="javascript">
            <span class="k">new</span> <span class="nx">GuessPlugin</span>
            <span class="p">{'({'}</span>
            <br />
            <span class="c1"> </span>
            <span class="c1">// GA view ID.</span>
            <br />
            <span class="c1" /> <span class="nx">GA</span>
            <span class="o">:</span> <span class="nx">GAViewID</span>
            <span class="p">,</span>
            <br />
            <span class="c1"> </span>
            <span class="c1">
              // Hints Guess to not perform pre-fetching and delegate this logic
              to
            </span>
            <br />
            <span class="c1" /> <span class="c1">// its consumer.</span>
            <br />
            <span class="c1" /> <span class="nx">runtime</span>
            <span class="o">:</span> <span class="p">{'{ '}</span>
            <span class="nx">delegate</span>
            <span class="o">:</span> <span class="kc">true</span>
            <span class="p"> },</span>
            <br />
            <span class="c1"> </span>
            <span class="c1">
              // Since Gatsby already has the required metadata for
              pre-fetching,
            </span>
            <br />
            <span class="c1" />{' '}
            <span class="c1">
              // Guess does not have to collect the routes and the corresponding
            </span>
            <br />
            <span class="c1" /> <span class="c1">// bundle entry points.</span>
            <br />
            <span class="c1" /> <span class="nx">routeProvider</span>
            <span class="o">:</span> <span class="kc">false</span>
            <span class="p">,</span>
            <br />
            <span class="c1">
              {' '}
              // Optional argument. It takes the data for the last year if not
            </span>
            <span class="c1" />
            <br />
            <span class="c1"> // specified.</span>
            <br />
            <span class="c1" /> <span class="nx">period</span>
            <span class="o">:</span> <span class="nx">period</span>{' '}
            <span class="o">?</span> <span class="nx">period</span>{' '}
            <span class="o">:</span> <span class="kc">undefined</span>
            <span class="p">,</span>
            <br />
            <span class="p">})</span>
          </code>
        </pre>
    </div>
  </div>
</template>

<style scoped>
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
code {
  background-color: #f9f9f9;
  font-size: 10px;
  /* font-weight: 100; */
  padding: 4px;
  border: none;
  border-radius: 4px;
  overflow: scroll;
  font-family: "Fira Code", "Monaco", Courier, monospace;
}

pre {
  font-size: 13px;
  word-wrap: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  padding: 16px;
  padding-bottom: 14px;
  display: block;
  color: #808080;
  background-color: #f9f9f9;
  border: none;
  box-shadow: inset 0 0 0 1px #e4ebf2;
  border-radius: 4px;
  overflow: auto;
  line-height: 16px;
}

.highlight .hll {
  background-color: #d6d6d6;
}

.highlight {
  background: #ffffff;
  color: #4d4d4c;
  max-width: 350px;
  overflow-x: auto;
}

.highlight .c {
  color: #8e908c;
}

/* Comment */
.highlight .err {
  color: #c82829;
}

/* Error */
.highlight .k {
  color: #8959a8;
}

/* Keyword */
.highlight .l {
  color: #f5871f;
}

/* Literal */
.highlight .n {
  color: #4d4d4c;
}

/* Name */
.highlight .o {
  color: #3e999f;
}

/* Operator */
.highlight .p {
  color: #4d4d4c;
}

/* Punctuation */
.highlight .cm {
  color: #8e908c;
}

/* Comment.Multiline */
.highlight .cp {
  color: #8e908c;
}

/* Comment.Preproc */
.highlight .c1 {
  color: #8e908c;
}

/* Comment.Single */
.highlight .cs {
  color: #8e908c;
}

/* Comment.Special */
.highlight .gd {
  color: #c82829;
}

/* Generic.Deleted */
.highlight .ge {
  font-style: italic;
}

/* Generic.Emph */
.highlight .gh {
  color: #4d4d4c;
  font-weight: bold;
}

/* Generic.Heading */
.highlight .gi {
  color: #718c00;
}

/* Generic.Inserted */
.highlight .gp {
  color: #8e908c;
  font-weight: bold;
}

/* Generic.Prompt */
.highlight .gs {
  font-weight: bold;
}

/* Generic.Strong */
.highlight .gu {
  color: #3e999f;
  font-weight: bold;
}

/* Generic.Subheading */
.highlight .kc {
  color: #8959a8;
}

/* Keyword.Constant */
.highlight .kd {
  color: #8959a8;
}

/* Keyword.Declaration */
.highlight .kn {
  color: #3e999f;
}

/* Keyword.Namespace */
.highlight .kp {
  color: #8959a8;
}

/* Keyword.Pseudo */
.highlight .kr {
  color: #8959a8;
}

/* Keyword.Reserved */
.highlight .kt {
  color: #eab700;
}

/* Keyword.Type */
.highlight .ld {
  color: #718c00;
}

/* Literal.Date */
.highlight .m {
  color: #f5871f;
}

/* Literal.Number */
.highlight .s {
  color: #718c00;
}

/* Literal.String */
.highlight .na {
  color: #4271ae;
}

/* Name.Attribute */
.highlight .nb {
  color: #4d4d4c;
}

/* Name.Builtin */
.highlight .nc {
  color: #eab700;
}

/* Name.Class */
.highlight .no {
  color: #c82829;
}

/* Name.Constant */
.highlight .nd {
  color: #3e999f;
}

/* Name.Decorator */
.highlight .ni {
  color: #4d4d4c;
}

/* Name.Entity */
.highlight .ne {
  color: #c82829;
}

/* Name.Exception */
.highlight .nf {
  color: #4271ae;
}

/* Name.Function */
.highlight .nl {
  color: #4d4d4c;
}

/* Name.Label */
.highlight .nn {
  color: #eab700;
}

/* Name.Namespace */
.highlight .nx {
  color: #4271ae;
}

/* Name.Other */
.highlight .py {
  color: #4d4d4c;
}

/* Name.Property */
.highlight .nt {
  color: #3e999f;
}

/* Name.Tag */
.highlight .nv {
  color: #c82829;
}

/* Name.Variable */
.highlight .ow {
  color: #3e999f;
}

/* Operator.Word */
.highlight .w {
  color: #4d4d4c;
}

/* Text.Whitespace */
.highlight .mf {
  color: #f5871f;
}

/* Literal.Number.Float */
.highlight .mh {
  color: #f5871f;
}

/* Literal.Number.Hex */
.highlight .mi {
  color: #f5871f;
}

/* Literal.Number.Integer */
.highlight .mo {
  color: #f5871f;
}

/* Literal.Number.Oct */
.highlight .sb {
  color: #718c00;
}

/* Literal.String.Backtick */
.highlight .sc {
  color: #4d4d4c;
}

/* Literal.String.Char */
.highlight .sd {
  color: #8e908c;
}

/* Literal.String.Doc */
.highlight .s2 {
  color: #718c00;
}

/* Literal.String.Double */
.highlight .se {
  color: #f5871f;
}

/* Literal.String.Escape */
.highlight .sh {
  color: #718c00;
}

/* Literal.String.Heredoc */
.highlight .si {
  color: #f5871f;
}

/* Literal.String.Interpol */
.highlight .sx {
  color: #718c00;
}

/* Literal.String.Other */
.highlight .sr {
  color: #718c00;
}

/* Literal.String.Regex */
.highlight .s1 {
  color: #718c00;
}

/* Literal.String.Single */
.highlight .ss {
  color: #718c00;
}

/* Literal.String.Symbol */
.highlight .bp {
  color: #4d4d4c;
}

/* Name.Builtin.Pseudo */
.highlight .vc {
  color: #c82829;
}

/* Name.Variable.Class */
.highlight .vg {
  color: #c82829;
}

/* Name.Variable.Global */
.highlight .vi {
  color: #c82829;
}

/* Name.Variable.Instance */
.highlight .il {
  color: #f5871f;
}

/* Literal.Number.Integer.Long */
</style>