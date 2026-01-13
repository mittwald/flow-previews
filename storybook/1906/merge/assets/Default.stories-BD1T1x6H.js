import{r as x,j as e}from"./iframe-S6a6IBGW.js";import{F as t}from"./FileDropZone-BcJvRwRJ.js";import{S as d}from"./Section-C9-cQ6KY.js";import{F as u}from"./FileCardList-sWAq-l9x.js";import{F}from"./FileCard-DtfYQ9il.js";import{u as S,F as C,t as D}from"./Form-BAvgWy2g.js";import{S as y}from"./ResetButton-CPyRYTgg.js";import{B as f}from"./Button-B33IEcV3.js";import{A as b}from"./ActionGroup-DgNfA0Me.js";import{$ as j,a0 as B}from"./IconWarning-D0GzEl3K.js";import{H as g}from"./Heading-OEjBXIpA.js";import{F as h}from"./FileField-CU8l6sX0.js";import{T as O}from"./Text-CLecf1p6.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Dc31gBj_.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./index-C8QsAo4A.js";import"./useFieldComponent-C7YS4lAg.js";import"./utils-B8ercvf4.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-XPHoRcaC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-I1naabyM.js";import"./useFocus--oJxMCZo.js";import"./useCollator-DUo0f6hW.js";import"./context-CXquv49b.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./Button-BnRrl5N8.js";import"./ProgressBar-f-zsGPPU.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BUR3MtQf.js";import"./useFocusRing-pCPuJRtg.js";import"./useFocusable-DTyt-kbS.js";import"./VisuallyHidden-BN0xrgav.js";import"./ContextMenuSection-CXnCaYUl.js";import"./Action-D3nLwb6j.js";import"./context-DRdj7qWz.js";import"./useStatic-DJ0VynuZ.js";import"./browser-C6w_OiT9.js";import"./getActionGroupSlot-13Cq_BqQ.js";import"./dynamic-wFxxwS8T.js";import"./Dialog-C_QuIxo5.js";import"./RSPContexts-DL3JmftS.js";import"./OverlayArrow-B-DFCcpR.js";import"./useControlledState-BHa0sYDq.js";import"./Collection-BbaIJWHd.js";import"./CollectionBuilder-Cv1bZrpu.js";import"./SelectionIndicator-DSvv5afS.js";import"./Separator-CvanrP9u.js";import"./SelectionManager-Bk0PvS8a.js";import"./useEvent--nB5Gcy3.js";import"./FocusScope-BEprXHob.js";import"./ColumnLayout-B6Wy8rnm.js";import"./Avatar-DiCx8oDo.js";import"./AlertIcon-DgqrgpKu.js";import"./Image-C8_H4hBq.js";import"./Link-D-URpzvg.js";import"./OptionsButton-DeyRJVrF.js";import"./ButtonView-Dfq4uPzV.js";import"./ContextMenuTriggerView-ebO7UtLM.js";import"./ContextMenuTrigger-D5927t21.js";import"./OverlayTrigger-4uRsw7zJ.js";import"./OverlayContextProvider-BTF4iLEG.js";import"./FieldError-BcgoZm7g.js";import"./FieldError-BRuAmhML.js";import"./AlertText-CIQFF9OC.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BzNMjQrs.js";import"./LoadingSpinner-ngl346gH.js";import"./remote-CCjzztUh.js";import"./Heading-B4TNl6d1.js";import"./useFormValidation-DHFSk2Ol.js";import"./Input-BCdJg_3v.js";import"./EmulatedBoldText-PjFBcLAJ.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
