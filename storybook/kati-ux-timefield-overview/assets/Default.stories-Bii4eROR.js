import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BdpSHsi2.js";import{F as t}from"./FileDropZone-DAnPqcOI.js";import{S as c}from"./Section-D2ryjfsf.js";import{F as d}from"./FileCardList-_EvM6ffw.js";import{F as u}from"./FileCard-BxVT9m_O.js";import{u as b,F as I,t as T}from"./Form-o8Hv4TZN.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-Ck-dCMmD.js";import{A as w}from"./ActionGroup-D_Subz9Z.js";import{k as x,l as W}from"./IconWarning-BSENZVjr.js";import{H as F}from"./Heading-BAWMNhRX.js";import{F as f}from"./FileField-Dv_cTJaj.js";import{T as E}from"./Text-C_vlmuWy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./IllustratedMessage-DWnG8PmR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CIZeAOFl.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-D2h4VCHW.js";import"./index-DU8gk_nc.js";import"./index-lEnnwJps.js";import"./utils-q_Aud5Js.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DtGJyZhh.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./useFocus-4XTC7e6o.js";import"./useCollator-CmZhdF0V.js";import"./context-C-2WHVw-.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./Button-B8HIYCal.js";import"./ProgressBar-Dwuqfbjf.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mDFtgnbt.js";import"./useFocusRing-DY5AGIis.js";import"./useFocusable-BXcKiciC.js";import"./VisuallyHidden-D-Ys6Nju.js";import"./ContextMenuSection-B-yzo5fW.js";import"./Action-Zz2-kEJ2.js";import"./context-1LaTWKjg.js";import"./useStatic-Cv2Iz_FJ.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-e09hfJ4g.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CnnCEkMG.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-Czdks72e.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-CgAMQp3e.js";import"./CollectionBuilder-DkA--_MS.js";import"./Separator-Dc9-x765.js";import"./SelectionManager-ClU3Y9Vn.js";import"./useEvent-C_OiV_rL.js";import"./FocusScope-D_x47-q0.js";import"./ColumnLayout-6P7WKbHy.js";import"./Avatar-B2S1qqMx.js";import"./AlertIcon-CPLbe5CT.js";import"./Image-C1kYk5oB.js";import"./Link-BBaXRKHG.js";import"./OptionsButton-B_4gp5D0.js";import"./ButtonView-DN4RHDMG.js";import"./ContextMenuContent-Ky7i_bKZ.js";import"./Popover-B5EG5rN5.js";import"./DialogTriggerView-CktVJ2wG.js";import"./Switch-mACUIOPw.js";import"./Label-DFB-kMww.js";import"./useToggleState-C8sObcIl.js";import"./useFormReset-B9LhY6oC.js";import"./FieldError-O9XmEr2t.js";import"./FieldError-D2eBwE7I.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-9Ni698GW.js";import"./Heading-PKR8zMP8.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-BP6joqgG.js";import"./Input-Dom3MqAg.js";import"./EmulatedBoldText-DOyoRrwd.js";const dr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const ur=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ur as __namedExportsOrder,dr as default};
