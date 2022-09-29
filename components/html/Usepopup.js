import React, { useState } from 'react'

const Usepopup = () => {
  console.log('called')
  const [data, setData] = useState()
  const [open, setOpen] = useState(false)

  const fetchData = (id) => {
    const found = DATA.find((item) => item.titre == id)

    setData(found.body)
    setOpen(true)
  }

  const closePoup = () => {
    setOpen(false)
  }

  return [data, open, closePoup, fetchData]
}

export default Usepopup
