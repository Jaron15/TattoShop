import React from 'react'

const artistList = [
   { 
     name: 'steve',
     fullName: 'Steve Somn',
     shortDescription: 'This is steves description.',
     description: 'This is steves description. He specializes in something I dont know what.',
     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
     workPhotos: [

     ]
    },
   { 
     name: 'bob',
     fullName: 'Bob Whtver',
     description: 'This is stevves description. He specializes in something I dont know what.',
     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
     workPhotos: [

     ]
    },
   { 
     name: 'craig',
     fullName: 'Craig yup',
     description: 'This is stevves description. He specializes in something I dont know what.',
     image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
     workPhotos: [

     ]
    },
   { 
     name: 'jim',
     fullName: 'Jim Bob',
     description: 'This is stevves description. He specializes in something I dont know what.',
     image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
     workPhotos: [

     ]
    },
]


function Artist(props) { 
 const selectedArtist = artistList.find((artist) => artist.name === props.name);
 
  return (
    <div className='flex flex-col items-center justify-center '>
        <img class="inline-block h-48 w-48 rounded-full ring-2 ring-white" src={selectedArtist.image} alt="" />
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-3xl mt-2 text-center text-white'>
                {selectedArtist.fullName}
            </h1>
            <p className='mx-8 text-center text-white'>
              {props.shortDescription ? selectedArtist.shortDescription : selectedArtist.description}
            </p>
        </div>
    </div>
  )
}

export default Artist