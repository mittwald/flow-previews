import{r as x,j as e}from"./iframe-ALQ5zsOr.js";import{H as t,q as d}from"./TimeField-BGaFn9l6.js";import{S as u}from"./Section-Bs1N8UQx.js";import{F,b as f}from"./FileCardList-Dr6bdZn3.js";import{u as S,F as C,t as D}from"./Form-BSuNEw67.js";import{S as b}from"./ResetButton-C9Qwvy6d.js";import{B as g}from"./Button-BX6tjTLL.js";import{A as y}from"./ActionGroup-CwDRFfGd.js";import{_ as j,$ as B}from"./IconWarning-e5IJmYa2.js";import{H as h}from"./Heading-D0DtiPxo.js";import{T as O}from"./Text-CARFdFUA.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-CajZDkla.js";import"./mergeRefs-DuV0Rexf.js";import"./index-D7ydgW4V.js";import"./clsx-B-dksMZM.js";import"./Accordion-BUE91It4.js";import"./dynamic-0GSV0qwf.js";import"./Alert-DYosH7oc.js";import"./AlertIcon-CfY0Fdcx.js";import"./useLocalizedStringFormatter-D3jE5yaH.js";import"./context-kp7gAgjv.js";import"./AlertBadge-XCHqrboo.js";import"./Align-BPEmxHoH.js";import"./Popover-uPtwk0G7.js";import"./context-DQRC5U0a.js";import"./Button-CMqrvij-.js";import"./utils-Co6jRk79.js";import"./ProgressBar-Be_QMw9N.js";import"./Hidden-BWCTvshd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CKtfjksp.js";import"./useFocusable-Cd2GyxLR.js";import"./RSPContexts-CUYinsO9.js";import"./Collection-DLxcLWTn.js";import"./CollectionBuilder-C5lgjdY8.js";import"./SelectionIndicator-DGcgd3ZA.js";import"./Separator-C_CbFzxr.js";import"./browser-BKuntv9s.js";import"./useStatic-5go3Gdxn.js";import"./OverlayTrigger-BGEoP9rw.js";import"./TableFooterRow-D1lPZp5u.js";import"./SkeletonText-w2TDxcrn.js";import"./Avatar-QqNm7BCQ.js";import"./AvatarStack-M9qsVSFW.js";import"./Badge-pH50ychv.js";import"./BigNumber-BLN-CZJ3.js";import"./Breadcrumb-BbJLeIhI.js";import"./Link-C8aOLutX.js";import"./Legend-CwaE3KaX.js";import"./Color-97yNqHhE.js";import"./Content-D5LTnoQh.js";import"./Label-DovPcrx0.js";import"./ContextualHelpTrigger-QzT4JqfM.js";import"./CounterBadge-8qsknsn0.js";import"./DonutChart-BZDaYje8.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C3I35rk-.js";import"./Header-BmFuB9FK.js";import"./Image-CBcw_AfH.js";import"./Initials-GjCQVizr.js";import"./InlineCode-AnZuJLOL.js";import"./PopoverTrigger-Cfi7p5HS.js";import"./LoadingSpinner-vZR7mZ_m.js";import"./Separator-DUxRAwFB.js";import"./Message-evw6xdzh.js";import"./MessageSeparator-Cu_84WKB.js";import"./NavigationGroup-j5bwk659.js";import"./Notification-BFFQhJkq.js";import"./NotificationProvider-nOh3LXem.js";import"./ProgressBar-C-_9cUNc.js";import"./Rating-DC-OgzhD.js";import"./Skeleton-B9JjKPfi.js";import"./EmulatedBoldText-BY9TtX8n.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
