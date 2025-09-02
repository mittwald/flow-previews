import{r as h,j as e}from"./iframe-BmZalVao.js";import{F as t}from"./FileDropZone-DWkbkZgZ.js";import{S as c}from"./Section-CZTKaF4D.js";import{F as d}from"./FileCardList-B9TJpKh3.js";import{F as u}from"./FileCard-CmuKb1fP.js";import{u as O,F as T,t as _}from"./Form-DL0Mu2pj.js";import{B as s}from"./Button-V4gWXU1O.js";import{A as b}from"./ActionGroup-CsMbHyyk.js";import{Y as x,Z as k}from"./IconWarning-Uta2YDJP.js";import{H as F}from"./Heading-BghQHuYX.js";import{F as f}from"./FileField-F3Barm40.js";import{T as U}from"./Text-1n2lmTX2.js";import"./IllustratedMessage-B0unFNQc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-OSTZh0lU.js";import"./mergeRefs-CtwPOjS1.js";import"./index-srGqJPqU.js";import"./utils-CAvZ88A2.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-fNTtgWDx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dcdc4QL3.js";import"./useFocus-CJp-zb5k.js";import"./useCollator-B5Q-zmAD.js";import"./context-CHBdcuz4.js";import"./useLocalizedStringFormatter-D1wGXel8.js";import"./Button-B7Mfw9fE.js";import"./ProgressBar-B81Zb8lf.js";import"./Label-BMWYWyxm.js";import"./Hidden-CVk6dJGe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ceZxyZeS.js";import"./useFocusRing-DYr6CdEu.js";import"./useFocusable-RaDIdBmD.js";import"./VisuallyHidden-CzhjBb86.js";import"./ContextMenuSection-a2v3yfqf.js";import"./Action-Bg05qC2u.js";import"./context-Dnd0SHjI.js";import"./useStatic-CmyP-4Qc.js";import"./browser-DJMeickF.js";import"./getActionGroupSlot-Bu_U71dX.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Ck302eWi.js";import"./RSPContexts-CXUSdcNb.js";import"./OverlayArrow-W1WVUYgG.js";import"./useControlledState-DkevdXcu.js";import"./Collection-CssVnDWl.js";import"./CollectionBuilder-1RXdNJ75.js";import"./Separator-CxpVYPZi.js";import"./Group-DxIJd-p3.js";import"./SearchField-DC-QuQzo.js";import"./FieldError-Bd-ukmcE.js";import"./Form-B9rSyzAs.js";import"./useTextField-CryG3TpM.js";import"./useFormReset-BvOmhq3S.js";import"./TextField-BS0IdMWE.js";import"./useEvent-C050BYP-.js";import"./SelectionManager-B-lKeVzN.js";import"./FocusScope-H3r5uJpM.js";import"./ColumnLayout-v9sMRu8A.js";import"./Avatar-i_xOhP-h.js";import"./AlertIcon-b_U9iJe4.js";import"./Image-MgrFXdG8.js";import"./Link-DLATGAy8.js";import"./ButtonView-DHTfh3Cp.js";import"./ContextMenuContent-DCR3LsXc.js";import"./Popover-OJamc9qf.js";import"./DialogTriggerView-DWEqOoqf.js";import"./Switch-BHu3o3ds.js";import"./Label-Cd70f9RY.js";import"./useToggleState-BkqNr0zb.js";import"./FieldError-bqAUw6AE.js";import"./LoadingSpinner-D3X9xJLw.js";import"./Heading-VIMxqSuK.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BKXMjbmY.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const ar=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ar as __namedExportsOrder,mr as default};
