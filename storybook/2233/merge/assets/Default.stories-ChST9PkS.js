import{r as x,j as e}from"./iframe-BeQWUZkN.js";import{F as t}from"./FileDropZone-CLMl2ztw.js";import{S as d}from"./Section-BPuqexdG.js";import{F as u}from"./FileCardList-C-rEEJUs.js";import{F}from"./FileCard-CcIqhBe2.js";import{u as S,F as C,t as D}from"./Form-B98UMnS4.js";import{S as y}from"./ResetButton-9QuJv1px.js";import{B as f}from"./Button-CGVqLO1a.js";import{A as b}from"./ActionGroup-nS8Oj4Mn.js";import{$ as j,a0 as B}from"./IconWarning-BINGtqrd.js";import{H as g}from"./Heading-Em1n1mkD.js";import{F as h}from"./FileField-CZJK4XVM.js";import{T as O}from"./Text-DBLOUBNs.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-C17jjkR3.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C5zRFTyN.js";import"./index-1B1ExeLK.js";import"./index-C7QqpnOV.js";import"./useFieldComponent-Df_LAOUO.js";import"./utils-DahaGO1Z.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-oRZAcHnn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bej11zP_.js";import"./useFocus-B8WX1wz4.js";import"./useCollator-BitTSQ9h.js";import"./context-BW8umLlU.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./Button-CL6J7LkF.js";import"./ProgressBar-DrS-kVcX.js";import"./Label-CrwWIO9R.js";import"./Hidden-CGYC7LW_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DC5PU-Mt.js";import"./useFocusRing-plkuiMUL.js";import"./useFocusable-5ZG33T1u.js";import"./VisuallyHidden-Dai9OIPt.js";import"./ContextMenuSection-of5hagQh.js";import"./Action-E4S27TIO.js";import"./context-C8zS221N.js";import"./useStatic-H-gT8Tnv.js";import"./browser-CC8M21FF.js";import"./getActionGroupSlot-Mt7aWTck.js";import"./dynamic-CY8Jd6pV.js";import"./Dialog-BcNKaqXQ.js";import"./RSPContexts-3R6axPUC.js";import"./OverlayArrow-CQhuNf01.js";import"./useControlledState-CVKu2BVA.js";import"./Collection-BT4mtoIi.js";import"./CollectionBuilder-8XmSCxqz.js";import"./SelectionIndicator-CpkhsEOb.js";import"./Separator-jKx-ftTc.js";import"./SelectionManager-g_157G_P.js";import"./useEvent-D73bdPYV.js";import"./FocusScope-BFFCHkyv.js";import"./ColumnLayout-lrgga088.js";import"./Avatar-Cd28HLfw.js";import"./AlertIcon-Bvyhnsbm.js";import"./Image-D9YnIp37.js";import"./Link-Cw7koCy6.js";import"./OptionsButton-C-cYF0Jx.js";import"./ButtonView-Cu0HfPXx.js";import"./ContextMenuTriggerView-C6ksBsd4.js";import"./ContextMenuTrigger-B8Q7xA3r.js";import"./OverlayTrigger-CQFXwfOk.js";import"./OverlayContextProvider-DSplWZAb.js";import"./FieldError-BcvtKrk-.js";import"./FieldError-D83BnXEF.js";import"./AlertText-zAJvVLJZ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-CcGz0D1s.js";import"./LoadingSpinner-BzbdJJnJ.js";import"./remote-BjhB0wla.js";import"./Heading-DqQ4fdlj.js";import"./useFormValidation-enT2NaDW.js";import"./Input-DQvG8v1g.js";import"./EmulatedBoldText-Ds4ybabF.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
