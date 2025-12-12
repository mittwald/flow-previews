import{r as x,j as e}from"./iframe-BDeBfZSP.js";import{H as t,q as d}from"./TimeField-Ne-c5KEy.js";import{S as u}from"./Section-D09FbpBR.js";import{F,b as f}from"./FileCardList-BChVNWmo.js";import{u as S,F as C,t as D}from"./Form-D-Maj7Xx.js";import{S as b}from"./ResetButton-CS1V5Fjr.js";import{B as g}from"./Button-Dbhe5AA0.js";import{A as y}from"./ActionGroup-BjwLyGgZ.js";import{_ as j,$ as B}from"./IconWarning-CWBVghBS.js";import{H as h}from"./Heading-iyX9InFB.js";import{T as O}from"./Text-DwrK8QpO.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-CInYH9Sb.js";import"./mergeRefs-Dw41Nq7Z.js";import"./index-CAU0MqbG.js";import"./clsx-B-dksMZM.js";import"./Accordion-CKUe20wM.js";import"./dynamic-BIVuw2Q_.js";import"./Alert-CPr2bDJb.js";import"./AlertIcon-CVet0SZ9.js";import"./useLocalizedStringFormatter-QrEcyOeW.js";import"./context-CmX5Cpay.js";import"./AlertBadge-rZGJwZqq.js";import"./Align-Bqyqg49a.js";import"./Popover-DNzPOg2i.js";import"./context-DWFXzaDB.js";import"./Button-Cfa7dut0.js";import"./utils-Byz_563U.js";import"./ProgressBar-W0aWvyTc.js";import"./Hidden-D2v2aeTK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-508WtmVR.js";import"./useFocusable-DTnDWSdy.js";import"./RSPContexts-BBQghKHL.js";import"./Collection-l4IMJ13J.js";import"./CollectionBuilder-CCh6UYnS.js";import"./SelectionIndicator-uDzrcrA1.js";import"./Separator-mHu8Ln7W.js";import"./browser--C_mCO56.js";import"./useStatic-CE8Y1Vmb.js";import"./OverlayTrigger-C0iwpCUS.js";import"./TableFooterRow-2U0_8Mem.js";import"./SkeletonText-BtXDjmAi.js";import"./Avatar-D2htOkNN.js";import"./AvatarStack-1PEAciH2.js";import"./Badge-KSMEjVCc.js";import"./BigNumber-BBSlAdO3.js";import"./Breadcrumb-B8GN1fPd.js";import"./Link-Bw9pb0v5.js";import"./Legend-BNJwDcp9.js";import"./Color-C5PdvckB.js";import"./Content-BA1XxLMk.js";import"./Label-B1LspQ1T.js";import"./ContextualHelpTrigger-BB5lI167.js";import"./CounterBadge-ClD-eDBX.js";import"./DonutChart-irBs7pBN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-JTtbrcXh.js";import"./Header-CGMIJvRh.js";import"./Image-3Q6tO5T-.js";import"./Initials-CKWxINwR.js";import"./InlineCode-D_o1vB8f.js";import"./PopoverTrigger-GXKodTVP.js";import"./LoadingSpinner-BWJul6BV.js";import"./Separator-B12pwKUV.js";import"./Message-Ct2DG7ID.js";import"./MessageSeparator-xtwtWMZH.js";import"./NavigationGroup-D4eFLegf.js";import"./Notification-lKPeWo9E.js";import"./NotificationProvider-sogPUx6w.js";import"./ProgressBar-CSjgGiiD.js";import"./Rating-FVo5ZswU.js";import"./Skeleton-CCjm6q3C.js";import"./EmulatedBoldText-3F_0W9mf.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
