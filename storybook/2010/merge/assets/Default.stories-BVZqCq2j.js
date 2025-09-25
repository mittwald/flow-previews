import{r as x,j as e}from"./iframe-DSMxFmCo.js";import{F as t}from"./FileDropZone-QMxA_ZBf.js";import{S as u}from"./Section-DxscDnFL.js";import{F}from"./FileCardList-C3CEAyFs.js";import{F as f}from"./FileCard-CK8wCnP9.js";import{u as E,F as W,t as G}from"./Form-BPy5K8ye.js";import{B as s}from"./Button-B4iADtHJ.js";import{A as M}from"./ActionGroup-BvInu9__.js";import{_ as j,$ as q}from"./IconWarning-BVk6tlGE.js";import{H as g}from"./Heading-5UcSZr4b.js";import{F as h}from"./FileField-d7-jeD-l.js";import{T as v}from"./Text-D_0LfN4x.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BIUbw06o.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DVyBiVg_.js";import"./mergeRefs-R9qg0vBI.js";import"./index-GrlXgZoZ.js";import"./utils-V6gMnCgM.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CUE1Abh-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CGRenFpR.js";import"./useFocus-rqOLNBQE.js";import"./useCollator-CouZLuEw.js";import"./context-64LigRkb.js";import"./useLocalizedStringFormatter-Dk8jStlZ.js";import"./Button-a5-NScD1.js";import"./ProgressBar-X6kaEndn.js";import"./Label-BX8mTcFT.js";import"./Hidden-D2GOYXns.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CpWBfHNM.js";import"./useFocusRing-B0fHsvyn.js";import"./useFocusable-CWTiV4pp.js";import"./VisuallyHidden-D9pE8D_t.js";import"./ContextMenuSection-DgCSjc-k.js";import"./Action-BWiQvpwE.js";import"./context-eOFRYD3C.js";import"./useStatic-Bf1fNjch.js";import"./browser-R7FwPwL5.js";import"./getActionGroupSlot-DXwV-t9Z.js";import"./dynamic-BKY_zed6.js";import"./Popover-JtzXSHjL.js";import"./DialogTriggerView-CRRade0J.js";import"./RSPContexts-yTBIWgKj.js";import"./ClearPropsContextView-DgWNLgLQ.js";import"./useControlledState-Bd9qDCZc.js";import"./FocusScope-DaPMN8_C.js";import"./Collection-BjFS4X2Q.js";import"./CollectionBuilder-Csq46UyD.js";import"./context-n-efbKpz.js";import"./Separator-BzacB-Ho.js";import"./SelectionManager-DnqUUNzH.js";import"./useEvent-CC0ROtua.js";import"./Switch-BIdyu98b.js";import"./Label-BPw_TKwN.js";import"./useToggleState-D35b7CDH.js";import"./useFormReset-BfhIxfM0.js";import"./ColumnLayout-CTzIYbR0.js";import"./Avatar-DT5Cxd6K.js";import"./AlertIcon-BFcWnAaT.js";import"./Image-D2OKb4Zd.js";import"./Link-D0xcpw-3.js";import"./ButtonView-BABbJnWM.js";import"./ContextMenuTriggerView-Dd8-5v4e.js";import"./FieldError-CcqfZkr-.js";import"./FieldError-BW2b_CY4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DrTN5ZSN.js";import"./Heading-Bt4IwNny.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-64eNngsb.js";import"./Input-BJPqjrJL.js";import"./EmulatedBoldText-DCelI_Fa.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,Fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,fr as __namedExportsOrder,Fr as default};
