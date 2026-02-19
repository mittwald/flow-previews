import{r as x,j as e}from"./iframe-C9fwoqx7.js";import{F as t}from"./FileDropZone-3jfkDX2i.js";import{S as d}from"./Section-kgMMKJSe.js";import{F as u}from"./FileCardList-DFprilqS.js";import{F}from"./FileCard-C3hMOOtc.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-5VnYk-XP.js";import{B as f}from"./Button-C7pOzOnK.js";import{A as b}from"./ActionGroup-JVxcUGRV.js";import{a0 as j,a1 as B}from"./IconWarning-slnz76yl.js";import{H as g}from"./Heading-XseMYyRS.js";import{F as h}from"./FileField-Bs6agZCY.js";import{T as O}from"./Text-D7jvp7G5.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Ce9vkne1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaaAZbNJ.js";import"./index-DH86ko7l.js";import"./index-CbFgIt9G.js";import"./useFieldComponent-HwWxBPXP.js";import"./utils-Cx2L-iDs.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-xqSfQxLT.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BNdvaiV7.js";import"./useFocus-CMKZ5vES.js";import"./useCollator-CTWpXcx6.js";import"./context-C2ecxi5G.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./useFocusRing-s7_3pCWo.js";import"./Button-DDn45mdd.js";import"./ProgressBar-Dby2U7oR.js";import"./Label-CbDOwA25.js";import"./Hidden-CVIEiZ4o.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-tgKXO9PL.js";import"./useFocusable-CQiYog1P.js";import"./VisuallyHidden-1IKUNS-e.js";import"./ContextMenuSection-7efUiUyi.js";import"./ActionBatch-CR9CogXJ.js";import"./useOverlayController-CqYUXVnh.js";import"./useStatic-9-ugXzKa.js";import"./browser-B4JTTu9h.js";import"./getActionGroupSlot-CBhaOaw2.js";import"./dynamic-CY0EsCod.js";import"./Dialog-yhzZwH_k.js";import"./RSPContexts-mF4XBTs4.js";import"./OverlayArrow-DDmkn5_8.js";import"./useControlledState-BJuMvqvK.js";import"./Collection-C29JJn0j.js";import"./CollectionBuilder-ta_UQL8r.js";import"./SelectionIndicator-nEc_xgxs.js";import"./Separator-ykHU2h0d.js";import"./SelectionManager-D2Ty-b9W.js";import"./useEvent-bSDrPC6p.js";import"./FocusScope-Ci8EWXmX.js";import"./ColumnLayout-DcmSq7EE.js";import"./Avatar-BBvzb8nH.js";import"./AlertIcon-Bz6wfr4x.js";import"./Image-BomHH_vX.js";import"./Link-D5CGaOxT.js";import"./OptionsButton-CIQ3vRae.js";import"./ButtonView-D2KaEV6n.js";import"./ContextMenuTriggerView-E2R76kEp.js";import"./ContextMenuTrigger-pcUqU5Yg.js";import"./OverlayTrigger-BodK83ZQ.js";import"./OverlayContextProvider-DAx33Jid.js";import"./FieldError-v5ZAFD64.js";import"./FieldError-CEVb6xPQ.js";import"./AlertText-GfFdH1ck.js";import"./ActionGroupView-VlMeYrd_.js";import"./Content-CnNXJUgm.js";import"./Modal-C8ANx43-.js";import"./Overlay-30FGwbPI.js";import"./LoadingSpinner-BWPVzhoG.js";import"./Flex-kDlMb8kM.js";import"./useRef-DDCCbzfz.js";import"./remote-B-ZPT6P_.js";import"./Heading-eUAAoI_I.js";import"./useFormValidation-B19EocOE.js";import"./Input-DtMnFP30.js";import"./EmulatedBoldText-CtQh5tnB.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <SubmitButton>Upload</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
