import{r as x,j as e}from"./iframe-VTkEMv55.js";import{F as t}from"./FileDropZone-D_dNjM6C.js";import{S as d}from"./Section-DjOUR5LH.js";import{F as u}from"./FileCardList-BOUUKl3S.js";import{F}from"./FileCard-JHuV4bEk.js";import{u as S,F as C,t as D}from"./Form-DYABidCX.js";import{S as y}from"./ResetButton-BQFORTG2.js";import{B as f}from"./Button-B9lvy9yg.js";import{A as b}from"./ActionGroup-C1fdFreL.js";import{Z as j,_ as B}from"./IconWarning-D408DR62.js";import{H as g}from"./Heading-DR27KtWq.js";import{F as h}from"./FileField-M-LfhTUD.js";import{T as O}from"./Text-DlbRcSah.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-C16rrbSB.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-PEtegy.js";import"./index-DtZzACyH.js";import"./index-D_xlAiD1.js";import"./useFieldComponent-CicShoBh.js";import"./utils-DPKXOmt2.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DB2BTtqM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C-geoXZs.js";import"./useFocus-JgmAf8eL.js";import"./useCollator-BSc2XrT4.js";import"./context-BVezW8pN.js";import"./useLocalizedStringFormatter-CUJ-Z77y.js";import"./Button-BKfoJr1S.js";import"./ProgressBar-6h4xV7_x.js";import"./Label-BRaJlgoE.js";import"./Hidden-d-f11Ccs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cb2XrqKT.js";import"./useFocusRing-BeV8_2Yg.js";import"./useFocusable-CzgiUJAu.js";import"./VisuallyHidden-DjbItwE4.js";import"./ContextMenuSection-CWe96eWW.js";import"./Action-DV-QBt8x.js";import"./context-CeKSAP77.js";import"./useStatic-OVy-y77u.js";import"./browser-_Qir5MkB.js";import"./getActionGroupSlot-Bve5nwK1.js";import"./dynamic-BSd9oB0r.js";import"./Dialog-Qb8RaXBy.js";import"./RSPContexts-wdKGWz4J.js";import"./OverlayArrow-CyTNZBgT.js";import"./useControlledState-CxodNXny.js";import"./Collection-xr8-TVrR.js";import"./CollectionBuilder-DhJAnH_i.js";import"./SelectionIndicator-CYSMLMH7.js";import"./Separator-BE0n3_oB.js";import"./SelectionManager-G-GDhrqF.js";import"./useEvent-Cgy893y9.js";import"./FocusScope-CTtHroqL.js";import"./ColumnLayout-D7IWZP8T.js";import"./Avatar-Bom431z7.js";import"./AlertIcon-CHQuhrRU.js";import"./Image-CGI2K-Ci.js";import"./Link-DkhtPTod.js";import"./OptionsButton-C2kPVHst.js";import"./ButtonView-C04s0MYU.js";import"./ContextMenuTriggerView-H6Mjp9Zy.js";import"./ContextMenuTrigger-DZUBcdZH.js";import"./OverlayTrigger-DkpyXFVa.js";import"./OverlayContextProvider-CbIHT6gb.js";import"./FieldError-B1IV40_q.js";import"./FieldError-CFdAmcbB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Da-vd52Y.js";import"./LoadingSpinner-BWeGH-7c.js";import"./remote-pRnbNSGs.js";import"./Heading-DNyZLCgr.js";import"./useFormValidation-CNiU2G-p.js";import"./Input-B9tYQbF3.js";import"./EmulatedBoldText-BYZc_oy6.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
