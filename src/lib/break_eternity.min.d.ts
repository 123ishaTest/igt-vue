import {DecimalValue} from "@/lib/DecimalValueType";

declare class Decimal {
    static fromComponents(sign: number, layer: number, mag: number): Decimal;
    static fromComponents_noNormalize(sign: number, layer: number, mag: number): Decimal;
    static fromMantissaExponent(mantissa: number, exponent: number): Decimal;
    static fromMantissaExponent_noNormalize(mantissa: number, exponent: number): Decimal;
    static fromDecimal(value: DecimalValue): Decimal;
    static fromNumber(value: DecimalValue): Decimal;
    static fromString(value: DecimalValue): Decimal;
    static fromValue(value: DecimalValue): Decimal;
    static fromValue_noAlloc(value: DecimalValue): Decimal;
    static abs(value: DecimalValue): Decimal;
    static neg(value: DecimalValue): Decimal;
    static negate(value: DecimalValue): Decimal;
    static negated(value: DecimalValue): Decimal;
    static sign(value: DecimalValue): number;
    static sgn(value: DecimalValue): number;
    static round(value: DecimalValue): Decimal;
    static floor(value: DecimalValue): Decimal;
    static ceil(value: DecimalValue): Decimal;
    static trunc(value: DecimalValue): Decimal;
    static add(value: DecimalValue, other: DecimalValue): Decimal;
    static plus(value: DecimalValue, other: DecimalValue): Decimal;
    static sub(value: DecimalValue, other: DecimalValue): Decimal;
    static subtract(value: DecimalValue, other: DecimalValue): Decimal;
    static minus(value: DecimalValue, other: DecimalValue): Decimal;
    static mul(value: DecimalValue, other: DecimalValue): Decimal;
    static multiply(value: DecimalValue, other: DecimalValue): Decimal;
    static times(value: DecimalValue, other: DecimalValue): Decimal;
    static div(value: DecimalValue, other: DecimalValue): Decimal;
    static divide(value: DecimalValue, other: DecimalValue): Decimal;
    static recip(value: DecimalValue): Decimal;
    static reciprocal(value: DecimalValue): Decimal;
    static reciprocate(value: DecimalValue): Decimal;
    static cmp(value: DecimalValue, other: DecimalValue): Decimal;
    static cmpabs(value: DecimalValue, other: DecimalValue): Decimal;
    static compare(value: DecimalValue, other: DecimalValue): Decimal;
    static eq(value: DecimalValue, other: DecimalValue): Decimal;
    static equals(value: DecimalValue, other: DecimalValue): Decimal;
    static neq(value: DecimalValue, other: DecimalValue): Decimal;
    static notEquals(value: DecimalValue, other: DecimalValue): Decimal;
    static lt(value: DecimalValue, other: DecimalValue): Decimal;
    static lte(value: DecimalValue, other: DecimalValue): Decimal;
    static gt(value: DecimalValue, other: DecimalValue): Decimal;
    static gte(value: DecimalValue, other: DecimalValue): Decimal;
    static max(value: DecimalValue, other: DecimalValue): Decimal;
    static min(value: DecimalValue, other: DecimalValue): Decimal;
    static minabs(value: DecimalValue, other: DecimalValue): Decimal;
    static maxabs(value: DecimalValue, other: DecimalValue): Decimal;
    static clamp(value: DecimalValue, min, max): Decimal;
    static clampMin(value: DecimalValue, min): Decimal;
    static clampMax(value: DecimalValue, max): Decimal;
    static cmp_tolerance(value: DecimalValue, other: DecimalValue, tolerance: number): Decimal;
    static compare_tolerance(value: DecimalValue, other: DecimalValue, tolerance: number): Decimal;
    static eq_tolerance(value: DecimalValue, other: DecimalValue, tolerance: number): Decimal;
    static equals_tolerance(value: DecimalValue, other: DecimalValue, tolerance: number): Decimal;
    static neq_tolerance(value: DecimalValue, other: DecimalValue, tolerance: number): Decimal;
    static notEquals_tolerance(value: DecimalValue, other: DecimalValue, tolerance: number): Decimal;
    static lt_tolerance(value: DecimalValue, other: DecimalValue, tolerance: number): Decimal;
    static lte_tolerance(value: DecimalValue, other: DecimalValue, tolerance: number): Decimal;
    static gt_tolerance(value: DecimalValue, other: DecimalValue, tolerance: number): Decimal;
    static gte_tolerance(value: DecimalValue, other: DecimalValue, tolerance: number): Decimal;
    static pLog10(value: DecimalValue): Decimal;
    static absLog10(value: DecimalValue): Decimal;
    static log10(value: DecimalValue): Decimal;
    static log(value: DecimalValue, base: number): Decimal;
    static log2(value: DecimalValue): Decimal;
    static ln(value: DecimalValue): Decimal;
    static logarithm(value: DecimalValue, base: number): Decimal;
    static pow(value: DecimalValue, other: DecimalValue): Decimal;
    static pow10(value: DecimalValue): Decimal;
    static root(value: DecimalValue, other: DecimalValue): Decimal;
    static factorial(value: DecimalValue, other: DecimalValue): Decimal;
    static gamma(value: DecimalValue, other: DecimalValue): Decimal;
    static lngamma(value: DecimalValue, other: DecimalValue): Decimal;
    static exp(value: DecimalValue): Decimal;
    static sqr(value: DecimalValue): Decimal;
    static sqrt(value: DecimalValue): Decimal;
    static cube(value: DecimalValue): Decimal;
    static cbrt(value: DecimalValue): Decimal;
    static tetrate(value: DecimalValue, height: number = 2, payload: DecimalValue = FC_NN(1, 0, 1)): Decimal;
    static iteratedexp(value: DecimalValue, height: number = 2, payload: DecimalValue = FC_NN(1, 0, 1)): Decimal;
    static iteratedlog(value: DecimalValue, base: number = 10, times: number = 1): Decimal;
    static layeradd10(value: DecimalValue, diff: number): Decimal;
    static layeradd(value: DecimalValue, diff: number, base: number = 10): Decimal;
    static slog(value: DecimalValue, base: number = 10): Decimal;
    static lambertw(value: DecimalValue): Decimal;
    static ssqrt(value: DecimalValue): Decimal;
    static pentate(value: DecimalValue, height: number = 2, payload: DecimalValue = FC_NN(1, 0, 1)): Decimal;
    /**
     * If you're willing to spend 'resourcesAvailable' and want to buy something
     * with exponentially increasing cost each purchase (start at priceStart,
     * multiply by priceRatio, already own currentOwned), how much of it can you buy?
     * Adapted from Trimps source code.
     */
    static affordGeometricSeries(resourcesAvailable: DecimalValue, priceStart: DecimalValue, priceRatio: DecimalValue, currentOwned: DecimalValue): Decimal;
    /**
     * How much resource would it cost to buy (numItems) items if you already have currentOwned,
     * the initial price is priceStart and it multiplies by priceRatio each purchase?
     */
    static sumGeometricSeries(numItems: DecimalValue, priceStart: DecimalValue, priceRatio: DecimalValue, currentOwned: DecimalValue): Decimal;
    /**
     * If you're willing to spend 'resourcesAvailable' and want to buy something with additively
     * increasing cost each purchase (start at priceStart, add by priceAdd, already own currentOwned),
     * how much of it can you buy?
     */
    static affordArithmeticSeries(resourcesAvailable: DecimalValue, priceStart: DecimalValue, priceAdd: DecimalValue, currentOwned: DecimalValue): Decimal;
    /**
     * How much resource would it cost to buy (numItems) items if you already have currentOwned,
     * the initial price is priceStart and it adds priceAdd each purchase?
     * Adapted from http://www.mathwords.com/a/arithmetic_series.htm
     */
    static sumArithmeticSeries(numItems: DecimalValue, priceStart: DecimalValue, priceAdd: DecimalValue, currentOwned: DecimalValue): Decimal;
    /**
     * When comparing two purchases that cost (resource) and increase your resource/sec by (deltaRpS),
     * the lowest efficiency score is the better one to purchase.
     * From Frozen Cookies:
     * http://cookieclicker.wikia.com/wiki/Frozen_Cookies_(JavaScript_Add-on)#Efficiency.3F_What.27s_that.3F
     */
    static efficiencyOfPurchase(cost: DecimalValue, currentRpS: DecimalValue, deltaRpS: DecimalValue): Decimal;
    static randomDecimalForTesting(maxLayers: number): Decimal;
    static affordGeometricSeries_core(resourcesAvailable: DecimalValue, priceStart: DecimalValue, priceRatio: DecimalValue, currentOwned: DecimalValue): Decimal;
    static sumGeometricSeries_core(numItems: DecimalValue, priceStart: DecimalValue, priceRatio: DecimalValue, currentOwned: DecimalValue): Decimal;
    static affordArithmeticSeries_core(resourcesAvailable: DecimalValue, priceStart: DecimalValue, priceAdd: DecimalValue, currentOwned: DecimalValue): Decimal;
    static sumArithmeticSeries_core(numItems: DecimalValue, priceStart: DecimalValue, priceAdd: DecimalValue, currentOwned: DecimalValue): Decimal;
    static efficiencyOfPurchase_core(cost: DecimalValue, currentRpS: DecimalValue, deltaRpS: DecimalValue): Decimal;

    static get dZero(): Decimal;
    static get dOne(): Decimal;
    static get dNegOne(): Decimal;
    static get dTwo(): Decimal;
    static get dTen(): Decimal;
    static get dInf(): Decimal;
    static get dNegInf(): Decimal;
    static get dNumberMax(): Decimal;
    static get dNumberMin(): Decimal;

    constructor(value?: DecimalValue);

    get sign(): number;
    get layer(): number;
    get mag(): number;

    get m(): number;
    set m(value: DecimalValue);
    get mantissa(): number;
    set mantissa(value: DecimalValue);

    get e(): number;
    set e(value: DecimalValue);
    get exponent(): number;
    set exponent(value: DecimalValue);

    get s(): number;
    set s(value: DecimalValue);

    normalize(): Decimal;

    fromComponents(sign: number, layer: number, mag: number): Decimal;
    fromComponents_noNormalize(sign: number, layer: number, mag: number): Decimal;
    fromMantissaExponent(mantissa: number, exponent: number): Decimal;
    fromMantissaExponent_noNormalize(mantissa: number, exponent: number): Decimal;
    fromDecimal(value: DecimalValue): Decimal;
    fromNumber(value: DecimalValue): Decimal;
    fromString(value: DecimalValue): Decimal;
    fromValue(value: DecimalValue): Decimal;

    toNumber(): number;
    mantissaWithDecimalPlaces(places: number): number;
    magnitudeWithDecimalPlaces(places: number): number;
    toString(): string;
    toExponential(places: number): string;
    toFixed(places: number): string;
    toPrecision(places: number): string;
    valueOf(): string;
    toJSON(): string;
    toStringWithDecimalPlaces(places: number): string;

    abs(): Decimal;
    neg(): Decimal;
    negate(): Decimal;
    negated(): Decimal;
    sign(): number;
    sgn(): number;
    round(): Decimal;
    floor(): Decimal;
    ceil(): Decimal;
    trunc(): Decimal;
    add(value: DecimalValue): Decimal;
    plus(value: DecimalValue): Decimal;
    sub(value: DecimalValue): Decimal;
    subtract(value: DecimalValue): Decimal;
    minus(value: DecimalValue): Decimal;
    mul(value: DecimalValue): Decimal;
    multiply(value: DecimalValue): Decimal;
    times(value: DecimalValue): Decimal;
    div(value: DecimalValue): Decimal;
    divide(value: DecimalValue): Decimal;
    divideBy(value: DecimalValue): Decimal;
    dividedBy(value: DecimalValue): Decimal;
    recip(): Decimal;
    reciprocal(): Decimal;
    reciprocate(): Decimal;

    /**
     * -1 for less than value, 0 for equals value, 1 for greater than value
     */
    cmp(value: DecimalValue): boolean;
    cmpabs(value: DecimalValue): boolean;
    compare(value: DecimalValue): boolean;
    eq(value: DecimalValue): boolean;
    equals(value: DecimalValue): boolean;
    neq(value: DecimalValue): boolean;
    notEquals(value: DecimalValue): boolean;
    lt(value: DecimalValue): boolean;
    lte(value: DecimalValue): boolean;
    gt(value: DecimalValue): boolean;
    gte(value: DecimalValue): boolean;
    max(value: DecimalValue): Decimal;
    min(value: DecimalValue): Decimal;
    maxabs(value: DecimalValue): Decimal;
    minabs(value: DecimalValue): Decimal;
    clamp(min: DecimalValue, max: DecimalValue): Decimal;
    clampMin(min: DecimalValue): Decimal;
    clampMax(max: DecimalValue): Decimal;
    cmp_tolerance(value: DecimalValue, tolerance: number): boolean;
    compare_tolerance(value: DecimalValue, tolerance: number): boolean;
    /**
     * Tolerance is a relative tolerance, multiplied by the greater of the magnitudes of the two arguments.
     * For example, if you put in 1e-9, then any number closer to the
     * larger number than (larger number)*1e-9 will be considered equal.
     */
    eq_tolerance(value: DecimalValue, tolerance: number): boolean;
    equals_tolerance(value: DecimalValue, tolerance: number): boolean;
    neq_tolerance(value: DecimalValue, tolerance: number): boolean;
    notEquals_tolerance(value: DecimalValue, tolerance: number): boolean;
    lt_tolerance(value: DecimalValue, tolerance: number): boolean;
    lte_tolerance(value: DecimalValue, tolerance: number): boolean;
    gt_tolerance(value: DecimalValue, tolerance: number): boolean;
    gte_tolerance(value: DecimalValue, tolerance: number): boolean;
    pLog10(): Decimal;
    absLog10(): Decimal;
    log10(): Decimal;
    log(base: number): Decimal;
    log2(): Decimal;
    ln(): Decimal;
    logarithm(base: number): Decimal;
    pow(value: DecimalValue): Decimal;
    pow10(): Decimal;
    pow_base(value: DecimalValue): Decimal;
    root(value: DecimalValue): Decimal;
    factorial(): Decimal;
    //from HyperCalc source code
    gamma(): Decimal;
    lngamma(): Decimal;
    exp(): Decimal;
    sqr(): Decimal;
    sqrt(): Decimal;
    cube(): Decimal;
    cbrt(): Decimal;
    //Tetration/tetrate: The result of exponentiating 'this' to 'this' 'height' times in a row.  https://en.wikipedia.org/wiki/Tetration
    //If payload != 1, then this is 'iterated exponentiation', the result of exping (payload) to base (this) (height) times. https://andydude.github.io/tetration/archives/tetration2/ident.html
    //Works with negative and positive real heights.
    tetrate(height: number = 2, payload: DecimalValue = FC_NN(1, 0, 1)): Decimal;
    //iteratedexp/iterated exponentiation: - all cases handled in tetrate, so just call it
    iteratedexp(height: number = 2, payload: DecimalValue = FC_NN(1, 0, 1)): Decimal;
    //iterated log/repeated log: The result of applying log(base) 'times' times in a row. Approximately equal to subtracting (times) from the number's slog representation. Equivalent to tetrating to a negative height.
    //Works with negative and positive real heights.
    iteratedlog(base: number = 10, times: number = 1): Decimal;
    //Super-logarithm, one of tetration's inverses, tells you what size power tower you'd have to tetrate base to to get number. By definition, will never be higher than 1.8e308 in break_eternity.js, since a power tower 1.8e308 numbers tall is the largest representable number.
    // https://en.wikipedia.org/wiki/Super-logarithm
    slog(base: number = 10): Decimal;
    //Function for adding/removing layers from a Decimal, even fractional layers (e.g. its slog10 representation).
    //Everything continues to use the linear approximation ATM.
    layeradd10(diff: number): Decimal;
    //layeradd: like adding 'diff' to the number's slog(base) representation. Very similar to tetrate base 'base' and iterated log base 'base'.
    layeradd(diff: number, base: number): Decimal;
    //The Lambert W function, also called the omega function or product logarithm, is the solution W(x) === x*e^x.
    // https://en.wikipedia.org/wiki/Lambert_W_function
    //Some special values, for testing: https://en.wikipedia.org/wiki/Lambert_W_function#Special_values
    lambertw(): Decimal;
    //The super square-root function - what number, tetrated to height 2, equals this?
    //Other sroots are possible to calculate probably through guess and check methods, this one is easy though.
    // https://en.wikipedia.org/wiki/Tetration#Super-root
    ssqrt(): Decimal;
    //Pentation/pentate: The result of tetrating 'height' times in a row. An absurdly strong operator - Decimal.pentate(2, 4.28) and Decimal.pentate(10, 2.37) are already too huge for break_eternity.js!
    // https://en.wikipedia.org/wiki/Pentation
    pentate(height: number = 2, payload: DecimalValue = FC_NN(1, 0, 1)): Decimal;

    // trig functions!
    sin(): Decimal;
    cos(): Decimal;
    tan(): Decimal;
    asin(): Decimal;
    acos(): Decimal;
    atan(): Decimal;
    sinh(): Decimal;
    cosh(): Decimal;
    tanh(): Decimal;
    asinh(): Decimal;
    acosh(): Decimal;
    atanh(): Decimal;
    /**
     * Joke function from Realm Grinder
     */
    ascensionPenalty(ascensions: number): Decimal;
    /**
     * Joke function from Cookie Clicker. It's 'egg'
     */
    egg(): Decimal;
    lessThanOrEqualTo(other: DecimalValue): Decimal;
    lessThan(other: DecimalValue): Decimal;
    greaterThanOrEqualTo(other: DecimalValue): Decimal;
    greaterThan(other: DecimalValue): Decimal;
}

export = Decimal;
