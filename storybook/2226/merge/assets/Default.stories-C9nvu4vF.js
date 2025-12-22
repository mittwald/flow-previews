import{r as x,j as e}from"./iframe-Dq6d4A4K.js";import{F as t}from"./FileDropZone-CGJsGY51.js";import{S as d}from"./Section-BosBEo7L.js";import{F as u}from"./FileCardList-DF85OMmj.js";import{F}from"./FileCard-cNwER27R.js";import{u as S,F as C,t as D}from"./Form-DZYuvmW-.js";import{S as y}from"./ResetButton-Dr3JPadG.js";import{B as f}from"./Button-CRlV5nO0.js";import{A as b}from"./ActionGroup-C7CI4xmc.js";import{Z as j,_ as B}from"./IconWarning-CufYr70B.js";import{H as g}from"./Heading-fRiF7ARa.js";import{F as h}from"./FileField-DhdgrOdD.js";import{T as O}from"./Text-0vHLnm-v.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B6CNIl0G.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CtCwQzJi.js";import"./index-Bhk-cyr2.js";import"./index-cJyKvq7H.js";import"./useFieldComponent-lf4P9InL.js";import"./utils-JgkAdQlm.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BYQ1lWMY.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-wLk1TVQc.js";import"./useFocus-CdRm64Xm.js";import"./useCollator-B5JOOy1t.js";import"./context-Dane2eIN.js";import"./useLocalizedStringFormatter-DsfTy_q5.js";import"./Button-DJxkILn0.js";import"./ProgressBar-C4xOfrMO.js";import"./Label-D2o2XqmC.js";import"./Hidden-aa2iYn_Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BTTZyaX9.js";import"./useFocusRing-HiCcztDi.js";import"./useFocusable-SW4CEV0n.js";import"./VisuallyHidden-DiG4H0lP.js";import"./ContextMenuSection-CAGjVTCl.js";import"./Action-BH5FUwcy.js";import"./context-Cu2JCu7X.js";import"./useStatic-qDMUdwgV.js";import"./browser-DRZjKHqy.js";import"./getActionGroupSlot-DfIW_w4r.js";import"./dynamic-D3ex2ST8.js";import"./Dialog-D4b1JxJ9.js";import"./RSPContexts-CrxTMHNd.js";import"./OverlayArrow-CZpwCw1e.js";import"./useControlledState-B_V0UpKw.js";import"./Collection-CUuQgOW5.js";import"./CollectionBuilder-BBsN2d06.js";import"./SelectionIndicator-Cx0hTJGG.js";import"./Separator-DMKKn_KL.js";import"./SelectionManager-Df7F--Ci.js";import"./useEvent-DNqkMhlB.js";import"./FocusScope-Bbcwxc4u.js";import"./ColumnLayout-DzvwWulC.js";import"./Avatar-BbzK9ikq.js";import"./AlertIcon-BoXjI6hb.js";import"./Image-DD5FCYwO.js";import"./Link-BVUJERgb.js";import"./OptionsButton-BVPOiFTy.js";import"./ButtonView-CpiXtfU3.js";import"./ContextMenuTriggerView-BXUtedb4.js";import"./ContextMenuTrigger-CCOwNKBh.js";import"./OverlayTrigger-Coxo9lqL.js";import"./OverlayContextProvider-CIowSog5.js";import"./FieldError-3R6U5-ci.js";import"./FieldError-DP91cGbX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-QuX6RRj2.js";import"./LoadingSpinner-C8xohBci.js";import"./remote-9zlx4mlg.js";import"./Heading-jVMpSXwt.js";import"./useFormValidation-wNB2SuId.js";import"./Input-B-OOQ2po.js";import"./EmulatedBoldText-D7VkYRRX.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
