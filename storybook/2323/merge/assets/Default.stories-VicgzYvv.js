import{r as x,j as e}from"./iframe-CIhdjqSz.js";import{F as t}from"./FileDropZone-DhKUoU3y.js";import{S as d}from"./Section-DcDeoOZJ.js";import{F as u}from"./FileCardList-BMHCVovd.js";import{F}from"./FileCard-JbG_KYRl.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BOR4CHdA.js";import{B as f}from"./Button--NFWCTgK.js";import{A as b}from"./ActionGroup-CRpQMoSl.js";import{a0 as j,a1 as B}from"./IconWarning-NrGPSND5.js";import{H as g}from"./Heading-DFMRUW3K.js";import{F as h}from"./FileField-CjCnmGCk.js";import{T as O}from"./Text-DgrqnOua.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B66nQ6QW.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./index-D2Zvq_HV.js";import"./useFieldComponent-BDBEatho.js";import"./utils-3Ll5mTsj.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BWZGL9q7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-wcYinYgg.js";import"./useFocus-CB1MjZml.js";import"./useCollator-DNIGrhrL.js";import"./context-C9Id__Ro.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./useFocusRing-ChVqcxnp.js";import"./Button-DTpgNeLS.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BAXbDaCF.js";import"./useFocusable-DArPbii_.js";import"./VisuallyHidden-Szd7uPuS.js";import"./ContextMenuSection-B32Hv_M2.js";import"./ActionBatch-DvjVnKvH.js";import"./useOverlayController-DM_j6n2m.js";import"./useStatic-BON1q5w1.js";import"./browser-BTfojbbK.js";import"./getActionGroupSlot-BLtRHpNa.js";import"./dynamic-DC2aGj60.js";import"./Dialog-BaKpGYJ_.js";import"./RSPContexts-FgSmVkcq.js";import"./OverlayArrow-C-y_PFkG.js";import"./useControlledState-Bhs9bgfq.js";import"./Collection-CCRp5-Dk.js";import"./CollectionBuilder-NdwpQU0D.js";import"./SelectionIndicator-BybBuRuw.js";import"./Separator-CvRy5z-e.js";import"./SelectionManager-BQHZJ_z4.js";import"./useEvent-kjaJonnh.js";import"./FocusScope-DnRcaDs5.js";import"./ColumnLayout-D6V36ZCl.js";import"./Avatar-dxv8AFxx.js";import"./AlertIcon-DlNCugjU.js";import"./Image-BDWGEQ5x.js";import"./Link-PpAdeeeE.js";import"./OptionsButton-Bv344USv.js";import"./ButtonView-DCesTJ_4.js";import"./ContextMenuTriggerView-ChKMmT80.js";import"./ContextMenuTrigger-CCML0O9_.js";import"./OverlayTrigger-DlE73CJz.js";import"./OverlayContextProvider-D7G_WMz6.js";import"./FieldError-C6Vi3jlh.js";import"./FieldError-BrGZX-9W.js";import"./AlertText-DmXHc8ur.js";import"./Overlay-knx40pXC.js";import"./LoadingSpinner-CnQRgWlh.js";import"./ActionGroupView-DErmmX1C.js";import"./Content-C_lJcoxE.js";import"./Modal-BPdWM4cS.js";import"./Flex-JT-R-kzn.js";import"./useRef-ZatrU-r0.js";import"./remote-C6ukCFNy.js";import"./Heading-N3mW0_Ma.js";import"./useFormValidation-kYNpgjw2.js";import"./Input-DGuJ7Hsu.js";import"./EmulatedBoldText-DYoDUL8u.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
