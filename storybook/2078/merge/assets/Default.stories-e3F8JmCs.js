import{r as x,j as e}from"./iframe-DW8JgK09.js";import{F as t}from"./FileDropZone-DIdI_SSj.js";import{S as u}from"./Section-BDXmkbnW.js";import{F}from"./FileCardList-33CRgMSg.js";import{F as f}from"./FileCard-B07prYN7.js";import{u as E,F as W,t as G}from"./Form-CbwLg-A7.js";import{B as s}from"./Button-DVfVMpGI.js";import{A as M}from"./ActionGroup-DxaPJSWg.js";import{_ as j,$ as q}from"./IconWarning-Bj3cOyEj.js";import{H as g}from"./Heading-CaIz_fSc.js";import{F as h}from"./FileField-MEV4IrHb.js";import{T as v}from"./Text-DqrSOA-D.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BejafsYC.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVStQUuA.js";import"./index-SxHndKnJ.js";import"./index-7zpoyBXT.js";import"./utils-qQbsMKok.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Dj-iJoJL.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-CI_LuAln.js";import"./Hidden-DtieFvyE.js";import"./useFocus-BeoGO6Gw.js";import"./useCollator-JcvJSriM.js";import"./context-MVg0njeL.js";import"./useLocalizedStringFormatter-Dqx84O-E.js";import"./Button-B7FVzAyg.js";import"./ProgressBar-CK1_umDo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Gti5y3pG.js";import"./useFocusRing-GKfEZ5du.js";import"./useFocusable-ClSVLyWP.js";import"./VisuallyHidden-Da3g07dP.js";import"./ContextMenuSection-CcJ6gQBU.js";import"./Action-CbSL4lf7.js";import"./context-BXN8qI2U.js";import"./useStatic-Dd3Fa8_Q.js";import"./browser-Ddqyq5_4.js";import"./getActionGroupSlot-GOPGQ3I0.js";import"./dynamic-B0cR68qH.js";import"./Dialog-Ch87mkCh.js";import"./RSPContexts-DSsYPi0N.js";import"./OverlayArrow-Cbixw9Yo.js";import"./useControlledState-BE2AOUIF.js";import"./Collection-C1Fkd8Xr.js";import"./CollectionBuilder-CBDSTuoJ.js";import"./SelectionIndicator-CLj4WkbT.js";import"./Separator-CkUHVVyK.js";import"./SelectionManager-BpH8C0of.js";import"./useEvent-DPuiGjqT.js";import"./FocusScope-BFAEdpe6.js";import"./ColumnLayout-Cevjkjv5.js";import"./Avatar-Dgp8OFus.js";import"./AlertIcon-BZwyMfyF.js";import"./Image-Dk9sOsZT.js";import"./Link-DvwNgxRE.js";import"./ButtonView-CnxufJpx.js";import"./ContextMenuTriggerView-DRRaGFv-.js";import"./ContextMenuTrigger-BOTMb5f1.js";import"./OverlayTrigger-scn-DxI7.js";import"./ControlledNotification-DddFzpg9.js";import"./OverlayContextProvider-C8Nzf3Jv.js";import"./FieldError-DC6xH_3a.js";import"./FieldError-D4VyS34i.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-3AaEPCkk.js";import"./Heading-Dmp-704c.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-BJNwWy_2.js";import"./Input-Dnb568Ti.js";import"./useMakeFocusable-C5ORXLqM.js";import"./EmulatedBoldText-C-FDCcHS.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const Fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
