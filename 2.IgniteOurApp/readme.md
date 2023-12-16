 #### What does it mean, "Igniting our App"?

Igniting our app mean to optimise our code that we can push to production.

The code which we have written in previous episode is not ready to push to the production.

Because, it has these unnecessary things.

Comments
extra spaces
console.log statements

We want to minify our code, bundle our code, if our project many files, that time we want to bundle all files, compress those files.

Suppose, my app has the lot of images, that time I want to optimise my images.

To make your app ready to go into production, you need to do a lot of process in your local system, or a lot of process before you push the code to the production.

You basically need to do these things.

<ol>
<li>Bundling</li>
<li>Chunking</li>
<li>Code splitting</li>
<li>Image optimisation</li>
<li>Remove the comments</li>
<li>Minify the code</li>
<li>Compress files</li>
</ol>

#### What is npm?

Node package manager is not a full form of npm.

npm doesn't have any full form.

npm is a package manager.

npm is a standard repository for all the packages.

Any package we need to include in our project, we can use npm.

All the libraries, utilities that we need in our project come from npm.

When you initialise your app using npx create-react-app command, that time you don't need to configure npm in your project.

#### How you can configure npm in your project?

I can configure npm using npm init -y command in the terminal of project root directory.

```
npm init -y
```

After completing all steps of npm init -y, we get a file named "package.json" inside our root directory.

#### What does package.json file means?

It is basically a configuration of our npm.

npm manages packages that we install in our project.

And sometime, these packages are also known as dependency.

npm manages the version of all the packages that we install in our project.

npm will take care of those package version in package.json file.

#### What is the most important package in our project?

#### Bundler

When you have normal HTML CSS JavaScript file, our whole code needs to be bundled together, to be minified, to be cached, to be compressed, to be cleaned before it can be sent to the production.  

So, a bundler lets you do all the above things.

Some popular bundlers are

<ol>
<li>Webpack</li>
<li>Veet</li>
<li>Parcel</li>
</ol>

#### What is the job of a bundler?

Bundler basically bundles or packages our app, so that it can be shipped to the production.

How you can install parcel in your project?

By running this command 

```
npm install -D parcel
```

There are two types of dependencies.
1. Dev dependency
2. Normal dependency

Dev dependency is the dependency that we require only in the development phase.

Normal dependency is the dependency that normally used in production also.

Bundling, minification, chunking done in the development phase, so we install Parcel as dev dependency.

#### When you run npm install -D parcel, that time what other files get inserted to your project root directory?

These two things get inserted to our project root directory.

package.lock.json

node_modules folder

What does package.lock.json file means? Does it same file like package.json?

What is the difference between package.lock.json and package.json file?

Package.json is a configuration for npm. It keeps track of what version of that package is installed.

package.lock.json keeps track of the exact version that is being installed.

What does the integrity means which you can see inside package.lock.json file?

integrity is basically a sha512 hash.

Sometimes you heard people saying like, this thing is working in my local system, but not working in production. The project got break in production. 

To solve that issue, package.lock.json keeps track of each package exact version of all the dependency installed in our project.


node_modules folder contains all the code that we fetch from npm.

I just installed parcel. Then why there are folder or code of other packages in node_modules?

Those other package folders or code came in node_modules because our project needs parcel as dependency.

Now, parcel as a project has its own dependency.

And those dependencies can have their own dependencies.

This is known as transitive dependency.


#### what is the "^" (caret) sign means in "parcel": "^2.10.3"?

^ caret sign refers to the small version upgrade.

Current version of parcel is 2.10.3. 

Suppose, in future, there will be a minor version upgrade of parcel come 2.10.11 or 2.10.11, that time parcel will automatically get updated.

#### what is the "~" (tilde) sign means in "parcel": "~2.10.3"?

~ means major version upgrade.

Always put caret sign (^) before version name of any package, because it is safe to install minor version upgrade.

Don't put tilde sign (~) before version number of any package.
It represents major version upgrade, and it is unsafe to directly add major version upgrade.
Because, it can break a lot of the things in the project.

#### Should i put node_modules folder to production or at github?

No, i don't need to put node_modules folder to production or at github.

#### Do i need to put package.json and package.lock.json file to production or github?

Yes, those both files are very important because package.json file track the version of packages installed in our project.

and package.lock.json keep tracks of exact version of package installed in our project.

#### Why you don't need to push node_modules folder to github?

Because i can regenerate node_modules folder as i have already pushed package.json and package.lock.json file to github.