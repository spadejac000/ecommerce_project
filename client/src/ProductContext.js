import React, {useState, createContext} from 'react';
import {v4 as uuid} from 'uuid';

export const ProductContext = createContext();

export const ProductProvider = (props) => {

  const [products, setProducts] = useState(
    [
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Stove",
        image: "https://na.electroluxmedia.com/assets/medias/images/289/FGGF3047TF-34VL_728_GL-LG-34L.png",
        price: 1399.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "appliance"
      },
      {
        name: "Dishwasher",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsSAdDtVGFaP-mUKxqGk0MEZW2LV_ggtCe9g&usqp=CAU",
        price: 999.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Refridgerator",
        image: "https://images.homedepot-static.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg",
        price: 1899.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "The Hobbit",
        image: "https://www.pngkey.com/png/detail/916-9168491_the-hobbit-hobbit-book.png",
        price: 19.99,
        id: uuid(),
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
        category: "book"
      },
      {
        name: "Basketball",
        image: "https://cdn.shopify.com/s/files/1/0712/4751/products/BX700-00_SIDE.png_SML_2000x.png?v=1574402376",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "sports equipment"
      },
      {
        name: "Saxophone",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OoNVTGlTL._AC_SX425_.jpg",
        price: 1339.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.',
        category: "Musical Instruments"
      },
      {
        name: "Headphones",
        image: "https://s7d2.scene7.com/is/image/bose/black-2?wid=700&hei=900",
        price: 29.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      },
      {
        name: "Camera",
        image: "https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg",
        price: 729.99,
        id: uuid(),
        category: "electronics"
      },
      {
        name: "Luxury DVD Player",
        image: "https://i5.walmartimages.com/asr/9f2eaa7d-5fe0-45b9-9bf7-77bc214db1e0_1.5e5989d4d5f9eb6a1c38e0c92aa6f50a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        price: 329.99,
        id: uuid(),
        description: 'Cras mauris tellus, hendrerit eget velit vel, sodales imperdiet mauris. Quisque eget tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lorem enim, non ultrices lectus venenatis eget. Praesent nibh mauris, sagittis at diam ut, feugiat pulvinar urna. Etiam a tortor nec nisl fermentum pharetra. Proin rhoncus non risus eget vulputate. Cras pharetra, dolor sed bibendum imperdiet, mi metus imperdiet ante, a varius nibh nisl nec turpis.'
      }
    ]
  )

  
  

  return(
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}