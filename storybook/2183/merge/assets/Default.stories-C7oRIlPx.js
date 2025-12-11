import{r as x,j as e}from"./iframe-Bo-CC4om.js";import{H as t,q as d}from"./TimeField-C-GOyraa.js";import{S as u}from"./Section-BSzb61PI.js";import{F,b as f}from"./FileCardList-Ns0-bzlM.js";import{u as S,F as C,t as D}from"./Form-BUpNurWq.js";import{S as b}from"./ResetButton-CBw-4Fdn.js";import{B as g}from"./Button-DsbAYxy6.js";import{A as y}from"./ActionGroup-DmuV-_zy.js";import{Z as j,_ as B}from"./IconWarning-B7qIXHf5.js";import{H as h}from"./Heading-BHjCTnZi.js";import{T as O}from"./Text-FWtYFqa_.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-JVmwHNwK.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./clsx-B-dksMZM.js";import"./Accordion-9Le9yhf_.js";import"./dynamic-DI9mkNr1.js";import"./Alert-Dt_4j8QW.js";import"./AlertIcon-mGxxCUjy.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./context-DUzMMmSG.js";import"./AlertBadge-BIsElKxu.js";import"./Align-2Rvfe-vL.js";import"./Popover-CuQlxumw.js";import"./context-Dp75aXTI.js";import"./Button-DEzwtm5X.js";import"./utils-BE4vzmGc.js";import"./ProgressBar-1VAtpU2v.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";import"./RSPContexts-BIpJdst2.js";import"./Collection-D6MbkC5o.js";import"./CollectionBuilder-B0V3ZRNt.js";import"./SelectionIndicator-BLd_vFKr.js";import"./Separator-BoV_7H5z.js";import"./browser-CQUdwXOL.js";import"./useStatic-CUzdYRpB.js";import"./OverlayTrigger-CdAPQ6Lz.js";import"./TableFooterRow-rYWUUYPE.js";import"./SkeletonText-Cawt_Liw.js";import"./Avatar-DZgOazPv.js";import"./AvatarStack-CK7V-CZy.js";import"./Badge-KHAUUQ1g.js";import"./BigNumber-BPcM1V5W.js";import"./Breadcrumb-BdPm70-C.js";import"./Link-Cjmbqaeu.js";import"./Legend-BJJJjizN.js";import"./Color-B9W2SphA.js";import"./Content-DkmAOWWJ.js";import"./Label-DRQE_3kZ.js";import"./ContextualHelpTrigger-qV88HZ0Q.js";import"./CounterBadge-DrxirSEd.js";import"./remote-B4cOsRJO.js";import"./DonutChart-r4Ym1MHi.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvV3W6_m.js";import"./Header-DX79Odlg.js";import"./Image-DWyBIzwU.js";import"./Initials-c31qSACO.js";import"./InlineCode-WgY9VQ0d.js";import"./PopoverTrigger--EGMIntl.js";import"./LoadingSpinner-U2Qf3euF.js";import"./Separator-Tuz6Qj0k.js";import"./Message-DwvTL-MT.js";import"./MessageSeparator-BmmOSADd.js";import"./NavigationGroup-BfArZJF_.js";import"./Notification-CxiWXGjP.js";import"./NotificationProvider-ev7yt2lS.js";import"./ProgressBar-Y54IGAK3.js";import"./Rating-D6chMOWs.js";import"./Skeleton-Bnf_ayGA.js";import"./EmulatedBoldText-DaZX5sg6.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,Je={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Qe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,l as ReadOnly,m as WithAcceptedTypes,c as WithReactHookForm,Qe as __namedExportsOrder,Je as default};
