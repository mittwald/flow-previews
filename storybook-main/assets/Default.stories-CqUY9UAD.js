import{r as h,j as e}from"./iframe-ioB74BFE.js";import{F as t}from"./FileDropZone-XAJduqBU.js";import{S as c}from"./Section-CALbHKtU.js";import{F as d}from"./FileCardList-DbvURRe1.js";import{F as u}from"./FileCard-D-3wHI0M.js";import{u as O,F as T,t as _}from"./Form-DoPvWglD.js";import{B as s}from"./Button-MpugPYzI.js";import{A as b}from"./ActionGroup-xgvliJmO.js";import{Y as x,Z as k}from"./IconWarning-DcmAhB0m.js";import{H as F}from"./Heading-CLweJIMG.js";import{F as f}from"./FileField-BDZJ5BOL.js";import{T as U}from"./Text-BZaQwICB.js";import"./IllustratedMessage-DvzLQ3em.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DIQ-3Z-W.js";import"./mergeRefs-Bc9_QzvA.js";import"./index-DxUCKuoS.js";import"./utils-B4cCkl7w.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CCXZaIsU.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CB1mDCyy.js";import"./useFocus-Cm5D2sPa.js";import"./useCollator-CLy1qn58.js";import"./context-BPL8pm8m.js";import"./useLocalizedStringFormatter-aWkOtTsz.js";import"./Button-C3ElHjZf.js";import"./ProgressBar-6K_Q5ytM.js";import"./Label-Ci4HPtMl.js";import"./Hidden-BUUKH5FE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D3I07Rsr.js";import"./useFocusRing-CU7EmQP7.js";import"./useFocusable-2c5mTAR9.js";import"./VisuallyHidden-BOO0yHnw.js";import"./ContextMenuSection-VWKPQl1H.js";import"./Action-PE71Lbss.js";import"./context-hIhIfxI4.js";import"./useStatic-BxLAdQVw.js";import"./browser-BI2T8H6c.js";import"./getActionGroupSlot-CF5EeO16.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CftsoPvf.js";import"./RSPContexts-CvEKqGkH.js";import"./OverlayArrow-BGE95OS1.js";import"./useControlledState-DPunIX8S.js";import"./Collection-DiJArqpe.js";import"./CollectionBuilder-BSEB-cLG.js";import"./Separator-RUGTe1Gb.js";import"./Input-Bztt3-Ug.js";import"./SearchField-D30c1-ND.js";import"./FieldError-Z5j2ND32.js";import"./Form-u9b0IMfB.js";import"./Group-DEqMnOwE.js";import"./useTextField-udwT8Fkv.js";import"./useFormReset-Ik_MynpH.js";import"./TextField-DC2JuRaU.js";import"./SelectionManager-BJVavWLX.js";import"./useEvent-WwaZxlmw.js";import"./FocusScope-Dmal2fI9.js";import"./ColumnLayout-BtgxPphQ.js";import"./Avatar-BHLrIZOF.js";import"./AlertIcon-edb-Idvb.js";import"./Image-649sdUSq.js";import"./Link-C8ygdi9S.js";import"./OptionsButton-e7PTc45m.js";import"./ButtonView-CrLDH0sU.js";import"./ContextMenuContent-uE6xE29v.js";import"./Popover-rrnYjHMt.js";import"./DialogTriggerView-CvOFscXk.js";import"./Switch-BZLuC3kf.js";import"./Label-Bf-bWzV0.js";import"./useToggleState-yYtDOzvo.js";import"./FieldError-JtFjK6bM.js";import"./LoadingSpinner-DAUxEQn_.js";import"./Heading-DlB0ufOw.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-C5-k4pIu.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
