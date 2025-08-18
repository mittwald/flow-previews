import{r as h,j as e}from"./iframe-ANbYZxYh.js";import{F as t}from"./FileDropZone-DhvLqUog.js";import{S as c}from"./Section-BZ3Pd5oL.js";import{F as d}from"./FileCardList-BxJ5Bt2T.js";import{F as u}from"./FileCard-D8sOTdvq.js";import{u as T,F as Z,t as _}from"./Form-CUUGX5XA.js";import{B as s}from"./Button-BrOgS8k0.js";import{A as b}from"./ActionGroup-DiWnJNYa.js";import{$ as x,a0 as k}from"./IconWarning-DS7IkYNL.js";import{H as F}from"./Heading-HyKLii1m.js";import{F as f}from"./FileField-DFnfJQ-g.js";import{T as U}from"./Text-M71Ue6Ol.js";import"./IllustratedMessage-DEUOj3Vu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bh9sJwp9.js";import"./mergeRefs-C7E84bFC.js";import"./index-sj9Kgwl7.js";import"./utils-Cy_MvyB4.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DtPhrSvp.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BSgApQcW.js";import"./useFocus-TkuOvp2H.js";import"./useCollator-CfSYVQsJ.js";import"./context-C29UMt2a.js";import"./useLocalizedStringFormatter-CwJnm8Gm.js";import"./Button-pW7XEr-A.js";import"./ProgressBar-D0pevNPv.js";import"./Label-DHVn08UY.js";import"./Hidden-CKPTgp3M.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-YyV1OQc2.js";import"./useFocusRing-CdWhuOPm.js";import"./useFocusable-Do5j3Niz.js";import"./VisuallyHidden-Dkqu2xa7.js";import"./ContextMenuSection-CEfz6G3k.js";import"./Action-BWJuvjrq.js";import"./context-XBkMChDn.js";import"./useStatic-C8P39Z3X.js";import"./browser-DiQDtMf4.js";import"./getActionGroupSlot-3JUuJVM4.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DAXXYblm.js";import"./RSPContexts-BF3izYoh.js";import"./OverlayArrow-DdhXoA2p.js";import"./useControlledState-qP1KlDsL.js";import"./Collection-CGyTBmm7.js";import"./CollectionBuilder-NhL74RvZ.js";import"./Separator-C5R7VkmP.js";import"./Group-BbZVKWqc.js";import"./SearchField-CA0soI3_.js";import"./FieldError-8FwQObi_.js";import"./Form-BzuKHEmj.js";import"./useTextField-CrHHZhdf.js";import"./useFormReset-DK8My9j5.js";import"./TextField-Cq94faz6.js";import"./useEvent-C-0WgXZh.js";import"./SelectionManager-CqcRxmrm.js";import"./FocusScope-DrloOZeI.js";import"./ColumnLayout-Bpz0orEZ.js";import"./Avatar-BsykyrP7.js";import"./AlertIcon-DmoCOPFh.js";import"./Image-Dzg0f6Ui.js";import"./Link-DLKz_OAZ.js";import"./OptionsButton-B3Yg-ezj.js";import"./ButtonView-Dk-JHmOW.js";import"./ContextMenuContent-Biq-vMEH.js";import"./Popover-DMYIjMJ2.js";import"./DialogTriggerView--0vIXGZw.js";import"./Switch-DsLeUz2O.js";import"./Label-BNGIQ-CZ.js";import"./useToggleState-3cw7fq7U.js";import"./FieldError-CknxTZ0z.js";import"./LoadingSpinner-BalYmqav.js";import"./Heading-wmOcPSW7.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-D7XMT75r.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=T(),i=_();return e.jsxs(Z,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,I,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
