import{r as x,j as e}from"./iframe-DunzINT4.js";import{F as t}from"./FileDropZone-_uy2O7G1.js";import{S as d}from"./Section-M7f3R8gL.js";import{F as u}from"./FileCardList-rGDIJPa9.js";import{F}from"./FileCard-BTZmIMgg.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-74oeQDLV.js";import{B as f}from"./Button-D4ye7DRq.js";import{A as b}from"./ActionGroup-CU6CeMc_.js";import{a0 as j,a1 as B}from"./IconWarning-kFcnfyhN.js";import{H as g}from"./Heading-ClXpNfz0.js";import{F as h}from"./FileField-DASWYbWc.js";import{T as O}from"./Text-DTHO_DRR.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-RgbEgxSH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./index-Wl0ZfLjP.js";import"./useFieldComponent-mGz2JkQm.js";import"./utils-B66WPIWK.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CMXpTIb-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClizNTl4.js";import"./useFocus-CLsD99Jd.js";import"./useCollator-D3GFS6us.js";import"./context-XFBu4tuG.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./useFocusRing-BpLynkPU.js";import"./Button-C6WdG1X1.js";import"./ProgressBar-BpvfS7s7.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VDpDAbVy.js";import"./useFocusable-BqXitQDl.js";import"./VisuallyHidden-C85ONzQn.js";import"./ContextMenuSection-BBATHhHi.js";import"./ActionBatch-CdGiFur7.js";import"./useOverlayController-CeSeYZW0.js";import"./useStatic-CPAaCdO2.js";import"./browser-CUqULdV9.js";import"./getActionGroupSlot-CDL5t1gM.js";import"./dynamic--RH-hhxe.js";import"./Dialog-Da1bNoxP.js";import"./RSPContexts-DYG4soUM.js";import"./OverlayArrow-DJczCQVT.js";import"./useControlledState-BzLfbFoS.js";import"./Collection-DamVlN_y.js";import"./CollectionBuilder-px4k6lS7.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./Separator-kz0LFyO1.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./FocusScope-9vf2uR4m.js";import"./ColumnLayout--RyVNOBQ.js";import"./Avatar-CtrM1JLN.js";import"./AlertIcon-Bju3yLvF.js";import"./Image-wMV5X_K4.js";import"./Link-DHf6UEv1.js";import"./OptionsButton-C-pnMhjV.js";import"./ButtonView-Db2YbPTU.js";import"./ContextMenuTriggerView-B3O97pPu.js";import"./ContextMenuTrigger-CTYVWg2Y.js";import"./OverlayTrigger-B1b7JrEs.js";import"./OverlayContextProvider-CLfsrj3T.js";import"./FieldError-CxTapnNI.js";import"./FieldError-MxPTKBhw.js";import"./AlertText-CXIp0I6q.js";import"./ActionGroupView-xmbZNfvW.js";import"./Content-C85uPduS.js";import"./Modal-BoYgkIb6.js";import"./Overlay-DI6L0QBM.js";import"./LoadingSpinner-CzZyxAnt.js";import"./Flex-D0W34hyw.js";import"./useRef-GWWqzfEo.js";import"./remote-BHsosJBg.js";import"./Heading-B3Dcho9D.js";import"./useFormValidation-CAKGNU-r.js";import"./Input-CibPE8Js.js";import"./EmulatedBoldText-Bdm-2WSs.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
