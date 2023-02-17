import React, { useEffect, useState } from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import Voice, { SpeechResultsEvent } from '@react-native-voice/voice'
import styled, { useTheme } from 'styled-components/native'

import { DisctaphoneIcon, SearchIcon } from 'src/icons'

interface Props {
  setFiltersValues: (val: string) => void
  inputValue: string
}

export const InputWithVoiceRecorder = ({
  setFiltersValues,
  inputValue,
}: Props) => {
  const [isRecord, setIsRecord] = useState<boolean>(false)
  const buttonLabel = isRecord ? 'Stop' : 'Start'
  const { extra_blue } = useTheme()

  const onSpeechResults = (event: SpeechResultsEvent) => {
    if (event.value) {
      setFiltersValues(event.value[0])
    }
  }

  const onRecordVoice = async () => {
    if (isRecord) {
      await Voice.stop()
    } else {
      await Voice.start('en-US')
    }
    setIsRecord(!isRecord)
  }

  const clear = async () => {
    await Voice.destroy()
    Voice.removeAllListeners()
  }

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults

    return () => {
      clear()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <WrapInput>
        <SearchWrap>
          <SearchIcon />
          <InputText
            onChangeText={setFiltersValues}
            value={inputValue}
            placeholder="Search"
          />
        </SearchWrap>
        {!isRecord ? (
          <WrapDictaphone onPress={onRecordVoice}>
            <DisctaphoneIcon />
          </WrapDictaphone>
        ) : (
          <TouchableOpacity onPress={onRecordVoice}>
            <ActivityIndicator size="small" color={extra_blue} />
          </TouchableOpacity>
        )}
      </WrapInput>

      <WrapperHelp>
        <TextHelp onPress={onRecordVoice}>{buttonLabel}</TextHelp>
      </WrapperHelp>
    </Container>
  )
}

const InputText = styled.TextInput`
  flex: 1;
  margin-left: 5px;
  padding: 8px;
`

const Container = styled.View`
  padding: 0 16px 16px;
`

const WrapInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(118, 118, 128, 0.12);
  border-radius: 10px;
  padding: 0 8px;
`

const WrapDictaphone = styled.TouchableOpacity``

const SearchWrap = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`

const WrapperHelp = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const TextHelp = styled.Text``
