import{r as x,j as e}from"./iframe-4vGjmvQN.js";import{F as t}from"./FileDropZone-DDr1uJ1m.js";import{S as d}from"./Section-csDVj14w.js";import{F as u}from"./FileCardList-C38HoEDQ.js";import{F}from"./FileCard-YYMCO7ST.js";import{u as S,F as C,t as D}from"./Form-CPjWaw5M.js";import{S as y}from"./ResetButton-Bf3yTYj7.js";import{B as f}from"./Button-Dkb2KJyV.js";import{A as b}from"./ActionGroup-CFuf9kyv.js";import{Z as j,_ as B}from"./IconWarning-CMo0ZXSb.js";import{H as g}from"./Heading-DVNwCXdo.js";import{F as h}from"./FileField-3n-IYZtU.js";import{T as O}from"./Text-D_m0UGXp.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-D-s_b_nA.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTnwUX2e.js";import"./index-DFF4TtWB.js";import"./index--XKY9bK1.js";import"./useFieldComponent-diqFBc0H.js";import"./utils-Cb3SeWCs.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DO-ESRpi.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dy2_qp8M.js";import"./useFocus-BGpJf3EA.js";import"./useCollator-D5lNxT5d.js";import"./context-Cugfl_gO.js";import"./useLocalizedStringFormatter-Ci5i2g9p.js";import"./Button-C8uGqlfr.js";import"./ProgressBar-D3BQYEeZ.js";import"./Label-DRFrGBxg.js";import"./Hidden-DKOWGOBv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-SP29s-a6.js";import"./useFocusRing-ctZhab72.js";import"./useFocusable-BvBcbeR1.js";import"./VisuallyHidden-C3YQx9t_.js";import"./ContextMenuSection-uYq5CLUg.js";import"./Action-DFPEzuYz.js";import"./context-C_iyWBEo.js";import"./useStatic-CkngZPNU.js";import"./browser-BLim8y6B.js";import"./getActionGroupSlot-ChdVdmUh.js";import"./dynamic-CTwyIkzY.js";import"./Dialog-DWeru3ZY.js";import"./RSPContexts-BAo2RxOH.js";import"./OverlayArrow-Ss-CcX6O.js";import"./useControlledState-wPwtFL3G.js";import"./Collection-JwP5-obH.js";import"./CollectionBuilder-BFcqcbLB.js";import"./SelectionIndicator-Cti1f0QF.js";import"./Separator-CUemZlM2.js";import"./SelectionManager-DMVUPuxd.js";import"./useEvent-CRBCWBzI.js";import"./FocusScope-Blxz7JIY.js";import"./ColumnLayout-CjfSDjxZ.js";import"./Avatar-D4BBkXjt.js";import"./AlertIcon-Cm3SyDVG.js";import"./Image-fSgYi8WQ.js";import"./Link-BJK7mn5B.js";import"./OptionsButton-BJGUeAnD.js";import"./ButtonView-DU5uwmW9.js";import"./ContextMenuTriggerView-HwFZW2Ww.js";import"./ContextMenuTrigger-MvgN361A.js";import"./OverlayTrigger-CIaqJQvR.js";import"./OverlayContextProvider-BfvQVmDI.js";import"./FieldError-ZzdG0j41.js";import"./FieldError-D1JCdJnN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-CWOy_YGI.js";import"./LoadingSpinner-Qei33fJA.js";import"./remote-BMVFgzCt.js";import"./Heading-D0PKdBSu.js";import"./useFormValidation-BrUcW_b7.js";import"./Input-DxBr8hxM.js";import"./EmulatedBoldText-DOuKha2y.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
