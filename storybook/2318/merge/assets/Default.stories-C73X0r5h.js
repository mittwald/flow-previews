import{r as x,j as e}from"./iframe-CNIcTJYh.js";import{F as t}from"./FileDropZone-CcUW6p5G.js";import{S as d}from"./Section-CUzAZq5T.js";import{F as u}from"./FileCardList-DbMTmNPP.js";import{F}from"./FileCard-D8eDndlG.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-B90bKA5P.js";import{B as f}from"./Button-DAjUCwya.js";import{A as b}from"./ActionGroup-DwraTk7X.js";import{a0 as j,a1 as B}from"./IconWarning-DfNRCo5R.js";import{H as g}from"./Heading-CSBDI-d5.js";import{F as h}from"./FileField-fxzVsD9x.js";import{T as O}from"./Text-6t0QtAeQ.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bq2oz6NT.js";import"./clsx-B-dksMZM.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./index-UhPRO7XN.js";import"./useFieldComponent-BcSx3cQM.js";import"./utils-BMrW0rs-.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D2vn8IUC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-OR8aG57O.js";import"./useFocus-Z0zsAUPg.js";import"./useCollator-BvOIfxes.js";import"./context-C-_0n7Mf.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./useFocusRing-DW-rJUC8.js";import"./Button-BxwMmJez.js";import"./ProgressBar-2k-c3px2.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-YapnYrtx.js";import"./useFocusable-pw23kKVy.js";import"./VisuallyHidden-BJLw9ne3.js";import"./ContextMenuSection-B2n1IDtN.js";import"./Action-CB-yo4he.js";import"./context-CHGIk6I_.js";import"./useStatic-J4GDP0vf.js";import"./browser-e5gpn1Ib.js";import"./getActionGroupSlot-BroJtED_.js";import"./dynamic-CfddFL0U.js";import"./Dialog-C8--keRD.js";import"./RSPContexts-BRYZfydm.js";import"./OverlayArrow-CaHszdLs.js";import"./useControlledState-aVbBpOCK.js";import"./Collection-6jPaJgDf.js";import"./CollectionBuilder-CrJHEyTa.js";import"./SelectionIndicator-DvRn40OS.js";import"./Separator-YE45c4qp.js";import"./SelectionManager-DzzIj92U.js";import"./useEvent-BbgFwTon.js";import"./FocusScope-BYGRF7Vw.js";import"./ColumnLayout-CLtGV-wk.js";import"./Avatar-ug3YsnlJ.js";import"./AlertIcon-CQAKF3sa.js";import"./Image-B8muIwJp.js";import"./Link-YI17waow.js";import"./OptionsButton-B9TgymLT.js";import"./ButtonView-f9GsubAG.js";import"./ContextMenuTriggerView-DohzyFdE.js";import"./ContextMenuTrigger-CyP2lgdH.js";import"./OverlayTrigger-DLlBnUgI.js";import"./OverlayContextProvider-DLVotmKz.js";import"./FieldError-CRJL1-ZW.js";import"./FieldError-C-WtBUhj.js";import"./AlertText-C0QdtU2r.js";import"./useRef-DPaH8BEG.js";import"./LoadingSpinner-D1M8B3tV.js";import"./remote-yIvwWX6j.js";import"./Heading-DegGgrrB.js";import"./useFormValidation-Cl_ELzYY.js";import"./Input-DXXfkxpG.js";import"./EmulatedBoldText-Cp_XieAh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
