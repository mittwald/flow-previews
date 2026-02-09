import{r as x,j as e}from"./iframe-CcNHCKoB.js";import{F as t}from"./FileDropZone--vqyf5gr.js";import{S as d}from"./Section-C7V_cxBu.js";import{F as u}from"./FileCardList-CaMzRuMQ.js";import{F}from"./FileCard-CxUgr0ap.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-QovA5GoB.js";import{B as f}from"./Button-DTuLbClr.js";import{A as b}from"./ActionGroup-C0eUcCYO.js";import{a0 as j,a1 as B}from"./IconWarning-DmrAmEd1.js";import{H as g}from"./Heading-BmMG8Nl6.js";import{F as h}from"./FileField-CZUBoT82.js";import{T as O}from"./Text-BmtlE-88.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BYFANpXd.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./index-C0Ga1GvX.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./utils-NnqZ9ZBK.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BCtKE9i4.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyCYkDRj.js";import"./useFocus-SYOVVSYu.js";import"./useCollator-lY1OBRiY.js";import"./context-LfQwLpL0.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./useFocusRing-C53Oh36V.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-eyc-LVl-.js";import"./useFocusable-Dm2HHW3t.js";import"./VisuallyHidden-FLGfwvrv.js";import"./ContextMenuSection-mqwvvgq0.js";import"./Action-XHgAr--T.js";import"./context-QFR9DY6D.js";import"./useStatic-BA9Xyuh5.js";import"./browser-C0P1LItQ.js";import"./getActionGroupSlot-BqdIRyOr.js";import"./dynamic-nNoo79J6.js";import"./Dialog-DlflAgwc.js";import"./RSPContexts-DYw5y0O9.js";import"./OverlayArrow-BhIInrDo.js";import"./useControlledState-TVt6Qf5c.js";import"./Collection-B_UfiUp2.js";import"./CollectionBuilder-ClUBiV0v.js";import"./SelectionIndicator-CQiEQ8QD.js";import"./Separator-CJZ-PY1K.js";import"./SelectionManager-CMW6n3Mg.js";import"./useEvent-DmaMUS07.js";import"./FocusScope-_ikiXfPV.js";import"./ColumnLayout-BJTjCXOG.js";import"./Avatar-CWNhDZd8.js";import"./AlertIcon-DM6j3Z28.js";import"./Image-BtKKNgUs.js";import"./Link-DHksZfNS.js";import"./OptionsButton-OGzWjMRE.js";import"./ButtonView-BSq0RN-i.js";import"./ContextMenuTriggerView-Cc4nwED4.js";import"./ContextMenuTrigger-BgU6AkIr.js";import"./OverlayTrigger-Ct6yrdj2.js";import"./OverlayContextProvider-B8m7VzcE.js";import"./FieldError-BlodrZIq.js";import"./FieldError--IyvMZRA.js";import"./AlertText-CklP5D4q.js";import"./useRef-Cb4CGn_K.js";import"./LoadingSpinner-B5nlxM1K.js";import"./remote-CVy042JL.js";import"./Heading-CN6CrwNC.js";import"./useFormValidation-PdvsTzHy.js";import"./Input-D-KHai3o.js";import"./EmulatedBoldText-BunH9Anl.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
