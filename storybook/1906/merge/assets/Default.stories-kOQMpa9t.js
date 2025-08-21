import{r as h,j as e}from"./iframe-BvdD6qXg.js";import{F as t}from"./FileDropZone-DTN-aigA.js";import{S as c}from"./Section-Bdu5CK1H.js";import{F as d}from"./FileCardList-iE7u4g7A.js";import{F as u}from"./FileCard-D3jkCZ9c.js";import{u as O,F as T,t as _}from"./Form-0-PEKG-0.js";import{B as s}from"./Button-7ivsFGmn.js";import{A as b}from"./ActionGroup-DgQib4i3.js";import{Y as x,Z as k}from"./IconWarning-BNkxb_83.js";import{H as F}from"./Heading-4ynE8vAD.js";import{F as f}from"./FileField-b4aD3xvP.js";import{T as U}from"./Text-CCdgZxrm.js";import"./IllustratedMessage-CcNXD2FH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BF7i2FhK.js";import"./mergeRefs-Dnf-Pw23.js";import"./index-DnH4257v.js";import"./utils-DLyEFlgv.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D84jcunx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-qrx4I7MD.js";import"./useFocus-ByAGBV0g.js";import"./useCollator-DSve1vwE.js";import"./context-CM85t4Ux.js";import"./useLocalizedStringFormatter-CRa4f4Ro.js";import"./Button-DQnvmhgF.js";import"./ProgressBar-Bt3oFLCo.js";import"./Label-BA_GTzaI.js";import"./Hidden-DJ1F2YbP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-2QIW6EnW.js";import"./useFocusRing-CImSweUq.js";import"./useFocusable-0-dkSgyo.js";import"./VisuallyHidden-GD1ZdHbS.js";import"./ContextMenuSection-CAjXX6Mq.js";import"./Action-GPgeTEUr.js";import"./context-CUfZZ1vn.js";import"./useStatic-uGULccbV.js";import"./browser-D0kBFYzL.js";import"./getActionGroupSlot-D52RJivz.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BGFaL9Kl.js";import"./RSPContexts-Myyfynwt.js";import"./OverlayArrow-DnRhWojv.js";import"./useControlledState-9GcYGGux.js";import"./Collection-B3KJ39IP.js";import"./CollectionBuilder-CLZLxvdl.js";import"./Separator-BTA9WwIy.js";import"./Group-CrFlWLH5.js";import"./SearchField-Cf5LxW_o.js";import"./FieldError-BhEhBaOS.js";import"./Form-BShbB3hD.js";import"./useTextField-8lhmPbxJ.js";import"./useFormReset-yMYSmHMi.js";import"./TextField-DFc82d9L.js";import"./useEvent-DU_k0cnD.js";import"./SelectionManager-CaW73nQO.js";import"./FocusScope-D2M4fWVA.js";import"./ColumnLayout-DFVkeT-F.js";import"./Avatar-868yG9Ya.js";import"./AlertIcon-DNNQdUqp.js";import"./Image-E11XnrMw.js";import"./Link-B-UxIpFt.js";import"./ButtonView-Cvnfgofo.js";import"./ContextMenuContent-jCsdD8qY.js";import"./Popover-DcMPgkPU.js";import"./DialogTriggerView-1z2kdnQv.js";import"./Switch-BkWHYAwZ.js";import"./Label-BnuyVShl.js";import"./useToggleState-D5sDMtE_.js";import"./FieldError-BU8vkL3I.js";import"./LoadingSpinner-BmDETFjn.js";import"./Heading-C-rB2L_h.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DlBeGY0R.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
