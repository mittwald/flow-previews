import{r as x,j as e}from"./iframe-COJ9RE48.js";import{F as t}from"./FileDropZone-BPOVmcxd.js";import{S as d}from"./Section-CUB_WQoM.js";import{F as u}from"./FileCardList-CSW2rgh1.js";import{F}from"./FileCard-C0Xf3-El.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-ClaeOlVC.js";import{B as f}from"./Button-CMQanS4m.js";import{A as b}from"./ActionGroup-De8HYD8X.js";import{a0 as j,a1 as B}from"./IconWarning-BMwiqmvN.js";import{H as g}from"./Heading-DxYLpioN.js";import{F as h}from"./FileField-b6XBB-HY.js";import{T as O}from"./Text-Bzpr-GrC.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CcXOQd3I.js";import"./clsx-B-dksMZM.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./index-D5EZb4o9.js";import"./useFieldComponent-C2vXV8Pm.js";import"./utils-mqorQ4Bj.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-De8BGzPh.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDG97Ijf.js";import"./useFocus-C0sdQCtL.js";import"./useCollator-CXxaQt2T.js";import"./context-6fEx4cd5.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./useFocusRing-CTczndmn.js";import"./Button-BX1Wpmoy.js";import"./ProgressBar-DUh8L45o.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CI06DRQW.js";import"./useFocusable-_fwbj2-b.js";import"./VisuallyHidden-DAPVNl2G.js";import"./ContextMenuSection-BD_6r0jM.js";import"./ActionBatch-BL-a0sfJ.js";import"./useOverlayController-FIUUtlCA.js";import"./useStatic-BccM3ree.js";import"./browser-DOjt7J27.js";import"./getActionGroupSlot-CmDqFskk.js";import"./dynamic-CTxK5DLa.js";import"./Dialog-Bn1iAsfr.js";import"./RSPContexts-CacVUoYW.js";import"./OverlayArrow-BueQpaoQ.js";import"./useControlledState-BKL31WKE.js";import"./Collection-Cj7qUdsZ.js";import"./CollectionBuilder-BBRIkTLo.js";import"./SelectionIndicator-D_pnQduh.js";import"./Separator-JpTraE0Z.js";import"./SelectionManager-2oI8n0VA.js";import"./useEvent-CTKdBRUT.js";import"./FocusScope-BJ-yMckp.js";import"./ColumnLayout-3Cvqfvmf.js";import"./Avatar-BwHSrrrF.js";import"./AlertIcon-BTDbiAGg.js";import"./Image-DMoyIdSC.js";import"./Link-D5t64BFC.js";import"./OptionsButton-2mfdoENf.js";import"./ButtonView-BPjbrkaq.js";import"./ContextMenuTriggerView-DzEk_ZNU.js";import"./ContextMenuTrigger-kuKBQI7o.js";import"./OverlayTrigger-CWnPf4Dw.js";import"./OverlayContextProvider-CBc03cFF.js";import"./FieldError-CCI4UyFC.js";import"./FieldError-GKNsJ0Cn.js";import"./AlertText-DQ5OQX7v.js";import"./ActionGroupView-fMLXotgU.js";import"./Content-CnaSOdl5.js";import"./Modal-DApCOQ01.js";import"./Overlay-DCP7Ml7p.js";import"./LoadingSpinner-CBTolouR.js";import"./Flex-DKLR47fR.js";import"./useRef-CyM80vuH.js";import"./remote-BHpqvLOn.js";import"./Heading-5-Pxsrno.js";import"./useFormValidation-DQ8UK_oB.js";import"./Input-CNxbrx0W.js";import"./EmulatedBoldText-DzXTkxYI.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
