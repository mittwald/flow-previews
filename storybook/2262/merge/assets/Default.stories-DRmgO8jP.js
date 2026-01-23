import{r as x,j as e}from"./iframe-CG_BDTJg.js";import{F as t}from"./FileDropZone-eDbExS5B.js";import{S as d}from"./Section-pYf8QOQK.js";import{F as u}from"./FileCardList-BIRf97Au.js";import{F}from"./FileCard-CGntnJwE.js";import{u as S,F as C,t as D}from"./Form-BIGHS7Ny.js";import{S as y}from"./ResetButton-CGDsV4YZ.js";import{B as f}from"./Button-BmAaiuIV.js";import{A as b}from"./ActionGroup-DAmiV-Yk.js";import{$ as j,a0 as B}from"./IconWarning-OVzy7qXj.js";import{H as g}from"./Heading--5M_y3tK.js";import{F as h}from"./FileField-BXMGPVk_.js";import{T as O}from"./Text-DpPZns_R.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DQBiE7NG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./index-CuwL1_wd.js";import"./useFieldComponent-UHV4FB79.js";import"./utils-BtbDMhcr.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CLAgqxCC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DI7piRsn.js";import"./useFocus-BQxEMJ7t.js";import"./useCollator-CGeacNLD.js";import"./context-CXt1SSmQ.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./Button-DIbF_cdk.js";import"./ProgressBar-BZV9wt8q.js";import"./Label-CQ1G_pe6.js";import"./Hidden-DdAaT9j3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C5t6ziJ-.js";import"./useFocusRing-CaZs-udO.js";import"./useFocusable-DFQV4HWE.js";import"./VisuallyHidden-pR1kpoR7.js";import"./ContextMenuSection-BjTcX3F7.js";import"./Action-CprlfWDd.js";import"./context-CBhRRwo5.js";import"./useStatic-CTCSTBly.js";import"./browser-yLu0BSsR.js";import"./getActionGroupSlot-CNqrnj_v.js";import"./dynamic-CvnWp_K2.js";import"./Dialog-CMl17GR5.js";import"./RSPContexts-dESf_SGO.js";import"./OverlayArrow-CWZGtBJS.js";import"./useControlledState-BP00jBlc.js";import"./Collection-BiCXXajm.js";import"./CollectionBuilder-DPTu2GsG.js";import"./SelectionIndicator-ZCsaESBY.js";import"./Separator-BkBMJSLE.js";import"./SelectionManager-CCfPEZQf.js";import"./useEvent-B3SFi6nF.js";import"./FocusScope-CTViNy8e.js";import"./ColumnLayout-DN01Hz6s.js";import"./Avatar-DEsTz9he.js";import"./AlertIcon-y6uiAF7a.js";import"./Image-io6TxKwN.js";import"./Link-BK3BTJiC.js";import"./OptionsButton-DESzeUI-.js";import"./ButtonView-D1nbgbts.js";import"./ContextMenuTriggerView-BKtiBClk.js";import"./ContextMenuTrigger-BS-ZTfO9.js";import"./OverlayTrigger-DFacS4RO.js";import"./OverlayContextProvider-BcT4h4_W.js";import"./FieldError-DN7cTCYW.js";import"./FieldError-DIhe2pHb.js";import"./AlertText-BXThyvrG.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DbMFXr9W.js";import"./LoadingSpinner-DTxDKIsL.js";import"./remote-B2NguZ9L.js";import"./Heading-BH9BsmNO.js";import"./useFormValidation-BBj6R535.js";import"./Input-Dsqxq3JD.js";import"./EmulatedBoldText-CNB3Go6_.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
