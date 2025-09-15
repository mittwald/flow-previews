import{r as x,j as e}from"./iframe-BwL5TE8j.js";import{F as t}from"./FileDropZone-DUkiebmR.js";import{S as u}from"./Section-CzjirJ3M.js";import{F}from"./FileCardList-Cb_vxMPW.js";import{F as f}from"./FileCard-OxI0OBNt.js";import{u as E,F as W,t as G}from"./Form-BT-3LKRS.js";import{B as s}from"./Button-aac4MlcR.js";import{A as M}from"./ActionGroup-CW3rR86s.js";import{_ as j,$ as q}from"./IconWarning-CFzxGyJP.js";import{H as g}from"./Heading-CfBpJMd-.js";import{F as h}from"./FileField--7rUWgbe.js";import{T as v}from"./Text-DGokGAz6.js";import"./IllustratedMessage-r7_9Saxo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbKMeUzs.js";import"./mergeRefs-BHw4ks4u.js";import"./index-CZakacYE.js";import"./utils-D5K6eLjb.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-lZrUqOdv.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-0Q5rWqkC.js";import"./useFocus-B2onYDnw.js";import"./useCollator-BVjT8-HM.js";import"./context-CLDbs9sm.js";import"./useLocalizedStringFormatter-B8lu9hLL.js";import"./Button-BJbpMApz.js";import"./ProgressBar-BqBMnQMD.js";import"./Label-CyvFU2WD.js";import"./Hidden-Bk94MQHU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-H2LW6Ly5.js";import"./useFocusRing-Dnm1Bceh.js";import"./useFocusable-DDKZ0z65.js";import"./VisuallyHidden-kWjY9XjT.js";import"./ContextMenuSection-Ug__qdSH.js";import"./Action-Dz3okKrM.js";import"./context-CPjnFp9f.js";import"./useStatic-lPJ6-trN.js";import"./browser-BFoEGF9u.js";import"./getActionGroupSlot-D5WSPsgm.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CAhtHN7d.js";import"./RSPContexts-twmoior-.js";import"./OverlayArrow-ClAfltY8.js";import"./useControlledState-B8vyFbA3.js";import"./Collection-D-rOi4Fm.js";import"./CollectionBuilder-BSKAEL2-.js";import"./Separator-BewLs59G.js";import"./Group-DtaLpYpv.js";import"./SearchField-D9OSv9aH.js";import"./FieldError-sKqByAl8.js";import"./Form-GeiXMdXB.js";import"./useTextField-B_NtZtsZ.js";import"./useFormReset-BObq63rv.js";import"./TextField-CoIF75G6.js";import"./useEvent-CsEmoHY2.js";import"./SelectionManager-DjWaGKUE.js";import"./FocusScope-BNA3YsCO.js";import"./ColumnLayout-CyHHqQhj.js";import"./Avatar-ClupXUnr.js";import"./AlertIcon-BG5Z1N9t.js";import"./Image-BrWPm7lK.js";import"./Link-DsmtdHqi.js";import"./ButtonView-BV1bIRN0.js";import"./ContextMenuContent-DVBhRKZ7.js";import"./Popover-yYGh9Pu-.js";import"./DialogTriggerView-Cn2CtqME.js";import"./Switch-D0zBfXdh.js";import"./Label-DWj4cilU.js";import"./useToggleState-BmROClgr.js";import"./FieldError-CJJ4jg0R.js";import"./LoadingSpinner-xuWixoMH.js";import"./Heading-KvETIO-A.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-C4JMZ2uF.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
