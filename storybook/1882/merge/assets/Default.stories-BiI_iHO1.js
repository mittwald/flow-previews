import{r as h,j as e}from"./iframe-CqOqoVaP.js";import{F as t}from"./FileDropZone-BiNc2FMr.js";import{S as c}from"./Section-2cs3PTPD.js";import{F as d}from"./FileCardList-DiX2cK5Q.js";import{F as u}from"./FileCard-qcTz-tHN.js";import{u as T,F as Z,t as _}from"./Form-Nmzpv4iw.js";import{B as s}from"./Button-CLlHTQEG.js";import{A as b}from"./ActionGroup-DjMrk1wi.js";import{$ as x,a0 as k}from"./IconWarning-Bl-oEACJ.js";import{H as F}from"./Heading-CO3GEgfZ.js";import{F as f}from"./FileField-Bn_wHb6U.js";import{T as U}from"./Text-B3-X_MJa.js";import"./IllustratedMessage-B8dDnJ5w.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-1TKyLHhH.js";import"./mergeRefs-CelTEQRC.js";import"./index-OFJ9qM8_.js";import"./utils-CLjii6jw.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-cqx9MXzt.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BbxdwBsw.js";import"./useFocus-B9OFNFcs.js";import"./useCollator-C8Ow2U1A.js";import"./context-V257UCTc.js";import"./useLocalizedStringFormatter-Cmj_M29U.js";import"./Button-C385LXs-.js";import"./ProgressBar-C7nzlf9n.js";import"./Label-DmkwH-X_.js";import"./Hidden-G9XKC0s_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-bNRByjMC.js";import"./useFocusRing-BUAA1D8N.js";import"./useFocusable-BW0s8v46.js";import"./VisuallyHidden-BthzWCih.js";import"./ContextMenuSection-uq9F03so.js";import"./Action-fJ1CcCf_.js";import"./context-DEmZbP6Z.js";import"./useStatic-BhcqT1RN.js";import"./browser-5vSgihvA.js";import"./getActionGroupSlot-D2CKZ7h6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C3VX0NXb.js";import"./RSPContexts-D4Iw314Z.js";import"./OverlayArrow-Demj6cv0.js";import"./useControlledState-BdCCPWsc.js";import"./Collection-PuGMBXVn.js";import"./CollectionBuilder-q1IRq8KF.js";import"./Separator-5LsX3nzm.js";import"./Group-Cl8UGCCk.js";import"./SearchField-AywMrJlM.js";import"./FieldError-Db8jl934.js";import"./Form-DfmQoqyq.js";import"./useTextField-DA4mJlaO.js";import"./useFormReset-DvIrrZd5.js";import"./TextField-DbkzlANK.js";import"./useEvent-HRbQaI7K.js";import"./SelectionManager-DbaPsgiJ.js";import"./FocusScope-C_8IMyFN.js";import"./ColumnLayout-D7MR_7g9.js";import"./Avatar-BTOgluYo.js";import"./AlertIcon-Czl606C7.js";import"./Image-CT4pXy-C.js";import"./Link-CMyIQwoS.js";import"./ButtonView-CW59tH2E.js";import"./ContextMenuContent-3Kww7366.js";import"./Popover-yINnB5RN.js";import"./DialogTriggerView-DwJ6gTTr.js";import"./Switch-DksrkWLf.js";import"./Label-CXX9Ul6V.js";import"./useToggleState-TPr3ZkoU.js";import"./FieldError-EM0a2FXb.js";import"./LoadingSpinner-ABbum_Xg.js";import"./Heading-DhNp_5ef.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CUXBtHhG.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=T(),i=_();return e.jsxs(Z,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,I,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const ar=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ar as __namedExportsOrder,mr as default};
