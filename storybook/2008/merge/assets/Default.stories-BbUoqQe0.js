import{r as x,j as e}from"./iframe-CQa7qTJa.js";import{F as t}from"./FileDropZone-BtKs_olE.js";import{S as u}from"./Section-zVqh_66u.js";import{F}from"./FileCardList-D-zf4b15.js";import{F as f}from"./FileCard-BVzxdF2A.js";import{u as E,F as W,t as G}from"./Form-vko5YiGv.js";import{B as s}from"./Button-CHgvO37v.js";import{A as M}from"./ActionGroup-Cu-E7EJY.js";import{_ as j,$ as q}from"./IconWarning-CeyZIf1V.js";import{H as g}from"./Heading-BXYPAFki.js";import{F as h}from"./FileField-C5QUfzeO.js";import{T as v}from"./Text-CH2mDEXN.js";import"./IllustratedMessage-Dl4UxExD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C1od4eVS.js";import"./mergeRefs-Da4MPh46.js";import"./index-BsJVg0bb.js";import"./utils-cYx4gHhD.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BRoIiTz6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DGKdhdH_.js";import"./useFocus-C9JxIGDi.js";import"./useCollator-BHsFeSET.js";import"./context-BU9KDZsm.js";import"./useLocalizedStringFormatter-DxdNJ3BP.js";import"./Button-DeHwua8T.js";import"./ProgressBar-FMaJOq3V.js";import"./Label-DUJFwkpM.js";import"./Hidden-Xar3rui2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D-jgt3FH.js";import"./useFocusRing-DJ1LjUwE.js";import"./useFocusable-FCuKz-qE.js";import"./VisuallyHidden-CQfZ6AGe.js";import"./ContextMenuSection-D5Nv21jf.js";import"./Action-D-hl0RaT.js";import"./context-D_sCsAkv.js";import"./useStatic-ByirIl9X.js";import"./browser-BhSl0yCb.js";import"./getActionGroupSlot-gbKAHcV0.js";import"./dynamic-RkS6HP3_.js";import"./Popover-DDG0vMkE.js";import"./DialogTriggerView-Cf-mCLAZ.js";import"./RSPContexts-C2Phcdxj.js";import"./ClearPropsContextView-CMBXwDsP.js";import"./useControlledState-CFUYHrzm.js";import"./FocusScope-C4mxiVmq.js";import"./Collection-CLijKRGN.js";import"./CollectionBuilder-BuoP7Qv-.js";import"./Separator-D9m_TYOZ.js";import"./Group-D-4ygLJZ.js";import"./SearchField-DroG_a10.js";import"./FieldError-D5-jV0S5.js";import"./Form-CF3ngYGn.js";import"./useTextField-DOzcbfzW.js";import"./useFormReset-DY9tf8Hl.js";import"./TextField-BNBlfRPu.js";import"./useEvent-CyQldz3u.js";import"./SelectionManager-CZ4deCBD.js";import"./Switch-aLrDiBEZ.js";import"./Label-DFElwRl3.js";import"./useToggleState-DhCV0ASY.js";import"./ColumnLayout-WTuYzAwd.js";import"./Avatar-DoMIg4w8.js";import"./AlertIcon-eZaU5oPf.js";import"./Image-ByesaU9t.js";import"./Link-DC83l1Jv.js";import"./ButtonView-CH0BJJAP.js";import"./ContextMenuTriggerView-wFIv4fDw.js";import"./FieldError-j63R-YGj.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-DVFRCiEF.js";import"./Heading-BffAmQNL.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-Ce7b_D_t.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
