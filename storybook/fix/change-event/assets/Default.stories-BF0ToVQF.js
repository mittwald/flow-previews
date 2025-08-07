import{r as h,j as e}from"./iframe-BBgxZ9_Z.js";import{F as t}from"./FileDropZone-DyYCZ9Kn.js";import{S as c}from"./Section-sQnHBt5F.js";import{F as d}from"./FileCardList-CAqjWb0b.js";import{F as u}from"./FileCard-DFV7B-fD.js";import{u as O,F as T,t as _}from"./Form-DGi1ZX7v.js";import{B as s}from"./Button-B-lzkDqv.js";import{A as b}from"./ActionGroup-D0iIB9hA.js";import{Y as x,Z as k}from"./IconWarning-8HHOdEAt.js";import{H as F}from"./Heading-Bdm7kJ9W.js";import{F as f}from"./FileField-G11TDO4h.js";import{T as U}from"./Text-DGcNKUf7.js";import"./IllustratedMessage-DXDu7m9O.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IdqCMJT1.js";import"./mergeRefs-BLmxAuNF.js";import"./index-BhvP9-i6.js";import"./utils-MwuRBPAU.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D0NxCgiz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CtD9pvoh.js";import"./useFocus-BbdsXgPj.js";import"./useCollator--BNdDS58.js";import"./context-1V9oDOBq.js";import"./useLocalizedStringFormatter-oXVl5QY8.js";import"./Button-CYTZuBnH.js";import"./ProgressBar-DwujBMLa.js";import"./Label-Di9QaZZ3.js";import"./Hidden-k-QU5_bv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DTZ5yxFT.js";import"./useFocusRing-LpVKnpiI.js";import"./useFocusable-CfVMEKsh.js";import"./VisuallyHidden-DzvMb3_B.js";import"./ContextMenuSection-DX6nVWXX.js";import"./Action-DpyN5NaX.js";import"./context-D62hB718.js";import"./useStatic-C_mBRxHK.js";import"./browser-XdNXsdMD.js";import"./getActionGroupSlot-Ct403QjR.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DclGznPM.js";import"./RSPContexts-3v3yZrnH.js";import"./OverlayArrow-CFHpk9vq.js";import"./useControlledState-DynQBW6H.js";import"./Collection-yBxX2uBM.js";import"./CollectionBuilder-Cikntfcr.js";import"./Separator-DwoBWJxO.js";import"./Group-ChejVHkC.js";import"./SearchField-D1XEYmSH.js";import"./FieldError-W_6exYVC.js";import"./Form-CxmcAuRx.js";import"./useTextField-QvIlaKbq.js";import"./useFormReset-BmT_Xdgp.js";import"./TextField-DQ00G_WY.js";import"./useEvent-CAp5Jueq.js";import"./SelectionManager-DEhn8O5H.js";import"./FocusScope-CjT2Rvcj.js";import"./ColumnLayout-DeyZTOHH.js";import"./Avatar-L9BrQk8n.js";import"./AlertIcon-CH5FEca7.js";import"./Image-CjS9ppQ2.js";import"./Link-iu9eKawv.js";import"./OptionsButton-BRuCjccs.js";import"./ButtonView-Cvn9bSS6.js";import"./ContextMenuContent-BQ9g8yNm.js";import"./Popover-DIVeWh25.js";import"./DialogTriggerView-DMvHVVad.js";import"./Switch-DdvK5Bdb.js";import"./Label-CMgPNz6D.js";import"./useToggleState-cndI-PiK.js";import"./FieldError-3nUx1gE4.js";import"./LoadingSpinner-AMSMSqlY.js";import"./Heading-B8IOml0A.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-Bf9Yi8oc.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
