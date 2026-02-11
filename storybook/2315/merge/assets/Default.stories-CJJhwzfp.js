import{r as x,j as e}from"./iframe-DiUxw81Q.js";import{F as t}from"./FileDropZone-DV17Og6g.js";import{S as d}from"./Section-DUwGPO-R.js";import{F as u}from"./FileCardList-B1v4E3DG.js";import{F}from"./FileCard-DF2B-4-P.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DLc-3RhS.js";import{B as f}from"./Button-gnRq8NvL.js";import{A as b}from"./ActionGroup-CgTxc8cR.js";import{a0 as j,a1 as B}from"./IconWarning-DJftz4M-.js";import{H as g}from"./Heading-CaLCe_nK.js";import{F as h}from"./FileField-BJK7ZvxJ.js";import{T as O}from"./Text-CMit6jNZ.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CYT-YkjF.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./index-2ROVwQvu.js";import"./useFieldComponent-BFiXxBQU.js";import"./utils-BhADjK-H.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CUd3ZjBr.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-yn1VwYEU.js";import"./useFocus-DSwjHrh5.js";import"./useCollator-uFjTzBPf.js";import"./context-si8TSn1j.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./useFocusRing-BpbrWv_K.js";import"./Button-JQtyulyF.js";import"./ProgressBar-HXLQU2Vm.js";import"./Label-Dt69EWuh.js";import"./Hidden-YWjhfZDI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-I-WC2YFt.js";import"./useFocusable-bbwyacvB.js";import"./VisuallyHidden-Bb1j3rfU.js";import"./ContextMenuSection-CCmic__u.js";import"./Action-D_TEMwel.js";import"./context-C7B1j1st.js";import"./useStatic-BoyD6q7D.js";import"./browser-DhblGL2Q.js";import"./getActionGroupSlot-DtA40Fi-.js";import"./dynamic-Bvqmautb.js";import"./Dialog-CJTGGTvx.js";import"./RSPContexts-D4TaMXlQ.js";import"./OverlayArrow-BBITTnz5.js";import"./useControlledState-DDLUXLOw.js";import"./Collection-BtPubrtW.js";import"./CollectionBuilder-CvFvZJ2s.js";import"./SelectionIndicator-BsyJ81fY.js";import"./Separator-CQ3T4lOo.js";import"./SelectionManager-BOTG9Axa.js";import"./useEvent-D_adZsOG.js";import"./FocusScope-moHWWkwF.js";import"./ColumnLayout-CZcraziS.js";import"./Avatar-DAQwFke9.js";import"./AlertIcon-C_aBYmlN.js";import"./Image-hYG4mG5o.js";import"./Link-HMWkYJE0.js";import"./OptionsButton-0EbgScSP.js";import"./ButtonView-DRbY-aON.js";import"./ContextMenuTriggerView-_GEpaboZ.js";import"./ContextMenuTrigger-BGyqLqJa.js";import"./OverlayTrigger-BHAm2bRH.js";import"./OverlayContextProvider-Bc9SHXiU.js";import"./FieldError-DH3i7Cba.js";import"./FieldError-BKME6Hw5.js";import"./AlertText-3B66Ly-F.js";import"./useRef-C5iQicBg.js";import"./LoadingSpinner-Rpl9g6nT.js";import"./remote-dRe2-fx5.js";import"./Heading-BfJy_wN2.js";import"./useFormValidation-CsqhaN7Y.js";import"./Input-lzxTVruz.js";import"./EmulatedBoldText-WmP9Wm83.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,$e as __namedExportsOrder,Xe as default};
