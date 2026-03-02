import{r as x,j as e}from"./iframe-Dx38AIDT.js";import{F as t}from"./FileDropZone-DLp77A1B.js";import{S as d}from"./Section-CzQEEFga.js";import{F as u}from"./FileCardList-CVSU0duN.js";import{F}from"./FileCard-BThkLeEg.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-D7LUbAoI.js";import{B as f}from"./Button-Bhwtl7lS.js";import{A as b}from"./ActionGroup-CluBBM4L.js";import{a0 as j,a1 as B}from"./IconWarning-tem5fYZU.js";import{H as g}from"./Heading-z0nw7kl0.js";import{F as h}from"./FileField-4QeSCkxj.js";import{T as O}from"./Text-stRMORLN.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-C9Ejvx8Q.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./index-C4zw0wF6.js";import"./useFieldComponent-CxTx8kf3.js";import"./utils-uxa8p5vl.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CN5O_J5f.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--5Xg4_7C.js";import"./useFocus-C3KeEXKn.js";import"./useCollator-DTKHLM3i.js";import"./context-CRsgLXVa.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./useFocusRing-XbCssGNL.js";import"./Button-DXXdMML6.js";import"./ProgressBar-BzTC4ZoK.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BU6JmZbW.js";import"./useFocusable-CIjhaoEP.js";import"./VisuallyHidden-ma9EryWn.js";import"./ContextMenuSection-Bnn5st86.js";import"./ActionBatch-B-iA-QhY.js";import"./useOverlayController-Cqh70DsD.js";import"./useStatic-CD9yQ0OW.js";import"./browser-Bgj4nWuI.js";import"./getActionGroupSlot-CnwwqW5a.js";import"./dynamic-Cw331Sxy.js";import"./Dialog-BIvPa65M.js";import"./RSPContexts-DnJfGcBy.js";import"./OverlayArrow-DXkjfcol.js";import"./useControlledState-BekZOXin.js";import"./Collection-DFwYI0R_.js";import"./CollectionBuilder-d7mW72oL.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./Separator-BVmogCl8.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./FocusScope-eq4FNALu.js";import"./ColumnLayout-kDBHUEfW.js";import"./Avatar-tB7BsOHv.js";import"./AlertIcon-BbY5ij-p.js";import"./Image-C-Y5Dsas.js";import"./Link-Zi-5il-W.js";import"./OptionsButton-sO8ZKTuM.js";import"./ButtonView-CU_3hWkX.js";import"./ContextMenuTriggerView-CLET4FWG.js";import"./ContextMenuTrigger-DnT2ABxw.js";import"./OverlayTrigger-DSgpEliW.js";import"./OverlayContextProvider-tTA2mi55.js";import"./FieldError-DY7Z21GR.js";import"./FieldError-Cjk2dDkd.js";import"./AlertText-BEiS7w5p.js";import"./ActionGroupView-RMB2K6y-.js";import"./Content-DSBqSoeM.js";import"./Modal-0SZ3rvM2.js";import"./Overlay-Dc_wkWXh.js";import"./LoadingSpinner-CAXp-11u.js";import"./Flex-CUcKFbzJ.js";import"./useRef-BQ2mDf6F.js";import"./remote-C7_Ru_dB.js";import"./Heading-BiABk9m9.js";import"./useFormValidation-Dn8WL8kF.js";import"./Input-BQCGNTF8.js";import"./EmulatedBoldText-DkfYMVU4.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
