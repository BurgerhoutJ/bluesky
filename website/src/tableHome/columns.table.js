import React from "react";

export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <label className="flex gap-x-2 items-baseline">
      <select
        className="selectFilter mt-1 block rounded-md border-gray-300  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  dark:bg-zinc-800 dark:border-gray-700"
        aria-label="Select category"
        name={id}
        id={id}
        value={filterValue || "All"}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">⚡️</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function handleClick (e){
  // setOpen(true);
  
  const url = `https://bsky.app/profile/${e.currentTarget.value}`;
  navigator.clipboard.writeText(url);
};

export const columns = [
  {
    Header: "",
    accessor: "category",
    className: "commands-data-table col-category",
    Filter: SelectColumnFilter,
    filter: (rows, id, filterValue) => {
      return rows.filter((row) => {
        const rowValue = row.values[id];
        if (filterValue === "") {
          return true;
        } else {
          return filterValue === rowValue;
        }
      });
    },
    Cell: ({ cell: { value }, row: { original } }) => (
      <img alt="{value}" className={`cat-${original.type}`} />
    ),
  },
  {
    Header: "Name",
    accessor: "title",
    className: "commands-data-table whitespace-nowrap left col-title",
    Cell: ({ cell: { value }, row: { original } }) => (
      <a href={`https://bsky.app/profile/${original.did}`} target="blank" rel="noreferrer noopener">
        {value}
      </a>
    ),
  },
  {
    Header: "Bluesky",
    accessor: "bluesky",
    className: "commands-data-table whitespace-nowrap left col-bluesky",
    Cell: ({ cell: { value }, row: { original } }) => (
      <>
        <a
          href={`https://bsky.app/profile/${original.did}`}
          target="blank"
          rel="noreferrer noopener"
        >
          <b>{value}</b>
        </a>
        <button className="copyButton" type="button" onClick={handleClick} value={original.did} ><img alt={value} className={`copy`} /></button>
      </>
    ),
  },
  {
    Header: "Twitter",
    accessor: "twitter",
    className: "commands-data-table left col-twitter",
    Cell: ({ cell: { value }, row: { original } }) => (
      <a href={`https://x.com/${value}`} target="blank" rel="noreferrer noopener">
        {value}
      </a>
    ),
  },
];
