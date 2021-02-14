import React, { useState, useEffect, useRef, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import Cookies from 'js-cookie'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import RowProfileEdit from '../../components/RowProfileEdit'
import Button from '../../components/Button'
import UserApi from '../../api/user'

const ProfileEdit = () => {
  const id = Cookies.get('userId')
  const global = useContext(GlobalContext)
  const [user, setUser] = useState({})

  const fname = useRef(null)
  const lname = useRef(null)
  const phone = useRef(null)
  const city = useRef(null)
  const country = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('first_name', fname.current.value)
    formData.append('last_name', lname.current.value)
    formData.append('phone', phone.current.value)
    formData.append('city', city.current.value)
    formData.append('country', country.current.value)

    UserApi.updateProfile(formData)
      .then((res) => {
        global.setAlert({ type: 'success', message: res.data.message })
        global.setRedirect('/profile')
      })
      .catch((err) =>
        global.setAlert({
          type: 'success',
          message: err.response.data.message,
        })
      )
  }
  const getProfileData = () => {
    UserApi.findUserById(id)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        global.setAlert(err.response.data.message)
      })
  }
  useEffect(() => {
    getProfileData()
  }, [])
  useEffect(() => {
    return global.setRedirect(null)
  }, [global.redirect])

  return (
    <>
      {/* redirect */}
      {global.redirect && <Redirect to={global.redirect} />}

      <Section className='bg-light d-flex align-items-center' align='center'>
        <PageTitle title='Edit Profile' />

        <div className='col-lg-9'>
          <div className='block radius10 p-3'>
            <table className='table table-borderless'>
              <tbody>
                <RowProfileEdit label='ID' value={user._id} disabled={true} />
                <RowProfileEdit
                  label='phone'
                  value={user.phone}
                  ref={phone}
                  disabled={true}
                />
                <RowProfileEdit
                  label='first name'
                  value={user.first_name}
                  ref={fname}
                />
                <RowProfileEdit
                  label='last name'
                  value={user.last_name}
                  ref={lname}
                />
                <RowProfileEdit label='city' value={user.city} ref={city} />
                <RowProfileEdit
                  label='country'
                  value={user.country}
                  ref={country}
                />
              </tbody>
            </table>
            <Button
              className='btn float-end mt-30 border-gray action-2'
              link='# '
              text='Update'
              type='button'
              event={handleSubmit}
            />
          </div>
        </div>
      </Section>
    </>
  )
}

export default ProfileEdit