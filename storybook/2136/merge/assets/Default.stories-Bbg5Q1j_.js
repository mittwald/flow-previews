import{r as x,j as e}from"./iframe-DBiC_ZnR.js";import{K as t,s as u}from"./Modal-CFT07oZI.js";import{S as F}from"./Section-PPvrLtVe.js";import{F as f,d as g}from"./FileCardList-BQ0PrUKt.js";import{u as S,F as C,t as D}from"./Form-C3u-uCnC.js";import"./ResetButton-Cmae_FUB.js";import{B as s}from"./Button-Dz2v4SBO.js";import{A as y}from"./ActionGroup-D-mz5Ka-.js";import{_ as j,$ as O}from"./IconWarning-CK2ZGKNK.js";import{H as h}from"./Heading-DAHW42f0.js";import{T as b}from"./Text-BcLTITKQ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-CtV33ye2.js";import"./flowComponent-D0XIYrNX.js";import"./index-Bp9tFnUt.js";import"./index-CVV0Ew5-.js";import"./context-BMyT49yV.js";import"./Button-L3lWig61.js";import"./utils-DtstTdJR.js";import"./ProgressBar-DmZeIXpS.js";import"./Hidden-Dw7083pg.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-7Lcog2P0.js";import"./useFocusRing-DtYok8JN.js";import"./useFocusable-CIN_gk5Z.js";import"./RSPContexts-BN9qRqww.js";import"./Collection-CSHv5Add.js";import"./CollectionBuilder-Bq-WlyGC.js";import"./SelectionIndicator-CqAhSFEy.js";import"./Separator-CJkt4YbH.js";import"./browser-DU6w9x_W.js";import"./useLocalizedStringFormatter-D7iDpTHP.js";import"./useStatic-DEZxNC-q.js";import"./LoadingSpinner-TzV_vALb.js";import"./LayoutCard-DujkBG9b.js";import"./Accordion-BPGdA9fR.js";import"./Alert-D-T0L3mL.js";import"./AlertIcon-_-sw5S_n.js";import"./AlertBadge-hinnerB-.js";import"./Align-bv03_ePf.js";import"./Avatar-BwVc0hzE.js";import"./AvatarStack-BuYJ-fes.js";import"./BigNumber-CBIvAU_0.js";import"./Breadcrumb-B-xNS-GU.js";import"./Link-D0ngLqvb.js";import"./Legend-ByhIQaF3.js";import"./Color-CORewqWi.js";import"./TableFooterRow-BbDFkWI7.js";import"./SkeletonText-CiTXgN5i.js";import"./Content-CsyIBpFy.js";import"./Label-xzCvdkIk.js";import"./CounterBadge-DytJIUgP.js";import"./DonutChart-D3VLTo_J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C4HRucEG.js";import"./Header-DKDAJOov.js";import"./Image-D5b2Er5_.js";import"./Initials-BFBRnihA.js";import"./InlineCode-Bt3wPgje.js";import"./Separator-BeLwNHQN.js";import"./MessageSeparator-_4Z2k_CE.js";import"./NavigationGroup-CjgLGw0v.js";import"./Notification-GKnJp8ZA.js";import"./NotificationProvider-DzFmVfpi.js";import"./ControlledNotification-BYDi47LJ.js";import"./ProgressBar-2UwBkw3O.js";import"./Rating-DLMdLSIQ.js";import"./Skeleton-BBSK6hjL.js";import"./getActionGroupSlot-CAWRcoDx.js";import"./EmulatedBoldText-ClmR1Uhh.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Ne={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(h,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Pe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Pe as __namedExportsOrder,Ne as default};
