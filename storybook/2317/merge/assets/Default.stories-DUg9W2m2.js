import{r as x,j as e}from"./iframe-wn9t8CHT.js";import{F as t}from"./FileDropZone-Bo4q9XKN.js";import{S as d}from"./Section-ByylEw6S.js";import{F as u}from"./FileCardList-CgqKCJOJ.js";import{F}from"./FileCard-CO2kbgyw.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DU2Rzvvh.js";import{B as f}from"./Button-CkMrcy8B.js";import{A as b}from"./ActionGroup-CUbcw8Rs.js";import{a0 as j,a1 as B}from"./IconWarning-B-Wnft1S.js";import{H as g}from"./Heading-BtcPMLbU.js";import{F as h}from"./FileField-DnIQJA2W.js";import{T as O}from"./Text-vlZ105c0.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-C7urHl6b.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CQL_Hol9.js";import"./index-Daog0jgF.js";import"./index-DGBNuX5e.js";import"./useFieldComponent-CuQvVX64.js";import"./utils-BBqjM3mV.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CigTZLQg.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfKSfnQU.js";import"./useFocus-Dfm-Pt4C.js";import"./useCollator-ia3Kz-2A.js";import"./context-DUIKEoYM.js";import"./useLocalizedStringFormatter-BW5ArTpm.js";import"./useFocusRing-4Aw-0NUA.js";import"./Button-C_8bimI7.js";import"./ProgressBar-DYDTpv9y.js";import"./Label-vEkUlCU_.js";import"./Hidden-B0JF82fI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-febwKXtN.js";import"./useFocusable-MJ0CU3Gf.js";import"./VisuallyHidden-Rhd9Lwfr.js";import"./ContextMenuSection-a_hWYWcP.js";import"./Action-CYz45Lq2.js";import"./context-DvLe6BQ8.js";import"./useStatic-Dq0n5AIR.js";import"./browser-C4GSjbSD.js";import"./dynamic-Ce3zwrtf.js";import"./getActionGroupSlot-DC-fIdha.js";import"./Dialog-QaAGaw4t.js";import"./RSPContexts-CP6K_mUq.js";import"./OverlayArrow-Dlbb_9eh.js";import"./useControlledState-Ckzcuwb2.js";import"./Collection-Dabp6tSw.js";import"./CollectionBuilder-Dc9k3CRr.js";import"./SelectionIndicator-Drl_jI2J.js";import"./Separator-D7rNCrfy.js";import"./SelectionManager-CyQywfav.js";import"./useEvent-msC5Saat.js";import"./FocusScope-Cff801J_.js";import"./ColumnLayout-BdV07wMC.js";import"./Avatar-DvoQqnc6.js";import"./AlertIcon-CswpW_U3.js";import"./Image-CtlB3IAL.js";import"./Link-CQfFXbKR.js";import"./OptionsButton-DYm1Ait3.js";import"./ButtonView-B4rdbM1Q.js";import"./ContextMenuTriggerView-BnACg43n.js";import"./ContextMenuTrigger-DR20zaH3.js";import"./OverlayTrigger-DiExDdE4.js";import"./OverlayContextProvider-DPqnyBOx.js";import"./FieldError-C9AtZQjZ.js";import"./FieldError-BriaHAsp.js";import"./AlertText-G52nApD-.js";import"./useRef-hqPWAoQM.js";import"./LoadingSpinner-C5pntlan.js";import"./remote-BKPU2Q50.js";import"./Heading-BifW3h1d.js";import"./useFormValidation-DyGMCXIt.js";import"./Input-VHI0T5Gg.js";import"./EmulatedBoldText-BRurVn-6.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
