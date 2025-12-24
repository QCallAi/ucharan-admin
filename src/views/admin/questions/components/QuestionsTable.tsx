import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@chakra-ui/react";
import Card from "components/card";
import AddQuestionModal from "./AddQuestionModal";
import EditQuestionModal from "./EditQuestionModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import type { Question } from "../data/types";
import { useQuestions } from "../hooks/useQuestions";

const columnHelper = createColumnHelper<Question>();

const QuestionsTable = () => {
  const {
    questions,
    isLoading,
    error,
    addQuestion,
    updateQuestion,
    deleteQuestion,
  } = useQuestions();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const handleEdit = (question: Question) => {
    setSelectedQuestion(question);
    setShowEditModal(true);
  };

  const handleDelete = (question: Question) => {
    setSelectedQuestion(question);
    setShowDeleteModal(true);
  };

  const columns = [
    columnHelper.accessor("question", {
      id: "question",
      header: () => (
        <p className="text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
          Question
        </p>
      ),
      cell: (info: any) => (
        <p className="text-sm font-medium text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("type", {
      id: "type",
      header: () => (
        <p className="text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
          Type
        </p>
      ),
      cell: (info: any) => (
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("_id", {
      id: "actions",
      header: () => (
        <p className="text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
          Actions
        </p>
      ),
      cell: (info: any) => (
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40"
            onClick={() => info.row && handleEdit(info.row.original)}
          >
            Edit
          </button>
          <button
            className="rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40"
            onClick={() => info.row && handleDelete(info.row.original)}
          >
            Delete
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: questions ?? [],
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-500"></div>
          <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400">
            Loading questions...
          </p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
            <svg
              className="h-6 w-6 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
            Error Loading Questions
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {error}
          </p>
        </div>
      );
    }

    if (questions.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-800">
            <svg
              className="h-8 w-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
            No questions yet
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Get started by adding your first question
          </p>
        </div>
      );
    }

    return (
      <div className="mt-4 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups()?.map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                {headerGroup.headers?.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer pb-3 pt-2 text-start transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <div className="flex items-center gap-2">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getIsSorted() && (
                          <span className="text-gray-400">
                            {header.column.getIsSorted() === "asc" ? "↑" : "↓"}
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table?.getRowModel().rows?.map((row) => {
              return (
                <tr
                  key={row.id}
                  className="border-b border-gray-100 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50"
                >
                  {row?.getVisibleCells()?.map((cell) => {
                    return (
                      <td key={cell.id} className="min-w-[150px] py-4 pr-4">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <div className="flex items-center justify-between py-4">
        <div>
          <h2 className="text-xl font-bold text-navy-700 dark:text-white">
            Questions
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Manage your quiz questions ({questions?.length} total)
          </p>
        </div>
        <Button
          colorScheme="blue"
          size="md"
          onClick={() => setShowAddModal(true)}
        >
          + Add Question
        </Button>
      </div>

      {renderContent()}

      <AddQuestionModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={addQuestion}
      />
      <EditQuestionModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={updateQuestion}
        question={selectedQuestion}
      />
      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          if (selectedQuestion) {
            deleteQuestion(selectedQuestion?._id);
          }
          setShowDeleteModal(false);
        }}
        isLoading={isLoading}
      />
    </Card>
  );
};

export default QuestionsTable;
