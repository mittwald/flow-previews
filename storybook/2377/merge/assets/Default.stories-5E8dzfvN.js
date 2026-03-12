import{r as x,j as e}from"./iframe-JHVlk64D.js";import{F as t}from"./FileDropZone-C7qH_ClX.js";import{S as d}from"./Section-Dlc8DpVc.js";import{F as u}from"./FileCardList-BJEgln5J.js";import{F}from"./FileCard-DM-AHq2H.js";import{u as S,F as C,S as D,t as y}from"./FormRootError-D0QsKVKu.js";import{B as f}from"./Button-BViHWx5D.js";import{A as b}from"./ActionGroup-DZgnsmND.js";import{a4 as j,a5 as B}from"./IconWarning-D57fWT31.js";import{H as g}from"./Heading-B5Pon5qA.js";import{F as h}from"./FileField-DLsTap68.js";import{T as O}from"./Text-D35H-2yr.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B1G4DDkC.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./index-BF-KrcKY.js";import"./useFieldComponent-Dm_EHwx7.js";import"./utils-D9FbIhNL.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BPDMqDL5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9l7svqw5.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./useCollator-YDjG1_LZ.js";import"./context-ArJ603f0.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./useFocusRing-CHLeDkTy.js";import"./Button-CV338ZHI.js";import"./ProgressBar-RoFvxVlz.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dt-0MkOU.js";import"./useFocusable-vxzxlCI8.js";import"./VisuallyHidden-CJBb4HxH.js";import"./ContextMenuSection-0h5wVCnN.js";import"./ActionBatch-1qW2-LTl.js";import"./useOverlayController-B_kJVQUM.js";import"./useStatic-BkeDEY_1.js";import"./browser-CH4iE_n_.js";import"./getActionGroupSlot-DipsrrNF.js";import"./dynamic-B8NPXIjt.js";import"./Dialog-DIqACfnD.js";import"./RSPContexts-BaSES6Qq.js";import"./OverlayArrow-DI9sbb4v.js";import"./useControlledState-BK0dEcU9.js";import"./Collection-CRq1qG1J.js";import"./CollectionBuilder-Dx0vl2tB.js";import"./SelectionIndicator-D6El124b.js";import"./Separator-8crMrP-e.js";import"./SelectionManager-DJjQCPb0.js";import"./useEvent-CalNBU8C.js";import"./FocusScope-D4b0Moap.js";import"./ColumnLayout-BBxMV5f1.js";import"./Avatar-BjZdAni4.js";import"./AlertIcon-B-el1D17.js";import"./Image-CL6Hl73G.js";import"./Link-CjG243nZ.js";import"./OptionsButton-CSNx7npF.js";import"./ButtonView-BHsHy_WH.js";import"./ContextMenuTriggerView-DkUBKzZd.js";import"./ContextMenuTrigger-aArxDUom.js";import"./OverlayTrigger-CMrYL6HW.js";import"./OverlayContextProvider-ClUum8Ul.js";import"./ActionGroupView-Bc17c7sh.js";import"./Content-BX3eZD3n.js";import"./Modal-Dd9stJQr.js";import"./Overlay-KmyQfYDW.js";import"./LoadingSpinner-Bl1fRewj.js";import"./Flex-CNTnvpl9.js";import"./useRef-m6O5GTv_.js";import"./FieldError-DkKHEf-8.js";import"./FieldError-CB6gvg8S.js";import"./AlertText-4rUPj4ZK.js";import"./remote-CdnDmctD.js";import"./Heading-DWwskDgI.js";import"./useFormValidation-BHVZgCg5.js";import"./Input-D75LvDxG.js";import"./EmulatedBoldText-DwNSiPCb.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,nr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,tr as __namedExportsOrder,nr as default};
