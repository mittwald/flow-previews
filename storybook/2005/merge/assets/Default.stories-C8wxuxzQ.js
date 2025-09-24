import{r as x,j as e}from"./iframe-CIFTXvjr.js";import{F as t}from"./FileDropZone-DtSCqYUs.js";import{S as u}from"./Section-BpDiE8n8.js";import{F}from"./FileCardList-BHddEbuN.js";import{F as f}from"./FileCard-XYsjQPif.js";import{u as E,F as W,t as G}from"./Form-CwxbAihU.js";import{B as s}from"./Button-mCzyv81-.js";import{A as M}from"./ActionGroup-DwR_jXyX.js";import{_ as j,$ as q}from"./IconWarning-DOS6fKaS.js";import{H as g}from"./Heading-U69dEP-U.js";import{F as h}from"./FileField-CWa3MGar.js";import{T as v}from"./Text-B8fPWk55.js";import"./IllustratedMessage-jOUyrsqT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D8FrEhfs.js";import"./mergeRefs-DjWFnZ8i.js";import"./index-Dlo5KsFa.js";import"./utils-B5Zvs6iw.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BPQdMqSt.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cf99fLdV.js";import"./useFocus-D52c6dYL.js";import"./useCollator-BEuuda2G.js";import"./context-CJ6VsYI4.js";import"./useLocalizedStringFormatter-D9xMhbzt.js";import"./Button-4h-pZrvY.js";import"./ProgressBar-CDKMY4TF.js";import"./Label-TO4TYfDU.js";import"./Hidden-e3oWxUP9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-8HeaTLIH.js";import"./useFocusRing-aMk3Od29.js";import"./useFocusable-CisfjoMT.js";import"./VisuallyHidden-DUQ-4ejS.js";import"./ContextMenuSection-D6Q4SYG2.js";import"./Action-BVHKAxgY.js";import"./context-u0ncZylp.js";import"./useStatic-DkYuQJEv.js";import"./browser-DnisE1zj.js";import"./getActionGroupSlot-BxRP9D0M.js";import"./dynamic-CQYecVWB.js";import"./Popover-D3VR88Of.js";import"./DialogTriggerView-DF7dHF7c.js";import"./RSPContexts-BLper1Pa.js";import"./ClearPropsContextView-D1vlL0dH.js";import"./useControlledState-D08Ut7L5.js";import"./FocusScope-CdIx8Nbp.js";import"./Collection-B0Ce4Su5.js";import"./CollectionBuilder-DJxxsJVb.js";import"./Separator-DlHAiOK1.js";import"./Group-Hjqv-RBg.js";import"./SearchField-CS1y3jZ7.js";import"./FieldError-CLAhwXWc.js";import"./Form-OgeH3cHd.js";import"./useTextField-B5q8s_6j.js";import"./useFormReset-Bo2I_rci.js";import"./TextField-DRuiN1lA.js";import"./useEvent-Kc6oznrN.js";import"./SelectionManager-B7qXDdFd.js";import"./Switch-B_ObCBU5.js";import"./Label-g6wSh2J1.js";import"./useToggleState-DJGQb4DY.js";import"./ColumnLayout-DAQOg9WY.js";import"./Avatar-B5slVf2v.js";import"./AlertIcon-COeLTDgS.js";import"./Image-D0EGEArU.js";import"./Link-Dxkzw8Tf.js";import"./ButtonView-CIVunr8-.js";import"./ContextMenuTriggerView-wXd9GcTU.js";import"./FieldError-Bs2voh_v.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-DoTPzDls.js";import"./Heading-C7p3IIcE.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-DkBtsyA4.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
