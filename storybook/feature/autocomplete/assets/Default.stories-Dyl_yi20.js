import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BdpSHsi2.js";import{F as t}from"./FileDropZone-CWmOrl4B.js";import{S as c}from"./Section-BDT7DXo8.js";import{F as d}from"./FileCardList-C2EspL4i.js";import{F as u}from"./FileCard-BsJFJC8D.js";import{u as b,F as I,t as T}from"./Form-D_uWAlH_.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-CVoweWzs.js";import{A as w}from"./ActionGroup-6HUed_9K.js";import{k as x,l as W}from"./IconWarning-CiFeQHgm.js";import{H as F}from"./Heading-D8NauHzH.js";import{F as f}from"./FileField-CoOFaMLU.js";import{T as E}from"./Text-DaVmdfmo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./IllustratedMessage-B_nOxM_t.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C0HkH0C2.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-dMtj3Bfb.js";import"./index-DU8gk_nc.js";import"./index-lEnnwJps.js";import"./utils-q_Aud5Js.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DtGJyZhh.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./useFocus-BK-u4cdi.js";import"./useCollator-CmZhdF0V.js";import"./context-C-2WHVw-.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./Button-DnnpdS5P.js";import"./ProgressBar-Dwuqfbjf.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cx3ZvVfI.js";import"./useFocusRing-DHXckIXO.js";import"./useFocusable-BeYVpnFb.js";import"./VisuallyHidden-CRdqyLT8.js";import"./ContextMenuSection-0FJ8nbCm.js";import"./Action-D4kwjQSd.js";import"./context-1umnUunr.js";import"./useStatic-CRb9xAUr.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-BShjwlsB.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CleslRVA.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-BHF1MVGt.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-oJzNy84A.js";import"./CollectionBuilder-C2AfWA97.js";import"./Separator-D8lRHJ5d.js";import"./Input-DKshHGKQ.js";import"./SearchField-BPqcjU2c.js";import"./FieldError-rzQ5ghoP.js";import"./Form-Ckmgkmz_.js";import"./Group-46VfC_jx.js";import"./useTextField-CNVbrZkS.js";import"./useFormReset-B9LhY6oC.js";import"./TextField-C3T3nKGe.js";import"./SelectionManager-CRLw705v.js";import"./useEvent-C_OiV_rL.js";import"./FocusScope-D5hiFDC1.js";import"./ColumnLayout-BwlWh1pD.js";import"./Avatar-D8y4GRuo.js";import"./AlertIcon-Bq64JPxf.js";import"./Image-CvYB8waC.js";import"./Link-0ngywQSj.js";import"./OptionsButton-B3Z-TAXI.js";import"./ButtonView-D-wZmlv8.js";import"./ContextMenuContent-D6HSuwzm.js";import"./Popover-JseoF9LV.js";import"./DialogTriggerView-B4wfGNQ3.js";import"./Switch-DHgiUYxx.js";import"./Label-J8V5jv33.js";import"./useToggleState-DfK-P6lK.js";import"./FieldError-MpHe02cY.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-CuaRU4Lr.js";import"./Heading-PKR8zMP8.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DOyoRrwd.js";const hr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const xr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,xr as __namedExportsOrder,hr as default};
