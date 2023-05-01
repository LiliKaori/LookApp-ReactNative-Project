import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import SegmentedPicker from 'react-native-segmented-picker'

import {Box, Text, Title, Spacer, Input, Touchable} from '..'

export default function PaymentForm({onChange = credCardData => {}}) {
  const pickerRef = useRef(null)
  const [data, setData] = useState({
    holderName: '',
    number: '',
    validDate: '',
    cvv: '',
  })

  useEffect(() => {
    onChange(data)
  }, [data])
  return (
    <>
      <SegmentedPicker
        ref={pickerRef}
        onConfirm={data =>
          setData({...data, validDate: `${data.month}/${data.year}`})
        }
        options={[
          {
            key: 'month',
            items: [
              {label: '01', value: '01'},
              {label: '02', value: '02'},
              {label: '03', value: '03'},
              {label: '04', value: '04'},
              {label: '05', value: '05'},
              {label: '06', value: '06'},
              {label: '07', value: '07'},
              {label: '08', value: '08'},
              {label: '09', value: '09'},
              {label: '10', value: '10'},
              {label: '11', value: '11'},
              {label: '12', value: '12'},
            ],
          },
          {
            key: 'year',
            items: [
              {label: '2023', value: '2023'},
              {label: '2024', value: '2024'},
              {label: '2025', value: '2025'},
              {label: '2026', value: '2026'},
              {label: '2027', value: '2027'},
              {label: '2028', value: '2028'},
              {label: '2029', value: '2029'},
              {label: '2030', value: '2030'},
              {label: '2031', value: '2031'},
              {label: '2032', value: '2032'},
            ],
          },
        ]}
      />
      <Box>
        <Title variant="small"> Select and enter your payment details</Title>
        <Spacer />
        <Text>By continuing you agree to our Terms</Text>
        <Spacer size="20px" />
        <Input
          placeholder="Name"
          value={data.holder_name}
          onChangeText={holderName => setData({...data, holderName})}
        />
        <Spacer />
        <Input
          placeholder="Credit Card Number"
          value={data.number}
          onChangeText={number => setData({...data, number})}
        />
        <Spacer />
        <Touchable width="100%" onPress={() => pickerRef.current.show()}>
          <Input pointerEvents="none" editable={false} placeholder="09/2025" />
        </Touchable>
        <Spacer />
        <Box row>
          <Box spacing="0px 10px 0 0">
            <Input
              placeholder="CVV"
              value={data.cvv}
              onChangeText={cvv => setData({...data, cvv})}
            />
          </Box>
          <Spacer />

          <Text variant="small">
            3 or 4 digits usually found on the signature strip
          </Text>
        </Box>
      </Box>
    </>
  )
}

PaymentForm.propTypes = {
  onChange: PropTypes.func,
}
