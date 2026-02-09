import{r as x,j as e}from"./iframe-CJJ5mYnn.js";import{F as t}from"./FileDropZone-DFGL83D8.js";import{S as d}from"./Section-K47s4uAu.js";import{F as u}from"./FileCardList-DfEcmASq.js";import{F}from"./FileCard-CC2YKF_P.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-C05rPY-2.js";import{B as f}from"./Button-Cm9iNCfL.js";import{A as b}from"./ActionGroup-m72PHNb8.js";import{a0 as j,a1 as B}from"./IconWarning-7VhmiBC1.js";import{H as g}from"./Heading-L7ubE5sI.js";import{F as h}from"./FileField-CDsPtv3-.js";import{T as O}from"./Text-DETIdekS.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BtJJHtNH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiwmgULL.js";import"./index-BXYeEKBx.js";import"./index-BAQeQlIi.js";import"./useFieldComponent-DJ8W8blY.js";import"./utils-CzEQVu_B.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C_ulbvRg.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-x08fx3rG.js";import"./useFocus-CcXCF9Et.js";import"./useCollator-BLS40MVU.js";import"./context-DMBLfBJz.js";import"./useLocalizedStringFormatter-DftyoPOP.js";import"./useFocusRing-DJCeTTlI.js";import"./Button-DBs8-zE9.js";import"./ProgressBar-DEVhhcDS.js";import"./Label-Crm05hod.js";import"./Hidden-AXn-SW1d.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BjSa1aTn.js";import"./useFocusable-BrXzadpt.js";import"./VisuallyHidden-CdWE-b-g.js";import"./ContextMenuSection-JlR6lzy2.js";import"./Action-DnpS_czG.js";import"./context-B6BNwR5M.js";import"./useStatic-DKMjC4UR.js";import"./browser-Dno-4bzG.js";import"./getActionGroupSlot-BsVn5MxR.js";import"./dynamic-CBA_L5x6.js";import"./Dialog-BJQKxFLq.js";import"./RSPContexts-BTWN0Dkl.js";import"./OverlayArrow-B9C6jKaR.js";import"./useControlledState-Bk661CCw.js";import"./Collection-B0Oi5e2R.js";import"./CollectionBuilder-DM6FVurg.js";import"./SelectionIndicator-t_QTWROb.js";import"./Separator-Ba2IdZvX.js";import"./SelectionManager-h8Xia05C.js";import"./useEvent-B7gpfAjJ.js";import"./FocusScope-Bpw-7kqG.js";import"./ColumnLayout-Qx7NMkKb.js";import"./Avatar-DPBaaRsP.js";import"./AlertIcon-CvbzdPY4.js";import"./Image-BxAG45qN.js";import"./Link-tqtFSZsm.js";import"./OptionsButton-CCamSw0Y.js";import"./ButtonView-BZWbi-p0.js";import"./ContextMenuTriggerView-615mj4O8.js";import"./ContextMenuTrigger-BGsLleQ5.js";import"./OverlayTrigger-BPzqtZtz.js";import"./OverlayContextProvider-DxcnF3G9.js";import"./FieldError-DFjBSzci.js";import"./FieldError-C22n8dTl.js";import"./AlertText-DqO2-SeN.js";import"./useRef-BataXbH4.js";import"./LoadingSpinner-BkLfehTA.js";import"./remote-__48vje9.js";import"./Heading-BM0-1eUi.js";import"./useFormValidation-DDUTP5mG.js";import"./Input-BDAHDxkc.js";import"./EmulatedBoldText-Ddbav1xv.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
