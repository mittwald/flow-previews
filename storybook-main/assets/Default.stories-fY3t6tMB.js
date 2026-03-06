import{r as x,j as e}from"./iframe-BLMVSPV3.js";import{F as t}from"./FileDropZone-Cet2qviD.js";import{S as d}from"./Section-Sirm0ClO.js";import{F as u}from"./FileCardList-DO0cpLPD.js";import{F}from"./FileCard-CEWSe-t1.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-C6SwIYKJ.js";import{B as f}from"./Button-RfhP7QLX.js";import{A as b}from"./ActionGroup-BE2BWOAA.js";import{a0 as j,a1 as B}from"./IconWarning-DFK0SIT3.js";import{H as g}from"./Heading-BFhkb_kv.js";import{F as h}from"./FileField-DjgfIBPE.js";import{T as O}from"./Text-CGLO_VNW.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DlcWACFA.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B0rn9FTV.js";import"./index-YglXY0sG.js";import"./index-B-iUx4vd.js";import"./useFieldComponent-y-VnQdYS.js";import"./utils-je6Mfjnf.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DPHxU6u7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcRiwsCk.js";import"./useFocus-B92CKOsl.js";import"./useCollator-DnWD9muh.js";import"./context-BPm1HUwp.js";import"./useLocalizedStringFormatter-CLP_FKMn.js";import"./useFocusRing-IVoDVSxb.js";import"./Button-4lGsfIj0.js";import"./ProgressBar-qhTm7W5b.js";import"./Label-BuUunTyu.js";import"./Hidden-BcBJmzcB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DgsdN2D5.js";import"./useFocusable-DsXmOaAq.js";import"./VisuallyHidden-DQ4qIwkH.js";import"./ContextMenuSection-BvWYHMvE.js";import"./ActionBatch-Cx_n21HW.js";import"./useOverlayController-DYQ-WflD.js";import"./useStatic-BWoTOt9k.js";import"./browser-CtcijgRV.js";import"./getActionGroupSlot-BdFM70uG.js";import"./dynamic-DAjDUp_G.js";import"./Dialog-BT74UQ_T.js";import"./RSPContexts-BTwsU_Cp.js";import"./OverlayArrow-DqBJvRH_.js";import"./useControlledState-Bp8O9Zqw.js";import"./Collection-D_0q5y9E.js";import"./CollectionBuilder-DVFPK5dr.js";import"./SelectionIndicator-MBj-w85S.js";import"./Separator-CN6eRPM4.js";import"./SelectionManager-Dh2FxkL1.js";import"./useEvent-UzzlN-16.js";import"./FocusScope-uhT9mVfL.js";import"./ColumnLayout-C3JAoHUD.js";import"./Avatar-6WZJIgHY.js";import"./AlertIcon-BrGMsY0L.js";import"./Image-meUkFuWq.js";import"./Link-CC9mDZZh.js";import"./OptionsButton-Dra1fgKR.js";import"./ButtonView-BFvaDy1U.js";import"./ContextMenuTriggerView-BP-JKDKY.js";import"./ContextMenuTrigger-CBsmsL4G.js";import"./OverlayTrigger-CUid1uyF.js";import"./OverlayContextProvider-D_krly58.js";import"./FieldError-C9r0kVik.js";import"./FieldError-CUXp9-J-.js";import"./AlertText-Btk8Ksd_.js";import"./ActionGroupView-Ck11gez5.js";import"./Content-DUxgSWC5.js";import"./Modal-Bevsmrtz.js";import"./Overlay-CEllIMRS.js";import"./LoadingSpinner-BCnxKzgI.js";import"./Flex-DMIA7a_N.js";import"./useRef-Bngm3SGC.js";import"./remote-B_iWR4WH.js";import"./Heading-DGpyEp1Z.js";import"./useFormValidation-CsmzuQo6.js";import"./Input-BNOgaKSE.js";import"./EmulatedBoldText-DNZQf_gm.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
