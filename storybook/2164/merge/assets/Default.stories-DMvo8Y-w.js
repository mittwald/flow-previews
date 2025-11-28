import{r as x,j as e}from"./iframe-CkyxEoEZ.js";import{H as t,q as d}from"./TimeField-BZTAf1Rn.js";import{S as u}from"./Section-0QWuRp4X.js";import{F,b as f}from"./FileCardList-XsPGsz9I.js";import{u as S,F as C,t as D}from"./Form-B1uNYjR5.js";import{S as b}from"./ResetButton-DObBVdV-.js";import{B as g}from"./Button-Ctvf1H7U.js";import{A as y}from"./ActionGroup-B7JelnG6.js";import{_ as j,$ as B}from"./IconWarning-dMO6L9mh.js";import{H as h}from"./Heading-D13PuJy-.js";import{T as O}from"./Text-Ct1nYKdY.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-C-fhLM-T.js";import"./mergeRefs-p12aeMPz.js";import"./index-tj7lgiAm.js";import"./clsx-B-dksMZM.js";import"./Accordion-BxonB-uS.js";import"./dynamic-ly6SdvXD.js";import"./Alert-BUzEngmi.js";import"./AlertIcon-D6QGpe3w.js";import"./useLocalizedStringFormatter-BjZwhmR3.js";import"./context-F9TznhPu.js";import"./AlertBadge-BNvXKuRH.js";import"./Align-BO6DQgEO.js";import"./Popover-Dfldgewc.js";import"./context-CmpACB2b.js";import"./Button-wjFvY1UY.js";import"./utils-BtOaQozS.js";import"./ProgressBar-x24Uteep.js";import"./Hidden-BZU7hI3a.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BGGtyEFa.js";import"./useFocusable-6nBl_79g.js";import"./RSPContexts-BIZJIOxy.js";import"./Collection-TWw2CUBu.js";import"./CollectionBuilder-DhRqM4RI.js";import"./SelectionIndicator-B6Bj9As3.js";import"./Separator-Bj8gDUdP.js";import"./browser-DbkHv7Lt.js";import"./useStatic-tbDjUfBM.js";import"./OverlayTrigger-D6oe3s8K.js";import"./TableFooterRow-CNbuKkPS.js";import"./SkeletonText-CEVIX2-T.js";import"./Avatar-D0H2dmKO.js";import"./AvatarStack-CtSwjrsk.js";import"./Badge-BK2EStVc.js";import"./BigNumber-BYTo6-GR.js";import"./Breadcrumb-DhR3tYVA.js";import"./Link-Dw6e5tPv.js";import"./Legend-BKnZAiJI.js";import"./Color-CPPo5i2D.js";import"./Content-BIHewrI8.js";import"./Label-BFGYnKsP.js";import"./ContextualHelpTrigger-DPjIfJLZ.js";import"./CounterBadge-BMYaxa9e.js";import"./DonutChart-NNGcOW5o.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-JYMlcMjm.js";import"./Header-DtTME8RG.js";import"./Image-B2EurRhj.js";import"./Initials-BTdrWQ8b.js";import"./InlineCode-BVXmyQuU.js";import"./PopoverTrigger-2QwCKC6i.js";import"./LoadingSpinner-Bjw5E-ZO.js";import"./Separator-CxqFRfwx.js";import"./Message-uh7LYwXZ.js";import"./MessageSeparator-DL9xrhQ0.js";import"./NavigationGroup-CtgReka-.js";import"./Notification-BatIqCje.js";import"./NotificationProvider-hfk6oSKV.js";import"./ProgressBar-gS-eWxDl.js";import"./Rating-Cnt-ukGO.js";import"./Skeleton-Bc0LedwX.js";import"./EmulatedBoldText-DT8aLwWG.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
