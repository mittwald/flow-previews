import{r as x,j as e}from"./iframe-DjQX0xu7.js";import{K as t,s as u}from"./Modal-BBNlMVze.js";import{S as F}from"./Section-Cz82PiQz.js";import{F as f,d as g}from"./FileCardList-DoyIp-u1.js";import{u as S,F as C,t as D}from"./Form-CyljT57u.js";import"./ResetButton-DgCPLW6j.js";import{B as s}from"./Button-BzgEBlcG.js";import{A as y}from"./ActionGroup-BSKw1FYv.js";import{_ as j,$ as O}from"./IconWarning-BuswXrVR.js";import{H as h}from"./Heading-Ek-NbzZ5.js";import{T as b}from"./Text-CBF9Mq5x.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-22J8cjb3.js";import"./flowComponent-JYU8T0At.js";import"./index-Cs3FvKNT.js";import"./index-C69E--h5.js";import"./context-B6Z8BqUC.js";import"./Button-BjLxB9ET.js";import"./utils-C30iJzW5.js";import"./ProgressBar-CCJkQYvg.js";import"./Hidden-DiDVenMv.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-D5QUCTp7.js";import"./useFocusRing-UFpAQC1c.js";import"./useFocusable-DfpRXFuB.js";import"./RSPContexts-DSRMecLI.js";import"./Collection-9mWjKSNJ.js";import"./CollectionBuilder-DGVbcN1s.js";import"./SelectionIndicator-BCys4Qq1.js";import"./Separator-B8K4J-Om.js";import"./browser-BHlZuLqI.js";import"./useLocalizedStringFormatter-DeqRUlGI.js";import"./useStatic-QbJcOryG.js";import"./LoadingSpinner-CySWmfRx.js";import"./Flex-Rh0qQGjv.js";import"./Accordion-cPVhBb9_.js";import"./Alert-DEAo5TA3.js";import"./AlertIcon-BUEZz4zv.js";import"./AlertBadge-CjbbHl0v.js";import"./Align-BIiffU6n.js";import"./Avatar-CD-JtxxQ.js";import"./AvatarStack-CWGa8hd6.js";import"./BigNumber-D2hG44RZ.js";import"./Breadcrumb-Cv5Q03Ns.js";import"./Link-CkG0aVzf.js";import"./Legend-IlVWPDZR.js";import"./Color-Cv9cJ5fh.js";import"./TableFooterRow-CtfTvciP.js";import"./SkeletonText-CuL7hCDf.js";import"./Content-C8r-jMKP.js";import"./Label-DwpG6CHQ.js";import"./CounterBadge-Cln_B5dZ.js";import"./DonutChart-CeYVkmS5.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CDOd4Rmd.js";import"./Header-D6EurdOg.js";import"./Image-BrUNo-p1.js";import"./Initials-CZh9PsXN.js";import"./InlineCode-D-2oy3Ir.js";import"./LayoutCard-F3d117j-.js";import"./Separator-DfIOpBez.js";import"./MessageSeparator-BtlLyxAF.js";import"./NavigationGroup-BlAMWir7.js";import"./Notification-3EcIdYeY.js";import"./NotificationProvider-jYqbFyZ7.js";import"./ControlledNotification-BMFbIoKB.js";import"./ProgressBar-O_f2my1S.js";import"./Rating-5sVy98qX.js";import"./Skeleton-jyWQALH6.js";import"./EmulatedBoldText-C8hbjTYh.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Ne={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(h,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
