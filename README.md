<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Bradford][bradford-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Bradford][bradford-distribution] random variable is

<!-- <equation class="equation" label="eq:bradford_quantile_function" align="center" raw="Q(p;c)=\frac{(1+c)^p - 1}{c}" alt="Quantile function for a Bradford distribution."> -->

```math
Q(p;c)=\frac{(1+c)^p - 1}{c}
```

<!-- <div class="equation" align="center" data-raw-text="Q(p;c)=\frac{(1+c)^p - 1}{c}" data-equation="eq:bradford_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bradford/quantile/docs/img/equation_bradford_quantile_function.svg" alt="Quantile function for a Bradford distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p <= 1`, where `c` is the shape parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-bradford-quantile
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats-base-dists-bradford-quantile' );
```

#### quantile( p, c )

Evaluates the [quantile function][quantile-function] for a [Bradford][bradford-distribution] distribution with shape parameter `c` at a probability `p`.

```javascript
var y = quantile( 0.1, 0.1 );
// returns ~0.096

y = quantile( 0.5, 5.0 );
// returns ~0.290

y = quantile( 1.0, 10.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0 );
// returns NaN

y = quantile( 0.0, NaN );
// returns NaN
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 2.0, 0.5 );
// returns NaN

y = quantile( -1.0, 0.5 );
// returns NaN
```

If provided a shape parameter `c <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.5, 0.0 );
// returns NaN

y = quantile( 0.5, -10.0 );
// returns NaN
```

#### quantile.factory( c )

Returns a function for evaluating the [quantile function][quantile-function] for a [Bradford][bradford-distribution] distribution with shape parameter `c`.

```javascript
var myquantile = quantile.factory( 5.0 );
var y = myquantile( 0.4 );
// returns ~0.210

y = myquantile( 0.8 );
// returns ~0.639

y = myquantile( 1.0 );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var quantile = require( '@stdlib/stats-base-dists-bradford-quantile' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 10, 0.0, 1.0, opts );
var c = uniform( 10, 0.1, 10.0, opts );

logEachMap( 'p: %0.4f, c: %0.4f, Q(p;c): %0.4f', p, c, quantile );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

<section class="c">

## C APIs

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/bradford/quantile.h"
```

#### stdlib_base_dists_bradford_quantile( p, c )

Returns the quantile function of a Bradford distribution.

```c
double out = stdlib_base_dists_bradford_quantile( 0.5, 5.0 );
// returns ~0.290
```

The function accepts the following arguments:

-   **p**: `[in] double` input probability.
-   **c**: `[in] double` shape parameter.

```c
double stdlib_base_dists_bradford_quantile( const double p, const double c );
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/bradford/quantile.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double p;
    double c;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        p = random_uniform( 0.0, 1.0 );
        c = random_uniform( 0.01, 10.0 );
        y = stdlib_base_dists_bradford_quantile( p, c );
        printf( "p: %lf, c: %lf, Q(p;c): %lf\n", p, c, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-bradford-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-bradford-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-bradford-quantile/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-bradford-quantile/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-bradford-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-bradford-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-bradford-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-bradford-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-bradford-quantile/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-bradford-quantile/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-bradford-quantile/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-bradford-quantile/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-bradford-quantile/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-bradford-quantile/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-bradford-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-bradford-quantile/main/LICENSE

[bradford-distribution]: https://en.wikipedia.org/wiki/Bradford%27s_law

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
