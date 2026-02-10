import{r as x,j as e}from"./iframe-CH-PGbIe.js";import{F as t}from"./FileDropZone-BBC-xtyI.js";import{S as d}from"./Section-DpoV8RoH.js";import{F as u}from"./FileCardList-DRW9l-81.js";import{F}from"./FileCard-C4gOk9M2.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DoGjjkHq.js";import{B as f}from"./Button-Dl-iCxcF.js";import{A as b}from"./ActionGroup-Dg2TFsOE.js";import{_ as j,$ as B}from"./IconWarning-BrtiYPUm.js";import{H as g}from"./Heading-BkfS56Xz.js";import{F as h}from"./FileField-DP099z2P.js";import{T as O}from"./Text-DUTVzyy5.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-_U4G-aJ4.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./index-yvyiz2TD.js";import"./useFieldComponent-R38s1k2Z.js";import"./utils-BUbYN1U7.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C_Kx-nbJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBwXLpG2.js";import"./useFocus-C-u_ZFsP.js";import"./useCollator-NRPLm61h.js";import"./context-BEPAk1pi.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./useFocusRing-CuUFHyYZ.js";import"./Button-BxJ7LcYT.js";import"./ProgressBar-BvIgs7se.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CjXzQGxt.js";import"./useFocusable-DX9jgPLa.js";import"./VisuallyHidden-BZmadp8e.js";import"./ContextMenuSection-NNPlO46F.js";import"./Action-CX67yONB.js";import"./context-BsZ7lsCx.js";import"./useStatic-DyjFLUOF.js";import"./browser-Bk_hun62.js";import"./getActionGroupSlot-BkUFYgi5.js";import"./dynamic-DYPsp9rr.js";import"./Dialog-LWxSnoH8.js";import"./RSPContexts-CFzFD81a.js";import"./OverlayArrow-BxBE_adq.js";import"./useControlledState-BQPo69mZ.js";import"./Collection-BTj5Zmqj.js";import"./CollectionBuilder-D_HWiiHS.js";import"./SelectionIndicator-DFgYB22t.js";import"./Separator-D7Dxs4fR.js";import"./SelectionManager-Cy9wSm_1.js";import"./useEvent-DmJ5-BvT.js";import"./FocusScope-Com4Ovel.js";import"./ColumnLayout-oQn4Qbp3.js";import"./Avatar-D_XhaOGG.js";import"./AlertIcon-Cf4_Rc8_.js";import"./Image-DHsJ9mZZ.js";import"./Link-DAc9zWmn.js";import"./OptionsButton-D05izc4V.js";import"./ButtonView-B_eZj1aS.js";import"./ContextMenuTriggerView-BIkdJ9mD.js";import"./ContextMenuTrigger--KtB7eik.js";import"./OverlayTrigger-BCj6WW1R.js";import"./OverlayContextProvider-C92IYoS4.js";import"./FieldError-9pLulNyY.js";import"./FieldError-PikikH1M.js";import"./AlertText-lzhTm-Qc.js";import"./useRef-DKmNltMK.js";import"./LoadingSpinner-BVg6Htwb.js";import"./remote-NkxELaCk.js";import"./Heading-DuD4iKmL.js";import"./useFormValidation-CGeoBpxY.js";import"./Input-C82ooeG7.js";import"./EmulatedBoldText-DLXz_2Ie.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
