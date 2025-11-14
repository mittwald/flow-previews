import{r as x,j as e}from"./iframe-C60aMdie.js";import{K as t,s as u}from"./Modal-BRLjWmcI.js";import{S as F}from"./Section-BTXSJ-5X.js";import{F as f,d as g}from"./FileCardList-CCCPEiGj.js";import{u as S,F as C,t as D}from"./Form-B7ahjlLL.js";import"./ResetButton-1riTIdIi.js";import{B as s}from"./Button-jX--b59C.js";import{A as y}from"./ActionGroup-pA_bsRMT.js";import{_ as j,$ as O}from"./IconWarning-B5fkZC-l.js";import{H as h}from"./Heading-DAaBZvd2.js";import{T as b}from"./Text-SUPQTMUT.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-CVq1BkmJ.js";import"./flowComponent-jCG2SJhp.js";import"./index-my9L9zM2.js";import"./index-CLR1PkMI.js";import"./context-DSrUG3BE.js";import"./Button-CvbHAn2i.js";import"./utils-BQFwVYY5.js";import"./ProgressBar-B_mDm1JC.js";import"./Hidden-BZIUhw-w.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CbOMBxRf.js";import"./useFocusRing-DC3IjPh5.js";import"./useFocusable-Dew49z7P.js";import"./RSPContexts-DTGtZjZs.js";import"./Collection-BnGKbvLc.js";import"./CollectionBuilder-CwoEUOyQ.js";import"./SelectionIndicator-DueQdBHH.js";import"./Separator-y5zzyFFC.js";import"./browser-CNA-G9XW.js";import"./useLocalizedStringFormatter-CwhdRj3j.js";import"./useStatic-vNm-dgAB.js";import"./LoadingSpinner-EerxDvmb.js";import"./LayoutCard-BHGne7SD.js";import"./Accordion-CKOAUBtf.js";import"./Alert-BJKw0QeS.js";import"./AlertIcon-C7zTMkoz.js";import"./AlertBadge-CnHLq6IR.js";import"./Align-BpStHQnP.js";import"./Avatar-B7kisHtJ.js";import"./AvatarStack-TfH6cSvv.js";import"./BigNumber-CCd4dY5q.js";import"./Breadcrumb-DsZIUq31.js";import"./Link-lNOdoot_.js";import"./Legend-C-QoQfEn.js";import"./Color-DYvyagNb.js";import"./TableFooterRow-Byf_2RJW.js";import"./SkeletonText-DqQ9EdbR.js";import"./Content-CEAhgMHe.js";import"./Label-CzVOnNLd.js";import"./CounterBadge-BSi8dS51.js";import"./DonutChart-DE-zhDub.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BTGMNUbe.js";import"./Header-CACiotaV.js";import"./Image-CXRwncHw.js";import"./Initials-CCakY2tg.js";import"./InlineCode-Cct-b4qD.js";import"./Separator-BSnGWgyT.js";import"./MessageSeparator-BdlWKUzt.js";import"./NavigationGroup-Bvrr1zmO.js";import"./Notification-CjMVwQai.js";import"./NotificationProvider-xKOj-JZj.js";import"./ControlledNotification-DflLvVYg.js";import"./ProgressBar-BQfUYYSR.js";import"./Rating-CqYV9FLO.js";import"./Skeleton-CYpMvI04.js";import"./getActionGroupSlot-CdLyQOZc.js";import"./EmulatedBoldText-gDNBGAzw.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Ne={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(h,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
