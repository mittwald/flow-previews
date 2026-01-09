import{r as x,j as e}from"./iframe-DB4UlQ_F.js";import{F as t}from"./FileDropZone-0OT37tI9.js";import{S as d}from"./Section-CwTyfRBn.js";import{F as u}from"./FileCardList-N1xyfLqU.js";import{F}from"./FileCard-BPQAeS1K.js";import{u as S,F as C,t as D}from"./Form-CprAAj6n.js";import{S as y}from"./ResetButton-Cbtj9u5S.js";import{B as f}from"./Button-DYIAULzM.js";import{A as b}from"./ActionGroup-DYVJBbzZ.js";import{Z as j,_ as B}from"./IconWarning-D6sMwWyV.js";import{H as g}from"./Heading-B71UuISa.js";import{F as h}from"./FileField-BNiyFFv3.js";import{T as O}from"./Text-CvhufvNl.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CElJybIg.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./index-BSqJ1-JW.js";import"./useFieldComponent-Dp69OqtL.js";import"./utils-B6Q0cVYp.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-De_rG2Pz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-bn4O9qyi.js";import"./useFocus-mLt6Jcka.js";import"./useCollator-BdTHcpkR.js";import"./context-BeH9c2u_.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./Button-L-mN_PGj.js";import"./ProgressBar-BtSLHqLj.js";import"./Label-CzwPVXKy.js";import"./Hidden-BofTzQhQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CDGll4uD.js";import"./useFocusRing-BToYuWbv.js";import"./useFocusable-BfPamkyW.js";import"./VisuallyHidden-C3r-i5Fv.js";import"./ContextMenuSection-BHyvjJMz.js";import"./Action-D44Jy6S7.js";import"./context-b0VtR6po.js";import"./useStatic-BsW-2tBw.js";import"./browser-CMEWPYW9.js";import"./getActionGroupSlot-BJEuMMsc.js";import"./dynamic-CewJ3DJw.js";import"./Dialog-B4nT46da.js";import"./RSPContexts-Br1rngEm.js";import"./OverlayArrow-BH8gVRz-.js";import"./useControlledState-2lUl0kro.js";import"./Collection-e6TIFm8x.js";import"./CollectionBuilder-DlEUUA4I.js";import"./SelectionIndicator-D87wG6Zb.js";import"./Separator-Bcm53B3D.js";import"./SelectionManager-Ber2ZhG4.js";import"./useEvent-C6FAavwc.js";import"./FocusScope-D57vEPf5.js";import"./ColumnLayout-C-Ka8lDv.js";import"./Avatar-z7IgWJ_K.js";import"./AlertIcon-BN1UL3Xe.js";import"./Image-CmP1h6wq.js";import"./Link-2paQW1ed.js";import"./OptionsButton-stcXmuyb.js";import"./ButtonView-DXPkNEhj.js";import"./ContextMenuTriggerView-CpNQcH8s.js";import"./ContextMenuTrigger-CAHVW_ZA.js";import"./OverlayTrigger-qoBp8HgP.js";import"./OverlayContextProvider-CZHDlMnp.js";import"./FieldError-7mdFLW8I.js";import"./FieldError-CegzLELq.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-D2qb2cPS.js";import"./LoadingSpinner-BUzKTNdb.js";import"./remote-DOdcl-CB.js";import"./Heading-BIcTvsYt.js";import"./useFormValidation-Bt0uBrAk.js";import"./Input-DgHFnA4a.js";import"./EmulatedBoldText-1LQNM6BM.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
