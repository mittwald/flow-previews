import{r as x,j as e}from"./iframe-D29QVi29.js";import{H as t,q as d}from"./TimeField-lp3G4cvL.js";import{S as u}from"./Section-N6-W-jGX.js";import{F,b as f}from"./FileCardList-o4UnmRGi.js";import{u as S,F as C,t as D}from"./Form-NpVZHmv0.js";import{S as b}from"./ResetButton-4cumsBRi.js";import{B as g}from"./Button-BqO8ZFSe.js";import{A as y}from"./ActionGroup-DBGYrkNa.js";import{_ as j,$ as B}from"./IconWarning-qRr2EWc4.js";import{H as h}from"./Heading-DViBSNIF.js";import{T as O}from"./Text-BTGWwOlA.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-Di3M49gZ.js";import"./mergeRefs-Dxk1BzaE.js";import"./index-CR8Graxx.js";import"./clsx-B-dksMZM.js";import"./Accordion-pcyhtlWY.js";import"./dynamic-BIIctUHv.js";import"./Alert-ktnaCpLp.js";import"./AlertIcon-kk-UzcPM.js";import"./useLocalizedStringFormatter-Bqmt488r.js";import"./context-qGV7OOPv.js";import"./AlertBadge-BD8zfIUZ.js";import"./Align-BtSVJIfv.js";import"./Popover-0dSAyS70.js";import"./context-i3-N7LSR.js";import"./Button-x1GyynEX.js";import"./utils-V6v5WZV5.js";import"./ProgressBar-1j73270Z.js";import"./Hidden-DYWDaDdl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BTna3mEs.js";import"./useFocusable-DTRRpH6w.js";import"./RSPContexts-7wLun1z_.js";import"./Collection-BnP1T9jt.js";import"./CollectionBuilder-DjTeQogG.js";import"./SelectionIndicator-T7jZrYkx.js";import"./Separator-CwRYG8QD.js";import"./browser-CsgOcZeL.js";import"./useStatic-lipZmjhB.js";import"./OverlayTrigger-BRRbGelm.js";import"./TableFooterRow-CA8NF4Dq.js";import"./SkeletonText-DmNXdtlf.js";import"./Avatar-DdRZEOpi.js";import"./AvatarStack-ByHEeQa7.js";import"./Badge-CVEppqDk.js";import"./BigNumber-Bg1ofazi.js";import"./Breadcrumb-BF3l43g2.js";import"./Link-BjYhTK1P.js";import"./Legend-9054_P7x.js";import"./Color-B_L_jSYT.js";import"./Content-4wsi0omc.js";import"./Label-7gHNx5q_.js";import"./ContextualHelpTrigger-BZZdrkgN.js";import"./CounterBadge-B6vj9Dqf.js";import"./DonutChart-48XA97RY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CFBYRPqa.js";import"./Header-5t7o3Hne.js";import"./Image-BxoMCQ1N.js";import"./Initials-C20rNA0F.js";import"./InlineCode-CkOTYzGC.js";import"./PopoverTrigger-lEvm5luT.js";import"./LoadingSpinner-BK6n1zCV.js";import"./Separator-CUu_rnx_.js";import"./Message-CK6j6Y0e.js";import"./MessageSeparator-ZDTmypgR.js";import"./NavigationGroup-DpBlg96L.js";import"./Notification-CY5CezJs.js";import"./NotificationProvider-DYLCryBZ.js";import"./ProgressBar-DePOjU9y.js";import"./Rating-BloKNl8U.js";import"./Skeleton-CpVZIb00.js";import"./EmulatedBoldText-C5bjRzZR.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
