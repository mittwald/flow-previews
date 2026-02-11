import{r as x,j as e}from"./iframe-BuRyV86k.js";import{F as t}from"./FileDropZone-6RlBQtwX.js";import{S as d}from"./Section-BWXoAIXO.js";import{F as u}from"./FileCardList-Ciro7cnC.js";import{F}from"./FileCard-BUsZ2Pzj.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-1DNuWBXl.js";import{B as f}from"./Button-CyndH9Xm.js";import{A as b}from"./ActionGroup-B0lwPl2x.js";import{a0 as j,a1 as B}from"./IconWarning-DAJxMizk.js";import{H as g}from"./Heading-oMtFtRoB.js";import{F as h}from"./FileField-Bcqw6wga.js";import{T as O}from"./Text-DPwKDAaR.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DYkWJClk.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./index-DXDzX26U.js";import"./useFieldComponent-Duyh6ShH.js";import"./utils-DCjU3VYp.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D3tRocSh.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9drM0Q_0.js";import"./useFocus-CQWcTqjz.js";import"./useCollator-rSEenu5t.js";import"./context-C6SHLczB.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./useFocusRing-CY0UXM2e.js";import"./Button-0f0DNfgK.js";import"./ProgressBar-sJd2s29u.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B_1LlkAk.js";import"./useFocusable-CtKU_QIU.js";import"./VisuallyHidden-BxxKUxYt.js";import"./ContextMenuSection-Mj7n-SRG.js";import"./Action-KY3p1CrK.js";import"./context-BBsiVWSW.js";import"./useStatic-Bozflp-3.js";import"./browser-DvnOBVed.js";import"./getActionGroupSlot-BzS6Espk.js";import"./dynamic-clmxwr04.js";import"./Dialog-aD4BOG19.js";import"./RSPContexts-Czmfvb19.js";import"./OverlayArrow-DmdSnWXA.js";import"./useControlledState-DYwoO1wA.js";import"./Collection-BEHIjUyH.js";import"./CollectionBuilder-W32wrNWH.js";import"./SelectionIndicator-r0KfSIub.js";import"./Separator-Bz6jqVd_.js";import"./SelectionManager-CGRbj4b-.js";import"./useEvent-LxFJ0S3x.js";import"./FocusScope-DBYeUwg2.js";import"./ColumnLayout-CBCn_pgB.js";import"./Avatar-MtKEt4cQ.js";import"./AlertIcon-CtbR1iuV.js";import"./Image-CxBFbLTr.js";import"./Link-w8uH5h7m.js";import"./OptionsButton-BC_wLiSV.js";import"./ButtonView-CxrixtJG.js";import"./ContextMenuTriggerView-CeSMhBGl.js";import"./ContextMenuTrigger-FuNFJt2Q.js";import"./OverlayTrigger-BevBDs3M.js";import"./OverlayContextProvider-BEH_6rpJ.js";import"./FieldError-CyZxViQf.js";import"./FieldError-BEkkBW9r.js";import"./AlertText-Cq6PpkxX.js";import"./useRef-dnDUVyEs.js";import"./LoadingSpinner-BX044VJ0.js";import"./remote-Cg9OAbJn.js";import"./Heading-BErX5OWg.js";import"./useFormValidation-DZRdJrD7.js";import"./Input-BOqi5cwZ.js";import"./EmulatedBoldText-m_25Q3I7.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
