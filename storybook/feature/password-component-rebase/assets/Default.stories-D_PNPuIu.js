import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BdpSHsi2.js";import{F as t}from"./FileDropZone-Dd_3gOQX.js";import{S as c}from"./Section-CD0M3WNI.js";import{F as d}from"./FileCardList-DYDlPdsN.js";import{F as u}from"./FileCard-MOKmq-2i.js";import{u as b,F as I,t as T}from"./Form-B6ROq0KS.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-DEihIoSf.js";import{A as w}from"./ActionGroup-CXA_m6G-.js";import{k as x,l as W}from"./IconWarning-DEZJPU1I.js";import{H as F}from"./Heading-CWinRhLe.js";import{F as f}from"./FileField-fO7zXyAX.js";import{T as E}from"./Text-DjG_soJV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./IllustratedMessage-DueTlc-v.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Czemy8wA.js";import"./mergeRefs-C3hk6Bw5.js";import"./iframe-Bya_mRtM.js";import"./index-d29qW9Ar.js";import"./index-lEnnwJps.js";import"./utils-k5T1Axi4.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CCjUyjXh.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BTthEqzH.js";import"./useFocus-DtkvuJ2b.js";import"./useCollator-B6tK7UUT.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./Button-DMR6N1Wj.js";import"./ProgressBar-CwgzMXGv.js";import"./Label-B5BNuFXH.js";import"./Hidden-RoZfe91Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D8pXfMRf.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-BgmoI-LE.js";import"./VisuallyHidden-DvRlzb5d.js";import"./ContextMenuSection-Ar-I7YdV.js";import"./Action-7KqSDIwN.js";import"./context-GN4I60iU.js";import"./useStatic-DRV-35zj.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-lQIKAKHp.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-9stIWeEN.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-C2rzDuF5.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-CmGWUGtX.js";import"./CollectionBuilder-CZDODqbS.js";import"./Separator-Cy_qZ13i.js";import"./SelectionManager-CAHkB1hu.js";import"./useEvent-CVP7MjLG.js";import"./FocusScope-D-amBDVp.js";import"./ColumnLayout-TKNprtuS.js";import"./Avatar-BGFFWJwG.js";import"./react-children-utilities-DvaK_N8_.js";import"./AlertIcon-DA1D7mPe.js";import"./Image-CU_cT7HD.js";import"./Link-CxHGczjW.js";import"./OptionsButton-jlu4cjMM.js";import"./ButtonView-BliokhFW.js";import"./ContextMenuContent-CbdFzKO4.js";import"./Popover-OyGdUvrR.js";import"./OverlayTrigger-DPA_fO7p.js";import"./DialogTriggerView-D65wKyAt.js";import"./Switch-B3lo2Kwf.js";import"./Label-C8DgZaQt.js";import"./useToggleState-CJsTx8sI.js";import"./useFormReset-dEmc_A_j.js";import"./FieldError-BnB8pzEZ.js";import"./FieldError-CWvjII8X.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-8RMAA4u4.js";import"./Heading-Cb89GJ6J.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-BVpaaUUN.js";import"./Input-Cd1RXmlA.js";import"./EmulatedBoldText-DOyoRrwd.js";const ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,H,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(H=l.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var k,A,Z;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const Fr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
