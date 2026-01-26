import{r as x,j as e}from"./iframe-ICCBaEZ0.js";import{F as t}from"./FileDropZone-0kHCsZUG.js";import{S as d}from"./Section-f7ELsjIS.js";import{F as u}from"./FileCardList-PpnJ7y-W.js";import{F}from"./FileCard-v08Ppg2t.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DHM0HwV0.js";import{B as f}from"./Button-BPUjkcWl.js";import{A as b}from"./ActionGroup-Cyu4G9Rw.js";import{$ as j,a0 as B}from"./IconWarning-DNTau7lk.js";import{H as g}from"./Heading-_OIl0AzZ.js";import{F as h}from"./FileField-CDygFhMT.js";import{T as O}from"./Text-wotACWdr.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Cceg7c_V.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./index-Dbcsq1pl.js";import"./useFieldComponent-C2gLyH5u.js";import"./utils-Bdyed02U.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-6VRpzXYD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./useFocus-sIQn0Mmu.js";import"./useCollator-hfiTQ-EU.js";import"./context-BA_6GkxW.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./Button-CEB885Bq.js";import"./ProgressBar-DNR75UAD.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bkx3Up2v.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./VisuallyHidden-CIUq3upT.js";import"./ContextMenuSection-CUOZwZ8m.js";import"./Action-BI-eqtgf.js";import"./context-CFn3lEGQ.js";import"./useStatic-EBffme0U.js";import"./browser-BXZux_wF.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./dynamic-D4nz3o_q.js";import"./Dialog-YdLNLYvV.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./useControlledState-0-xiytms.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./FocusScope-BgxYME-V.js";import"./ColumnLayout-B-kEP-Bk.js";import"./Avatar-rKS9jKjL.js";import"./AlertIcon-DVbl3jDT.js";import"./Image-Bd3OW3OU.js";import"./Link-S_XtGvhq.js";import"./OptionsButton-X0H4jbEP.js";import"./ButtonView-BszEJvVk.js";import"./ContextMenuTriggerView-CeuwtNtA.js";import"./ContextMenuTrigger-CdIb2FEp.js";import"./OverlayTrigger-CZVSbWDN.js";import"./OverlayContextProvider-DutSGNyV.js";import"./FieldError-CXiPiawI.js";import"./FieldError-Uso8nKHu.js";import"./AlertText-CQRiaMTC.js";import"./useRef-CiWut0dQ.js";import"./LoadingSpinner-DZTaEi_R.js";import"./remote-CrBsxa38.js";import"./Heading-BmRm-FE-.js";import"./useFormValidation-BK0HiA-u.js";import"./Input-CQyHZiU6.js";import"./EmulatedBoldText-CJhsU2oU.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
