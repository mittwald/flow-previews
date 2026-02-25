import{r as x,j as e}from"./iframe-Bh3xJiHl.js";import{F as t}from"./FileDropZone-CE6xJDig.js";import{S as d}from"./Section-CfFeFwol.js";import{F as u}from"./FileCardList-BMAz3h6g.js";import{F}from"./FileCard-Du9xd3wI.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DyvGYpOi.js";import{B as f}from"./Button-C1GDS2T5.js";import{A as b}from"./ActionGroup-B4cK5020.js";import{a0 as j,a1 as B}from"./IconWarning-BO5-ThfV.js";import{H as g}from"./Heading-OKG0Iw9H.js";import{F as h}from"./FileField-B4t6T_p7.js";import{T as O}from"./Text-yap4nkEx.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DfchswFO.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3sfiT_Y.js";import"./index-BFDJcR6G.js";import"./index-CTdhbmBU.js";import"./useFieldComponent-DixKAqTB.js";import"./utils-Dfx959rT.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CYmLgYN4.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXwac_uq.js";import"./useFocus-BHtMPlKM.js";import"./useCollator-DwLdnUiO.js";import"./context-BR0BeWgQ.js";import"./useLocalizedStringFormatter-C9w1tvwK.js";import"./useFocusRing-BHUB4uMx.js";import"./Button-BNrfYXOb.js";import"./ProgressBar-f9Z69uXY.js";import"./Label-Dluta3ia.js";import"./Hidden-DdbuHEan.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B8ZJpDXl.js";import"./useFocusable-BqTTqTxS.js";import"./VisuallyHidden-CnocgGJn.js";import"./ContextMenuSection-rHl1P7lx.js";import"./ActionBatch-i2QcTjWd.js";import"./useOverlayController-DT1eg7nU.js";import"./useStatic-BN6jI5KS.js";import"./browser-8DYgdl68.js";import"./getActionGroupSlot-1kHLqAyx.js";import"./dynamic-Cx5ap73z.js";import"./Dialog-CdFvlhxh.js";import"./RSPContexts-CiTjd_Cl.js";import"./OverlayArrow-D44cF5Xm.js";import"./useControlledState-cRERDsL1.js";import"./Collection-DIBLnAHN.js";import"./CollectionBuilder-CXW-gYlJ.js";import"./SelectionIndicator-CiZnwtLL.js";import"./Separator-C-kXScb9.js";import"./SelectionManager-DY1RX6tv.js";import"./useEvent-Ck38Sl35.js";import"./FocusScope-DSBEK_-_.js";import"./ColumnLayout-B2HEqZuj.js";import"./Avatar-D-GYlTlE.js";import"./AlertIcon-BebRztpd.js";import"./Image-B2hLqv7g.js";import"./Link-CB2VB7oO.js";import"./OptionsButton-Nqx4jC8b.js";import"./ButtonView-DDvKz1ey.js";import"./ContextMenuTriggerView-Cpe5kWTG.js";import"./ContextMenuTrigger-t2pu2qhP.js";import"./OverlayTrigger-xf6EpmWh.js";import"./OverlayContextProvider-nbeISQDl.js";import"./FieldError-BT5CTe02.js";import"./FieldError-DSfA25Iv.js";import"./AlertText-29lF4HJO.js";import"./ActionGroupView-DfrbEJ0p.js";import"./Content-DW0SliHj.js";import"./Modal-BCLm9hzN.js";import"./Overlay-2lTiqzcd.js";import"./LoadingSpinner-DCCe8ZqR.js";import"./Flex-BBxjU3qG.js";import"./useRef-B9SaQVKF.js";import"./remote-Bp1RK0aJ.js";import"./Heading-DtIx3EFz.js";import"./useFormValidation-DFhVz88J.js";import"./Input-DfQ8ZFmJ.js";import"./EmulatedBoldText-jamwOsD6.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
