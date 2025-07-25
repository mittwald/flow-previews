import{r as h,j as e}from"./iframe-BjkHoCV_.js";import{F as t}from"./FileDropZone-C93pAAat.js";import{S as c}from"./Section-DhI7rSAc.js";import{F as d}from"./FileCardList-DkFJUzXE.js";import{F as u}from"./FileCard-CH3wTr4x.js";import{u as O,F as T,t as _}from"./Form-x4DN-GwU.js";import{B as s}from"./Button-DVqiRGCO.js";import{A as b}from"./ActionGroup-Dtw_UogW.js";import{Y as x,Z as k}from"./IconWarning-CwiGKHoc.js";import{H as F}from"./Heading-LmDvZV8j.js";import{F as f}from"./FileField-b3Ur7S3H.js";import{T as U}from"./Text-eTJAYSJY.js";import"./IllustratedMessage-CZkHC6R9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C_mzLhgD.js";import"./mergeRefs-DrT8tsnG.js";import"./index-BhskFd1j.js";import"./utils-CGiEt-XO.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C4ERGDAc.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-1QSzRNK-.js";import"./useFocus-xSbgpmNE.js";import"./useCollator-BsISA5DC.js";import"./context-rlbqmEoV.js";import"./useLocalizedStringFormatter-dqhA2Nz0.js";import"./Button-Di6PObN5.js";import"./ProgressBar-B7PSoMX-.js";import"./Label-B_ZT4LJD.js";import"./Hidden-CDdp3qbI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEdNq8mA.js";import"./useFocusRing-Wt9DLJeW.js";import"./useFocusable-CXhBXWqP.js";import"./VisuallyHidden-DAjtA0IX.js";import"./ContextMenuSection-BSbpkMS3.js";import"./Action-CzPwWBMx.js";import"./context-CsL7NKVl.js";import"./useStatic-D1q5yxzl.js";import"./browser-D-wpRimX.js";import"./getActionGroupSlot-Bo5RA54w.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DTbN5TSI.js";import"./RSPContexts-B3qavTDI.js";import"./OverlayArrow-BOh6Y0Vd.js";import"./useControlledState-DGwCCxzP.js";import"./Collection-CFDXeLKH.js";import"./CollectionBuilder---ElTJdF.js";import"./Separator-s9nTWt-s.js";import"./Input-CkroWKbe.js";import"./SearchField-C9v5dfT_.js";import"./FieldError-BxnpY5Jk.js";import"./Form-PglXiK24.js";import"./Group-CFG6yZ2f.js";import"./useTextField-DkP6KCaQ.js";import"./useFormReset-DzRnd0mU.js";import"./TextField-gOyCtBR-.js";import"./SelectionManager-DffnzBv0.js";import"./useEvent-DmGZIyRy.js";import"./FocusScope-mH_5A_-I.js";import"./ColumnLayout-CssdlHL2.js";import"./Avatar-G5SbidE1.js";import"./AlertIcon-B7gxaODE.js";import"./Image-DlPRYjSj.js";import"./Link-Broenk_I.js";import"./OptionsButton-rwgmaUJk.js";import"./ButtonView-B3Lwz5wh.js";import"./ContextMenuContent-DIhkCU3v.js";import"./Popover-luZqOS3K.js";import"./DialogTriggerView-A1G7QU7L.js";import"./Switch-e6empCY_.js";import"./Label-BYU6zcWR.js";import"./useToggleState-Dv7wlAGU.js";import"./FieldError-mxRvqHca.js";import"./LoadingSpinner-DEvuHU_p.js";import"./Heading-D8l_AjAM.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-Bcu9u8Hb.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const pr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,pr as __namedExportsOrder,lr as default};
