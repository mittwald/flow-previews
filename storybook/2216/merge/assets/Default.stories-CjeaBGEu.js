import{r as x,j as e}from"./iframe-Y3MbZLc0.js";import{H as t,q as d}from"./TimeField-CWtTlsNI.js";import{S as u}from"./Section-DS5qZGJz.js";import{F,b as f}from"./FileCardList-BkZP918B.js";import{u as S,F as C,t as D}from"./Form-C2GjutEv.js";import{S as b}from"./ResetButton-DojbpFgr.js";import{B as g}from"./Button-C-4kPg6X.js";import{A as y}from"./ActionGroup-DetklLoF.js";import{_ as j,$ as B}from"./IconWarning-B3PcMPJB.js";import{H as h}from"./Heading-CVXAzirZ.js";import{T as O}from"./Text-C_4wJYC6.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-DOjZhm--.js";import"./mergeRefs-CRQZITIl.js";import"./index-CsLL2H6p.js";import"./clsx-B-dksMZM.js";import"./Accordion-C3ab7gKh.js";import"./dynamic-D67dccmA.js";import"./Alert-DGdBp0Eo.js";import"./AlertIcon-CV8NrYRI.js";import"./useLocalizedStringFormatter-6lIKSxih.js";import"./context-CS7ddlXF.js";import"./AlertBadge-BQxMpKlM.js";import"./Align-BI2gFG3T.js";import"./Popover-DQwwR1G3.js";import"./context-Bj7ZL7Rk.js";import"./Button-kcvbJBhw.js";import"./utils-DRnq9lS5.js";import"./ProgressBar-B7UD30wQ.js";import"./Hidden-pCjGcrow.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BPUGHIMZ.js";import"./useFocusable-DuA910js.js";import"./RSPContexts-q4i_V3tQ.js";import"./Collection-DMnM_9G9.js";import"./CollectionBuilder-B_T5ko0u.js";import"./SelectionIndicator-BaXUje1t.js";import"./Separator-BiaSXazW.js";import"./browser-BiLdcyq-.js";import"./useStatic-DqJeeTMW.js";import"./OverlayTrigger-DWI1tl1b.js";import"./TableFooterRow-WmviDJs1.js";import"./SkeletonText-D89UTzJX.js";import"./Avatar-ClOnDFiI.js";import"./AvatarStack-LuIFslnX.js";import"./Badge-sRwXs_wN.js";import"./BigNumber-B2Z2Bi5y.js";import"./Breadcrumb-OZ807_4G.js";import"./Link-Dl5kPNf7.js";import"./Legend-U_MA1DUY.js";import"./Color-BW8N49ms.js";import"./Content-NPMXk3zl.js";import"./Label-D2MFjXEF.js";import"./ContextualHelpTrigger-k9oKfs6T.js";import"./CounterBadge-ElqKVlu2.js";import"./DonutChart-CfanPbqv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-H20k2GzK.js";import"./Header-6_4AGJd2.js";import"./Image-DljHCxEH.js";import"./Initials-rKtrsRfb.js";import"./InlineCode-C13LZBrn.js";import"./PopoverTrigger-7Z8GTvAL.js";import"./LoadingSpinner-6Ne33LZp.js";import"./Separator-CfxO9pZu.js";import"./Message-BuSi_X0q.js";import"./MessageSeparator-DkBtqTdi.js";import"./NavigationGroup-BWGcL5Rx.js";import"./Notification-CsliJkcB.js";import"./NotificationProvider-amexuwTh.js";import"./ProgressBar-Dct_JOoN.js";import"./Rating-DUI-p2zk.js";import"./Skeleton-CH0G6v9C.js";import"./EmulatedBoldText-C3IQk-9R.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <SubmitButton>Upload</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const ze=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,l as ReadOnly,m as WithAcceptedTypes,c as WithReactHookForm,ze as __namedExportsOrder,$e as default};
