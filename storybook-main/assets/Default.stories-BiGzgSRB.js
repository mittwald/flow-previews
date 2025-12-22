import{r as x,j as e}from"./iframe-DALg75d7.js";import{F as t}from"./FileDropZone-BU6pmQXX.js";import{S as d}from"./Section--EZ_JCJz.js";import{F as u}from"./FileCardList-zG3Ggnr-.js";import{F}from"./FileCard-XDftqdqJ.js";import{u as S,F as C,t as D}from"./Form-BBd4GmKs.js";import{S as y}from"./ResetButton-BqGFti5i.js";import{B as f}from"./Button-CxCFU3Sm.js";import{A as b}from"./ActionGroup-uPexo89O.js";import{Z as j,_ as B}from"./IconWarning-CIuZ66pt.js";import{H as g}from"./Heading-CnbEZOuS.js";import{F as h}from"./FileField-CBnnDhZ5.js";import{T as O}from"./Text-BfSm9wB3.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BJbVnzBD.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-am8ulk.js";import"./index-C1xeFTv-.js";import"./index-BOS789La.js";import"./useFieldComponent-BaBZIB3g.js";import"./utils-CCMGMBS3.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CuJqaQ90.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C6FFt053.js";import"./useFocus-uyJaeSg2.js";import"./useCollator-ClbbiMJu.js";import"./context-D-SwIuvT.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";import"./Button-CAn5W5h2.js";import"./ProgressBar-BxOMxEJ2.js";import"./Label-BL63E4pM.js";import"./Hidden-DA9FnjM0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BlF5TfdE.js";import"./useFocusRing-DgbRXdyO.js";import"./useFocusable-KXnvIYuK.js";import"./VisuallyHidden-BtdNRxOz.js";import"./ContextMenuSection-nagFkt4I.js";import"./Action-B-LX0Gdh.js";import"./context-VL9rXB3T.js";import"./useStatic-C_Axqqwt.js";import"./browser-BOjJAEEq.js";import"./getActionGroupSlot-CL-vXJAN.js";import"./dynamic-DnyVnPzZ.js";import"./Dialog-BcVnlKtW.js";import"./RSPContexts-Bv06n-kH.js";import"./OverlayArrow-DlELcq_K.js";import"./useControlledState-10c65vgi.js";import"./Collection-BVQ9TfqB.js";import"./CollectionBuilder-CWHk20os.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./Separator-5S_7F0Gu.js";import"./SelectionManager-CQ6fCu1T.js";import"./useEvent-BxcVXIUM.js";import"./FocusScope-CEIkcXTC.js";import"./ColumnLayout-CXNCJzww.js";import"./Avatar-CYX61ygr.js";import"./AlertIcon-DlfHKdTN.js";import"./Image-D58K3Q2l.js";import"./Link-DF9dIRnM.js";import"./OptionsButton-Bp6-ZKXh.js";import"./ButtonView-hke_KLLb.js";import"./ContextMenuTriggerView-DKIAC4Up.js";import"./ContextMenuTrigger-_BKN-0Cf.js";import"./OverlayTrigger-DY2Hgbuf.js";import"./OverlayContextProvider-BeL-SPbw.js";import"./FieldError-JMY6vjHT.js";import"./FieldError-B5AAUQ1i.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Cb6IcnGU.js";import"./LoadingSpinner-DKmXkdSk.js";import"./remote-Bn6u74KD.js";import"./Heading-D55KeDUv.js";import"./useFormValidation-jiwCVXG0.js";import"./Input-DhIUUdBW.js";import"./EmulatedBoldText-BXgIlIDh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
