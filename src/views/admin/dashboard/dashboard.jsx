// ** React Imports
import React, { Fragment, useState, forwardRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Container, Col, Button, Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { Delete } from 'react-feather'
import toast from 'react-hot-toast'

import AddWidget from './addWdiget'
import CloudRisk from './cloud-risk-chart'
import CloudAccount from './cloud-account-chart'
import NoGraph from '../../../assets/images/dashboard/no-graph.png'

// Utility-Service
import { getToken } from '../../../utility/AuthService'

import { setFreshList, selectFreshData, setCategoryList, setWidgetList, selectWidgetList, selectCategoryList, } from '../../../redux/slices/cloudSlice'
import { widgetListService, widgetDelete } from '../../../services/widgetService'
const Dashboard = () => {
  const dispatch = useDispatch()
  const token = getToken()
  const [isLoading, setLoading] = useState(false)
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  const [deleteId, setDeleteId] = useState({})
  const widgetList = useSelector(selectCategoryList)
  const checkFreshData = useSelector(selectFreshData)
  console.log('azad', widgetList)

  const fetchData = async () => {
    const result = await widgetListService({ token });
    if (result) {
      setLoading(false)
      dispatch(setCategoryList(result?.data))
      dispatch(setFreshList(false))
    } else {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (checkFreshData === true) {
      fetchData()
    }

  }, [checkFreshData])

  useEffect(() => {
    setLoading(false)
    fetchData()
    const timeoutId = setTimeout(() => 3000)
    return function cleanup() {
      clearTimeout(timeoutId)
    }
  }, [])

  const displayDataWithCheck = (item) => {
    console.log(item)
    if (item?.type === 'account') {
      return (<CloudAccount />)
    } else if (item?.type === 'risk') {
      return (<CloudRisk />)
    } else {
      return (
        <>
          <div className="text-center">
            <p className='mb-0'><img height='40' src={NoGraph} alt="" /></p>
          </div>
        </>
      )
    }
  }

  const handleDeleteModal = (item) => {
    setDeleteId(item?.id)
    setIsDeleteModal(true)
  }

  const handleCancel = () => {
    setIsDeleteModal(false)
    setDeleteId(0)
  }


  const handleDeleteWidget = async () => {
    if (deleteId === 1 || deleteId === 2) {
      toast.success("You can't delete this widget")
      setIsDeleteModal(false)
    } else {
      const result = await widgetDelete({
        id: deleteId,
        token
      })
      if (result?.data) {
        toast.success("Widget Deleted Successfully")
        dispatch(setFreshList(true))
        setIsDeleteModal(false)
        setDeleteId(0)
        fetchData()
      }
    }
  }

  return (
    <>
      <Row className='mb-2'>
        <Col>
          <h5>CSPM Executive Dashboard</h5>
        </Col>
        <Col>
          <div className="float-end">
            <AddWidget />
          </div>
        </Col>
      </Row>

      <Row>
        {widgetList?.length > 0 ? widgetList.map((item, index) => (
          <Col lg='4' md='4' sm='6' key={item?.id}>
            <Card>
              <CardHeader className='p-1'>
                <CardTitle style={{ width: '100%' }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="div">
                      <strong><h6 className='dark mb-0 myCapitalized'>{item?.name ? item?.name : 'NA'}</h6></strong>
                    </div>
                    <div className="div">
                      {/* onClick={() => handleDeleteWidget(item)} */}
                      <Delete className='cursor-pointer' size={15} onClick={() => handleDeleteModal(item)} />
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardBody style={{ height: '' }}>
                {displayDataWithCheck(item)}
              </CardBody>
            </Card>
          </Col>
        )) : <p>No Widget</p>}
      </Row>

      <Modal isOpen={isDeleteModal} toggle={() => setIsDeleteModal(!isDeleteModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setIsDeleteModal(!isDeleteModal)}>Delete Widget</ModalHeader>
        <ModalBody>
          <h5>Are you sure, you want to delete this?</h5>
        </ModalBody>
        <ModalFooter>
          <Button className='ms-2' color='primary' onClick={handleCancel}>
            Cancel
          </Button>
          <Button color='danger' onClick={() => handleDeleteWidget(!isDeleteModal)}>
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Dashboard
