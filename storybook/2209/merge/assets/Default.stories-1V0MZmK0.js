import{r as x,j as e}from"./iframe-bJ_6fidF.js";import{F as t}from"./FileDropZone-EQGwGw-K.js";import{S as d}from"./Section-BIKV3qXu.js";import{F as u}from"./FileCardList-CIsXFpHr.js";import{F}from"./FileCard-brwzKWrj.js";import{u as S,F as C,t as D}from"./Form-Bkk_2nLu.js";import{S as y}from"./ResetButton-LNdHyolG.js";import{B as f}from"./Button-BnsDuM8z.js";import{A as b}from"./ActionGroup-CQfsB-uK.js";import{Z as j,_ as B}from"./IconWarning-BRVy1IKm.js";import{H as g}from"./Heading-DKGadcRU.js";import{F as h}from"./FileField-DkiVk-YW.js";import{T as O}from"./Text-38_GgC7q.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BgAMMpJW.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dc3IE02E.js";import"./index-BiU4KtXW.js";import"./index-DZS8fxXA.js";import"./useFieldComponent-uPh6Au6A.js";import"./utils-2JACcOpK.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BK6SVPNL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DgCjbnqL.js";import"./useFocus-DCEJi5pX.js";import"./useCollator-BcEDrZTh.js";import"./context-BRobVGip.js";import"./useLocalizedStringFormatter-DVRf4Nef.js";import"./Button-CFn0JrTH.js";import"./ProgressBar-B339qPNf.js";import"./Label-ITTSHdKZ.js";import"./Hidden-D-D3cT6t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DUWDHSym.js";import"./useFocusRing-BfXNN7l5.js";import"./useFocusable-s9iArTw-.js";import"./VisuallyHidden-BLAg7qtf.js";import"./ContextMenuSection-CO0mnEOv.js";import"./Action-BNfya_PE.js";import"./context-CiNdmr3l.js";import"./useStatic-BZPvcAPs.js";import"./browser-CDYbiXXK.js";import"./getActionGroupSlot-B0EdTSi2.js";import"./dynamic-B98QrFwh.js";import"./Dialog-DXm38-Rd.js";import"./RSPContexts-Du7Xg6Jz.js";import"./OverlayArrow-BzF-2SH6.js";import"./useControlledState-DiZTTo94.js";import"./Collection-BtgF6RLC.js";import"./CollectionBuilder-CsK04tEC.js";import"./SelectionIndicator-smcarjhT.js";import"./Separator-DIVM-WQV.js";import"./SelectionManager-oHLM6Xvs.js";import"./useEvent-CVxS1Lwc.js";import"./FocusScope-C6rup_Tq.js";import"./ColumnLayout-PaBNvAk_.js";import"./Avatar-DCSqPC8G.js";import"./AlertIcon-CfVIHwZG.js";import"./Image-Dfd2_YGL.js";import"./Link-Dn5sw_YH.js";import"./OptionsButton-yfmm7Xe_.js";import"./ButtonView-CeFFE66M.js";import"./ContextMenuTriggerView-BSHJyo65.js";import"./ContextMenuTrigger-D4Rx0Ajo.js";import"./OverlayTrigger-DxVxjcsU.js";import"./OverlayContextProvider-CnhKGutL.js";import"./FieldError-D9NzXF8I.js";import"./FieldError-BXkLcNaX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-IidQQV9-.js";import"./LoadingSpinner-Da58qKyF.js";import"./remote-BGnMaeOw.js";import"./Heading-Bbyv6ScP.js";import"./useFormValidation-CfG5OslG.js";import"./Input-Cc8ouKNt.js";import"./EmulatedBoldText-0Pd-4dNn.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
