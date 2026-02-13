import{r as x,j as e}from"./iframe-DYxqCFL4.js";import{F as t}from"./FileDropZone-BkIJksXm.js";import{S as d}from"./Section-BBD9utnH.js";import{F as u}from"./FileCardList-sLg5WH8R.js";import{F}from"./FileCard-CSWmnLui.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DZYHoig3.js";import{B as f}from"./Button-DGbEpLIN.js";import{A as b}from"./ActionGroup-BmI-EAdu.js";import{a0 as j,a1 as B}from"./IconWarning-BGRYHRhg.js";import{H as g}from"./Heading-HOIK8yqY.js";import{F as h}from"./FileField-CT_pqj8t.js";import{T as O}from"./Text-BnII0mKt.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-JqOhg7-u.js";import"./clsx-B-dksMZM.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./index-DJ6wSCwd.js";import"./useFieldComponent-DjSvrfgm.js";import"./utils-C1fpOvwY.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B3xsuc84.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-mobDYg92.js";import"./useFocus-C6GqelOx.js";import"./useCollator-sfCu5teu.js";import"./context-CfMfa2C9.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./useFocusRing-Byzp35A7.js";import"./Button-BPYpcxnx.js";import"./ProgressBar-Cu5usRFF.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DMR80VPZ.js";import"./useFocusable-8bvqGkWP.js";import"./VisuallyHidden-CZrO0U0i.js";import"./ContextMenuSection-BPGq4V6i.js";import"./ActionBatch-BfjBVLTQ.js";import"./useOverlayController-BZwKG1Aj.js";import"./useStatic-BMoi980u.js";import"./browser-CmbZy-PD.js";import"./getActionGroupSlot-ChAJy8AN.js";import"./dynamic-C8CcPw_G.js";import"./Dialog-CiGSJFZ7.js";import"./RSPContexts-DXUT3Wo8.js";import"./OverlayArrow-R2NHUYtB.js";import"./useControlledState-Co5SihOL.js";import"./Collection-CpIPCaxL.js";import"./CollectionBuilder-B3eaJP6J.js";import"./SelectionIndicator-D_wBgdeg.js";import"./Separator-3N5Q9dE4.js";import"./SelectionManager-BMzSjOT-.js";import"./useEvent-CIxnPnFa.js";import"./FocusScope-BC21MQ9n.js";import"./ColumnLayout-UiMhxA5X.js";import"./Avatar-DbaVCiQx.js";import"./AlertIcon-B9fJ359s.js";import"./Image-B-kiAWRg.js";import"./Link-BIzdt31l.js";import"./OptionsButton-DtJcN8ku.js";import"./ButtonView-CL1jDIH8.js";import"./ContextMenuTriggerView-Bqqkx99G.js";import"./ContextMenuTrigger-3VQSDPR2.js";import"./OverlayTrigger-B4TdY9D0.js";import"./OverlayContextProvider-tFRc17qj.js";import"./FieldError-sWm_iZNp.js";import"./FieldError-B9AV5Ok7.js";import"./AlertText-D5ZV5CrS.js";import"./ActionGroupView-DEw0JaMM.js";import"./Content-DzIiqqqA.js";import"./Modal-DUoogNsU.js";import"./Overlay-CnLralOh.js";import"./LoadingSpinner-BY4JXLJQ.js";import"./Flex-BH_NinKX.js";import"./useRef-BD_w6wL8.js";import"./remote-WwxW7fyl.js";import"./Heading-DbYjHDJK.js";import"./useFormValidation-FkHTzTfc.js";import"./Input-DB_F_n6I.js";import"./EmulatedBoldText-D6xSemQT.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
