import{r as x,j as e}from"./iframe-C3akzpV1.js";import{H as t,q as d}from"./TimeField-DAn-563Z.js";import{S as u}from"./Section-5SrLYku3.js";import{F,b as f}from"./FileCardList-DVpuYyK9.js";import{u as S,F as C,t as D}from"./Form-BBUfMwJH.js";import{S as b}from"./ResetButton-DcYUQMlr.js";import{B as g}from"./Button-C_UT-1QU.js";import{A as y}from"./ActionGroup-BTjiPvx2.js";import{_ as j,$ as B}from"./IconWarning-C4SgI6OV.js";import{H as h}from"./Heading-Dx6berQj.js";import{T as O}from"./Text-ItbFkn--.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-DqwY9XEq.js";import"./mergeRefs-BXY85axa.js";import"./index-BSfx5kph.js";import"./clsx-B-dksMZM.js";import"./Accordion-CnycAhcp.js";import"./dynamic-O2zPY50D.js";import"./Alert-DSPCig_4.js";import"./AlertIcon-KuJe6yIM.js";import"./useLocalizedStringFormatter-BXg2U2e2.js";import"./context-BgN9eCaX.js";import"./AlertBadge-DKJSIQMi.js";import"./Align-CXBZBCXD.js";import"./Popover-Ds9ANfz7.js";import"./context-CfnX_riS.js";import"./Button-D5o5rXyo.js";import"./utils-FFzu0Pw2.js";import"./ProgressBar-72_GXUSH.js";import"./Hidden-Bcrhq7St.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DQs4OSUU.js";import"./useFocusable-CC2L6-Hl.js";import"./RSPContexts-DVc_zOA3.js";import"./Collection-DTGfPiJx.js";import"./CollectionBuilder-BExMR5Fd.js";import"./SelectionIndicator-B2cJMogF.js";import"./Separator-C1Ah5vxC.js";import"./browser-mTtOjkkJ.js";import"./useStatic-DFnfS72f.js";import"./OverlayTrigger-BeAJLsRg.js";import"./TableFooterRow-DBL3SUB0.js";import"./SkeletonText-CSIMGEyC.js";import"./Avatar-CfRfmXe3.js";import"./AvatarStack-DoZxY-NC.js";import"./Badge-A9sRZW6O.js";import"./BigNumber-DDJD3MBR.js";import"./Breadcrumb-Cdr0vGx4.js";import"./Link-Yn6v2d1m.js";import"./Legend-D_mPT_Dz.js";import"./Color-C0tW3a4A.js";import"./Content-D_Dg4gNK.js";import"./Label-DuiJLVmM.js";import"./ContextualHelpTrigger-B4NbXTkX.js";import"./CounterBadge-2MxVkVfw.js";import"./DonutChart-DDZkVGZJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DQeVhZkV.js";import"./Header-P2jmXQ5Q.js";import"./Image-dY_1AQAY.js";import"./Initials-CcNlP_Ax.js";import"./InlineCode-kLchHmKQ.js";import"./PopoverTrigger-DBjbYvg8.js";import"./LoadingSpinner-DNlomGtB.js";import"./Separator-B02tK38r.js";import"./Message-DJdW1Dm_.js";import"./MessageSeparator-Ckz-pkPt.js";import"./NavigationGroup-G3mKXWuk.js";import"./Notification-Bn7dQSYD.js";import"./NotificationProvider-RbXQAcKo.js";import"./ProgressBar-BfOMQEaa.js";import"./Rating-DL9Taqdj.js";import"./Skeleton-sg2lGCG1.js";import"./EmulatedBoldText-B3LO_M0J.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
