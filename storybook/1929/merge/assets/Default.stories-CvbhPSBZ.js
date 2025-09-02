import{r as h,j as e}from"./iframe-DTi9QmA0.js";import{F as t}from"./FileDropZone-C3FM7K-4.js";import{S as c}from"./Section-JeKvmrtD.js";import{F as d}from"./FileCardList-DIKpRRWB.js";import{F as u}from"./FileCard-DRuTO6CS.js";import{u as O,F as T,t as _}from"./Form-CxbZBpI7.js";import{B as s}from"./Button-DSq_4Ojq.js";import{A as b}from"./ActionGroup-HN0xeesM.js";import{Y as x,Z as k}from"./IconWarning-DxYwd6KK.js";import{H as F}from"./Heading-DQ34o-na.js";import{F as f}from"./FileField-Bx64j-NU.js";import{T as U}from"./Text-rZE64TpZ.js";import"./IllustratedMessage-Dxh8nPbN.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-hsBezmuJ.js";import"./mergeRefs-CRQizX0M.js";import"./index-AIe693y_.js";import"./utils-CL7caOLd.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-uHJoYlsI.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BsOHSad-.js";import"./useFocus-ZZE_0lQ_.js";import"./useCollator-9sk9Xc09.js";import"./context-CCdZhs-h.js";import"./useLocalizedStringFormatter-DlTJgtIJ.js";import"./Button-DEHF5lJo.js";import"./ProgressBar-CZcDm412.js";import"./Label-CZheX-BS.js";import"./Hidden-vKywT2Di.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DGBc0zwK.js";import"./useFocusRing-DtGgtmUN.js";import"./useFocusable-C9TzKwDz.js";import"./VisuallyHidden-vt7X_vEY.js";import"./ContextMenuSection-CUzpVhwH.js";import"./Action-xnhUT-gM.js";import"./context-O1stu3iI.js";import"./useStatic-CrO0OLrU.js";import"./browser-C8n4ubUN.js";import"./getActionGroupSlot-ViofuXey.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D6TGzY5R.js";import"./RSPContexts-AUq49PY7.js";import"./OverlayArrow-CdR0wOB6.js";import"./useControlledState-plF7sQ7U.js";import"./Collection-ChROeXcJ.js";import"./CollectionBuilder-DdDVVtah.js";import"./Separator-rsJpBnK2.js";import"./Group-C0wS_Dx9.js";import"./SearchField-baoCU1ZF.js";import"./FieldError-B9D2P1L5.js";import"./Form-MgZU7Vwa.js";import"./useTextField-DlNFPg1I.js";import"./useFormReset-BLacz0U5.js";import"./TextField-1nP9PUNp.js";import"./useEvent-CA_eanes.js";import"./SelectionManager-B8EhsD0x.js";import"./FocusScope-Dyo2gp6z.js";import"./ColumnLayout-BdVryXnL.js";import"./Avatar-DgS32O6Z.js";import"./AlertIcon-C9FPS-iN.js";import"./Image-DiLQjV3w.js";import"./Link-DC8yU2UW.js";import"./ButtonView-DH2pCc46.js";import"./ContextMenuContent-Bzu_-8Yx.js";import"./Popover-CRgc4F5w.js";import"./DialogTriggerView-C9W1PVXA.js";import"./Switch-BJO5kxAo.js";import"./Label-CQetSSMr.js";import"./useToggleState-C96Ha_qP.js";import"./FieldError-GbuBlm-B.js";import"./LoadingSpinner-CxmP28Uh.js";import"./Heading-BuLKGKUk.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CvSsCxBp.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
