import{r as x,j as e}from"./iframe-BUX4ZqHF.js";import{F as t}from"./FileDropZone-n1x4IubC.js";import{S as d}from"./Section-DIg16xJ5.js";import{F as u}from"./FileCardList-Dcbl0th3.js";import{F}from"./FileCard-CQjHYZvl.js";import{u as S,F as C,t as D}from"./Form-uWo6WJWO.js";import{S as y}from"./ResetButton-DCTmDlFv.js";import{B as f}from"./Button-BQks1Fwk.js";import{A as b}from"./ActionGroup-BG42jB9j.js";import{$ as j,a0 as B}from"./IconWarning-CQ3vdTUk.js";import{H as g}from"./Heading-CZDnCkj5.js";import{F as h}from"./FileField-D4EY9DAo.js";import{T as O}from"./Text-CCD2jWDE.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BPHsQrZt.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./index-BP0Kc6JB.js";import"./useFieldComponent-L2xw4dQD.js";import"./utils-D9iTInv6.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BG7MORzn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVc7LJa4.js";import"./useFocus-CJRF0W0a.js";import"./useCollator-j_WBsrii.js";import"./context-DdyqVFXP.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./Button-C7cH5OT2.js";import"./ProgressBar-D_H4fWP7.js";import"./Label-I8DqILoy.js";import"./Hidden-CmsGFsNY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqXzXpsh.js";import"./useFocusRing-LYLGckDp.js";import"./useFocusable-CNxG1VTZ.js";import"./VisuallyHidden-CEZo4IbP.js";import"./ContextMenuSection-B-plY6qU.js";import"./Action-BoSxlb-x.js";import"./context-DLe4PJj-.js";import"./useStatic-HiZWtrs6.js";import"./browser-D0x3Xdqp.js";import"./getActionGroupSlot-BiFvGjQj.js";import"./dynamic-C-JL21_Y.js";import"./Dialog-Ds9eM6L5.js";import"./RSPContexts-CCyvn2fa.js";import"./OverlayArrow-BDz2U1dX.js";import"./useControlledState-CgyNYXn6.js";import"./Collection-J1EtBqZM.js";import"./CollectionBuilder-CBbbBxBU.js";import"./SelectionIndicator-C49t11ym.js";import"./Separator-DMMpEXgu.js";import"./SelectionManager-CFGiEO44.js";import"./useEvent-CCX_Td5o.js";import"./FocusScope-CKMlMtX2.js";import"./ColumnLayout-BzZM9bnI.js";import"./Avatar-BRdiAgaH.js";import"./AlertIcon-B17jmh6q.js";import"./Image-BM9mKDmk.js";import"./Link-CRkcacII.js";import"./OptionsButton-CJPDxqU2.js";import"./ButtonView-BL_EZlKK.js";import"./ContextMenuTriggerView-DUnbBP4-.js";import"./ContextMenuTrigger-CMnatttX.js";import"./OverlayTrigger-DrYjWhwY.js";import"./OverlayContextProvider-DK3zJnZ3.js";import"./FieldError-BcNphJCj.js";import"./FieldError-DwISghd1.js";import"./AlertText-C1IAOcr2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-HkbLjGA6.js";import"./LoadingSpinner-DAzOOzOm.js";import"./remote-CM65cF_Q.js";import"./Heading-Dcla-H3e.js";import"./useFormValidation-CdmTUY1H.js";import"./Input-Dt9-alkO.js";import"./EmulatedBoldText-B3B0n9A6.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
