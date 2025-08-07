import{r as h,j as e}from"./iframe-CPpiztA9.js";import{F as t}from"./FileDropZone-BXiuWbPc.js";import{S as c}from"./Section-e9XZJWXh.js";import{F as d}from"./FileCardList-gMiz5fXg.js";import{F as u}from"./FileCard-CnO2Zhkz.js";import{u as O,F as T,t as _}from"./Form-06t4F3b0.js";import{B as s}from"./Button-C-ub_lVB.js";import{A as b}from"./ActionGroup-D-73Ndws.js";import{Y as x,Z as k}from"./IconWarning-DGFg2xah.js";import{H as F}from"./Heading-COPT6b_C.js";import{F as f}from"./FileField-DS2R8yxW.js";import{T as U}from"./Text-B9GDlRIl.js";import"./IllustratedMessage-BscbHsxa.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgD2VZvZ.js";import"./mergeRefs-CY9oKSjb.js";import"./index-CXr5LMa8.js";import"./utils-DXg4ziAt.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D73bWKdR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CbuGYTDm.js";import"./useFocus-f0syXR1u.js";import"./useCollator-B-f7_yfw.js";import"./context-Dtd4A8DJ.js";import"./useLocalizedStringFormatter-CcOUbIQp.js";import"./Button-BpRzT99M.js";import"./ProgressBar-BJkoGjLL.js";import"./Label-DrzbYkyA.js";import"./Hidden-bVSOJLMB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bn1QFLmx.js";import"./useFocusRing-ryN7bem9.js";import"./useFocusable-BdzC7gBh.js";import"./VisuallyHidden-DQWk5n-D.js";import"./ContextMenuSection-DpVNIsXF.js";import"./Action-Bo4rmNqt.js";import"./context-C5LerLhv.js";import"./useStatic-DpS3r3sC.js";import"./browser-CCSZxPxO.js";import"./getActionGroupSlot-Dzp14r5x.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CUla8htU.js";import"./RSPContexts-CFiizNM1.js";import"./OverlayArrow-p4WTGnf4.js";import"./useControlledState-CvPFcFpa.js";import"./Collection-rnaxRpPP.js";import"./CollectionBuilder-B0lIXlwM.js";import"./Separator-CbcELXN4.js";import"./Group-BazAvpcu.js";import"./SearchField-BSkiBWnk.js";import"./FieldError-DNVX5F1U.js";import"./Form-BF7n3RGH.js";import"./useTextField-B-d085GV.js";import"./useFormReset-MeUe0mbs.js";import"./TextField-CdnmB6pT.js";import"./useEvent-BZyVmUT6.js";import"./SelectionManager-CwCMliWC.js";import"./FocusScope-mK0EKnGk.js";import"./ColumnLayout-CR1Nv0-P.js";import"./Avatar-DHRNRBkX.js";import"./AlertIcon-Decio1kG.js";import"./Image-CWSXzhFN.js";import"./Link-Cwf-Yfzv.js";import"./OptionsButton-Da_Xen7Y.js";import"./ButtonView-yBWSjOyV.js";import"./ContextMenuContent-CyFYpMU0.js";import"./Popover-CWZaEHAV.js";import"./DialogTriggerView-jBIZNPKp.js";import"./Switch-BWLZBzy0.js";import"./Label-BGSD1rhi.js";import"./useToggleState-caQpWwOD.js";import"./FieldError-Ci8tQ9GY.js";import"./LoadingSpinner-CgYhtYh1.js";import"./Heading-C7g1szTV.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-49ZPQjyJ.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
