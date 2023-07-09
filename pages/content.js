import React, { useEffect, useState } from 'react';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import data from '../utils/riddles.json'

const RiddlesCard = () => {
  const [riddlesData] = useState(data);
  const [visibleAnswers, setVisibleAnswers] = useState([]);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of riddles to show per page

  useEffect(() => {
    // Initialize visibility state for each riddle
    setVisibleAnswers(new Array(riddlesData.length).fill(false));
  }, [riddlesData]);

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers((prevState) => {
      const updatedVisibility = [...prevState];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  const handleLike = (index) => {
    setLikes((prevState) => {
      const updatedLikes = [...prevState];
      updatedLikes[index] = updatedLikes[index] ? updatedLikes[index] + 1 : 1;
      return updatedLikes;
    });
  };

  const handleDislike = (index) => {
    setDislikes((prevState) => {
      const updatedDislikes = [...prevState];
      updatedDislikes[index] = updatedDislikes[index]
        ? updatedDislikes[index] + 1
        : 1;
      return updatedDislikes;
    });
  };

  // Calculate pagination values
  const totalItems = riddlesData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleRiddles = riddlesData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const Pagination =()=> {
    return (
      <div className="flex items-center justify-between ">
        <div>
          <button
          className={`px-3 mr-2 py-1 rounded-md text-sm font-medium ${
            currentPage > 1 ? 'text-gray-900 bg-gray-100 hover:bg-gray-200"' : 'bg-gray-100 cursor-not-allowed'
          }`}
            // className="px-3 py-1 rounded-md text-sm font-medium text-gray-400 cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        </div>
        <div className="text-gray-600">
        <button className='px-3 py-1 bg-gray-100 rounded-md text-sm font-medium'> Page {currentPage} of {totalPages}</button>
        </div>
        <div>
          <button
           className="px-3  ml-3 py-1 rounded-md text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200"
           disabled={currentPage === totalPages}
           onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid lg:grid-cols-12 sm:grid-cols-1 lg:gap-4 sm: m-3 mt-4 mb-4">
        <div className="lg:col-start-2 lg:col-span-7">
      
          {Array.isArray(visibleRiddles) &&
            visibleRiddles.map((item, index) => {
              const dataIndex = startIndex + index;
              const isAnswerVisible = visibleAnswers[dataIndex];
              const likeCount = likes[dataIndex] || 0;
              const dislikeCount = dislikes[dataIndex] || 0;
              return (
                <Card
                  className=" mt-8 transition-opacity ease-in duration-1000 opacity-100"
                  key={index}
                >
                  <CardHeader className='w-full'>
                    <CardTitle>
                    <span
                        style={{
                          color: '#9376E0',
                          paddingRight: 10
                        }}
                      >
                        Riddle: 
                      </span>
                      <span style={{ color: '#4d4d4d', fontSize: 18 }}>
                        {item.riddle}
                      </span>{' '}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isAnswerVisible && (
                      <p className="bg-cyan-100 p-3 transition-opacity ease-in duration-9000 opacity-100">
                        {item.answer}
                      </p>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      className='btnBg'
                      onClick={() => toggleAnswerVisibility(dataIndex)}
                    >
                      {isAnswerVisible ? 'Hide the answer' : 'Show the answer'}
                    </Button>
                    {/* <div>
                      <Button onClick={() => handleLike(dataIndex)}>
                        Like ({likeCount})
                      </Button>
                      <Button onClick={() => handleDislike(dataIndex)}>
                        Dislike ({dislikeCount})
                      </Button>
                    </div> */}
                  </CardFooter>
                </Card>
              );
            })}
              <div className='float-right mb-3 mt-3'>
         <Pagination/>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default RiddlesCard;
