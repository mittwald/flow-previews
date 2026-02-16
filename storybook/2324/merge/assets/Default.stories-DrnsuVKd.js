import{r as x,j as e}from"./iframe-CdHyQgwh.js";import{F as t}from"./FileDropZone-oXR4K5ZR.js";import{S as d}from"./Section-ZayZowyU.js";import{F as u}from"./FileCardList-DVbwe1LL.js";import{F}from"./FileCard-Ovg8VBWW.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DIOtYJtW.js";import{B as f}from"./Button-B83uT_W5.js";import{A as b}from"./ActionGroup-CFPYc31d.js";import{a0 as j,a1 as B}from"./IconWarning-DGc3SgEa.js";import{H as g}from"./Heading-ChBOMWT5.js";import{F as h}from"./FileField-CbiF9-E4.js";import{T as O}from"./Text-CG9Jqgcw.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-ClhvV5js.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7-oBhxO.js";import"./index-C1bimC6f.js";import"./index--KyPRnlY.js";import"./useFieldComponent-t62DY9AA.js";import"./utils-B0AChKxF.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CFtcNM5e.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DXx1BftH.js";import"./useFocus-D4xdQDkq.js";import"./useCollator-DHN-qUKB.js";import"./context--lHaHpmz.js";import"./useLocalizedStringFormatter-UNvRhnZH.js";import"./useFocusRing-Ba3uGuMn.js";import"./Button-C8XSc9bU.js";import"./ProgressBar-DEPx6SkE.js";import"./Label-Cm5GkE6R.js";import"./Hidden-DJi7BiD_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIa0iaS-.js";import"./useFocusable-CIZyv2_u.js";import"./VisuallyHidden-U7btBlyO.js";import"./ContextMenuSection-1USXN4JB.js";import"./ActionBatch-DZLzYfk2.js";import"./useOverlayController-Cw4NEVT3.js";import"./useStatic-BBvdmwt_.js";import"./browser-CBJMDWdB.js";import"./getActionGroupSlot-Bv8pOp0w.js";import"./dynamic-CJo41kua.js";import"./Dialog-DGMm3KA5.js";import"./RSPContexts-DthjkPm0.js";import"./OverlayArrow-Lhpnfcsg.js";import"./useControlledState-D2jLiTCX.js";import"./Collection-kJPXxCPQ.js";import"./CollectionBuilder-7T-5iTGH.js";import"./SelectionIndicator-DV4fwApE.js";import"./Separator-DJ7zA3-I.js";import"./SelectionManager-C2VB5dtW.js";import"./useEvent-BCEPVcfC.js";import"./FocusScope-OuWnR4TG.js";import"./ColumnLayout-CaV_2vby.js";import"./Avatar-rRUXyTmn.js";import"./AlertIcon-yA83KE1p.js";import"./Image-BqyY9uOU.js";import"./Link-BTrSypjZ.js";import"./OptionsButton-DAginKVe.js";import"./ButtonView-D4pWD16C.js";import"./ContextMenuTriggerView-BJVe7xc3.js";import"./ContextMenuTrigger-Dd73OXcf.js";import"./OverlayTrigger-A2pu6fZJ.js";import"./OverlayContextProvider-CjArtki4.js";import"./FieldError-BmlEdUcT.js";import"./FieldError-BTLVyZmC.js";import"./AlertText-DldHmlNs.js";import"./ActionGroupView-CSh8Io46.js";import"./Content-CeVPKDmn.js";import"./Modal-DZut7RYA.js";import"./Overlay-BZoP2uMy.js";import"./LoadingSpinner-DJPu7RL-.js";import"./Flex-B7-1TfDw.js";import"./useRef-BBhsdY2o.js";import"./remote-BRyh19SP.js";import"./Heading-CxNojwif.js";import"./useFormValidation-8M-A-L7s.js";import"./Input-DK8ERkio.js";import"./EmulatedBoldText-C0e2olgf.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
