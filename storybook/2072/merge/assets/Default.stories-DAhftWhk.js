import{r as x,j as e}from"./iframe-D_IiP5QF.js";import{H as t,q as d}from"./TimeField-D8SJmsIb.js";import{S as u}from"./Section-DN7xTxEc.js";import{F,b as f}from"./FileCardList-C_PuopUU.js";import{u as S,F as C,t as D}from"./Form-BMgHR3ch.js";import{S as b}from"./ResetButton-Didzh697.js";import{B as g}from"./Button-DslN622a.js";import{A as y}from"./ActionGroup-BXHZPnYY.js";import{_ as j,$ as B}from"./IconWarning-CeWNQ8u9.js";import{H as h}from"./Heading-DD9mIgnZ.js";import{T as O}from"./Text-DtkWnfcs.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-TH6V0sK9.js";import"./mergeRefs-Bp0aekJa.js";import"./index-BTEdBuyN.js";import"./clsx-B-dksMZM.js";import"./Accordion-BLud_gcY.js";import"./dynamic-0ssToOFv.js";import"./Alert-CAMU0sJf.js";import"./AlertIcon-CiVM0veU.js";import"./useLocalizedStringFormatter-Bl7QXKV0.js";import"./context-CzHIh5kC.js";import"./AlertBadge-DIoWGYfv.js";import"./Align-Dt5Z_tfD.js";import"./Popover-LH5uR-Ai.js";import"./context-DdWIe0N6.js";import"./Button-wMdqoBKT.js";import"./utils-BUDUz3oT.js";import"./ProgressBar-D214GkFL.js";import"./Hidden-zZrG9yI5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DHnNsPBr.js";import"./useFocusable-dF9VeguM.js";import"./RSPContexts-rRqbWPHZ.js";import"./Collection-Dl2pWzkI.js";import"./CollectionBuilder-BsunlkxQ.js";import"./SelectionIndicator-BdD8HwUv.js";import"./Separator-DWlmTG_C.js";import"./browser-Xi37Uwf1.js";import"./useStatic-D7hf1hLx.js";import"./OverlayTrigger-B9GYFSa8.js";import"./TableFooterRow-BLUBBtbs.js";import"./SkeletonText-Dp6bSbtZ.js";import"./Avatar-fgBKjcwX.js";import"./AvatarStack-DD1RlKSP.js";import"./Badge-CKHtuWwK.js";import"./BigNumber-QFeyc9Z7.js";import"./Breadcrumb-DTcVTg7F.js";import"./Link-1CuEWTvW.js";import"./Legend-EDbvCt-7.js";import"./Color-Daqpvuwq.js";import"./Content-C5HeRuSJ.js";import"./Label-CdaBbVbz.js";import"./ContextualHelpTrigger-Dpf2pUop.js";import"./CounterBadge-DZiQt8Xn.js";import"./DonutChart-D6ZAMqYo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CtlfmTig.js";import"./Header-DgvsXn7S.js";import"./Image-BxIb2zH6.js";import"./Initials-O7Qdz8vn.js";import"./InlineCode-BQGvjfc4.js";import"./PopoverTrigger-_UX04Jxf.js";import"./LoadingSpinner-DAahn8uY.js";import"./Separator-DlDRANMe.js";import"./Message-Ii4ctpYX.js";import"./MessageSeparator-BTKC9hrY.js";import"./NavigationGroup-BpmkmOoX.js";import"./Notification-BI6q-vGx.js";import"./NotificationProvider-BANQjypq.js";import"./ProgressBar-pgqNFsRb.js";import"./Rating-cGBPgfkq.js";import"./Skeleton-Bw8asRqa.js";import"./EmulatedBoldText-D1D5MzAW.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
