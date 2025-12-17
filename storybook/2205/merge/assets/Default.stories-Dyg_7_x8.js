import{r as x,j as e}from"./iframe-CH4VWYyw.js";import{H as t,q as d}from"./TimeField-dOwLdr3y.js";import{S as u}from"./Section-BYSnoqOE.js";import{F,b as f}from"./FileCardList-ULRzupE2.js";import{u as S,F as C,t as D}from"./Form-DhAh92Ur.js";import{S as b}from"./ResetButton-tdrhhcNt.js";import{B as g}from"./Button-CMjimR4T.js";import{A as y}from"./ActionGroup-DDR3DkjN.js";import{_ as j,$ as B}from"./IconWarning-CUVmf0iP.js";import{H as h}from"./Heading-luYK-1U3.js";import{T as O}from"./Text-DppnPY0e.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-RGeJUgUt.js";import"./mergeRefs--_CTko6t.js";import"./index-FoM_NaoT.js";import"./clsx-B-dksMZM.js";import"./Accordion-BejuHqQb.js";import"./dynamic-BXkfH89u.js";import"./Alert-CaRi4XO8.js";import"./AlertIcon-DXRGAj5W.js";import"./useLocalizedStringFormatter-BgdA6BoT.js";import"./context-C0jF3YAi.js";import"./AlertBadge-DfbHta5f.js";import"./Align-Cq_IfJO_.js";import"./Popover-Ca49wibL.js";import"./context-DhFeNNrI.js";import"./Button-C7FjL3VL.js";import"./utils-B0RtSKxF.js";import"./ProgressBar-BTQp98g0.js";import"./Hidden-CDEXgFqV.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DRFwXyGM.js";import"./useFocusable-Au-ZLUmf.js";import"./RSPContexts-COBXgLKc.js";import"./Collection-L1fG0_vq.js";import"./CollectionBuilder-DHEE--Pj.js";import"./SelectionIndicator-Cmg6-Pdp.js";import"./Separator-88La-8FT.js";import"./browser-DUOSIs8m.js";import"./useStatic-rQr5blZX.js";import"./OverlayTrigger-yyuSztfm.js";import"./TableFooterRow-DWNQ0T6x.js";import"./SkeletonText-fbDfrtFf.js";import"./Avatar-CDLXo50I.js";import"./AvatarStack-BQGqs3x_.js";import"./Badge-BzpkmF7E.js";import"./BigNumber-B6AfKhhh.js";import"./Breadcrumb-DUw-gA4L.js";import"./Link-CdVmxRjb.js";import"./Legend-TD40ayv3.js";import"./Color-FPQa_iiC.js";import"./Content-BEbS3ZL_.js";import"./Label-DamxdNaK.js";import"./ContextualHelpTrigger-CobzlyXE.js";import"./CounterBadge-C4x4PBwO.js";import"./DonutChart-CvMGXJVi.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-0rvFNSTI.js";import"./Header-Dzk2QCYF.js";import"./Image-BhQQBAtK.js";import"./Initials-V1IfrL6u.js";import"./InlineCode-BzROjjVp.js";import"./PopoverTrigger-4JRh7pUL.js";import"./LoadingSpinner-CM0pL980.js";import"./Separator-BvGa7liQ.js";import"./Message-BuA5oc5_.js";import"./MessageSeparator-BpgxY-nM.js";import"./NavigationGroup-C51j7e7Q.js";import"./Notification-CnHkVc1m.js";import"./NotificationProvider-ByUVCGCk.js";import"./ProgressBar-oW1SLDw-.js";import"./Rating-DJkF2UYV.js";import"./Skeleton-BPlxU9Ui.js";import"./EmulatedBoldText-BLn1bvyP.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
