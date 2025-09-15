import{r as x,j as e}from"./iframe-Ddl3oy7j.js";import{F as t}from"./FileDropZone-CBZ1lyq8.js";import{S as u}from"./Section-CJNww9Gn.js";import{F}from"./FileCardList-Dq9esbab.js";import{F as f}from"./FileCard-DGVi-BIY.js";import{u as E,F as W,t as G}from"./Form-DhHChfyG.js";import{B as s}from"./Button-DqaKYKf3.js";import{A as M}from"./ActionGroup-wkrC9FFZ.js";import{_ as j,$ as q}from"./IconWarning-c_EtJYHN.js";import{H as g}from"./Heading-CIxDrxL5.js";import{F as h}from"./FileField-DCldIwm-.js";import{T as v}from"./Text-QWoB1dLM.js";import"./IllustratedMessage-B2bA-PVY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnW5HdO8.js";import"./mergeRefs-C9z6gsFG.js";import"./index-C1skfeMg.js";import"./utils-Ci_tygJf.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-sFlu2MbQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DcZpZe32.js";import"./useFocus-DmoZ0prk.js";import"./useCollator-B4sklduu.js";import"./context-DO4TRSlT.js";import"./useLocalizedStringFormatter-CALAZrAH.js";import"./Button-DtXFMSeo.js";import"./ProgressBar-DxjBV5HR.js";import"./Label-3HbXpuHu.js";import"./Hidden-ywj4FOpy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CocvpA_Y.js";import"./useFocusRing-BmS0Hu73.js";import"./useFocusable-Czgc212e.js";import"./VisuallyHidden-D1ge_fMG.js";import"./ContextMenuSection-wvBBY48w.js";import"./Action-DUd3tSxu.js";import"./context-CodLc8vz.js";import"./useStatic-CuoXAQeJ.js";import"./browser-bNZZs8J3.js";import"./getActionGroupSlot-Ceebw4du.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BWiPBE7M.js";import"./RSPContexts-DkASzfG8.js";import"./OverlayArrow-BcGuja2I.js";import"./useControlledState-CmfVHeBq.js";import"./Collection-CvGKQDYH.js";import"./CollectionBuilder-B4jSBOCT.js";import"./Separator-C6XPVHs3.js";import"./Group-DIPAAm7c.js";import"./SearchField-DspYPOuY.js";import"./FieldError-DKHffRep.js";import"./Form-BuMmY0ok.js";import"./useTextField-FYLvyiMg.js";import"./useFormReset-DqrIwWOQ.js";import"./TextField-WM0IMQR5.js";import"./useEvent-DmjLh1yy.js";import"./SelectionManager-Dg6K_iw1.js";import"./FocusScope-xkAre9m0.js";import"./ColumnLayout-NInN6cCD.js";import"./Avatar-BfFnb9in.js";import"./AlertIcon-CHpw4pRs.js";import"./Image-B06lGPE9.js";import"./Link-DxuNuccD.js";import"./ButtonView-BQXRKEzJ.js";import"./ContextMenuContent-QBJrce9E.js";import"./Popover-VwLdfteC.js";import"./DialogTriggerView-d2hqROxE.js";import"./Switch-5xVq-eEa.js";import"./Label-CPFqIdaY.js";import"./useToggleState-nCB6LYTR.js";import"./FieldError-D1LH8qMf.js";import"./LoadingSpinner-CMgBxs5g.js";import"./Heading-C93AsN8G.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CxwJM-M1.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
