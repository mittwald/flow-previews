import{r as x,j as e}from"./iframe-BmaCy5vn.js";import{F as t}from"./FileDropZone-C6pwAtpU.js";import{S as u}from"./Section-D1OD6BnF.js";import{F}from"./FileCardList-DKQsMzQx.js";import{F as f}from"./FileCard-ptCmko2s.js";import{u as E,F as W,t as G}from"./Form-BrDOpJsw.js";import{B as s}from"./Button-D_WPZvgQ.js";import{A as M}from"./ActionGroup-BxG34cFp.js";import{_ as j,$ as q}from"./IconWarning-HxJndVZz.js";import{H as g}from"./Heading-DvU7HY66.js";import{F as h}from"./FileField-Dp6fjnqW.js";import{T as v}from"./Text-Bb5YosKE.js";import"./IllustratedMessage-CtcddxVp.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cdtu9ZvQ.js";import"./mergeRefs-B-jDhE92.js";import"./index-DPf4rLTQ.js";import"./utils-BTcDldbE.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DKW9AlZS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-aIW9IeHZ.js";import"./useFocus-eJJI3D_B.js";import"./useCollator-BSPhXtyK.js";import"./context-D74MXKTM.js";import"./useLocalizedStringFormatter-Bee7TgYK.js";import"./Button-wePQNGHF.js";import"./ProgressBar-DbkKYMEg.js";import"./Label-v3v2JpRx.js";import"./Hidden-DFOfTeRc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D_L0SfOg.js";import"./useFocusRing-BIF3mfAv.js";import"./useFocusable-BZM-anb5.js";import"./VisuallyHidden-CbssR0xZ.js";import"./ContextMenuSection-3hXHFRCj.js";import"./Action-DY7JPpLy.js";import"./context-unxNYjwy.js";import"./useStatic-CZNYuNH3.js";import"./browser-CHe_8eCl.js";import"./getActionGroupSlot-BjpD5yQ9.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DNzI_GfM.js";import"./RSPContexts-BWdUGPyC.js";import"./OverlayArrow-DPRWr8HF.js";import"./useControlledState-D7fTNmKi.js";import"./Collection-De-LJyRM.js";import"./CollectionBuilder-DYux32p_.js";import"./Separator-C4UM9Z4C.js";import"./Group-BQQ9lk60.js";import"./SearchField-CGzmXx6T.js";import"./FieldError-DrLNSIg1.js";import"./Form-JYTBzchK.js";import"./useTextField-DWi3otFd.js";import"./useFormReset-BOYVXvui.js";import"./TextField-BuSg5oYg.js";import"./useEvent-BVPjBT0Y.js";import"./SelectionManager-YuLIOZci.js";import"./FocusScope-BP1WICTq.js";import"./ColumnLayout-DJ0gVqUA.js";import"./Avatar-GOoJ5-jJ.js";import"./AlertIcon-DQaZLe-4.js";import"./Image-0f2W24Hp.js";import"./Link-tHmjwLpd.js";import"./ButtonView-BmrTRwNl.js";import"./ContextMenuContent-0Iub-tCL.js";import"./Popover-DJ-DOiR3.js";import"./DialogTriggerView-Cgh3ruvs.js";import"./Switch-B8OlbrtJ.js";import"./Label-C9e3OZeO.js";import"./useToggleState-BAvX9-GC.js";import"./FieldError-6Obb3s6p.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-ht0ZG28N.js";import"./Heading---3yDhu1.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-6eMdCTCE.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,gr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const n=E(),i=G();return e.jsxs(W,{form:n,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...n.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const hr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,hr as __namedExportsOrder,gr as default};
