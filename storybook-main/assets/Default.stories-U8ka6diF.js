import{r as x,j as e}from"./iframe-BB26x0WO.js";import{F as t}from"./FileDropZone-nLmEghfU.js";import{S as d}from"./Section-IPK-m1wF.js";import{F as u}from"./FileCardList-Glt302rG.js";import{F}from"./FileCard-BxnRI3sa.js";import{u as S,F as C,t as D}from"./Form-D1o3KJhA.js";import{S as y}from"./ResetButton-CQhqclH6.js";import{B as f}from"./Button-BTY4YrG_.js";import{A as b}from"./ActionGroup-B49LzYT3.js";import{$ as j,a0 as B}from"./IconWarning-xtBRgQwR.js";import{H as g}from"./Heading-DjuXjgcE.js";import{F as h}from"./FileField-D7ZwmPzz.js";import{T as O}from"./Text-CVJJy1PS.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bf563Xdl.js";import"./clsx-B-dksMZM.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./index-CQcoQf9d.js";import"./useFieldComponent-uqIFFsha.js";import"./utils-B0cjT-cu.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C-QQ-f-7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CXkgZKB9.js";import"./useFocus-BTahgc6b.js";import"./useCollator-Cs7p5znT.js";import"./context-CFwMSK2D.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./Button-CmW95qcG.js";import"./ProgressBar-1d3YwxHK.js";import"./Label-xrwNKiTo.js";import"./Hidden-Pwu5MO4E.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DgIl3AW_.js";import"./useFocusRing-3NylsfEU.js";import"./useFocusable-BCoGMlTE.js";import"./VisuallyHidden-GAE_mByz.js";import"./ContextMenuSection-DGimkJAp.js";import"./Action-DydPJm0t.js";import"./context-tsnqiuvV.js";import"./useStatic-CBwNmb4h.js";import"./browser-CM4yKXDn.js";import"./getActionGroupSlot-DvPCnOJu.js";import"./dynamic-iWxR2zWf.js";import"./Dialog-rd60ApeF.js";import"./RSPContexts-DeiYbaO6.js";import"./OverlayArrow-DRxGu_ip.js";import"./useControlledState-Bi3RtZ50.js";import"./Collection-3Y1iCCsF.js";import"./CollectionBuilder-DSmRSiR5.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./Separator-BCEfhEi-.js";import"./SelectionManager-CGOc2Oun.js";import"./useEvent-Dv3TI5So.js";import"./FocusScope-CBDPVkwa.js";import"./ColumnLayout-CioSlYbt.js";import"./Avatar-B0PIZIjb.js";import"./AlertIcon-8w60vasN.js";import"./Image-Du3loSXk.js";import"./Link-Bbuns-ax.js";import"./OptionsButton-1eZlQwYD.js";import"./ButtonView-DHrXopea.js";import"./ContextMenuTriggerView-DMuL_Pdm.js";import"./ContextMenuTrigger-BcfkOMVx.js";import"./OverlayTrigger-CBbEoXQd.js";import"./OverlayContextProvider-pMPh9iwI.js";import"./FieldError-EbPb3FIT.js";import"./FieldError-BdEQwJOQ.js";import"./AlertText-By5Jrr-P.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BoNolS4p.js";import"./LoadingSpinner-jG3qv65g.js";import"./remote-BOIRgCVv.js";import"./Heading-CYNLL9tG.js";import"./useFormValidation-CSSQUpRU.js";import"./Input-CX7n_Ikd.js";import"./EmulatedBoldText-BMfkuJfp.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
