# Generic Template Website

Website - https://generic-portfolio-nu.vercel.app/
Storybook - https://generic-portfolio-storybook.vercel.app/

This is a joke portfolio website built with the possibility of using it as a template for other projects. It was also a way to experience a formalised standard of web development, where pieces of the website are built in isolation and then combined together to form the final product.

## Tech Stack
- React
- Typescript
- Next.js
- Storybook
- Tailwind CSS
- React testing library
- Blueprint VS Code Extension

- Checked out [Github Projects](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) to manage the project (not impressed, use Trello/Notion instead)

## Installation
```
git clone git@github.com:puyanwei/generic-portfolio.git
cd generic-portfolio
yarn install
yarn dev
```

## Process

The idea of doing this project was to build up my library of components using [Storybook](https://storybook.js.org/) in combination of testing it using the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

Since all the component structures are the same, I used [Blueprint](https://marketplace.visualstudio.com/items?itemName=teamchilla.blueprint) to create my files quickly. This VS code extension allows you to setup a template of files and automatically names them for you when you create them. I created a template setup for my components here - https://github.com/puyanwei/blueprint-templates

![image](https://user-images.githubusercontent.com/14803518/188266184-d588a9de-2ca3-4681-affa-0eadecf606b6.png)

Each component folder contains the React file implementation, a Story which displays the component in Storybook, a test file with default tests, and a mock props file where you mock the data.

![image](https://user-images.githubusercontent.com/14803518/188266222-f212664d-c1eb-4d2e-8f88-370c16ca925a.png)

The test file will always contain these three test by default to give me the confidence that it works. 

All components will optionally have these 3 props; 
1. `testId` for targeting the component when testing 
2. `className` for optionally overriding styles from the parent level
3. `children` to allow the components to wrap other components which helps stop prop drilling and allows for other compositional code structures

With Storybook we split up the components into smallest to larges components. Normally its using atoms/molecules/organisms etc. But I like to get creative so I did my own version. Had to number the folders so that I could force the ordering of them, but this gave me a bit of a chuckle everytime I looked at them...

![image](https://user-images.githubusercontent.com/14803518/188266029-436364b7-5fcc-45b5-b0f6-eea3cfa73fb7.png)

Storybook is great as it allows you to look at the component your working on in isolation. A down side to this is the time sink that it adds to setting it all up. It definately is more beneficial for much larger websites!

As we go up to "bigger" components (e.g `Universe`), these components tend to be made up of the smaller components created below. They are mostly wrappers and their job is to layout the smaller components correctly and consider the responsiveness.

![image](https://user-images.githubusercontent.com/14803518/188265424-e7ff7a03-db3e-4474-99f2-fae0ae25df2b.png)

Building out the website this way meant that the final page wasn't even coded until the last 2 sessions (this took me about 10 sessions)! The implementation as like before is to just jigsaw them together, and what is nice is that even non technical people should be able to understand this code;

![image](https://user-images.githubusercontent.com/14803518/188265671-1a912c60-b49e-4eed-8114-c079eda56f09.png)

## 5 things I learned about coding my generic portfolio page

1. Storybook has very unconventional syntax on their docs. I modified mine to make it more readable but it goes against their recommendation. I did use Storybook before and remember the code was quite simple, but now things have changed...
2. Next.js images are horrible to deal with. As great as Next.js is, I believe them choosing to create their own way of implementing images was a mistake. This is because they do some funky stuff with the styling of these images, where they add an extra span and relatively position it automatically. This means that when you style the image they act unexpectidly.
3. My solution of updating to the newest [expeimental] version where they don't do that with images fixed it, but because its so new it broke all my tests related to images as `react testing libarary` didn't recognise it. So it sucks to have to choose from these two bad options...
4. Vercel is amazing at deployment! So easy and quick.
5. But not with Storybook... so be warned. Not quite sure how to deploy two versions on the same repo? I deployed the website, then disconnected that deployment and then deployed storybook in another Vercel project.

## Is it all worth it?

The most common coding answer is... it depends.

I think if there is some foresight into how big your website is going to be, and you believe there will be some complexity in it then this setup is worth it. You get great visibility of your components, and with the graphic designer's collaberation you can create a great design system. It's also a great tool to show off to clients, and its isolated structure gives developers confidence that things are working as it should.

The flip side is that there is the danger of over engineering. With many unknowns in certain projects there is the time sink into setting it up and getting it going. But in theory, the slow setup should  catch up by catching bugs and not deploying them live over time.

It has been an interesting project and I'm interested in experimenting. The fact that Typescript is becoming more of a common thing means that there seems to be less of a need for tests. I will strip this out into another repo as a template for sure and see how things go.

All my links lead to...

![image](https://user-images.githubusercontent.com/14803518/188266930-bfa85629-e774-4b27-82d3-e4c778729ba8.png)
