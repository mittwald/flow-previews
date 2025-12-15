import{r as x,j as e}from"./iframe-Br-RCPWN.js";import{H as t,q as d}from"./TimeField-BGRSwV-o.js";import{S as u}from"./Section-DJ8xVnwh.js";import{F,b as f}from"./FileCardList-Cr1bdGd9.js";import{u as S,F as C,t as D}from"./Form-DEqxISVK.js";import{S as b}from"./ResetButton-bLd0bg_q.js";import{B as g}from"./Button-D54g6t8r.js";import{A as y}from"./ActionGroup-Br-HBLHh.js";import{Z as j,_ as B}from"./IconWarning-C1NRfwVV.js";import{H as h}from"./Heading-BOVN6eFE.js";import{T as O}from"./Text-CIylET5F.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-CSAj95jw.js";import"./mergeRefs-DP0fvyvw.js";import"./index-DO8vOkwc.js";import"./clsx-B-dksMZM.js";import"./Accordion-hQD9PfV1.js";import"./dynamic-CeRu270G.js";import"./Alert-Bb_4C7nc.js";import"./AlertIcon-Ci_dM1ct.js";import"./useLocalizedStringFormatter-DcURVzAt.js";import"./context-Bc5k9Bh6.js";import"./AlertBadge-DZwGkMpO.js";import"./Align-DfN4ymbR.js";import"./Popover-QdAZ89s_.js";import"./context-De-RWUql.js";import"./Button-CoaZdKpJ.js";import"./utils-Dak_ECAp.js";import"./ProgressBar-DLYSkAPs.js";import"./Hidden-BWng0Hd6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-kD3u5y5H.js";import"./useFocusable-B6Sg882a.js";import"./RSPContexts-CI5k95q6.js";import"./Collection-DW1fpUON.js";import"./CollectionBuilder-BjAB2jGU.js";import"./SelectionIndicator-H4UlTQ5u.js";import"./Separator-WgOMTL7q.js";import"./browser-Dyp86VHf.js";import"./useStatic-eGeAE8fm.js";import"./OverlayTrigger-D0y2BIl1.js";import"./TableFooterRow--YVmAQJL.js";import"./SkeletonText-DH8cB97o.js";import"./Avatar-CQV4Pag9.js";import"./AvatarStack-mpuF30DC.js";import"./Badge-AGFHXSuV.js";import"./BigNumber-BKnsR0fX.js";import"./Breadcrumb-Dn0ZcgHN.js";import"./Link-Cd6zxchg.js";import"./Legend-m_Z_E65H.js";import"./Color-BM0XuHzd.js";import"./Content-B9XeZb2J.js";import"./Label-BJkXaCeQ.js";import"./ContextualHelpTrigger-DYkgoDVG.js";import"./CounterBadge-CiNfB30V.js";import"./remote-Bo4xuhzH.js";import"./DonutChart-BSut2oKM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-jxwvzdOg.js";import"./Header-q2hXiR9Q.js";import"./Image-CX8OimUo.js";import"./Initials-2ZjSAOrE.js";import"./InlineCode-vkQ-McU7.js";import"./PopoverTrigger-B_oYUYip.js";import"./LoadingSpinner-B0xf-tui.js";import"./Separator-DOub_aiP.js";import"./Message-DH3zGPpQ.js";import"./MessageSeparator-Bc8NECux.js";import"./NavigationGroup-Buu17kA2.js";import"./Notification-B1zm2nBo.js";import"./NotificationProvider-h_8RrIcw.js";import"./ProgressBar-Di15BDR2.js";import"./Rating-BAfMiDeC.js";import"./Skeleton-NDiigi_I.js";import"./EmulatedBoldText-DiJCrkGJ.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,Je={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
