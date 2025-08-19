import{r as h,j as e}from"./iframe-_AHHYLe8.js";import{F as t}from"./FileDropZone-CPAzP_eN.js";import{S as c}from"./Section-DvRvDn3Z.js";import{F as d}from"./FileCardList-C4sXtvew.js";import{F as u}from"./FileCard-3fH4O3C2.js";import{u as O,F as T,t as _}from"./Form-CmCMiWEO.js";import{B as s}from"./Button-DpBb7dXP.js";import{A as b}from"./ActionGroup-CEp8kbRn.js";import{Y as x,Z as k}from"./IconWarning-CK_fmTss.js";import{H as F}from"./Heading-X58ltJnb.js";import{F as f}from"./FileField-D060ww3_.js";import{T as U}from"./Text-Cmtv_jKA.js";import"./IllustratedMessage-B09EU6bW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CHGKeBFG.js";import"./mergeRefs-1cSVj6Oa.js";import"./index-Bz79hXTU.js";import"./utils-q-IwrKfZ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bojy_plc.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-lAnn0GIu.js";import"./useFocus-Cc4rXbR6.js";import"./useCollator-motRCGH3.js";import"./context-CUyryTbq.js";import"./useLocalizedStringFormatter-Ci9IX6ka.js";import"./Button-C5j2D-85.js";import"./ProgressBar-Djy6cDSn.js";import"./Label-tq8rl8zN.js";import"./Hidden-BCt71K2Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DSHe1cmn.js";import"./useFocusRing-BzxKD0KU.js";import"./useFocusable-DpxzpP9y.js";import"./VisuallyHidden-WDbGyUVH.js";import"./ContextMenuSection-BJaXJ97q.js";import"./Action-DvAxFpQR.js";import"./context-CggRfmhL.js";import"./useStatic-D0qKbiKB.js";import"./browser-BP_Bp9A3.js";import"./getActionGroupSlot-NbcIocov.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CHTGTlq0.js";import"./RSPContexts-D87DkYMD.js";import"./OverlayArrow-QRBdoqIe.js";import"./useControlledState-Ck4hxHjX.js";import"./Collection-CCW92VXm.js";import"./CollectionBuilder-ZwH2Lf2j.js";import"./Separator-Dnk3E0kw.js";import"./Group-DIV0b_ks.js";import"./SearchField-BDX95NUI.js";import"./FieldError-7uZDpm9k.js";import"./Form-1aZb-GsH.js";import"./useTextField-DtgE5gD9.js";import"./useFormReset-BXtaLb8e.js";import"./TextField-D1FfviRQ.js";import"./useEvent-Chot4vqs.js";import"./SelectionManager-BurdSYdt.js";import"./FocusScope-s_Xca6uO.js";import"./ColumnLayout-Cxljc7qR.js";import"./Avatar-u54SOV_h.js";import"./AlertIcon-DQ1Eq19D.js";import"./Image-BrKl7dK9.js";import"./Link-BvyDULsm.js";import"./ButtonView-DImS9OAk.js";import"./ContextMenuContent-DZwGiOem.js";import"./Popover-D4dqet6R.js";import"./DialogTriggerView-v_JnIB7x.js";import"./Switch-upjwOqp8.js";import"./Label-CmGN6q6h.js";import"./useToggleState-DAg0Gp2k.js";import"./FieldError-DuMkkaZm.js";import"./LoadingSpinner-DRmJrHkB.js";import"./Heading-C2hoDKBp.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DqfdeQcp.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const ar=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ar as __namedExportsOrder,mr as default};
