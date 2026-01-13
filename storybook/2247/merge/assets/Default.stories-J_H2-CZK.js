import{r as x,j as e}from"./iframe-D5OSMSYj.js";import{F as t}from"./FileDropZone-CrdFsw1K.js";import{S as d}from"./Section-Dz5Ps6FG.js";import{F as u}from"./FileCardList-DY2-Qlpd.js";import{F}from"./FileCard-DzJrwfho.js";import{u as S,F as C,t as D}from"./Form-D7Km85yr.js";import{S as y}from"./ResetButton-CVZRCqdy.js";import{B as f}from"./Button-DTe5su69.js";import{A as b}from"./ActionGroup-EdAZBuJq.js";import{$ as j,a0 as B}from"./IconWarning-aBoV8v8e.js";import{H as g}from"./Heading-CnkvXclq.js";import{F as h}from"./FileField-DCLmOAE7.js";import{T as O}from"./Text-DAhCT_ah.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DMxkZGfd.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./index-Bwk6EGM5.js";import"./useFieldComponent-yQbkUBpw.js";import"./utils-B2fStg81.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DxpiEtGq.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQkx52KA.js";import"./useFocus-C6h-AdFL.js";import"./useCollator-BW95ADKZ.js";import"./context-CCC3vGzE.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./Button-CTfGmXCg.js";import"./ProgressBar-Dg6iR4wK.js";import"./Label-Bh0iBwH8.js";import"./Hidden-NmD_pG7l.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Db_mMnan.js";import"./useFocusRing-D5zyjxEp.js";import"./useFocusable-BBmYajA6.js";import"./VisuallyHidden-arLJjMse.js";import"./ContextMenuSection-DdCYek15.js";import"./Action-7Qb19ota.js";import"./context-g3auhbgQ.js";import"./useStatic-Ct4NfCBd.js";import"./browser-CPg_spJX.js";import"./getActionGroupSlot-BAkzknoy.js";import"./dynamic-B1x5IqP1.js";import"./Dialog-DOlt_k3K.js";import"./RSPContexts-BzWalm_3.js";import"./OverlayArrow-Ck8v0z1s.js";import"./useControlledState-BLX_f1Wx.js";import"./Collection-DJCIfP6r.js";import"./CollectionBuilder-b-gCN1Vs.js";import"./SelectionIndicator-BCMQtvaW.js";import"./Separator-BUClO3qk.js";import"./SelectionManager-flPals8o.js";import"./useEvent-Bc0Gn0fF.js";import"./FocusScope-fzjvqtWs.js";import"./ColumnLayout-t1PbuftC.js";import"./Avatar-BMdfWeYc.js";import"./AlertIcon-CDVTToII.js";import"./Image-BpMsLaPl.js";import"./Link-D6eMXHDa.js";import"./OptionsButton-CpAe28fy.js";import"./ButtonView-BHglFPrX.js";import"./ContextMenuTriggerView-DXJVuAua.js";import"./ContextMenuTrigger-DTFnJa2T.js";import"./OverlayTrigger-DrBj6jwS.js";import"./OverlayContextProvider-DZuBuoMh.js";import"./FieldError-DkXkFVgN.js";import"./FieldError-SdvWZoRR.js";import"./AlertText-BnzdsAWE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DSYCD1f5.js";import"./LoadingSpinner-BD9yQcJP.js";import"./remote-DoBIDVY0.js";import"./Heading-BpBqAeXs.js";import"./useFormValidation-BzDFxNXO.js";import"./Input-DK63hDT9.js";import"./EmulatedBoldText-Dm6vKeJS.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
