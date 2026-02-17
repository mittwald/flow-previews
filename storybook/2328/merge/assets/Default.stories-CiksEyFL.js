import{r as x,j as e}from"./iframe-olJof__V.js";import{F as t}from"./FileDropZone-Bq6Tceju.js";import{S as d}from"./Section-xajLDDkQ.js";import{F as u}from"./FileCardList-O9tSyPrh.js";import{F}from"./FileCard-CdFulazB.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BRjZN70o.js";import{B as f}from"./Button-CPlz8rsS.js";import{A as b}from"./ActionGroup-7XqXhcJT.js";import{a0 as j,a1 as B}from"./IconWarning-Dxqo3db7.js";import{H as g}from"./Heading-CFjejIim.js";import{F as h}from"./FileField-Doc8X3Pf.js";import{T as O}from"./Text-Dd-S15-B.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DU_6BDuG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoGNni0d.js";import"./index-DXuGOHKQ.js";import"./index-CQizCcaV.js";import"./useFieldComponent-BI2nSVzd.js";import"./utils-B7tchdhx.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-PinZmeRI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtYRRhYq.js";import"./useFocus-C7qSpl6p.js";import"./useCollator-DxO-TF_t.js";import"./context-DOTF4vQp.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./useFocusRing-D32aTWMq.js";import"./Button-BzbIVXwM.js";import"./ProgressBar-CgXlpLJ2.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-UZLq5kUQ.js";import"./useFocusable-3WtiVhvt.js";import"./VisuallyHidden-D0VqbVmf.js";import"./ContextMenuSection-C9tKIY6H.js";import"./ActionBatch-DqsTFo-5.js";import"./useOverlayController-CA843Gf5.js";import"./useStatic-DVdbIJHO.js";import"./browser-IACFT9IC.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./dynamic-C_FBHMxE.js";import"./Dialog-DOR07iZd.js";import"./RSPContexts-BVirgRiO.js";import"./OverlayArrow-B-0VQUib.js";import"./useControlledState-CGGJ5ydn.js";import"./Collection-WZVC-4xi.js";import"./CollectionBuilder-vpp5jjd8.js";import"./SelectionIndicator-D2HcZFFA.js";import"./Separator-8BcW__js.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./FocusScope-Db9L4ciT.js";import"./ColumnLayout-BPvI-4gN.js";import"./Avatar-Df7PeMRZ.js";import"./AlertIcon-DL26tbpe.js";import"./Image-BTIypaSk.js";import"./Link-zAbyTmSL.js";import"./OptionsButton-B5D1HIso.js";import"./ButtonView-BwM21LNf.js";import"./ContextMenuTriggerView-CjVdX0Nm.js";import"./ContextMenuTrigger-DkBWWFGu.js";import"./OverlayTrigger-CdRn1WXI.js";import"./OverlayContextProvider-DbMF0xyh.js";import"./FieldError-l4UC5eIi.js";import"./FieldError-kWwHEGnK.js";import"./AlertText-DHxSCH5W.js";import"./ActionGroupView-wpokCcfL.js";import"./Content-BTv2gojb.js";import"./Modal-DS-pjQYs.js";import"./Overlay-CYa-63WO.js";import"./LoadingSpinner-CT-rb4W5.js";import"./Flex-6XeWCvWa.js";import"./useRef-BVHeJ4xv.js";import"./remote-BFSWQwUW.js";import"./Heading-CZbujKCp.js";import"./useFormValidation-D5cIPr0y.js";import"./Input-C1ZdZWYR.js";import"./EmulatedBoldText-BFx3xjvZ.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
