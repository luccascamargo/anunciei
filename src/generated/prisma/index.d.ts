
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Adverts
 * 
 */
export type Adverts = $Result.DefaultSelection<Prisma.$AdvertsPayload>
/**
 * Model Brands
 * 
 */
export type Brands = $Result.DefaultSelection<Prisma.$BrandsPayload>
/**
 * Model Models
 * 
 */
export type Models = $Result.DefaultSelection<Prisma.$ModelsPayload>
/**
 * Model Optional
 * 
 */
export type Optional = $Result.DefaultSelection<Prisma.$OptionalPayload>
/**
 * Model Photos
 * 
 */
export type Photos = $Result.DefaultSelection<Prisma.$PhotosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  REQUESTED: 'REQUESTED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Plan: {
  FREE: 'FREE',
  BASIC: 'BASIC',
  PRO: 'PRO'
};

export type Plan = (typeof Plan)[keyof typeof Plan]


export const Category: {
  CARS: 'CARS',
  TRUCKS: 'TRUCKS',
  MOTORCYCLES: 'MOTORCYCLES'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Plan = $Enums.Plan

export const Plan: typeof $Enums.Plan

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adverts`: Exposes CRUD operations for the **Adverts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adverts
    * const adverts = await prisma.adverts.findMany()
    * ```
    */
  get adverts(): Prisma.AdvertsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brands`: Exposes CRUD operations for the **Brands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brands.findMany()
    * ```
    */
  get brands(): Prisma.BrandsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.models`: Exposes CRUD operations for the **Models** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.models.findMany()
    * ```
    */
  get models(): Prisma.ModelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.optional`: Exposes CRUD operations for the **Optional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Optionals
    * const optionals = await prisma.optional.findMany()
    * ```
    */
  get optional(): Prisma.OptionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photos`: Exposes CRUD operations for the **Photos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photos.findMany()
    * ```
    */
  get photos(): Prisma.PhotosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Subscription: 'Subscription',
    Adverts: 'Adverts',
    Brands: 'Brands',
    Models: 'Models',
    Optional: 'Optional',
    Photos: 'Photos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "subscription" | "adverts" | "brands" | "models" | "optional" | "photos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Adverts: {
        payload: Prisma.$AdvertsPayload<ExtArgs>
        fields: Prisma.AdvertsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvertsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvertsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          findFirst: {
            args: Prisma.AdvertsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvertsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          findMany: {
            args: Prisma.AdvertsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>[]
          }
          create: {
            args: Prisma.AdvertsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          createMany: {
            args: Prisma.AdvertsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvertsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>[]
          }
          delete: {
            args: Prisma.AdvertsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          update: {
            args: Prisma.AdvertsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          deleteMany: {
            args: Prisma.AdvertsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvertsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvertsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>[]
          }
          upsert: {
            args: Prisma.AdvertsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          aggregate: {
            args: Prisma.AdvertsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdverts>
          }
          groupBy: {
            args: Prisma.AdvertsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvertsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvertsCountArgs<ExtArgs>
            result: $Utils.Optional<AdvertsCountAggregateOutputType> | number
          }
        }
      }
      Brands: {
        payload: Prisma.$BrandsPayload<ExtArgs>
        fields: Prisma.BrandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          findFirst: {
            args: Prisma.BrandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          findMany: {
            args: Prisma.BrandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          create: {
            args: Prisma.BrandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          createMany: {
            args: Prisma.BrandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          delete: {
            args: Prisma.BrandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          update: {
            args: Prisma.BrandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          deleteMany: {
            args: Prisma.BrandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          upsert: {
            args: Prisma.BrandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          aggregate: {
            args: Prisma.BrandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrands>
          }
          groupBy: {
            args: Prisma.BrandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandsCountArgs<ExtArgs>
            result: $Utils.Optional<BrandsCountAggregateOutputType> | number
          }
        }
      }
      Models: {
        payload: Prisma.$ModelsPayload<ExtArgs>
        fields: Prisma.ModelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          findFirst: {
            args: Prisma.ModelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          findMany: {
            args: Prisma.ModelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          create: {
            args: Prisma.ModelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          createMany: {
            args: Prisma.ModelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          delete: {
            args: Prisma.ModelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          update: {
            args: Prisma.ModelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          deleteMany: {
            args: Prisma.ModelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          upsert: {
            args: Prisma.ModelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          aggregate: {
            args: Prisma.ModelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModels>
          }
          groupBy: {
            args: Prisma.ModelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelsCountArgs<ExtArgs>
            result: $Utils.Optional<ModelsCountAggregateOutputType> | number
          }
        }
      }
      Optional: {
        payload: Prisma.$OptionalPayload<ExtArgs>
        fields: Prisma.OptionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload>
          }
          findFirst: {
            args: Prisma.OptionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload>
          }
          findMany: {
            args: Prisma.OptionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload>[]
          }
          create: {
            args: Prisma.OptionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload>
          }
          createMany: {
            args: Prisma.OptionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload>[]
          }
          delete: {
            args: Prisma.OptionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload>
          }
          update: {
            args: Prisma.OptionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload>
          }
          deleteMany: {
            args: Prisma.OptionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload>[]
          }
          upsert: {
            args: Prisma.OptionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionalPayload>
          }
          aggregate: {
            args: Prisma.OptionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptional>
          }
          groupBy: {
            args: Prisma.OptionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionalCountArgs<ExtArgs>
            result: $Utils.Optional<OptionalCountAggregateOutputType> | number
          }
        }
      }
      Photos: {
        payload: Prisma.$PhotosPayload<ExtArgs>
        fields: Prisma.PhotosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          findFirst: {
            args: Prisma.PhotosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          findMany: {
            args: Prisma.PhotosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>[]
          }
          create: {
            args: Prisma.PhotosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          createMany: {
            args: Prisma.PhotosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>[]
          }
          delete: {
            args: Prisma.PhotosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          update: {
            args: Prisma.PhotosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          deleteMany: {
            args: Prisma.PhotosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>[]
          }
          upsert: {
            args: Prisma.PhotosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          aggregate: {
            args: Prisma.PhotosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotos>
          }
          groupBy: {
            args: Prisma.PhotosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotosCountArgs<ExtArgs>
            result: $Utils.Optional<PhotosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    subscription?: SubscriptionOmit
    adverts?: AdvertsOmit
    brands?: BrandsOmit
    models?: ModelsOmit
    optional?: OptionalOmit
    photos?: PhotosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    adverts: number
    subscriptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adverts?: boolean | UserCountOutputTypeCountAdvertsArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdvertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type AdvertsCountOutputType
   */

  export type AdvertsCountOutputType = {
    images: number
    optionals: number
  }

  export type AdvertsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | AdvertsCountOutputTypeCountImagesArgs
    optionals?: boolean | AdvertsCountOutputTypeCountOptionalsArgs
  }

  // Custom InputTypes
  /**
   * AdvertsCountOutputType without action
   */
  export type AdvertsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertsCountOutputType
     */
    select?: AdvertsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdvertsCountOutputType without action
   */
  export type AdvertsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotosWhereInput
  }

  /**
   * AdvertsCountOutputType without action
   */
  export type AdvertsCountOutputTypeCountOptionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionalWhereInput
  }


  /**
   * Count Type BrandsCountOutputType
   */

  export type BrandsCountOutputType = {
    models: number
    adverts: number
  }

  export type BrandsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | BrandsCountOutputTypeCountModelsArgs
    adverts?: boolean | BrandsCountOutputTypeCountAdvertsArgs
  }

  // Custom InputTypes
  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsCountOutputType
     */
    select?: BrandsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelsWhereInput
  }

  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeCountAdvertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertsWhereInput
  }


  /**
   * Count Type ModelsCountOutputType
   */

  export type ModelsCountOutputType = {
    adverts: number
  }

  export type ModelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adverts?: boolean | ModelsCountOutputTypeCountAdvertsArgs
  }

  // Custom InputTypes
  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelsCountOutputType
     */
    select?: ModelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeCountAdvertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertsWhereInput
  }


  /**
   * Count Type OptionalCountOutputType
   */

  export type OptionalCountOutputType = {
    adverts: number
  }

  export type OptionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adverts?: boolean | OptionalCountOutputTypeCountAdvertsArgs
  }

  // Custom InputTypes
  /**
   * OptionalCountOutputType without action
   */
  export type OptionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionalCountOutputType
     */
    select?: OptionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionalCountOutputType without action
   */
  export type OptionalCountOutputTypeCountAdvertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    stripe_id: string | null
    name: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    active: boolean | null
    plan: $Enums.Plan | null
    updated_at: Date | null
    created_at: Date | null
    image: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    stripe_id: string | null
    name: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    active: boolean | null
    plan: $Enums.Plan | null
    updated_at: Date | null
    created_at: Date | null
    image: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    stripe_id: number
    name: number
    lastname: number
    email: number
    phone: number
    active: number
    plan: number
    updated_at: number
    created_at: number
    image: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    stripe_id?: true
    name?: true
    lastname?: true
    email?: true
    phone?: true
    active?: true
    plan?: true
    updated_at?: true
    created_at?: true
    image?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    stripe_id?: true
    name?: true
    lastname?: true
    email?: true
    phone?: true
    active?: true
    plan?: true
    updated_at?: true
    created_at?: true
    image?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    stripe_id?: true
    name?: true
    lastname?: true
    email?: true
    phone?: true
    active?: true
    plan?: true
    updated_at?: true
    created_at?: true
    image?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    stripe_id: string | null
    name: string
    lastname: string
    email: string
    phone: string | null
    active: boolean
    plan: $Enums.Plan
    updated_at: Date
    created_at: Date
    image: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripe_id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    plan?: boolean
    updated_at?: boolean
    created_at?: boolean
    image?: boolean
    password?: boolean
    adverts?: boolean | User$advertsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripe_id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    plan?: boolean
    updated_at?: boolean
    created_at?: boolean
    image?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripe_id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    plan?: boolean
    updated_at?: boolean
    created_at?: boolean
    image?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    stripe_id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    plan?: boolean
    updated_at?: boolean
    created_at?: boolean
    image?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stripe_id" | "name" | "lastname" | "email" | "phone" | "active" | "plan" | "updated_at" | "created_at" | "image" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adverts?: boolean | User$advertsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      adverts: Prisma.$AdvertsPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stripe_id: string | null
      name: string
      lastname: string
      email: string
      phone: string | null
      active: boolean
      plan: $Enums.Plan
      updated_at: Date
      created_at: Date
      image: string | null
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adverts<T extends User$advertsArgs<ExtArgs> = {}>(args?: Subset<T, User$advertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly stripe_id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly plan: FieldRef<"User", 'Plan'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.adverts
   */
  export type User$advertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    where?: AdvertsWhereInput
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    cursor?: AdvertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    status: string | null
    subscripton_id: string | null
    cycle: string | null
    user_id: string | null
    stripe_product_id: string | null
    updated_at: Date | null
    created_ad: Date | null
    cancel_at_period_end: boolean | null
    current_period_start: Date | null
    current_period_end: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    status: string | null
    subscripton_id: string | null
    cycle: string | null
    user_id: string | null
    stripe_product_id: string | null
    updated_at: Date | null
    created_ad: Date | null
    cancel_at_period_end: boolean | null
    current_period_start: Date | null
    current_period_end: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    status: number
    subscripton_id: number
    cycle: number
    user_id: number
    stripe_product_id: number
    updated_at: number
    created_ad: number
    cancel_at_period_end: number
    current_period_start: number
    current_period_end: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    status?: true
    subscripton_id?: true
    cycle?: true
    user_id?: true
    stripe_product_id?: true
    updated_at?: true
    created_ad?: true
    cancel_at_period_end?: true
    current_period_start?: true
    current_period_end?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    status?: true
    subscripton_id?: true
    cycle?: true
    user_id?: true
    stripe_product_id?: true
    updated_at?: true
    created_ad?: true
    cancel_at_period_end?: true
    current_period_start?: true
    current_period_end?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    status?: true
    subscripton_id?: true
    cycle?: true
    user_id?: true
    stripe_product_id?: true
    updated_at?: true
    created_ad?: true
    cancel_at_period_end?: true
    current_period_start?: true
    current_period_end?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    status: string
    subscripton_id: string | null
    cycle: string
    user_id: string
    stripe_product_id: string | null
    updated_at: Date
    created_ad: Date
    cancel_at_period_end: boolean
    current_period_start: Date
    current_period_end: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    subscripton_id?: boolean
    cycle?: boolean
    user_id?: boolean
    stripe_product_id?: boolean
    updated_at?: boolean
    created_ad?: boolean
    cancel_at_period_end?: boolean
    current_period_start?: boolean
    current_period_end?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    subscripton_id?: boolean
    cycle?: boolean
    user_id?: boolean
    stripe_product_id?: boolean
    updated_at?: boolean
    created_ad?: boolean
    cancel_at_period_end?: boolean
    current_period_start?: boolean
    current_period_end?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    subscripton_id?: boolean
    cycle?: boolean
    user_id?: boolean
    stripe_product_id?: boolean
    updated_at?: boolean
    created_ad?: boolean
    cancel_at_period_end?: boolean
    current_period_start?: boolean
    current_period_end?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    status?: boolean
    subscripton_id?: boolean
    cycle?: boolean
    user_id?: boolean
    stripe_product_id?: boolean
    updated_at?: boolean
    created_ad?: boolean
    cancel_at_period_end?: boolean
    current_period_start?: boolean
    current_period_end?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "subscripton_id" | "cycle" | "user_id" | "stripe_product_id" | "updated_at" | "created_ad" | "cancel_at_period_end" | "current_period_start" | "current_period_end", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      subscripton_id: string | null
      cycle: string
      user_id: string
      stripe_product_id: string | null
      updated_at: Date
      created_ad: Date
      cancel_at_period_end: boolean
      current_period_start: Date
      current_period_end: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly subscripton_id: FieldRef<"Subscription", 'String'>
    readonly cycle: FieldRef<"Subscription", 'String'>
    readonly user_id: FieldRef<"Subscription", 'String'>
    readonly stripe_product_id: FieldRef<"Subscription", 'String'>
    readonly updated_at: FieldRef<"Subscription", 'DateTime'>
    readonly created_ad: FieldRef<"Subscription", 'DateTime'>
    readonly cancel_at_period_end: FieldRef<"Subscription", 'Boolean'>
    readonly current_period_start: FieldRef<"Subscription", 'DateTime'>
    readonly current_period_end: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Adverts
   */

  export type AggregateAdverts = {
    _count: AdvertsCountAggregateOutputType | null
    _avg: AdvertsAvgAggregateOutputType | null
    _sum: AdvertsSumAggregateOutputType | null
    _min: AdvertsMinAggregateOutputType | null
    _max: AdvertsMaxAggregateOutputType | null
  }

  export type AdvertsAvgAggregateOutputType = {
    year_model: number | null
    price: number | null
    mileage: number | null
  }

  export type AdvertsSumAggregateOutputType = {
    year_model: number | null
    price: number | null
    mileage: number | null
  }

  export type AdvertsMinAggregateOutputType = {
    id: string | null
    type: string | null
    year_model: number | null
    color: string | null
    city: string | null
    formatted_city: string | null
    state: string | null
    formatted_state: string | null
    price: number | null
    doors: string | null
    mileage: number | null
    description: string | null
    formatted_description: string | null
    plate: string | null
    transmission: string | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
    slug: string | null
    emphasis: boolean | null
    user_id: string | null
    model_id: string | null
    brand_id: string | null
  }

  export type AdvertsMaxAggregateOutputType = {
    id: string | null
    type: string | null
    year_model: number | null
    color: string | null
    city: string | null
    formatted_city: string | null
    state: string | null
    formatted_state: string | null
    price: number | null
    doors: string | null
    mileage: number | null
    description: string | null
    formatted_description: string | null
    plate: string | null
    transmission: string | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
    slug: string | null
    emphasis: boolean | null
    user_id: string | null
    model_id: string | null
    brand_id: string | null
  }

  export type AdvertsCountAggregateOutputType = {
    id: number
    type: number
    year_model: number
    color: number
    city: number
    formatted_city: number
    state: number
    formatted_state: number
    price: number
    doors: number
    mileage: number
    description: number
    formatted_description: number
    plate: number
    transmission: number
    created_at: number
    updated_at: number
    status: number
    slug: number
    emphasis: number
    user_id: number
    model_id: number
    brand_id: number
    _all: number
  }


  export type AdvertsAvgAggregateInputType = {
    year_model?: true
    price?: true
    mileage?: true
  }

  export type AdvertsSumAggregateInputType = {
    year_model?: true
    price?: true
    mileage?: true
  }

  export type AdvertsMinAggregateInputType = {
    id?: true
    type?: true
    year_model?: true
    color?: true
    city?: true
    formatted_city?: true
    state?: true
    formatted_state?: true
    price?: true
    doors?: true
    mileage?: true
    description?: true
    formatted_description?: true
    plate?: true
    transmission?: true
    created_at?: true
    updated_at?: true
    status?: true
    slug?: true
    emphasis?: true
    user_id?: true
    model_id?: true
    brand_id?: true
  }

  export type AdvertsMaxAggregateInputType = {
    id?: true
    type?: true
    year_model?: true
    color?: true
    city?: true
    formatted_city?: true
    state?: true
    formatted_state?: true
    price?: true
    doors?: true
    mileage?: true
    description?: true
    formatted_description?: true
    plate?: true
    transmission?: true
    created_at?: true
    updated_at?: true
    status?: true
    slug?: true
    emphasis?: true
    user_id?: true
    model_id?: true
    brand_id?: true
  }

  export type AdvertsCountAggregateInputType = {
    id?: true
    type?: true
    year_model?: true
    color?: true
    city?: true
    formatted_city?: true
    state?: true
    formatted_state?: true
    price?: true
    doors?: true
    mileage?: true
    description?: true
    formatted_description?: true
    plate?: true
    transmission?: true
    created_at?: true
    updated_at?: true
    status?: true
    slug?: true
    emphasis?: true
    user_id?: true
    model_id?: true
    brand_id?: true
    _all?: true
  }

  export type AdvertsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adverts to aggregate.
     */
    where?: AdvertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adverts
    **/
    _count?: true | AdvertsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdvertsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdvertsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvertsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvertsMaxAggregateInputType
  }

  export type GetAdvertsAggregateType<T extends AdvertsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdverts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdverts[P]>
      : GetScalarType<T[P], AggregateAdverts[P]>
  }




  export type AdvertsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertsWhereInput
    orderBy?: AdvertsOrderByWithAggregationInput | AdvertsOrderByWithAggregationInput[]
    by: AdvertsScalarFieldEnum[] | AdvertsScalarFieldEnum
    having?: AdvertsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvertsCountAggregateInputType | true
    _avg?: AdvertsAvgAggregateInputType
    _sum?: AdvertsSumAggregateInputType
    _min?: AdvertsMinAggregateInputType
    _max?: AdvertsMaxAggregateInputType
  }

  export type AdvertsGroupByOutputType = {
    id: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description: string | null
    formatted_description: string | null
    plate: string
    transmission: string
    created_at: Date
    updated_at: Date
    status: $Enums.Status
    slug: string
    emphasis: boolean | null
    user_id: string
    model_id: string
    brand_id: string
    _count: AdvertsCountAggregateOutputType | null
    _avg: AdvertsAvgAggregateOutputType | null
    _sum: AdvertsSumAggregateOutputType | null
    _min: AdvertsMinAggregateOutputType | null
    _max: AdvertsMaxAggregateOutputType | null
  }

  type GetAdvertsGroupByPayload<T extends AdvertsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvertsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvertsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvertsGroupByOutputType[P]>
            : GetScalarType<T[P], AdvertsGroupByOutputType[P]>
        }
      >
    >


  export type AdvertsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    year_model?: boolean
    color?: boolean
    city?: boolean
    formatted_city?: boolean
    state?: boolean
    formatted_state?: boolean
    price?: boolean
    doors?: boolean
    mileage?: boolean
    description?: boolean
    formatted_description?: boolean
    plate?: boolean
    transmission?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    slug?: boolean
    emphasis?: boolean
    user_id?: boolean
    model_id?: boolean
    brand_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Adverts$imagesArgs<ExtArgs>
    optionals?: boolean | Adverts$optionalsArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
    _count?: boolean | AdvertsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adverts"]>

  export type AdvertsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    year_model?: boolean
    color?: boolean
    city?: boolean
    formatted_city?: boolean
    state?: boolean
    formatted_state?: boolean
    price?: boolean
    doors?: boolean
    mileage?: boolean
    description?: boolean
    formatted_description?: boolean
    plate?: boolean
    transmission?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    slug?: boolean
    emphasis?: boolean
    user_id?: boolean
    model_id?: boolean
    brand_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adverts"]>

  export type AdvertsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    year_model?: boolean
    color?: boolean
    city?: boolean
    formatted_city?: boolean
    state?: boolean
    formatted_state?: boolean
    price?: boolean
    doors?: boolean
    mileage?: boolean
    description?: boolean
    formatted_description?: boolean
    plate?: boolean
    transmission?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    slug?: boolean
    emphasis?: boolean
    user_id?: boolean
    model_id?: boolean
    brand_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adverts"]>

  export type AdvertsSelectScalar = {
    id?: boolean
    type?: boolean
    year_model?: boolean
    color?: boolean
    city?: boolean
    formatted_city?: boolean
    state?: boolean
    formatted_state?: boolean
    price?: boolean
    doors?: boolean
    mileage?: boolean
    description?: boolean
    formatted_description?: boolean
    plate?: boolean
    transmission?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    slug?: boolean
    emphasis?: boolean
    user_id?: boolean
    model_id?: boolean
    brand_id?: boolean
  }

  export type AdvertsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "year_model" | "color" | "city" | "formatted_city" | "state" | "formatted_state" | "price" | "doors" | "mileage" | "description" | "formatted_description" | "plate" | "transmission" | "created_at" | "updated_at" | "status" | "slug" | "emphasis" | "user_id" | "model_id" | "brand_id", ExtArgs["result"]["adverts"]>
  export type AdvertsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Adverts$imagesArgs<ExtArgs>
    optionals?: boolean | Adverts$optionalsArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
    _count?: boolean | AdvertsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdvertsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
  }
  export type AdvertsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
  }

  export type $AdvertsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adverts"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$PhotosPayload<ExtArgs>[]
      optionals: Prisma.$OptionalPayload<ExtArgs>[]
      model: Prisma.$ModelsPayload<ExtArgs>
      brand: Prisma.$BrandsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      year_model: number
      color: string
      city: string
      formatted_city: string
      state: string
      formatted_state: string
      price: number
      doors: string
      mileage: number
      description: string | null
      formatted_description: string | null
      plate: string
      transmission: string
      created_at: Date
      updated_at: Date
      status: $Enums.Status
      slug: string
      emphasis: boolean | null
      user_id: string
      model_id: string
      brand_id: string
    }, ExtArgs["result"]["adverts"]>
    composites: {}
  }

  type AdvertsGetPayload<S extends boolean | null | undefined | AdvertsDefaultArgs> = $Result.GetResult<Prisma.$AdvertsPayload, S>

  type AdvertsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvertsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvertsCountAggregateInputType | true
    }

  export interface AdvertsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adverts'], meta: { name: 'Adverts' } }
    /**
     * Find zero or one Adverts that matches the filter.
     * @param {AdvertsFindUniqueArgs} args - Arguments to find a Adverts
     * @example
     * // Get one Adverts
     * const adverts = await prisma.adverts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvertsFindUniqueArgs>(args: SelectSubset<T, AdvertsFindUniqueArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adverts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvertsFindUniqueOrThrowArgs} args - Arguments to find a Adverts
     * @example
     * // Get one Adverts
     * const adverts = await prisma.adverts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvertsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvertsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adverts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsFindFirstArgs} args - Arguments to find a Adverts
     * @example
     * // Get one Adverts
     * const adverts = await prisma.adverts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvertsFindFirstArgs>(args?: SelectSubset<T, AdvertsFindFirstArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adverts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsFindFirstOrThrowArgs} args - Arguments to find a Adverts
     * @example
     * // Get one Adverts
     * const adverts = await prisma.adverts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvertsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvertsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adverts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adverts
     * const adverts = await prisma.adverts.findMany()
     * 
     * // Get first 10 Adverts
     * const adverts = await prisma.adverts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advertsWithIdOnly = await prisma.adverts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvertsFindManyArgs>(args?: SelectSubset<T, AdvertsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adverts.
     * @param {AdvertsCreateArgs} args - Arguments to create a Adverts.
     * @example
     * // Create one Adverts
     * const Adverts = await prisma.adverts.create({
     *   data: {
     *     // ... data to create a Adverts
     *   }
     * })
     * 
     */
    create<T extends AdvertsCreateArgs>(args: SelectSubset<T, AdvertsCreateArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adverts.
     * @param {AdvertsCreateManyArgs} args - Arguments to create many Adverts.
     * @example
     * // Create many Adverts
     * const adverts = await prisma.adverts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvertsCreateManyArgs>(args?: SelectSubset<T, AdvertsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adverts and returns the data saved in the database.
     * @param {AdvertsCreateManyAndReturnArgs} args - Arguments to create many Adverts.
     * @example
     * // Create many Adverts
     * const adverts = await prisma.adverts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adverts and only return the `id`
     * const advertsWithIdOnly = await prisma.adverts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvertsCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvertsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adverts.
     * @param {AdvertsDeleteArgs} args - Arguments to delete one Adverts.
     * @example
     * // Delete one Adverts
     * const Adverts = await prisma.adverts.delete({
     *   where: {
     *     // ... filter to delete one Adverts
     *   }
     * })
     * 
     */
    delete<T extends AdvertsDeleteArgs>(args: SelectSubset<T, AdvertsDeleteArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adverts.
     * @param {AdvertsUpdateArgs} args - Arguments to update one Adverts.
     * @example
     * // Update one Adverts
     * const adverts = await prisma.adverts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvertsUpdateArgs>(args: SelectSubset<T, AdvertsUpdateArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adverts.
     * @param {AdvertsDeleteManyArgs} args - Arguments to filter Adverts to delete.
     * @example
     * // Delete a few Adverts
     * const { count } = await prisma.adverts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvertsDeleteManyArgs>(args?: SelectSubset<T, AdvertsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adverts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adverts
     * const adverts = await prisma.adverts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvertsUpdateManyArgs>(args: SelectSubset<T, AdvertsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adverts and returns the data updated in the database.
     * @param {AdvertsUpdateManyAndReturnArgs} args - Arguments to update many Adverts.
     * @example
     * // Update many Adverts
     * const adverts = await prisma.adverts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adverts and only return the `id`
     * const advertsWithIdOnly = await prisma.adverts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvertsUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvertsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adverts.
     * @param {AdvertsUpsertArgs} args - Arguments to update or create a Adverts.
     * @example
     * // Update or create a Adverts
     * const adverts = await prisma.adverts.upsert({
     *   create: {
     *     // ... data to create a Adverts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adverts we want to update
     *   }
     * })
     */
    upsert<T extends AdvertsUpsertArgs>(args: SelectSubset<T, AdvertsUpsertArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adverts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsCountArgs} args - Arguments to filter Adverts to count.
     * @example
     * // Count the number of Adverts
     * const count = await prisma.adverts.count({
     *   where: {
     *     // ... the filter for the Adverts we want to count
     *   }
     * })
    **/
    count<T extends AdvertsCountArgs>(
      args?: Subset<T, AdvertsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvertsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adverts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdvertsAggregateArgs>(args: Subset<T, AdvertsAggregateArgs>): Prisma.PrismaPromise<GetAdvertsAggregateType<T>>

    /**
     * Group by Adverts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdvertsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvertsGroupByArgs['orderBy'] }
        : { orderBy?: AdvertsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdvertsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvertsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adverts model
   */
  readonly fields: AdvertsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adverts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvertsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Adverts$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Adverts$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    optionals<T extends Adverts$optionalsArgs<ExtArgs> = {}>(args?: Subset<T, Adverts$optionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    model<T extends ModelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelsDefaultArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brand<T extends BrandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandsDefaultArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Adverts model
   */
  interface AdvertsFieldRefs {
    readonly id: FieldRef<"Adverts", 'String'>
    readonly type: FieldRef<"Adverts", 'String'>
    readonly year_model: FieldRef<"Adverts", 'Int'>
    readonly color: FieldRef<"Adverts", 'String'>
    readonly city: FieldRef<"Adverts", 'String'>
    readonly formatted_city: FieldRef<"Adverts", 'String'>
    readonly state: FieldRef<"Adverts", 'String'>
    readonly formatted_state: FieldRef<"Adverts", 'String'>
    readonly price: FieldRef<"Adverts", 'Int'>
    readonly doors: FieldRef<"Adverts", 'String'>
    readonly mileage: FieldRef<"Adverts", 'Int'>
    readonly description: FieldRef<"Adverts", 'String'>
    readonly formatted_description: FieldRef<"Adverts", 'String'>
    readonly plate: FieldRef<"Adverts", 'String'>
    readonly transmission: FieldRef<"Adverts", 'String'>
    readonly created_at: FieldRef<"Adverts", 'DateTime'>
    readonly updated_at: FieldRef<"Adverts", 'DateTime'>
    readonly status: FieldRef<"Adverts", 'Status'>
    readonly slug: FieldRef<"Adverts", 'String'>
    readonly emphasis: FieldRef<"Adverts", 'Boolean'>
    readonly user_id: FieldRef<"Adverts", 'String'>
    readonly model_id: FieldRef<"Adverts", 'String'>
    readonly brand_id: FieldRef<"Adverts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Adverts findUnique
   */
  export type AdvertsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where: AdvertsWhereUniqueInput
  }

  /**
   * Adverts findUniqueOrThrow
   */
  export type AdvertsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where: AdvertsWhereUniqueInput
  }

  /**
   * Adverts findFirst
   */
  export type AdvertsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where?: AdvertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adverts.
     */
    cursor?: AdvertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adverts.
     */
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * Adverts findFirstOrThrow
   */
  export type AdvertsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where?: AdvertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adverts.
     */
    cursor?: AdvertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adverts.
     */
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * Adverts findMany
   */
  export type AdvertsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where?: AdvertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adverts.
     */
    cursor?: AdvertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * Adverts create
   */
  export type AdvertsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * The data needed to create a Adverts.
     */
    data: XOR<AdvertsCreateInput, AdvertsUncheckedCreateInput>
  }

  /**
   * Adverts createMany
   */
  export type AdvertsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adverts.
     */
    data: AdvertsCreateManyInput | AdvertsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adverts createManyAndReturn
   */
  export type AdvertsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * The data used to create many Adverts.
     */
    data: AdvertsCreateManyInput | AdvertsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adverts update
   */
  export type AdvertsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * The data needed to update a Adverts.
     */
    data: XOR<AdvertsUpdateInput, AdvertsUncheckedUpdateInput>
    /**
     * Choose, which Adverts to update.
     */
    where: AdvertsWhereUniqueInput
  }

  /**
   * Adverts updateMany
   */
  export type AdvertsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adverts.
     */
    data: XOR<AdvertsUpdateManyMutationInput, AdvertsUncheckedUpdateManyInput>
    /**
     * Filter which Adverts to update
     */
    where?: AdvertsWhereInput
    /**
     * Limit how many Adverts to update.
     */
    limit?: number
  }

  /**
   * Adverts updateManyAndReturn
   */
  export type AdvertsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * The data used to update Adverts.
     */
    data: XOR<AdvertsUpdateManyMutationInput, AdvertsUncheckedUpdateManyInput>
    /**
     * Filter which Adverts to update
     */
    where?: AdvertsWhereInput
    /**
     * Limit how many Adverts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adverts upsert
   */
  export type AdvertsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * The filter to search for the Adverts to update in case it exists.
     */
    where: AdvertsWhereUniqueInput
    /**
     * In case the Adverts found by the `where` argument doesn't exist, create a new Adverts with this data.
     */
    create: XOR<AdvertsCreateInput, AdvertsUncheckedCreateInput>
    /**
     * In case the Adverts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvertsUpdateInput, AdvertsUncheckedUpdateInput>
  }

  /**
   * Adverts delete
   */
  export type AdvertsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter which Adverts to delete.
     */
    where: AdvertsWhereUniqueInput
  }

  /**
   * Adverts deleteMany
   */
  export type AdvertsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adverts to delete
     */
    where?: AdvertsWhereInput
    /**
     * Limit how many Adverts to delete.
     */
    limit?: number
  }

  /**
   * Adverts.images
   */
  export type Adverts$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    where?: PhotosWhereInput
    orderBy?: PhotosOrderByWithRelationInput | PhotosOrderByWithRelationInput[]
    cursor?: PhotosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * Adverts.optionals
   */
  export type Adverts$optionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
    where?: OptionalWhereInput
    orderBy?: OptionalOrderByWithRelationInput | OptionalOrderByWithRelationInput[]
    cursor?: OptionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionalScalarFieldEnum | OptionalScalarFieldEnum[]
  }

  /**
   * Adverts without action
   */
  export type AdvertsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
  }


  /**
   * Model Brands
   */

  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  export type BrandsMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.Category | null
    slug: string | null
  }

  export type BrandsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.Category | null
    slug: string | null
  }

  export type BrandsCountAggregateOutputType = {
    id: number
    name: number
    category: number
    slug: number
    _all: number
  }


  export type BrandsMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    slug?: true
  }

  export type BrandsMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    slug?: true
  }

  export type BrandsCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    slug?: true
    _all?: true
  }

  export type BrandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to aggregate.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsMaxAggregateInputType
  }

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>
  }




  export type BrandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandsWhereInput
    orderBy?: BrandsOrderByWithAggregationInput | BrandsOrderByWithAggregationInput[]
    by: BrandsScalarFieldEnum[] | BrandsScalarFieldEnum
    having?: BrandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandsCountAggregateInputType | true
    _min?: BrandsMinAggregateInputType
    _max?: BrandsMaxAggregateInputType
  }

  export type BrandsGroupByOutputType = {
    id: string
    name: string
    category: $Enums.Category
    slug: string
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  type GetBrandsGroupByPayload<T extends BrandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>
        }
      >
    >


  export type BrandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    slug?: boolean
    models?: boolean | Brands$modelsArgs<ExtArgs>
    adverts?: boolean | Brands$advertsArgs<ExtArgs>
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    slug?: boolean
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    slug?: boolean
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    slug?: boolean
  }

  export type BrandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "slug", ExtArgs["result"]["brands"]>
  export type BrandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | Brands$modelsArgs<ExtArgs>
    adverts?: boolean | Brands$advertsArgs<ExtArgs>
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brands"
    objects: {
      models: Prisma.$ModelsPayload<ExtArgs>[]
      adverts: Prisma.$AdvertsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: $Enums.Category
      slug: string
    }, ExtArgs["result"]["brands"]>
    composites: {}
  }

  type BrandsGetPayload<S extends boolean | null | undefined | BrandsDefaultArgs> = $Result.GetResult<Prisma.$BrandsPayload, S>

  type BrandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandsCountAggregateInputType | true
    }

  export interface BrandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brands'], meta: { name: 'Brands' } }
    /**
     * Find zero or one Brands that matches the filter.
     * @param {BrandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandsFindUniqueArgs>(args: SelectSubset<T, BrandsFindUniqueArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandsFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandsFindFirstArgs>(args?: SelectSubset<T, BrandsFindFirstArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandsFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandsWithIdOnly = await prisma.brands.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandsFindManyArgs>(args?: SelectSubset<T, BrandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brands.
     * @param {BrandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     * 
     */
    create<T extends BrandsCreateArgs>(args: SelectSubset<T, BrandsCreateArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandsCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandsCreateManyArgs>(args?: SelectSubset<T, BrandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandsCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandsWithIdOnly = await prisma.brands.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandsCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brands.
     * @param {BrandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     * 
     */
    delete<T extends BrandsDeleteArgs>(args: SelectSubset<T, BrandsDeleteArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brands.
     * @param {BrandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandsUpdateArgs>(args: SelectSubset<T, BrandsUpdateArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandsDeleteManyArgs>(args?: SelectSubset<T, BrandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandsUpdateManyArgs>(args: SelectSubset<T, BrandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandsUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandsWithIdOnly = await prisma.brands.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandsUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brands.
     * @param {BrandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
     */
    upsert<T extends BrandsUpsertArgs>(args: SelectSubset<T, BrandsUpsertArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandsCountArgs>(
      args?: Subset<T, BrandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandsAggregateArgs>(args: Subset<T, BrandsAggregateArgs>): Prisma.PrismaPromise<GetBrandsAggregateType<T>>

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandsGroupByArgs['orderBy'] }
        : { orderBy?: BrandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brands model
   */
  readonly fields: BrandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    models<T extends Brands$modelsArgs<ExtArgs> = {}>(args?: Subset<T, Brands$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adverts<T extends Brands$advertsArgs<ExtArgs> = {}>(args?: Subset<T, Brands$advertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brands model
   */
  interface BrandsFieldRefs {
    readonly id: FieldRef<"Brands", 'String'>
    readonly name: FieldRef<"Brands", 'String'>
    readonly category: FieldRef<"Brands", 'Category'>
    readonly slug: FieldRef<"Brands", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brands findUnique
   */
  export type BrandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands findUniqueOrThrow
   */
  export type BrandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands findFirst
   */
  export type BrandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * Brands findFirstOrThrow
   */
  export type BrandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * Brands findMany
   */
  export type BrandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * Brands create
   */
  export type BrandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The data needed to create a Brands.
     */
    data: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
  }

  /**
   * Brands createMany
   */
  export type BrandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandsCreateManyInput | BrandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brands createManyAndReturn
   */
  export type BrandsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandsCreateManyInput | BrandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brands update
   */
  export type BrandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The data needed to update a Brands.
     */
    data: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
    /**
     * Choose, which Brands to update.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands updateMany
   */
  export type BrandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandsWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brands updateManyAndReturn
   */
  export type BrandsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandsWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brands upsert
   */
  export type BrandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The filter to search for the Brands to update in case it exists.
     */
    where: BrandsWhereUniqueInput
    /**
     * In case the Brands found by the `where` argument doesn't exist, create a new Brands with this data.
     */
    create: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
    /**
     * In case the Brands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
  }

  /**
   * Brands delete
   */
  export type BrandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter which Brands to delete.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands deleteMany
   */
  export type BrandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandsWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brands.models
   */
  export type Brands$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    where?: ModelsWhereInput
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    cursor?: ModelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Brands.adverts
   */
  export type Brands$advertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    where?: AdvertsWhereInput
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    cursor?: AdvertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * Brands without action
   */
  export type BrandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
  }


  /**
   * Model Models
   */

  export type AggregateModels = {
    _count: ModelsCountAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  export type ModelsMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    category: $Enums.Category | null
    brand_id: string | null
  }

  export type ModelsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    category: $Enums.Category | null
    brand_id: string | null
  }

  export type ModelsCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    category: number
    brand_id: number
    _all: number
  }


  export type ModelsMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    category?: true
    brand_id?: true
  }

  export type ModelsMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    category?: true
    brand_id?: true
  }

  export type ModelsCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    category?: true
    brand_id?: true
    _all?: true
  }

  export type ModelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to aggregate.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelsMaxAggregateInputType
  }

  export type GetModelsAggregateType<T extends ModelsAggregateArgs> = {
        [P in keyof T & keyof AggregateModels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModels[P]>
      : GetScalarType<T[P], AggregateModels[P]>
  }




  export type ModelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelsWhereInput
    orderBy?: ModelsOrderByWithAggregationInput | ModelsOrderByWithAggregationInput[]
    by: ModelsScalarFieldEnum[] | ModelsScalarFieldEnum
    having?: ModelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelsCountAggregateInputType | true
    _min?: ModelsMinAggregateInputType
    _max?: ModelsMaxAggregateInputType
  }

  export type ModelsGroupByOutputType = {
    id: string
    name: string
    slug: string
    category: $Enums.Category
    brand_id: string | null
    _count: ModelsCountAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  type GetModelsGroupByPayload<T extends ModelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelsGroupByOutputType[P]>
            : GetScalarType<T[P], ModelsGroupByOutputType[P]>
        }
      >
    >


  export type ModelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    brand_id?: boolean
    adverts?: boolean | Models$advertsArgs<ExtArgs>
    brands?: boolean | Models$brandsArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    brand_id?: boolean
    brands?: boolean | Models$brandsArgs<ExtArgs>
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    brand_id?: boolean
    brands?: boolean | Models$brandsArgs<ExtArgs>
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    brand_id?: boolean
  }

  export type ModelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "category" | "brand_id", ExtArgs["result"]["models"]>
  export type ModelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adverts?: boolean | Models$advertsArgs<ExtArgs>
    brands?: boolean | Models$brandsArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brands?: boolean | Models$brandsArgs<ExtArgs>
  }
  export type ModelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brands?: boolean | Models$brandsArgs<ExtArgs>
  }

  export type $ModelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Models"
    objects: {
      adverts: Prisma.$AdvertsPayload<ExtArgs>[]
      brands: Prisma.$BrandsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      category: $Enums.Category
      brand_id: string | null
    }, ExtArgs["result"]["models"]>
    composites: {}
  }

  type ModelsGetPayload<S extends boolean | null | undefined | ModelsDefaultArgs> = $Result.GetResult<Prisma.$ModelsPayload, S>

  type ModelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelsCountAggregateInputType | true
    }

  export interface ModelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Models'], meta: { name: 'Models' } }
    /**
     * Find zero or one Models that matches the filter.
     * @param {ModelsFindUniqueArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelsFindUniqueArgs>(args: SelectSubset<T, ModelsFindUniqueArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Models that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelsFindUniqueOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelsFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindFirstArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelsFindFirstArgs>(args?: SelectSubset<T, ModelsFindFirstArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindFirstOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelsFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.models.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.models.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelsWithIdOnly = await prisma.models.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelsFindManyArgs>(args?: SelectSubset<T, ModelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Models.
     * @param {ModelsCreateArgs} args - Arguments to create a Models.
     * @example
     * // Create one Models
     * const Models = await prisma.models.create({
     *   data: {
     *     // ... data to create a Models
     *   }
     * })
     * 
     */
    create<T extends ModelsCreateArgs>(args: SelectSubset<T, ModelsCreateArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelsCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const models = await prisma.models.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelsCreateManyArgs>(args?: SelectSubset<T, ModelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Models and returns the data saved in the database.
     * @param {ModelsCreateManyAndReturnArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const models = await prisma.models.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Models and only return the `id`
     * const modelsWithIdOnly = await prisma.models.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelsCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Models.
     * @param {ModelsDeleteArgs} args - Arguments to delete one Models.
     * @example
     * // Delete one Models
     * const Models = await prisma.models.delete({
     *   where: {
     *     // ... filter to delete one Models
     *   }
     * })
     * 
     */
    delete<T extends ModelsDeleteArgs>(args: SelectSubset<T, ModelsDeleteArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Models.
     * @param {ModelsUpdateArgs} args - Arguments to update one Models.
     * @example
     * // Update one Models
     * const models = await prisma.models.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelsUpdateArgs>(args: SelectSubset<T, ModelsUpdateArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelsDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.models.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelsDeleteManyArgs>(args?: SelectSubset<T, ModelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const models = await prisma.models.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelsUpdateManyArgs>(args: SelectSubset<T, ModelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models and returns the data updated in the database.
     * @param {ModelsUpdateManyAndReturnArgs} args - Arguments to update many Models.
     * @example
     * // Update many Models
     * const models = await prisma.models.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Models and only return the `id`
     * const modelsWithIdOnly = await prisma.models.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelsUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Models.
     * @param {ModelsUpsertArgs} args - Arguments to update or create a Models.
     * @example
     * // Update or create a Models
     * const models = await prisma.models.upsert({
     *   create: {
     *     // ... data to create a Models
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Models we want to update
     *   }
     * })
     */
    upsert<T extends ModelsUpsertArgs>(args: SelectSubset<T, ModelsUpsertArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.models.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelsCountArgs>(
      args?: Subset<T, ModelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelsAggregateArgs>(args: Subset<T, ModelsAggregateArgs>): Prisma.PrismaPromise<GetModelsAggregateType<T>>

    /**
     * Group by Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelsGroupByArgs['orderBy'] }
        : { orderBy?: ModelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Models model
   */
  readonly fields: ModelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Models.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adverts<T extends Models$advertsArgs<ExtArgs> = {}>(args?: Subset<T, Models$advertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brands<T extends Models$brandsArgs<ExtArgs> = {}>(args?: Subset<T, Models$brandsArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Models model
   */
  interface ModelsFieldRefs {
    readonly id: FieldRef<"Models", 'String'>
    readonly name: FieldRef<"Models", 'String'>
    readonly slug: FieldRef<"Models", 'String'>
    readonly category: FieldRef<"Models", 'Category'>
    readonly brand_id: FieldRef<"Models", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Models findUnique
   */
  export type ModelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models findUniqueOrThrow
   */
  export type ModelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models findFirst
   */
  export type ModelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models findFirstOrThrow
   */
  export type ModelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models findMany
   */
  export type ModelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models create
   */
  export type ModelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The data needed to create a Models.
     */
    data: XOR<ModelsCreateInput, ModelsUncheckedCreateInput>
  }

  /**
   * Models createMany
   */
  export type ModelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelsCreateManyInput | ModelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Models createManyAndReturn
   */
  export type ModelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * The data used to create many Models.
     */
    data: ModelsCreateManyInput | ModelsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Models update
   */
  export type ModelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The data needed to update a Models.
     */
    data: XOR<ModelsUpdateInput, ModelsUncheckedUpdateInput>
    /**
     * Choose, which Models to update.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models updateMany
   */
  export type ModelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelsUpdateManyMutationInput, ModelsUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Models updateManyAndReturn
   */
  export type ModelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * The data used to update Models.
     */
    data: XOR<ModelsUpdateManyMutationInput, ModelsUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Models upsert
   */
  export type ModelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The filter to search for the Models to update in case it exists.
     */
    where: ModelsWhereUniqueInput
    /**
     * In case the Models found by the `where` argument doesn't exist, create a new Models with this data.
     */
    create: XOR<ModelsCreateInput, ModelsUncheckedCreateInput>
    /**
     * In case the Models was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelsUpdateInput, ModelsUncheckedUpdateInput>
  }

  /**
   * Models delete
   */
  export type ModelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter which Models to delete.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models deleteMany
   */
  export type ModelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to delete.
     */
    limit?: number
  }

  /**
   * Models.adverts
   */
  export type Models$advertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    where?: AdvertsWhereInput
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    cursor?: AdvertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * Models.brands
   */
  export type Models$brandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    where?: BrandsWhereInput
  }

  /**
   * Models without action
   */
  export type ModelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
  }


  /**
   * Model Optional
   */

  export type AggregateOptional = {
    _count: OptionalCountAggregateOutputType | null
    _min: OptionalMinAggregateOutputType | null
    _max: OptionalMaxAggregateOutputType | null
  }

  export type OptionalMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type OptionalMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type OptionalCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OptionalMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OptionalMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OptionalCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OptionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Optional to aggregate.
     */
    where?: OptionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Optionals to fetch.
     */
    orderBy?: OptionalOrderByWithRelationInput | OptionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Optionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Optionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Optionals
    **/
    _count?: true | OptionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionalMaxAggregateInputType
  }

  export type GetOptionalAggregateType<T extends OptionalAggregateArgs> = {
        [P in keyof T & keyof AggregateOptional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptional[P]>
      : GetScalarType<T[P], AggregateOptional[P]>
  }




  export type OptionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionalWhereInput
    orderBy?: OptionalOrderByWithAggregationInput | OptionalOrderByWithAggregationInput[]
    by: OptionalScalarFieldEnum[] | OptionalScalarFieldEnum
    having?: OptionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionalCountAggregateInputType | true
    _min?: OptionalMinAggregateInputType
    _max?: OptionalMaxAggregateInputType
  }

  export type OptionalGroupByOutputType = {
    id: string
    name: string
    _count: OptionalCountAggregateOutputType | null
    _min: OptionalMinAggregateOutputType | null
    _max: OptionalMaxAggregateOutputType | null
  }

  type GetOptionalGroupByPayload<T extends OptionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionalGroupByOutputType[P]>
            : GetScalarType<T[P], OptionalGroupByOutputType[P]>
        }
      >
    >


  export type OptionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adverts?: boolean | Optional$advertsArgs<ExtArgs>
    _count?: boolean | OptionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optional"]>

  export type OptionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["optional"]>

  export type OptionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["optional"]>

  export type OptionalSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OptionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["optional"]>
  export type OptionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adverts?: boolean | Optional$advertsArgs<ExtArgs>
    _count?: boolean | OptionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OptionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OptionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Optional"
    objects: {
      adverts: Prisma.$AdvertsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["optional"]>
    composites: {}
  }

  type OptionalGetPayload<S extends boolean | null | undefined | OptionalDefaultArgs> = $Result.GetResult<Prisma.$OptionalPayload, S>

  type OptionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionalCountAggregateInputType | true
    }

  export interface OptionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Optional'], meta: { name: 'Optional' } }
    /**
     * Find zero or one Optional that matches the filter.
     * @param {OptionalFindUniqueArgs} args - Arguments to find a Optional
     * @example
     * // Get one Optional
     * const optional = await prisma.optional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionalFindUniqueArgs>(args: SelectSubset<T, OptionalFindUniqueArgs<ExtArgs>>): Prisma__OptionalClient<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Optional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionalFindUniqueOrThrowArgs} args - Arguments to find a Optional
     * @example
     * // Get one Optional
     * const optional = await prisma.optional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionalFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionalClient<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Optional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionalFindFirstArgs} args - Arguments to find a Optional
     * @example
     * // Get one Optional
     * const optional = await prisma.optional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionalFindFirstArgs>(args?: SelectSubset<T, OptionalFindFirstArgs<ExtArgs>>): Prisma__OptionalClient<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Optional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionalFindFirstOrThrowArgs} args - Arguments to find a Optional
     * @example
     * // Get one Optional
     * const optional = await prisma.optional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionalFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionalClient<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Optionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Optionals
     * const optionals = await prisma.optional.findMany()
     * 
     * // Get first 10 Optionals
     * const optionals = await prisma.optional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionalWithIdOnly = await prisma.optional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionalFindManyArgs>(args?: SelectSubset<T, OptionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Optional.
     * @param {OptionalCreateArgs} args - Arguments to create a Optional.
     * @example
     * // Create one Optional
     * const Optional = await prisma.optional.create({
     *   data: {
     *     // ... data to create a Optional
     *   }
     * })
     * 
     */
    create<T extends OptionalCreateArgs>(args: SelectSubset<T, OptionalCreateArgs<ExtArgs>>): Prisma__OptionalClient<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Optionals.
     * @param {OptionalCreateManyArgs} args - Arguments to create many Optionals.
     * @example
     * // Create many Optionals
     * const optional = await prisma.optional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionalCreateManyArgs>(args?: SelectSubset<T, OptionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Optionals and returns the data saved in the database.
     * @param {OptionalCreateManyAndReturnArgs} args - Arguments to create many Optionals.
     * @example
     * // Create many Optionals
     * const optional = await prisma.optional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Optionals and only return the `id`
     * const optionalWithIdOnly = await prisma.optional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionalCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Optional.
     * @param {OptionalDeleteArgs} args - Arguments to delete one Optional.
     * @example
     * // Delete one Optional
     * const Optional = await prisma.optional.delete({
     *   where: {
     *     // ... filter to delete one Optional
     *   }
     * })
     * 
     */
    delete<T extends OptionalDeleteArgs>(args: SelectSubset<T, OptionalDeleteArgs<ExtArgs>>): Prisma__OptionalClient<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Optional.
     * @param {OptionalUpdateArgs} args - Arguments to update one Optional.
     * @example
     * // Update one Optional
     * const optional = await prisma.optional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionalUpdateArgs>(args: SelectSubset<T, OptionalUpdateArgs<ExtArgs>>): Prisma__OptionalClient<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Optionals.
     * @param {OptionalDeleteManyArgs} args - Arguments to filter Optionals to delete.
     * @example
     * // Delete a few Optionals
     * const { count } = await prisma.optional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionalDeleteManyArgs>(args?: SelectSubset<T, OptionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Optionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Optionals
     * const optional = await prisma.optional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionalUpdateManyArgs>(args: SelectSubset<T, OptionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Optionals and returns the data updated in the database.
     * @param {OptionalUpdateManyAndReturnArgs} args - Arguments to update many Optionals.
     * @example
     * // Update many Optionals
     * const optional = await prisma.optional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Optionals and only return the `id`
     * const optionalWithIdOnly = await prisma.optional.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OptionalUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Optional.
     * @param {OptionalUpsertArgs} args - Arguments to update or create a Optional.
     * @example
     * // Update or create a Optional
     * const optional = await prisma.optional.upsert({
     *   create: {
     *     // ... data to create a Optional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Optional we want to update
     *   }
     * })
     */
    upsert<T extends OptionalUpsertArgs>(args: SelectSubset<T, OptionalUpsertArgs<ExtArgs>>): Prisma__OptionalClient<$Result.GetResult<Prisma.$OptionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Optionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionalCountArgs} args - Arguments to filter Optionals to count.
     * @example
     * // Count the number of Optionals
     * const count = await prisma.optional.count({
     *   where: {
     *     // ... the filter for the Optionals we want to count
     *   }
     * })
    **/
    count<T extends OptionalCountArgs>(
      args?: Subset<T, OptionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Optional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OptionalAggregateArgs>(args: Subset<T, OptionalAggregateArgs>): Prisma.PrismaPromise<GetOptionalAggregateType<T>>

    /**
     * Group by Optional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OptionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionalGroupByArgs['orderBy'] }
        : { orderBy?: OptionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OptionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Optional model
   */
  readonly fields: OptionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Optional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adverts<T extends Optional$advertsArgs<ExtArgs> = {}>(args?: Subset<T, Optional$advertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Optional model
   */
  interface OptionalFieldRefs {
    readonly id: FieldRef<"Optional", 'String'>
    readonly name: FieldRef<"Optional", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Optional findUnique
   */
  export type OptionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
    /**
     * Filter, which Optional to fetch.
     */
    where: OptionalWhereUniqueInput
  }

  /**
   * Optional findUniqueOrThrow
   */
  export type OptionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
    /**
     * Filter, which Optional to fetch.
     */
    where: OptionalWhereUniqueInput
  }

  /**
   * Optional findFirst
   */
  export type OptionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
    /**
     * Filter, which Optional to fetch.
     */
    where?: OptionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Optionals to fetch.
     */
    orderBy?: OptionalOrderByWithRelationInput | OptionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Optionals.
     */
    cursor?: OptionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Optionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Optionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Optionals.
     */
    distinct?: OptionalScalarFieldEnum | OptionalScalarFieldEnum[]
  }

  /**
   * Optional findFirstOrThrow
   */
  export type OptionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
    /**
     * Filter, which Optional to fetch.
     */
    where?: OptionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Optionals to fetch.
     */
    orderBy?: OptionalOrderByWithRelationInput | OptionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Optionals.
     */
    cursor?: OptionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Optionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Optionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Optionals.
     */
    distinct?: OptionalScalarFieldEnum | OptionalScalarFieldEnum[]
  }

  /**
   * Optional findMany
   */
  export type OptionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
    /**
     * Filter, which Optionals to fetch.
     */
    where?: OptionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Optionals to fetch.
     */
    orderBy?: OptionalOrderByWithRelationInput | OptionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Optionals.
     */
    cursor?: OptionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Optionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Optionals.
     */
    skip?: number
    distinct?: OptionalScalarFieldEnum | OptionalScalarFieldEnum[]
  }

  /**
   * Optional create
   */
  export type OptionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Optional.
     */
    data: XOR<OptionalCreateInput, OptionalUncheckedCreateInput>
  }

  /**
   * Optional createMany
   */
  export type OptionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Optionals.
     */
    data: OptionalCreateManyInput | OptionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Optional createManyAndReturn
   */
  export type OptionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * The data used to create many Optionals.
     */
    data: OptionalCreateManyInput | OptionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Optional update
   */
  export type OptionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Optional.
     */
    data: XOR<OptionalUpdateInput, OptionalUncheckedUpdateInput>
    /**
     * Choose, which Optional to update.
     */
    where: OptionalWhereUniqueInput
  }

  /**
   * Optional updateMany
   */
  export type OptionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Optionals.
     */
    data: XOR<OptionalUpdateManyMutationInput, OptionalUncheckedUpdateManyInput>
    /**
     * Filter which Optionals to update
     */
    where?: OptionalWhereInput
    /**
     * Limit how many Optionals to update.
     */
    limit?: number
  }

  /**
   * Optional updateManyAndReturn
   */
  export type OptionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * The data used to update Optionals.
     */
    data: XOR<OptionalUpdateManyMutationInput, OptionalUncheckedUpdateManyInput>
    /**
     * Filter which Optionals to update
     */
    where?: OptionalWhereInput
    /**
     * Limit how many Optionals to update.
     */
    limit?: number
  }

  /**
   * Optional upsert
   */
  export type OptionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Optional to update in case it exists.
     */
    where: OptionalWhereUniqueInput
    /**
     * In case the Optional found by the `where` argument doesn't exist, create a new Optional with this data.
     */
    create: XOR<OptionalCreateInput, OptionalUncheckedCreateInput>
    /**
     * In case the Optional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionalUpdateInput, OptionalUncheckedUpdateInput>
  }

  /**
   * Optional delete
   */
  export type OptionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
    /**
     * Filter which Optional to delete.
     */
    where: OptionalWhereUniqueInput
  }

  /**
   * Optional deleteMany
   */
  export type OptionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Optionals to delete
     */
    where?: OptionalWhereInput
    /**
     * Limit how many Optionals to delete.
     */
    limit?: number
  }

  /**
   * Optional.adverts
   */
  export type Optional$advertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    where?: AdvertsWhereInput
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    cursor?: AdvertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * Optional without action
   */
  export type OptionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optional
     */
    select?: OptionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optional
     */
    omit?: OptionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionalInclude<ExtArgs> | null
  }


  /**
   * Model Photos
   */

  export type AggregatePhotos = {
    _count: PhotosCountAggregateOutputType | null
    _min: PhotosMinAggregateOutputType | null
    _max: PhotosMaxAggregateOutputType | null
  }

  export type PhotosMinAggregateOutputType = {
    id: string | null
    url: string | null
    key: string | null
    advert_id: string | null
  }

  export type PhotosMaxAggregateOutputType = {
    id: string | null
    url: string | null
    key: string | null
    advert_id: string | null
  }

  export type PhotosCountAggregateOutputType = {
    id: number
    url: number
    key: number
    advert_id: number
    _all: number
  }


  export type PhotosMinAggregateInputType = {
    id?: true
    url?: true
    key?: true
    advert_id?: true
  }

  export type PhotosMaxAggregateInputType = {
    id?: true
    url?: true
    key?: true
    advert_id?: true
  }

  export type PhotosCountAggregateInputType = {
    id?: true
    url?: true
    key?: true
    advert_id?: true
    _all?: true
  }

  export type PhotosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to aggregate.
     */
    where?: PhotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotosOrderByWithRelationInput | PhotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotosMaxAggregateInputType
  }

  export type GetPhotosAggregateType<T extends PhotosAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotos[P]>
      : GetScalarType<T[P], AggregatePhotos[P]>
  }




  export type PhotosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotosWhereInput
    orderBy?: PhotosOrderByWithAggregationInput | PhotosOrderByWithAggregationInput[]
    by: PhotosScalarFieldEnum[] | PhotosScalarFieldEnum
    having?: PhotosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotosCountAggregateInputType | true
    _min?: PhotosMinAggregateInputType
    _max?: PhotosMaxAggregateInputType
  }

  export type PhotosGroupByOutputType = {
    id: string
    url: string
    key: string
    advert_id: string
    _count: PhotosCountAggregateOutputType | null
    _min: PhotosMinAggregateOutputType | null
    _max: PhotosMaxAggregateOutputType | null
  }

  type GetPhotosGroupByPayload<T extends PhotosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotosGroupByOutputType[P]>
            : GetScalarType<T[P], PhotosGroupByOutputType[P]>
        }
      >
    >


  export type PhotosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    key?: boolean
    advert_id?: boolean
    advert?: boolean | AdvertsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photos"]>

  export type PhotosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    key?: boolean
    advert_id?: boolean
    advert?: boolean | AdvertsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photos"]>

  export type PhotosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    key?: boolean
    advert_id?: boolean
    advert?: boolean | AdvertsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photos"]>

  export type PhotosSelectScalar = {
    id?: boolean
    url?: boolean
    key?: boolean
    advert_id?: boolean
  }

  export type PhotosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "key" | "advert_id", ExtArgs["result"]["photos"]>
  export type PhotosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advert?: boolean | AdvertsDefaultArgs<ExtArgs>
  }
  export type PhotosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advert?: boolean | AdvertsDefaultArgs<ExtArgs>
  }
  export type PhotosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advert?: boolean | AdvertsDefaultArgs<ExtArgs>
  }

  export type $PhotosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photos"
    objects: {
      advert: Prisma.$AdvertsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      key: string
      advert_id: string
    }, ExtArgs["result"]["photos"]>
    composites: {}
  }

  type PhotosGetPayload<S extends boolean | null | undefined | PhotosDefaultArgs> = $Result.GetResult<Prisma.$PhotosPayload, S>

  type PhotosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotosCountAggregateInputType | true
    }

  export interface PhotosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photos'], meta: { name: 'Photos' } }
    /**
     * Find zero or one Photos that matches the filter.
     * @param {PhotosFindUniqueArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotosFindUniqueArgs>(args: SelectSubset<T, PhotosFindUniqueArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotosFindUniqueOrThrowArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotosFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosFindFirstArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotosFindFirstArgs>(args?: SelectSubset<T, PhotosFindFirstArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosFindFirstOrThrowArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotosFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photos.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photosWithIdOnly = await prisma.photos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotosFindManyArgs>(args?: SelectSubset<T, PhotosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photos.
     * @param {PhotosCreateArgs} args - Arguments to create a Photos.
     * @example
     * // Create one Photos
     * const Photos = await prisma.photos.create({
     *   data: {
     *     // ... data to create a Photos
     *   }
     * })
     * 
     */
    create<T extends PhotosCreateArgs>(args: SelectSubset<T, PhotosCreateArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotosCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photos = await prisma.photos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotosCreateManyArgs>(args?: SelectSubset<T, PhotosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotosCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photos = await prisma.photos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photosWithIdOnly = await prisma.photos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotosCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photos.
     * @param {PhotosDeleteArgs} args - Arguments to delete one Photos.
     * @example
     * // Delete one Photos
     * const Photos = await prisma.photos.delete({
     *   where: {
     *     // ... filter to delete one Photos
     *   }
     * })
     * 
     */
    delete<T extends PhotosDeleteArgs>(args: SelectSubset<T, PhotosDeleteArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photos.
     * @param {PhotosUpdateArgs} args - Arguments to update one Photos.
     * @example
     * // Update one Photos
     * const photos = await prisma.photos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotosUpdateArgs>(args: SelectSubset<T, PhotosUpdateArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotosDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotosDeleteManyArgs>(args?: SelectSubset<T, PhotosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photos = await prisma.photos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotosUpdateManyArgs>(args: SelectSubset<T, PhotosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotosUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photos = await prisma.photos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photosWithIdOnly = await prisma.photos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhotosUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photos.
     * @param {PhotosUpsertArgs} args - Arguments to update or create a Photos.
     * @example
     * // Update or create a Photos
     * const photos = await prisma.photos.upsert({
     *   create: {
     *     // ... data to create a Photos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photos we want to update
     *   }
     * })
     */
    upsert<T extends PhotosUpsertArgs>(args: SelectSubset<T, PhotosUpsertArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photos.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotosCountArgs>(
      args?: Subset<T, PhotosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotosAggregateArgs>(args: Subset<T, PhotosAggregateArgs>): Prisma.PrismaPromise<GetPhotosAggregateType<T>>

    /**
     * Group by Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotosGroupByArgs['orderBy'] }
        : { orderBy?: PhotosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photos model
   */
  readonly fields: PhotosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    advert<T extends AdvertsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdvertsDefaultArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photos model
   */
  interface PhotosFieldRefs {
    readonly id: FieldRef<"Photos", 'String'>
    readonly url: FieldRef<"Photos", 'String'>
    readonly key: FieldRef<"Photos", 'String'>
    readonly advert_id: FieldRef<"Photos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Photos findUnique
   */
  export type PhotosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where: PhotosWhereUniqueInput
  }

  /**
   * Photos findUniqueOrThrow
   */
  export type PhotosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where: PhotosWhereUniqueInput
  }

  /**
   * Photos findFirst
   */
  export type PhotosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotosOrderByWithRelationInput | PhotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * Photos findFirstOrThrow
   */
  export type PhotosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotosOrderByWithRelationInput | PhotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * Photos findMany
   */
  export type PhotosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotosOrderByWithRelationInput | PhotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * Photos create
   */
  export type PhotosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * The data needed to create a Photos.
     */
    data: XOR<PhotosCreateInput, PhotosUncheckedCreateInput>
  }

  /**
   * Photos createMany
   */
  export type PhotosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotosCreateManyInput | PhotosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photos createManyAndReturn
   */
  export type PhotosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotosCreateManyInput | PhotosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photos update
   */
  export type PhotosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * The data needed to update a Photos.
     */
    data: XOR<PhotosUpdateInput, PhotosUncheckedUpdateInput>
    /**
     * Choose, which Photos to update.
     */
    where: PhotosWhereUniqueInput
  }

  /**
   * Photos updateMany
   */
  export type PhotosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotosUpdateManyMutationInput, PhotosUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotosWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photos updateManyAndReturn
   */
  export type PhotosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotosUpdateManyMutationInput, PhotosUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotosWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photos upsert
   */
  export type PhotosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * The filter to search for the Photos to update in case it exists.
     */
    where: PhotosWhereUniqueInput
    /**
     * In case the Photos found by the `where` argument doesn't exist, create a new Photos with this data.
     */
    create: XOR<PhotosCreateInput, PhotosUncheckedCreateInput>
    /**
     * In case the Photos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotosUpdateInput, PhotosUncheckedUpdateInput>
  }

  /**
   * Photos delete
   */
  export type PhotosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter which Photos to delete.
     */
    where: PhotosWhereUniqueInput
  }

  /**
   * Photos deleteMany
   */
  export type PhotosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotosWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photos without action
   */
  export type PhotosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    stripe_id: 'stripe_id',
    name: 'name',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    active: 'active',
    plan: 'plan',
    updated_at: 'updated_at',
    created_at: 'created_at',
    image: 'image',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    status: 'status',
    subscripton_id: 'subscripton_id',
    cycle: 'cycle',
    user_id: 'user_id',
    stripe_product_id: 'stripe_product_id',
    updated_at: 'updated_at',
    created_ad: 'created_ad',
    cancel_at_period_end: 'cancel_at_period_end',
    current_period_start: 'current_period_start',
    current_period_end: 'current_period_end'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const AdvertsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    year_model: 'year_model',
    color: 'color',
    city: 'city',
    formatted_city: 'formatted_city',
    state: 'state',
    formatted_state: 'formatted_state',
    price: 'price',
    doors: 'doors',
    mileage: 'mileage',
    description: 'description',
    formatted_description: 'formatted_description',
    plate: 'plate',
    transmission: 'transmission',
    created_at: 'created_at',
    updated_at: 'updated_at',
    status: 'status',
    slug: 'slug',
    emphasis: 'emphasis',
    user_id: 'user_id',
    model_id: 'model_id',
    brand_id: 'brand_id'
  };

  export type AdvertsScalarFieldEnum = (typeof AdvertsScalarFieldEnum)[keyof typeof AdvertsScalarFieldEnum]


  export const BrandsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    slug: 'slug'
  };

  export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum]


  export const ModelsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    category: 'category',
    brand_id: 'brand_id'
  };

  export type ModelsScalarFieldEnum = (typeof ModelsScalarFieldEnum)[keyof typeof ModelsScalarFieldEnum]


  export const OptionalScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OptionalScalarFieldEnum = (typeof OptionalScalarFieldEnum)[keyof typeof OptionalScalarFieldEnum]


  export const PhotosScalarFieldEnum: {
    id: 'id',
    url: 'url',
    key: 'key',
    advert_id: 'advert_id'
  };

  export type PhotosScalarFieldEnum = (typeof PhotosScalarFieldEnum)[keyof typeof PhotosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Plan'
   */
  export type EnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan'>
    


  /**
   * Reference to a field of type 'Plan[]'
   */
  export type ListEnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    stripe_id?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    plan?: EnumPlanFilter<"User"> | $Enums.Plan
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    adverts?: AdvertsListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    stripe_id?: SortOrderInput | SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrder
    plan?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    adverts?: AdvertsOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripe_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    plan?: EnumPlanFilter<"User"> | $Enums.Plan
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    adverts?: AdvertsListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }, "id" | "id" | "stripe_id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    stripe_id?: SortOrderInput | SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrder
    plan?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    stripe_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    active?: BoolWithAggregatesFilter<"User"> | boolean
    plan?: EnumPlanWithAggregatesFilter<"User"> | $Enums.Plan
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    subscripton_id?: StringNullableFilter<"Subscription"> | string | null
    cycle?: StringFilter<"Subscription"> | string
    user_id?: StringFilter<"Subscription"> | string
    stripe_product_id?: StringNullableFilter<"Subscription"> | string | null
    updated_at?: DateTimeFilter<"Subscription"> | Date | string
    created_ad?: DateTimeFilter<"Subscription"> | Date | string
    cancel_at_period_end?: BoolFilter<"Subscription"> | boolean
    current_period_start?: DateTimeFilter<"Subscription"> | Date | string
    current_period_end?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    subscripton_id?: SortOrderInput | SortOrder
    cycle?: SortOrder
    user_id?: SortOrder
    stripe_product_id?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_ad?: SortOrder
    cancel_at_period_end?: SortOrder
    current_period_start?: SortOrder
    current_period_end?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subscripton_id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    status?: StringFilter<"Subscription"> | string
    cycle?: StringFilter<"Subscription"> | string
    user_id?: StringFilter<"Subscription"> | string
    stripe_product_id?: StringNullableFilter<"Subscription"> | string | null
    updated_at?: DateTimeFilter<"Subscription"> | Date | string
    created_ad?: DateTimeFilter<"Subscription"> | Date | string
    cancel_at_period_end?: BoolFilter<"Subscription"> | boolean
    current_period_start?: DateTimeFilter<"Subscription"> | Date | string
    current_period_end?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "subscripton_id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    subscripton_id?: SortOrderInput | SortOrder
    cycle?: SortOrder
    user_id?: SortOrder
    stripe_product_id?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_ad?: SortOrder
    cancel_at_period_end?: SortOrder
    current_period_start?: SortOrder
    current_period_end?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    subscripton_id?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    cycle?: StringWithAggregatesFilter<"Subscription"> | string
    user_id?: StringWithAggregatesFilter<"Subscription"> | string
    stripe_product_id?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    created_ad?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    cancel_at_period_end?: BoolWithAggregatesFilter<"Subscription"> | boolean
    current_period_start?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    current_period_end?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type AdvertsWhereInput = {
    AND?: AdvertsWhereInput | AdvertsWhereInput[]
    OR?: AdvertsWhereInput[]
    NOT?: AdvertsWhereInput | AdvertsWhereInput[]
    id?: StringFilter<"Adverts"> | string
    type?: StringFilter<"Adverts"> | string
    year_model?: IntFilter<"Adverts"> | number
    color?: StringFilter<"Adverts"> | string
    city?: StringFilter<"Adverts"> | string
    formatted_city?: StringFilter<"Adverts"> | string
    state?: StringFilter<"Adverts"> | string
    formatted_state?: StringFilter<"Adverts"> | string
    price?: IntFilter<"Adverts"> | number
    doors?: StringFilter<"Adverts"> | string
    mileage?: IntFilter<"Adverts"> | number
    description?: StringNullableFilter<"Adverts"> | string | null
    formatted_description?: StringNullableFilter<"Adverts"> | string | null
    plate?: StringFilter<"Adverts"> | string
    transmission?: StringFilter<"Adverts"> | string
    created_at?: DateTimeFilter<"Adverts"> | Date | string
    updated_at?: DateTimeFilter<"Adverts"> | Date | string
    status?: EnumStatusFilter<"Adverts"> | $Enums.Status
    slug?: StringFilter<"Adverts"> | string
    emphasis?: BoolNullableFilter<"Adverts"> | boolean | null
    user_id?: StringFilter<"Adverts"> | string
    model_id?: StringFilter<"Adverts"> | string
    brand_id?: StringFilter<"Adverts"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: PhotosListRelationFilter
    optionals?: OptionalListRelationFilter
    model?: XOR<ModelsScalarRelationFilter, ModelsWhereInput>
    brand?: XOR<BrandsScalarRelationFilter, BrandsWhereInput>
  }

  export type AdvertsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    year_model?: SortOrder
    color?: SortOrder
    city?: SortOrder
    formatted_city?: SortOrder
    state?: SortOrder
    formatted_state?: SortOrder
    price?: SortOrder
    doors?: SortOrder
    mileage?: SortOrder
    description?: SortOrderInput | SortOrder
    formatted_description?: SortOrderInput | SortOrder
    plate?: SortOrder
    transmission?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    slug?: SortOrder
    emphasis?: SortOrderInput | SortOrder
    user_id?: SortOrder
    model_id?: SortOrder
    brand_id?: SortOrder
    user?: UserOrderByWithRelationInput
    images?: PhotosOrderByRelationAggregateInput
    optionals?: OptionalOrderByRelationAggregateInput
    model?: ModelsOrderByWithRelationInput
    brand?: BrandsOrderByWithRelationInput
  }

  export type AdvertsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: AdvertsWhereInput | AdvertsWhereInput[]
    OR?: AdvertsWhereInput[]
    NOT?: AdvertsWhereInput | AdvertsWhereInput[]
    type?: StringFilter<"Adverts"> | string
    year_model?: IntFilter<"Adverts"> | number
    color?: StringFilter<"Adverts"> | string
    city?: StringFilter<"Adverts"> | string
    formatted_city?: StringFilter<"Adverts"> | string
    state?: StringFilter<"Adverts"> | string
    formatted_state?: StringFilter<"Adverts"> | string
    price?: IntFilter<"Adverts"> | number
    doors?: StringFilter<"Adverts"> | string
    mileage?: IntFilter<"Adverts"> | number
    description?: StringNullableFilter<"Adverts"> | string | null
    formatted_description?: StringNullableFilter<"Adverts"> | string | null
    plate?: StringFilter<"Adverts"> | string
    transmission?: StringFilter<"Adverts"> | string
    created_at?: DateTimeFilter<"Adverts"> | Date | string
    updated_at?: DateTimeFilter<"Adverts"> | Date | string
    status?: EnumStatusFilter<"Adverts"> | $Enums.Status
    emphasis?: BoolNullableFilter<"Adverts"> | boolean | null
    user_id?: StringFilter<"Adverts"> | string
    model_id?: StringFilter<"Adverts"> | string
    brand_id?: StringFilter<"Adverts"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: PhotosListRelationFilter
    optionals?: OptionalListRelationFilter
    model?: XOR<ModelsScalarRelationFilter, ModelsWhereInput>
    brand?: XOR<BrandsScalarRelationFilter, BrandsWhereInput>
  }, "id" | "slug">

  export type AdvertsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    year_model?: SortOrder
    color?: SortOrder
    city?: SortOrder
    formatted_city?: SortOrder
    state?: SortOrder
    formatted_state?: SortOrder
    price?: SortOrder
    doors?: SortOrder
    mileage?: SortOrder
    description?: SortOrderInput | SortOrder
    formatted_description?: SortOrderInput | SortOrder
    plate?: SortOrder
    transmission?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    slug?: SortOrder
    emphasis?: SortOrderInput | SortOrder
    user_id?: SortOrder
    model_id?: SortOrder
    brand_id?: SortOrder
    _count?: AdvertsCountOrderByAggregateInput
    _avg?: AdvertsAvgOrderByAggregateInput
    _max?: AdvertsMaxOrderByAggregateInput
    _min?: AdvertsMinOrderByAggregateInput
    _sum?: AdvertsSumOrderByAggregateInput
  }

  export type AdvertsScalarWhereWithAggregatesInput = {
    AND?: AdvertsScalarWhereWithAggregatesInput | AdvertsScalarWhereWithAggregatesInput[]
    OR?: AdvertsScalarWhereWithAggregatesInput[]
    NOT?: AdvertsScalarWhereWithAggregatesInput | AdvertsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Adverts"> | string
    type?: StringWithAggregatesFilter<"Adverts"> | string
    year_model?: IntWithAggregatesFilter<"Adverts"> | number
    color?: StringWithAggregatesFilter<"Adverts"> | string
    city?: StringWithAggregatesFilter<"Adverts"> | string
    formatted_city?: StringWithAggregatesFilter<"Adverts"> | string
    state?: StringWithAggregatesFilter<"Adverts"> | string
    formatted_state?: StringWithAggregatesFilter<"Adverts"> | string
    price?: IntWithAggregatesFilter<"Adverts"> | number
    doors?: StringWithAggregatesFilter<"Adverts"> | string
    mileage?: IntWithAggregatesFilter<"Adverts"> | number
    description?: StringNullableWithAggregatesFilter<"Adverts"> | string | null
    formatted_description?: StringNullableWithAggregatesFilter<"Adverts"> | string | null
    plate?: StringWithAggregatesFilter<"Adverts"> | string
    transmission?: StringWithAggregatesFilter<"Adverts"> | string
    created_at?: DateTimeWithAggregatesFilter<"Adverts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Adverts"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Adverts"> | $Enums.Status
    slug?: StringWithAggregatesFilter<"Adverts"> | string
    emphasis?: BoolNullableWithAggregatesFilter<"Adverts"> | boolean | null
    user_id?: StringWithAggregatesFilter<"Adverts"> | string
    model_id?: StringWithAggregatesFilter<"Adverts"> | string
    brand_id?: StringWithAggregatesFilter<"Adverts"> | string
  }

  export type BrandsWhereInput = {
    AND?: BrandsWhereInput | BrandsWhereInput[]
    OR?: BrandsWhereInput[]
    NOT?: BrandsWhereInput | BrandsWhereInput[]
    id?: StringFilter<"Brands"> | string
    name?: StringFilter<"Brands"> | string
    category?: EnumCategoryFilter<"Brands"> | $Enums.Category
    slug?: StringFilter<"Brands"> | string
    models?: ModelsListRelationFilter
    adverts?: AdvertsListRelationFilter
  }

  export type BrandsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    models?: ModelsOrderByRelationAggregateInput
    adverts?: AdvertsOrderByRelationAggregateInput
  }

  export type BrandsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: BrandsWhereInput | BrandsWhereInput[]
    OR?: BrandsWhereInput[]
    NOT?: BrandsWhereInput | BrandsWhereInput[]
    category?: EnumCategoryFilter<"Brands"> | $Enums.Category
    models?: ModelsListRelationFilter
    adverts?: AdvertsListRelationFilter
  }, "id" | "name" | "slug">

  export type BrandsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    _count?: BrandsCountOrderByAggregateInput
    _max?: BrandsMaxOrderByAggregateInput
    _min?: BrandsMinOrderByAggregateInput
  }

  export type BrandsScalarWhereWithAggregatesInput = {
    AND?: BrandsScalarWhereWithAggregatesInput | BrandsScalarWhereWithAggregatesInput[]
    OR?: BrandsScalarWhereWithAggregatesInput[]
    NOT?: BrandsScalarWhereWithAggregatesInput | BrandsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brands"> | string
    name?: StringWithAggregatesFilter<"Brands"> | string
    category?: EnumCategoryWithAggregatesFilter<"Brands"> | $Enums.Category
    slug?: StringWithAggregatesFilter<"Brands"> | string
  }

  export type ModelsWhereInput = {
    AND?: ModelsWhereInput | ModelsWhereInput[]
    OR?: ModelsWhereInput[]
    NOT?: ModelsWhereInput | ModelsWhereInput[]
    id?: StringFilter<"Models"> | string
    name?: StringFilter<"Models"> | string
    slug?: StringFilter<"Models"> | string
    category?: EnumCategoryFilter<"Models"> | $Enums.Category
    brand_id?: StringNullableFilter<"Models"> | string | null
    adverts?: AdvertsListRelationFilter
    brands?: XOR<BrandsNullableScalarRelationFilter, BrandsWhereInput> | null
  }

  export type ModelsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    brand_id?: SortOrderInput | SortOrder
    adverts?: AdvertsOrderByRelationAggregateInput
    brands?: BrandsOrderByWithRelationInput
  }

  export type ModelsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: ModelsWhereInput | ModelsWhereInput[]
    OR?: ModelsWhereInput[]
    NOT?: ModelsWhereInput | ModelsWhereInput[]
    category?: EnumCategoryFilter<"Models"> | $Enums.Category
    brand_id?: StringNullableFilter<"Models"> | string | null
    adverts?: AdvertsListRelationFilter
    brands?: XOR<BrandsNullableScalarRelationFilter, BrandsWhereInput> | null
  }, "id" | "name" | "slug">

  export type ModelsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    brand_id?: SortOrderInput | SortOrder
    _count?: ModelsCountOrderByAggregateInput
    _max?: ModelsMaxOrderByAggregateInput
    _min?: ModelsMinOrderByAggregateInput
  }

  export type ModelsScalarWhereWithAggregatesInput = {
    AND?: ModelsScalarWhereWithAggregatesInput | ModelsScalarWhereWithAggregatesInput[]
    OR?: ModelsScalarWhereWithAggregatesInput[]
    NOT?: ModelsScalarWhereWithAggregatesInput | ModelsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Models"> | string
    name?: StringWithAggregatesFilter<"Models"> | string
    slug?: StringWithAggregatesFilter<"Models"> | string
    category?: EnumCategoryWithAggregatesFilter<"Models"> | $Enums.Category
    brand_id?: StringNullableWithAggregatesFilter<"Models"> | string | null
  }

  export type OptionalWhereInput = {
    AND?: OptionalWhereInput | OptionalWhereInput[]
    OR?: OptionalWhereInput[]
    NOT?: OptionalWhereInput | OptionalWhereInput[]
    id?: StringFilter<"Optional"> | string
    name?: StringFilter<"Optional"> | string
    adverts?: AdvertsListRelationFilter
  }

  export type OptionalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    adverts?: AdvertsOrderByRelationAggregateInput
  }

  export type OptionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OptionalWhereInput | OptionalWhereInput[]
    OR?: OptionalWhereInput[]
    NOT?: OptionalWhereInput | OptionalWhereInput[]
    adverts?: AdvertsListRelationFilter
  }, "id" | "id" | "name">

  export type OptionalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OptionalCountOrderByAggregateInput
    _max?: OptionalMaxOrderByAggregateInput
    _min?: OptionalMinOrderByAggregateInput
  }

  export type OptionalScalarWhereWithAggregatesInput = {
    AND?: OptionalScalarWhereWithAggregatesInput | OptionalScalarWhereWithAggregatesInput[]
    OR?: OptionalScalarWhereWithAggregatesInput[]
    NOT?: OptionalScalarWhereWithAggregatesInput | OptionalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Optional"> | string
    name?: StringWithAggregatesFilter<"Optional"> | string
  }

  export type PhotosWhereInput = {
    AND?: PhotosWhereInput | PhotosWhereInput[]
    OR?: PhotosWhereInput[]
    NOT?: PhotosWhereInput | PhotosWhereInput[]
    id?: StringFilter<"Photos"> | string
    url?: StringFilter<"Photos"> | string
    key?: StringFilter<"Photos"> | string
    advert_id?: StringFilter<"Photos"> | string
    advert?: XOR<AdvertsScalarRelationFilter, AdvertsWhereInput>
  }

  export type PhotosOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    key?: SortOrder
    advert_id?: SortOrder
    advert?: AdvertsOrderByWithRelationInput
  }

  export type PhotosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotosWhereInput | PhotosWhereInput[]
    OR?: PhotosWhereInput[]
    NOT?: PhotosWhereInput | PhotosWhereInput[]
    url?: StringFilter<"Photos"> | string
    key?: StringFilter<"Photos"> | string
    advert_id?: StringFilter<"Photos"> | string
    advert?: XOR<AdvertsScalarRelationFilter, AdvertsWhereInput>
  }, "id">

  export type PhotosOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    key?: SortOrder
    advert_id?: SortOrder
    _count?: PhotosCountOrderByAggregateInput
    _max?: PhotosMaxOrderByAggregateInput
    _min?: PhotosMinOrderByAggregateInput
  }

  export type PhotosScalarWhereWithAggregatesInput = {
    AND?: PhotosScalarWhereWithAggregatesInput | PhotosScalarWhereWithAggregatesInput[]
    OR?: PhotosScalarWhereWithAggregatesInput[]
    NOT?: PhotosScalarWhereWithAggregatesInput | PhotosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photos"> | string
    url?: StringWithAggregatesFilter<"Photos"> | string
    key?: StringWithAggregatesFilter<"Photos"> | string
    advert_id?: StringWithAggregatesFilter<"Photos"> | string
  }

  export type UserCreateInput = {
    id?: string
    stripe_id?: string | null
    name: string
    lastname: string
    email: string
    phone?: string | null
    active: boolean
    plan?: $Enums.Plan
    updated_at?: Date | string
    created_at?: Date | string
    image?: string | null
    password: string
    adverts?: AdvertsCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    stripe_id?: string | null
    name: string
    lastname: string
    email: string
    phone?: string | null
    active: boolean
    plan?: $Enums.Plan
    updated_at?: Date | string
    created_at?: Date | string
    image?: string | null
    password: string
    adverts?: AdvertsUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    adverts?: AdvertsUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    adverts?: AdvertsUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    stripe_id?: string | null
    name: string
    lastname: string
    email: string
    phone?: string | null
    active: boolean
    plan?: $Enums.Plan
    updated_at?: Date | string
    created_at?: Date | string
    image?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    status: string
    subscripton_id?: string | null
    cycle: string
    stripe_product_id?: string | null
    updated_at?: Date | string
    created_ad?: Date | string
    cancel_at_period_end: boolean
    current_period_start: Date | string
    current_period_end: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    status: string
    subscripton_id?: string | null
    cycle: string
    user_id: string
    stripe_product_id?: string | null
    updated_at?: Date | string
    created_ad?: Date | string
    cancel_at_period_end: boolean
    current_period_start: Date | string
    current_period_end: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subscripton_id?: NullableStringFieldUpdateOperationsInput | string | null
    cycle?: StringFieldUpdateOperationsInput | string
    stripe_product_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_ad?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_at_period_end?: BoolFieldUpdateOperationsInput | boolean
    current_period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    current_period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subscripton_id?: NullableStringFieldUpdateOperationsInput | string | null
    cycle?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    stripe_product_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_ad?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_at_period_end?: BoolFieldUpdateOperationsInput | boolean
    current_period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    current_period_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    status: string
    subscripton_id?: string | null
    cycle: string
    user_id: string
    stripe_product_id?: string | null
    updated_at?: Date | string
    created_ad?: Date | string
    cancel_at_period_end: boolean
    current_period_start: Date | string
    current_period_end: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subscripton_id?: NullableStringFieldUpdateOperationsInput | string | null
    cycle?: StringFieldUpdateOperationsInput | string
    stripe_product_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_ad?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_at_period_end?: BoolFieldUpdateOperationsInput | boolean
    current_period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    current_period_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subscripton_id?: NullableStringFieldUpdateOperationsInput | string | null
    cycle?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    stripe_product_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_ad?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_at_period_end?: BoolFieldUpdateOperationsInput | boolean
    current_period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    current_period_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertsCreateInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user: UserCreateNestedOneWithoutAdvertsInput
    images?: PhotosCreateNestedManyWithoutAdvertInput
    optionals?: OptionalCreateNestedManyWithoutAdvertsInput
    model: ModelsCreateNestedOneWithoutAdvertsInput
    brand: BrandsCreateNestedOneWithoutAdvertsInput
  }

  export type AdvertsUncheckedCreateInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user_id: string
    model_id: string
    brand_id: string
    images?: PhotosUncheckedCreateNestedManyWithoutAdvertInput
    optionals?: OptionalUncheckedCreateNestedManyWithoutAdvertsInput
  }

  export type AdvertsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutAdvertsNestedInput
    images?: PhotosUpdateManyWithoutAdvertNestedInput
    optionals?: OptionalUpdateManyWithoutAdvertsNestedInput
    model?: ModelsUpdateOneRequiredWithoutAdvertsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    images?: PhotosUncheckedUpdateManyWithoutAdvertNestedInput
    optionals?: OptionalUncheckedUpdateManyWithoutAdvertsNestedInput
  }

  export type AdvertsCreateManyInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user_id: string
    model_id: string
    brand_id: string
  }

  export type AdvertsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AdvertsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
  }

  export type BrandsCreateInput = {
    id?: string
    name: string
    category: $Enums.Category
    slug: string
    models?: ModelsCreateNestedManyWithoutBrandsInput
    adverts?: AdvertsCreateNestedManyWithoutBrandInput
  }

  export type BrandsUncheckedCreateInput = {
    id?: string
    name: string
    category: $Enums.Category
    slug: string
    models?: ModelsUncheckedCreateNestedManyWithoutBrandsInput
    adverts?: AdvertsUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    slug?: StringFieldUpdateOperationsInput | string
    models?: ModelsUpdateManyWithoutBrandsNestedInput
    adverts?: AdvertsUpdateManyWithoutBrandNestedInput
  }

  export type BrandsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    slug?: StringFieldUpdateOperationsInput | string
    models?: ModelsUncheckedUpdateManyWithoutBrandsNestedInput
    adverts?: AdvertsUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandsCreateManyInput = {
    id?: string
    name: string
    category: $Enums.Category
    slug: string
  }

  export type BrandsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type BrandsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ModelsCreateInput = {
    id?: string
    name: string
    slug: string
    category: $Enums.Category
    adverts?: AdvertsCreateNestedManyWithoutModelInput
    brands?: BrandsCreateNestedOneWithoutModelsInput
  }

  export type ModelsUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    category: $Enums.Category
    brand_id?: string | null
    adverts?: AdvertsUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    adverts?: AdvertsUpdateManyWithoutModelNestedInput
    brands?: BrandsUpdateOneWithoutModelsNestedInput
  }

  export type ModelsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand_id?: NullableStringFieldUpdateOperationsInput | string | null
    adverts?: AdvertsUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelsCreateManyInput = {
    id?: string
    name: string
    slug: string
    category: $Enums.Category
    brand_id?: string | null
  }

  export type ModelsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
  }

  export type ModelsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OptionalCreateInput = {
    id?: string
    name: string
    adverts?: AdvertsCreateNestedManyWithoutOptionalsInput
  }

  export type OptionalUncheckedCreateInput = {
    id?: string
    name: string
    adverts?: AdvertsUncheckedCreateNestedManyWithoutOptionalsInput
  }

  export type OptionalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    adverts?: AdvertsUpdateManyWithoutOptionalsNestedInput
  }

  export type OptionalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    adverts?: AdvertsUncheckedUpdateManyWithoutOptionalsNestedInput
  }

  export type OptionalCreateManyInput = {
    id?: string
    name: string
  }

  export type OptionalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PhotosCreateInput = {
    id?: string
    url: string
    key: string
    advert: AdvertsCreateNestedOneWithoutImagesInput
  }

  export type PhotosUncheckedCreateInput = {
    id?: string
    url: string
    key: string
    advert_id: string
  }

  export type PhotosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    advert?: AdvertsUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PhotosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    advert_id?: StringFieldUpdateOperationsInput | string
  }

  export type PhotosCreateManyInput = {
    id?: string
    url: string
    key: string
    advert_id: string
  }

  export type PhotosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type PhotosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    advert_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdvertsListRelationFilter = {
    every?: AdvertsWhereInput
    some?: AdvertsWhereInput
    none?: AdvertsWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdvertsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    stripe_id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    plan?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    stripe_id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    plan?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    stripe_id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    plan?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    subscripton_id?: SortOrder
    cycle?: SortOrder
    user_id?: SortOrder
    stripe_product_id?: SortOrder
    updated_at?: SortOrder
    created_ad?: SortOrder
    cancel_at_period_end?: SortOrder
    current_period_start?: SortOrder
    current_period_end?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    subscripton_id?: SortOrder
    cycle?: SortOrder
    user_id?: SortOrder
    stripe_product_id?: SortOrder
    updated_at?: SortOrder
    created_ad?: SortOrder
    cancel_at_period_end?: SortOrder
    current_period_start?: SortOrder
    current_period_end?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    subscripton_id?: SortOrder
    cycle?: SortOrder
    user_id?: SortOrder
    stripe_product_id?: SortOrder
    updated_at?: SortOrder
    created_ad?: SortOrder
    cancel_at_period_end?: SortOrder
    current_period_start?: SortOrder
    current_period_end?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type PhotosListRelationFilter = {
    every?: PhotosWhereInput
    some?: PhotosWhereInput
    none?: PhotosWhereInput
  }

  export type OptionalListRelationFilter = {
    every?: OptionalWhereInput
    some?: OptionalWhereInput
    none?: OptionalWhereInput
  }

  export type ModelsScalarRelationFilter = {
    is?: ModelsWhereInput
    isNot?: ModelsWhereInput
  }

  export type BrandsScalarRelationFilter = {
    is?: BrandsWhereInput
    isNot?: BrandsWhereInput
  }

  export type PhotosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OptionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdvertsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    year_model?: SortOrder
    color?: SortOrder
    city?: SortOrder
    formatted_city?: SortOrder
    state?: SortOrder
    formatted_state?: SortOrder
    price?: SortOrder
    doors?: SortOrder
    mileage?: SortOrder
    description?: SortOrder
    formatted_description?: SortOrder
    plate?: SortOrder
    transmission?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    slug?: SortOrder
    emphasis?: SortOrder
    user_id?: SortOrder
    model_id?: SortOrder
    brand_id?: SortOrder
  }

  export type AdvertsAvgOrderByAggregateInput = {
    year_model?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
  }

  export type AdvertsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    year_model?: SortOrder
    color?: SortOrder
    city?: SortOrder
    formatted_city?: SortOrder
    state?: SortOrder
    formatted_state?: SortOrder
    price?: SortOrder
    doors?: SortOrder
    mileage?: SortOrder
    description?: SortOrder
    formatted_description?: SortOrder
    plate?: SortOrder
    transmission?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    slug?: SortOrder
    emphasis?: SortOrder
    user_id?: SortOrder
    model_id?: SortOrder
    brand_id?: SortOrder
  }

  export type AdvertsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    year_model?: SortOrder
    color?: SortOrder
    city?: SortOrder
    formatted_city?: SortOrder
    state?: SortOrder
    formatted_state?: SortOrder
    price?: SortOrder
    doors?: SortOrder
    mileage?: SortOrder
    description?: SortOrder
    formatted_description?: SortOrder
    plate?: SortOrder
    transmission?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    slug?: SortOrder
    emphasis?: SortOrder
    user_id?: SortOrder
    model_id?: SortOrder
    brand_id?: SortOrder
  }

  export type AdvertsSumOrderByAggregateInput = {
    year_model?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type ModelsListRelationFilter = {
    every?: ModelsWhereInput
    some?: ModelsWhereInput
    none?: ModelsWhereInput
  }

  export type ModelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    slug?: SortOrder
  }

  export type BrandsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    slug?: SortOrder
  }

  export type BrandsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    slug?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type BrandsNullableScalarRelationFilter = {
    is?: BrandsWhereInput | null
    isNot?: BrandsWhereInput | null
  }

  export type ModelsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    brand_id?: SortOrder
  }

  export type ModelsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    brand_id?: SortOrder
  }

  export type ModelsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    brand_id?: SortOrder
  }

  export type OptionalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AdvertsScalarRelationFilter = {
    is?: AdvertsWhereInput
    isNot?: AdvertsWhereInput
  }

  export type PhotosCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    key?: SortOrder
    advert_id?: SortOrder
  }

  export type PhotosMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    key?: SortOrder
    advert_id?: SortOrder
  }

  export type PhotosMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    key?: SortOrder
    advert_id?: SortOrder
  }

  export type AdvertsCreateNestedManyWithoutUserInput = {
    create?: XOR<AdvertsCreateWithoutUserInput, AdvertsUncheckedCreateWithoutUserInput> | AdvertsCreateWithoutUserInput[] | AdvertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutUserInput | AdvertsCreateOrConnectWithoutUserInput[]
    createMany?: AdvertsCreateManyUserInputEnvelope
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type AdvertsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdvertsCreateWithoutUserInput, AdvertsUncheckedCreateWithoutUserInput> | AdvertsCreateWithoutUserInput[] | AdvertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutUserInput | AdvertsCreateOrConnectWithoutUserInput[]
    createMany?: AdvertsCreateManyUserInputEnvelope
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPlanFieldUpdateOperationsInput = {
    set?: $Enums.Plan
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdvertsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdvertsCreateWithoutUserInput, AdvertsUncheckedCreateWithoutUserInput> | AdvertsCreateWithoutUserInput[] | AdvertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutUserInput | AdvertsCreateOrConnectWithoutUserInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutUserInput | AdvertsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdvertsCreateManyUserInputEnvelope
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutUserInput | AdvertsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutUserInput | AdvertsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AdvertsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdvertsCreateWithoutUserInput, AdvertsUncheckedCreateWithoutUserInput> | AdvertsCreateWithoutUserInput[] | AdvertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutUserInput | AdvertsCreateOrConnectWithoutUserInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutUserInput | AdvertsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdvertsCreateManyUserInputEnvelope
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutUserInput | AdvertsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutUserInput | AdvertsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutAdvertsInput = {
    create?: XOR<UserCreateWithoutAdvertsInput, UserUncheckedCreateWithoutAdvertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvertsInput
    connect?: UserWhereUniqueInput
  }

  export type PhotosCreateNestedManyWithoutAdvertInput = {
    create?: XOR<PhotosCreateWithoutAdvertInput, PhotosUncheckedCreateWithoutAdvertInput> | PhotosCreateWithoutAdvertInput[] | PhotosUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: PhotosCreateOrConnectWithoutAdvertInput | PhotosCreateOrConnectWithoutAdvertInput[]
    createMany?: PhotosCreateManyAdvertInputEnvelope
    connect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
  }

  export type OptionalCreateNestedManyWithoutAdvertsInput = {
    create?: XOR<OptionalCreateWithoutAdvertsInput, OptionalUncheckedCreateWithoutAdvertsInput> | OptionalCreateWithoutAdvertsInput[] | OptionalUncheckedCreateWithoutAdvertsInput[]
    connectOrCreate?: OptionalCreateOrConnectWithoutAdvertsInput | OptionalCreateOrConnectWithoutAdvertsInput[]
    connect?: OptionalWhereUniqueInput | OptionalWhereUniqueInput[]
  }

  export type ModelsCreateNestedOneWithoutAdvertsInput = {
    create?: XOR<ModelsCreateWithoutAdvertsInput, ModelsUncheckedCreateWithoutAdvertsInput>
    connectOrCreate?: ModelsCreateOrConnectWithoutAdvertsInput
    connect?: ModelsWhereUniqueInput
  }

  export type BrandsCreateNestedOneWithoutAdvertsInput = {
    create?: XOR<BrandsCreateWithoutAdvertsInput, BrandsUncheckedCreateWithoutAdvertsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutAdvertsInput
    connect?: BrandsWhereUniqueInput
  }

  export type PhotosUncheckedCreateNestedManyWithoutAdvertInput = {
    create?: XOR<PhotosCreateWithoutAdvertInput, PhotosUncheckedCreateWithoutAdvertInput> | PhotosCreateWithoutAdvertInput[] | PhotosUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: PhotosCreateOrConnectWithoutAdvertInput | PhotosCreateOrConnectWithoutAdvertInput[]
    createMany?: PhotosCreateManyAdvertInputEnvelope
    connect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
  }

  export type OptionalUncheckedCreateNestedManyWithoutAdvertsInput = {
    create?: XOR<OptionalCreateWithoutAdvertsInput, OptionalUncheckedCreateWithoutAdvertsInput> | OptionalCreateWithoutAdvertsInput[] | OptionalUncheckedCreateWithoutAdvertsInput[]
    connectOrCreate?: OptionalCreateOrConnectWithoutAdvertsInput | OptionalCreateOrConnectWithoutAdvertsInput[]
    connect?: OptionalWhereUniqueInput | OptionalWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutAdvertsNestedInput = {
    create?: XOR<UserCreateWithoutAdvertsInput, UserUncheckedCreateWithoutAdvertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvertsInput
    upsert?: UserUpsertWithoutAdvertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdvertsInput, UserUpdateWithoutAdvertsInput>, UserUncheckedUpdateWithoutAdvertsInput>
  }

  export type PhotosUpdateManyWithoutAdvertNestedInput = {
    create?: XOR<PhotosCreateWithoutAdvertInput, PhotosUncheckedCreateWithoutAdvertInput> | PhotosCreateWithoutAdvertInput[] | PhotosUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: PhotosCreateOrConnectWithoutAdvertInput | PhotosCreateOrConnectWithoutAdvertInput[]
    upsert?: PhotosUpsertWithWhereUniqueWithoutAdvertInput | PhotosUpsertWithWhereUniqueWithoutAdvertInput[]
    createMany?: PhotosCreateManyAdvertInputEnvelope
    set?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    disconnect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    delete?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    connect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    update?: PhotosUpdateWithWhereUniqueWithoutAdvertInput | PhotosUpdateWithWhereUniqueWithoutAdvertInput[]
    updateMany?: PhotosUpdateManyWithWhereWithoutAdvertInput | PhotosUpdateManyWithWhereWithoutAdvertInput[]
    deleteMany?: PhotosScalarWhereInput | PhotosScalarWhereInput[]
  }

  export type OptionalUpdateManyWithoutAdvertsNestedInput = {
    create?: XOR<OptionalCreateWithoutAdvertsInput, OptionalUncheckedCreateWithoutAdvertsInput> | OptionalCreateWithoutAdvertsInput[] | OptionalUncheckedCreateWithoutAdvertsInput[]
    connectOrCreate?: OptionalCreateOrConnectWithoutAdvertsInput | OptionalCreateOrConnectWithoutAdvertsInput[]
    upsert?: OptionalUpsertWithWhereUniqueWithoutAdvertsInput | OptionalUpsertWithWhereUniqueWithoutAdvertsInput[]
    set?: OptionalWhereUniqueInput | OptionalWhereUniqueInput[]
    disconnect?: OptionalWhereUniqueInput | OptionalWhereUniqueInput[]
    delete?: OptionalWhereUniqueInput | OptionalWhereUniqueInput[]
    connect?: OptionalWhereUniqueInput | OptionalWhereUniqueInput[]
    update?: OptionalUpdateWithWhereUniqueWithoutAdvertsInput | OptionalUpdateWithWhereUniqueWithoutAdvertsInput[]
    updateMany?: OptionalUpdateManyWithWhereWithoutAdvertsInput | OptionalUpdateManyWithWhereWithoutAdvertsInput[]
    deleteMany?: OptionalScalarWhereInput | OptionalScalarWhereInput[]
  }

  export type ModelsUpdateOneRequiredWithoutAdvertsNestedInput = {
    create?: XOR<ModelsCreateWithoutAdvertsInput, ModelsUncheckedCreateWithoutAdvertsInput>
    connectOrCreate?: ModelsCreateOrConnectWithoutAdvertsInput
    upsert?: ModelsUpsertWithoutAdvertsInput
    connect?: ModelsWhereUniqueInput
    update?: XOR<XOR<ModelsUpdateToOneWithWhereWithoutAdvertsInput, ModelsUpdateWithoutAdvertsInput>, ModelsUncheckedUpdateWithoutAdvertsInput>
  }

  export type BrandsUpdateOneRequiredWithoutAdvertsNestedInput = {
    create?: XOR<BrandsCreateWithoutAdvertsInput, BrandsUncheckedCreateWithoutAdvertsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutAdvertsInput
    upsert?: BrandsUpsertWithoutAdvertsInput
    connect?: BrandsWhereUniqueInput
    update?: XOR<XOR<BrandsUpdateToOneWithWhereWithoutAdvertsInput, BrandsUpdateWithoutAdvertsInput>, BrandsUncheckedUpdateWithoutAdvertsInput>
  }

  export type PhotosUncheckedUpdateManyWithoutAdvertNestedInput = {
    create?: XOR<PhotosCreateWithoutAdvertInput, PhotosUncheckedCreateWithoutAdvertInput> | PhotosCreateWithoutAdvertInput[] | PhotosUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: PhotosCreateOrConnectWithoutAdvertInput | PhotosCreateOrConnectWithoutAdvertInput[]
    upsert?: PhotosUpsertWithWhereUniqueWithoutAdvertInput | PhotosUpsertWithWhereUniqueWithoutAdvertInput[]
    createMany?: PhotosCreateManyAdvertInputEnvelope
    set?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    disconnect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    delete?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    connect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    update?: PhotosUpdateWithWhereUniqueWithoutAdvertInput | PhotosUpdateWithWhereUniqueWithoutAdvertInput[]
    updateMany?: PhotosUpdateManyWithWhereWithoutAdvertInput | PhotosUpdateManyWithWhereWithoutAdvertInput[]
    deleteMany?: PhotosScalarWhereInput | PhotosScalarWhereInput[]
  }

  export type OptionalUncheckedUpdateManyWithoutAdvertsNestedInput = {
    create?: XOR<OptionalCreateWithoutAdvertsInput, OptionalUncheckedCreateWithoutAdvertsInput> | OptionalCreateWithoutAdvertsInput[] | OptionalUncheckedCreateWithoutAdvertsInput[]
    connectOrCreate?: OptionalCreateOrConnectWithoutAdvertsInput | OptionalCreateOrConnectWithoutAdvertsInput[]
    upsert?: OptionalUpsertWithWhereUniqueWithoutAdvertsInput | OptionalUpsertWithWhereUniqueWithoutAdvertsInput[]
    set?: OptionalWhereUniqueInput | OptionalWhereUniqueInput[]
    disconnect?: OptionalWhereUniqueInput | OptionalWhereUniqueInput[]
    delete?: OptionalWhereUniqueInput | OptionalWhereUniqueInput[]
    connect?: OptionalWhereUniqueInput | OptionalWhereUniqueInput[]
    update?: OptionalUpdateWithWhereUniqueWithoutAdvertsInput | OptionalUpdateWithWhereUniqueWithoutAdvertsInput[]
    updateMany?: OptionalUpdateManyWithWhereWithoutAdvertsInput | OptionalUpdateManyWithWhereWithoutAdvertsInput[]
    deleteMany?: OptionalScalarWhereInput | OptionalScalarWhereInput[]
  }

  export type ModelsCreateNestedManyWithoutBrandsInput = {
    create?: XOR<ModelsCreateWithoutBrandsInput, ModelsUncheckedCreateWithoutBrandsInput> | ModelsCreateWithoutBrandsInput[] | ModelsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: ModelsCreateOrConnectWithoutBrandsInput | ModelsCreateOrConnectWithoutBrandsInput[]
    createMany?: ModelsCreateManyBrandsInputEnvelope
    connect?: ModelsWhereUniqueInput | ModelsWhereUniqueInput[]
  }

  export type AdvertsCreateNestedManyWithoutBrandInput = {
    create?: XOR<AdvertsCreateWithoutBrandInput, AdvertsUncheckedCreateWithoutBrandInput> | AdvertsCreateWithoutBrandInput[] | AdvertsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutBrandInput | AdvertsCreateOrConnectWithoutBrandInput[]
    createMany?: AdvertsCreateManyBrandInputEnvelope
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type ModelsUncheckedCreateNestedManyWithoutBrandsInput = {
    create?: XOR<ModelsCreateWithoutBrandsInput, ModelsUncheckedCreateWithoutBrandsInput> | ModelsCreateWithoutBrandsInput[] | ModelsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: ModelsCreateOrConnectWithoutBrandsInput | ModelsCreateOrConnectWithoutBrandsInput[]
    createMany?: ModelsCreateManyBrandsInputEnvelope
    connect?: ModelsWhereUniqueInput | ModelsWhereUniqueInput[]
  }

  export type AdvertsUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<AdvertsCreateWithoutBrandInput, AdvertsUncheckedCreateWithoutBrandInput> | AdvertsCreateWithoutBrandInput[] | AdvertsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutBrandInput | AdvertsCreateOrConnectWithoutBrandInput[]
    createMany?: AdvertsCreateManyBrandInputEnvelope
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type ModelsUpdateManyWithoutBrandsNestedInput = {
    create?: XOR<ModelsCreateWithoutBrandsInput, ModelsUncheckedCreateWithoutBrandsInput> | ModelsCreateWithoutBrandsInput[] | ModelsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: ModelsCreateOrConnectWithoutBrandsInput | ModelsCreateOrConnectWithoutBrandsInput[]
    upsert?: ModelsUpsertWithWhereUniqueWithoutBrandsInput | ModelsUpsertWithWhereUniqueWithoutBrandsInput[]
    createMany?: ModelsCreateManyBrandsInputEnvelope
    set?: ModelsWhereUniqueInput | ModelsWhereUniqueInput[]
    disconnect?: ModelsWhereUniqueInput | ModelsWhereUniqueInput[]
    delete?: ModelsWhereUniqueInput | ModelsWhereUniqueInput[]
    connect?: ModelsWhereUniqueInput | ModelsWhereUniqueInput[]
    update?: ModelsUpdateWithWhereUniqueWithoutBrandsInput | ModelsUpdateWithWhereUniqueWithoutBrandsInput[]
    updateMany?: ModelsUpdateManyWithWhereWithoutBrandsInput | ModelsUpdateManyWithWhereWithoutBrandsInput[]
    deleteMany?: ModelsScalarWhereInput | ModelsScalarWhereInput[]
  }

  export type AdvertsUpdateManyWithoutBrandNestedInput = {
    create?: XOR<AdvertsCreateWithoutBrandInput, AdvertsUncheckedCreateWithoutBrandInput> | AdvertsCreateWithoutBrandInput[] | AdvertsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutBrandInput | AdvertsCreateOrConnectWithoutBrandInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutBrandInput | AdvertsUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: AdvertsCreateManyBrandInputEnvelope
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutBrandInput | AdvertsUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutBrandInput | AdvertsUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type ModelsUncheckedUpdateManyWithoutBrandsNestedInput = {
    create?: XOR<ModelsCreateWithoutBrandsInput, ModelsUncheckedCreateWithoutBrandsInput> | ModelsCreateWithoutBrandsInput[] | ModelsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: ModelsCreateOrConnectWithoutBrandsInput | ModelsCreateOrConnectWithoutBrandsInput[]
    upsert?: ModelsUpsertWithWhereUniqueWithoutBrandsInput | ModelsUpsertWithWhereUniqueWithoutBrandsInput[]
    createMany?: ModelsCreateManyBrandsInputEnvelope
    set?: ModelsWhereUniqueInput | ModelsWhereUniqueInput[]
    disconnect?: ModelsWhereUniqueInput | ModelsWhereUniqueInput[]
    delete?: ModelsWhereUniqueInput | ModelsWhereUniqueInput[]
    connect?: ModelsWhereUniqueInput | ModelsWhereUniqueInput[]
    update?: ModelsUpdateWithWhereUniqueWithoutBrandsInput | ModelsUpdateWithWhereUniqueWithoutBrandsInput[]
    updateMany?: ModelsUpdateManyWithWhereWithoutBrandsInput | ModelsUpdateManyWithWhereWithoutBrandsInput[]
    deleteMany?: ModelsScalarWhereInput | ModelsScalarWhereInput[]
  }

  export type AdvertsUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<AdvertsCreateWithoutBrandInput, AdvertsUncheckedCreateWithoutBrandInput> | AdvertsCreateWithoutBrandInput[] | AdvertsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutBrandInput | AdvertsCreateOrConnectWithoutBrandInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutBrandInput | AdvertsUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: AdvertsCreateManyBrandInputEnvelope
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutBrandInput | AdvertsUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutBrandInput | AdvertsUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type AdvertsCreateNestedManyWithoutModelInput = {
    create?: XOR<AdvertsCreateWithoutModelInput, AdvertsUncheckedCreateWithoutModelInput> | AdvertsCreateWithoutModelInput[] | AdvertsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutModelInput | AdvertsCreateOrConnectWithoutModelInput[]
    createMany?: AdvertsCreateManyModelInputEnvelope
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type BrandsCreateNestedOneWithoutModelsInput = {
    create?: XOR<BrandsCreateWithoutModelsInput, BrandsUncheckedCreateWithoutModelsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutModelsInput
    connect?: BrandsWhereUniqueInput
  }

  export type AdvertsUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<AdvertsCreateWithoutModelInput, AdvertsUncheckedCreateWithoutModelInput> | AdvertsCreateWithoutModelInput[] | AdvertsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutModelInput | AdvertsCreateOrConnectWithoutModelInput[]
    createMany?: AdvertsCreateManyModelInputEnvelope
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type AdvertsUpdateManyWithoutModelNestedInput = {
    create?: XOR<AdvertsCreateWithoutModelInput, AdvertsUncheckedCreateWithoutModelInput> | AdvertsCreateWithoutModelInput[] | AdvertsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutModelInput | AdvertsCreateOrConnectWithoutModelInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutModelInput | AdvertsUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: AdvertsCreateManyModelInputEnvelope
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutModelInput | AdvertsUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutModelInput | AdvertsUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type BrandsUpdateOneWithoutModelsNestedInput = {
    create?: XOR<BrandsCreateWithoutModelsInput, BrandsUncheckedCreateWithoutModelsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutModelsInput
    upsert?: BrandsUpsertWithoutModelsInput
    disconnect?: BrandsWhereInput | boolean
    delete?: BrandsWhereInput | boolean
    connect?: BrandsWhereUniqueInput
    update?: XOR<XOR<BrandsUpdateToOneWithWhereWithoutModelsInput, BrandsUpdateWithoutModelsInput>, BrandsUncheckedUpdateWithoutModelsInput>
  }

  export type AdvertsUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<AdvertsCreateWithoutModelInput, AdvertsUncheckedCreateWithoutModelInput> | AdvertsCreateWithoutModelInput[] | AdvertsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutModelInput | AdvertsCreateOrConnectWithoutModelInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutModelInput | AdvertsUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: AdvertsCreateManyModelInputEnvelope
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutModelInput | AdvertsUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutModelInput | AdvertsUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type AdvertsCreateNestedManyWithoutOptionalsInput = {
    create?: XOR<AdvertsCreateWithoutOptionalsInput, AdvertsUncheckedCreateWithoutOptionalsInput> | AdvertsCreateWithoutOptionalsInput[] | AdvertsUncheckedCreateWithoutOptionalsInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutOptionalsInput | AdvertsCreateOrConnectWithoutOptionalsInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type AdvertsUncheckedCreateNestedManyWithoutOptionalsInput = {
    create?: XOR<AdvertsCreateWithoutOptionalsInput, AdvertsUncheckedCreateWithoutOptionalsInput> | AdvertsCreateWithoutOptionalsInput[] | AdvertsUncheckedCreateWithoutOptionalsInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutOptionalsInput | AdvertsCreateOrConnectWithoutOptionalsInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type AdvertsUpdateManyWithoutOptionalsNestedInput = {
    create?: XOR<AdvertsCreateWithoutOptionalsInput, AdvertsUncheckedCreateWithoutOptionalsInput> | AdvertsCreateWithoutOptionalsInput[] | AdvertsUncheckedCreateWithoutOptionalsInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutOptionalsInput | AdvertsCreateOrConnectWithoutOptionalsInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutOptionalsInput | AdvertsUpsertWithWhereUniqueWithoutOptionalsInput[]
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutOptionalsInput | AdvertsUpdateWithWhereUniqueWithoutOptionalsInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutOptionalsInput | AdvertsUpdateManyWithWhereWithoutOptionalsInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type AdvertsUncheckedUpdateManyWithoutOptionalsNestedInput = {
    create?: XOR<AdvertsCreateWithoutOptionalsInput, AdvertsUncheckedCreateWithoutOptionalsInput> | AdvertsCreateWithoutOptionalsInput[] | AdvertsUncheckedCreateWithoutOptionalsInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutOptionalsInput | AdvertsCreateOrConnectWithoutOptionalsInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutOptionalsInput | AdvertsUpsertWithWhereUniqueWithoutOptionalsInput[]
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutOptionalsInput | AdvertsUpdateWithWhereUniqueWithoutOptionalsInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutOptionalsInput | AdvertsUpdateManyWithWhereWithoutOptionalsInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type AdvertsCreateNestedOneWithoutImagesInput = {
    create?: XOR<AdvertsCreateWithoutImagesInput, AdvertsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AdvertsCreateOrConnectWithoutImagesInput
    connect?: AdvertsWhereUniqueInput
  }

  export type AdvertsUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<AdvertsCreateWithoutImagesInput, AdvertsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AdvertsCreateOrConnectWithoutImagesInput
    upsert?: AdvertsUpsertWithoutImagesInput
    connect?: AdvertsWhereUniqueInput
    update?: XOR<XOR<AdvertsUpdateToOneWithWhereWithoutImagesInput, AdvertsUpdateWithoutImagesInput>, AdvertsUncheckedUpdateWithoutImagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type AdvertsCreateWithoutUserInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    images?: PhotosCreateNestedManyWithoutAdvertInput
    optionals?: OptionalCreateNestedManyWithoutAdvertsInput
    model: ModelsCreateNestedOneWithoutAdvertsInput
    brand: BrandsCreateNestedOneWithoutAdvertsInput
  }

  export type AdvertsUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    model_id: string
    brand_id: string
    images?: PhotosUncheckedCreateNestedManyWithoutAdvertInput
    optionals?: OptionalUncheckedCreateNestedManyWithoutAdvertsInput
  }

  export type AdvertsCreateOrConnectWithoutUserInput = {
    where: AdvertsWhereUniqueInput
    create: XOR<AdvertsCreateWithoutUserInput, AdvertsUncheckedCreateWithoutUserInput>
  }

  export type AdvertsCreateManyUserInputEnvelope = {
    data: AdvertsCreateManyUserInput | AdvertsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    status: string
    subscripton_id?: string | null
    cycle: string
    stripe_product_id?: string | null
    updated_at?: Date | string
    created_ad?: Date | string
    cancel_at_period_end: boolean
    current_period_start: Date | string
    current_period_end: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    status: string
    subscripton_id?: string | null
    cycle: string
    stripe_product_id?: string | null
    updated_at?: Date | string
    created_ad?: Date | string
    cancel_at_period_end: boolean
    current_period_start: Date | string
    current_period_end: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdvertsUpsertWithWhereUniqueWithoutUserInput = {
    where: AdvertsWhereUniqueInput
    update: XOR<AdvertsUpdateWithoutUserInput, AdvertsUncheckedUpdateWithoutUserInput>
    create: XOR<AdvertsCreateWithoutUserInput, AdvertsUncheckedCreateWithoutUserInput>
  }

  export type AdvertsUpdateWithWhereUniqueWithoutUserInput = {
    where: AdvertsWhereUniqueInput
    data: XOR<AdvertsUpdateWithoutUserInput, AdvertsUncheckedUpdateWithoutUserInput>
  }

  export type AdvertsUpdateManyWithWhereWithoutUserInput = {
    where: AdvertsScalarWhereInput
    data: XOR<AdvertsUpdateManyMutationInput, AdvertsUncheckedUpdateManyWithoutUserInput>
  }

  export type AdvertsScalarWhereInput = {
    AND?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
    OR?: AdvertsScalarWhereInput[]
    NOT?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
    id?: StringFilter<"Adverts"> | string
    type?: StringFilter<"Adverts"> | string
    year_model?: IntFilter<"Adverts"> | number
    color?: StringFilter<"Adverts"> | string
    city?: StringFilter<"Adverts"> | string
    formatted_city?: StringFilter<"Adverts"> | string
    state?: StringFilter<"Adverts"> | string
    formatted_state?: StringFilter<"Adverts"> | string
    price?: IntFilter<"Adverts"> | number
    doors?: StringFilter<"Adverts"> | string
    mileage?: IntFilter<"Adverts"> | number
    description?: StringNullableFilter<"Adverts"> | string | null
    formatted_description?: StringNullableFilter<"Adverts"> | string | null
    plate?: StringFilter<"Adverts"> | string
    transmission?: StringFilter<"Adverts"> | string
    created_at?: DateTimeFilter<"Adverts"> | Date | string
    updated_at?: DateTimeFilter<"Adverts"> | Date | string
    status?: EnumStatusFilter<"Adverts"> | $Enums.Status
    slug?: StringFilter<"Adverts"> | string
    emphasis?: BoolNullableFilter<"Adverts"> | boolean | null
    user_id?: StringFilter<"Adverts"> | string
    model_id?: StringFilter<"Adverts"> | string
    brand_id?: StringFilter<"Adverts"> | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    subscripton_id?: StringNullableFilter<"Subscription"> | string | null
    cycle?: StringFilter<"Subscription"> | string
    user_id?: StringFilter<"Subscription"> | string
    stripe_product_id?: StringNullableFilter<"Subscription"> | string | null
    updated_at?: DateTimeFilter<"Subscription"> | Date | string
    created_ad?: DateTimeFilter<"Subscription"> | Date | string
    cancel_at_period_end?: BoolFilter<"Subscription"> | boolean
    current_period_start?: DateTimeFilter<"Subscription"> | Date | string
    current_period_end?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    stripe_id?: string | null
    name: string
    lastname: string
    email: string
    phone?: string | null
    active: boolean
    plan?: $Enums.Plan
    updated_at?: Date | string
    created_at?: Date | string
    image?: string | null
    password: string
    adverts?: AdvertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    stripe_id?: string | null
    name: string
    lastname: string
    email: string
    phone?: string | null
    active: boolean
    plan?: $Enums.Plan
    updated_at?: Date | string
    created_at?: Date | string
    image?: string | null
    password: string
    adverts?: AdvertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    adverts?: AdvertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    adverts?: AdvertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAdvertsInput = {
    id?: string
    stripe_id?: string | null
    name: string
    lastname: string
    email: string
    phone?: string | null
    active: boolean
    plan?: $Enums.Plan
    updated_at?: Date | string
    created_at?: Date | string
    image?: string | null
    password: string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdvertsInput = {
    id?: string
    stripe_id?: string | null
    name: string
    lastname: string
    email: string
    phone?: string | null
    active: boolean
    plan?: $Enums.Plan
    updated_at?: Date | string
    created_at?: Date | string
    image?: string | null
    password: string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdvertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdvertsInput, UserUncheckedCreateWithoutAdvertsInput>
  }

  export type PhotosCreateWithoutAdvertInput = {
    id?: string
    url: string
    key: string
  }

  export type PhotosUncheckedCreateWithoutAdvertInput = {
    id?: string
    url: string
    key: string
  }

  export type PhotosCreateOrConnectWithoutAdvertInput = {
    where: PhotosWhereUniqueInput
    create: XOR<PhotosCreateWithoutAdvertInput, PhotosUncheckedCreateWithoutAdvertInput>
  }

  export type PhotosCreateManyAdvertInputEnvelope = {
    data: PhotosCreateManyAdvertInput | PhotosCreateManyAdvertInput[]
    skipDuplicates?: boolean
  }

  export type OptionalCreateWithoutAdvertsInput = {
    id?: string
    name: string
  }

  export type OptionalUncheckedCreateWithoutAdvertsInput = {
    id?: string
    name: string
  }

  export type OptionalCreateOrConnectWithoutAdvertsInput = {
    where: OptionalWhereUniqueInput
    create: XOR<OptionalCreateWithoutAdvertsInput, OptionalUncheckedCreateWithoutAdvertsInput>
  }

  export type ModelsCreateWithoutAdvertsInput = {
    id?: string
    name: string
    slug: string
    category: $Enums.Category
    brands?: BrandsCreateNestedOneWithoutModelsInput
  }

  export type ModelsUncheckedCreateWithoutAdvertsInput = {
    id?: string
    name: string
    slug: string
    category: $Enums.Category
    brand_id?: string | null
  }

  export type ModelsCreateOrConnectWithoutAdvertsInput = {
    where: ModelsWhereUniqueInput
    create: XOR<ModelsCreateWithoutAdvertsInput, ModelsUncheckedCreateWithoutAdvertsInput>
  }

  export type BrandsCreateWithoutAdvertsInput = {
    id?: string
    name: string
    category: $Enums.Category
    slug: string
    models?: ModelsCreateNestedManyWithoutBrandsInput
  }

  export type BrandsUncheckedCreateWithoutAdvertsInput = {
    id?: string
    name: string
    category: $Enums.Category
    slug: string
    models?: ModelsUncheckedCreateNestedManyWithoutBrandsInput
  }

  export type BrandsCreateOrConnectWithoutAdvertsInput = {
    where: BrandsWhereUniqueInput
    create: XOR<BrandsCreateWithoutAdvertsInput, BrandsUncheckedCreateWithoutAdvertsInput>
  }

  export type UserUpsertWithoutAdvertsInput = {
    update: XOR<UserUpdateWithoutAdvertsInput, UserUncheckedUpdateWithoutAdvertsInput>
    create: XOR<UserCreateWithoutAdvertsInput, UserUncheckedCreateWithoutAdvertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdvertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdvertsInput, UserUncheckedUpdateWithoutAdvertsInput>
  }

  export type UserUpdateWithoutAdvertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdvertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PhotosUpsertWithWhereUniqueWithoutAdvertInput = {
    where: PhotosWhereUniqueInput
    update: XOR<PhotosUpdateWithoutAdvertInput, PhotosUncheckedUpdateWithoutAdvertInput>
    create: XOR<PhotosCreateWithoutAdvertInput, PhotosUncheckedCreateWithoutAdvertInput>
  }

  export type PhotosUpdateWithWhereUniqueWithoutAdvertInput = {
    where: PhotosWhereUniqueInput
    data: XOR<PhotosUpdateWithoutAdvertInput, PhotosUncheckedUpdateWithoutAdvertInput>
  }

  export type PhotosUpdateManyWithWhereWithoutAdvertInput = {
    where: PhotosScalarWhereInput
    data: XOR<PhotosUpdateManyMutationInput, PhotosUncheckedUpdateManyWithoutAdvertInput>
  }

  export type PhotosScalarWhereInput = {
    AND?: PhotosScalarWhereInput | PhotosScalarWhereInput[]
    OR?: PhotosScalarWhereInput[]
    NOT?: PhotosScalarWhereInput | PhotosScalarWhereInput[]
    id?: StringFilter<"Photos"> | string
    url?: StringFilter<"Photos"> | string
    key?: StringFilter<"Photos"> | string
    advert_id?: StringFilter<"Photos"> | string
  }

  export type OptionalUpsertWithWhereUniqueWithoutAdvertsInput = {
    where: OptionalWhereUniqueInput
    update: XOR<OptionalUpdateWithoutAdvertsInput, OptionalUncheckedUpdateWithoutAdvertsInput>
    create: XOR<OptionalCreateWithoutAdvertsInput, OptionalUncheckedCreateWithoutAdvertsInput>
  }

  export type OptionalUpdateWithWhereUniqueWithoutAdvertsInput = {
    where: OptionalWhereUniqueInput
    data: XOR<OptionalUpdateWithoutAdvertsInput, OptionalUncheckedUpdateWithoutAdvertsInput>
  }

  export type OptionalUpdateManyWithWhereWithoutAdvertsInput = {
    where: OptionalScalarWhereInput
    data: XOR<OptionalUpdateManyMutationInput, OptionalUncheckedUpdateManyWithoutAdvertsInput>
  }

  export type OptionalScalarWhereInput = {
    AND?: OptionalScalarWhereInput | OptionalScalarWhereInput[]
    OR?: OptionalScalarWhereInput[]
    NOT?: OptionalScalarWhereInput | OptionalScalarWhereInput[]
    id?: StringFilter<"Optional"> | string
    name?: StringFilter<"Optional"> | string
  }

  export type ModelsUpsertWithoutAdvertsInput = {
    update: XOR<ModelsUpdateWithoutAdvertsInput, ModelsUncheckedUpdateWithoutAdvertsInput>
    create: XOR<ModelsCreateWithoutAdvertsInput, ModelsUncheckedCreateWithoutAdvertsInput>
    where?: ModelsWhereInput
  }

  export type ModelsUpdateToOneWithWhereWithoutAdvertsInput = {
    where?: ModelsWhereInput
    data: XOR<ModelsUpdateWithoutAdvertsInput, ModelsUncheckedUpdateWithoutAdvertsInput>
  }

  export type ModelsUpdateWithoutAdvertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brands?: BrandsUpdateOneWithoutModelsNestedInput
  }

  export type ModelsUncheckedUpdateWithoutAdvertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    brand_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandsUpsertWithoutAdvertsInput = {
    update: XOR<BrandsUpdateWithoutAdvertsInput, BrandsUncheckedUpdateWithoutAdvertsInput>
    create: XOR<BrandsCreateWithoutAdvertsInput, BrandsUncheckedCreateWithoutAdvertsInput>
    where?: BrandsWhereInput
  }

  export type BrandsUpdateToOneWithWhereWithoutAdvertsInput = {
    where?: BrandsWhereInput
    data: XOR<BrandsUpdateWithoutAdvertsInput, BrandsUncheckedUpdateWithoutAdvertsInput>
  }

  export type BrandsUpdateWithoutAdvertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    slug?: StringFieldUpdateOperationsInput | string
    models?: ModelsUpdateManyWithoutBrandsNestedInput
  }

  export type BrandsUncheckedUpdateWithoutAdvertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    slug?: StringFieldUpdateOperationsInput | string
    models?: ModelsUncheckedUpdateManyWithoutBrandsNestedInput
  }

  export type ModelsCreateWithoutBrandsInput = {
    id?: string
    name: string
    slug: string
    category: $Enums.Category
    adverts?: AdvertsCreateNestedManyWithoutModelInput
  }

  export type ModelsUncheckedCreateWithoutBrandsInput = {
    id?: string
    name: string
    slug: string
    category: $Enums.Category
    adverts?: AdvertsUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelsCreateOrConnectWithoutBrandsInput = {
    where: ModelsWhereUniqueInput
    create: XOR<ModelsCreateWithoutBrandsInput, ModelsUncheckedCreateWithoutBrandsInput>
  }

  export type ModelsCreateManyBrandsInputEnvelope = {
    data: ModelsCreateManyBrandsInput | ModelsCreateManyBrandsInput[]
    skipDuplicates?: boolean
  }

  export type AdvertsCreateWithoutBrandInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user: UserCreateNestedOneWithoutAdvertsInput
    images?: PhotosCreateNestedManyWithoutAdvertInput
    optionals?: OptionalCreateNestedManyWithoutAdvertsInput
    model: ModelsCreateNestedOneWithoutAdvertsInput
  }

  export type AdvertsUncheckedCreateWithoutBrandInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user_id: string
    model_id: string
    images?: PhotosUncheckedCreateNestedManyWithoutAdvertInput
    optionals?: OptionalUncheckedCreateNestedManyWithoutAdvertsInput
  }

  export type AdvertsCreateOrConnectWithoutBrandInput = {
    where: AdvertsWhereUniqueInput
    create: XOR<AdvertsCreateWithoutBrandInput, AdvertsUncheckedCreateWithoutBrandInput>
  }

  export type AdvertsCreateManyBrandInputEnvelope = {
    data: AdvertsCreateManyBrandInput | AdvertsCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ModelsUpsertWithWhereUniqueWithoutBrandsInput = {
    where: ModelsWhereUniqueInput
    update: XOR<ModelsUpdateWithoutBrandsInput, ModelsUncheckedUpdateWithoutBrandsInput>
    create: XOR<ModelsCreateWithoutBrandsInput, ModelsUncheckedCreateWithoutBrandsInput>
  }

  export type ModelsUpdateWithWhereUniqueWithoutBrandsInput = {
    where: ModelsWhereUniqueInput
    data: XOR<ModelsUpdateWithoutBrandsInput, ModelsUncheckedUpdateWithoutBrandsInput>
  }

  export type ModelsUpdateManyWithWhereWithoutBrandsInput = {
    where: ModelsScalarWhereInput
    data: XOR<ModelsUpdateManyMutationInput, ModelsUncheckedUpdateManyWithoutBrandsInput>
  }

  export type ModelsScalarWhereInput = {
    AND?: ModelsScalarWhereInput | ModelsScalarWhereInput[]
    OR?: ModelsScalarWhereInput[]
    NOT?: ModelsScalarWhereInput | ModelsScalarWhereInput[]
    id?: StringFilter<"Models"> | string
    name?: StringFilter<"Models"> | string
    slug?: StringFilter<"Models"> | string
    category?: EnumCategoryFilter<"Models"> | $Enums.Category
    brand_id?: StringNullableFilter<"Models"> | string | null
  }

  export type AdvertsUpsertWithWhereUniqueWithoutBrandInput = {
    where: AdvertsWhereUniqueInput
    update: XOR<AdvertsUpdateWithoutBrandInput, AdvertsUncheckedUpdateWithoutBrandInput>
    create: XOR<AdvertsCreateWithoutBrandInput, AdvertsUncheckedCreateWithoutBrandInput>
  }

  export type AdvertsUpdateWithWhereUniqueWithoutBrandInput = {
    where: AdvertsWhereUniqueInput
    data: XOR<AdvertsUpdateWithoutBrandInput, AdvertsUncheckedUpdateWithoutBrandInput>
  }

  export type AdvertsUpdateManyWithWhereWithoutBrandInput = {
    where: AdvertsScalarWhereInput
    data: XOR<AdvertsUpdateManyMutationInput, AdvertsUncheckedUpdateManyWithoutBrandInput>
  }

  export type AdvertsCreateWithoutModelInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user: UserCreateNestedOneWithoutAdvertsInput
    images?: PhotosCreateNestedManyWithoutAdvertInput
    optionals?: OptionalCreateNestedManyWithoutAdvertsInput
    brand: BrandsCreateNestedOneWithoutAdvertsInput
  }

  export type AdvertsUncheckedCreateWithoutModelInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user_id: string
    brand_id: string
    images?: PhotosUncheckedCreateNestedManyWithoutAdvertInput
    optionals?: OptionalUncheckedCreateNestedManyWithoutAdvertsInput
  }

  export type AdvertsCreateOrConnectWithoutModelInput = {
    where: AdvertsWhereUniqueInput
    create: XOR<AdvertsCreateWithoutModelInput, AdvertsUncheckedCreateWithoutModelInput>
  }

  export type AdvertsCreateManyModelInputEnvelope = {
    data: AdvertsCreateManyModelInput | AdvertsCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type BrandsCreateWithoutModelsInput = {
    id?: string
    name: string
    category: $Enums.Category
    slug: string
    adverts?: AdvertsCreateNestedManyWithoutBrandInput
  }

  export type BrandsUncheckedCreateWithoutModelsInput = {
    id?: string
    name: string
    category: $Enums.Category
    slug: string
    adverts?: AdvertsUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandsCreateOrConnectWithoutModelsInput = {
    where: BrandsWhereUniqueInput
    create: XOR<BrandsCreateWithoutModelsInput, BrandsUncheckedCreateWithoutModelsInput>
  }

  export type AdvertsUpsertWithWhereUniqueWithoutModelInput = {
    where: AdvertsWhereUniqueInput
    update: XOR<AdvertsUpdateWithoutModelInput, AdvertsUncheckedUpdateWithoutModelInput>
    create: XOR<AdvertsCreateWithoutModelInput, AdvertsUncheckedCreateWithoutModelInput>
  }

  export type AdvertsUpdateWithWhereUniqueWithoutModelInput = {
    where: AdvertsWhereUniqueInput
    data: XOR<AdvertsUpdateWithoutModelInput, AdvertsUncheckedUpdateWithoutModelInput>
  }

  export type AdvertsUpdateManyWithWhereWithoutModelInput = {
    where: AdvertsScalarWhereInput
    data: XOR<AdvertsUpdateManyMutationInput, AdvertsUncheckedUpdateManyWithoutModelInput>
  }

  export type BrandsUpsertWithoutModelsInput = {
    update: XOR<BrandsUpdateWithoutModelsInput, BrandsUncheckedUpdateWithoutModelsInput>
    create: XOR<BrandsCreateWithoutModelsInput, BrandsUncheckedCreateWithoutModelsInput>
    where?: BrandsWhereInput
  }

  export type BrandsUpdateToOneWithWhereWithoutModelsInput = {
    where?: BrandsWhereInput
    data: XOR<BrandsUpdateWithoutModelsInput, BrandsUncheckedUpdateWithoutModelsInput>
  }

  export type BrandsUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    slug?: StringFieldUpdateOperationsInput | string
    adverts?: AdvertsUpdateManyWithoutBrandNestedInput
  }

  export type BrandsUncheckedUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    slug?: StringFieldUpdateOperationsInput | string
    adverts?: AdvertsUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type AdvertsCreateWithoutOptionalsInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user: UserCreateNestedOneWithoutAdvertsInput
    images?: PhotosCreateNestedManyWithoutAdvertInput
    model: ModelsCreateNestedOneWithoutAdvertsInput
    brand: BrandsCreateNestedOneWithoutAdvertsInput
  }

  export type AdvertsUncheckedCreateWithoutOptionalsInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user_id: string
    model_id: string
    brand_id: string
    images?: PhotosUncheckedCreateNestedManyWithoutAdvertInput
  }

  export type AdvertsCreateOrConnectWithoutOptionalsInput = {
    where: AdvertsWhereUniqueInput
    create: XOR<AdvertsCreateWithoutOptionalsInput, AdvertsUncheckedCreateWithoutOptionalsInput>
  }

  export type AdvertsUpsertWithWhereUniqueWithoutOptionalsInput = {
    where: AdvertsWhereUniqueInput
    update: XOR<AdvertsUpdateWithoutOptionalsInput, AdvertsUncheckedUpdateWithoutOptionalsInput>
    create: XOR<AdvertsCreateWithoutOptionalsInput, AdvertsUncheckedCreateWithoutOptionalsInput>
  }

  export type AdvertsUpdateWithWhereUniqueWithoutOptionalsInput = {
    where: AdvertsWhereUniqueInput
    data: XOR<AdvertsUpdateWithoutOptionalsInput, AdvertsUncheckedUpdateWithoutOptionalsInput>
  }

  export type AdvertsUpdateManyWithWhereWithoutOptionalsInput = {
    where: AdvertsScalarWhereInput
    data: XOR<AdvertsUpdateManyMutationInput, AdvertsUncheckedUpdateManyWithoutOptionalsInput>
  }

  export type AdvertsCreateWithoutImagesInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user: UserCreateNestedOneWithoutAdvertsInput
    optionals?: OptionalCreateNestedManyWithoutAdvertsInput
    model: ModelsCreateNestedOneWithoutAdvertsInput
    brand: BrandsCreateNestedOneWithoutAdvertsInput
  }

  export type AdvertsUncheckedCreateWithoutImagesInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user_id: string
    model_id: string
    brand_id: string
    optionals?: OptionalUncheckedCreateNestedManyWithoutAdvertsInput
  }

  export type AdvertsCreateOrConnectWithoutImagesInput = {
    where: AdvertsWhereUniqueInput
    create: XOR<AdvertsCreateWithoutImagesInput, AdvertsUncheckedCreateWithoutImagesInput>
  }

  export type AdvertsUpsertWithoutImagesInput = {
    update: XOR<AdvertsUpdateWithoutImagesInput, AdvertsUncheckedUpdateWithoutImagesInput>
    create: XOR<AdvertsCreateWithoutImagesInput, AdvertsUncheckedCreateWithoutImagesInput>
    where?: AdvertsWhereInput
  }

  export type AdvertsUpdateToOneWithWhereWithoutImagesInput = {
    where?: AdvertsWhereInput
    data: XOR<AdvertsUpdateWithoutImagesInput, AdvertsUncheckedUpdateWithoutImagesInput>
  }

  export type AdvertsUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutAdvertsNestedInput
    optionals?: OptionalUpdateManyWithoutAdvertsNestedInput
    model?: ModelsUpdateOneRequiredWithoutAdvertsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    optionals?: OptionalUncheckedUpdateManyWithoutAdvertsNestedInput
  }

  export type AdvertsCreateManyUserInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    model_id: string
    brand_id: string
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    status: string
    subscripton_id?: string | null
    cycle: string
    stripe_product_id?: string | null
    updated_at?: Date | string
    created_ad?: Date | string
    cancel_at_period_end: boolean
    current_period_start: Date | string
    current_period_end: Date | string
  }

  export type AdvertsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    images?: PhotosUpdateManyWithoutAdvertNestedInput
    optionals?: OptionalUpdateManyWithoutAdvertsNestedInput
    model?: ModelsUpdateOneRequiredWithoutAdvertsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    images?: PhotosUncheckedUpdateManyWithoutAdvertNestedInput
    optionals?: OptionalUncheckedUpdateManyWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subscripton_id?: NullableStringFieldUpdateOperationsInput | string | null
    cycle?: StringFieldUpdateOperationsInput | string
    stripe_product_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_ad?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_at_period_end?: BoolFieldUpdateOperationsInput | boolean
    current_period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    current_period_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subscripton_id?: NullableStringFieldUpdateOperationsInput | string | null
    cycle?: StringFieldUpdateOperationsInput | string
    stripe_product_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_ad?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_at_period_end?: BoolFieldUpdateOperationsInput | boolean
    current_period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    current_period_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subscripton_id?: NullableStringFieldUpdateOperationsInput | string | null
    cycle?: StringFieldUpdateOperationsInput | string
    stripe_product_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_ad?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_at_period_end?: BoolFieldUpdateOperationsInput | boolean
    current_period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    current_period_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotosCreateManyAdvertInput = {
    id?: string
    url: string
    key: string
  }

  export type PhotosUpdateWithoutAdvertInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type PhotosUncheckedUpdateWithoutAdvertInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type PhotosUncheckedUpdateManyWithoutAdvertInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type OptionalUpdateWithoutAdvertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionalUncheckedUpdateWithoutAdvertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionalUncheckedUpdateManyWithoutAdvertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModelsCreateManyBrandsInput = {
    id?: string
    name: string
    slug: string
    category: $Enums.Category
  }

  export type AdvertsCreateManyBrandInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user_id: string
    model_id: string
  }

  export type ModelsUpdateWithoutBrandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    adverts?: AdvertsUpdateManyWithoutModelNestedInput
  }

  export type ModelsUncheckedUpdateWithoutBrandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    adverts?: AdvertsUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelsUncheckedUpdateManyWithoutBrandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
  }

  export type AdvertsUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutAdvertsNestedInput
    images?: PhotosUpdateManyWithoutAdvertNestedInput
    optionals?: OptionalUpdateManyWithoutAdvertsNestedInput
    model?: ModelsUpdateOneRequiredWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    images?: PhotosUncheckedUpdateManyWithoutAdvertNestedInput
    optionals?: OptionalUncheckedUpdateManyWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
  }

  export type AdvertsCreateManyModelInput = {
    id?: string
    type: string
    year_model: number
    color: string
    city: string
    formatted_city: string
    state: string
    formatted_state: string
    price: number
    doors: string
    mileage: number
    description?: string | null
    formatted_description?: string | null
    plate: string
    transmission: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    slug: string
    emphasis?: boolean | null
    user_id: string
    brand_id: string
  }

  export type AdvertsUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutAdvertsNestedInput
    images?: PhotosUpdateManyWithoutAdvertNestedInput
    optionals?: OptionalUpdateManyWithoutAdvertsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    images?: PhotosUncheckedUpdateManyWithoutAdvertNestedInput
    optionals?: OptionalUncheckedUpdateManyWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
  }

  export type AdvertsUpdateWithoutOptionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutAdvertsNestedInput
    images?: PhotosUpdateManyWithoutAdvertNestedInput
    model?: ModelsUpdateOneRequiredWithoutAdvertsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateWithoutOptionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    images?: PhotosUncheckedUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertsUncheckedUpdateManyWithoutOptionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    year_model?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    formatted_city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    formatted_state?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    doors?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formatted_description?: NullableStringFieldUpdateOperationsInput | string | null
    plate?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    slug?: StringFieldUpdateOperationsInput | string
    emphasis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}