import{r as x,j as e}from"./iframe-BVdPrJ3b.js";import{F as t}from"./FileDropZone-C6xGNTgQ.js";import{S as d}from"./Section-B0Q_DjwJ.js";import{F as u}from"./FileCardList-DCN1bVu_.js";import{F}from"./FileCard-iHH1ApTp.js";import{u as S,F as C,t as D}from"./Form-CP4W0g6V.js";import{S as y}from"./ResetButton-BMVB6F8i.js";import{B as f}from"./Button-DWZoHS5b.js";import{A as b}from"./ActionGroup-x2U4gVAf.js";import{Z as j,_ as B}from"./IconWarning-YADbbYCH.js";import{H as g}from"./Heading-CFOSEH3z.js";import{F as h}from"./FileField-BGFV7Ep2.js";import{T as O}from"./Text-nQWL8z2r.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CdYyDGay.js";import"./clsx-B-dksMZM.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./index-BWMeLKrj.js";import"./useFieldComponent-Pua8aj4t.js";import"./utils-BEq1Wr11.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CmXVeCCc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CZZK6Myr.js";import"./useFocus-DKH0A8r5.js";import"./useCollator-CjJjrWZi.js";import"./context-D026yTy_.js";import"./useLocalizedStringFormatter-CWJICem7.js";import"./Button-BCUp5wJP.js";import"./ProgressBar-D7sWQ_td.js";import"./Label-kfmO3nvk.js";import"./Hidden-Dqh1ls-B.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DUwPxRbX.js";import"./useFocusRing-D6WsekYV.js";import"./useFocusable-CP0kX89o.js";import"./VisuallyHidden-BtVtJU_V.js";import"./ContextMenuSection-97x_J9aj.js";import"./Action-D5COu0gZ.js";import"./context-CCTeyNcb.js";import"./useStatic-BX7NV0z1.js";import"./browser-DSBfFWZr.js";import"./getActionGroupSlot-l8kcu2OD.js";import"./dynamic-VccpDVll.js";import"./Dialog-BIQQDMqR.js";import"./RSPContexts-Bdb5uPWt.js";import"./OverlayArrow-DJuQPxkq.js";import"./useControlledState-CgIeep-j.js";import"./Collection-BL4wwMNo.js";import"./CollectionBuilder-CV7Ejkkp.js";import"./SelectionIndicator-BRRaId4S.js";import"./Separator-oDuFt3L8.js";import"./SelectionManager-C_oDRx_o.js";import"./useEvent-DCTAoM_e.js";import"./FocusScope-Bh-KjmdJ.js";import"./ColumnLayout-D3kFN4Gg.js";import"./Avatar-BwdZlrCf.js";import"./AlertIcon-BrrSUnxf.js";import"./Image-sdgtEqvY.js";import"./Link-BxsHgSUR.js";import"./OptionsButton-CP4MjkVz.js";import"./ButtonView-CuoPDwV8.js";import"./ContextMenuTriggerView-ORpSB-ZX.js";import"./ContextMenuTrigger-CKq-K9ZB.js";import"./OverlayTrigger-BdaWs8nX.js";import"./OverlayContextProvider-D_N4RW7r.js";import"./FieldError-BeQ9X37c.js";import"./FieldError-BhKmMJaW.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Dvlzlj1T.js";import"./LoadingSpinner-DBvrX9Qx.js";import"./remote-CTgJkn4z.js";import"./Heading-BpzKqMX-.js";import"./useFormValidation-BHFBjW_A.js";import"./Input-Du7-TamR.js";import"./EmulatedBoldText-BVln2yP5.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
