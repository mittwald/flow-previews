import{r as h,j as e}from"./iframe-DdApAMdB.js";import{F as t}from"./FileDropZone-jOXjqPmI.js";import{S as c}from"./Section-CHCYfAvd.js";import{F as d}from"./FileCardList-CnGNBRm3.js";import{F as u}from"./FileCard-CqMqMh47.js";import{u as O,F as T,t as _}from"./Form-BnKCjhff.js";import{B as s}from"./Button-BxqrW572.js";import{A as b}from"./ActionGroup-B9aosHGA.js";import{Y as x,Z as k}from"./IconWarning-Cpaydhok.js";import{H as F}from"./Heading-DcDMFNCx.js";import{F as f}from"./FileField-D3uRW0x0.js";import{T as U}from"./Text-BwGnDMAi.js";import"./IllustratedMessage-DfCUXSTj.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CEuVt76S.js";import"./mergeRefs-BvD6XTJo.js";import"./index-CmLMHji9.js";import"./utils-DAIXfBLw.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CGWbxphN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DpyWwSJM.js";import"./useFocus-D5He2YFW.js";import"./useCollator-DB6a0khr.js";import"./context-DR2Fzh74.js";import"./useLocalizedStringFormatter-TjZfQGwd.js";import"./Button-C9Xh5N71.js";import"./ProgressBar-Cc1yHw2d.js";import"./Label-kWZFrMix.js";import"./Hidden-BMg7stLw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DRRHPdfj.js";import"./useFocusRing-PbnZIDVe.js";import"./useFocusable-DBXoEHDs.js";import"./VisuallyHidden-DyxmrKqh.js";import"./ContextMenuSection-BSkJWNpm.js";import"./Action-CsdkjVM_.js";import"./context-ruD8SKGF.js";import"./useStatic-CD0TvTTa.js";import"./browser-Bz93nYTI.js";import"./getActionGroupSlot-w8JWX1Ad.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BpJkjD9u.js";import"./RSPContexts-BOrJeOok.js";import"./OverlayArrow-C4-25t1a.js";import"./useControlledState-BEGJzQOc.js";import"./Collection-DGYwVSuD.js";import"./CollectionBuilder-EIxRxNub.js";import"./Separator-S3NhCE8J.js";import"./Group-D5m3Hvm8.js";import"./SearchField-C5uNx_R9.js";import"./FieldError-CIX9Q6F5.js";import"./Form-EknBmRno.js";import"./useTextField-5LH3O4RW.js";import"./useFormReset-BHdeIf20.js";import"./TextField-DkSNZzFP.js";import"./useEvent-L4LWTqTI.js";import"./SelectionManager-CLIYI5bX.js";import"./FocusScope-CMXbBALw.js";import"./ColumnLayout-DrP0EYW4.js";import"./Avatar-CPnOomr_.js";import"./AlertIcon-BdCjdA2q.js";import"./Image-TOHI7GMH.js";import"./Link-AojgOwdW.js";import"./OptionsButton-DpKHH9Lu.js";import"./ButtonView-BT9EvhT6.js";import"./ContextMenuContent-UKv3SAnE.js";import"./Popover-7VI1iAFw.js";import"./DialogTriggerView-B0VPnPVc.js";import"./Switch-zso_e1PC.js";import"./Label-Yw88ZPyv.js";import"./useToggleState-C3iafE5U.js";import"./FieldError-D-Hf7sx5.js";import"./LoadingSpinner-BhKvcbL5.js";import"./Heading-nK46_57w.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BU0UeOKO.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
