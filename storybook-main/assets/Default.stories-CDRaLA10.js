import{r as x,j as e}from"./iframe-BLisfkW1.js";import{F as t}from"./FileDropZone-Hv3c8PFR.js";import{S as d}from"./Section-BpUd8Q8x.js";import{F as u}from"./FileCardList-CX5Wz3eR.js";import{F}from"./FileCard-CK2mAMvM.js";import{u as S,F as C,S as D,t as y}from"./FormRootError-D01m8GBs.js";import{B as f}from"./Button-BfYq4-Jl.js";import{A as b}from"./ActionGroup-BXQPUWqY.js";import{a0 as j,a1 as B}from"./IconWarning-Chxh05Fa.js";import{H as g}from"./Heading-D7iYFS4a.js";import{F as h}from"./FileField-BKxVQvZW.js";import{T as O}from"./Text-BzdTXRF7.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CZTgoZzH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./index-CURFR8tK.js";import"./useFieldComponent-DG2srt-t.js";import"./utils-B2KexK2G.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CMQTkDl6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DktisoZ5.js";import"./useFocus-CasiJiIj.js";import"./useCollator-BipIKgaT.js";import"./context-B09EtTwC.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./useFocusRing-whNl8W73.js";import"./Button-BryrJTx5.js";import"./ProgressBar-DldYxOmc.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bt2uh0Mh.js";import"./useFocusable-2bJXkpaN.js";import"./VisuallyHidden-y8IU71vp.js";import"./ContextMenuSection-bY8Y-pvV.js";import"./ActionBatch-Ba3fo7J6.js";import"./useOverlayController-UaqgI9Sz.js";import"./useStatic-Cf1wupkY.js";import"./browser-1YnzmFhG.js";import"./getActionGroupSlot-JAeF61ot.js";import"./dynamic-B3kpKjwM.js";import"./Dialog-YGNnE7N8.js";import"./RSPContexts-C6v4G0P9.js";import"./OverlayArrow-CazCWSIw.js";import"./useControlledState-BzKS6zrg.js";import"./Collection-B29ecyfu.js";import"./CollectionBuilder-CkN2XN_g.js";import"./SelectionIndicator-DkROylNb.js";import"./Separator-DUCS1p3N.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./FocusScope-CH3eRbFP.js";import"./ColumnLayout-2i0lQ9Xe.js";import"./Avatar-Cs3MsV-X.js";import"./AlertIcon-BH2ywHIc.js";import"./Image-B3LhoJRk.js";import"./Link-34msnoEh.js";import"./OptionsButton-DjcI363x.js";import"./ButtonView-DQ0cot0U.js";import"./ContextMenuTriggerView-DzfAf3I_.js";import"./ContextMenuTrigger-BY25kSqR.js";import"./OverlayTrigger-47H3bobw.js";import"./OverlayContextProvider-DGMJcgiT.js";import"./ActionGroupView-CzzYWmgf.js";import"./Content-B4EEZXPN.js";import"./Modal-C3_EO7YW.js";import"./Overlay-3FwDNFry.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./Flex-CtHT3-Wb.js";import"./useRef-DQg9ai21.js";import"./FieldError-ClH5zNHK.js";import"./FieldError-BmP7KZUf.js";import"./AlertText-DXmhqwQY.js";import"./remote-fMZF2a4s.js";import"./Heading-BRGk0Lny.js";import"./useFormValidation-BvwbNbVP.js";import"./Input-BNQv7Er9.js";import"./EmulatedBoldText-w1zEViUr.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
