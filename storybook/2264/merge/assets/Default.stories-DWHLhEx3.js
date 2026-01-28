import{r as x,j as e}from"./iframe-BrcQhcwR.js";import{F as t}from"./FileDropZone-CI6MbY7S.js";import{S as d}from"./Section-BOZrahl-.js";import{F as u}from"./FileCardList-DlfxSqVY.js";import{F}from"./FileCard-Cfawku9T.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-BB_es5yP.js";import{B as f}from"./Button-DdI6TSg5.js";import{A as b}from"./ActionGroup-DQKpdPni.js";import{_ as j,$ as B}from"./IconWarning-MWZFtagw.js";import{H as g}from"./Heading-DeF2rP0f.js";import{F as h}from"./FileField-BL6kpc4t.js";import{T as O}from"./Text-PyhJCmvh.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-E6srr_Tr.js";import"./clsx-B-dksMZM.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./index-CSUT2NCR.js";import"./useFieldComponent-CsbQ-7mY.js";import"./utils-DM5Jp8EX.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CzkXk5bL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-0hwKkY3Z.js";import"./useFocus-BKws8v7-.js";import"./useCollator-DSAWxNmx.js";import"./context-DOSLHoOx.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./useFocusRing-DEM6_VkF.js";import"./Button-CztCXt43.js";import"./ProgressBar-DhNSphWE.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BBaWFJWg.js";import"./useFocusable-BcdgZhOs.js";import"./VisuallyHidden-CIPoghQB.js";import"./ContextMenuSection-BV3yleYZ.js";import"./Action-EPprNG1t.js";import"./context-C9I6Qco3.js";import"./useStatic-Cr39OxgC.js";import"./browser-BdJDgoMU.js";import"./getActionGroupSlot-Dt2slLBi.js";import"./dynamic-CAxQXs-G.js";import"./Dialog-DAgI8QrG.js";import"./RSPContexts-CLcTs2D_.js";import"./OverlayArrow-DY7ECRqq.js";import"./useControlledState-DsUZezc6.js";import"./Collection-kTlo8aNF.js";import"./CollectionBuilder-DHL6mUJ2.js";import"./SelectionIndicator-Bi_ZzqWB.js";import"./Separator-BpDC4shb.js";import"./SelectionManager-B-CgmQdR.js";import"./useEvent-D8AEfF0F.js";import"./FocusScope-CxLgpb_M.js";import"./ColumnLayout-Dpb7FaN1.js";import"./Avatar-CCEN8Yyi.js";import"./AlertIcon-CzBRtVHG.js";import"./Image-CgmIoTa5.js";import"./Link-DW1OiTYF.js";import"./OptionsButton-Y3bauwb_.js";import"./ButtonView-B7ZIb4eI.js";import"./ContextMenuTriggerView-CVqYD8jr.js";import"./ContextMenuTrigger-DNzDU6WL.js";import"./OverlayTrigger-D_VcfVVD.js";import"./OverlayContextProvider-BfPQJL_J.js";import"./FieldError-D24voWaJ.js";import"./FieldError-BZvulriJ.js";import"./AlertText-BAa8Yse9.js";import"./useRef-DT2mR3RP.js";import"./LoadingSpinner-C-WbSXYT.js";import"./remote-BHShYJ5P.js";import"./Heading-D_8LxtK-.js";import"./useFormValidation-CstoYpvO.js";import"./Input-CFsccwbB.js";import"./EmulatedBoldText-Bbt3btdp.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
