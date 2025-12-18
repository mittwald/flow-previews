import{r as x,j as e}from"./iframe-FgJ_J-H0.js";import{H as t,q as d}from"./TimeField-Co7GP2GW.js";import{S as u}from"./Section-KcKraSFk.js";import{F,b as f}from"./FileCardList-B85HNlbk.js";import{u as S,F as C,t as D}from"./Form-BVuPoSOi.js";import{S as b}from"./ResetButton-jFpFjYeg.js";import{B as g}from"./Button-DAV102-b.js";import{A as y}from"./ActionGroup-BJ9qHrpp.js";import{_ as j,$ as B}from"./IconWarning-CTwTuPoy.js";import{H as h}from"./Heading-CtwLqgxn.js";import{T as O}from"./Text-DFL3SoXQ.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-D4ZDxBE5.js";import"./mergeRefs-B0SFCKpc.js";import"./index-D5Q5r0EQ.js";import"./clsx-B-dksMZM.js";import"./Accordion-io5UELOJ.js";import"./dynamic-CcSJ2V2H.js";import"./Alert-9jMZJopr.js";import"./AlertIcon-B3uKWtQk.js";import"./useLocalizedStringFormatter-T_wC2jpb.js";import"./context-BdkCFUfw.js";import"./AlertBadge-H-rDyqf-.js";import"./Align-DmzMsv0T.js";import"./Popover-CMikV-wU.js";import"./context-Zd06eDB-.js";import"./Button-D1iDLFQk.js";import"./utils-CpAt2MQ0.js";import"./ProgressBar-C9bgo184.js";import"./Hidden-fZuF_gJA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DWyZOWS1.js";import"./useFocusable-CcMdE3Gl.js";import"./RSPContexts-BtQRbm6D.js";import"./Collection-DzrsfNpG.js";import"./CollectionBuilder-BkEo1yPT.js";import"./SelectionIndicator-DXbR8Lbk.js";import"./Separator-CEsI0Otd.js";import"./browser-DUTkZfBO.js";import"./useStatic-C1zZPFiS.js";import"./OverlayTrigger--5L_1U0w.js";import"./TableFooterRow-CtbyytXV.js";import"./SkeletonText-6QEWsZGr.js";import"./Avatar-ClmGh38b.js";import"./AvatarStack-D2Xx6Bnf.js";import"./Badge-Dr16W0CP.js";import"./BigNumber-Dk3uhm2m.js";import"./Breadcrumb-BzzlR0li.js";import"./Link-BTa1ooRS.js";import"./Legend-D3LNNeFG.js";import"./Color-Bp0ZXAXD.js";import"./Content-Gw2uLkjU.js";import"./Label-dIFs3d3H.js";import"./ContextualHelpTrigger-4SkGlWeV.js";import"./CounterBadge-BXJ7T0jf.js";import"./DonutChart-C4u46woz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BQ4xIGSR.js";import"./Header-DyVj_TzU.js";import"./Image-Dt2xjXWg.js";import"./Initials-Cm_DyWr3.js";import"./InlineCode-CZw0TC9N.js";import"./PopoverTrigger-CaH8hJY-.js";import"./LoadingSpinner-D-ZvoQWA.js";import"./Separator-lfjcoKvM.js";import"./Message-K29IWi_M.js";import"./MessageSeparator-DPflMeSl.js";import"./NavigationGroup-B5RjEnqs.js";import"./Notification-BfVd4W3J.js";import"./NotificationProvider-CQgaoiA5.js";import"./ProgressBar-DUshVboI.js";import"./Rating-C77bfPzz.js";import"./Skeleton-CN4c_iAv.js";import"./EmulatedBoldText-B0xGhkgA.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
