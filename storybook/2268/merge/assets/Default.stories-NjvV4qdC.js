import{r as x,j as e}from"./iframe-B-_izELn.js";import{F as t}from"./FileDropZone-DkjuTqSY.js";import{S as d}from"./Section-BEewp5lM.js";import{F as u}from"./FileCardList-CUe2pdzr.js";import{F}from"./FileCard-nPzHDEl2.js";import{u as S,F as C,t as D}from"./Form-Dp0ieSSq.js";import{S as y}from"./ResetButton-BDQEP0wp.js";import{B as f}from"./Button-rB1lHab_.js";import{A as b}from"./ActionGroup-Cyfs3irQ.js";import{$ as j,a0 as B}from"./IconWarning-DXXSRvhn.js";import{H as g}from"./Heading-BAMsaaGA.js";import{F as h}from"./FileField-BM7BV9Gy.js";import{T as O}from"./Text-B9UK706u.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BOeIG3TU.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./index-C24wTi9Q.js";import"./useFieldComponent-Kyt2SdHG.js";import"./utils-CTzaLK4l.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Cbq-V_qs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZiDffWU.js";import"./useFocus-BKzgn786.js";import"./useCollator-Sj9w00om.js";import"./context-CP_ivtNk.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./Button-RawUYYof.js";import"./ProgressBar-CGHlOl5l.js";import"./Label-DUJ6ba3Y.js";import"./Hidden-Ud3q5koP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CDCEcfQ2.js";import"./useFocusRing-DHjGYA3Q.js";import"./useFocusable-I-aSrCr_.js";import"./VisuallyHidden-DwaExAJM.js";import"./ContextMenuSection-Cd3ymo9B.js";import"./Action-CmZvSofW.js";import"./context--GYGv0Su.js";import"./useStatic-k4uG0_kr.js";import"./browser-C9rDHpHO.js";import"./getActionGroupSlot-DlereTwl.js";import"./dynamic-bdsqC1kS.js";import"./Dialog-C6Hf8kgU.js";import"./RSPContexts-k_uvwm8O.js";import"./OverlayArrow-C1kYwcM3.js";import"./useControlledState-tdUQVzVH.js";import"./Collection-BlKc58PT.js";import"./CollectionBuilder-C9MyseWf.js";import"./SelectionIndicator-ey4emqqq.js";import"./Separator-xctm41Qr.js";import"./SelectionManager-Bstf7-gd.js";import"./useEvent-DwiqP_vq.js";import"./FocusScope-BQUCV4aX.js";import"./ColumnLayout-DuNkZsJa.js";import"./Avatar-Bs5eRb-P.js";import"./AlertIcon-DHh3kTXL.js";import"./Image-S3SsvS4A.js";import"./Link-bJ7V2ojH.js";import"./OptionsButton-Dc4DhOfl.js";import"./ButtonView-BKoxVURF.js";import"./ContextMenuTriggerView-CPmYzh-y.js";import"./ContextMenuTrigger-DTXkuttU.js";import"./OverlayTrigger-DaYOrCfk.js";import"./OverlayContextProvider-CZWz1i-_.js";import"./FieldError-C2OlbqQW.js";import"./FieldError-2QNeUIGm.js";import"./AlertText-BdI1vJoj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Cr1C-aLL.js";import"./LoadingSpinner-BCeR-IPA.js";import"./remote-DY2XWwFP.js";import"./Heading-DVKq7Ots.js";import"./useFormValidation-d7hQTD7K.js";import"./Input-Ch7XH0d5.js";import"./EmulatedBoldText-DO19SLv9.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
